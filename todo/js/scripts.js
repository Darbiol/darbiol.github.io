function todoEntry(string, bool){
	var self = this;
	self.todoEntry = string; 
	//return self.Entry;
}

function TodoViewModel(){
	var self = this;
	var newTodoEl = document.getElementById("addTodo");
	//var check = document.getElementById("addTodo");

	//model array
	self.entries = ko.observableArray([new todoEntry('sample string')]);

	


	self.addToList = function(element){
		//console.log(element);
		self.entries.push(new todoEntry(element.value));
		self.clearInputs(element);
	}
	self.clearInputs = function(element){
		element.value = '';
	}
	//if user presss enter
	self.addTodo = function(data, event){
		if(event.which == 13){		
			//console.log(newTodoEl);
			self.addToList(newTodoEl);
		}else{
			console.log(event);
			//alert(String.fromCharCode(event.which));
			newTodoEl.value = 	newTodoEl.value + String.fromCharCode(event.which)
		}
	}

	self.finished = function(data, event){
		//element.parentNode.nextSibling.setAttribute('class', 'done');
		var element = event.target.parentNode.nextSibling;
		
		//console.log(event.target.parentNode.nextSibling.className);
		if(element.className == 'done'){
			element.setAttribute('class', '');

		}else{
			element.setAttribute('class', 'done');
		}
	}

	self.finishAll = function(){
		console.log('all done');
	}

	self.deleteTodoItem = function(data){
		self.entries.remove(data)
	}
	
}

ko.applyBindings(new TodoViewModel());
