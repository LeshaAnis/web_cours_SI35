const selector = document.getElementById('themeSelector');

selector.addEventListener('change', function() {
    const [bgColor, textColor] = selector.value.split('|');
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
});