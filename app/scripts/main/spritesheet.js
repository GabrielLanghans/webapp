//spritesheet
var SpriteSheet = (function() {
    var CONTENT = null;
    var TOTAL_FRAMES = 0;
    var INTERVAL = 0;
    var WIDTH = 0;
    var HEIGHT = 0;
    var IMAGE = "";
    var hasToAnim = true;
    var isReverse = false;
    var currentFrame = 0;
    var onComplete;

    return {

        build: function(pcontent, ptotalFrames, pFramesPerSecond, pWidth, pHeight, imagePath, pOnComp) {
            CONTENT = pcontent;
            TOTAL_FRAMES = ptotalFrames;
            INTERVAL = 1000 / pFramesPerSecond;
            WIDTH = pWidth;
            HEIGHT = pHeight;
            IMAGE = imagePath;
            onComplete = pOnComp;

            CONTENT.css("background", "url('" + IMAGE + "') 0 0 no-repeat");
        },

        start: function(isRev) {
            //stop();
            isReverse = isRev || false;

            //currentFrame = 0;
            hasToAnim = true;
            loop();
        },


        stop: function() {
            hasToAnim = false;
            // currentFrame = 0;
            loop();
        },

        goToFrame: function(frame) {
            currentFrame = frame;
            // currentFrame = 0;
            loop();
        }
    }

    function loop() {
        // if (currentFrame == TOTAL_FRAMES - 1)
        //     currentFrame = 0;

        posy = -(HEIGHT * currentFrame) + "px";

        CONTENT.css("background-position", "0px " + posy);




        if (hasToAnim == true && ((currentFrame < TOTAL_FRAMES - 1 && isReverse == false) || (currentFrame > 0 && isReverse == true))) {
            if (isReverse == true)
                currentFrame--;
            else
                currentFrame++;

            setTimeout(loop, INTERVAL);
        }
        else
        {
            if(currentFrame == TOTAL_FRAMES - 1)
            {
                if(onComplete !== undefined){
                    onComplete();    
                }
                else{
                    currentFrame = 0;
                    setTimeout(loop, INTERVAL);
                }
            }
        }
    }
});