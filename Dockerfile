# Servidor estático leve para publicar o site (Railway, Fly, Docker etc.)
FROM caddy:2-alpine
WORKDIR /srv
COPY index.html cartao.html ./
COPY css ./css
COPY js ./js
COPY assets ./assets
# Railway injeta a porta em $PORT; fora dele usa 8080
CMD caddy file-server --root /srv --listen :${PORT:-8080}
