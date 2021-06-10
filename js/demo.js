function setContent(){
    document.getElementById("p1").innerHTML="my <span style='color:yellow'>html</span> code....."
    document.getElementById("p1").style.color="red";
    document.getElementById("p1").style.fontSize="30px";

}
function getContent(){
    alert("hey "+document.getElementById("myinput").value)
}
function change(){
    document.getElementById('mydiv').innerHTML='<p>dynamic content.....</p>'
}