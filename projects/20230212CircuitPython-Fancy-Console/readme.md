# CircuitPython Fancy Console
<!--
#javascript, #circuitpython, #IDE, #serial
-->
A serial console for CircuitPython with Readability and Usability tools

## Scoop and Goal
<!--
#20230212@date,
-->

Scoop
- should about
    - visual effect of the serial
        - syntax high light
        - section division
    - serial interactions like
        - re-run codeblock
        - re-edit codeblock
- might about
    - learning JS techs such as
        - class
        - module
        - customized elements
- should not touch (will work on in the next stage)
    - any work on the circuitpython side
    - theme
        - don't care too much about color
        - don't care too much about page layout
            - such as windowed UI
    - wedgits
        - Display wedgits like
            - plotter of any kind
            - table display
        - input wedigits like
            - virtual buttons
            - virtual slidebar
        - markdown integration
    - IDE functions
        - editor related function
        - command window functions
            - such as history retraction

Goal
- creat a standalone serial console in the frontend that have
    - section division
        - divide code run and repl
        - in code run divide each run
        - in repl divide each cycle
    - output high light
        - differenciate input echo and output
        - syntax highlight if python code
- backward compatability with plain text console
    - don't hijack/abuse/repurpose/hack the current console
        - every improvement should  asssit current fucntions
    - (with that said, in the wedgits project in the future, this rule will be broken)

## Design
- To MCU
    - Ctrl-C and Ctrl-D short cuts are universal instead of bounded to editors
    - Any possible Ctrl command should appear as buttons instead of just text info 
    - serial out should only appear when needed
    - code or input() should be distingurished.
- From MCU
    - Script
        - each run should be a block
            - including start message and done/error message
        - high light input echo
    - system info
        - only appear when they make sense
        - should disappear when next run started
        - info should be replaced by buttons as much as possible
    - REPL
        - each repl session should be surrounded by a box
            - logic is big boxes are divided by system info
        - each loop should be surrounded by a smaller box
        - loop block actions
            - should not be changed (including in/out put) in place
            - reedit: copy the code block to current session
            - rerun: copy the code block to current session and run immediately
        - history is not more useful than scroll up and rerun/reedit previous blocks
            - so re design the history function to go through all history blocks
- MISC
    - and empty repl session could be used to block unexpected re-run triggered by file save
        - can be used to trigger a run after multiple files are changed
        - can be used to block some strange mac file system behavior


## log
<!--
#20230212@date,
-->

- Set up a bare bone framework that only have the serial console
    - [commit](https://github.com/urfdvw/CircuitPython-Fancy-Console/commit/3e25bd1e4697c622c26a8f8ab0110290ecf09eca)
    - not to be distracted by other IDE issues
    - page built
- add dom to the fancy_console and make it ace editor
    - in this way, add code blocks or text blocks
    - [commit](https://github.com/urfdvw/CircuitPython-Fancy-Console/commit/66d52bc69ec98f4a6b1d803af4a6d69a9f1f6972)
- TODO processor interface need to be redesigned,
    - currently, not able to capture structured echo data.
    - need to expose branch data and so on.
- TODO some weird thing happened to title bar
    - ![](2023-02-12-15-42-36.png)


## Reference
- [github repo](https://github.com/urfdvw/CircuitPython-Fancy-Console)
    - [Page](https://urfdvw.github.io/CircuitPython-Fancy-Console/)