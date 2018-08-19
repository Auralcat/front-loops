let $buttons = ['relevance', 'name', 'price'].map((id) => document.getElementById(id))
let $select = document.getElementById('selection')
let currentlySelected = null

// Sync state from button to select
for (var i = 0; i < $buttons.length; i++) {
    $buttons[i].addEventListener('click', function() {
        // Remove class from previous selection
        if (currentlySelected !== null) {
            document.getElementById(currentlySelected).classList.remove('button__selected')
        }

        currentlySelected = this.id
        $select.value = currentlySelected

        // Activate class
        document.getElementById(currentlySelected).classList.add('button__selected')
    })
}

// Sync state from select to button
$select.addEventListener('change', function() {
    // Remove class from previous selection
    if (currentlySelected !== null) {
        document.getElementById(currentlySelected).classList.remove('button__selected')
    }
    // Set new value
    currentlySelected = this.value

    // Toggle new selection
    document.getElementById(currentlySelected).classList.add('button__selected')
})
