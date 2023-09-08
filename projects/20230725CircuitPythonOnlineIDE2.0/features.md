# Project Design

## Base Elements
The base elements are independent of each other:

- useFileSystem
    - Interacts with the file system
- useSerial
    - Interacts with serial devices
- useConfig
    - Interacts with local storage
- Layout
    - Interacts with the tab organizer

## Features
Features are based on the Base Elements. 
They should not interact with each other directly.
Instead, interactions between the features should be done through common Base Elements.

Each feature should include:
- A tab containing all related UI
    - The tab creation factory is fed to Layout
- A JSON schema containing all configuration fields
    - Fed to useConfig
- A menu row containing a name and handler
- A help page

### Planned Features
- In 2.0
    - Folder View
    - Raw Console
    - Editor
    - Help
    - Settings
    - Navigator
- In 2.1 and After
    - Plotter
    - Fancy Console
    - Widgets
    - Backup Directory
    - Global Search

# UI
## Menu Bar
- Open Feature Tab
- Physical Connections
- External Links

## Layout
- Save layout in local storage under device ID (obtained from file API)
- If the file no longer exists, still create the tab, but with an error message.
    - Can only close and relocate

## Status Bar
Shows the status of connections:
- Serial devices: show whether connected or not
- Directory handle: show whether open or not
- Backup directory: show when open
