var GFilterMode = {}
	GFilterMode.NORMAL = "source-over"
	GFilterMode.LIGHTER = "lighter"
	GFilterMode.MULTIPLY = "multiply"
	GFilterMode.SCREEN = "screen"
	GFilterMode.OVERLAY = "overlay"
	GFilterMode.DARKEN = "darken"
	GFilterMode.LIGHTEN = "lighten"
	GFilterMode.COLOR_DODGE = "color-dodge"
	GFilterMode.COLOR_BURN = "color-burn"
	GFilterMode.HARD_LIGHT = "hard-light"
	GFilterMode.SOFT_LIGHT = "soft-light"
	GFilterMode.DIFFERENCE = "difference"
	GFilterMode.EXCLUSION = "exclusion"
	GFilterMode.HUE = "hue"
	GFilterMode.SATURATION = "saturation"
	GFilterMode.COLOR = "color"
	GFilterMode.LUMINOSITY = "luminosity"

function GFilter(mode,color,opacity){
	var public = {}
		public.draw = function(){
			ctx.rect(-canvas.getWidth()/2,-canvas.getHeight()/2,canvas.getWidth(),canvas.getHeight());
			ctx.globalCompositeOperation = mode;
			ctx.globalAlpha = opacity
			ctx.fillStyle = color
			ctx.fill();
		}
	return public;
}
