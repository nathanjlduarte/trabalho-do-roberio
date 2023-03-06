let button = document.querySelector('#togglemode');
let headerbackground = document.querySelector('#hd');
let pagebackground = document.querySelector('body');
let headercolor = document.querySelector('h1');
let fileinput = document.querySelector('#uploadbutton');
let filetext = document.querySelector('#boxtext');
let filetext2 = document.querySelector('#boxtext2');
let submit = document.querySelector('#submitlabel');

let isToggled = false;

function returnFileSize(number) {
    if (number < 1024) {
      return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
      return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
      return `${(number / 1048576).toFixed(1)} MB`;
    }
  }

button.addEventListener('click', function() {
    if (!isToggled) {
        headerbackground.style.backgroundColor='#2C3E50';
        pagebackground.style.backgroundColor='#34495E';
        submit.style.backgroundColor='#2C3E50';
        button.textContent = '☀️';
        headercolor.style.color='white';
        isToggled = true;
    } else {
        headerbackground.style.backgroundColor='#FFB6C1';
        pagebackground.style.backgroundColor='#FFE4E1';
        submit.style.backgroundColor='#FFB6C1';
        headercolor.style.color='black';
        button.textContent = '🌙';
        isToggled = false;
        
    }
})

fileinput.addEventListener('change', function updateImageDisplay() {
    const curFiles = fileinput.files;
    
    for (const file of curFiles) {
        filetext.style.fontSize = "30px";
        filetext.textContent = file.name;
        if(file.name.length > 20) {
            filetext.style.fontSize = "92%";
        }
        filetext2.textContent = returnFileSize(file.size);
    }
    
});
