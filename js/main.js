$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['yellow', '#3D464D', '#C0C0C0', '#ADD8E6'],
    scrollingSpeed: 700,
    verticalCentered:false,
    afterLoad: function(anchorLink, index) {
      var loadedSection = $(this);

      //using anchorLink
      if (index == 8) {
        startShake()
        window.setTimeout(stopShake, 2000);
      }
    },
    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);

      if (index == 8) {
        stopShake()
      }
    }
  });
});

function startShake() {
  $('.shake-a-bit').addClass("shake-hard shake-constant")
}


function stopShake() {
  $('.shake-a-bit').removeClass("shake-hard shake-constant")
}
