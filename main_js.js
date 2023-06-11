///let midi = null;  // global MIDIAccess object


navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess) {
    console.log("MIDI ready!");
    for (var input of midiAccess.inputs.values())
        input.onmidimessage = getMIDIMessage;

}

function onMIDIFailure(msg) {
    console.error(`Failed to get MIDI access - ${msg}`);
}

var NowChord = [];
var Nownote = [];

const CM = ['C', 'E', 'G'];
const Cm = ["C", "D#", "G"];


var Chord_name;
var M_or_m;

var details;



function getMIDIMessage(midiAccess) {
   // console.log(midiAccess);
    ///console.log(octave);

 

    switch (midiAccess.data[0]) {

        case 144:

            NowChord.push(midiAccess.data[1]);

        
            NowChord.sort();

            //if (NowChord[0] % 12 == 0) { Chord_name = "C"; }
            //if (NowChord[0] % 12 == 1) { Chord_name = ""; }
            //if (NowChord[0] % 12 == 2) { Chord_name = "D"; }
            //if (NowChord[0] % 12 == 3) { Chord_name = "D#"; }
            //if (NowChord[0] % 12 == 4) { Chord_name = "E"; }
            //if (NowChord[0] % 12 == 5) { Chord_name = "F"; }
            //if (NowChord[0] % 12 == 6) { Chord_name = "F#"; }
            //if (NowChord[0] % 12 == 7) { Chord_name = "G"; }
            //if (NowChord[0] % 12 == 8) { Chord_name = "G#"; }
            //if (NowChord[0] % 12 == 9) { Chord_name = "A"; }
            //if (NowChord[0] % 12 == 10) { Chord_name = "B♭"; }
            //if (NowChord[0] % 12 == 11) { Chord_name = "B"; }



            //if (NowChord[${ NowChord.length }] % 12 == 0) {Nownote[${ NowChord.length }] = "C"; }
            //if (NowChord[${ NowChord.length }] % 12 == 1) { Nownote[${ NowChord.length }] = "C#"; }
            //if (NowChord[${ NowChord.length }] % 12 == 2) { Nownote[${ NowChord.length }] = "D"; }
            //if (NowChord[${ NowChord.length }] % 12 == 3) { Nownote[${ NowChord.length }] = "D#"; }
            //if (NowChord[${ NowChord.length }] % 12 == 4) { Nownote[${ NowChord.length }]= "E"; }
            //if (NowChord[${ NowChord.length }] % 12 == 5) { Nownote[${ NowChord.length }]= "F"; }
            //if (NowChord[${ NowChord.length }] % 12 == 6) { Nownote[${ NowChord.length }] = "F#"; 
            //    if (NowChord[${ NowChord.length }] % 12 == 7) { Nownote[${ NowChord.length }] = "G"; }
            //    if (NowChord[${ NowChord.length }]d % 12 == 8) { Nownote[${ NowChord.length }] = "G#"; }
            //    if (NowChord[${ NowChord.length }] % 12 == 9) { Nownote[${ NowChord.length }] = "A"; }
            //    if (NowChord[${ NowChord.length }] % 12 == 10) { Nownote[${ NowChord.length }] = "B♭"; }
            //    if (NowChord[${ NowChord.length }] % 12 == 11) { Nownote[${ NowChord.length }] = "B"; }

            for (let i = 0; i < NowChord.length; i++) {
                if (NowChord[i] % 12 == 0) { Nownote[i] = "C"; }
                if (NowChord[i] % 12 == 1) { Nownote[i] = ""; }
                if (NowChord[i] % 12 == 2) { Nownote[i] = "D"; }
                if (NowChord[i] % 12 == 3) { Nownote[i] = "D#"; }
                if (NowChord[i] % 12 == 4) { Nownote[i] = "E"; }
                if (NowChord[i] % 12 == 5) { Nownote[i] = "F"; }
                if (NowChord[i] % 12 == 6) { Nownote[i] = "F#"; }
                if (NowChord[i] % 12 == 7) { Nownote[i] = "G"; }
                if (NowChord[i] % 12 == 8) { Nownote[i] = "G#"; }
                if (NowChord[i] % 12 == 9) { Nownote[i] = "A"; }
                if (NowChord[i] % 12 == 10) { Nownote[i] = "B♭"; }
                if (NowChord[i] % 12 == 11) { Nownote[i] = "B"; }

            }
            console.log(Nownote);

            if (CM.every(elem => Nownote.includes(elem)) && CM.length === Nownote.length == true) { Chord_name = "C Major"; }
            else if (Cm.every(elem => Nownote.includes(elem)) == true) { Chord_name = "C minor"; }
            

            


            if (NowChord.length == 3) {

                //if ((NowChord[1] - 4 - NowChord[0]) % 12 == 0 && (NowChord[2] - 7 - NowChord[0]) % 12 == 0 ) {
                //    M_or_m = "Major";
                //    console.log(Chord_name, M_or_m);
                //    console.log(NowChord);


                //} else { }

                if ((NowChord[1] - 4 - NowChord[0]) % 12 == 0 && (NowChord[2] - 7 - NowChord[0]) % 12 == 0 ) {
                    M_or_m = "Major";
                    console.log(Chord_name, M_or_m);
                    console.log(Nownote);
                    


                } else { }


                if ((NowChord[1] - 4+1 - NowChord[0]) % 12 == 0 && (NowChord[2] - 7 - NowChord[0]) % 12 == 0 ) {
                    M_or_m = "minor";
                    console.log(Chord_name, M_or_m);
                    console.log(NowChord);


                } else { }

            }

            //Minors
            //if (NowChord[0] % 12 == 0 && NowChord[1] == NowChord[0] + 4 - 1 && NowChord[0] + 7) {
            //    console.log(NowChord, NowChord.length, "C-Minor");
            //}
            //if (NowChord[0] % 12 == 2 && NowChord[1] == NowChord[0] + 4 - 1 && NowChord[0] + 7) {
            //    console.log(NowChord, NowChord.length, "D-Minor");
            //}

            //if (NowChord[0] % 12 == 4 && NowChord[1] == NowChord[0] + 4 - 1 && NowChord[0] + 7) {
            //    console.log(NowChord, NowChord.length, "E-Minor");
            //}

            //if (NowChord[0] % 12 == 6 && NowChord[1] == NowChord[0] + 4 - 1 && NowChord[0] + 7) {
            //    console.log(NowChord, NowChord.length, "F-Minor");
            //}
            //}

            if (NowChord.length == 4) { //seventh or add6 or add4

           


                if ((NowChord[1] - 4 - NowChord[0]) % 12 == 0 && (NowChord[2] - 7 - NowChord[0])%12 ==0 &&  (NowChord[3] - NowChord[0] - 11)%12==0) {
                    M_or_m = "maj";
                    details = "7";
                    console.log(Chord_name, M_or_m,details);
                    //this works

                } 


                if ((NowChord[1] - 4 +1 - NowChord[0]) % 12 == 0 && (NowChord[2] - 7 - NowChord[0]) % 12 == 0 && (NowChord[3] - NowChord[0] - 11) % 12 == 0) {
                    M_or_m = "m";
                    details = "7"
                    console.log(Chord_name, M_or_m,details);


                } 

                if ((NowChord[1] - 4 - NowChord[0]) % 12 == 0 && (NowChord[2] - 7 - NowChord[0]) % 12 == 0 && (NowChord[3] - NowChord[0] - 11+1) % 12 == 0) {
                    M_or_m = "";
                    details = "7";
                    console.log(Chord_name, M_or_m,details);


                } 


                if (NowChord[1] == NowChord[0] + 4-1 && NowChord[2] == NowChord[0] + 7 && NowChord[3] == NowChord[0] + 9) {
                    M_or_m = "m";
                    details = "(add6)";
                    console.log(Chord_name, M_or_m, details); // un op
                } 


                if (NowChord[1] == NowChord[0] + 4  && NowChord[2] == NowChord[0] + 7 && NowChord[3] == NowChord[0] + 9) {
                    M_or_m = "";
                    details = "(add6)";
                    console.log(Chord_name, M_or_m, details); /// un op
                } 



                if ((NowChord[1] - NowChord[0] - 2) % 12 == 0 && ( NowChord[2] - NowChord[0] - 4 + 1)% 12 == 0 && (NowChord[3] - 7 - NowChord[0])%12 ==0) {
                    M_or_m = "m";
                    details = "(add2)";
                    console.log(Chord_name, M_or_m, details);
                } 

                if ((NowChord[1] - NowChord[0] - 2) % 12 == 0 && (NowChord[2] - NowChord[0] - 4 ) % 12 == 0 && (NowChord[3] - 7 - NowChord[0]) % 12 == 0) {
                    M_or_m = "";
                    details = "(add2)";
                    console.log(Chord_name, M_or_m, details);
                } 



            }

            break;


        case 128:

            NowChord.splice(NowChord.indexOf(midiAccess.data[1]), 1);
            Nownote.splice(Nownote.indexOf(midiAccess.data[1]),1)

            break;
    }



 

  
    

    

            

    }






