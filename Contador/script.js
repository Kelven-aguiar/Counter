let Counter = Number(document.querySelector('.Counter').innerHTML)

function soma(){
  Counter++
  document.querySelector('.Counter').innerHTML = Counter
}
function menos(){
  Counter--
  document.querySelector('.Counter').innerHTML = Counter
}
function reset(){
  Counter = 0
  document.querySelector('.Counter').innerHTML = Counter

}

function button(){
  if (Counter>=10) { 
    (document.querySelector('.Counter').style.color= "red")
   }
   if (Counter<=9) { 
    (document.querySelector('.Counter').style.color= "black")
   }
   if (Counter<=-1) { 
    (document.querySelector('.Counter').style.color= "aqua")
   }
   
}
