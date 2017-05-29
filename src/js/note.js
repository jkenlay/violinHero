class Note {
    constructor(inputNote, inputDuration) {
        this.note = inputNote;
        if(!inputDuration || inputDuration < 1) {
            throw new error('Duration less than one or doesnt exist');
        }else{
            this.duration = inputDuration;
        }
    }
    draw(g) {
        //draw note
    }
    getDuration() {
        return this.duration;
    }
    getNote() {
        return this.note;
    }
}
module.exports = Note;