const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((elem) => {
  elem.onclick = () => {
    elem.classList.add('tab_active');
    tabsContent[tabs.indexOf(elem)].classList.add('tab__content_active');
    for (let i = 0; i < tabs.length; i++) {
      if(tabs[i] !== elem) {
        tabs[i].classList.remove('tab_active');
        tabsContent[i].classList.remove('tab__content_active');
      } 
    }
  }
});