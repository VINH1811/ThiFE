const DNN = {
    en: {
        welcome: "Welcome",
    },
    vi: {
        welcome: "Chào mừng",
    }
}
const chonNN = document.getElementById('chonNN');
function doiNN(){
    document.querySelectorAll('[data-i18n]').forEach(function(element){
        const key = element.getAttribute('data-i18n');
        element.innerText = DNN[chonNN.value][key];
    });
}
doiNN('en');
chonNN.addEventListener('change',e=>{
    doiNN(e.target.value);
})