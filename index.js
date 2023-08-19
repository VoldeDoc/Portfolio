let main =  document.getElementById('main')
let checkbox = document.getElementById("hide-checkbox");
let home = document.getElementById('home')
let darkMode = localStorage.getItem('dark-mode');
    const enableDarkMode = () =>{
      main.classList.remove('dark-mode-theme');
      checkbox.classList.remove('dark-mode-toggle');
      localStorage.setItem('dark-mode', 'enabled');
    }
    
    const disableDarkMode = () => {
        main.classList.add('dark-mode-theme');
        checkbox.classList.add('dark-mode-toggle');
        localStorage.setItem('dark-mode', 'disabled');
      }

      
if (darkMode === "enabled") {
    enableDarkMode(); // set state of darkMode on page load
  }
  
  checkbox.addEventListener("change", (e) => {
    darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkMode === "disabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    } 
  });
  