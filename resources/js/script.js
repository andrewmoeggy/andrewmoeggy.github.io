$(document).ready(() => {

  $('.about__section').waypoint((direction) => {
    if (direction == 'down') {
      $('nav').addClass('sticky');
      $('home-li').addClass('show');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  })


  const waypoints = $('#handler-first').waypoint((direction) => {
    notify(this.element.id + ' hit 25% from top of window')
  }, {
    offset: '25%'
  })

})

function strobeEffect() {
  document.getElementById('strobe').classList.toggle('strobe-off')
}

setInterval(() => {
  strobeEffect()
}, 700)