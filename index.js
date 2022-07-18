
function loadData(){
    var profilePics = document.querySelectorAll('.profile-pic img');
    var userNmaes = document.querySelectorAll('.user-name');

    profilePics.forEach(function(element){
        element.src = 'assets/me.jpeg';
    });

    userNmaes.forEach(function (element){
        element.innerHTML = 'Shehab Ismail';
    });


}

loadData();


var darkTheme = {
    'bg':'rgb(12, 23, 54)',
    'light-text': 'rgb(176, 176, 176)',
    'dark-text': 'rgb(255, 255, 255)',
    'primary-color': 'rgb(255, 255, 255)'
}
var lightTheme = {
    'bg':'#fff',
    'light-text': 'rgb(107, 107, 107)',
    'dark-text': '#000',
    'primary-color': 'rgb(0, 153, 255)'
}
var currentTheme = lightTheme;

var switchBtn = document.querySelector('.switch');
var themeType = document.getElementById('theme-type');

function switchTheme(){
    if(currentTheme==lightTheme){
        currentTheme=darkTheme;
        switchBtn.classList.remove('switch-off');
        switchBtn.classList.add('switch-on');
        themeType.innerHTML = 'Dark Theme';
    }
    else{
        currentTheme=lightTheme;
        switchBtn.classList.remove('switch-on');
        switchBtn.classList.add('switch-off');
        themeType.innerHTML = 'Light Theme';
    }
    var doc = document.documentElement;
    doc.style.setProperty('--card-bg-color',currentTheme.bg)
    doc.style.setProperty('--text-light-color',currentTheme["light-text"])
    doc.style.setProperty('--text-dark-color',currentTheme["dark-text"])
    doc.style.setProperty('--text-primary-color',currentTheme["primary-color"])
    
}

switchBtn.addEventListener('click', switchTheme);

function changeBgColor(color){
    document.documentElement.style.setProperty('--bg-color',color)
}