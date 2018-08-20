let $tabTitles = ['positive', 'negative', 'neutral'].map((id) => document.getElementById(id))
let $tabContent = document.getElementById('tab-content');

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

for (let i = 0; i < $tabTitles.length; i++) {
    $tabTitles[i].addEventListener('click', function() {
        $tabContent.textContent = [capitalize( this.id ), 'content'].join(' ')
    })
}
