function select() {
    var sel = document.getElementById('fruits').selectedIndex;
    var options = document.getElementById('fruits').options;
    document.getElementById('text').innerHTML = 'Выбрана опция ' + options[sel].text;
}

function range() {
    var rng = document.getElementById('range');
    var text = document.getElementById('rangeText');

    text.innerHTML = rng.value;

    var i1 = document.getElementById('r1');
    i1.value = rng.value;
}





