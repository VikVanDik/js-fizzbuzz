const boxContainer = document.querySelector('.box-container')

for (let i = 1; i <= 100; i++) {
  const box = document.createElement ('div')
  box.classList.add('box');
  box.append(i);
  
  boxContainer.append(box)
}

