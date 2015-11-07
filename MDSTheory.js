var MDSNoteMatrix = [];
MDSNoteMatrix[0] = ["C", "Dbb","B#"];
MDSNoteMatrix[1] = ["C#", "Db"];
MDSNoteMatrix[2] = ["D", "Ebb","C##"];
MDSNoteMatrix[3] = ["D#", "Eb"];
MDSNoteMatrix[4] = ["E", "Fb","D##"];
MDSNoteMatrix[5] = ["F", "Gbb","E#"];
MDSNoteMatrix[6] = ["F#", "Gb"];
MDSNoteMatrix[7] = ["G", "Abb","F##"];
MDSNoteMatrix[8] = ["G#", "Ab"];
MDSNoteMatrix[9] = ["A", "Bbb","G##"];
MDSNoteMatrix[10] = ["A#", "Bb"];
MDSNoteMatrix[11] = ["B", "Cb","A##"];

var MDSWhiteNoteMatrix = ["C","D","E","F","G","A","B"];

var MDSKeySignatureMatrix = new Object(); //DO I NEED THIS?
MDSKeySignatureMatrix["Cb"] = {type:"flat", accidentals:1, accidentalNames:["Bb","Eb","Ab","Db","Gb","Cb","Fb"]};
MDSKeySignatureMatrix["Gb"] = {type:"flat", accidentals:1, accidentalNames:["Bb","Eb","Ab","Db","Gb","Cb"]};
MDSKeySignatureMatrix["Db"] = {type:"flat", accidentals:1, accidentalNames:["Bb","Eb","Ab","Db","Gb"]};
MDSKeySignatureMatrix["Ab"] = {type:"flat", accidentals:1, accidentalNames:["Bb","Eb","Ab","Db"]};
MDSKeySignatureMatrix["Eb"] = {type:"flat", accidentals:1, accidentalNames:["Bb","Eb","Ab"]};
MDSKeySignatureMatrix["Bb"] = {type:"flat", accidentals:1, accidentalNames:["Bb","Eb"]};
MDSKeySignatureMatrix["F"] = {type:"flat", accidentals:1, accidentalNames:["Bb"]};
MDSKeySignatureMatrix["C"] = {type:"natural", accidentals:null, accidentalNames:null};
MDSKeySignatureMatrix["G"] = {type:"sharp", accidentals:1, accidentalNames:["F#"]};
MDSKeySignatureMatrix["D"] = {type:"sharp", accidentals:2, accidentalNames:["F#","C#"]};
MDSKeySignatureMatrix["A"] = {type:"sharp", accidentals:3, accidentalNames:["F#","C#","G#"]};
MDSKeySignatureMatrix["E"] = {type:"sharp", accidentals:4, accidentalNames:["F#","C#","G#","D#"]};
MDSKeySignatureMatrix["B"] = {type:"sharp", accidentals:5, accidentalNames:["F#","C#","G#","D#","A#"]};
MDSKeySignatureMatrix["F#"] = {type:"sharp", accidentals:5, accidentalNames:["F#","C#","G#","D#","A#","E#"]};
MDSKeySignatureMatrix["C#"] = {type:"sharp", accidentals:5, accidentalNames:["F#","C#","G#","D#","A#","E#","B#"]};

var MDSIntervalMatrix = new Object();
MDSIntervalMatrix[0] = ["p1","unison"];
MDSIntervalMatrix[1] = ["m2"];
MDSIntervalMatrix[2] = ["M2","dim3"];
MDSIntervalMatrix[3] = ["m3","aug2"];
MDSIntervalMatrix[4] = ["M3","dim4"];
MDSIntervalMatrix[5] = ["p4","aug3"];
MDSIntervalMatrix[6] = ["dim5","aug4"];
MDSIntervalMatrix[7] = ["p5","dim6"];
MDSIntervalMatrix[8] = ["m6","aug5"];
MDSIntervalMatrix[9] = ["M6","dim7"];
MDSIntervalMatrix[10] = ["m7","aug6"];
MDSIntervalMatrix[11] = ["M7"];
MDSIntervalMatrix[12] = ["p8","octave"];
MDSIntervalMatrix[13] = ["b9"];
MDSIntervalMatrix[14] = ["9"];
MDSIntervalMatrix[15] = ["#9"];
MDSIntervalMatrix[17] = ["11"];
MDSIntervalMatrix[18] = ["#11"];
MDSIntervalMatrix[21] = ["13"];

