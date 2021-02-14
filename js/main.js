'use strict';

{
  class Panel{
    constructor(){
      const section=document.createElement('section');
      section.classList.add('panel');

      this.img=document.createElement('img');
      this.img.src= 'img/seven.png';

      this.btn = document.createElement('div');
      this.btn.textContent = 'STOP';
      this.btn.classList.add('btn');

      section.appendChild(this.img);
      section.appendChild(this.btn);

      const main= document.querySelector('main');
      main.appendChild(section);
    }
  }

  const panels=[
    new Panel(),
    new Panel(),
    new Panel()
  ];

}
