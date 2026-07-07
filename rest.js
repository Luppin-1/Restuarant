const popup = document.querySelector("#popup");
const popupLink = document.querySelector(".popup-link");
const popupmsg = document.querySelector(".popup-msg");
const body = document.querySelector("body");

setTimeout(function(){
    popup.classList.remove("popup-none");
    popup.classList.add("popup");
    

},1500);

popupLink.addEventListener('click',function(){
    popup.classList.add("popup-none");
    

})
let timer = 1;
setInterval(function(){
    if(timer === 1){
        popupLink.classList.remove("popup-link");
        popupLink.classList.add("popup-link2");
        timer = 0;
    }else{
        popupLink.classList.remove("popup-link2");
        popupLink.classList.add("popup-link");
        timer = 1;
        
    }
},500)

popupmsg.addEventListener("click", function(e){
    e.stopPropagation();
});

document.addEventListener('click',function(){
    popup.classList.add("popup-none");
    
})




