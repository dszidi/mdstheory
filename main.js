/**
TODO LIST:
Detect Chords
*/


/*INIT*/
$('document').ready(function(){
	//var note = MDSGetMatrixIndex("Eb");
	//var note = getNoteFromInterval("A4","M3");
	var note = midiToNote(63,'flat');
	//var note = noteToMidi("C4");
	//var note = getInterval("C3","D#5",1);
	//var note = getScale("Niavent","Eb","6");
	//var note = chordFromNotes(["Eb", "C", "G"]);/*NOT IMPLEMENTED YET*/
	console.log("Result = " + note);
});
