var ListPhoto = Backbone.Model.extend({
	defaults:{
		photo: null,
		comment: null
	},
	validate: function(attr, options){
		if(attr.photo.length == 0){
			return "You must upload a photo!";
		}
		return false;
	},
	urlRoot: "https://tiny-pizza-server.herokuapp.com/collections/josh-model-photo",
	idAttribute: "_id"
})