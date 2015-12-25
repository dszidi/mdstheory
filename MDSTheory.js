var MDSTheory = {};

MDSTheory.MDSNoteMatrix = [];
MDSTheory.MDSNoteMatrix[0] = ["C", "Dbb","B#"];
MDSTheory.MDSNoteMatrix[1] = ["C#", "Db"];
MDSTheory.MDSNoteMatrix[2] = ["D", "Ebb","C##"];
MDSTheory.MDSNoteMatrix[3] = ["D#", "Eb"];
MDSTheory.MDSNoteMatrix[4] = ["E", "Fb","D##"];
MDSTheory.MDSNoteMatrix[5] = ["F", "Gbb","E#"];
MDSTheory.MDSNoteMatrix[6] = ["F#", "Gb"];
MDSTheory.MDSNoteMatrix[7] = ["G", "Abb","F##"];
MDSTheory.MDSNoteMatrix[8] = ["G#", "Ab"];
MDSTheory.MDSNoteMatrix[9] = ["A", "Bbb","G##"];
MDSTheory.MDSNoteMatrix[10] = ["A#", "Bb"];
MDSTheory.MDSNoteMatrix[11] = ["B", "Cb","A##"];

MDSTheory.MDSWhiteNoteMatrix = ["C","D","E","F","G","A","B"];

MDSTheory.MDSKeySignatureMatrix = new Object(); //DO I NEED THIS?
MDSTheory.MDSKeySignatureMatrix["Cb"] = {type:"flat", accidentals:1, accidentalNames:["Bb","Eb","Ab","Db","Gb","Cb","Fb"]};
MDSTheory.MDSKeySignatureMatrix["Gb"] = {type:"flat", accidentals:1, accidentalNames:["Bb","Eb","Ab","Db","Gb","Cb"]};
MDSTheory.MDSKeySignatureMatrix["Db"] = {type:"flat", accidentals:1, accidentalNames:["Bb","Eb","Ab","Db","Gb"]};
MDSTheory.MDSKeySignatureMatrix["Ab"] = {type:"flat", accidentals:1, accidentalNames:["Bb","Eb","Ab","Db"]};
MDSTheory.MDSKeySignatureMatrix["Eb"] = {type:"flat", accidentals:1, accidentalNames:["Bb","Eb","Ab"]};
MDSTheory.MDSKeySignatureMatrix["Bb"] = {type:"flat", accidentals:1, accidentalNames:["Bb","Eb"]};
MDSTheory.MDSKeySignatureMatrix["F"] = {type:"flat", accidentals:1, accidentalNames:["Bb"]};
MDSTheory.MDSKeySignatureMatrix["C"] = {type:"natural", accidentals:null, accidentalNames:null};
MDSTheory.MDSKeySignatureMatrix["G"] = {type:"sharp", accidentals:1, accidentalNames:["F#"]};
MDSTheory.MDSKeySignatureMatrix["D"] = {type:"sharp", accidentals:2, accidentalNames:["F#","C#"]};
MDSTheory.MDSKeySignatureMatrix["A"] = {type:"sharp", accidentals:3, accidentalNames:["F#","C#","G#"]};
MDSTheory.MDSKeySignatureMatrix["E"] = {type:"sharp", accidentals:4, accidentalNames:["F#","C#","G#","D#"]};
MDSTheory.MDSKeySignatureMatrix["B"] = {type:"sharp", accidentals:5, accidentalNames:["F#","C#","G#","D#","A#"]};
MDSTheory.MDSKeySignatureMatrix["F#"] = {type:"sharp", accidentals:5, accidentalNames:["F#","C#","G#","D#","A#","E#"]};
MDSTheory.MDSKeySignatureMatrix["C#"] = {type:"sharp", accidentals:5, accidentalNames:["F#","C#","G#","D#","A#","E#","B#"]};

MDSTheory.MDSIntervalMatrix = new Object();
MDSTheory.MDSIntervalMatrix[0] = ["p1","unison"];
MDSTheory.MDSIntervalMatrix[1] = ["m2"];
MDSTheory.MDSIntervalMatrix[2] = ["M2","dim3"];
MDSTheory.MDSIntervalMatrix[3] = ["m3","aug2"];
MDSTheory.MDSIntervalMatrix[4] = ["M3","dim4"];
MDSTheory.MDSIntervalMatrix[5] = ["p4","aug3"];
MDSTheory.MDSIntervalMatrix[6] = ["dim5","aug4"];
MDSTheory.MDSIntervalMatrix[7] = ["p5","dim6"];
MDSTheory.MDSIntervalMatrix[8] = ["m6","aug5"];
MDSTheory.MDSIntervalMatrix[9] = ["M6","dim7"];
MDSTheory.MDSIntervalMatrix[10] = ["m7","aug6"];
MDSTheory.MDSIntervalMatrix[11] = ["M7"];
MDSTheory.MDSIntervalMatrix[12] = ["p8","octave"];
MDSTheory.MDSIntervalMatrix[13] = ["b9"];
MDSTheory.MDSIntervalMatrix[14] = ["9"];
MDSTheory.MDSIntervalMatrix[15] = ["#9"];
MDSTheory.MDSIntervalMatrix[17] = ["11"];
MDSTheory.MDSIntervalMatrix[18] = ["#11"];
MDSTheory.MDSIntervalMatrix[21] = ["13"];

