$(document).ready( function() {
	var tempImage = new Image();
	tempImage.src = "assets/images/ku-xlarge.png";
	var mMipMap = new MipMap( tempImage  );
	var toExample = $("#example"); 
	var toContainer = $("#bottom"); 

	var tiHeight = 0;
	var tiWidth = 0;
	
	function resizeImage( ){
		var padding = 5;
		toExample[0].src = mMipMap.GetImage( tiWidth-padding ).src;
	}
	
	window.onresize = function(){
		tiHeight = toContainer.height();
		tiWidth = toContainer.width();
		resizeImage(); 
	};
	
    document.addEventListener( "MipMapLoaded", window.onresize, false); 

});