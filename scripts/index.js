const noteItem = {
    id: Math.random().toString(),
    title: "Our First Note",
    noteBody: "This is exciting",
    lastEditedDate: Date.now()
}  

const noteList = [noteItem]


const generateNoteItemView = () => {
    const noteElement = document.createElement("a")
    const noteTitleElement = document.createElement("p")
    const noteStatusElement = document.createElement("p")

    noteTitleElement.textContent = "Notes from JS"
    noteStatusElement.textContent = "Last edited 27 days ago"


    noteElement.appendChild(noteTitleElement)
    noteElement.appendChild(noteStatusElement)

    return noteElement;
} 

function renderNotes () {
    if(noteList.length <= 0){
        return;
    }
    
    const noNotesView = document.querySelector(".no_note")
    noNotesView.remove()

    const noteItemView = generateNoteItemView()
    const createNoteButton = document.querySelector(".create_note")
    const noteSection = document.querySelector(".note_section")

    noteSection.insertBefore(noteItemView, createNoteButton)
}

document.body.onload = () => {
    renderNotes()
}
