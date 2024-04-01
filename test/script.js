function startPrank() {
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      alert("You've been pranked! Happy April Fools' Day!");
    }, i * 2000); // Change the delay (2000ms = 2 seconds) between alerts if needed
  }
}