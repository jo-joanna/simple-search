This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Clone the repository.

Then, run the development server:

```bash
yarn install
# after
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

This project implements a search functionality using API from openLibrary.
It allows you to search books with the titles, the descriptions and the covers (images).

I include a link to amazon search based on the returned titles of the books. It uses `encodeURIComponent` to prevent errors on titles and use %20 inbetween.

The components are styled with the library styled-components and have accessibility properties.
Redux Toolkit and RTKQ are used.

There are Components Unit Tests, Eslint as well as typescript check on yarn build.
