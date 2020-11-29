//every code in here is a property of TF.org
//the website and the generator is made for GHP
var RN1 = Math.floor(Math.random() * 22);
var RD;
var RC1 = Math.floor(Math.random() * 11);
var RC;
const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const now = Tone.now();
switch (RN1) {
    case 0:
        RD = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
    case 1:
        RD = [1, 1, 0.5, 0.5, 1, 0];
    case 2:
        RD = [1, 0.5, 0.5, 1, 1, 0, 0, ];
    case 3:
        RD = [0.5, 0.5, 1, 1, 1, 0, 0];
    case 4:
        RD = [1, 1, 1, 0.5, 0.5, 0, 0];
    case 5:
        RD = [0.5, 0.5, 0.5, 0.5, 1, 1, 0];
    case 6:
        RD = [1, 0.5, 0.5, 0.5, 0.5, 1, 0];
    case 7:
        RD = [1, 1, 0.5, 0.5, 0.5, 0.5, 0];
    case 8:
        RD = [0.5, 0.5, 1, 1, 0.5, 0.5, 0];
    case 9:
        RD = [0.5, 0.5, 1, 0.5, 0.5, 1, 0];
    case 10:
        RD = [1, 0.5, 0.5, 1, 0.5, 0.5, 0];
    case 11:
        RD = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1];
    case 12:
        RD = [0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5];
    case 13:
        RD = [0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, ];
    case 14:
        RD = [1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
    case 15:
        RD = [1, 1, 1, 0.25, 0.25, 0.25, 0.25];
    case 16:
        RD = [1, 1, 0.25, 0.25, 0.25, 0.25, 1];
    case 16:
        RD = [1, 0.25, 0.25, 0.25, 0.25, 1, 1];
    case 17:
        RD = [0.25, 0.25, 0.25, 0.25, 1, 1, 1];
    case 18:
        RD = [1, 0.25, 0.25, 0.5, 0.5, 1, 0.5];
    case 19:
        RD = [1, 0.25, 0.25, 0.5, 0.25, 0.25, 1];
    case 20:
        RD = [1, 0.5, 1, 0.25, 0.25, 1, 1];
    case 21:
        RD = [0.25, 0.25, 0.5, 0.5, 1, 0.5, 1];
    case 22:
        RD = [0.5, 0.5, 0.5, 0, 0.5, 0.5, 1];
    case 23:
        RD = [1, 0.5, 0.5, 0, 1, 1, 0];
    case 24:
        RD = [1, 0.5, 0, 0.5, 1, 1, 0];
    case 25:
        RD = [1, 1, 0.5, 0, 0.5, 0.5, 0.5];
    case 26:
        RD = [0.5, 0.5, 1, 1, 0.5, 0, 0.5];
    case 27:
        RD = [0.5, 0.5, 1, 1, 0.5, 0, 0.5];

}
switch (RC) {
    case 1:
        RC = ["C4", "E4", "G4", "D4", "F4", "A4", "E4", "G4", "B4", ];
    case 2:
        RC = ["D4", "F4", "A4", "E4", "G4", "B4", "F4", "A4", "C5", ];
    case 3:
        RC = ["E4", "G4", "B4", "F4", "A4", "C5", "G4", "B4", "D5", ];
    case 4:
        RC = ["F4", "A4", "C5", "G4", "B4", "D5", "A4", "C5", "E5", ];
    case 5:
        RC = ["G4", "B4", "D5", "A4", "C5", "E5", "B4", "D5", "F5", ];
    case 6:
        RC = ["A4", "C5", "E5", "B4", "D5", "F5", "C5", "E5", "G5", ];
    case 7:
        RC = ["B4", "D5", "F5", "C5", "E5", "G5", "B4", "D5", "F5", ];
    case 8:
        RC = ["F4", "A4", "C5", "G4", "B4", "D5", "F4", "A4", "C5", ];
    case 9:
        RC = ["B3", "D4", "F4#", "D4", "F4#", "A4", "F4#", "A4", "C5", ];
    case 10:
        RC = ["F4#", "A4", "C5", "D4", "F4#", "A4", "B3", "D4", "F4#", ];
    case 11:
        RC = ["B3", "D4", "F4#", "D4", "F4#", "A4", "B3", "D4", "F4#", ];
    case 12:
        RC = ["C5", "E5", "G5", "B4", "D5", "F5", "A4", "C5", "E5", ];
    case 13:
        RC = ["B4", "D5", "F5", "A4", "C5", "E5", "G4", "B4", "D5"];
    case 14:
        RC = ["A4", "C5", "E5", "G4", "B4", "D5", "F4", "A4", "C5", ];
    case 15:
        RC = ["E4", "G4", "B4", "F4", "A4", "C5", "G4", "B4", "D5", ];
    case 16:
        RC = ["C4", "E4", "G4", "D4", "F4", "A4", "E4", "G4", "B4", ];
}

function play() {
    synth.triggerAttackRelease(RC[0], now + RD[0])
    synth.triggerAttackRelease(RC[1], now + RD[1])
    synth.triggerAttackRelease(RC[2], now + RD[2])
    synth.triggerAttackRelease(RC[1], now + RD[3])
    synth.triggerAttackRelease(RC[0], now + RD[4])
    synth.triggerAttackRelease(RC[1] now + RD[5])
    synth.triggerAttackRelease(RC[2], now + RD[6])
    synth.triggerAttackRelease(RC[3], now + RD[0])
    synth.triggerAttackRelease(RC[4], now + RD[1])
    synth.triggerAttackRelease(RC[5], now + RD[2])
    synth.triggerAttackRelease(RC[4], now + RD[3])
    synth.triggerAttackRelease(RC[3], now + RD[4])
    synth.triggerAttackRelease(RC[4], now + RD[5])
    synth.triggerAttackRelease(RC[5], now + RD[6])
    synth.triggerAttackRelease(RC[6, 7, 8], now + 1)

}