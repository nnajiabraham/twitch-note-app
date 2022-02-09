// const mainHeaderElement = document.getElementById("header")
// mainHeaderElement.innerHTML = "This is something"
// console.log(mainHeaderElement);

// const headerChild = mainHeaderElement.children[0]

// console.log(headerChild.children);

// const divChildren = [...headerChild.children]

// const h1Header = document.querySelector(".no_note")
// console.log(h1Header.innerHTML)

function addElement() {
    // const newDiv = document.createElement("div");

    // const divContent = document.createTextNode("Created from JS")

    // newDiv.appendChild(divContent)

    // const noteSection = document.querySelector(".note_section")

    // document.body.insertBefore(newDiv, noteSection)
    // document.body.appendChild(newDiv)
    // noteSection.appendChild(newDiv)
}


document.body.onload = () => {
    // addElement()
    const noteSection = document.querySelector(".note_section")

    // noteSection.style.backgroundColor = 'red'

    // noteSection.style.cssText = 'background-color:yellow; margin: 0; border: 1px solid #000'

    // console.log(noteSection.style.cssText) 


    // noteSection.remove()
    console.log("Hey page loaded")
}












// const student1 = ["Abraham" , "Grace"]
// const student2 = ["Betty",  "Ralph"]
// const allStudents = [...student1, ...student2, "Desmond"]
// console.log(allStudents)