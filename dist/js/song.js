class Song {
    constructor(inputNotes, noteHeight, noteWidth, leftMarker, ctx) {
        this.notes = inputNotes;//array of notes
        this.tracker = 0;
        this.noteHeight = noteHeight;
        this.noteWidth = noteWidth;
        this.leftMarker = leftMarker;
        this.ctx = ctx;
        this.progress = 0;
    }
    increaseProgress(){
        this.progress++;
        this.drawNotes();
    }
    getTotalDuration() {
        var totalDuration = 0;
        for(var i = 0; i<this.notes.length; i++){
            totalDuration += this.notes[i].getDuration();
        }
        return totalDuration;
    }
    drawNotes() {
        //for each note, draw the song? Maybe this should be handled by the game
        //get each note, so it doesnt fall off the screen
        for(var i = 0; i<this.notes.length; i++) {
            //first is left, second is top/ third is right //last one is bottom (from top) so height of note
            this.notes[i].draw((this.leftMarker+(i*noteWidth))-this.progress, this.noteWidth, this.noteHeight,this.ctx);
        }
    }
    getCurrentNoteIndex(){
        //for each note, start looping through until we find the first note greater than the duration (a total)
        let durationMarker = 0;
        for(var i = 0; i<this.notes.length; i++) {
            //first is left, second is top/ third is right //last one is bottom (from top) so height of note
            let currentNoteDuration = this.notes[i].getDuration();
            if(this.progress<durationMarker+currentNoteDuration){
                return i;
            }else{
                durationMarker += currentNoteDuration;
            }
        }
    }
    getCurrentNotesFrequency(){
        let currentNoteIndex = this.getCurrentNoteIndex();
        return this.notes[currentNoteIndex].getFrequency();
    }
    // getCurrentNotesFrequency(){
    //     let currentFrequency = -1;
    //     for(var i = 0; i<this.notes.length; i++){
    //         if(this.notes[i].getHealth()===this.notes[i].getDuration()){
    //             //its a full note
    //             currentFrequency = this.notes[i].getFrequency();
    //             break;
    //         }else{
    //             if(this.notes[i].getHealth()!==0){
    //                 //it's not an empty note
    //                 currentFrequency = this.notes[i].getFrequency();
    //                 break;
    //             }
    //         }
    //     }
    //     return currentFrequency;
    // }
}