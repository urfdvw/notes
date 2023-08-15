

# Features

## Top Level UI

### Start guide
- shows up when start the page
- can be skipped
- same functions can be finih

### Menu bar
look
- multiple levels
- click to expand/drill down
- leave the whole menu to hide all expaded menu

function
- open tabs of all kinds
    - if an option is only related to one tab, it should be in the tab not the menu
- connections
    - serial
    - directories
- external links
    - help page
    - references
    - contact

### window management
- the screen is divided into 3 panels (A, B and C)
    - panel A is always there
        - not hidable
        - default to editor
    - panel B split the whole screen (it is either same height or same width as the viewing port)
        - hidable
        - default to folder view
    - panel C and A share the reset of the screen
        - hidable
        - default to serial
- user can choose the location of panels
    - B on the left or on the bottom
    - C on the right or on the bottom
        - or auto, depending on the width
- every function is a tab,
    - a tab can be moved to any panel
        - ideally drag to move tabs
        - or context menu to move
    - a tab can be floated to a window
        - have more tabs visible, not only 3
        - mostly to be used across multiple screens
        - or if user have special preference of panel relative locations
- default opening behaviour
    - all new tabs open to A
    - once a window is opened, remember its panel/windowed state in the settings
        - this setting is not exposed to setting tab
- `ALt + ~` to switch between tabs in panel A
- there are know number of tab kinds
    - unless specified in setting, open in panel A
- for each kind of tab
    - use contex menu to show tutorial video/doc

## Tabs
### Folder View
Look
- (Not here) open/close folder should be in the system level
    - because folder view is not the only place that use the directory handle
- top section: tool bar
    - new folder
    - new file
    - rename
    - delete
    - move
    - open settings
- bottom section: folder tree
    - show files in expandable tree
    - highlight selected
    - (want) right click contact menu
    - (want) drag to move
- settings
    - show/hide `.*` file
    - refresh every {int} seconds
    - sort by (which one is the first)
        - name
        - type
Feature
- gray out binary files
    - cannot select/operate
- touch screen
    - no context menu or drag on mobile version
- refresh ever several seconds


### setting editor
- open json
- generate UI for each field
- jump to specific setting page

### Editor
Basic Functions
- Ace editor + search + python highlighting

ShortCut Functions
- send to repl
    - a line
        - if next line more indented, send a bock
    - selected code
    - a cell
- save
- control signals
    - ctrl-c
    - ctrl-d

Editor indicator
- will show before the tab title if the content of the editor is differenct from the file
    - will block closing the tab if different
    - either save or discard on closing tab
- Highlight current tab (should be a built-in in mui)

Save and run button
- A button to save all
- if no response in 1s, force run 
    - opt-out in settings

### Pain Serial console
output
- just the output
- with multiple hiding switches
    - hide title
    - hide CVs
- with py syntaxt highlight
    - highlight everything within `exec` function

input
- python checkbox
    - if python, py highlighting, send within `exec` function
        - ***all code should be sent within exec(), no matter how many lines***
    - if not, no highlighting, send plain text
- setting to change enter/shift-enter behaviour
- history retract

### Fancy Console

save as reports
- convert fancy console to markdown
    - the whole thing
    - current sesstion only
- preview the markdown in a popup window
    - copy the rendered text (To be used in google doc etc)
    - copy the markdown
    - print (to printer) the rendered text

(rejected) Markdown comment block
- as convert to markdown is one of the options,
    - putting  markdown comments in the middle is not prioritized
    - because if you want comments, edit to the exported markedown file
    - plus that is going to be hard to implement
- Add pure comment py code if really need to take a note

### Widgets
plot
- plot function in the previous version should be a widget in the new version

### File explorer

### Global Search
What is it like?
- like the VScode Global search

What does it look like?
- opens up a tab in the editor,
    - or float to a standalone window
- fill in words, regex or wild cards
- list matches in all file in the opened directory
- click on one match and jump/open to that location

### lib management (Not sure how)
- open a local directory of libs
    - ideally, open a online location
        - based on the py version
        - have most up to date files
- auto load lib
    - parse all the py files to find out lib dependency
    - load missing ones
    - update existing ones
    - warning if not found
- manual load lib
    - list all existing libs
        - install from resouce
        - uninstall from local
        - manually update
- get help
    - list documentations
        - all installed libs
        - search for libs

### editor settings
- editor setting are saved to browser local storage by default
- can backup to or restore from CircuitPy
- can clear settings in browser
- 1-class settings are in the settings tab
- can open setting json in browser local storage in editor pannel

## System feature

### History
this is a module for input history retract
- as all code should be in `exec`
    - those parts are stored into history to retract

### locate once error (8+ only)
- when the title changed to error message
- parse the title to get
    - file name
    - line
- jump/open to that location
    - same jump as global search
- special operation if files not saved

### local sync dir
- open a local folder along with the CircuitPy directory
    - better be a Github folder so it can be synced
- whenever a file is changed, also save it to the backup folder
- scheduled sync every some seconds

### Theme
- Switch between dark and light

### install as pwa
- has an option to install to chrome as PWA to be used without network



# Features carried from 1.0 (must have)
- Menu bar
    - file operation
    - serial function
    - plot function
        - windowed polt
    - about and help
- Editor
    - ACE Editor
        - basic editor functions
        - python high light
        - search
    - shortcut
        - save
        - send code to serial
    - save and run button
- Serial console
    - send/new line shortcut
    - history
    - reflow `exec` code
    - control shortcuts