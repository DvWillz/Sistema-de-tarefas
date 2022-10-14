var count = 0
var output = document.getElementById("output")
var text = document.getElementById("text")       

function novatarefa() {
    count++
    output.innerHTML += `
    <div id="d-${count}">
    <p class="tarefa"> 
        ${text.value}
    </p>
    <input class="workb" 
    type="button" value="Remover" 
    onclick="remover_tarefa('${count}')">
    </div>
     `
}

function remover_tarefa(count) {
    let TempElemntText = document.getElementById(`d-${count}`)
    TempElemntText.remove()
}