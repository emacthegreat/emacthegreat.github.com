$(document).ready(function() {
  // instagram feed
  var feed = new Instafeed({
      clientId: 'babb8453913c4c7f87f210172eed1166',
      get: 'user',
      userId: 'meditationsontech',
      limit: 7,
      resolution: 'thumbnail',
      template: '<div class="footer-instagram-el tn-col-7">' +
                '<a class="footer-instagram-link cursor-zoom" href="{{link}}"><img alt="{{post.title}}" '+ 'src="{{image}}"></a>'+
              '</div>'
  });
  feed.run();
});