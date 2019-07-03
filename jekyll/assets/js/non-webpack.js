function renderTabbedCodeFences(){

	var tabGroupIndex = 0;

	while( true ){

		tabGroupIndex++;

		if( $( "div.highlighter-rouge.codetab." + tabGroupIndex ).length == 0 ){
			//DEBUG
			console.log( "Didn't find group for " + tabGroupIndex );
			break;
		}else{
			//DEBUG
			console.log( "Found group for " + tabGroupIndex );
		}

		var tabs = "";

		$( "div.highlighter-rouge.codetab." + tabGroupIndex ).each( function( index ){

			tabName = $( this )[0].classList.item(3);
			tabNameFixed = tabName.replace( "_", "." );
			//tabNameFixed = tabName.replace( "-", " " );

			if( index != 0 ){
				$( this ).hide();
				$( this ).appendTo( "div.codetab-parent." + tabGroupIndex );
				tabs += "<li>" + tabNameFixed  + "</li>";
			}else{
				$( this ).wrap( '<div class="codetab-parent ' + tabGroupIndex + '"></div>' );
				tabs += '<li class="active">' + tabNameFixed  + '</li>';
			}
		});

		$( "div.codetab-parent." + tabGroupIndex ).prepend( "<ul>" + tabs  + "</ul>" );
		$( "div.codetab-parent." + tabGroupIndex + " li" ).click(function(){

			curIndex = $( this ).parent().parent()[0].classList.item(1);
			which = $( "div.codetab-parent." + curIndex + " li" ).index( $( this ) );
			$( "div.codetab-parent." + curIndex + " li" ).removeClass( "active" );
			$( this ).addClass( "active" );
			$( "div.highlighter-rouge.codetab." + curIndex ).hide();
			$( "div.highlighter-rouge.codetab." + curIndex ).eq( which ).show();
		});
	}
}

$( document ).ready(function() {

	renderTabbedCodeFences();
});
