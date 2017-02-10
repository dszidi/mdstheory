# MDSTheory README #

### A general purpose music theory engine written in javascript. ###

* Quick summary
* 0.1
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### About the Syntax ###
* For the most part, arguments are passed in as strings. The exception being midi note values which are integers between 0-127 
* Pitches are formatted pitch+octave. For example, middle C is 'C4'.
* Intervals use the following table as reference:

| Interval Type | Modifier | Example |
| ------------- | -------- | ------- |
| Major         | M        | M3 (major 3rd) |
| Minor | m | m3 (minor 3rd) |
| Perfect | p | p5 (perfect 5th) |
| Diminished | dim | dim5 (diminished 5th) |
| Augmented | aug | aug4 (augmented 4th) |


### Functions ###
| Function name | Description                    | Arguments            |
| ------------- | ------------------------------ |--------------------- |
| `midiToNote()`| Converts midi (0-127) to pitch (note/octave) | integer, type (flat/sharp) NOTE: Type is optional and defaults to 'sharp' |
| `noteToMidi` | Converts a pitch to a midi value | pitch eg. 'C#4' |
| `getInterval` | Returns the calculated interval between two pitches | 'root pitch', 'interval pitch', 'adjust octave' |
| `getNoteFromInterval` | Returns the pitch of an interval | 'root_pitch', 'interval' eg. 'p5' |
| `getScale` | Returns an array of pitches | 'scale_name', 'root', 'octave' |

### Notes ###

* Uncomment the last line of MDSTheory.js for testing in Node.js

~~~~
//For Testing in Node.js only
module.exports = MDSTheory;
~~~~
### License ###

* Standard 3 clause BSD license