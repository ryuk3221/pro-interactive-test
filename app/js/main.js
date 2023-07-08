$(function(){

  $('.goods__inner').slick({
    arrows: true,
    variableWidth: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-arrow-right.svg"></button>',
  });

});



document.querySelectorAll('.sidebar__btn').forEach(el => {
  el.onclick = function () {
    if (this.classList.contains('sidebar__btn--active')) {
      el.classList.remove('sidebar__btn--active');
      const id = el.dataset.value;
      const dropMenu = el.closest(`#${id}`).querySelector('ul');
      dropMenu.style.height = '0';
      dropMenu.style.margin = '0';
    } else {
      el.classList.toggle('sidebar__btn--active');
      const id = el.dataset.value;
      const dropMenu = el.closest(`#${id}`).querySelector('ul');
      dropMenu.style.height = dropMenu.scrollHeight + 'px';
      dropMenu.style.margin = '18px';
    }  
  };
});

document.querySelectorAll('.tab__item').forEach(el => {
  el.onclick = function () {
    el.classList.toggle('tab__item--active');
  }
})