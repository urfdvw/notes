# Features Inerited from 1.0

## Menu bar
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

## Editor

Basic Functions
- Ace editor + search + python highlighting

ShortCut Functions
- send to repl
    - a line
        - if next line more indented, send a bock
    - selected code
    - a cell

Editor indicator



# New Features from 2.0

## Fancy Console
## Widgets
## Global Search
What is it like?
- like the VScode Global search

What does it look like?
- opens up a tab in the editor,
    - or float to a standalone window
- fill in words, regex or wild cards
- list matches in all file in the opened directory
- click on one match and jump/open to that location

## locate error once error (8+ only)
- when the title changed to error message
- parse the title to get
    - file name
    - line
- jump/open to that location
    - same jump as global search
- special operation if files not saved

## local sync dir
- open a local folder along with the CircuitPy directory
    - better be a Github folder so it can be synced
- whenever a file is changed, also save it to the backup folder
- scheduled sync every some seconds

## lib management
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

## window management
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

## editor settings
- editor setting are saved to browser local storage by default
- can backup to or restore from CircuitPy
- 1-class settings are in the settings tab
- can open setting json in browser local storage in editor pannel

## install as pwa
- has an option to install to chrome as PWA to be used without network

## Report (not sure how but very possible)
- crash reports
    - opt-in
        - show prompt when the setting is created
        - can be toggled in setting
- count usage of functions
    - This is used for promoting
        - if some cool features are never used, make a video of it.

## Theme
- Switch between dark and light