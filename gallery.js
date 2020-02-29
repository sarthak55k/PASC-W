//JUMBOTRON
var $jumbotronContainerBefore = $('#jumbotronContainerBefore'),
	 $jumbotronFigure = $('#jumbotronFigure'),
	 $jumbotronCategory = $('#jumbotronCategory'),
	 $jumbotronTitle = $('#jumbotronTitle'),
	 $jumbotronBody = $('#jumbotronBody'),
	 $jumbotronFooter = $('#jumbotronFooter');

var jumbotron = {
	init: function() {
		jumbotron.figure.visible();
		console.log('jumbotron.init()');
	},
	containerBefore: {
		visible: function() {
			var flagStepOpacity = 0;
			$jumbotronContainerBefore
				.delay(300)
				.animate({
					width: '5px',
					opacity: 1
				}, {
					duration: 600,
					step: function(now, fx) {
						if(flagStepOpacity == 0 && fx.prop == 'opacity' && now > '0.5') {
							jumbotron.category.visible();
							flagStepOpacity = 1;
						}
					},
					complete: function() {
						console.log('jumbotron.containerBefore.visible()');
					}
				});
		}
	},
	figure: {
		visible: function() {
			var flagStepOpacity = 0;
			$jumbotronFigure
				.animate({
					opacity: 1
				}, {
					duration: 900,
					step: function(now, fx) {
						if(flagStepOpacity == 0 && fx.prop == 'opacity' && now > '0.25') {
							var $this = $(this);
							$this.addClass('visible');
							flagStepOpacity = 1;
						}
					},
					complete: function() {
						jumbotron.containerBefore.visible()
						console.log('jumbotron.figure.visible()');
					}
				});
		}
	},
	category: {
		visible: function() {
			var flagStepOpacity = 0;
			$jumbotronCategory
				.animate({
					left: 0,
					opacity: 1
				}, {
					duration: 600,
					step: function(now, fx) {
						if(flagStepOpacity == 0 && fx.prop == 'opacity' && now > '0.25') {
							jumbotron.title.visible();
							flagStepOpacity = 1;
						}
					},
					complete: function() {
						console.log('jumbotron.category.visible()');
					}
				});
		}
	},
	title: {
		visible: function() {
			var flagStepOpacity = 0;
			$jumbotronTitle
				.animate({
					left: 0,
					opacity: 1
				}, {
					duration: 600,
					step: function(now, fx) {
						if(flagStepOpacity == 0 && fx.prop == 'opacity' && now > '0.25') {
							jumbotron.body.visible();
							flagStepOpacity = 1;
						}
					},
					complete: function() {
						console.log('jumbotron.title.visible()');
					}
				});
		}
	},
	body: {
		visible: function() {
			var flagStepLeft = 0;
			$jumbotronBody
				.animate({
					left: 0,
					opacity: 1
				}, {
					duration: 600,
					complete: function() {
						jumbotron.footer.visible();
						console.log('jumbotron.body.visible()');
					}
				});
		}
	},
	footer: {
		visible: function() {
			$jumbotronFooter
				.delay(600)
				.animate({
					opacity: 1
				}, {
					duration: 600,
					complete: function() {
						console.log('jumbotron.footer.visible()');
					}
				});
		}
	}
};

$(document).ready(function() {
	jumbotron.init();
});




var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});




$(document).ready(function(){
	$("img").click(function(){
	var t = $(this).attr("src");
	$(".modal-body").html("<img src='"+t+"' class='modal-img'>");
	$("#myModal").modal();
  });
  
  $("video").click(function(){
	var v = $("video > source");
	var t = v.attr("src");
	$(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
	$("#myModal").modal();  
  });
  });//EOF Document.ready