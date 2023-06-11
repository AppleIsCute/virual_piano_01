let octave;
let notes = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'A', 'Bb', 'B', 'C'];
let Rightkeys = ['KeyQ', 'Digit2', 'KeyW', 'Digit3', 'KeyE', 'KeyR', 'Digit5', 'KeyT', 'Digit6', 'KeyY', 'Digit7', 'KeyU', 'KeyI', 'Digit9', 'KeyO', 'Digit0', 'KeyP', 'BracketLeft', 'Equal', 'BracketRight'];
let Leftkeys = ['KeyZ','KeyS','KeyX','KeyD','KeyC','KeyV', 'KeyG', 'KeyB', 'KeyH', 'KeyN', 'KeyM', 'KeyK', 'Comma', 'KeyL', 'Period', 'Semicolon','Slash']

    octave = 4;
    piano = new Tone.Sampler({
        urls: {
            C4: "C4v14.mp3",
            "D#4": "D%234v14.mp3",
            "F#4": "F%234v14.mp3",
            C5: "C5v14.mp3",
            "F#5": "F%235v14.mp3",
            A5:"A5v14.mp3",
            "D#5:":"D%235v14.mp3",
            C6: "C6v14.mp3", 
            C7: "C7v14.mp3",
        },
        release: 0.8,
        volume: 0.4,

        baseUrl: "https://unpkg.com/@audio-samples/piano-mp3-velocity14@1.0.5/audio/",
       
    }).toDestination();



const keyInteract = document.querySelectorAll('.key');
keyInteract.forEach(key => key.addEventListener('mousedown', changecolor));


function changecolor() {
    this.style.backgroundColor = 'red';
    console.log("hellp");

}
    window.addEventListener('keypress', function (e) {
        if (e.repeat) { return;}
        var keyID = e.code;
        for (let i = 0; i < 12; i++) { // controls assigning keys from c to b

            if (keyID ===  Rightkeys[i]) {
                piano.triggerAttackRelease(notes[i] + octave.toString(), "8n");

            }
        }

        for (let i =12; i < 21; i++) { // controls assigning keys from c to b

            if (keyID === Rightkeys[i]) {
                piano.triggerAttackRelease(notes[i] + (octave+1).toString(), "8n");

            }
        }


        for (let i = 7; i <27 ; i++) { // controls assigning keys from c to b

            if (keyID === Leftkeys[i - 7]) {

                if (i < 12) {
                    piano.triggerAttackRelease(notes[i] + (octave - 2).toString(), "8n");
                }
                if (i >= 12) {
                    piano.triggerAttackRelease(notes[i] + (octave - 1).toString(), "8n");
                }

            }
        }

    }, false);



