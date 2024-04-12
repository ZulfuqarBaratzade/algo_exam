const startBtn = document.getElementById("startBtn")
const cont = document.getElementById("cont")
startBtn.addEventListener("click", function() {
    var startBtn = document.querySelector('.start_btn');
    var infoBox = document.querySelector('.info_box');
    startBtn.style.display = 'none';
    infoBox.style.display = 'block';
  });
  var countdownElement = document.getElementById('countdown');
  var countdownInterval;
  
  cont.addEventListener('click', function() {
      var info_box = document.querySelector(".info_box");
      var quiz_box = document.querySelector('.quiz_box');
      info_box.style.display = 'none';
      quiz_box.style.display = 'block';
      var startTime = 90 * 60;
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
      countdownInterval = setInterval(function() {
        var minutes = Math.floor(startTime / 60);
        var seconds = startTime % 60;
        var secondsFormatted = seconds < 10 ? '0' + seconds : seconds;
        countdownElement.textContent = minutes + ':' + secondsFormatted;
        startTime--;
  
        if (startTime < 0) {
          clearInterval(countdownInterval);
          countdownElement.textContent = 'Finish';
        }
      }, 1000);
  });
  