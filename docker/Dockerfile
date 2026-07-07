FROM node:22-alpine AS development

WORKDIR /app

RUN apk add --no-cache bash

# Install pnpm langsung
RUN npm install -g pnpm@10.15.1

COPY docker/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

CMD ["pnpm", "dev", "--host", "0.0.0.0"]