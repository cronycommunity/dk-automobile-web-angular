echo "start"

 docker build -t angular-dk-automobile . || true

 docker stop dk-automobile-angular-web || true
 docker rm dk-automobile-angular-web || true

 docker run --name dk-automobile-angular-web -d --memory=500m --cpus="1" -p 92:80 --rm angular-dk-automobile

echo "end"