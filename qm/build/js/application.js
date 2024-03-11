$(function(){
	var moduleGlobal = {
		cacheDom: function(){
			// Load images
			this.$img    =  $("img").not('.owl-carousel img, .Map img');
			this.$bgImg  =  $(".bgImg");
			
			// Retinize images
			this.$images =  $("img[data-1x]");
			this.$divs = $("div[data-1x]");
	
	
			this.$phone  =  $("input[type='tel']");
	
	
			this.$videoPopup = $("#videoPopup")
			this.$videoPay = $(".videoPlay")
			
		},
		loadPath: function(filename){
	        var scriptElements = document.getElementsByTagName('script');
	        this.scriptPath = '';
	        for (var i = 0; i < scriptElements.length; i++) {
	            var source = scriptElements[i].src;
	            if (source.indexOf(filename) > -1) {
	                this.scriptPath = source.substring(0, source.indexOf(filename));
	            }
	        }
		},
		// Load images
		loadImg: function(e){
			$(e.currentTarget).css({"opacity": '1'})
		},
		loadBgImg: function(){
			var bgImg = this.$bgImg
			bgImg.bgLoaded({
				afterLoaded : function() {
					bgImg.css({"opacity": '1'})
				}
			});
		},
	
		// Retinize images
		retinizeImg: function(){
			if (window.devicePixelRatio > 1) {
				$.each(this.$images, function() {
					var $this = $(this);
					$this.attr("src", $this.data("2x"));
				});
			} else {
				$.each(this.$images, function() {
					var $this = $(this);
					$this.attr("src", $this.data("1x"));
				});
			}
		},
		retinizeBgImg: function(){
			if (window.devicePixelRatio > 1) {
				$.each(this.$divs, function() {
					var $this = $(this);
					var $style = "background-image: url("+$this.data("2x")+")"
					$this.attr("style", $style);
				});
			} else {
				$.each(this.$divs, function() {
					var $this = $(this);
					var $style = "background-image: url("+$this.data("1x")+")"
					$this.attr("style", $style);
				});
			}
		},
	
	
		addMethodsValidate: function(){
			jQuery.validator.addMethod('selectcheck', function (value) {
			    return (value != '0');
			}, "Тhis field must be selected");
			jQuery.validator.addMethod("phonecheck", function(value, element) {
			    return this.optional(element) || /^[0-9,(,), ,+]+$/i.test(value);
			}, "Phone is not valid");
		},
		phoneMask: function(){
			this.$phone.intlTelInput({
				preferredCountries: ["us", "ca"],
				utilsScript: moduleGlobal.scriptPath + 'utils.js',
				customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
					return selectedCountryPlaceholder;
				}
			});		
		},
	
		playVideo: function(e){
			var src = $(e.currentTarget).attr('data-url')
			var iframe = this.$videoPopup.find('iframe')
	        iframe.attr('src', src);
			this.$videoPopup.modal('show')
		},
		showIframe: function(e){
	        var iframe = $(e.currentTarget).find('iframe')
	        iframe.addClass('active');
	    },
	    removeSrc: function(e){
	        var iframe = $(e.currentTarget).find('iframe')
	        iframe.attr('src', "");
	        iframe.removeClass('active');
	    },
	
		events: function(){
			this.$img.bind('load', this.loadImg.bind(this));
			this.$img.each(function() {
				if ($(this).prop('complete')) {
				  $(this).css({"opacity": '1'})
				}
			});
			
			this.$videoPay.on("click", this.playVideo.bind(this));
			this.$videoPopup.on("shown.bs.modal", this.showIframe.bind(this));
	        this.$videoPopup.on("hide.bs.modal", this.removeSrc.bind(this));
		},
		
		init: function(){
			this.cacheDom()
			this.loadPath('application.js')
			
			this.retinizeImg()
			this.retinizeBgImg()
			
			this.loadBgImg()
			this.events()
			
			this.phoneMask()
			this.addMethodsValidate()
		}
	}
	
	moduleGlobal.init();
	
	
	// END GLOBAL MODULE 
	
	
	
	function Validate(form){
	    this.form = $(form);
	    var that = this
	    this.validate = function(){
	        this.form.validate();
	    }
	    return this.validate();
	}
	
	if($("#HaveQuestions").length > 0){
	    var form1 = new Validate('#HaveQuestions')
	}
	if($("#Contact").length > 0){
	    var form2 = new Validate('#Contact')
	}
	if($("#contactModalForm").length > 0){
	    var form3 = new Validate('#contactModalForm')
	}
	
	if($("#MessageUs").length > 0){
	    var form4 = new Validate('#MessageUs')
	}
	
	
	
	// END FORM VALIDATTE
	
	
	
	var moduleHeader = {
		cacheDom: function(){
			this.$head = $('.Header')
			this.$btn = this.$head.find('.menuToggle');
			this.$menu = this.$head.find('.headBar');
			this.$win = $(window);
		},
		changeHead: function(){
			if(this.$win.scrollTop() > 50){
				this.$head.addClass('scroll')	
			}else{
				this.$head.removeClass('scroll')
			}
			
		},
		toggleMenu: function(e){
			$(e.currentTarget).toggleClass('open');
			this.$head.toggleClass('open');
			this.$menu.toggleClass('open');
		},
		events: function(){
			this.$btn.on('click', this.toggleMenu.bind(this));
			this.$win.on('scroll', this.changeHead.bind(this));
		},
		init: function(){
			this.cacheDom()
			this.events()
		}
	}
	
	moduleHeader.init()
	
	
	// END HEADER MODULE
	
	
	
	var moduleGoDown = {
	    cacheDom: function(){
	        this.$goDown = $('.HomeTopBlock .goDown')
	        this.$html = $("html, body")
	    },
	    scrollDown: function(e){
	        var scrollWay = $(e.currentTarget).parents('.HomeTopBlock').height()
	        this.$html.animate({scrollTop: scrollWay}, 500);
	    },
	    events: function(){
	        this.$goDown.on('click', this.scrollDown.bind(this));
	    },
	    init: function(){
	        this.cacheDom()
	        this.events()
	    }
	}
	
	if($('.HomeTopBlock').length > 0){
	    moduleGoDown.init();    
	}
	
	
	// END GO DOWN MODULE
	
	
	
	var moduleWorkStages = {
		cacheDom: function(){
			this.$block = $('.WorkStages')
			this.$slider = this.$block.find('.slider')
			this.$li = this.$block.find('.slidePager li')
		},
		runCorusel: function(){
			this.$slider.owlCarousel({
	            loop:false,
	            nav:true,
	            dots: true,
	            center: true,
	            navText: ['<i class="icn-angle-left"></i>', '<i class="icn-angle-right"></i>'],
	            responsive:{
	                0:{
	                    margin:15,
	                    items:1,
	                },
	                1199:{
	                    margin:160,
	                    items:2,
	                }
	
	            }
	        });
		},
		pagerChange: function(){
	        this.$li.removeClass('active')
	        var num = this.$slider.find('.owl-dot.active').index()
	        num  = num + 1
	        $('.slidePager li[data-num="'+num+'"]').addClass('active')
	    },
		pager: function(e){
	        var num = $(e.currentTarget).attr('data-num');
	        this.$li.removeClass('active')
	        $(e.currentTarget).addClass('active')
	        this.$slider.find('.owl-dot:nth-child('+num+')').trigger('click')
	    }, 
	    events: function(){
			this.$li.on('click', this.pager.bind(this));
			this.$slider.on('changed.owl.carousel', this.pagerChange.bind(this))
		},
		init: function(){
			this.cacheDom()
			this.runCorusel()
			this.events()
		}
	}
	
	if($('.WorkStages').length > 0){
		moduleWorkStages.init();
	}
	
	
	// END WORK STAGES MODULE
	
	
	
	var moduleReadyToUse = {
		cacheDom: function(){
			this.$block = $('.ReadyToUse')
			this.$slider = this.$block.find('.slider')
			
		},
		runCorusel: function(){
	        this.$slider.owlCarousel({
	            loop:true,
	            nav:true,
	            margin: 30,
	            navText: ['<i class="icn-angle-left"></i>', '<i class="icn-angle-right"></i>'],
	            responsive:{
	                0:{
	                    items:1,
	                },
	                768:{
	                    items:2,
	                },
	                992:{
	                    items:3,
	                }
	            },
	        });
		},
	    fixNav: function(){
	        var imgs = this.$slider.find('.item img')
	        var h = imgs.height()
	        setTimeout(function(){
	            if(window.innerWidth < 768){
	
	                var navElPrev = $('.ReadyToUse .slider .owl-prev')
	                var navElNext = $('.ReadyToUse .slider .owl-next')
	                
	                var pos = h / 2 - 20
	                navElPrev.css({'top': pos+'px',});
	                navElNext.css({'top': pos+'px',});
	                
	            }
	        }, 300)
	    },
		events: function(){
	        this.$slider.on('initialized.owl.carousel', this.fixNav.bind(this))
	        this.$slider.on('resized.owl.carousel', this.fixNav.bind(this))
	    },
	    init: function(){
	        this.cacheDom()
			this.events()
	        this.runCorusel()
		}
	}
	
	if($('.ReadyToUse').length > 0){
		moduleReadyToUse.init();
	}
	
	
	// END READY TO USE MODULE
	
	
	
	var moduleContactModalForm = {
	    cacheDom: function(){
	        this.$form = $('#contactModalForm')
	        this.$modal = $('#contactModal')
	        this.$btn = $('#contactModal .btns-primary')
	    },
	    sendForm: function(e){
	        e.preventDefault();
	        var form = $(e.currentTarget)
	        var tath = this
	        if(form.valid()){
	            this.$form.parents('.modal-body').addClass('done')
	        }
	    },
	    againForm: function(){
	        this.$form.parents('.modal-body').removeClass('wrong')
	    },
	    events: function(){
	        this.$form.on('submit', this.sendForm.bind(this));
	        this.$btn.on('click', this.againForm.bind(this));
	
	    },
	    init: function(){
	        this.cacheDom()
	        this.events()
	    }
	}
	
	if($('#contactModalForm').length > 0){
	    moduleContactModalForm.init();  
	     
	}
	
	
	// END MODULE CONTACT MODAL FORM
	
	
	
	var moduleContact = {
	    cacheDom: function(){
	        this.$form = $('#Contact')
	    },
	    sendForm: function(e){
	        e.preventDefault();
	        var form = $(e.currentTarget)
	        if(form.valid()){
	            form.next('.done').addClass('active')
	        }
	    },
	    events: function(){
	        this.$form.on('submit', this.sendForm.bind(this));
	    },
	    init: function(){
	        this.cacheDom()
	        this.events()
	    }
	}
	
	if($('.Contact').length > 0){
	    moduleContact.init();  
	}
	
	
	// END MODULE CONTACT
	
	
	
	function Maps(el, lat, long){//styles
		//this.styles = styles
		this.el = el
		this.lat = lat;
		this.long = long;
		var center = new google.maps.LatLng(this.lat, this.long);
		var win = $(window);
		var map = ""
	
		var image = {
			url: moduleGlobal.scriptPath + '../img/marker.png',
			//size: new google.maps.Size(31, 40),
		};
	
		if(window.devicePixelRatio > 1){
			image = {
				url: moduleGlobal.scriptPath + '../img/marker@2x.png',
				scaledSize: new google.maps.Size(31, 40),
				//size: new google.maps.Size(31, 40),
			};
		}
		
		this.orientationChange = function (){
			win.on( "orientationchange", function( event ) {
				google.maps.event.addDomListener(window, 'resize', function() {
					map.setCenter(center);
				});
			});
		}
		this.initialize = function(){
			var mapProp = {
				center: center,
				mapTypeControl: false,
				streetViewControl: false,
				fullscreenControl: false,			
				zoom:16, 
				//styles : this.styles,
				scrollwheel: false,
				draggable: !("ontouchend" in document),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
	
			map = new google.maps.Map(document.getElementById(this.el), mapProp);
		
			var markLos = new google.maps.Marker({ 
				position: center,
				icon: image 
			});
			markLos.setMap(map);
	
			this.orientationChange();
		}
	
	
		return this.initialize();
	}
	
	if($(".Map").length > 0){
	
		$(".Map").each(function(){
			var id = $(this).attr('id');
			var map = new Maps(id, $(this).data('lat'), $(this).data('lng') ); //styles
		});
	}
	var moduleLocation = {
	    cacheDom: function(){
	        this.$tabBtn =  $('.tab-box .tab-menu a');
	        this.$win =  $(window);
	    },
	    tabSlide: function(e){
	        var tabBox = $(e.currentTarget).parents('.tab-box');
	        tabBox.find('.tab-menu li').removeClass('active');
	        tabBox.find('.tab-cnt .tab-item').removeClass('active');
	        
	        var href = $(e.currentTarget).attr('href');;
	        $(e.currentTarget).parent('li').addClass('active');
	        $(href).addClass('active');
	        return false;
	    },
	    /*clickOnSecond: function(){
	        if(window.innerWidth < 768){
	            $('.tab-box .tab-menu li:nth-child(2) a').trigger('click');
	        }
	    },*/
	    events: function(){
	        this.$tabBtn.on('click', this.tabSlide.bind(this));
	        //this.$win.on('resize', this.clickOnSecond.bind(this));
	        //this.$win.on('load', this.clickOnSecond.bind(this));
	    },
	    init: function(){
	        this.cacheDom()
	        this.events()
	    }
	}
	if($('.Location').length > 0){
	    moduleLocation.init();
	}
	var moduleRoomBlock = {
	    cacheDom: function(){
	        this.$btn =  $('.HomeRoomBlock .js-more');
	        
	    },
	    shwoPh: function(e){
	        var p = $(e.currentTarget).parents('.content').find('p');
	        p.removeClass('hide-p')
	        $(e.currentTarget).hide()
	        
	    },
	    events: function(){
	        this.$btn.on('click', this.shwoPh.bind(this));
	    },
	    init: function(){
	        this.cacheDom()
	        this.events()
	    }
	}
	if($('.HomeRoomBlock .content').length > 0){
	    moduleRoomBlock.init();
	}
	
});