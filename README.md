# MDSTheory README #

### A general purpose music theory engine written in javascript. ###

* Quick summary
* 0.1
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Functions ###
| Function name | Description                    | Arguments            |
| ------------- | ------------------------------ |--------------------- |
| `midiToNote()`| Converts midi (0-127) to pitch (note/octave) | integer, type (flat/sharp) NOTE: Type is optional and defaults to 'sharp' |
| `noteToMidi` | Converts a pitch to a midi value | pitch eg. 'C#4' |
| `getInterval` | Returns the calculated interval between two pitches | 'root pitch', 'interval pitch', 'adjust octave' |
| `getNoteFromInterval` | Returns the pitch of an interval | 'root_pitch', 'interval' eg. 'p5' |
| `getScale` | Returns an array of pitches | 'scale_name', 'root', 'octave' |
| `` | t | t |

### Examples ###

* This was set up to be tested via Node.js. Comment out the last line of MDSTheory.js for other environments to avoid errors.
* Available functions
* Other guidelines
~~~~
console.log('test');
~~~~
### License ###

* Standard 3 clause BSD license