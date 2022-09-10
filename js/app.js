window.addEventListener('DOMContentLoaded',function () {

  const title = document.querySelectorAll('.spoiler__title'),
        text = document.querySelectorAll('.spoiler__text'),
        parrent = document.querySelector('.spoiler');


  function hideText() {
    text.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show');
      item.classList.add('fade');
    });
    title.forEach(item => {
      item.classList.remove('press');
    });
  }
  hideText();
  showText(0);
  function showText(i) {
    text[i].classList.add('show');
    title[i].classList.add('press');
    text[i].classList.remove('hide');
    text[i].classList.add('fade');
  }

  parrent.addEventListener('click',function (event) {
    const target = event.target;
    if (target && target.classList.contains('spoiler__title') && !target.classList.contains('press')){
      title.forEach((item, i) => {
        if(item == target){
          hideText();
          showText(i);
        }
      });
    } else{
      hideText();
    }
  })
  
})