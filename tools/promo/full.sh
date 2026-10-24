#!/bin/bash
# StreamVibe-named re-render of talk/scripts/promo2 (compute node).
FF=/home/chengzhiliu_google_com/code/eval_bench/tools/ffmpeg-static/ffmpeg
export LD_LIBRARY_PATH=~/.local/chromelibs/root/usr/lib/x86_64-linux-gnu NODE_PATH=/home/chengzhiliu_google_com/code/talk/node_modules
cd /home/chengzhiliu_google_com/code/talk
rm -rf /home/chengzhiliu_google_com/code/streamvibe_site/_work/promo/out/frames
N=16
for i in $(seq 0 $((N-1))); do node /home/chengzhiliu_google_com/code/streamvibe_site/_work/promo/render.js --worker $i --of $N & done
wait
$FF -nostdin -loglevel error -y -framerate 30 -i /home/chengzhiliu_google_com/code/streamvibe_site/_work/promo/out/frames/%05d.jpg -c:v libx264 -preset slow -crf 24 -pix_fmt yuv420p -movflags +faststart /home/chengzhiliu_google_com/code/streamvibe_site/_work/promo/out/StreamVibe_promo.mp4
$FF -nostdin -loglevel error -y -ss 4 -i /home/chengzhiliu_google_com/code/streamvibe_site/_work/promo/out/StreamVibe_promo.mp4 -frames:v 1 -q:v 3 /home/chengzhiliu_google_com/code/streamvibe_site/_work/promo/out/promo_cover.jpg
ls -la /home/chengzhiliu_google_com/code/streamvibe_site/_work/promo/out/StreamVibe_promo.mp4
