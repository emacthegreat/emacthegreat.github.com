$(document).ready(function() {
  // instagram feed
  var feed = new Instafeed({
      clientId: 'babb8453913c4c7f87f210172eed1166',
      accessToken: '4044782518.babb845.cdfe6f09843d4f0f885c2882b9c161d5',
      get: 'user',
      userId: '4044782518',
      limit: 7,
      resolution: 'thumbnail',
      template: '<div class="footer-instagram-el tn-col-7">' +
                '<a class="footer-instagram-link cursor-zoom" href="{{link}}" target="_blank">' +
                '<img alt="{{post.title}}" '+ 'src="{{image}}"></a>'+
              '</div>'
  });
  feed.run();

  $('#tn-button-mobile-menu-open').click(function() {
    $('body').toggleClass('open-menu-mobile');
  });
});