var MDSScaleDictionary = []; 
//Instead of root, we use perfect 1 or p1
MDSScaleDictionary['Major'] = ["p1", "M2", "M3", "p4", "p5", "M6", "M7"];
MDSScaleDictionary['Minor'] = ["p1", "M2", "m3", "p4", "p5", "m6", "m7"];
MDSScaleDictionary['Harmonic Minor'] = ["p1", "M2", "m3", "p4", "p5", "m6", "M7"];
MDSScaleDictionary['Melodic Minor'] = ["p1", "M2", "m3", "p4", "p5", "M6", "M7"];
MDSScaleDictionary['Niavent'] = ["p1", "M2", "m3", "aug4", "p5", "m6", "M7"];
MDSScaleDictionary['Ousak'] = ["p1", "m2", "m3", "p4", "p5", "m6", "m7"];
MDSScaleDictionary['Hitzaz'] = ["p1", "m2", "M3", "p4", "p5", "m6", "m7"];
MDSScaleDictionary['Sabach'] = ["p1", "M2", "m3", "dim4", "p5", "m6", "m7"];
MDSScaleDictionary['Kiourdi'] = ["p1", "M2", "m3", "p4", "dim5", "M6", "m7"];

var MDSChordDictionary = [];
//Will be required by chordFromNotes()

function flipAllNotes(p){
	var newOrder = [];
	var start = MDSGetMatrixIndex(p);
	var finish = start + 12;
	for (var i = start; i < finish; i++){
		if(i >= 12){
			newOrder.push(MDSNoteMatrix[i - 12]);	
		} else {
			newOrder.push(MDSNoteMatrix[i]);
		}
	}
	return newOrder;
}

function flipWhites(p){
	var newOrder = [];
	var start = MDSWhiteNoteMatrix.indexOf(p.split("")[0]); //leave out accidentals
	var finish = start + 7;
	for (var i = start; i < finish; i++){
		if(i >= 7){
			newOrder.push(MDSWhiteNoteMatrix[i - 7]);	
		} else {
			newOrder.push(MDSWhiteNoteMatrix[i]);
		}
	}
	return newOrder;
}

