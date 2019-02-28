

function test_synth(){

  console.clear();

  const synth = new Tone.Synth();
  synth.oscillator.type = 'sine';
  const gain = new Tone.Gain(0.1);
  gain.toMaster();
  synth.connect(gain);

  const notes = ['C1', 'E4', 'G4', 'C5', 'E5', 'G5'];

  var index = 0;


  Tone.Transport.scheduleRepeat(time =>{
    repeat(time);
  }, '8n');


  function repeat(time) {
    let note = notes[index % notes.length];
    synth.triggerAttackRelease(note, '2n', time);
    index++;

  }

  Tone.Transport.start();

  setTimeout(()=>{
    Tone.Transport.stop();
    Tone.Transport.clear();
  }, 5000)



}
// roygbv

document.onkeyup = function(e){
  var keyCode = e.key;
  if(keyCode.localeCompare('q') == 0) {
      note = "C5";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('w') == 0) {
      note = "D5";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('e') == 0) {
      note = "E5";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('r') == 0) {
      note = "F5";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('t') == 0) {
      note = "G5";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('y') == 0) {
      note = "A5";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('u') == 0) {
      note = "B5";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('a') == 0) {
      note = "C4";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('s') == 0) {
      note = "D4";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('d') == 0) {
      note = "E4";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('f') == 0) {
      note = "F4";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('g') == 0) {
      note = "G4";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('h') == 0) {
      note = "A4";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('j') == 0) {
      note = "B4";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('z') == 0) {
      note = "C3";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('x') == 0) {
      note = "D3";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('c') == 0) {
      note = "E3";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('v') == 0) {
      note = "F3";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('b') == 0) {
      note = "G3";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('n') == 0) {
      note = "A3";
      document.getElementById(note).style.backgroundColor = "#777777";
  }
  else if (keyCode.localeCompare('m') == 0) {
      note = "B3";
      document.getElementById(note).style.backgroundColor = "#777777";
  }else{
    return;
  }
}

document.onkeydown = function (e) {
    var keyCode = e.key;

    var note = null;
    if(keyCode.localeCompare('q') == 0) {
        note = "C5";
        document.getElementById(note).style.backgroundColor = "red";
    }
    else if (keyCode.localeCompare('w') == 0) {
        note = "D5";
        document.getElementById(note).style.backgroundColor = "orange";
    }
    else if (keyCode.localeCompare('e') == 0) {
        note = "E5";
        document.getElementById(note).style.backgroundColor = "yellow";
    }
    else if (keyCode.localeCompare('r') == 0) {
        note = "F5";
        document.getElementById(note).style.backgroundColor = "green";
    }
    else if (keyCode.localeCompare('t') == 0) {
        note = "G5";
        document.getElementById(note).style.backgroundColor = "blue";
    }
    else if (keyCode.localeCompare('y') == 0) {
        note = "A5";
        document.getElementById(note).style.backgroundColor = "indigo";
    }
    else if (keyCode.localeCompare('u') == 0) {
        note = "B5";
        document.getElementById(note).style.backgroundColor = "violet";
    }
    else if (keyCode.localeCompare('a') == 0) {
        note = "C4";
        document.getElementById(note).style.backgroundColor = "red";
    }
    else if (keyCode.localeCompare('s') == 0) {
        note = "D4";
        document.getElementById(note).style.backgroundColor = "orange";
    }
    else if (keyCode.localeCompare('d') == 0) {
        note = "E4";
        document.getElementById(note).style.backgroundColor = "yellow";
    }
    else if (keyCode.localeCompare('f') == 0) {
        note = "F4";
        document.getElementById(note).style.backgroundColor = "green";
    }
    else if (keyCode.localeCompare('g') == 0) {
        note = "G4";
        document.getElementById(note).style.backgroundColor = "blue";
    }
    else if (keyCode.localeCompare('h') == 0) {
        note = "A4";
        document.getElementById(note).style.backgroundColor = "indigo";
    }
    else if (keyCode.localeCompare('j') == 0) {
        note = "B4";
        document.getElementById(note).style.backgroundColor = "violet";
    }
    else if (keyCode.localeCompare('z') == 0) {
        note = "C3";
        document.getElementById(note).style.backgroundColor = "red";
    }
    else if (keyCode.localeCompare('x') == 0) {
        note = "D3";
        document.getElementById(note).style.backgroundColor = "orange";
    }
    else if (keyCode.localeCompare('c') == 0) {
        note = "E3";
        document.getElementById(note).style.backgroundColor = "yellow";
    }
    else if (keyCode.localeCompare('v') == 0) {
        note = "F3";
        document.getElementById(note).style.backgroundColor = "green";
    }
    else if (keyCode.localeCompare('b') == 0) {
        note = "G3";
        document.getElementById(note).style.backgroundColor = "blue";
    }
    else if (keyCode.localeCompare('n') == 0) {
        note = "A3";
        document.getElementById(note).style.backgroundColor = "indigo";
    }
    else if (keyCode.localeCompare('m') == 0) {
        note = "B3";
        document.getElementById(note).style.backgroundColor = "violet";
    }else{
      return;
    }

    playNote(note);
}


function new_instrument(){
  //pass in some initial values for the filter and filter envelope
  /*var synth = new Tone.Synth({
  	"oscillator" : {
  		"type" : "pwm",
  		"modulationFrequency" : 0.2
  	},
  	"envelope" : {
  		"attack" : 0.02,
  		"decay" : 0.1,
  		"sustain" : 0.2,
  		"release" : 0.9,
  	}
  }).toMaster();

  //start the note "D3" one second from now
  synth.triggerAttack("D3");*/
  //a 4 voice Synth
  var polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();
  //play a chord
  //polySynth.triggerAttackRelease(["C4", "E4", "G4", "B4"], "2n");

  var newTone = new Tone.PolySynth(6, Tone.Synth).toMaster();
  newTone.triggerAttackRelease(['C1', 'E4', 'G4', 'C5', 'E5', 'G5'], "2n");

}


function playNote(note) {

  if(note == null) return;

  var polySynth = new Tone.PolySynth(1, Tone.Synth).toMaster();

  polySynth.triggerAttackRelease(note, "2n");

}
