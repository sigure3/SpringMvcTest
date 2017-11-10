(function(){
  'use strict'

  var left = document.getElementById('left');
  var center = document.getElementById('center');
  var right = document.getElementById('right');

  var bell = 'img/bell.png'; //count = 1
  var seven = 'img/seven.png'; //count = 2
  var cherry = 'img/cherry.png'; //count = 0
  var leftCount = 0;
  var centerCount = 0;
  var rightCount = 0;
  var stopLeft;
  var stopCenter;
  var stopRight;
  var leftRunning = false;
  var centerRunning = false;
  var rightRunning = false;
  var firstTime = true;
  var restart;

  leftImg.src = seven;
  centerImg.src = seven;
  rightImg.src = seven;


  medal.value = 10;

  function store() {
     restart = confirm("メダルを購入しますか?");
     if ( restart === true ) {
         medal.value = parseInt(medal.value) + 50;
         medal.className = '';
         result.className = '';
         result.value = '';
         alert("メダルを50枚購入しました");
     }else{
         alert("買ってくれよ!!");
     }
}

  function juge() {
    if(firstTime === true) {
      return;
    }

    if(leftRunning === false && centerRunning === false && rightRunning === false) {
      if(leftCount === 0 && centerCount === 0 && rightCount === 0) {
        result.value = 'チェリー';
        medal.value = parseInt(medal.value) + 4;
      } else if(leftCount === 1 && centerCount === 1 && rightCount === 1) {
        result.value = 'ベル';
        medal.value = parseInt(medal.value) + 15;
      }else if(leftCount === 2 && centerCount === 2 && rightCount === 2) {
        result.value = '大当たり';
        medal.value = parseInt(medal.value) + 50;
      } else {
        result.value = 'はずれ ';
      }
    } else {
      return;
    }
  }

  function leftLoop() {
    stopLeft = setTimeout(function() {
      if(leftCount === 0) {
        leftCount++;
        leftImg.src = bell;
      } else if(leftCount === 1) {
        leftCount++;
        leftImg.src = seven;
      } else if(leftCount === 2) {
        leftCount = 0;
        leftImg.src = cherry;
      }
      leftLoop();
    },200);
  }

  function centerLoop() {
    stopCenter = setTimeout(function() {
      if(centerCount === 0) {
        centerCount++;
        centerImg.src = bell;
      } else if(centerCount === 1) {
        centerCount++;
        centerImg.src = seven;
      } else {
        centerCount = 0;
        centerImg.src = cherry;
      }
      centerLoop();
    },200);
  }

  function rightLoop() {
    stopRight = setTimeout(function() {
      if(rightCount === 0) {
        rightCount++;
        rightImg.src = bell;
      } else if(rightCount === 1) {
        rightCount++;
        rightImg.src = seven;
      } else {
        rightCount = 0;
        rightImg.src = cherry;
      }
      rightLoop();
    },200);
  }

  left.addEventListener('click',function() {
    if(leftRunning === false) {
      return;
    }
    leftRunning = false;
    clearTimeout(stopLeft);
    juge();
  });

  center.addEventListener('click',function() {
    if(centerRunning === false) {
      return;
    }
    centerRunning = false;
    clearTimeout(stopCenter);
    juge();
  });

  right.addEventListener('click',function() {
    if(rightRunning === false) {
      return;
    }
    rightRunning = false;
    clearTimeout(stopRight);
    juge();
  });

  spin.addEventListener('click',function() {
    if(leftRunning === true || centerRunning === true || rightRunning === true) {
      return;
    }
    if(medal.value < 3 ){
      medal.className = 'medalNone';
      result.className = 'medalNone';
      result.value = 'メダルが足りません';
      store();
      return;
    }
    result.value = '';
    medal.value -= 3;
    firstTime = false;
    leftRunning = true;
    centerRunning = true;
    rightRunning = true;
    leftLoop();
    centerLoop();
    rightLoop();
  });
})();
