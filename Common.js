

//sidenavbar
let hamburger_icon_holder = document.querySelector(".hamburger_icon_holder");
let side_navbar_container = document.querySelector(".side_navbar_container");
let close_button =document.querySelector(".close_button");
let xmark = document.querySelector(".xmark");

hamburger_icon_holder.addEventListener("click", function(){
    side_navbar_container.style.left = "0";
    close_button.style.transform = "rotate(0deg)";

    
});

xmark.addEventListener("click", function(){
    side_navbar_container.style.left = "-50%";
    close_button.style.transform = "rotate(90deg)";
});

// button animation
let lets_start_container = document.querySelectorAll(".lets_start_container");
let grow_lets = document.querySelectorAll(".grow_lets");

lets_start_container.forEach(div => {
    div.addEventListener("mouseenter", function(){
        grow_lets.forEach(div =>{
            div.style.width = "100%";
        });
    });

    div.addEventListener("mouseleave", function(){
        grow_lets.forEach(div =>{
            div.style.width = "0%";
        });
    });
});

// product slider animation
let slider_container = document.querySelector(".slider_container");
let slider_holder = document.querySelector(".slider_holder");
let product_img = document.querySelectorAll(".product_img");
let total_img_length = product_img.length;
let img_current_index = 0;
let direction = 1;

const media_query = window.matchMedia('(max-width:850px)');

let arrow_left = document.querySelector(".arrow_left");
let arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", function(){
    img_current_index = (img_current_index + 1) % total_img_length;
    update();
});

arrow_left.addEventListener("click", function(){
    img_current_index = (img_current_index -1 + total_img_length) % total_img_length;
    update();
});

function update(){
    if(media_query.matches){
        const newTransform_length = -img_current_index * 7.5 + '%';
        slider_holder.style.transform = `translateX(${newTransform_length})`;
    }
    else{
        const newTransform_length = -img_current_index * 10 + '%';
        slider_holder.style.transform = `translateX(${newTransform_length})`;
    }
}

// automatically move slider    
setInterval(function(){
    img_current_index = img_current_index + direction;
    if(img_current_index == 7){
        direction = -1;
    }
    else if(img_current_index == 0){
        direction = 1;
    }
    update();

},5000);


// layout mouseenter animation 
let layout = document.getElementById("layout");
let three_layouts_container = document.querySelector(".three_layouts_container");
let media_query_for_mouseenter_layout = window.matchMedia("(max-width : 1300px)");

if(media_query_for_mouseenter_layout.matches){
    three_layouts_container.style.transform = "translateY(0%)";
    three_layouts_container.style.opacity = "1";
}
else{
   layout.addEventListener("mouseenter", function(){
        three_layouts_container.style.transform = "translateY(0%)";
        three_layouts_container.style.opacity = "1";
    });
    
}

