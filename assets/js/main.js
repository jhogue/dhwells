//Insert awesome js here!

$(document).ready(function() {


	/* 
     * Animate some scrolling for smoother transitions 
     * http://css-tricks.com/snippets/jquery/smooth-scrolling/
     */
    $(function() {
        $('.smooth-scroll').click(function(e) {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    e.preventDefault();
                }
            }
        });
    });
    
    
    // Devlopment Only
    $(window).on('resize', showSize);
	showSize();
	function showSize() {
		$('#size').html( $(window).width() + ' x ' + $(window).height());
	}
});