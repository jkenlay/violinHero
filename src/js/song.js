class Song {
    constructor(inputNotes) {
        this.notes = inputNotes;//array of notes
        this.tracker = 0;
    }
    getTotalDuration() {
        var totalDuration = 0;
        for(var i = 0; i<this.notes.length; i++){
            totalDuration += this.notes[i].getDuration();
        }
        return totalDuration;
    }
    drawNotesFrom(fromLeftMarker, noteHeight, noteWidth, ctx) {
        //for each note, draw the song? Maybe this should be handled by the game
        //get each note, so it doesnt fall off the screen
        let placeMarker = fromLeftMarker;
        let y = 50;
        for(var i = 0; i<this.notes.length; i++) {
            //first is left, second is top/ third is right //last one is bottom (from top) so height of note
            this.notes[i].draw((fromLeftMarker+(i*noteWidth)), noteWidth, noteHeight,ctx);
        }
    }
    getNoteAtDuration(duration){
        //for each note, start looping through until we find the first note greater than the duration (a total)
    }
    getCurrentNotesFrequency(){
        let currentFrequency = -1;
        for(var i = 0; i<this.notes.length; i++){
            if(this.notes[i].getHealth()===this.notes[i].getDuration()){
                //its a full note
                currentFrequency = this.notes[i].getFrequency();
                break;
            }else{
                if(this.notes[i].getHealth()!==0){
                    //it's not an empty note
                    currentFrequency = this.notes[i].getFrequency();
                    break;
                }
            }
        }
        return currentFrequency;
    }
}