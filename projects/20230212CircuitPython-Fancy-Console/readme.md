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

## log

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


## Reference
- [github repo](https://github.com/urfdvw/CircuitPython-Fancy-Console)
    - [Page](https://urfdvw.github.io/CircuitPython-Fancy-Console/)