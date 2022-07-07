const nav = document.querySelector('nav')

window.addEventListener('scroll', function(){
    if(window.scrollY > 100){
        nav.classList.add('nav-scroll')
    } else {
        return nav.classList.remove('nav-scroll')
    }
})


function checkIsPrime(num) {
    // Your code goes here...
      if (num%num === 0){
        console.log(true)
      } else if (num === 1) {
        console.log(false)
      }
    }

    checkIsPrime(25)