# A test on React Projects

<!--
#20230413@date, #React, #Frontend, #Cpyolide
-->

Following the tutorial [Learn React With This One Project](https://youtu.be/Rh3tobg7hEo)

my repo: https://github.com/urfdvw/react-tests
# Setup env
- install node and npm
- `npm create vite@latest` create the project
- moved everything to the root of git repo
- `npm i` install dependency
- `npm run dev` run locally

build
- there is no need to build locally
    - instead, setup github actions

deploy
- following: https://vitejs.dev/guide/static-deploy.html#github-pages
- where `base` is set in the following way
```js
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', 
})
```
    - ref: https://github.com/vitejs/vite/issues/2114
- set github action based on https://vitejs.dev/guide/static-deploy.html#github-pages
- in github page setting, deploy from git actions
    - ref: https://stackoverflow.com/a/73967433/7037749