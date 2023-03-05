var tab_bar = document.querySelectorAll(".tab-bar span");
var tab_content = document.querySelectorAll(".tab-content");

for (let i = 0; i < tab_bar.length;i++) {

      tab_bar[i].addEventListener("click",function(){
      
      for (let j =0 ;j<tab_content.length;j++) {
        tab_content[j].classList.remove("active");
      }

      tab_content[i].classList.add("active");
      });
    

}

