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

    getRandomImage(){
      const images=[
        'img/seven.png',
        'img/bell.png',
        'img/cherry.png',
      ];
      return images[Math.floor(Math.random()*images.length)];
    }

    spin(){
      this.img.src = this.getRandomImage();
      setTimeout(()=>{
        this.spin()
      },50);
    }
  }

  const panels=[
    new Panel(),
    new Panel(),
    new Panel()
  ];

  const spin = document.getElementById('spin');
  spin.addEventListener('click',()=>{
    panels.forEach(panel => {
      panel.spin();
    });
  });
}
