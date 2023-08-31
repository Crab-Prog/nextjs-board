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