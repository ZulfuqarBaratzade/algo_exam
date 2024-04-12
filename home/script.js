const startBtn = document.getElementById("startBtn")
const cont = document.getElementById("cont")
startBtn.addEventListener("click", function() {
    var startBtn = document.querySelector('.start_btn');
    var infoBox = document.querySelector('.info_box');
    startBtn.style.display = 'none';
    infoBox.style.display = 'block';
  });

cont.addEventListener('click',function(){
  var info_box = document.querySelector(".info_box");
  var quiz_box = document.querySelector('.quiz_box');
  info_box.style.display = 'none';
  quiz_box.style.display = 'block';
  
})