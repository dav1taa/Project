// loadingის ტაიმერი
// setTimeout(function(){
//         window.location.href = 'Mainpage.html';
//     }, 5000);


// სლაიდერი
const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}









