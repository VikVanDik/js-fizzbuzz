const boxContainer = document.querySelector('.box-container')

for (let i = 1; i <= 100; i++) {
  const box = document.createElement ('div')
  boxContainer.append(box)
  
  if (i % 5 === 0 && i % 3 === 0) {
    box.classList.add ('buzz-fizz','box')
    box.append('Buzz-Fizz')
  }else if(i % 3 === 0){
    box.classList.add ('fizz','box')
    box.append('Fizz')
  }else if(i % 5 === 0){
    box.classList.add ('buzz','box')
    box.append('Buzz')
  }else {
    box.classList.add('box');
    box.append(i);
  }
  
}

