let octave;
let notes = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'A', 'Bb', 'B', 'C'];
//let Rightkeys = ['KeyQ', 'Digit2', 'KeyW', 'Digit3', 'KeyE', 'KeyR', 'Digit5', 'KeyT', 'Digit6', 'KeyY', 'Digit7', 'KeyU', 'KeyI', 'Digit9', 'KeyO', 'Digit0', 'KeyP', 'BracketLeft', 'Equal', 'BracketRight'];
//let Leftkeys = ['KeyZ','KeyS','KeyX','KeyD','KeyC','KeyV', 'KeyG', 'KeyB', 'KeyH', 'KeyN', 'KeyM', 'KeyK', 'Comma', 'KeyL', 'Period', 'Semicolon','Slash'];

let plain01 = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="];
let plain02 = ["q", 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', "[", "]"];

let updown01 = ['q', '2', 'w', '3', 'e', 'r', '5', 't', '6', 'y', '7', 'u', 'i','9', 'o', '0', 'p', "[", "=", "]"];
let updown02 = ['z', 's', 'x', 'd', 'c', 'v', 'g', 'b', 'h', 'n', 'm', 'k', ",", 'l', ".", ";", "/"];

//let keyids = ['key1', 'key2',]



    octave = 4;
    piano = new Tone.Sampler({
        urls: {

            C4: "C4.mp3",
            "D#4": "Ds4.mp3",
            "F#4": "Fs4.mp3",
            A4: "A4.mp3",
            //C4: "C4v14.mp3",
            //"D#4": "D%234v14.mp3",
            //"F#4": "F%234v14.mp3",
            //C5: "C5v14.mp3",
            //"F#5": "F%235v14.mp3",
            //A5:"A5v14.mp3",
            //"D#5:":"D%235v14.mp3",
            //C6: "C6v14.mp3", 
            //C7: "C7v14.mp3",

        },
        release: 1,
        volume: 0.5,

//baseUrl: "https://unpkg.com/@audio-samples/piano-mp3-velocity14@1.0.5/audio/",


       baseUrl:" https://tonejs.github.io/audio/salamander/",
       
    }).toDestination();



//const keyInteract = document.querySelectorAll('.key');
//keyInteract.forEach(key => key.addEventListener('mousedown', changecolor));


//function changecolor() {
//    this.style.backgroundColor = 'red';
//    console.log("hellp");

//}
    window.addEventListener('keydown', function (e) {
        if (e.repeat) { return;}
        var keyID = event.key;


        if (event.key === plain01[12]) {
            piano.triggerAttackRelease(notes[12] + (octave + 1).toString(), "8n");
            var targetDiv = document.getElementById("key" + (25 + 12));
            targetDiv.style.background = 'linear-gradient(#E74949 96%, #CA1717 4%)';
            

           
        }

        for (let i = 0; i < 12; i++) { 

            if (event.key === plain01[i]) {
var targetDiv = document.getElementById("key" + (25 + i));
                targetDiv.style.background = 'linear-gradient(#E74949 96%, #CA1717 4%)';

piano.triggerAttackRelease(notes[i] + octave.toString(), "8n");
               
            }
        }

        for (let i =0; i < 12; i++) { 


            if (event.key === plain02[i]) {
                var targetDiv = document.getElementById("key" +(13+i));
                targetDiv.style.background = 'linear-gradient(#E74949 96%, #CA1717 4%)';
                
                piano.triggerAttackRelease(notes[i] + (octave - 1).toString(), "8n");
                console.log("key" + (13 + i));

            }
        }


        //for (let i = 24; i < 36; i++) { // controls assigning keys from c to b

        //    if (event.key === plain02[i]) {
        //        piano.triggerAttackRelease(notes[i] + (octave - 2).toString(), "8n");
        //        console.log(event.key);
        //    }
        //}

   

    }, false);


document.addEventListener('keyup', function (event) {
    var keyID = event.key;

    if (event.key === plain01[12]) {
        var targetDiv = document.getElementById("key" + (25 + 12));
        targetDiv.style.background = 'linear-gradient(#fff 96%, #eee 4%)';}

     
    for (let i = 0; i < 12; i++) { 


        if (event.key === plain01[i]) {
            var targetDiv = document.getElementById("key" + (25 + i));

            if (i === 0 || i === 2 || i === 4 || i === 5 || i === 7 || i === 9 || i === 11) { targetDiv.style.background = 'linear-gradient(#fff 96%, #eee 4%)'; }
            else { targetDiv.style.background = 'linear-gradient(#333 96%, #525050 4%)'; }
           
           
           

        }
    }


    for (let i = 0; i < 12; i++) { 


        if (event.key === plain02[i]) {
            var targetDiv = document.getElementById("key" + (13 + i));

            if (i === 0 || i === 2 || i === 4 || i === 5 || i === 7 || i === 9 || i === 11) { targetDiv.style.background = 'linear-gradient(#fff 96%, #eee 4%)'; }
            else { targetDiv.style.background = 'linear-gradient(#333 96%, #525050 4%)'; }




        }
    }

},false);



