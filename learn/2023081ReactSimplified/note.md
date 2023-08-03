# Basic Components
## 10 - JSX Basics
- xml inside JSX are short note for a function call
    - `React.creatElement(type, props, children)`
        - so that it is actually an object, can be stored in variable or pass to funcitons
    - using `{}` to inject js code into jsx
        - using the returned value in `React.creatElement` function
        - string is the only thing that does not need `{}`
        - only js code that are not rendered, not the same as `if` in js
            - `{false}`
            - `{null}`
            - `{undefined}`
- Rules html -> jsx
    - better be closed -> Have to be closed
    - prop names
        - dash `-` word connection -> camelCase
            - except for `data-id` and `aria-label`
        - `class` -> `className`
        - `for` -> `htmlFor`
        - style is a string -> style is an object
## 12 - Props
- there is a prop called `children`
    - which is a jsx variable that contains the inner JSX of the component