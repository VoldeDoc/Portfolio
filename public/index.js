let main =  document.getElementById('main')
let checkbox = document.getElementById("hide-checkbox");
let home = document.getElementById('home')
let darkMode = localStorage.getItem('dark-mode');
    
  
  function addDarkmodeWidget() {
    new Darkmode(options).showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);
  const options = {
    label: '🌓', // default: ''
  }