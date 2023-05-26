console.log('Hello World');
// What is the difference between 'var', 'let' and 'const';
// https://learn.javascript.ru/variables -
// https://learn.javascript.ru/var -
// https://learn.javascript.ru/let-const -
// https://learn.javascript.ru/types
// https://learn.javascript.ru/strict-mode

function addNoteToList(event) {
    event.preventDefault();
    const notesList = document.getElementById('notesList');
    const length = notesList.childNodes.length;

    if (length == 22){
        return
    }

    const noteInput = document.getElementById('noteInput').value;
    if (noteInput == "") {
        alert("Please don't kill scavs!")
        return
    }
    const newListItem = document.createElement('li');
    newListItem.classList.add('noteItem');
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

const noteForm = document.getElementById('addNoteButton');
noteForm.addEventListener('click', addNoteToList);

const deleteLastNoteButton = document.getElementById('deleteTaskFromListButton');
deleteLastNoteButton.addEventListener('click', deleteLastNote)


