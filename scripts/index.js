const noteItem = {
    id: Math.random().toString(),
    title: "Our First Note",
    noteBody: "This is exciting",
    lastEditedDate: new Date(1644541279745) 
}  

const noteList = [noteItem, noteItem, noteItem]

const generateLastEditedTime = (noteTime) => {
    const timeNow = new Date();

    const timeDiffInMin = (timeNow.getTime() - noteTime.getTime()) / 1000 / 60;

    const roundedTime = Math.round(timeDiffInMin)

    return roundedTime > 1 
        ? `${roundedTime} minutes` 
        : roundedTime == 1 
            ? `${roundedTime} minute`
            : "few seconds";
}

const generateNoteItemView = (note) => {
    const noteElement = document.createElement("a")
    const noteTitleElement = document.createElement("p")
    const noteStatusElement = document.createElement("p")

    noteTitleElement.textContent = note.title
    noteStatusElement.textContent = `Last edited ${generateLastEditedTime(note.lastEditedDate)} ago`

    noteElement.setAttribute("href", "#")
    noteElement.setAttribute("class", "note-item")

    // noteElement.classList.add('dfdf')
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

    const noteListItemView  = noteList.map(function (note){
        const noteView = generateNoteItemView(note);

        return noteView
    })

    const createNoteButton = document.querySelector(".create_note")
    const noteSection = document.querySelector(".note_section")

    noteListItemView.forEach(function (noteView) {
        noteSection.insertBefore(noteView, createNoteButton)
    })
}

document.body.onload = () => {
    renderNotes()
}
