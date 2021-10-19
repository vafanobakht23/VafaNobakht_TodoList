npx create-react-app vafanobakht_todolist --template typescript
npm install tailwindcss postcss autoprefixer postcss-cli -D
npx tailwindcss init tailwindcss-config.js -p
npx tailwindcss init --full
npm install react-icons --save
npm install prettier -D
npm i eslint-config-airbnb-typescript
npm i @typescript-eslint/parser @typescript-eslint/eslint-plugin @nrwl/eslint-plugin-nx eslint-config-prettier
npm i eslint-plugin-prettier


Scripts in package.json:
 "scripts": {
    "start": "react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "watch:css": "postcss src/styles/tailwind.css -o src/styles/output.css -w",
    "build:css": "postcss src/styles/tailwind.css -o src/styles/output.css -w",
    "lint": "eslint --fix --ext .tsx,.ts ./src"
  },



After clone from github:
first: npm install
then: npm run start