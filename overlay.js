var toggle = 0

function renderOverlay() {

  // var link = document.createElement('link');
  //   link.rel = 'stylesheet';
  //   link.href = '/overlay.css';
  //   document.head.appendChild(link);

  let overlay = document.createElement("DIV");
  overlay.className = "custom-inject-overlay";
  overlay.id = "custom-inject-overlay";
  let label = "<div class='custom-inject-overlay cio-label'><p>AGENT TOOLS</p></div>";

  overlay.innerHTML += "<div class='cio-layer cio-one'><p>Test Layer</p><p>Test Layer</p><p>Test Layer</p><p>Test Layer</p><p>Test Layer</p></div>";

  overlay.innerHTML += label;
  
  document.body.appendChild(overlay);
  console.log("Finished Rendering Overlay");
}

function checkToggle(){
  let overlay = document.getElementById("custom-inject-overlay")
  console.log(overlay);
}

renderOverlay();
checkToggle();