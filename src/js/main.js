$(document).ready(function () {

  	//Модальные окна
	  //$('#btn1').click(function () {
			//$('.modal-wrap').removeClass('modal-wrap__disable').addClass('modal-wrap__active');
			//$('.modal-first').addClass('modal-first__active');
			/*if($('.modal-wrap').hasClass('modal-wrap__active')){
				$('body').css({'overflow' : 'hidden'});
			}else{
				$('body').attr('style', '');
			};
		});*/

		$('#btn1-close').click(function() {
			$('.modal-first').removeClass('modal-first__active');
			$('.modal-wrap').removeClass('modal-wrap__active').addClass('modal-wrap__disable');
			$('body').attr('style', '');
		});


		$('.slider-item__button').click(function () {
			$('.modal-wrap').removeClass('modal-wrap__disable').addClass('modal-wrap__active');
			$('.modal-second').addClass('modal-second__active');
			if($('.modal-wrap').hasClass('modal-wrap__active')){
				$('body').css({'overflow' : 'hidden'});
			}else{
				$('body').attr('style', '');
			};
		});

		$('#btn2-close').click(function() {
			$('.modal-second').removeClass('modal-second__active');
			$('.modal-third').addClass('modal-third__active');
		});


		$('#btn3-close').click(function () {
			$('.modal-wrap').removeClass('modal-wrap__active').addClass('modal-wrap__disable');
			$('.modal-third').removeClass('modal-third__active');
			$('body').attr('style', '');
		});
		
		$('#close').click(function () {
			$('.modal-wrap').removeClass('modal-wrap__active').addClass('modal-wrap__disable');
			$('.modal-second').removeClass('modal-second__active');
			$('body').attr('style', '');
		});
			
		//Кнопка на верх
		$(window).scroll(function () { 
  		if($(this).scrollTop() != 0){
			$('#go-top').fadeIn();
			} else {
			$('#go-top').fadeOut();
			}
			});
			$('#go-top').click(function() {
			$('body,html').animate({scrollTop:0},900);
		});

		// Валидация форм
		$("#main-form").validetta( {
			errorTemplateClass : 'validetta-bubble',
			bubblePosition: 'bottom',
			bubbleGapTop: 5,
			bubbleGapLeft: 150
		});
		$("#modal-form").validetta( {
			errorTemplateClass : 'validetta-bubble',
			bubblePosition: 'bottom',
			bubbleGapTop: 5,
			bubbleGapLeft: 150
  	});

		//Сладер
		$('#slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			centerMode: true,
			centerPadding: '10px',
			arrows: true,
			autoplay: true,
			autoplaySpeed: 2000,
			prevArrow: $('#prevBtn'),
    	nextArrow: $('#nextBtn'),
			responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
				},
				{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
			]
		});

		//Scroll
		$('.header-nav').on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();
			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1000);
		});

    //Отправка формы
		$("form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
      $('.modal-wrap').removeClass('modal-wrap__disable').addClass('modal-wrap__active');
			$('.modal-first').addClass('modal-first__active');
		});
		return false;
		});

});