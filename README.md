# beaddy-components
UI component library build for the be-addy platform

## Dev Guidelines
- **No** css libraries like bootstrap should be used
- JS libraries for more complex functionality (like charts) **may** be used.
- Use the TS linting rules setup for the project

### UI Config file
General styles should be configurable from a single place, the "stylesConfig" file. From this file styles like accentColor fontFamily can be changed for the entire library.

### UI Grid
Not all distances (paddings, margins etc) in the design are coherent to a single grid. So when implementing the design please use a 16point grid. This means use distances in the range of; 4, 8 , 16, 24, 32 etc.