MDSTheory.MDSScaleDictionary = []; 
//Instead of root, we use perfect 1 or p1
MDSTheory.MDSScaleDictionary['Major'] = ["p1", "M2", "M3", "p4", "p5", "M6", "M7"];
MDSTheory.MDSScaleDictionary['Minor'] = ["p1", "M2", "m3", "p4", "p5", "m6", "m7"];
MDSTheory.MDSScaleDictionary['Harmonic Minor'] = ["p1", "M2", "m3", "p4", "p5", "m6", "M7"];
MDSTheory.MDSScaleDictionary['Melodic Minor'] = ["p1", "M2", "m3", "p4", "p5", "M6", "M7"];
MDSTheory.MDSScaleDictionary['Niavent'] = ["p1", "M2", "m3", "aug4", "p5", "m6", "M7"];
MDSTheory.MDSScaleDictionary['Ousak'] = ["p1", "m2", "m3", "p4", "p5", "m6", "m7"];
MDSTheory.MDSScaleDictionary['Hitzaz'] = ["p1", "m2", "M3", "p4", "p5", "m6", "m7"];
MDSTheory.MDSScaleDictionary['Sabach'] = ["p1", "M2", "m3", "dim4", "p5", "m6", "m7"];
MDSTheory.MDSScaleDictionary['Kiourdi'] = ["p1", "M2", "m3", "p4", "dim5", "M6", "m7"];

MDSTheory.MDSChordDictionary = [];
//Will be required by chordFromNotes()

MDSTheory.flipAllNotes  = function(p){
	var newOrder = [];
	var start = MDSTheory.MDSGetMatrixIndex(p);
	var finish = start + 12;
	for (var i = start; i < finish; i++){
		if(i >= 12){
			newOrder.push(MDSTheory.MDSNoteMatrix[i - 12]);	
		} else {
			newOrder.push(MDSTheory.MDSNoteMatrix[i]);
		}
	}
	return newOrder;
}

MDSTheory.flipWhites  = function(p){
	var newOrder = [];
	var start = MDSTheory.MDSWhiteNoteMatrix.indexOf(p.split("")[0]); //leave out accidentals
	var finish = start + 7;
	for (var i = start; i < finish; i++){
		if(i >= 7){
			newOrder.push(MDSTheory.MDSWhiteNoteMatrix[i - 7]);	
		} else {
			newOrder.push(MDSTheory.MDSWhiteNoteMatrix[i]);
		}
	}
	return newOrder;
}

MDSTheory.MDSGetMatrixType  = function(n){
	var s = n.split("");
	var pitch = n.substring(0,s.length-1);
	var octave = parseInt(s[s.length-1]);
	var type;
	
	switch(s[1]){
		case "b":
		type = "flat";
		break;
	 
		case "#":
		type = "sharp";
		break;
	 
		default:
		type = "natural";
		break;
	}
	
	return type;
}

MDSTheory.MDSGetMatrixIndex  = function(pitch){
	var index;
	for (var x in MDSTheory.MDSNoteMatrix){
		var alias = MDSTheory.MDSNoteMatrix[x];
		for (var y in alias){
			if (alias[y] === pitch){
				index = x;
			}
		}
	}	
	return parseInt(index);
}

MDSTheory.noteToMidi  = function(n){
	var result;
	var index;
	var s = n.split("");
	var pitch = n.substring(0,s.length-1);
	var octave = parseInt(s[s.length-1]);
	//var type = MDSTheory.MDSGetMatrixType(n);
	
	//index = MDSTheory.MDSGetMatrixIndex(pitch,type);
	for (var x in MDSTheory.MDSNoteMatrix){
		var alias = MDSTheory.MDSNoteMatrix[x];
		for (var y in alias){
			if (alias[y] === pitch){
				index = x;
			}
		}
	}
	result = octave * 12 + 12 + parseInt(index);
	//console.log("noteToMidi: " + octave)
	return result;
}

