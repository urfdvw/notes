# CircuitPython Fancy Console
<!--
#javascript, #circuitpython, #IDE, #serial
-->
A serial console for CircuitPython with Readability and Usability tools

## Scoop and Goal
<!--
#20230213@date,
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


## Reference
- [github repo](https://github.com/urfdvw/CircuitPython-Fancy-Console)