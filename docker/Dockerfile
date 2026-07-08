FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache bash

RUN corepack enable \
 && corepack prepare pnpm@11.10.0 --activate

RUN pnpm config set store-dir /pnpm/store

COPY docker/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

CMD ["pnpm","dev","--host","0.0.0.0"]