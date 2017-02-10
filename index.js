var theory = require('./MDSTheory');

/*INIT*/

//var note = theory.MDSGetMatrixIndex("Eb");
//var note = theory.getNoteFromInterval("A4","M3");
//var note = theory.midiToNote(63,'flat');
//var note = theory.noteToMidi("C4");
//var note = theory.getInterval("G4","C4",1);
//var note = theory.getScale("Niavent","Eb","6");
//var note = theory.chordFromNotes(["Eb", "C", "G"]);/*NOT IMPLEMENTED YET*/
var note = theory.adjustOctave("G5","D#4");
//var note = theory.splitPitch("G#4");

console.log("Result = " + note);

