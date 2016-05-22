function Element(type) {

    this.type = type;
    this.id = Math.floor(Math.random() * 1000000) + '_' + type + '_' + Math.floor(Math.random() * 1000000);

}


Element.prototype.getHTML = function() {

    switch(this.type) {
        case 'text':
            return '<label for="' + this.id + '">New Text Field:</label>' +
  		   '<input type="text" class="form-control" id="' + this.id + '">';
            break;

        case 'checkbox':
            return '<div class="checkbox" id="' + this.id + '">' +
		   '<label>' +
      		   '<input type="checkbox"> Checkbox' +
    		   '</label>' +
  		   '</div>';
            break;

        case 'radio':
            return '<div class="radio" id="' + this.id + '">' +
  		   '<label><input type="radio" name="optradio">Option 1</label>' +
		   '</div>';
            break;

        case 'email':
            return '<label for="' + this.id + '">Email:</label>' +
    		   '<input type="email" class="form-control" id="' + this.id + '">';
            break;

        case 'password':
            return '<label for="' + this.id + '">Password:</label>' +
    		   '<input type="password" class="form-control" id="' + this.id + '">';
            break;

        case 'textarea':
            return '<label for="' + this.id + '">New Textarea:</label>' +
  		   '<textarea class="form-control" rows="5" id="' + this.id + '"></textarea>';
            break;
	}

}
