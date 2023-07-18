function countDown() {
    let span=document.querySelector('span')
    let time=span.textContent
    time=time-1
    span.innerHTML=time
    if(time===0){
      span.innerHTML=0
      clearInterval(timer)
  }
}
let timer = setInterval(countDown, 1000);