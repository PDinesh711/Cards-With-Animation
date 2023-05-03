function closedpop(){
  document.getElementById('pop').style.display="none";
//   document.getElementsByTagName('button').style.display="none"
    // document.getElementById('pop').style.transform="translateX(50px)"
    // document.getElementById('pop').style.transform="skewX(340deg)"
}
function refresh(){
  document.getElementById('pop').style.display="block";
  document.getElementById('pop').style.transform=""
}
function scale(){
  document.getElementById('pop').style.transition="5s"
    document.getElementById('pop').style.transform="scale(50%)"
}

function skew(){
  document.getElementById('pop').style.transition="5s"
     document.getElementById('pop').style.transform="skew(180deg)";
}

function rotate(){
  document.getElementById('pop').style.transition="5s"
     document.getElementById('pop').style.transform="rotate(360deg)";
}

// function translate(){
//   // document.getElementById('pop').style.transition="2s" 
//      document.getElementById('pop').style.transform="translateX(100px)";
// }
function scaleX(){
  document.getElementById('pop').style.transition="5s"
  document.getElementById('pop').style.transform="scaleX(150%)";
}

function skewY(){
  document.getElementById('pop').style.transition="5s"
     document.getElementById('pop').style.transform="skewX(180deg)";
}

function rotateZ(){
  document.getElementById('pop').style.transition="5s"
     document.getElementById('pop').style.transform="rotateY(360deg)";
}

// pop1 

function closedpop1(){
  document.getElementById('pop1').style.display="none";
//   document.getElementsByTagName('button').style.display="none"
    // document.getElementById('pop').style.transform="translateX(50px)"
    // document.getElementById('pop').style.transform="skewX(340deg)"
}
function refresh1(){
  document.getElementById('pop1').style.display="block";
  document.getElementById('pop1').style.transform=""
}
function scale1(){
  document.getElementById('pop1').style.transition="5s"
    document.getElementById('pop1').style.transform="scale(50%)"
}

function skew1(){
  document.getElementById('pop1').style.transition="5s"
     document.getElementById('pop1').style.transform="skew(180deg)";
}

function rotate1(){
  document.getElementById('pop1').style.transition="5s"
     document.getElementById('pop1').style.transform="rotate(360deg)";
}

function scaleX1(){
  document.getElementById('pop1').style.transition="5s"
  document.getElementById('pop1').style.transform="scaleY(-1%)";
}

function skewY1(){
  document.getElementById('pop1').style.transition="5s"
     document.getElementById('pop1').style.transform="skewY(180deg)";
}

function rotateZ1(){
  document.getElementById('pop1').style.transition="5s"
     document.getElementById('pop1').style.transform="rotateZ(360deg)";
}