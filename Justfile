run:
    pnpm run dev

install *pkg:
    just i {{pkg}}

i *pkg:
    pnpm install {{pkg}}

gen-api:
    pnpm run gen-api