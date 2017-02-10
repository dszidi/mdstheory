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
MDSTheory.MDSKeySignatureMatrix["Cb"] = {type:"flat", accidentals:7, accidentalNames:["Bb","Eb","Ab","Db","Gb","Cb","Fb"]};
MDSTheory.MDSKeySignatureMatrix["Gb"] = {type:"flat", accidentals:6, accidentalNames:["Bb","Eb","Ab","Db","Gb","Cb"]};
MDSTheory.MDSKeySignatureMatrix["Db"] = {type:"flat", accidentals:5, accidentalNames:["Bb","Eb","Ab","Db","Gb"]};
MDSTheory.MDSKeySignatureMatrix["Ab"] = {type:"flat", accidentals:4, accidentalNames:["Bb","Eb","Ab","Db"]};
MDSTheory.MDSKeySignatureMatrix["Eb"] = {type:"flat", accidentals:3, accidentalNames:["Bb","Eb","Ab"]};
MDSTheory.MDSKeySignatureMatrix["Bb"] = {type:"flat", accidentals:2, accidentalNames:["Bb","Eb"]};
MDSTheory.MDSKeySignatureMatrix["F"] = {type:"flat", accidentals:1, accidentalNames:["Bb"]};
MDSTheory.MDSKeySignatureMatrix["C"] = {type:"natural", accidentals:null, accidentalNames:null};
MDSTheory.MDSKeySignatureMatrix["G"] = {type:"sharp", accidentals:1, accidentalNames:["F#"]};
MDSTheory.MDSKeySignatureMatrix["D"] = {type:"sharp", accidentals:2, accidentalNames:["F#","C#"]};
MDSTheory.MDSKeySignatureMatrix["A"] = {type:"sharp", accidentals:3, accidentalNames:["F#","C#","G#"]};
MDSTheory.MDSKeySignatureMatrix["E"] = {type:"sharp", accidentals:4, accidentalNames:["F#","C#","G#","D#"]};
MDSTheory.MDSKeySignatureMatrix["B"] = {type:"sharp", accidentals:5, accidentalNames:["F#","C#","G#","D#","A#"]};
MDSTheory.MDSKeySignatureMatrix["F#"] = {type:"sharp", accidentals:6, accidentalNames:["F#","C#","G#","D#","A#","E#"]};
MDSTheory.MDSKeySignatureMatrix["C#"] = {type:"sharp", accidentals:7, accidentalNames:["F#","C#","G#","D#","A#","E#","B#"]};

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

MDSTheory.splitPitch = function(n){
// A helper function that takes a note value like Db4 and returns an array containing the pitch and octave separated
        //SEMANTICS
	var octave = Number(n.match(/\d+/g));
	var pitch = n.split(octave)[0];
	//console.log("Pitch = " + pitch + " && octave = " + octave); 
        var result = [pitch,octave];
        return result;
}

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

                default:
                type = 'natural';
                break;
	}
	return type
}

