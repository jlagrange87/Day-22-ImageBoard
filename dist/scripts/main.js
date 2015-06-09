$(document).ready(function(){
	$("a.click-form").click(function() {
		var form = $(".dropdown-form");
		form.slideDown("slow");
	});
	$("#cancel").click(function(){
		$(".dropdown-form").slideUp("slow");

	})

	// creating a new item collection
	var PhotoList = new PhotoCollection();
	PhotoList.fetch();
	// creating a new template
	var PhotoBuilder = _.template($("#photoTemplate").html());

	// listening for a submit event
	$("#photoSubmitForm").submit(function(e){
		e.preventDefault();
		// creating a new item model
		var newPhoto = new ListPhoto({
			photo: $("#photoUpload").val(),
			comment: $("#photoComment").val()
		});
		// adding new todo item into the list colleciton.
		if(newPhoto.isValid()){
			PhotoList.add(newPhoto);
			console.log(PhotoList);
			// newPhoto.save();
			$(".dropdown-form").slideUp("slow");
		}
		else {
			alert("NO!")
		}
		
		
	});

	// listening for the add event to display on html.
	PhotoList.on("add", function(model){
		var photoHtml = PhotoBuilder(model.attributes);
		$("#my-photos").append(photoHtml);
	});

});