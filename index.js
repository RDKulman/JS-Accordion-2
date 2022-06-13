const accordionsList = document.querySelector('.faq__list');

if (accordionsList) {
  initAccordion();
}

function initAccordion() {
  accordionsList.addEventListener('click', (event) => {
    let target = event.target.closest('.accordion');

    if (!target) return;
    if (!accordionsList.contains(target)) return;
    
    // console.log(target);

    let hiddenItem = target.querySelector('.accordion__inner');
    // console.log(hiddenItem);

    if (target.dataset.openlist !== 'true') {
      target.removeAttribute('aria-expanded');
      target.setAttribute('aria-expanded', 'true');
      target.dataset.openlist = "true";

      hiddenItem.removeAttribute('aria-hidden');
      hiddenItem.setAttribute('aria-hidden', 'false');  

      hiddenItem.style.maxHeight = `${hiddenItem.scrollHeight}px`;
  
      target.classList.add('accordion--active');
    }
    else {
      target.removeAttribute('aria-expanded');
      target.setAttribute('aria-hidden', 'false');  
      target.dataset.openlist = "false";
  
      hiddenItem.removeAttribute('aria-hidden');
      hiddenItem.setAttribute('aria-hidden', 'true'); 

      hiddenItem.style.maxHeight = `0`;
      target.classList.remove('accordion--active');
    }

    window.addEventListener('resize', changeHeight);
  }); 
}

function changeHeight () {
  let faqItems = document.querySelectorAll('.accordion');
  
  faqItems.forEach(item => {
    if (item.dataset.openlist === 'true') {
      let itemInner = item.querySelector('[aria-hidden="false"]');
      if(parseInt(itemInner.style.maxHeight) !== itemInner.scrollHeight) {
        itemInner.style.maxHeight = `${itemInner.scrollHeight}px`;
      }
    }
  });
}