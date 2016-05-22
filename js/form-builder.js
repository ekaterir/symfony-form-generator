  $(function() {

    var icons = {
      header: "fa fa-fw fa-chevron-circle-right txt-color-green",
      activeHeader: "fa fa-fw fa-chevron-circle-down txt-color-red"
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
        $(this).find( ".placeholder" ).remove();
	if (typeof window.form === 'undefined') {
		var form = new Form('rand string');
		window.form = form;
	}
	var element = new Element(ui.draggable.text().toLowerCase());
	window.form.addElement(element);
	printHtmlOf(element.getHTML());
	console.log(window.form);
      }
    }).sortable({
      items: "div",
      sort: function() {
        $( this ).removeClass( "ui-state-default" );
      }
    });

  });




  var printHtmlOf = function (html) {
	var newDiv = document.createElement('div');
	newDiv.className = 'form-group';
        newDiv.innerHTML = html;
	var element = document.getElementById("form-preview");
	element.appendChild(newDiv);
  };
