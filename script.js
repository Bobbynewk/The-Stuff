(function flashScreen() {
  let isBlack = false;

  // Set full screen style
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.height = '100vh';
  document.body.style.width = '100vw';

  // Start flashing
  setInterval(() => {
    document.body.style.backgroundColor = isBlack ? 'white' : 'black';
    isBlack = !isBlack;
  }, 500); // Change 500 to control speed (ms)
})();
