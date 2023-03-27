

const createElementHtml = (tag, id, content) => {
    const elem = document.createElement(tag);    
    elem.id = id;
    elem.innerHTML= content;
    return elem;
  }
  
 //contenitore che va al vcentro
  const div = createElementHtml('div', 'box', '');
 document.body.appendChild(div);
  
  const numbers = createElementHtml('span', 'numbers', '0');
  div.appendChild(numbers);
  //contenitore bottoni
  const divButtons= createElementHtml('div', 'div-buttons', '');
  div.appendChild(divButtons);
  const minus= createElementHtml('button', 'minus', '-');
  divButtons.appendChild(minus)
  const plus= createElementHtml('button', 'plus', '+');
  divButtons.appendChild(plus);
  
  const reset= createElementHtml('button', 'reset', 'reset');
  div.appendChild(reset);
  let integer=0;  



  plus.addEventListener('click', function(){
    integer+=1;
    numbers.innerHTML= integer;
});
minus.addEventListener('click', function(){
    integer-=1;
    numbers.innerHTML= integer;
    
});
reset.addEventListener('click', function(){
    integer=0;
    numbers.innerHTML=integer;
});











  






