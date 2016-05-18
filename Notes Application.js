function notesApplication(author){
	this.author = author;
	this.notes = [];

	this.create = function(note_content){
		this.notes.push(note_content);
	};

	this.listNotes = function(){
		for(let i=0;i<this.notes.length;i++){
			console.log("Note ID: " + i);
			console.log(this.notes[i]);
			console.log("By Author " + this.author+"\n");
		}
	};

	this.get = function(note_id){
		if(note_id >= 0 && note_id < this.notes.length)
		{
			return this.notes[note_id];
		}
		else
		{
			return "Does not exist!";
		}
	}
