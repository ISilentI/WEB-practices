// ========== Home ==========
const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

closedFace.addEventListener('click', () => {
    openFace.classList.add('active');
    closedFace.classList.remove('active');
});
openFace.addEventListener('click', () => {
    closedFace.classList.add('active');
    openFace.classList.remove('active');
});

// ========== Section 1 ==========
let data = [
    {
        name: 'Лёша',
        age: 11,
    },
    {
        name: 'Паша',
        age: 22,
    },
    {
        name: 'Вова',
        age: 33,
    },
    {
        name: 'Даша',
        age: 44,
    },
    {
        name: 'Дима',
        age: 55,
    },
    {
        name: 'Вася',
        age: 66,
    },
];

const info = document.querySelector('#info');
let details = data.map(item => {
    return '<div>' + item.name + ' отмечает ' + item.age + '-й День рождения' + '</div>';
});

info.innerHTML = details.join('\n');

// ========== Section 2 ==========
const mores = document.querySelectorAll('.more');
for (let more of mores) {
    more.addEventListener('click', () => more.parentNode.classList.toggle('active'));
}

// ========== Section 3 ==========
const marker = document.querySelector('#marker');
const item = document.querySelectorAll('#section-3 nav a');

function indicator (e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}
item.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        indicator(e.target);
    });
});

// ========== Section 4 ==========
const list = document.querySelectorAll('.list');
function setActiveClass () {
    list.forEach(item => {
        item.classList.remove('active');
        this.classList.add('active');
    });
}
list.forEach(item => item.addEventListener('mouseover', setActiveClass));

// ========== Section 5 ==========
document.querySelector('.show-btn').addEventListener('click', () => {
    document.querySelector('.modal').classList.toggle('show');
});
document.querySelector('.close-icon').addEventListener('click', () => {
    document.querySelector('.modal').classList.toggle('show');
});
document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.modal').classList.toggle('show');
});

// ========== Section 6 ==========
document.querySelector('.hero-btn').addEventListener('click', () => {
    if (!document.querySelector('.hero-btn').parentElement.classList.contains('active')) {
        document.querySelector('.hero-btn').parentElement.classList.add('active');
        setTimeout(() => {
            document.querySelector('.hero-btn').parentElement.classList.remove('active');
        }, 1500);
    }
});

// ========== Section 7 ==========
const input = document.querySelector('#section-7 form input');
const counter = document.querySelector('#section-7 form .counter');
const maxLength = input.getAttribute('maxlength');
input.onkeyup = () => counter.innerText = maxLength - input.value.length;
