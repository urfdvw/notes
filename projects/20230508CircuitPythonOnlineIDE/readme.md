# Incremental changes
<!-- 
#20230508@date
-->

Added 2 things from [CircuitPython-Fancy-Console-archieve](https://github.com/urfdvw/CircuitPython-Fancy-Console-archieve/blob/main/scripts/serial_processor.js)
- [The better matcher, which could solve the title bar issue](https://github.com/urfdvw/CircuitPython-online-IDE/commit/a97f7832b5b02df02dbab0615cc60519855dff22)
- [The better display refresh cycle](https://github.com/urfdvw/CircuitPython-online-IDE/commit/6d1dbb80ce71d44e97ebfee6c09e8874f151ca91)

[Tested the same number dump in the React Console,](https://github.com/urfdvw/CircuitPython-Fancy-Console/commit/6472af2ff87798f061a24770497bf20aa53344dc)
- The speed is faster
- The CPU usage is much lower
- HOWEVER, it crashed after a while
- I added a slicer in the output so it only hold 100,000 characters,
    - it is very fast here on the M1 mac, no crashes, not sure about windows.

conclusion, use react is better than my fancy disply refresh hack