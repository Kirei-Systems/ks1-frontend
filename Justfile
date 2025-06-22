dev:
    pnpm run dev

install *pkg:
    just i {{pkg}}

i *pkg:
    pnpm install {{pkg}}

gen-api:
     npx @hey-api/openapi-ts \
        -i http://localhost:8000/api/schema/ \
        -o app/api \
        -c @hey-api/client-fetch

