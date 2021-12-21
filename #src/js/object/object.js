
let activeContentObject = 0
let elementContentCountObject = 18

$('#objectsBlock-1').removeClass('display-n')

for ( let i = 1; i <= elementContentCountObject; i++ ) {
    $(`#objectButtonPrev-${i}`).on('click', function() {
        changeSlide('prev')
    })
}

for ( let i = 1; i <= elementContentCountObject; i++ ) {
    $(`#objectButtonNext-${i}`).on('click', function() {
        changeSlide('next')
    })
}

function changeSlide(id) { 
    if(id === 'next') {
        activeContentObject++
        if (activeContentObject === elementContentCountObject) {
            activeContentObject = 0
        } 
    } else if (id === 'prev') {
        activeContentObject--
        if (activeContentObject < 0) {
            activeContentObject = elementContentCountObject - 1
        }
    }
    for ( let i = 0; i <= elementContentCountObject; i++ ) {
        if(activeContentObject == i) {
            for ( let j = 1; j <= elementContentCountObject; j++ ) {
                $(`#objectsBlock-${j}`).addClass('display-n')
            }
            $(`#objectsBlock-${i + 1}`).removeClass('display-n')
        }
    }
}