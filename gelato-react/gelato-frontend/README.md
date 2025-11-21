# React + TypeScript + Vite

setup project with vite

- pnpm create vite 
- remove useless files and imports
- setup tailwind css with vite
  - npm install tailwindcss @tailwindcss/vite
  - Add the @tailwindcss/vite plugin to your Vite configuration.
  - Add an @import to your CSS file that imports Tailwind CSS.
    - src\styles\tailwind.css -> @import "tailwindcss";
    - main.tsx --> import ./styles/tailwind.css
    - App.tsx --> <div className="bg-red-100></div> --> ensure tailwind works
    - Make sure your compiled CSS is included in the <head> --> <link href="/src/style.css" rel="stylesheet">
  - add postcss to project --> convert all css we use in our project to old css(backward)
  - npm install tailwindcss @tailwindcss/postcss postcss
  - Add @tailwindcss/postcss to your postcss.config.mjs
- vercel.com
## 


## 

