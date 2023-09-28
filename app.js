
function get(num){
  var inpElement = document.getElementById('input')
    inpElement.value += num
    
}

function calculate(){
    var inpElement = document.getElementById('input')
    inpElement.value = eval(inpElement.value)
}

function clr(){
    var inpElement = document.getElementById('input')
    inpElement.value = ''
}

function del(){
    var inpElement = document.getElementById('input')
    var deleteElement = inpElement.value.slice(0,-1)
    inpElement.value = deleteElement
}