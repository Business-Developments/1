//index.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
	e.preventDefault();
	console.log(this);
	emailjs.sendForm('service_dmcekjp','template_akz2w71',this).then(function(result){
		alert('Thank you for submitting...');
		console.log(result.text);
		document.getElementById('contactForm').reset();
	}, function(error){
		alert("that one not oke");
		console.log(error.text);

	});
});
