# Feature
- This is the terminal part of the new Online IDE
- Using tabs to switch between 3 functions (by priority)
    - Widgets (virtual devices? name not decided)
    - Fancy console
    - pure text terminal
- Widgets
    - create on demand
    - remove by button
    - pop up to floating windows
    - save/load widgets as file to microcontroller
- Fancy console
    - list of blocks
    - GUI
    - no keyboard shortcuts
- pure text terminal
    - one line direct send or send multiple lines via exec
    - history retract
    - buttons and keyboard shortcuts for Ctrl-C and Ctrl-D

# Engineering Log

## stream or not
On the javascript side,
it is OK to not treat the output as a stream.
In other words, the displayed stuff can be computed from accumulated output.
This method is strangely efficient thanks to react.

## how to encapsulate logic
In react, it is common to only pass function handles from parent component, not the reverse.
So, it is very easy that most of the logics envoloving multiple componentes remain in the App component.
However this is against the goal of encapsulation.

The solution is to encapsule the logice in the hooks, not components.
hook is like a component without any ui output,
instead, it returns states and function handles.

So the function handle can be used in the following way
hook -> parent component -> child component

## workflow for each new widget
- create the widget component in a new file
    - test it by adding it directly to the app
- add example in JSON
    - `const [widgets, setWidgets] = useState([` 
    - `const json2WidgetContent = (wid) => {`
    - remove the component added in the previous step
    - comment the example after success
- add creation diag parameters
    - Obj
    - Title
    - `const handleCreateWidgetMenu = (name) => {`
- In CreatiWidget
    - add to `const supportedWidgets = [`

## project structure
Separate logic in different level
- received text -> structureal text
- structural text -> object list based on user input
- object list -> components based on styling

## Notes on how to parse the text in structural text
- Fancy console should drop the support for  CPY7
- Connected variable should also drop support for CPY7
- indicator of CPY<8 is used to hide the functions that are not supported.

## whether to add line_end after CV_END
- adding line_end can help divide 2 parts in the stream bracket matcher
    - so send line end from js to py
- adding line end can mess up with the out put if hide cv data in console
    - so not send line end from py to js

## title bar should be below the tab selection
In other words, the title bar is always visible

# Issues
- disconnect does not work, but good enough to proceed to work on the connected variables.

# TODOs
- use the same component but different handle functions to create widgets
    - all with display name and variable name

