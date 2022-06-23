function clicked(){
    if(document.getElementById("dest").style.display == "none"){
        document.getElementById("dest").style.display = "flex";
    }
    else{
        document.getElementById("dest").style.display = "none";
    }
}
function click(){
    console.log("Click");
}
function clk(n){
    let a = document.getElementsByClassName("dest");
    console.log(a[n].innerHTML);
    document.querySelector("#end #navbutton-1 span").innerHTML = a[n].innerHTML;
    document.getElementById("dest").style.display="none";
}