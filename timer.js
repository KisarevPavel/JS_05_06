
  var i = 0;
  var k = 0;
  var p = 1;
  var timer1,timer2,timer3;
  var init = 0;
  
  
function setTimer(){
	if( init == 0 ){ 
		Start(); //alert(init);
		return false;
		}
	if( init == 1){ Stop(); //alert(init);
		return false;
	}
}

function Start() {
  init = 1;
  document.getElementById('start').innerHTML = 'Stop';
  var ms = document.querySelector('.ms');
  var sec = document.querySelector('.sec');
  var minutes = document.querySelector('.min');
  timer1 = setInterval(function() {
	if (i%100 == 0) { i = 1; }
	ms.innerHTML = i;
    i++;
  }, 1);
  
  timer2 = setInterval(function() {
	if (k%60 == 0) { k = 0; }
	sec.innerHTML = k;
    k++;
  }, 1000);
  
  timer3 = setInterval(function() {
	minutes.innerHTML = p;
    p++;
  }, 60000);
}


function Stop (){
	init = 0;
	clearInterval(timer1);
	clearInterval(timer2);
	clearInterval(timer3);
	document.getElementById('start').innerHTML = 'Start';
	//alert("!!");
	}
function Clear(){
	clearInterval(timer1);
	clearInterval(timer2);
	clearInterval(timer3);
	i = 1; k = 1; p = 1; init = 0;
	document.getElementById('start').innerHTML = 'Start';
	document.querySelector('.ms').innerHTML = "0";
	document.querySelector('.sec').innerHTML = "0";
	document.querySelector('.min').innerHTML = "0";
	}

// вызов
//printTime();






