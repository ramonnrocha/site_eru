function onScroll() {
  navigation = document.getElementById('navigation')
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')

}

function closeMenu () {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'bottom',
  duration: 1000,
}).reveal(`
  #home, 
  #home .primary-header,
  #home .secondy-header, 
  #home .stats`)