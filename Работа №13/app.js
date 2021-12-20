// ========== Home ==========
const captcha = document.querySelector('#home .captcha');
const reloadBtn = document.querySelector('#home .reload-btn');
const inputField = document.querySelector('#home input');
const checkBtn = document.querySelector('#home .check-btn');
const statusTxt = document.querySelector('#home .status-txt');

let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCaptcha () {
    for (let i = 0; i < 6; i++) {
        let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += ` ${randomChar}`;
    }
}

getCaptcha();
reloadBtn.addEventListener('click', () => {
    captcha.innerText = "";
    getCaptcha();
});
checkBtn.addEventListener('click', e => {
    e.preventDefault();
    let inputVal = inputField.value.split('').join(' ');
    if (inputVal == captcha.innerText) {
        statusTxt.style.color = '#0FE318';
        statusTxt.innerText = 'Fine !';
        setTimeout(() => {
            statusTxt.style.display = 'none';
            inputField.value = '';
            captcha.innerText = '';
            getCaptcha();
        }, 3000);
    } else {
        statusTxt.style.color = '#f02525';
        statusTxt.innerText = 'Wrong !';
    }
});


// ========== Section 1 ==========
const countdown = () => {
    const countDate = new Date('December 20, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
};

setInterval(countdown, 1000);

// ========== Section 2 ==========
const icon = document.querySelector('#section-2 .icon');
const search = document.querySelector('#section-2 .search');

icon.onclick = function () {
    search.classList.toggle('active');
}
window.onclick = function (e) {
    if (!e.target.classList.contains("search") && e.target != icon){
        search.classList.remove('active');
    }
};

// ========== Section 3 ==========
const cardImg = document.querySelector('#section-3 img');
cardImg.onclick = function () {
    this.classList.toggle('active');
}

// ========== Section 4 ==========
const counters = document.querySelectorAll('#section-4 .counter');
const speed = 400;

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        if (count < target) {
            counter.innerText = Math.floor(count + increment);
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

// ========== Section 5 ==========
const form = document.querySelector('#section-5 form');
const eField = form.querySelector('#section-5 .email');
const eInput = eField.querySelector('#section-5 input');
const pField = form.querySelector('#section-5 .password');
const pInput = pField.querySelector('#section-5 input');

form.onsubmit = e => {
    e.preventDefault();
    if (eInput.value == '') {
        eField.classList.add('shake', 'error');
    } else {
        checkEmail();
    }

    if (pInput.value == '') {
        pField.classList.add('shake', 'error');
    }

    setTimeout(() => {
        eField.classList.remove('shake');
        pField.classList.remove('shake');
    }, 500);

    eInput.onkeyup = () => {
        checkEmail();
    };
    pInput.onkeyup = () => {
        if (pInput.value == '') {
            eField.classList.add('error');
        } else {
            pField.classList.remove('error');
        }
    };

    if (!eField.classList.contains('error') && !pField.classList.contains('error')) {
        window.location.href = form.getAttribute('action');
    }

    function checkEmail () {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!eInput.value.match(pattern)) {
            eField.classList.add('error');
            let errorTxt = eField.querySelector('.error-txt');
            (eInput.value != '') ? errorTxt.innerText = 'Введите правильный адрес' : '';
        } else {
            eField.classList.remove('error');
        }
    }
};

// ========== Section 6 ==========
const btn = document.querySelector('#section-6 button');
const post = document.querySelector('#section-6 .post');
const widget = document.querySelector('#section-6 .star-widget');
const editBtn = document.querySelector('#section-6 .edit');

btn.onclick = () => {
    widget.style.display = 'none';
    post.style.display = 'block';
    editBtn.onclick = () => {
        widget.style.display = 'block';
        post.style.display = 'none';
    };
    return false;
};