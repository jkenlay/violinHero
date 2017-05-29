class Song {
    constructor(inputNotes = []) {
        this.notes = inputNotes;//array of notes
    }
    getTotalDuration() {
        //for each note, add up duration, return
    }
    draw(g) {
        //for each note, draw the song? Maybe this should be handled by the game
        //get each note, so it doesnt fall off the screen
    }
    getNoteAtDuration(duration){
        //for each note, start looping through until we find the first note greater than the duration (a total)
    }

}