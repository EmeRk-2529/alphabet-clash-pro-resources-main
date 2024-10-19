function AddElementById(elementId){
    const element =document.getElementById(elementId)
    element.classList.add('hidden')
}
function removeElementById(removeelementId){
    const element =document.getElementById(removeelementId)
    element.classList.remove('hidden')
}

function getTextElementValueById(elementId){
    const element =document.getElementById(elementId);
    const elementValueText=element.innerText;
    const value = parseInt(elementValueText);
    return value;

}
function setTextElementValueById(elementId,value){
    const element =document.getElementById(elementId);
    element.innerText =value
}