MDSTheory.midiToNote  = function(int,type,pitch){
/*
Midi notes start at A0. Midi note numbers start at 21. 
We must compensate for notes below C1 and midi numbers from 0-20.
FYI: C1 = 24
*/
var index;
var result;

if(int<21 || int > 108){
	throw "Invalid Midi Note Number: Pitches range from 21 - 108";
}

//Find Octave and 
var octave = Math.floor(int / 12) - 1;
index = int - ((octave + 1) * 12);
//console.log("MDSTheory.midiToNote  = function: note = " + int + " && type = " + type + " && pitch = " + pitch)
/*switch(type){
	case "natural":
	if(MDSTheory.MDSNoteMatrix[index].natural === null){
		result = MDSTheory.MDSNoteMatrix[index].sharp;
	} else {
		result = MDSTheory.MDSNoteMatrix[index].natural;
	}
	break;
	
	case "flat":
	result = MDSTheory.MDSNoteMatrix[index].flat;
	break;

	case "sharp":
	result = MDSTheory.MDSNoteMatrix[index].sharp;
	break;
	
	default:
	if(MDSTheory.MDSNoteMatrix[index].natural === null){
		result = MDSTheory.MDSNoteMatrix[index].sharp;
	} else {
		result = MDSTheory.MDSNoteMatrix[index].natural;
	}
	break;
}*/
switch(type){
	case "flat":
	result = MDSTheory.MDSNoteMatrix[index][1];
	break;

	case "sharp":
	if(MDSTheory.MDSNoteMatrix[index].length === 3){
		result = MDSTheory.MDSNoteMatrix[index][2];	
	} else {
		result = MDSTheory.MDSNoteMatrix[index][0];
	}
	break;
	
	case "pitch":
	for (var x in MDSTheory.MDSNoteMatrix[index]){
		//console.log("matrix = " + MDSTheory.MDSNoteMatrix[index][x].split("")[0] + " && pitch = " + pitch)
		if(MDSTheory.MDSNoteMatrix[index][x].split("")[0] === pitch){
			//console.log(MDSTheory.MDSNoteMatrix[index][x])
			result = MDSTheory.MDSNoteMatrix[index][x];
			break;
		}
	}
	break;
	
	default:
	result = MDSTheory.MDSNoteMatrix[index][0];
	break;
}
return result+octave;
}

MDSTheory.getSemiTones  = function(x,y){
	//console.log("x = " + noteToMidi(x) + " y = " + noteToMidi(y))
	var result;
	if ( isNaN(x) === true && isNaN(y) === true){ //if args are strings
		result = MDSTheory.noteToMidi(y) - MDSTheory.noteToMidi(x);
	} else if (isNaN(x) === false && isNaN(y) === false) { //if args are numbers 
		result = y - x;
	} else {
		throw "ERROR: Cannot mix strings and numbers. Please provide either midi notes or pitch names with octaves";
	}
	return result;
}

MDSTheory.getNoteType  = function(n){
	/*
	Determines if note is sharp or flat. Useful when converting 
	midi notes to regular notes.
	*/
	var type = 'flat';
	var x = n.toString()[1];
	switch(x){
		case "b":
		type = 'flat';
		break;
		
		case "#":
		type = 'sharp';
		break;
	}
	return type
}

MDSTheory.adjustOctave  = function(root,n){
	/*
	Interval calculating functions are semantically correct. 
	This MDSTheory.brings  = function the interval to with an octave above root
	*/
	var adjNote;
	var checkCents = MDSTheory.noteToMidi(n) - MDSTheory.noteToMidi(root)
	//console.log('Checked semitones = ' + checkCents)
	if(checkCents < 0 || checkCents > 13){
		//console.log('lower than root: ' + checkOctaves);
		//console.log('Distance in octaves: ' + (checkOctaves/12));
		var distOct = checkCents/12;
		var multiplier = Math.ceil(distOct*-1)
		//console.log('Multiplier = ' + multiplier);
		//console.log("new midi note = " + noteToMidi(n))		
		var newMidiNote = MDSTheory.noteToMidi(n) + (12 * multiplier);
		adjNote = MDSTheory.midiToNote(newMidiNote,MDSTheory.getNoteType(n));
	} else {
		//console.log('Note within range, note = ' + n)
		adjNote = n;
	}
	//console.log('adjnote = ' + adjNote)
	return adjNote
}

