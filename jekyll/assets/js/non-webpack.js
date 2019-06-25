function renderTabbedCodeFences(){

	// Need to make sure that this eventually works:
	// - with multiple, separate code tab blocks
	var tabs = "";

	$( "div.highlighter-rouge.codetab" ).each( function( index ){

		tabName = $( this )[0].classList.item(2);
		tabNameFixed = tabName.replace( "_", "." );

		if( index != 0 ){
			$( this ).hide();
			$( this ).appendTo( "div.codetab-parent" );
			tabs += "<li>" + tabNameFixed  + "</li>";
		}else{
			$( this ).wrap( '<div class="codetab-parent"></div>' );
			tabs += '<li class="active">' + tabNameFixed  + "</li>";
		}
	});

	$( "div.codetab-parent" ).prepend( "<ul>" + tabs  + "</ul>" );
	$( "div.codetab-parent li" ).click(function(){

		which = $( "div.codetab-parent li" ).index( $( this ) );
		$( "div.codetab-parent li" ).removeClass( "active" );
		$( this ).addClass( "active" );
		$( "div.highlighter-rouge.codetab" ).hide();
		$( "div.highlighter-rouge.codetab" ).eq( which ).show();
	});
}

$( document ).ready(function() {

	renderTabbedCodeFences();
});
