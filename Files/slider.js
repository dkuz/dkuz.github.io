jQuery(document).ready(function($){

  function move(newIndex, elems) {
    var animateLeft, slideLeft;
    var slideAmount;
    
    if (elems.slider.is(':animated')) {
    	//return;
    }
    if (elems.slider.data('index') === newIndex) {
    	return;
    }
    
    if (elems.id === 'shots'){
      slideAmount = '33.3333%';
    } else {
      slideAmount = '100%';
    }

    if (newIndex > elems.slider.data('index')) {
    	if (elems.toBack){
	      slideLeft = ("-"+slideAmount);
	      animateLeft = (slideAmount);
    	} else {
	      slideLeft = (slideAmount);
	      animateLeft = ("-"+slideAmount);
    	}
    } else {
    	if (elems.toFirst) {
	      slideLeft = (slideAmount);
	      animateLeft = ("-"+slideAmount);
    	} else {
	      slideLeft = ("-"+slideAmount);
	      animateLeft = (slideAmount);
    	}
    }
    

    if (elems.id != 'shots') {
      elems.slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      elems.slider.animate({
        left: (animateLeft)
      }, function() {
        elems.slides.eq(elems.slider.data('index')).css({
          display: 'none'
        });
        elems.slides.eq(newIndex).css({
          left: 0
        });
        elems.slider.css({
          left: 0
        });
        elems.slider.data('index', newIndex);
      });
    } else {
      if(elems.toBack){
        elems.slides.eq(elems.slides.length-1).prependTo(elems.slider);
        elems.slides.css({
          display: 'inline-block',
          left: slideLeft
        });
        elems.slider.animate({
          left: (animateLeft)
        }, function() {
          elems.slides.css({
            left: 0
          });
          elems.slider.css({
            left: 0
          });
        });

      } else {
        elems.slider.animate({
          left: (animateLeft)
        }, function() {
          elems.slides.eq(elems.slider.data('index')).appendTo(elems.slider);
          elems.slider.css({
            left: 0
          });
        });
      }
    }


    

  }
  
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  $('.next_btn').on('click', function() {
  	var $cur_id = $(this).attr('id');
  	var $cur_slider = $('div#' + $cur_id +'.slider');
  	var $cur_slides = $cur_slider.find('.stack-wrapper');

    if ($cur_slider.data('index') < ($cur_slides.length - 1)) {
      move($cur_slider.data('index') + 1, {
      	id: $cur_id,
      	slider: $cur_slider,
      	slides: $cur_slides,
      	toFirst: false,
      	toBack: false,
      });
    } else {
		move(0, {
	      	id: $cur_id,
	      	slider: $cur_slider,
	      	slides: $cur_slides,
	      	toFirst: true,
	      	toBack: false,
	    });
    }
  });
  
  $('.previous_btn').on('click', function() {
  	var $cur_id = $(this).attr('id');
  	var $cur_slider = $('div#' + $cur_id +'.slider');
  	var $cur_slides = $cur_slider.find('.stack-wrapper');

    if ($cur_slider.data('index') !== 0) {
      move($cur_slider.data('index') - 1, {
      	id: $cur_id,
      	slider: $cur_slider,
      	slides: $cur_slides,
      	toFirst: false,
      	toBack: false,
      });
    } else {
      move($cur_slides.length - 1, {
      	id: $cur_id,
      	slider: $cur_slider,
      	slides: $cur_slides,
      	toFirst: false,
      	toBack: true
      }); // go to last slide
    }
  });
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
























  
});