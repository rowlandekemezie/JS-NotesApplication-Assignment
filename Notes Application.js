function notesApplication(author){
	this.author = author;
	var notes = [];

	this.create = function(note_content){
		this.notes.push(note_content);
	};

