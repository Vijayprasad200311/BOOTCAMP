const mybutton=document.getElementById("button");
const myimg=document.getElementById("img");

mybutton.addEventListener("click", event=>{

    if(myimg.style.display==='none'){
        myimg.style.display='block';
        mybutton.textContent='hide';
    }
    else{
    myimg.style.display="none";
    mybutton.textContent='show';
    }
});