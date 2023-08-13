var arr=document.querySelectorAll(".navLinks");

// FUNCTION TO ADD TRANSITION TO NAVBAR

function takeItDown(sectionId)
{
    document.querySelector(sectionId).style.transform= "translateY(0%)";
    document.querySelector(sectionId).style.transition= "0.3s";
    document.querySelector("#navbar").classList.add("navTransition");

    blur("main");
    blur("footer");
    
}

// FUNCTION TO REVERT BACK THE TRANSITION WHEN MOUSE HOVER IS OVER

function takeBackUp(){
    for(var i=0;i<10;i++)
    {
        document.querySelector("#sec"+(i+1)).style.transform="translateY(-100%)";
        document.querySelector("#sec"+(i+1)).style.transition="0.3s";
        document.querySelector("#navbar").classList.remove("navTransition");

        clearBlur("main");
        clearBlur("footer");
    }
}

// FUNCTIONS TO ADD AND REMOVE BLUR TO MAIN AND FOOTER SECTION IN CASE OF HOVER

function blur(target)
{
    document.querySelector(target).classList.add("blur");
}
function clearBlur(target)
{
    document.querySelector(target).classList.remove("blur");
}

//FOR STORE LINK

arr[0].addEventListener("mouseenter",function(){
    document.querySelector("#sec1").classList.add("Visible");
    // document.querySelector("#sec1").classList.add("upperheader");
    for(var i=0;i<10;i++)
    {
        if(i!==0)
        {
            document.querySelector("#sec"+(i+1)).classList.remove("Visible");
        }
        takeItDown("#sec"+(i+1));
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec1").classList.remove("Visible");
        takeBackUp();
    });
    // "wheel scroll".split(" ").forEach( function(e){
    //     document.querySelector(this).classList.remove("Visible");
    //   });
});

//FOR MAC LINK

arr[1].addEventListener("mouseenter",function(){
    document.querySelector("#sec2").classList.add("Visible");
    // document.querySelector("body").filterBlur="10px";
    for(var i=0;i<10;i++)
    {
        if(i!==1)
        {
            document.querySelector("#sec"+(i+1)).classList.remove("Visible");
        }
    takeItDown("#sec"+(i+1));
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec2").classList.remove("Visible");
        takeBackUp();
    });
});

arr[2].addEventListener("mouseenter",function(){
    document.querySelector("#sec3").classList.add("Visible");
    for(var i=0;i<10;i++)
    {
        if(i!==2)
        {
            document.querySelector("#sec"+(i+1)).classList.remove("Visible");
        }
    takeItDown("#sec"+(i+1));
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec3").classList.remove("Visible");
        takeBackUp();
    });
});

arr[3].addEventListener("mouseenter",function(){
    document.querySelector("#sec4").classList.add("Visible");
    for(var i=0;i<10;i++)
    {
        if(i!==3)
        {
            document.querySelector("#sec"+(i+1)).classList.remove("Visible");
        }
    takeItDown("#sec"+(i+1));
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec4").classList.remove("Visible");
        takeBackUp();
    });
});

arr[4].addEventListener("mouseenter",function(){
    document.querySelector("#sec5").classList.add("Visible");
    for(var i=0;i<10;i++)
    {
        if(i!==4)
        {
            document.querySelector("#sec"+(i+1)).classList.remove("Visible");
        }
    takeItDown("#sec"+(i+1));
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec5").classList.remove("Visible");
        takeBackUp();
    });
});

arr[5].addEventListener("mouseenter",function(){
    document.querySelector("#sec6").classList.add("Visible");
    for(var i=0;i<10;i++)
    {
        if(i!==5)
        {
            document.querySelector("#sec"+(i+1)).classList.remove("Visible");
        }
    takeItDown("#sec"+(i+1));
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec6").classList.remove("Visible");
        takeBackUp();
    });
});

arr[6].addEventListener("mouseenter",function(){
    document.querySelector("#sec7").classList.add("Visible");
    for(var i=0;i<10;i++)
    {
        if(i!==6)
        {
            document.querySelector("#sec"+(i+1)).classList.remove("Visible");
        }
    takeItDown("#sec"+(i+1));
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec7").classList.remove("Visible");
        takeBackUp();
    });
});

arr[7].addEventListener("mouseenter",function(){
    document.querySelector("#sec8").classList.add("Visible");
    for(var i=0;i<10;i++)
    {
        if(i!==7)
        {
            document.querySelector("#sec"+(i+1)).classList.remove("Visible");
        }
    takeItDown("#sec"+(i+1));
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec8").classList.remove("Visible");
        takeBackUp();
    });
});

arr[8].addEventListener("mouseenter",function(){
    document.querySelector("#sec9").classList.add("Visible");
    for(var i=0;i<10;i++)
    {
        if(i!==8)
        {
            document.querySelector("#sec"+(i+1)).classList.remove("Visible");
        }
    takeItDown("#sec"+(i+1));
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec9").classList.remove("Visible");
        takeBackUp();
    });
});

arr[9].addEventListener("mouseenter",function(){
    document.querySelector("#sec10").classList.toggle("Visible");
    for(var i=0;i<10;i++)
    {
        if(i!==9)
        {
            document.querySelector("#sec"+(i+1)).classList.remove("Visible");
        }
    takeItDown("#sec"+(i+1));
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec10").classList.remove("Visible");
        takeBackUp();
    });
});
    
var arr2=document.querySelectorAll(".hoverMenu");

document.querySelector("#right_icons").addEventListener("mouseenter",function(){
    for(var i=0;i<10;i++)
    {
        takeBackUp();
        arr2[i].classList.remove("Visible");
    }
});
document.querySelector("#apple_logo").addEventListener("mouseenter",function(){
    for(var i=0;i<10;i++)
    {
        takeBackUp();
        arr2[i].classList.remove("Visible");
    }
});


// CODE TO PLAY/PAUSE THE 'GET BACK TO SCHOOL' VIDEO--
var state="played";
document.querySelector("#button").addEventListener("click",function(){
    document.querySelector("#button").classList.toggle("fa-circle-pause");
    document.querySelector("#button").classList.toggle("fa-circle-play");
    if(state==="played")
    {
        document.querySelector("#forUniversity video").pause();
        state="paused";
    }
    else{
        document.querySelector("#forUniversity video").play();
        state="played";
    }
        
});


//CODE FOR CAROUSEL MOVEMENT
const carousel=document.querySelector("#carousel");

const dragging=(e)=>{
    carousel.scrollLeft=e.pageX;
}
carousel.addEventListener("mousemove",dragging);