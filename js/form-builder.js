  $(function() {
    var icons = {
      header: "fa fa-fw fa-plus-circle txt-color-green",
      activeHeader: "fa fa-fw fa-minus-circle txt-color-red"
    };

    $( "#form-types" ).accordion({
      icons: icons,
    });

    $( "#form-types li" ).draggable({
	zIndex: 999,
	revert: true, // will cause the event to go back to its
	revertDuration: 0 //  original position after the drag	
    });

    $( ".canvas" ).droppable({
      tolerance: "fit",
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      accept: ":not(.ui-sortable-helper)",
      drop: function( event, ui ) {
        $( this ).find( ".placeholder" ).remove();
	printHtmlOf(ui.draggable.text().toLowerCase());
	var element = new Element(ui.draggable.text().toLowerCase());
	if (typeof window.form === 'undefined') {
		var form = new Form('rand string');
		form.addElement(element);
		window.form = form;
		console.log('made a new form');
	} else {
		window.form.addElement(element);
		console.log(window.form);
	}	
      }
    }).sortable({
      items: "div",
      sort: function() {
        // gets added unintentionally by droppable interacting with sortable
        // using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
        $( this ).removeClass( "ui-state-default" );
      }
    });

  });




  var printHtmlOf = function (text) {
	var newDiv = document.createElement('div');
	newDiv.className = 'form-group';
	switch(text) {
		case 'text':
			newDiv.innerHTML = '<div class="form-group">' +
  				'<label for="usr">Name:</label>' +
  				'<input type="text" class="form-control" id="usr">' +
				'</div>';
			break;
		case 'checkbox':
			newDiv.innerHTML = '<div class="checkbox">' +
				'<label>' +
      				'<input type="checkbox"> Check me out' +
    				'</label>' +
  				'</div>';
			break;
		case 'radio':
			newDiv.innerHTML = '<div class="radio">' +
  				'<label><input type="radio" name="optradio">Option 1</label>' +
				'</div>';
			break;
		case 'email':
			newDiv.innerHTML = '<div class="form-group">' +
    				'<label for="email">Email address:</label>' +
    				'<input type="email" class="form-control" id="email">' +
  				'</div>';
			break;
		case 'password':
			newDiv.innerHTML = '<div class="form-group">' +
    				'<label for="pwd">Password:</label>' +
    				'<input type="password" class="form-control" id="pwd">' +
  				'</div>';
			break;
		case 'textarea':
			newDiv.innerHTML = '<div class="form-group">' +
  				'<label for="comment">Comment:</label>' +
  				'<textarea class="form-control" rows="5" id="comment"></textarea>' +
				'</div>';
			break;
	}
	var element = document.getElementById("form-preview");
	element.appendChild(newDiv);
  };
