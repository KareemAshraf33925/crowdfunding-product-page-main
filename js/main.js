
var form=document.getElementById("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
})
// show-model&&close-model
var closemodal=document.querySelector(".close-modal");
var modelback=document.querySelector(".model-back");
var back=document.querySelector(".back");
back.addEventListener("click",()=>{
    modelback.style.display="block";
})
closemodal.addEventListener("click",()=>{
    modelback.style.display="none";
})
// select-bambo-stand
var selectbambo=document.querySelector(".select-bambo");
selectbambo.addEventListener("click",()=>{
    var bambostand=document.querySelectorAll(".bambo-stand");
    modelback.style.display="block";
    bambostand.forEach((bambo)=>{
        bambo.classList.add("active");
        bambo.style.borderColor="hsl(176, 50%, 47%)";
    })

})
// select-Black edition
var selectblack=document.querySelector(".select-black");
selectblack.addEventListener("click",()=>{
    var blackeditionstand=document.querySelectorAll(".black-edition-stand");
    modelback.style.display="block";
   blackeditionstand.forEach((edition)=>{
        edition.classList.add("active");
        edition.style.borderColor="hsl(176, 50%, 47%)";
    })

})
// select-Pledge with no reward
var pledgeno=document.getElementById("pledge-no");
pledgeno.addEventListener("click",()=>{
    var plednoreward=document.querySelectorAll(".pled-no-reward");
    plednoreward.forEach((pled)=>{
        pled.classList.add("active");
        pled.style.borderColor="hsl(176, 50%, 47%)";
    });
    var bambostand=document.querySelectorAll(".bambo-stand");
    bambostand.forEach((bambo)=>{
        bambo.classList.remove("active");
        bambo.style.borderColor="";
    });
    var blackeditionstand=document.querySelectorAll(".black-edition-stand");
    blackeditionstand.forEach((edition)=>{
         edition.classList.remove("active");
         edition.style.borderColor="";
     })

})
// select-Bamboo Stand-back
var bambo=document.getElementById("bambo");
bambo.addEventListener("click",()=>{
    var plednoreward=document.querySelectorAll(".pled-no-reward");
    plednoreward.forEach((pled)=>{
        pled.classList.remove("active");
        pled.style.borderColor="";
    });
    var bambostand=document.querySelectorAll(".bambo-stand");
    bambostand.forEach((bambo)=>{
        bambo.classList.add("active");
        bambo.style.borderColor="hsl(176, 50%, 47%)";
    });
    var blackeditionstand=document.querySelectorAll(".black-edition-stand");
    blackeditionstand.forEach((edition)=>{
         edition.classList.remove("active");
         edition.style.borderColor="";
     })
})
// select-Black Edition Stand
 var blackedit=document.getElementById("black-edit");
 blackedit.addEventListener("click",()=>{
    var plednoreward=document.querySelectorAll(".pled-no-reward");
    plednoreward.forEach((pled)=>{
        pled.classList.remove("active");
        pled.style.borderColor="";
    });
    var bambostand=document.querySelectorAll(".bambo-stand");
    bambostand.forEach((bambo)=>{
        bambo.classList.remove("active");
        bambo.style.borderColor="";
    });
    var blackeditionstand=document.querySelectorAll(".black-edition-stand");
   blackeditionstand.forEach((edition)=>{
        edition.classList.add("active");
        edition.style.borderColor="hsl(176, 50%, 47%)";
    })


 })
 //.model-support
 var modelsupport=document.querySelector(".model-support");
 var Continue=document.querySelectorAll(".continue");
 Continue.forEach((cont)=>{
    cont.addEventListener("click",()=>{
        modelsupport.style.display="block";
        modelback.style.display="none";
    })
 })
//  remove-got
var got=document.querySelector(".got");
got.addEventListener("click",()=>{
    modelsupport.style.display="none";
})
// show-hide-menue
var items=document.querySelector(".items");
var hamburger=document.querySelector(".hamburger");
var closemenu=document.querySelector(".close-menu");
hamburger.addEventListener("click",()=>{
    items.style.display="block";
    hamburger.style.display="none";
    closemenu.style.display="block";
});
closemenu.addEventListener("click",()=>{
    items.style.display="none";
    closemenu.style.display="none";
    hamburger.style.display="block";
})

