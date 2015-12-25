var theory = require('./MDSTheory');

/*INIT*/

//var note = theory.MDSGetMatrixIndex("Eb");
//var note = theory.getNoteFromInterval("A4","M3");
//var note = theory.midiToNote(63,'flat');
//var note = theory.noteToMidi("C4");
//var note = theory.getInterval("C3","D#5",1);
//var note = theory.getScale("Niavent","Eb","6");
var note = theory.chordFromNotes(["Eb", "C", "G"]);/*NOT IMPLEMENTED YET*/

console.log("Result = " + note);

