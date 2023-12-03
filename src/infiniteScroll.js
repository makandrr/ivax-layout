const scrollers = document.querySelectorAll('.scroller')
console.log('!!!!!!', scrollers)
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation()
}

function addAnimation() {
  scrollers.forEach(scroller => {
    scroller.setAttribute('data-animated', true)
    const scrollerInner = scroller.querySelector('.scroller__inner')
    for(let i = 0; i < 3; i++) {
      const scrollerContent = Array.from(scrollerInner.children)
      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(item)
        duplicatedItem.setAttribute('aria-hidden', true)
        scrollerInner.append(duplicatedItem)
      })
    }
  })
}