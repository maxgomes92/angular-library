# Para desenvolver

Execute `npm run build:watch` e crie um link com `cd dist/my-lib && npm link`.

Vá até o projeto `angular-project` e rode `npm link my-lib`, o que vai gerar um link dentro do node_modules direto com a `/dist/my-lib`.

Quando terminar, rode `npm install` dentro do `angular-project`.

# Para publicar

Execute `npm run release:my-lib` para criar um arquivo `.tgz` na raiz. Commit e push.