MDSTheory.adjustOctave  = function(root,n){
	/*
	Interval calculating functions are semantically correct. 
	This function brings the interval to within an octave above root
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

// CHORDS
MDSTheory.getIntervalSemitones = function(interval){
    // returns the number of semitones higher an interval is from it's root
    for(var i in MDSTheory.MDSIntervalMatrix){
        var test = MDSTheory.MDSIntervalMatrix[i]
        if(test.indexOf(interval) !== -1){ return i;}
    }
}
MDSTheory.getPitchAlias = function(pitch){
    // Gets the next available note name for the same pitch
    // Useful for correcting semantics.
    var alias;
    var index = MDSTheory.MDSGetMatrixIndex(pitch);
    var aliases = MDSTheory.MDSNoteMatrix[index];
    for(var i = aliases.length-1; i >=0; i--){
        if(aliases[i] !== pitch){alias = aliases[i]}
    }    
    console.log("pitch: " + pitch + " alias: " + alias);
    return alias;
}
MDSTheory.validateOctave = function(note,interval){
    // validates octave by checking to see if two pitches are the same
    // returns: boolean
    var octave = false;
    var nsp = MDSTheory.splitPitch(note);
    var isp = MDSTheory.splitPitch(interval);
    var checkNote = MDSTheory.MDSGetMatrixIndex(nsp[0]);
    var checkInterval = MDSTheory.MDSGetMatrixIndex(isp[0]);
    if(checkNote === checkInterval){octave = true}
    return octave
}
MDSTheory.whiteNoteCheck = function(pitch, distance){
    // returns the correct base pitch (white note) that is the specified distance
    // to count distance descending, use a negative number
    // tip: when calculating intervals shorten the distance by 1
    //console.log("whiteNoteCheck args: pitch: " + pitch + " distance: " + distance);
    var max = MDSTheory.MDSWhiteNoteMatrix.length;
    /*if(pitch.length > 1){
        console.log("wnc: " + pitch[0]);
        //var p = pitch.split("");
        pitch = pitch[0];
    }*/
    if(distance > max || distance < (max * -1)){
        newIndex = MDSTheory.MDSWhiteNoteMatrix.length + newIndex
        distance = distance % max;
        //console.log("distance: " + distance);
    }
    var startIndex = MDSTheory.MDSWhiteNoteMatrix.indexOf(pitch[0]);
    var newIndex = startIndex + distance;
    if(newIndex < 0){newIndex = max + newIndex}
    //console.log("newIndex = " + newIndex + " startIndex = " + startIndex);
    return MDSTheory.MDSWhiteNoteMatrix[newIndex]
}

