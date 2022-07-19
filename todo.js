var addButton = document.getElementById("add")
var pop= document.getElementsByClassName("popup")[0];
const oldPage = document.getElementsByClassName("old-page")[0];
const newPage = document.getElementsByClassName("new-page")[0];

const dropZone = document.getElementsByClassName("flex-container")[0];

const newPoup = document.getElementsByClassName("new-popup")[0];
var currentElement ;
const showNewPopup = (e) => {
    newPoup.style.display = "flex"
    currentElement = e

}

const addNewItem = () =>{
    let newValue = document.getElementById("head1").value
    let div = document.createElement("div")
    div.innerText = newValue
    let button =document.createElement("button")
    button.innerText = "Done"
    button.addEventListener("click" , (e) =>{
        e.target.style.display = "none"
        e.target.parentNode.style.textDecoration = "line-through"

    })
    div.append(button)
    
    currentElement.append(div)
    newPoup.style.display = "none"
}

const showNewPage = (card) =>{
    oldPage.style.display = "none"
    console.log(card)
    newPage.append(card)
    newPage.style.display = "block"

}
// card class

function createCard(heading) {
    var cardElement = document.createElement("div");
    cardElement.className = "card";
    let h4 = document.createElement("h4");
    h4.innerText = heading;
    h4.addEventListener("click" , (e) =>{
        shoeNewPage(e.target.parentNode)
    })
    let hr = document.createElement("hr");
    let d = document.createElement("span");
    d.className = " delete material-icons";
    d.innerText = "delete";
    let add = document.createElement("span");
    add.className = "material-icons";
    add.innerText = "add";
    add.addEventListener("click", (e) => {
        showNewPopup(e.target.parentNode);
    });
    d.addEventListener("click", (e) => {
        deleteCard(e);
    });
    cardElement.append(h4);
    cardElement.append(hr);
    cardElement.append(d);
    cardElement.append(add);
    dropZone.append(cardElement);
    pop.style.display = "none";
}





addButton.addEventListener("click", () =>{
     pop.style.display = "flex"

})
const deleteCard = (e) =>{
    e.target.parentNode.style.display = "none"
}

const addCard = () => {
    let inputvalue = document.getElementById("head").value;
    createCard(inputvalue)

}

