let changeColor = document.getElementById('toggleOverlay');

  changeColor.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: "./overlay.js"});
   
      chrome.tabs.insertCSS(
        tabs[0].id,
        {file: "/overlay.css"})
        });
  };



