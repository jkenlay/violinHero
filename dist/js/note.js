class Note {
    constructor(inputNote, inputDuration) {
        this.note = inputNote;
        if(!inputDuration || inputDuration < 1) {
            throw new error('Duration less than one or doesnt exist');
        }else{
            this.duration = inputDuration;
        }
    }
    draw(x,x2,y2,ctx) {
        let y = (this.getPositionOfNoteForStaves()*distanceBetweenNotes) + (distanceBetweenNotes * 5);

        //ensuring it doesnt try to draw it if its outside the canvas width, the 50 is a buffer


        //TO DO need to add if X2 is less than canvas width, so once its gone past it
        //TO DO sharps and flats :)
        if(x<(canvasWidth+50)){
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
            console.log(this.note)
            if(this.note.toString().indexOf('s')>-1){
                console.log('note is a sharp')
                ctx.fillStyle = "black";
                ctx.font = "12px Arial";
                ctx.fillText("#",x+20,y+20);
            }

            //flat
            if(this.note.toString().indexOf('b')>-1){
                console.log('note is a flat')
                ctx.fillStyle = "black";
                ctx.font = "12px Arial";
                ctx.fillText("b",x+20,y+20);
            }
        }

    }
    getDuration() {
        return this.duration;
    }
    getNote() {
        return this.note;
    }
    getPositionOfNoteForStaves() {
        let position = -1;
        let noteToGet = this.getNote().replace(new RegExp("[a-z]", "g"), '');

        //get the 0-9 and times the position by this at the end.

        //noteToGet = noteToGet.replace(new RegExp("[a-z]", "g"), ''); 
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
}