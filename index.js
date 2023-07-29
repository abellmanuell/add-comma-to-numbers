"use strict"
// debugger
function addCommaToNumber(number = 0){
  let numStr = String(number), 
      result = [], 
      figure = [], 
      track = numStr,
      extractNum,
      periodIndex = numStr.indexOf(".");

    if(numStr.includes('.')){
      extractNum = numStr.slice(0, periodIndex);
    }else{
      extractNum = numStr;
    }
      
      for(let i = (extractNum.length - 1); i >= -1; i--){
        if(figure.length == 3){
          result.unshift(figure.join(""));
          if(i != -1) i = i + 1;
          figure = [];
        }else if(track.length == 0){
          result.unshift(figure.join(""));
        }
        else{
          figure.unshift(extractNum[i]);
          track = track.slice(0, i);
        }
      }
  if(periodIndex != -1) {
    return result.join(",").concat(numStr.slice(periodIndex));
  } else {
    return result.join(",");
  }

}


const input =  document.getElementsByTagName('input'),
      h1 = document.getElementsByTagName('h1')[1];

const btn = input[1],
      text = input[0];
btn.addEventListener('click', (ev)=>{
  if(!Number.parseInt(text.value)){
    alert("Invalid input!")
  }else{
    h1.textContent = addCommaToNumber(text.value)
    text.value = ""
  }
})