function MDSGetMatrixType(n){
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

function MDSGetMatrixIndex(pitch){
	var index;
	for (var x in MDSNoteMatrix){
		var alias = MDSNoteMatrix[x];
		for (var y in alias){
			if (alias[y] === pitch){
				index = x;
			}
		}
	}	
	return parseInt(index);
}

function noteToMidi(n){
	var result;
	var index;
	var s = n.split("");
	var pitch = n.substring(0,s.length-1);
	var octave = parseInt(s[s.length-1]);
	//var type = MDSGetMatrixType(n);
	
	//index = MDSGetMatrixIndex(pitch,type);
	for (var x in MDSNoteMatrix){
		var alias = MDSNoteMatrix[x];
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

function midiToNote(int,type,pitch){
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
//console.log("function midiToNote: note = " + int + " && type = " + type + " && pitch = " + pitch)
/*switch(type){
	case "natural":
	if(MDSNoteMatrix[index].natural === null){
		result = MDSNoteMatrix[index].sharp;
	} else {
		result = MDSNoteMatrix[index].natural;
	}
	break;
	
	case "flat":
	result = MDSNoteMatrix[index].flat;
	break;

	case "sharp":
	result = MDSNoteMatrix[index].sharp;
	break;
	
	default:
	if(MDSNoteMatrix[index].natural === null){
		result = MDSNoteMatrix[index].sharp;
	} else {
		result = MDSNoteMatrix[index].natural;
	}
	break;
}*/
switch(type){
	case "flat":
	result = MDSNoteMatrix[index][1];
	break;

	case "sharp":
	if(MDSNoteMatrix[index].length === 3){
		result = MDSNoteMatrix[index][2];	
	} else {
		result = MDSNoteMatrix[index][0];
	}
	break;
	
	case "pitch":
	for (var x in MDSNoteMatrix[index]){
		//console.log("matrix = " + MDSNoteMatrix[index][x].split("")[0] + " && pitch = " + pitch)
		if(MDSNoteMatrix[index][x].split("")[0] === pitch){
			//console.log(MDSNoteMatrix[index][x])
			result = MDSNoteMatrix[index][x];
			break;
		}
	}
	break;
	
	default:
	result = MDSNoteMatrix[index][0];
	break;
}
return result+octave;
}

function getSemiTones(x,y){
	//console.log("x = " + noteToMidi(x) + " y = " + noteToMidi(y))
	var result;
	if ( isNaN(x) === true && isNaN(y) === true){ //if args are strings
		result = noteToMidi(y) - noteToMidi(x);
	} else if (isNaN(x) === false && isNaN(y) === false) { //if args are numbers 
		result = y - x;
	} else {
		throw "ERROR: Cannot mix strings and numbers. Please provide either midi notes or pitch names with octaves";
	}
	return result;
}

function getNoteType(n){
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

function adjustOctave(root,n){
	/*
	Interval calculating functions are semantically correct. 
	This function brings the interval to with an octave above root
	*/
	var adjNote;
	var checkCents = noteToMidi(n) - noteToMidi(root)
	//console.log('Checked semitones = ' + checkCents)
	if(checkCents < 0 || checkCents > 13){
		//console.log('lower than root: ' + checkOctaves);
		//console.log('Distance in octaves: ' + (checkOctaves/12));
		var distOct = checkCents/12;
		var multiplier = Math.ceil(distOct*-1)
		//console.log('Multiplier = ' + multiplier);
		//console.log("new midi note = " + noteToMidi(n))		
		var newMidiNote = noteToMidi(n) + (12 * multiplier);
		adjNote = midiToNote(newMidiNote,getNoteType(n));
	} else {
		//console.log('Note within range, note = ' + n)
		adjNote = n;
	}
	//console.log('adjnote = ' + adjNote)
	return adjNote
}

function getInterval(root, int, adj){
	/*
	FYI: Arguments must include octave number
	If interval is not within an octave of root. 
	Interval octave number will be adjusted. 
	Octaves are adjusted by default. 
	*/
	if(adj !== 0){
		int = adjustOctave(root, int);
	}
	
	var result;
	var s = root.split("");
	var pitch = root.match(/\D+/g)[0];
	var rootOctave = root.substring(s.length-1);
	var st = getSemiTones(root,int);
	var base = flipWhites(pitch);
	var ai = base.indexOf(int.split("")[0])+1; //absoluteInterval 
	console.log("preconditional ai = " + ai)
	 if (st === 12){
		ai = 8;
	} else if (st === 0){
		ai = 1;
	} else if(st > 11){
		ai += 7;
	}
	console.log("st = " + st + " && ai = " + ai)
	for (var x in MDSIntervalMatrix[st]){
		var alias = MDSIntervalMatrix[st][x];
		var num;
		console.log("loop alias = " + alias)
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
			console.log('condition: ai > 9... ai = ' + ai + ' && num = ' + num + "\n")
		} else {
			num = alias.substring(alias.split("").length-1);
			console.log('condition: else... ai = ' + ai + ' && num = ' + num + "\n");
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

function getNoteFromInterval(n, int){
	//console.log("start function args: note = " + n + " && interval = " + int)
	var result;
	var st;
	var note = noteToMidi(n);
	//console.log("note = " + note)
	var newNote;
	
	//SEMANTICS
	var pitch = n.split("")[0];
	var newScale = flipWhites(pitch);
	var num = Number(int.match(/\d+/g));
	var desc = int.match(/\D/);
	//console.log("preconditional: num = " + num + " && desc = " + desc)
	
	//compensate for upper extensions when finding pitch name
	if (num > 7){
		num -= 7;
	}
	var ap = newScale[num-1];
	//console.log("newScale = " + newScale + " && num = " + num)
	for (var x in MDSIntervalMatrix){
		var item = MDSIntervalMatrix[x];
		var test = item.indexOf(int);
		st = parseInt(x);
		if (test !== -1){
			newNote = parseInt(note) + st;
			//console.log("newNote = " + newNote + " && ap = " + ap);
			result = midiToNote(newNote, "pitch", ap);
			break;
		}
	}
	return result;
}

function getScale(scale,root,octave){
	if(octave){
		root = root+octave;
	} else {
		root = root+"4";
	}
	var result = [];
	for(var x in MDSScaleDictionary[scale]){
		var interval = MDSScaleDictionary[scale][x];
		var note = getNoteFromInterval(root,interval);
		result.push(note);
	}
	return result;
}

function getChord(chord,key){
return "This function is incomplete";
}

//INCOMPLETE
function chordFromNotes(arr){
/*
Requires a chord dictionary
This function will calculate intervals and then match them up in the chord dictionary. To start with, it won't be able to detect inversions.
This function may be redundant if used in Max4Live as Max will probably already have an object to do this.
*/
	console.log("Chord Tones = " + arr);
	var origOrder = [];
	for(var x in arr){
		origOrder.push(MDSGetMatrixIndex(arr[x]));
		var newMatrix = flipAllNotes(MDSNoteMatrix);
		var query;
		var result;
		/*for(var y in newMatrix){
			query = newMatrix[y].indexOf(arr[x]);
			if(query === 0){ result = y; }
		}
		console.log(arr[x] + " = " + i)*/
	}
	console.log(origOrder)
	return "This function is incomplete"
}