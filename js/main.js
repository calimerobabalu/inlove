$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
    afterLoad: function(anchorLink, index) {
      var loadedSection = $(this);

      //using anchorLink
      if (index == 5) {
        startShake()
        window.setTimeout(stopShake, 2000);
      }
    },
    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);

      if (index == 5) {
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
