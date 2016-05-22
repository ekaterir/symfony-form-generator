function Element(name) {

    this.name = name;

}


Element.prototype.getHTML = function() {

    switch(this.name) {
        case 'text':
            return '<div class="form-group">' +
  		   '<label for="usr">Name:</label>' +
  		   '<input type="text" class="form-control" id="usr">' +
		   '</div>';
            break;
        case 'checkbox':
            return '<div class="checkbox">' +
		   '<label>' +
      		   '<input type="checkbox"> Check me out' +
    		   '</label>' +
  		   '</div>';
            break;
        case 'radio':
            return '<div class="radio">' +
  		   '<label><input type="radio" name="optradio">Option 1</label>' +
		   '</div>';
            break;
        case 'email':
            return '<div class="form-group">' +
    		   '<label for="email">Email address:</label>' +
    		   '<input type="email" class="form-control" id="email">' +
  		   '</div>';
            break;
        case 'password':
            return '<div class="form-group">' +
    		   '<label for="pwd">Password:</label>' +
    		   '<input type="password" class="form-control" id="pwd">' +
  		   '</div>';
            break;
        case 'textarea':
            return '<div class="form-group">' +
  		   '<label for="comment">Comment:</label>' +
  		   '<textarea class="form-control" rows="5" id="comment"></textarea>' +
		   '</div>';
            break;
	}

}
