// JavaScript source code
/** Canvasmanager
 * menyimpan element canvas
 * menyediakan fungsi tambahan
 * menyediakan fungsi resize berdasarkan aspect ratio
 * custom aspect ratio
 * 
 */
function Canvasmanager (canvasID) {
    var wRatio = 16;
    var hRatio = 9;
    var canvasElement = document.getElementById(canvasID);
    
    var public = {};
    public.getContext = function (context) {
        return canvasElement.getContext(context)
    }
    public.getHeight = function () {
        return canvasElement.height;
    }
    public.getWidth = function () {
        return canvasElement.width;
    }
    public.XfromRight = function (number) {
        return canvasElement.width - number;
    }
    public.YfromBottom = function (number) {
        return canvasElement.height - number;
    }
    public.changeRatio = function (widthRatio, heightRatio) {
        wRatio = widthRatio
        hRatio = heightRatio
    }
    
    //RESIZE FUNCTION
    var autoresize = false;
    var resizeinterval;
    var resizewidthdependent = true;
    public.resize = function () {
        if (resizewidthdependent == true) {
            //console.log('widthindependent')
            var resWidth = window.innerWidth * 80 / 100;
            var resUnit = resWidth / wRatio;
            var resHeight = resUnit * hRatio;
            if (canvasElement.height != resHeight) {
                canvasElement.height = resHeight;
                canvasElement.width = resWidth;
            }

            if (canvasElement.height > window.innerHeight)
                resizewidthdependent = false;
        }

        else if (resizewidthdependent == false) {
            var resHeight = window.innerHeight;
            var resUnit = resHeight / hRatio;
            var resWidth = resUnit * wRatio;
            if (canvasElement.height != resHeight) {
                canvasElement.height = resHeight;
                canvasElement.width = resWidth;
            }

            if (canvasElement.width > window.innerWidth * 80 / 100)
                resizewidthdependent = true;
        }
    }
    
    public.getOffsetLeft = function () {
        return canvasElement.offsetLeft;
    }
    public.getOffsetTop = function () {
        return canvasElement.offsetTop;
    }
    return public;
}
