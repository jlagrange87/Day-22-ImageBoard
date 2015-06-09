$(document).ready(function(){
	$("a.click-form").click(function() {
		var form = $(".dropdown-form");
		form.slideDown("slow");
	});
	$("#cancel").click(function(){
		$(".dropdown-form").slideUp("slow");

	})

	var PhotoList = new PhotoCollection();
	PhotoList.fetch();
	var PhotoBuilder = _.template($("#photoTemplate").html());

	$("#photoSubmitForm").submit(function(e){
		e.preventDefault();
		var newPhoto = new ListPhoto({
			photo: $("#photoUpload").val(),
			comment: $("#photoComment").val()
		});
		if(newPhoto.isValid()){
			PhotoList.add(newPhoto);
			console.log(PhotoList);
			newPhoto.save();
			$(".dropdown-form").slideUp("slow");
		}
		else {
			alert("NO!")
		}
	});
	PhotoList.on("add", function(model){
		var photoHtml = PhotoBuilder(model.attributes);
		$("#my-photos").append(photoHtml);
	});

});