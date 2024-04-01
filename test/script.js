
function startPrank() {
  const colors = ['#ff6347', '#ffa07a', '#20b2aa', '#9370db', '#ff7f50']; // Array of colors for alerts

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Randomly select a color
      const style = `background-color: ${randomColor}; color: white; font-size: 18px; padding: 20px; border-radius: 10px;`;
      
      alert("You've been pranked! Happy April Fools' Day! 🎁");
      const alertBoxes = document.querySelectorAll('.alert');
      alertBoxes.forEach(alertBox => alertBox.setAttribute('style', style));
    }, i * 2000); // Change the delay (2000ms = 2 seconds) between alerts if needed
  }
}