MDSTheory.getInterval  = function(root, int, adj){
	/*
	FYI: Arguments must include octave number
	If interval is not within an octave of root. 
	Interval octave number will be adjusted. 
	Octaves are adjusted by default. 
	*/
	if(adj !== 0){
		int = MDSTheory.adjustOctave(root, int);
	}
	
	var result;
	var s = root.split("");
	var pitch = root.match(/\D+/g)[0];
	var rootOctave = root.substring(s.length-1);
	var st = MDSTheory.getSemiTones(root,int);
	var base = MDSTheory.flipWhites(pitch);
	var ai = base.indexOf(int.split("")[0])+1; //absoluteInterval 
	//console.log("preconditional ai = " + ai)
	 if (st === 12){
		ai = 8;
	} else if (st === 0){
		ai = 1;
	} else if(st > 11){
		ai += 7;
	}
	//console.log("st = " + st + " && ai = " + ai)
	for (var x in MDSTheory.MDSIntervalMatrix[st]){
		var alias = MDSTheory.MDSIntervalMatrix[st][x];
		var num;
		//console.log("loop alias = " + alias)
		switch(ai){
		case 1:
		result = "unison";
		break;
		
		case 8:
		result = "octave";
		break;
		
		default:
		if(ai > 9){
			num = alias.substring(alias.split("").length-2);
			//console.log('condition: ai > 9... ai = ' + ai + ' && num = ' + num + "\n")
		} else {
			num = alias.substring(alias.split("").length-1);
			//console.log('condition: else... ai = ' + ai + ' && num = ' + num + "\n");
		}
		if (parseInt(num) === ai){
			result = alias;
		}
		break;
		}
	}
	//ERROR HANDLING
	if(ai === 10 || ai === 12 || ai >13){
		throw "ERROR: Out of bounds - getInterval can only find intervals within an octave or valid extensions 9s,11s, and 13. You can also use the adj argument (bool) to adjust the octave"
	}
	if(isNaN(st) === true){
		throw "ERROR: Must include octave number";
	}
	return result;
}

MDSTheory.getNoteFromInterval  = function(n, int){
	//console.log("start MDSTheory.args  = function: note = " + n + " && interval = " + int)
	var result;
	var st;
	var note = MDSTheory.noteToMidi(n);
	//console.log("note = " + note)
	var newNote;
	
	//SEMANTICS
	var pitch = n.split("")[0];
	var newScale = MDSTheory.flipWhites(pitch);
	var num = Number(int.match(/\d+/g));
	var desc = int.match(/\D/);
	//console.log("preconditional: num = " + num + " && desc = " + desc)
	
	//compensate for upper extensions when finding pitch name
	if (num > 7){
		num -= 7;
	}
	var ap = newScale[num-1];
	//console.log("newScale = " + newScale + " && num = " + num)
	for (var x in MDSTheory.MDSIntervalMatrix){
		var item = MDSTheory.MDSIntervalMatrix[x];
		var test = item.indexOf(int);
		st = parseInt(x);
		if (test !== -1){
			newNote = parseInt(note) + st;
			//console.log("newNote = " + newNote + " && ap = " + ap);
			result = MDSTheory.midiToNote(newNote, "pitch", ap);
			break;
		}
	}
	return result;
}

MDSTheory.getScale  = function(scale,root,octave){
	if(octave){
		root = root+octave;
	} else {
		root = root+"4";
	}
	var result = [];
	for(var x in MDSTheory.MDSScaleDictionary[scale]){
		var interval = MDSTheory.MDSScaleDictionary[scale][x];
		var note = MDSTheory.getNoteFromInterval(root,interval);
		result.push(note);
	}
	return result;
}

MDSTheory.getChord  = function(chord,key){
return "This MDSTheory.is  = function incomplete";
}

//INCOMPLETE
MDSTheory.chordFromNotes  = function(arr){
/*
Requires a chord dictionary
This MDSTheory.will  = function calculate intervals and then match them up in the chord dictionary. To start with, it won't be able to detect inversions.
This MDSTheory.may  = function be redundant if used in Max4Live as Max will probably already have an object to do this.
*/
	console.log("Chord Tones = " + arr);
	var origOrder = [];
	for(var x in arr){
		origOrder.push(MDSTheory.MDSGetMatrixIndex(arr[x]));
		var newMatrix = MDSTheory.flipAllNotes(MDSTheory.MDSNoteMatrix);
		var query;
		var result;
		/*for(var y in newMatrix){
			query = newMatrix[y].indexOf(arr[x]);
			if(query === 0){ result = y; }
		}
		console.log(arr[x] + " = " + i)*/
	}
	console.log(origOrder)
	return "This MDSTheory.is  = function incomplete"
}

//For Testing in Node.js only
module.exports = MDSTheory;
