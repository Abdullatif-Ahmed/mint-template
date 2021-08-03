var mixer = mixitup('.showcase');

let button_up = document.querySelector(".up");

            window.onscroll = function(){
                if(this.scrollY>=1000){
                    button_up.classList.add("show");
                }else{
                    button_up.classList.remove("show")
                }
            }
            button_up.onclick = function(){
                window.scrollTo({
                    top : 0,
                    behavior: "smooth"
                })
            }