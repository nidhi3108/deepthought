var barNode=document.getElementById("button")
console.log(barNode);

var container1Node=document.getElementsByClassName("container1")
console.log(container1Node);

barNode.addEventListener("click",hideDisplayFunction)
function hideDisplayFunction()
{
    console.log("hh");
    var innerTextOfButton=barNode.innerHTML;
    console.log(innerTextOfButton);

    if(innerTextOfButton=="Click")
    {
        container1Node[0].style.left="-180px";
        barNode.innerHTML="Unclick";
        console.log("text1");
    }
    else{
        container1Node[0].style.left="0px";
        barNode.innerHTML="Click";
        console.log("text");
    }
}