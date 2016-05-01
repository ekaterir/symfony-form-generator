  $(function() {
    $( "#form-types" ).accordion();
    $( "#form-types li" ).draggable({
      //appendTo: "body",
      //helper: "clone"
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
	console.log('Event:');
	console.log(event);
	console.log('UI:');
	console.log(ui);
        $( this ).find( ".placeholder" ).remove();
        //$( "<div></div>" ).text( printHtmlOf(ui.draggable.text()) ).appendTo( this );
	printHtmlOf(ui.draggable.text().toLowerCase());
	//alert(ui.draggable.text());
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
	}
	var element = document.getElementById("form-preview");
	element.appendChild(newDiv);
  };
