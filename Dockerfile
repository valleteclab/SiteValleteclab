# Servidor estático leve para publicar o site (Railway, Fly, Docker etc.)
FROM caddy:2-alpine
WORKDIR /srv
COPY index.html cartao.html ./
COPY css ./css
COPY js ./js
COPY assets ./assets
COPY Caddyfile /etc/caddy/Caddyfile
# Railway injeta a porta em $PORT (lida no Caddyfile)
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
