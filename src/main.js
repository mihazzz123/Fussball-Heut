$(document).ready(function () {
   $('.reviews').slick({
       slidesToShow: 2,
       slidesToScroll: 2,
       speed: 300,
       autoplay: false,
       autoplaySpeed: 3000,
       pauseOnHover: true,
       prevArrow: "<img src='img/slick-left.png' class='slick-prev slick-prev__new' alt='1'>",
       nextArrow: "<img src='img/slick-right.png' class='slick-next slick-next__new' alt='2'>",
       responsive: [
           {
             breakpoint: 992,
             settings: {
               centerMode: true,
               centerPadding: '0px',
               slidesToShow: 1,
               slidesToScroll: 1
             }
           }
         ]
   });

if(window.matchMedia('(max-width: 767px)').matches){
   $('.products-mob-slider').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       speed: 300,
       autoplay: false,
       autoplaySpeed: 3000,
       pauseOnHover: true,
       prevArrow: "<img src='img/slick-left.png' class='slick-prev slick-prev__new' alt='1'>",
       nextArrow: "<img src='img/slick-right.png' class='slick-next slick-next__new' alt='2'>"
   });
 }

   var nextCount = 1;


   $("#next_question_1").click(function() {
   	if ($(this).hasClass('next-question__btn')) {
   	$(this).parent('form').find(".main-ch-" + nextCount).css('left', '-1000px');
   	if(window.matchMedia('(max-width: 767px)').matches){
   		$(this).parent('form').find(".main-ch-" + (nextCount + 1)).css('left', '20px');
   	} else {
   		$(this).parent('form').find(".main-ch-" + (nextCount + 1)).css('left', '40px');
   	}
   	nextCount++;
   	if (nextCount == 6) {
   		$(this).hide();
     		$(this).next().hide();
   	}
   	$(this).removeClass('next-question__btn');
   } else {
 	alert('Выберете один из вариантов');
 }
   });

     $("#next_question_2").click(function() {
     	if ($(this).hasClass('next-question__btn')) {
     	$(this).parent('form').find(".main-ch-" + nextCount).css('left', '-1000px');
     	if(window.matchMedia('(max-width: 767px)').matches){
     		$(this).parent('form').find(".main-ch-" + (nextCount + 1)).css('left', '20px');
     	} else {
     		$(this).parent('form').find(".main-ch-" + (nextCount + 1)).css('left', '40px');
     	}
     	nextCount++;
     	if (nextCount == 6) {
     		$(this).hide();
     		$(this).next().hide();
     	}
     	$(this).removeClass('next-question__btn');
     } else {
   	alert('Выберете один из вариантов');
   }
     });


   $("#btn_count_1").click(function() {
   	$(this).parent('div').parent('div').parent('div').css('left', '-1000px');
   	if(window.matchMedia('(max-width: 767px)').matches){
   		$(this).parent('div').parent('div').parent('div').next().css('left', '0px');
   	} else {
   	$(this).parent('div').parent('div').parent('div').next().css('left', '40px'); }
   });
   $("#btn_count_2").click(function() {
   	$(this).parent('div').parent('div').parent('div').css('left', '-1000px');
   	if(window.matchMedia('(max-width: 767px)').matches){
   		$(this).parent('div').parent('div').parent('div').next().css('left', '20px');
   	} else {
   	$(this).parent('div').parent('div').parent('div').next().css('left', '40px'); }
   });

   $("#btn_count_done_1").click(function() {
   	if ($("#quiz_phone_1").val() != "") {
   		location.href = "thank.html";
/*   		if(window.matchMedia('(max-width: 767px)').matches){
   			$('html, body').animate({scrollTop: 0},500);
   			$(".main-checker").css('height', '50px');
   			$(".main-thanks").css({
   				'padding-left': '15px',
   				'top': '100px'
   			});
   		}
	   	$(".main-checker").css('opacity', '0');
	   	$(".main-content").css('opacity', '0');
	   	$(".main-thanks").css('opacity', '1');
	   	$(".main-thanks").css('z-index', '9');
	   	for (var i = 1; i < 8; i++) {
	   		$(".main-ch-" + i).css('left', '1000px');
	   	}
   	*/} else {
   		alert("Введите номер телефона");
   	}
   });

   $(".thanks-link").click(function() {
   	if ($(this).parent().find('input[name="user_phone"]').val() != "") {
   		location.href = "thank.html";
   		} else {
   		alert("Введите номер телефона");
   	}
   });

   $("#btn_count_done_2").click(function() {
   	if ($("#quiz_phone_2").val() != "") {
   		location.href = "thank.html";
   	/*
   		$(".popup-wrapper").css({
   			"opacity": '0',
   			"z-index": '-1'
   		});
   		$(".main-checker-popup").hide();
   		if(window.matchMedia('(max-width: 767px)').matches){
   			$('html, body').animate({scrollTop: 0},500);
   			$(".main-checker").css('height', '50px');
   			$(".main-thanks").css({
   				'padding-left': '15px',
   				'top': '100px'
   			});
   		}
	   	$(".main-checker").css('opacity', '0');
	   	$(".main-content").css('opacity', '0');
	   	$(".main-thanks").css('opacity', '1');
	   	$(".main-thanks").css('z-index', '9');
	   	for (var i = 1; i < 8; i++) {
	   		$(".main-ch-" + i).css('left', '1000px');
	   	}
   	*/} else {
   		alert("Введите номер телефона");
   	}
   });

