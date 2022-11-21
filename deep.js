var barNode=document.getElementById("button")
console.log(barNode);

var container1Node=document.getElementsByClassName("container1")
console.log(container1Node);


barNode.addEventListener("click",hideDisplayFunction)
function hideDisplayFunction()
{
    var color=barNode.innerHTML;
    console.log(color);

    if(color=="djkj")
    {
        barNode.style.marginLeft="80px";
        barNode.style.backgroundColor="aqua";
        barNode.innerHTML="sjh";
        console.log("text1");
    }
    else{
        barNode.style.marginLeft="0px";
        barNode.style.backgroundColor="black";
        barNode.innerHTML="djkj";
        console.log("text");
    }
}