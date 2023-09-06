This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Gestion des erreurs
La fonction Error prend en compte 2 paramètres, notamment `error` qui ne doit pas être utilisé en front pour afficher des informations mais uniquement pour le dev mode, car elle disparaît en production.
Le deuxième paramèters est `reset` qui permet de relancer la page lorsqu'il n'y a plus de soucis, l'erreur s'enlève.

## Informations
Rendu statique par défaut.
Un rendu en streaming qui fait apparaître les éléments au fur et à mesure qu'ils sont disponibles.
On peut ajouter un `Suspense` avec un Loader par exemple.
Les éléments comme le Header, Nav, Footer, qui n'ont pas de datas vont être rendu en premier, puis ensuite ceux qui ont nécessité des requêtes.

On créé les routes dans le dossier app.<br>
Par exemple, si on créé un dossier `boards/` dans lequel on a 2 autres dossiers `[boardId]` et `new` et qu'on ajoute des fichiers `page.tsx` pour chacun d'eux alors on aura:<br>
On aura accès à 2 nouvelles routes par url `http://localhost:3000/boards/new` et `http://localhost:3000/boards/4` .<br>
S'il n'y a pas ce fichier, alors le contenu ne sera pas disponible via le navigateur.

## DB - PRISMA
Pour envoyer les changements de la bdd `npx prisma db push`
Faire une migration : `npx prisma migrate dev --name initial-state`

## Material UI
Il est possible d'ajouter Material UI, il faut installer:
`npm i @emotion/react @emotion/server @emotion/styled @mui/material`

- Créer un dossier "utils" dans lequel on va avoir la création de notre thème et l'utilisation d'Emotion cache pour extraire les styles pour le html.
```tsx theme.tsx
'use client';
import { createTheme } from '@mui/material/styles';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#fcba03',
    },
  },
});

const clientSideEmotionCache = createEmotionCache();

export default function ThemeRegistry({ children,
  emotionCache = clientSideEmotionCache, }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
```

```ts createEmotionCache.ts
import createCache from "@emotion/cache";

export default function createEmotionCache() {
  return createCache({ key: "css", prepend: true });
}
```

- Puis il faut bien ajouter le ThemeRegistry autour du body dans `layout.tsx`
```tsx
    <ThemeRegistry>
      <body className={inter.className}>
      {children}
      </body>
    </ThemeRegistry>
```

## API
Il est possible de faire appel à une API supplémentaire en ajoutant les informations dans les variables d'environnement .env<br>
Les variables doivent être déclarées de cette manière : `NEXT_PUBLIC_NAME=`