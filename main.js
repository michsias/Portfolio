$(document).ready(function() {
    var endDiv = $('#end');
  
    function isAtBottom() {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var documentHeight = $(document).height();
      var scrollBottom = scrollTop + windowHeight;
      var endDivBottom = endDiv.offset().top + endDiv.outerHeight();
  
      return scrollBottom >= endDivBottom;
    }
  
    function animateOnScroll() {
      if (isAtBottom()) {
        endDiv.addClass('animate');
      } else {
        endDiv.removeClass('animate');
      }
    }
  
    $(window).scroll(animateOnScroll);
  });