let $tabTitles = ['positive', 'negative', 'neutral'].map((id) => document.getElementById(id))
let $tabContent = document.getElementById('tab-content');

function tabObject (title) {
    // Stores a tab's title and content string.
    this.title = title
    this.content = title + " content"
}

let tabData = [new tabObject('positive'),
               new tabObject('negative'),
               new tabObject('neutral')]

for (let i = 0; i < $tabTitles.length; i++) {
    $tabTitles[i].addEventListener('click', function() {
        $tabContent.innerHTML = tabData[i].content
    })
}
