const elements = document.querySelectorAll('.has-tooltip');
const tooltip = document.querySelector('.tooltip');

elements.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    const tooltips = document.querySelectorAll('.tooltip_active');
    tooltips.forEach((e) => e.remove());
    elements.forEach((el) => el.style.position = null);
    e.style = 'position: relative';
    const activeTooltip = tooltip.cloneNode(true);
    activeTooltip.classList.add('tooltip_active');
    activeTooltip.innerText = e.title;
    activeTooltip.style.left = `${e.getBoundingClientRect().left}px`
    e.insertAdjacentHTML('afterend', activeTooltip.outerHTML);
  });
});