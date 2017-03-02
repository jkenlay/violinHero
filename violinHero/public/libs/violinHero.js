"use strict";

//total notes/positions for first position: 17 different notes (different flats etc)
//make space for the bit at the bottom
//20%
//gth line from bottom is lowest stave
//http://www.fretlessfingerguides.com/images/violin_neck_music_staff_notes_web.png
//thoughts:
/*
need padding for top and bottom when lines protrude down, 1.5 either side, this is good because it can 
squeeze it down

same as keeping everything in proportion, if they want x amount of notes minimum on the page then they can use that value
for keeping the whole thin in a good way

maybe write the notes on the circles, just like the image:
//http://www.fretlessfingerguides.com/images/violin_neck_music_staff_notes_web.png

rather than the thing at the bottom, where the note is, after the line, the frequency wangs out past the note and if you're too high it goes above
and below and colour co:ord and shit maybe?

sheet music coolour, make it look like dark paper and musical notes
*/
//line bar can be 20% accross.
//function to draw a note
//function for bars. 4/4
//a bar is just a straight line, a bar contains 4 notes. Could be an object derived from the midi.
//drawing the G thing (should be easy)
//MOBILE RESPONSIVE
//i think first just make it like flappy bird, keep it simple and getting quicker, then upload it.
//drawing rests
//4 beats
//3 beats (the spot after)
//half beats (joining x number of notes together)
//scales
//use that website to app program to make it easily into an app for tablets etc. 
//verses mode against a computer if nobody is available. This is where AI can get harder or against Naomi.

//make gradient
//var grd = ctx.createLinearGradient(0, 0, 200, 0);
//grd.addColorStop(0, 'red');
//grd.addColorStop(1, 'white');

//fill grad
//ctx.fillStyle = grd;
//ctx.fillRect(10, 10, 150, 80);
//ctx.moveTo(50, 50);

/*
format for now can be

Note
Duration
Health?

for each note, draw itself and clear itself

song object

has time

has notes

each note has position in song!

//THE SONG object will have a silent 400 period note at the start. Then other notes is added to it. which builds up its time.
//its just a queue?

//notes could start off blue, then change to red or green depending on score.

*/
var notes = ['B4', 'B4b', 'A4', 'G3s', 'G3', 'F3s', 'F3', 'E3', 'E3b', 'D3', 'C3s', 'C3', 'B3', 'B3b', 'A3', 'G2s', 'G2', 'F2s', 'F2', 'E2', 'E2b', 'D2', 'C2s', 'C2', 'B2', 'B2b', 'A2', 'G1s', 'G1'];
var notesForStaves = ['B4', 'A4', 'G3', 'F3', 'E3', 'D3', 'C3', 'B3', 'A3', 'G2', 'F2', 'E2', 'D2', 'C2', 'B2', 'A2', 'G1'];

var c = document.getElementById('mainCanvas');
var ctx = c.getContext('2d');
var canvasHeight = c.getAttribute('height');
var canvasWidth = c.getAttribute('width');

//frequencybox:
//main box
var notesBoxHeight = canvasHeight;
var leftLine = 10; //% of the entire width the left line takes up 
var leftMarker = (canvasWidth / 100) * leftLine;
var notePlayline = 30;
var notePlayMarker = (canvasWidth / 100) * notePlayline;

//notes
var totalNotesOnScreen = 25; //4 either side for buffers!
var distanceBetweenNotes = notesBoxHeight / (totalNotesOnScreen + 1); //verticlae

var notesOnScreenWidthways = 4;
var widthBetweenNotes = (canvasWidth-notePlayMarker) / notesOnScreenWidthways; //width ways

//song
var gameSong = new Song();

//treble cleff
var img = document.getElementById("trebleClef");

//test vars
var testNote1 = new Note("B4", 100, 100);
var testNote2 = new Note("A4", 100, 100);
var testNote3 = new Note("G3", 100, 100);
var testNote4 = new Note("F3", 100, 100);
var testNote5 = new Note("F3s", 100, 100);



function drawBlockNote(inputNote) {
    var positionOnStaves = getPositionOfNoteForStaves(inputNote);
    positionOnStaves = positionOnStaves * distanceBetweenNotes;

    drawBlockNoteBody(notePlayMarker,positionOnStaves);
}

function drawBlockNoteBody(x,y) {
    ctx.beginPath();
    ctx.fillRect(x, (distanceBetweenNotes * 6) + y, widthBetweenNotes, distanceBetweenNotes*2);
    ctx.stroke();
    ctx.closePath();
}

function drawNote(positionFromLeft, inputNote) {
    var positionOnStaves = getPositionOfNoteForStaves(inputNote);
    positionOnStaves = positionOnStaves * distanceBetweenNotes;

    var timingDrawingBuffer = songDrawingTimer;

    drawMinim(notePlayMarker + (positionFromLeft * widthBetweenNotes) - timingDrawingBuffer, (distanceBetweenNotes * 6) + positionOnStaves);
    inputNote.lowerDuration();
}

//song object
function Song() {
    console.log("new song object");
    var noteArray = [];    
    this.addNote = function (inputNote) {
        console.log("add note");
        if (noteArray.length == 0) {
            inputNote.setStartPositionInSong(0);
        } else {
            //since not the first note, change input note duration to 99 (instead of 100 so it fits)
            var newNoteStartPosition = noteArray[noteArray.length - 1].getFinishPositionInSong + 1;
            var newNoteDuration = (inputNote.getDuration - 1);

            inputNote.setDuration(newNoteDuration);
            inputNote.setStartPositionInSong(newNoteStartPosition);
        }
        noteArray.push(inputNote);
    }
}

