let $switchList = document.getElementsByClassName('switch')
for (let i = 0; i < $switchList.length; i++) {
    $switchList[i].addEventListener('click', function() {
        $switchList[i].classList.toggle("switch__on")
    })
}
