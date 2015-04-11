$( document ).ready(function() {
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    });

    $("#typed").typed({
        strings: ["a designer", "a coder", "a photographer", "a web guru", "Clayton Errington"],
        typeSpeed: 30,
        backDelay: 1000,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
    });
    
    $('a[href^="http://"],a[href^="https://"]')
		.not("[href*='"+location.host+"']")
        .click(function(e) {
          var url = this.href;
          e.preventDefault();
           window.open(url);
    });
        
    $('#pricingChoice').on('show.bs.modal', function (event) {
  		  var button = $(event.relatedTarget) // Button that triggered the modal
  		  var package = button.data('package') // Extract info from data-* attributes
  		  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
 		   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
 		   var modal = $(this)
 		   modal.find('.modal-title').text('You Chose the ' + package + ' Package')
 		    modal.find('.modal-body .package').val(package)
	   }); 

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 100), '='].join(' '));

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, 500);
        return false;
    });
}); 