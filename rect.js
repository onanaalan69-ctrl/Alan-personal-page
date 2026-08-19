const colorList = ['color1', 'color2', 'color3', 'color4', 'color5',];
const magicButton = document.querySelector("#magicButton");

magicButton.style.cursor = "pointer";
magicButton.addEventListener("click", () => {
    const colorOn = document.body.getAttribute('data-theme');
    const colorOff = colorList.filter(theme => theme !== colorOn);
    const randomColor = Math.floor(Math.random() * colorOff.length);
    const nextColor = colorOff[randomColor];

    document.body.setAttribute('data-theme', nextColor);
});