function adjustGrid() {
    let width = document.getElementById('sample-node').offsetWidth
    console.log(width)
    document.getElementById('grid').style.setProperty('grid-auto-rows', `${width}px`)
}

window.addEventListener('load', () => {
    adjustGrid()
})

window.addEventListener('resize', () => {
    adjustGrid()
})