const display = document.getElementsByTagName('input')[0];
const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    const value = buttons[i].textContent;

    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      try {
        const expression = display.value
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/−/g, '-');
        display.value = eval(expression);
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
}