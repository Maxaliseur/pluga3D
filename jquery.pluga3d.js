(function( $ ){

	$.fn.pluga3d = function( options ) {
	
		var settings = $.extend( {
			'effect'            :'torsion',
			'color'             :'',
			'width'             :'150px'
		}, options );
		
		// The effects
		var effects = {
			torsion : {
				on: function(obj){
					$(obj).css({
						'display'              :'inline-block',
						'-moz-transition'      :'all 2s ease',
						'-moz-transform'       :'matrix(-1,0,0.5,1,1em,0em)',
						'-webkit-transform'    :'matrix(-1,0,0.5,1,1em,1em)',
						'-webkit-transition'   :'all 2s ease',
						'-o-transition'        :'all 2s ease',
						'-o-transform'         :'matrix(-1,0,0.5,1,1em,1em)',
						'cursor'               :'pointer'
					});
				},
				off: function(obj){
					$(obj).css({
						'display'              :'inline-block',
						'-moz-transition'      :'all 2s ease',
						'-moz-transform'       :'matrix(1,0,0,1,1em,0em)',
						'-webkit-transition'   :'all 2s ease',
						'-webkit-transform'    :'matrix(1,1,-1,1,1em,0em)',
						'-o-transition'        :'all 2s ease',
						'-o-transform'         :'matrix(1,1,-1,1,1em,0em)'
					});
				}
			},
		//--------------------------------------
			balancement : {
				on: function(obj){
					$(obj).css({
						'-moz-transform'       :'rotate(10deg)',
						'-moz-transition'      :'all 1s ease',
						'-webkit-transform'    :'rotate(10deg)',
						'-webkit-transition'   :'all 1s ease',
						'-o-transform'         :'rotate(10deg)',
						'-o-transition'        :'all 1s ease',
						'cursor'               :'pointer'
					});
				},
				off: function(obj){
					$(obj).css({
						'-moz-transform'       :'rotate(0deg)',
						'-moz-transition'      :'all 1s ease',
						'-webkit-transform'    :'rotate(0deg)',
						'-webkit-transition'   :'all 1s ease',
						'-o-transform'         :'rotate(0deg)',
						'-o-transition'        :'all 1s ease'
					});
				}
			},
		//--------------------------------------
			expand : {
				on: function(obj){
					$(obj).stop().animate({
						'width'                : "450px",
						'font-size'            : "40px",
						'border-width'         : "10px",
						'cursor'               :'pointer'
					}, 1000 );// The numerical value means the temp of the game animations
				},
				off: function(obj){
					$(obj).stop().animate({
						'width'                : settings.width,
						'font-size'            : "30px",
						'border-width'         : "10px"
					}, 800 ); // The numerical value means the temp of the game animations
				}	
			},
		//-------------------------------------
			rotatey : {
				on: function(obj){
					$(obj).css({
						'display'              :'inline-block',
						'-moz-transition'      :'all 2s ease',
						'-webkit-transform'    :'rotateY(-360deg)',
						'-webkit-transition'   :'all 2s ease',
						'-moz-transform'       :'rotateY(-360deg)',
						'-o-transition'        :'all 2s ease',
						'-o-transform'         :'rotateY(-360deg)',
						'cursor'               :'pointer'
					});
				},
				off: function(obj) {
					$(obj).css({
						'display'              :'inline-block',
						'-moz-transition'      :'all 2s ease',
						'-webkit-transition'   :'all 2s ease',
						'-webkit-transform'    :'rotateY(0deg)', 
						'-moz-transform'       :'rotateY(0deg)',
						'-o-transition'        :'all 2s ease',
						'-o-transform'         :'rotateY(0deg)'
					});
				}
			},
		//-----------------------------------
			rotatex : {
				on: function(obj){
					$(obj).css({
						'display'              :'inline-block',
						'-moz-transition'      :'all 1s ease',
						'-webkit-transform'    :'rotateX(-360deg)',
						'-webkit-transition'   :'all 1s ease',			
						'-moz-transform'       :'rotateX(-360deg)',
						'-o-transform'         :'rotateX(-360deg)',
						'-o-transition'        :'all 1s ease',
						'cursor'               :'pointer'
					});
				},
				off: function(obj) {
					$(obj).css({
						'display'              :'inline-block',
						'-moz-transition'      :'all 1s ease',
						'-webkit-transition'   :'all 1s ease',
						'-webkit-transform'    :'rotateX(0deg)', 
						'-moz-transform'       :'rotateX(0deg)',
						'-o-transition'        :'all 1s ease',
						'-o-transform'         :'rotateX(0deg)'
					});
				}
			},	
		//---------------------------------------	
			rotatexandy : {
				on: function(obj){
					$(obj).css({
						'display'              :'inline-block',
						'-moz-transition'      :'all 3s ease',
						'-webkit-transform'    :'rotateX(-360deg) rotateY(-360deg)', 
						'-moz-transform'       :'rotateX(-360deg) rotateY(-360deg)',
						'-webkit-transition'   :'all 3s ease',
						'-o-transform'         :'rotateX(-180deg) rotateY(-180deg)',
						'-o-transition'        :'all 3s ease',
						'cursor'               :'pointer'
					});
				},
				off: function(obj) {
					$(obj).css({
						'display'              :'inline-block',
						'-moz-transition'      :'all 3s ease',
						'-webkit-transform'    :'rotateX(0deg) rotateY(-0deg)', 
						'-moz-transform'       :'rotateX(0deg) rotateY(-0deg)',
						'-webkit-transition'   :'all 3s ease',
						'-o-transition'        :'all 3s ease',
						'-o-transform'         :'rotateX(0deg) rotateY(-0deg)'
					});
				}
			},
			transitcolor : {
				on: function(obj) {
					settings.color = $(obj).css('color');
					$(obj).css({
						//To change the color transition, change the color code after " 'color': '#....... ' " .
						'color'                :'red',
						
						// '... ms' can establish the time of transition
						'-webkit-transition'   :'color 350ms ease-out', //transition webkit   
						'-moz-transition'      :'color 350ms ease-out', //transition mozilla
						'-o-transform'         :'color 350ms ease-out', //transition opera
						'cursor'               :'pointer'
					});
				},
				off: function(obj) {
					$(obj).css({
						//The color will return to that established for the element in the top of the code settings.	
						'color'                :settings.color,
						'-webkit-transition'   :'color 350ms ease-out', //transition webkit
						'-moz-transition'      :'color 350ms ease-out', //transition mozilla
						'-o-transform'         :'color 350ms ease-out'  //transition opera
					});
				}	
			},
			empire : {
				on : function(obj) {
					$(obj).css({
						'-moz-transform':'perspective(100)',
						'-moz-transform':'rotateX(-45deg)',
						'cursor':'pointer'
					});
				}
			},
		}
		//--------------------------------------------------
		return $(this).each(function(){
			
			$(this).mouseover(function(){
			
				effects[settings.effect].on(this);
				
			}).mouseout(function(){
			
				effects[settings.effect].off(this);
			
			});	
		}); // eof each
	};
}) (jQuery);	