/*   $("#btn_thanks").click(function() {
   	nextCount = 1;
   	$(".main-checker").css('opacity', '1');
   	$(".main-content").css('opacity', '1');
   	$(".main-thanks").css('opacity', '0');
   	if(window.matchMedia('(max-width: 767px)').matches){
   		$(".main-ch-1").css('left', '20px');
   		$(".main-checker").css('height', '490px');
   	} else {
   		$(".main-ch-1").css('left', '40px'); 
   	}
   	$("#next_question_1").show();-
   	$("#next_question_2").show();
   	$(".next").show();
   	$(".tick").removeClass('active-check');
   });*/

   $(".tick").click(function() {
   	$(this).parent("div").parent("div").parent("div").parent("div").find('.tick').removeClass('active-check');
   	$(this).addClass('active-check');
   	$("#next_question_1").addClass('next-question__btn');
   });
   $(".tick").click(function() {
   	$(this).parent("div").parent("div").parent("div").parent("div").find('.tick').removeClass('active-check');
   	$(this).addClass('active-check');
   	$("#next_question_2").addClass('next-question__btn');
   });

   $("#perm_modal_1").click(function() {
   	$(".popup-wrapper").css({
   		"opacity": '1',
   		"z-index": '9999'
   	});
   	if(window.matchMedia('(max-width: 767px)').matches){
   		$(".perm-popup-1").css('top', '10vh');
   	} else {
   		$(".perm-popup-1").css('top', '20vh');
   	}
   });
   $("#perm_modal_2").click(function() {
   	$(".popup-wrapper").css({
   		"opacity": '1',
   		"z-index": '9999'
   	});
   	$(".perm-popup-2").css('top', '20vh');
   });
   $("#perm_modal_3").click(function() {
   	$(".popup-wrapper").css({
   		"opacity": '1',
   		"z-index": '9999'
   	});
   	$(".perm-popup-3").css('top', '20vh');
   });
   $("#perm_modal_4").click(function() {
   	$(".popup-wrapper").css({
   		"opacity": '1',
   		"z-index": '9999'
   	});
   	$(".perm-popup-4").css('top', '20vh');
   });
   $(".perm_popup_exit").click(function() {
   	$(".popup-wrapper").css({
   		"opacity": '0',
   		"z-index": '-1'
   	});
   	$(".perm-popup").css('top', '-1000px');
   });

   $(".callback").click(function() {
   	$(".popup-wrapper").css({
   		"opacity": '1',
   		"z-index": '9999'
   	});
   	$(".call-popup").css('top', '15vh');
   });
   $(".call_popup_exit").click(function() {
   	$(".popup-wrapper").css({
   		"opacity": '0',
   		"z-index": '-1'
   	});
   	$(".call-popup").css('top', '-1000px');
   	$(".proposal-popup").css('top', '-1000px');
   });
   $(".slot-modal").click(function() {
   	$(".popup-wrapper").css({
   		"opacity": '1',
   		"z-index": '9999'
   	});
   	$(".proposal-popup").css('top', '15vh');
   });

   $(window).scroll(function() {
       var top = $(this).scrollTop();
       if ( top >= 1 ) {
         $("header").css('background-color', '#fff');
         $(".header-line__mob").css('background-color', '#fff');
       } else if (top == 0) {
       	$("header").css('background-color', 'rgb(172, 173, 174)');
       	$(".header-line__mob").css('background-color', 'rgb(172, 173, 174)');
       }
   });

   $(".form_mail_quiz").submit(function() {
   		$.ajax({
   			type: "POST",
   			url: "mail_quiz.php",
   			data: $(this).serialize()
   		}).done(function() {
   			$(this).find("input").val("");
   			$(".form_mail_quiz").trigger("reset");
   		});
   		return false;
   });
   $(".form_mail").submit(function() {
   		$.ajax({
   			type: "POST",
   			url: "mail.php",
   			data: $(this).serialize()
   		}).done(function() {
   			$(this).find("input").val("");
   			$(".form_mail").trigger("reset");
   		});
   		return false;
   });
   $(".phone_mask").mask("+7 (999) 999-99-99");

   $(".question").click(function() {
   	$(this).parent("li").toggleClass('active');
   });

   $(".menu-btn").click(function() {
   	$(".header-line__mob").toggleClass('active-menu');
   });

   $(".header-count").click(function() {
   	$(".main-checker-popup").show();
   	$(".popup-wrapper").css({
   		"opacity": '1',
   		"z-index": '9999'
   	});
   });

   $("#form_popup_close").click(function() {
   	$(".main-checker-popup").hide();
   	$(".popup-wrapper").css({
   		"opacity": '0',
   		"z-index": '-1'
   	});
   });

   $(".main-menu").on("click","a", function (event) {
           event.preventDefault();
           var id  = $(this).attr('href'),
               top = $(id).offset().top;
           $('body,html').animate({scrollTop: top}, 1000);
       });

   $(".main-menu__mob").find('a').click(function() {
   	$(".header-line__mob").removeClass('active-menu');
   });
});