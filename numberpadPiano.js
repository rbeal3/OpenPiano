// ./js/MIDI/AudioDetect.js" type="text/javascript"></script>
// "./js/MIDI/LoadPlugin.js" type="text/javascript"></script>
// "./js/MIDI/Plugin.js" type="text/javascript"></script>
// "./js/MIDI/Player.js" type="text/javascript"></script>
// "./js/Window/DOMLoader.XMLHttp.js" type="text/javascript"></script>

window.onload = function () {
	MIDI.loadPlugin({
		soundfontUrl: "./soundfont/",
		instrument: "acoustic_grand_piano",
		callback: function() {
			var delay = 0; // play one note every quarter second
			var note = 50; // the MIDI note
			var velocity = 127; // how hard the note hits
			// play the note
			MIDI.setVolume(0, 127);
			MIDI.noteOn(0, note, velocity, delay);
			MIDI.noteOff(0, note, delay + 0.75);
		}
	});

	var noteMap=[ 60, 62, 64, 65, 67, 69, 71, 72, 74, 76];//their corresponding notes
	 	keyMap= [113,119,101,114,116,121,117,105,111,112];//ascii keycodes qwertyuiop =
	
	window.onkeypress = function(event) {
			var delay = 0; // play one note every quarter second
			var velocity = 127; // how hard the note hits
	// making all if statements makes it so we can play multiple notes at once.
   if (event.keyCode == keyMap[0]) {
			var note = noteMap[0]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
   if (event.keyCode == keyMap[1]) {
			var note = noteMap[1]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
   if (event.keyCode == keyMap[2]) {
			var note = noteMap[2]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
   if (event.keyCode == keyMap[3]) {
			var note = noteMap[3]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
   if (event.keyCode == keyMap[4]) {
			var note = noteMap[4]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
   if (event.keyCode == keyMap[5]) {
			var note = noteMap[5]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
   if (event.keyCode == keyMap[6]) {
			var note = noteMap[6]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
  if (event.keyCode == keyMap[7]) {
			var note = noteMap[7]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
  
}
};



window.onload = function () {
	MIDI.loadPlugin({
		soundfontUrl: "./soundfont/",
		instrument: "acoustic_grand_piano",
		callback: function() {
			var delay = 0; // play one note every quarter second
			var note = 50; // the MIDI note
			var velocity = 127; // how hard the note hits
			// play the note
			MIDI.setVolume(0, 127);
			MIDI.noteOn(0, note, velocity, delay);
			MIDI.noteOff(0, note, delay + 0.75);
		}
	});

	var noteMap=[ 60, 62, 64, 65, 67, 69, 71, 72, 74, 76];//their corresponding notes
	 	//keyMap= [113,119,101,114,116,121,117,105,111,112];//ascii keycodes qwertyuiop =
	 	keyMap= [ 49, 50, 51, 52, 53, 54, 55, 56, 57];//ascii keycodes 12345678 =
	
	window.onkeypress = function(event) {
			var delay = 0; // play one note every quarter second
			var velocity = 127; // how hard the note hits
	// making all if statements makes it so we can play multiple notes at once.
   if (event.keyCode == keyMap[0]) {
			var note = noteMap[0]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
   if (event.keyCode == keyMap[1]) {
			var note = noteMap[1]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
   if (event.keyCode == keyMap[2]) {
			var note = noteMap[2]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
   if (event.keyCode == keyMap[3]) {
			var note = noteMap[3]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
   if (event.keyCode == keyMap[4]) {
			var note = noteMap[4]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
   if (event.keyCode == keyMap[5]) {
			var note = noteMap[5]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
   if (event.keyCode == keyMap[6]) {
			var note = noteMap[6]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
  if (event.keyCode == keyMap[7]) {
			var note = noteMap[7]; // the MIDI note
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75); 
   }
  
}
};


