function setRandomBackgroundColor(colors) {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  document.body.style.backgroundColor = randomColor;
}

const colorPalette = ['#C2CAD0', '#C2B9B0', '#EBE9E2', 
                '#C5C6C7', '#E3E2DF', '#EFE2BA',
                '#C5CBE3','#EEE2DC', '#BAB2B5', 
                '#D2E8E2','#DEF2F1', '#F7F9FB'];

setRandomBackgroundColor(colorPalette);

document.querySelectorAll('header nav ul li a').forEach(function(link) {
    link.addEventListener('mouseover', function() {
        link.style.color = 'yellow';
    });
    link.addEventListener('mouseout', function() {
        link.style.color = 'white';
    });
});

document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});

document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var icon = document.getElementById('menu-icon').children[0];
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        menu.classList.add('show');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});
