#!/bin/bash
# Encode gallery clips (start..end, sped up) at 720p + posters; run on a compute node.
FF=/home/chengzhiliu_google_com/code/eval_bench/tools/ffmpeg-static/ffmpeg
S=/home/chengzhiliu_google_com/code/streamvibe_site
O=$S/static/video/gallery; mkdir -p $O
while IFS=$'\t' read -r k v st e sp; do
  $FF -nostdin -loglevel error -y -ss $st -to $e -i "$v" -vf "setpts=PTS/$sp,fps=30,scale=-2:720:flags=lanczos,pad=ceil(iw/2)*2:ceil(ih/2)*2" -an \
    -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart $O/$k.mp4 && \
  $FF -nostdin -loglevel error -y -ss 1.5 -i $O/$k.mp4 -frames:v 1 -vf scale=-2:360 -q:v 4 $O/$k.jpg &
done < $S/_work/encode.tsv
wait; du -sh $O; ls $O | wc -l
