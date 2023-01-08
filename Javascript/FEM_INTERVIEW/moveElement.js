{/* <html>
  <body>
    <div>
      <div id="food">
        🌮
      </div>
    </div>
  </body>
</html> */}

function moveElement(duration, distance, element) {
    const start = performance.now();
    function move(currenTime) {
        console.log(currenTime);
        const elapsed = currenTime - start;
        const progress = elapsed / duration;
        const amountToMove = progress * distance; 
        element.style.transform = `translateX(${amountToMove}px)`
        if(amountToMove < distance) {
            requestAnimationFrame(move)
        }
    }
    requestAnimationFrame(move)
}

moveElement(1000,200,document.getElementById('food'));