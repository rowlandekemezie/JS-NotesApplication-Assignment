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

	this.search = function(search_text){
		
		var arrIndex = [];
		var regularExpression = new RegExp(search_text,"i");
		
		for(let j=0;j<this.notes.length;j++)
		{
			
			if(regularExpression.test(this.notes[j]))
			{
				arrIndex.push(j);
				//console.log(j);
			}
		}


		var searchFormat = "Showing results for search ‘[ "+search_text+" ]’\n";


		if(arrIndex.length>0)
		{	
			for(let i=0;i<arrIndex.length;i++)
			{
				searchFormat += "Note ID: "+arrIndex[i]+"\n";
				searchFormat += this.notes[arrIndex[i]]+"\n";
				searchFormat += "By Author"+this.author+"\n\n\n";
			}
		}
		else
		{
			searchFormat += "No Such string exists in the application";
		};
		
		return searchFormat;
	};




	this.delete = function(note_id){
		if(note_id >= 0 && note_id < this.notes.length)
		{
			this.notes.splice(note_id,1);
		}
	};
	
	this.delete = function(note_id){
		if(note_id >= 0 && note_id < this.notes.length)
		{
			this.notes.splice(note_id,1);
		}
	};


	this.edit = function(note_id, new_content){
		if(note_id >= 0 && note_id < this.notes.length)
		{
			this.notes[note_id] = new_content;
		}	
	};
};
