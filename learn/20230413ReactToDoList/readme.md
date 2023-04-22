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

<!--
@20230422@date
-->

question: what is the difference between the handler of add and toggle
- add handler is a proper event handler
- while toggleTodo is just a regular function tha is no taking any parameters
- the reason for this difference is that the toggle handler want to take more parameters than just the event,
    - in this case in the example, the id is also passed in to the handler.
    
Thought: however this is not very necessary in this case as the id is also in the event target.

Experiment result: key is not publicly accessible
- ref: https://stackoverflow.com/a/45166371/7037749

try: add id to the component
- the event target is what is changed
    - so the event target is the checkbox

## js learned

```js
(x) => {return y}
```
is the same as 
```js
x => y
```

one line if-eval in js
```js
condition ? return_when_true : return when false
```

update one field in js (ES7, support in react)
```js
{...object, field:newvalue}
```
[ref](https://stackoverflow.com/a/49319842/7037749)

`.closest("li")` can be used to select the `<li>` element from any child,
so that the id can be applied to the li instead of any children