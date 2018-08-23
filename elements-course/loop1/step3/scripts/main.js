let $switchList = [1, 2, 3, 4, 5]
    .map((n) => document.getElementById('switch' + n))

function randomToggleSwitch ($singleSwitch) {
    let trurl = Math.floor(Math.random() * 100)
    if (trurl < 50) {
        $singleSwitch.classList.toggle("switch__on")
    }
}

for (let i = 0; i < $switchList.length; i++) {
    $switchList[i].addEventListener('click', function() {
        let $otherSwitches = [...$switchList]
        $otherSwitches.splice(i, 1)
        $otherSwitches.forEach(randomToggleSwitch)
        this.classList.toggle("switch__on")
    })
}
