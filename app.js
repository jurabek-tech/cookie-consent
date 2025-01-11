let wrapper = document.querySelector('.wrapper');
let popup = document.querySelector('.popup');
let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    sessionStorage.setItem('cookies', 'agreed')

    popup.style.display = 'none'
    wrapper.style.display = 'block'

    console.log(sessionStorage.getItem('cookies'));
})

if (sessionStorage.getItem('cookies') === 'agreed') {
    popup.style.display = 'none'
    wrapper.style.display = 'block'
}