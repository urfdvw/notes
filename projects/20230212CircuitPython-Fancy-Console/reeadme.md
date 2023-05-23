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

## for each widget
- a module contains
    - widget component
    - creation component
    - the case/if-else condition that is using the widget component
    - the list menu that is used to creat the component


# Issues
- disconnect does not work, but good enough to proceed to work on the connected variables.
- need to have the microcontroller also use start and ending indicators instead of saperate by line endings.