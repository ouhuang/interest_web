const scale = 10;

const setFont = () => {
    let cw = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = (cw / 1920 * scale) + 'px'
}
setFont()


window.onresize = setFont