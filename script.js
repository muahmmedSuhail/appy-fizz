window.onscroll = function() {
    var theta = document.documentElement.scrollTop / 70 % Math.PI;

document.getElementById('cic').style.transform ='rotate(' + theta + 'rad)';
}