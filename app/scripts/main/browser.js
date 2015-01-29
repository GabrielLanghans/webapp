'use strict';

// verificar navegador
var Browser = {    
    init: function(){

        if (bowser.msie) {
            var ieVersion = "ie" + parseInt(bowser.version);
            $("html").addClass(ieVersion).addClass('ie');
        }
        else if (bowser.webkit) {
            $("html").addClass('webkit');
        }
        else if (bowser.gecko) {
            $("html").addClass('gecko');
        }


        if (bowser.chrome || bowser.safari || bowser.firefox || (bowser.msie && bowser.version > 8)) {
            $("html").addClass("animate");
        }
        else{
            $("html").addClass("no-animate");
        }    
		
		
    }
};