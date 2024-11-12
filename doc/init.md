# Installation

init command for chrome extensions dev.

```
$ npm init es6
npm install -D typescript
npm install -D @types/chrome
npx tsc --init
```

# sturcture

```
.
├── dist
│   ...
│
├── node_modules
│   ...
│
├── package-lock.json
├── package.json
├── src
│   ├── content.ts
│   └── manifest.json
└── tsconfig.json      (+)
```

# tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "rootDir": "./src",
    "outDir": "dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```
