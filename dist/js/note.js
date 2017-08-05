class Note {
    constructor(inputNote, inputDuration,inputFrequency) {
        if(!inputFrequency){
            throw new Error('No Input Frequency for Note');
        }
        this.note = inputNote;
        this.frequency = inputFrequency;
        if(!inputDuration || inputDuration < 1) {
            throw new error('Duration less than one or doesnt exist');
        } else {
            this.duration = inputDuration;
        }
        this.health = inputDuration;
    }

    draw(x,x2,y2,ctx) {
        let y = (this.getPositionOfNoteForStaves()*distanceBetweenNotes) + (distanceBetweenNotes * 5);
        if (x < (canvasWidth+50)) {
            ctx.beginPath();
            ctx.fillStyle = "blue";
            ctx.fillRect(x, y, x2, y2);
            ctx.stroke();
            ctx.closePath();

            ctx.strokeStyle = 'black';
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.rect(x+2, y+2, x2, y2-4);
            ctx.stroke();
            ctx.closePath();

            //sharp
            if (this.note.toString().indexOf('s') >-1) {
                ctx.fillStyle = "black";
                ctx.font = "30px Arial";
                ctx.fillText("#",x+10,y+30);
            }

            //flat
            if(this.note.toString().indexOf('b') >-1) {
                ctx.fillStyle = "black";
                ctx.font = "30px Arial";
                ctx.fillText("b",x+10,y+30);
            }
        }
    }
    getDuration() {
        return this.duration;
    }
    getNote() {
        return this.note;
    }
    getFrequency(){
        return this.frequency;
    }
    getHealth(){
        return this.health;
    }
    noteBeingPlayed(){
        this.health--;
    }
    getPositionOfNoteForStaves() {
        let position = -1;
        let noteToGet = this.getNote().replace(new RegExp("[a-z]", "g"), '');

        //get the 0-9 and times the position by this at the end.
        //noteToGet = noteToGet.replace(new RegExp("[a-z]", "g"), ''); 

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
}