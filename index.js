var arr=document.querySelectorAll(".navLinks");

arr[0].addEventListener("mouseenter",function(){
    document.querySelector("#sec1").classList.add("Visible");
    document.querySelector("#sec1").classList.add("upperheader");
    for(var i=0;i<10;i++)
    {
        if(i!==0)
        {
            document.querySelector("#sec"+(i+1)).classList.remove("Visible");
        }
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec1").classList.remove("Visible");
    });
    // "wheel scroll".split(" ").forEach( function(e){
    //     document.querySelector(this).classList.remove("Visible");
    //   });
});

arr[1].addEventListener("mouseenter",function(){
    document.querySelector("#sec2").classList.add("Visible");
    // document.querySelector("body").filterBlur="10px";
    for(var i=0;i<10;i++)
    {
        if(i!==1)
        {
            document.querySelector("#sec"+(i+1)).classList.remove("Visible");
        }
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec2").classList.remove("Visible");
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
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec3").classList.remove("Visible");
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
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec4").classList.remove("Visible");
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
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec5").classList.remove("Visible");
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
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec6").classList.remove("Visible");
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
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec7").classList.remove("Visible");
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
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec8").classList.remove("Visible");
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
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec9").classList.remove("Visible");
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
    }
    document.querySelector(".upperheader").addEventListener("mouseleave",function(){
        document.querySelector("#sec10").classList.remove("Visible");
    });
});
document.querySelector("#right_icons").addEventListener("mouseenter",function(){
    var arr2=document.querySelectorAll(".hoverMenu");
    for(var i=0;i<10;i++)
    {
        arr2[i].classList.remove("Visible");
    }
});
document.querySelector("#apple_logo").addEventListener("mouseenter",function(){
    var arr2=document.querySelectorAll(".hoverMenu");
    for(var i=0;i<10;i++)
    {
        arr2[i].classList.remove("Visible");
    }
});