MDSTheory.getRootFromInterval = function(note,interval){
    // Returns root
    var spi = MDSTheory.splitPitch(note);
    var pitch = spi[0].split(/[b|#]/);
    //console.log("Args: " + note + "/" + interval);
    note = MDSTheory.noteToMidi(note)
    var st = MDSTheory.getIntervalSemitones(interval);
    var r = note - st;
    var root = MDSTheory.midiToNote(r);
    // Force flats
    //if(root.indexOf("#") !== -1){root = MDSTheory.midiToNote(r,"flat");}
    
    // Check semantics
    var sp = MDSTheory.splitPitch(root);
    var distance = interval.split(/[a-zA-Z#]/);
    distance = distance[1] - 1;
    if(interval === "unison"){distance = 0;}
    //console.log("distance = " + distance);
    var wnc = MDSTheory.whiteNoteCheck(pitch, distance * -1);
    //console.log("note: " + pitch + " wnc: " + wnc);
    if(sp[0] !== wnc){
        var target = MDSTheory.MDSNoteMatrix;
        for(var x in target){
            if(target[x].indexOf(sp[0]) !== -1){
                for(var y in target[x]){
                    //var p = target[x][y].includes(wnc);
                    var str = target[x][y];
                    var p = false;
                    for(var z in str){
                        if(target[x][y][z] === wnc){p = true;}
                    }
                    if(p === true && target[x].length < 3){
                        root = target[x][y] + sp[1];
                    }
                }
            }
        } // END FOR
    } // END IF
    return root;
}

MDSTheory.buildChord  = function(chord,key){
return "This function is incomplete";
}

//INCOMPLETE
MDSTheory.dyads = function(args){
    // Returns root?
    //console.log("dyads:" + args);
    var arr = [];
    arr[0] = MDSTheory.noteToMidi(args[0]);
    arr[1] = MDSTheory.noteToMidi(args[1]);
    //console.log("dyads:" + arr);
    var diff = arr[1] - arr[0]; 
    //console.log(diff);
    var result = {root:"",chordName:""}
    if(arr.length > 2){ return "ERROR: Too many notes";}
    switch(diff){
    case 1: 
        result.root = arr[1];
        result.chordName = "no3 Maj7"
    break;
    case 2: 
        result.root = arr[1];
        result.chordName = "no3 7"
    break;
    case 3: 
        result.root = arr[0];
        result.chordName = "m"
    break;
    case 4: 
        result.root = arr[0];
        result.chordName = "Maj"
    break;
    case 5: 
        result.root = arr[1];
        result.chordName = "5"
    break;
    case 6: 
        result.root = arr[1];
        result.chordName = "no3 b5"
    break;
    case 7: 
        result.root = arr[0];
        result.chordName = "5"
    break;
    case 8: 
        result.root = arr[1];
        result.chordName = "Maj"
    break;
    case 9: 
        result.root = arr[1];
        result.chordName = "m"
    break;
    case 10: 
        result.root = arr[0];
        result.chordName = "no3 7"
    break;
    case 11: 
        result.root = arr[0];
        result.chordName = "no3 Maj7"
    break;
    }
    var sp = MDSTheory.splitPitch(MDSTheory.midiToNote(result.root));
    result.root = sp[0];
    return result;
}
MDSTheory.compareNotes = function(a,b){
    return MDSTheory.noteToMidi(a) - MDSTheory.noteToMidi(b);
}
MDSTheory.analyzeChord = function(arr){
	console.log("Chord Tones = " + arr);
        var scenarios = ["unison","m3","M3","p5","m7","M7","octave"];
        var leader = "unknown"; // Root, m3, M3, p5, 7, Maj7

        // SORT arr FROM LOWEST NOTE TO HIGHEST NOTE
        arr = arr.sort(MDSTheory.compareNotes);
	console.log("Sorted Chord Tones = " + arr);
        
        // RUN TESTS FOR ROOT...
	console.log("******** Master loop: " + arr[0] + " ********");
            for(var y = 0; y < scenarios.length-1; y++){ // RUN EVERY SCENARIO EXCEPT OCTAVE
                var root = MDSTheory.getRootFromInterval(arr[0],scenarios[y]);
                var hasRoot = false;
                console.log(" -- **** IF " + root + " IS ROOT **** Testing " + arr[0] + " as " + scenarios[y]);
                var tally = {score:0,root:root,intervals:[],notes:[]}
                for(var note in arr){ // CHECK INTERVALS IN THE SCENARIO
                    var interval = MDSTheory.getInterval(root,arr[note]);
                    tally.notes.push(arr[note]);
                    tally.intervals.push(interval);
                    if(interval === "octave"){
                        var oct = MDSTheory.validateOctave(root,arr[note]);
                        if(oct == false){
                            var osp = MDSTheory.splitPitch(arr[note]);
                            var newPitch = MDSTheory.getPitchAlias(osp[0]);
                            interval = MDSTheory.getInterval(root,newPitch + osp[1]);
                        }
                    }
                    
                    //console.log(" -- " + root + " and " + arr[note] + " = " + interval);
                    var point = scenarios.indexOf(interval);
                    // Point for being a chord tone
                    if(point >= 0 /*&& note < 4*/){
                        tally.score++
                        //tally.intervals.push(interval);
                        console.log(" ---- chord tone found: " + arr[note] + " is a " + interval); 
                    }
                    // Extra point for having root
                    if(arr[note] === root || interval === "octave"){ 
                        hasRoot = true; 
                        tally.score++
                    }
                }
                if(leader === "unknown" || tally.score > leader.score){leader = tally}
                console.log("******** Root = " + leader.root + " && Intervals = " + leader.intervals + " ********");
            }

        // COUNT THE SCORES & RETURN DATA...

	//return "This MDSTheory.is  = function incomplete"
        var result = leader;
        return result;
}
MDSTheory.defineChord = function(obj){
    var sp = MDSTheory.splitPitch(obj.root);
    var definition = ""; 
    
    var sus = false;
    var add = false;
    var fifth = false;
    var dim = false;
    var sevenths = false;
    // Check 7ths
    if(obj.intervals.indexOf("m7") !== -1 || obj.intervals.indexOf("M7") !== -1){sevenths = true;}
    if(obj.intervals.indexOf("m7") !== -1){definition += "7"}
    if(obj.intervals.indexOf("M7") !== -1){definition += "maj7"}

    // Check 3rds
    if(obj.intervals.indexOf("m3") === -1 && obj.intervals.indexOf("M3") === -1){ sus = true;}
    if(obj.intervals.indexOf("m3") !== -1){definition = "m" + definition}
    // Check 5ths (mainly for diminished)
    if(obj.intervals.indexOf("p5") !== -1){fifth = true;}
    if(obj.intervals.indexOf("dim5") !== -1){
        if(sevenths === true && fifth === false){definition += "/b5";}
        else if(/*sevenths === false && */fifth === true){obj.intervals[obj.intervals.indexOf("dim5")] = "aug4"}
        else if(sevenths === false && fifth === false && obj.intervals.indexOf("m3") !== -1){definition = "di" + definition; dim = true;}
        //else if(seventh === true && fifth === true){}
    } 
    // Check 9ths
    if(obj.intervals.indexOf("M2") !== -1){
        if(sus === true){definition += "sus2"}
        if(sus === false && sevenths === false){definition = "add9" + definition; add = true;}
        if(sus === false && sevenths === true){definition += "/9"}
    }
    if(obj.intervals.indexOf("m2") !== -1){
        //if(sus === true){definition += "sus2"}
        if(sus === false && sevenths === false){definition = "addb9" + definition;}
        if(sus === false && sevenths === true){definition += "/b9"}
    }
    // Check 6ths
    if(obj.intervals.indexOf("M6") !== -1){
        if(sevenths === true){
            definition += "/13";
        } else if(sevenths === false && add === true){
            var removeAdd = definition.split("add");
            definition = "6/" + removeAdd[1];
            //console.log("removeAdd = " + removeAdd[1]);
        } else {definition += "6";}
        if(dim === true){
            var dimSplit = definition.split("dim");
            definition = "dim7" + dimSplit[1];
        }
    }
    if(obj.intervals.indexOf("m6") !== -1){
        if(sevenths === true && fifth === true){definition += "/b13"}
        else if(obj.intervals.indexOf("M3") !== -1 && obj.intervals.indexOf("m3") === -1 && fifth === false){ definition = "aug" + definition}
    }
    //console.log(" ******** intervals = " + obj.intervals + " ********");
    // Check 4ths
    if(obj.intervals.indexOf("p4") !== -1 || obj.intervals.indexOf("11") !== -1){
        if(sus === true){definition += "sus4"}
        if(sus === false && sevenths === false){definition = "add11" + definition; add = true;}
        if(sus === false && sevenths === true){definition += "/11"}
    }
    if(obj.intervals.indexOf("aug4") !== -1 || obj.intervals.indexOf("#11") !== -1){
       definition += "/#11";
    }
    var definition = sp[0] + definition;
    return definition;
};
MDSTheory.chordFromNotes  = function(arr){
/*
arr = notes that include pitch + octave. eg. C#4
THis function will create 
Requires a chord dictionary
This function will calculate intervals and then match them up in the chord dictionary. To start with, it won't be able to detect inversions.
This function may  be redundant if used in Max4Live as Max will probably already have an object to do this.
*/

// Create new arrays for each combination.
// Don't push() any duplicates into new arrays
// Use adjustOctave() to keep all the notes within an octave of the root note
/* 
GENERAL STRATEGY:
- Remove duplicate pitches
- Dyads triads and quartads have separate dictionaries
- Look for the base chord (triad or quartad) in the lowest 3-4 notes of the chord.
- Each note above the base quartad will be considered an extension and be calculated using getIntervalFromNote

NEW STRATEGY?
- Sort notes into an array from lowest to highest.
- Analyze the notes within an octave of the lowest note (limit of bottom note plus 3)
- CONSTANT (Eureka!): Bottom note cannot be an upperextension! (7,9,13)
  Therefore, bottom note must be 1,3,5, or 7!!
- SOoooo....
- We run tests assuming the bottom note is in the base chord.
- We compare the bottom note to the others and count how many other 
  possible base chord notes we would have in that scenario
- Presence of root is a tie breaker 
  

*/
    var result = "";
    switch(arr.length){
        case 2: result = MDSTheory.dyads(arr); break;
        default: 
            var notes = MDSTheory.analyzeChord(arr);
            result = MDSTheory.defineChord(notes);;
        break;
        //default: console.log("Bigger than Triad");  break;
    }
    return result;
}


//For Testing in Node.js only
//module.exports = MDSTheory;
