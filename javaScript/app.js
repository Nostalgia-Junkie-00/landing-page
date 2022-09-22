const toggle_btn = document.getElementById('toggle-btn');
const navigation = document.getElementsByClassName('navigation')[0]
toggle_btn.addEventListener('click', () => {
    navigation.classList.toggle('active');
})