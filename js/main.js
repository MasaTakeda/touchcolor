'use strict';

{
  const target1 = document.getElementById('target1');
  const target2 = document.getElementById('target2');
  const target3 = document.getElementById('target3');
  const target4 = document.getElementById('target4');
  const target5 = document.getElementById('target5');
  const target6 = document.getElementById('target6');

  target1.addEventListener('click',() => {
    target1.classList.toggle('circle1');
  });

  target2.addEventListener('click',() => {
    target2.classList.toggle('circle2');
  });

  target3.addEventListener('click',() => {
    target3.classList.toggle('circle3');
  });

  target4.addEventListener('click',() => {
    target4.classList.toggle('circle4');
  });

  target5.addEventListener('click',() => {
    target5.classList.toggle('circle5');
  });
  
  target6.addEventListener('click',() => {
    target6.classList.toggle('circle6');
  });
}