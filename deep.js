var barNode=document.getElementById("button")
console.log(barNode);

var container1Node=document.getElementsByClassName("container1")
console.log(container1Node);

barNode.setAttribute("data-foo","click");
barNode.addEventListener("click",hideDisplayFunction)
function hideDisplayFunction()
{
    console.log("hh");
    var innerTextOfButton=barNode.getAttribute("data-foo");
    console.log(innerTextOfButton);

    if(innerTextOfButton=="click")
    {
        container1Node[0].style.left="-275px";
        barNode.setAttribute("data-foo","unclick");
        console.log("text1");
    }
    else{
        container1Node[0].style.left="0px";
        barNode.setAttribute("data-foo","click");
        console.log("text");
    }
}

var request=new XMLHttpRequest();
request.open("GET","https://dev.deepthought.education/assets/uploads/files/others/project.json")
request.send();
request.onload=function(){
    var data= JSON.parse(request.responseText);
    console.log(data);

   var youtubeVideo=document.getElementById("video")
   var video=youtubeVideo.children[0];
//    console.log(video);
   video.setAttribute("src",data.tasks[0].assets[8].display_asset_video)
//    console.log(video);

   var audio=document.getElementById("audio")
//    console.log(audio);
   audio.setAttribute("src",data.tasks[0].assets[7].display_asset_url)
//    console.log(audio);

var pdf=document.getElementById("pdf")
   var pdfDocument=pdf.children[0];
   console.log(pdfDocument);

   pdfDocument.setAttribute("src",data.tasks[0].assets[3].display_asset_docs)
   console.log(pdfDocument);
}