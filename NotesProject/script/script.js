console.log('Hello Worlda');
// What is the difference between 'var', 'let' and 'const';
// https://learn.javascript.ru/variables 
// https://learn.javascript.ru/var
// https://learn.javascript.ru/let-const

function addNoteToList(event) {
    event.preventDefault();
    const noteInput = document.getElementById('noteInput').value;
    const notesList = document.getElementById('notesList');
    
    const newListItem = document.createElement('li');
    newListItem.innerHTML = noteInput;
    notesList.appendChild(newListItem);
}

function deleteLastNote(){
    const notesList = document.getElementById('notesList');
    const length = notesList.childNodes.length;
    if (length > 1) {
        notesList.removeChild(notesList.lastChild);
    } 
}

const noteForm = document.getElementById('noteForm');
noteForm.addEventListener('submit', addNoteToList);

const deleteLastNoteButton = document.getElementById('deleteTaskFromListButton');
deleteLastNoteButton.addEventListener('click', deleteLastNote)

