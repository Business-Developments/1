//index.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
	e.preventDefault();
	console.log(this);
	emailjs.sendForm('service_dmcekjp','template_akz2w71',this).then(function(result){
		alert('send okk');
		console.log(result.text);
		document.getElementById('contact-form').reset();
	}, function(error){
		alert("that one not oke");
		console.log(error.text);

	});
});
