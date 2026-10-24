#!/bin/bash
# Trim + speed up the 10 talk demo clips for the web; run on a compute node.
set -u
FF=/home/chengzhiliu_google_com/code/eval_bench/tools/ffmpeg-static/ffmpeg
T=/home/chengzhiliu_google_com/code/talk
O=/home/chengzhiliu_google_com/code/streamvibe_site/static/video
python3 - <<'PY' > /tmp/sv_clips.tsv
import json
for d in json.load(open('/home/chengzhiliu_google_com/code/talk/video/demos.json')):
    print(d['key'], d['start'], d['end'], d['speed'], sep='\t')
PY
while IFS=$'\t' read -r k s e sp; do
  $FF -nostdin -loglevel error -y -ss $s -to $e -i $T/media/clips/$k.mp4 \
    -vf "setpts=PTS/$sp,fps=30,scale=-2:540" -an -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart $O/$k.mp4 &
done < /tmp/sv_clips.tsv
wait
for k in $(cut -f1 /tmp/sv_clips.tsv); do $FF -nostdin -loglevel error -y -i $O/$k.mp4 -frames:v 1 -q:v 4 $O/$k.jpg; done
# hero background: first 12 s of the talk's video wall, small and dim-free
$FF -nostdin -loglevel error -y -t 12 -i $T/video/wall.mp4 -vf "scale=1280:-2,fps=24" -an -c:v libx264 -preset slow -crf 30 -pix_fmt yuv420p -movflags +faststart $O/wall.mp4
$FF -nostdin -loglevel error -y -i $O/wall.mp4 -frames:v 1 -q:v 5 $O/wall.jpg
ls -la $O
