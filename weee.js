document.getElementById('button').addEventListener("click", button)
function button() {
    let colors = [
        "#00aefd",
        "#ffa400",
        "#07a787",
        "#ff7870",
        "black",
        "pink",
        "yellow",
        "#e74c3c",
        "#2979ff",
    ]
    var random = colors[Math.floor(Math.random()*colors.length)]
    document.body.style.backgroundColor = random
}