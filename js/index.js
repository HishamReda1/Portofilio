(function($) {
    $.fn.infiniteTyping = function(options) {
      // Default settings
      var settings = $.extend({
        text: '', // The text to type
        typeSpeed: 50, // Typing speed (in milliseconds per character)
        pauseSpeed: 1000, // Pause speed between phrases (in milliseconds)
        cursor: '|', // The cursor character
        cursorSpeed: 500 // The cursor blink speed (in milliseconds)
      }, options);
  
      // Iterate over each element in the collection
      return this.each(function() {
        var $this = $(this);
        var text = settings.text;
        var typeSpeed = settings.typeSpeed;
        var pauseSpeed = settings.pauseSpeed;
        var cursor = settings.cursor;
        var cursorSpeed = settings.cursorSpeed;
        var index = 0;
        var typingTimer = null;
        var cursorTimer = null;
  
        // Create the cursor element
        var $cursor = $('<span>').addClass('typing-cursor').html(cursor);
        $this.append($cursor);
  
        // Start typing
        function startTyping() {
          typingTimer = setInterval(function() {
            $this.html(text.substr(0, index) + cursor);
            index++;
            if (index > text.length) {
              clearInterval(typingTimer);
              setTimeout(function() {
                index = 0;
                startTyping();
              }, pauseSpeed);
            }
          }, typeSpeed);
        }
        startTyping();
  
        // Start the cursor blink animation
        cursorTimer = setInterval(function() {
          if ($cursor.is(':visible')) {
            $cursor.hide();
          } else {
            $cursor.show();
          }
        }, cursorSpeed);
      });
    };
  }(jQuery));
  $('.typing').infiniteTyping({

    text:' I\'m a frontend developer',
    typeSpeed: 50,
    pauseSpeed: 1000,
    cursor: '|',
    cursorSpeed: 500
  });  