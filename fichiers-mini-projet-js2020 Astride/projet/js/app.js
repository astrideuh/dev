
document.addEventListener('DOMContentLoaded', function () {

    let aerer = document.querySelector('#addinnerspace');


    aerer.addEventListener('click', function () {
        let para = document.querySelectorAll('p')
 
        para.forEach(function(element) {

            element.style.padding=parseInt(element.style.padding0) + 5 + 'px';
    });
});
})