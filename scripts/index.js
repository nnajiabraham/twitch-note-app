const noteItem = {
  id: Math.random().toString(),
  title: "Our First Note",
  noteBody: "This is exciting",
  lastEditedDate: new Date(1644541279745),
};

const noteListData = [
    {
        id: Math.random().toString(),
        title: "Our First Note",
        noteBody: "This is exciting",
        lastEditedDate: new Date(1644541279745),
    },
    {
        id: Math.random().toString(),
        title: "Our Second Note",
        noteBody: "This is exciting",
        lastEditedDate: new Date(),
    },
    {
        id: Math.random().toString(),
        title: "Our Third Note",
        noteBody: "This is exciting",
        lastEditedDate: new Date(1645576363789),
    },
    {
        id: Math.random().toString(),
        title: "Our Fourth Note",
        noteBody: "This is exciting",
        lastEditedDate: new Date(1645570363789),
    },
    {
        id: Math.random().toString(),
        title: "Our Fifth Note",
        noteBody: "This is exciting",
        lastEditedDate: new Date(),
    },
];

const createNoteButton = document.querySelector(".create_note");
const noteSection = document.querySelector(".note_section");
const noNotesView = document.querySelector(".no_note");

const generateLastEditedTime = (noteTime) => {
  const timeNow = new Date();

  const timeDiffInMin = (timeNow.getTime() - noteTime.getTime()) / 1000 / 60;

  const roundedTime = Math.round(timeDiffInMin);

  return roundedTime > 1
    ? `${roundedTime} minutes`
    : roundedTime == 1
    ? `${roundedTime} minute`
    : "few seconds";
};

const generateNoteItemView = (note) => {
  const noteElement = document.createElement("a");
  const noteTitleElement = document.createElement("p");
  const noteStatusElement = document.createElement("p");

  noteTitleElement.textContent = note.title;
  noteStatusElement.textContent = `Last edited ${generateLastEditedTime(
    note.lastEditedDate
  )} ago`;

  noteElement.setAttribute("href", "#");
  noteElement.setAttribute("class", "note-item");

  noteElement.appendChild(noteTitleElement);
  noteElement.appendChild(noteStatusElement);

  return noteElement;
};

function renderNotes(noteList) {
  noteSection.innerHTML = ''
  noteSection.appendChild(createNoteButton)

  if (noteList.length <= 0) {
    noteSection.insertBefore(noNotesView, createNoteButton);
    return;
  }

  if(noNotesView){
    noNotesView.remove();
  }

  const noteListItemView = noteList.map(function (note) {
    const noteView = generateNoteItemView(note);
    return noteView;
  });

  noteListItemView.forEach(function (noteView) {
    noteSection.insertBefore(noteView, createNoteButton);
  });
}

const filterNoteSearchBar = document.querySelector(".filter-notes")

const filterNotesHandler = (event) =>{
  const searchInput = event.target.value
  const filteredSearchNoteList = noteListData.filter( (note)=>{
    return note.title.toLowerCase().includes(searchInput.toLowerCase())
  })

  renderNotes(filteredSearchNoteList)
}

const rightClickEventHandler = (e) => {
  filterNoteSearchBar.value = '';
  e.preventDefault()
}

filterNoteSearchBar.addEventListener('input', filterNotesHandler)
filterNoteSearchBar.addEventListener('contextmenu', rightClickEventHandler)

document.body.onload = () => {
  renderNotes(noteListData);
};