function Note(inputNote, inputDuration, inputHealth) {
    var startPositionInSong;
    var finishPositionInSong;
    if((!verifyValidNote(inputNote))||(inputNote==null)) {
        throw "note is not valid";
    }
    this.note = inputNote;
    this.duration = inputDuration;
    this.health = inputHealth;
    this.initialDuration = inputDuration;
    this.getNote = function () {
        return this.note;
    },
        this.getDuration = function () {
            return this.duration;
        },
        this.lowerDuration = function () {
            this.duration--;
        },
        this.getHealth = function () {
            return this.health;
        },
        this.draw = function () {
            if (this.initialDuration > 100) { //if minim

            } else { //else crochet

            }
        },
        this.setStartPositionInSong = function (inputStartPosition) {
            this.startPositionInSong = inputStartPosition;
            this.finishPositionInSong = inputStartPosition + this.duration;
        },
        this.getStartPositionInSong = function () {
            return this.startPositionInSong;
        },
        this.setFinishPositionInSong = function (inputFinishPosition) {
            this.finishPositionInSong = inputFinishPosition;
        },
        this.getFinishPositionInSong = function () {
            return this.finishPositionInSong;
        },
        this.setDuration = function (inputNewDuration) {
            this.duration = inputNewDuration;
        }
};

function getPositionOfNoteForStaves(inputNote) {
    var position = -1;
    var noteToGet = inputNote.getNote().replace(new RegExp("[a-z]", "g"), '');

    //get the 0-9 and times the position by this at the end.

   // noteToGet = noteToGet.replace(new RegExp("[a-z]", "g"), ''); 
    console.log("note to get:" + noteToGet);

    for (var i = 0; i < notesForStaves.length; i++) {
        if (noteToGet == notesForStaves[i]) {
            position = i;
            break;
        }
    }
    if (position==-1) {
        throw "note not found";
    }
    return position;
}

function verifyValidNote(inputNote) {
    var noteIsValid = false;
    for (var i = 0; i < notes.length; i++) {
        if (inputNote == notes[i]) {
            noteIsValid = true;
            break;
        }
    }
    if (!noteIsValid) {
        throw "note is not valid: " + inputNote;
    }
    return noteIsValid;
}

function drawLeftMarker() {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.moveTo(leftMarker, 0);
    ctx.lineTo(leftMarker, canvasHeight);
    ctx.stroke();
    ctx.closePath();
}

function drawLeftMarkerCenterLine() {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.moveTo(0, (canvasHeight/2));
    ctx.lineTo(leftMarker, (canvasHeight / 2));
    ctx.stroke();
    ctx.closePath();
}

function drawNotePlayMarker() {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.moveTo(notePlayMarker, 0);
    ctx.lineTo(notePlayMarker, canvasHeight);
    ctx.stroke();
    ctx.closePath();
}

function drawTrebleClef() {
    ctx.globalAlpha = 0.2;
    ctx.drawImage(img, leftMarker - 27, 50);
    ctx.globalAlpha = 1;
}

function drawStaves() {
    for (var i = 1; i <= totalNotesOnScreen; i++) {
        ctx.beginPath();
        ctx.moveTo(leftMarker, i * distanceBetweenNotes);
        console.log(distanceBetweenNotes);
        ctx.lineTo(canvasWidth, i * distanceBetweenNotes);
        if ((i == 9) || (i == 11) || (i == 13) || (i == 15) || (i == 17)) {
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#ff0000';
            ctx.stroke();
            ctx.closePath();
        } else {
            if ((i != 1) && (i != totalNotesOnScreen) && (i != 2) && (i != totalNotesOnScreen - 1) && (i != 3) && (i != totalNotesOnScreen - 2) && (i != 4) && (i != 5)) {
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#ccddff';
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}

function drawMinim(x, y) {
    drawMinimLine(x, y);
    drawMinimOval(x, y);
}

function drawMinimLine(x, y) {
    ctx.beginPath();
    ctx.moveTo(x + distanceBetweenNotes, y);
    ctx.lineTo(x + distanceBetweenNotes, y - (distanceBetweenNotes * 4));
    ctx.stroke();
    ctx.closePath();
}

function drawMinimOval(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, distanceBetweenNotes, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

function fillCrochetOval(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, distanceBetweenNotes, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}

function drawCrotchet(x, y) {
    drawMinimLine(x, y);
    drawMinimOval(x, y);
    fillCrochetOval(x, y);
}

function loopTimer() {

}

var loopTimingvar = setInterval(loopTimer, 250);
var notePositionBuffer = 0;
function loopTimer() {
   // increaseSongTimer();
}

function increaseSongTimer() {
    //console.log(songDrawingTimer);
    //songDrawingTimer++; 
}

drawStaves();
drawLeftMarker();
drawLeftMarkerCenterLine();
drawNotePlayMarker();
drawTrebleClef();

//drawNote(0, testNote1);
//drawNote(1, testNote2);
//drawNote(2, testNote3);
//drawNote(3, testNote4);
//drawNote(4, testNote5);

gameSong.addNote(testNote1);
gameSong.addNote(testNote2);
gameSong.addNote(testNote3);
gameSong.addNote(testNote4);
gameSong.addNote(testNote5);

drawBlockNote(testNote2);
//drawBlockNoteBody(notePlayMarker,210);
