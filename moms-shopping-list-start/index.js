const form =document.addItem

form.addEventListener("submit", function(e){
    e.preventDefault()

    var input = document.createElement("li")
    var buttonDelete = document.createElement("button")
    var buttonEdit = document.createElement("button")
    var list = document.getElementById("list")
    var editInput = document.createElement("input")
    var editInputBotton = document.createElement("button")
    list.appendChild(input)
    list.appendChild(buttonDelete)
    list.appendChild(buttonEdit)
    buttonDelete.textContent = "Delete"
    buttonDelete.className = "buttons"
    buttonEdit.textContent = "Edit"
    buttonEdit.className = "buttons"
    input.textContent = document.getElementById("title").value
    document.getElementById("title").value = ""
    
    buttonDelete.addEventListener("click", function (){
        list.removeChild(input)
        list.removeChild(buttonDelete)
        list.removeChild(buttonEdit)
        list.removeChild(editInput)
        list.removeChild(editInputBotton)
    } )
    buttonEdit.addEventListener("click", function (){
        buttonEdit.insertAdjacentElement("afterend", editInput)
        editInput.insertAdjacentElement("afterend", editInputBotton)
        editInput.style.width = "100px"
        editInputBotton.textContent = "submit"
        editInputBotton.className = "buttons"
        editInputBotton.addEventListener("submit", function (e){
            e.preventDefault();
            input.textContent = editInput.value
            list.removeChild(editInputBotton)
            list.removeChild(editInput)
  //          editInput.value = ""
        })
    })
})
