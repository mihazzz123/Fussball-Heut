$("form").submit(function() {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		$("form").trigger("reset");
                              alert('Спасибо! Заявка отправлена.');
	});
	return false;
   });