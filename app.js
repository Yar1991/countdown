// animatons //

const headerBox = document.querySelector('.title-box');
const boxes = document.querySelectorAll('.content-box div');

gsap.from(headerBox, {duration: 2, opacity: 0, ease: "circ.out", delay: 3})
gsap.from(boxes, {duration: 1, opacity: 0, y: '-1000px', ease: "circ.out", delay: .5, stagger: 0.3})

// countdown //

setInterval(()=>{

  const itemsBox = document.querySelector('.content-box');
  const items = document.querySelectorAll('.item');
  const tempYear = new Date().getFullYear();
  const tempMonth = new Date().getMonth();
  const tempDay = new Date().getDate();
  const futureTime = new Date(tempYear, tempMonth, tempDay + 15, 10, 00, 0).getTime();
  const currentTime = new Date().getTime();
  const difference = futureTime - currentTime;

  let days = difference / (24 * 60 * 60 * 1000); // -- days till the future date 
  let hours = (difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000); // -- hours till the future date 
  let minutes = (difference % (60 * 60 * 1000)) / (60 * 1000); // -- minutes till the future date
  let seconds = (difference% (60 * 1000)) / 1000; // -- seconds till the future date 

  let values = [days, hours, minutes, seconds];

  items.forEach((item, index)=>{

    item.innerHTML = Math.floor(values[index]);
    if(values[index] < 10){
      item.innerHTML = `0${Math.floor(values[index])}`; 
    }

  })
  
  if(difference < 0){
    items.forEach((item)=>{
      item.innerHTML = '00';
    })
    clearInterval();
  }

}, 1000)