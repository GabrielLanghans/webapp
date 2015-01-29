'use strict';

var trackCategory;

if($('body').hasClass('controller-box')){            
    trackCategory = 'Presente de Sentimentos';
}
else if($('body').hasClass('controller-presence')){            
    trackCategory = 'Vale-presença';
}

//tracking
var Tracking = 
{
    track: function(pCategory, pAction)
    {
        _gaq.push(['_trackEvent', 'Natal', pCategory, pAction]);
        //console.log('_gaq.push([_trackEvent , Natal, ' + pCategory + ', ' + pAction + '])')
    }
};