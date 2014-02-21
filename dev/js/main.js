var currentTela = 0;
var paths = {
	path0: "m113.59465,224.174759l9.198219,-47.85437l27.594658,-52.485428l51.247208,-26.242729l43.363037,-38.592232l52.561249,1.543686c0,0 34.164795,21.611656 36.792847,21.611656c2.628082,0 14.454346,16.980583 14.454346,16.980583c0,0 15.768372,30.873779 15.768372,30.873779c0,0 56.503357,29.330109 56.503357,29.330109c0,0 26.280609,-26.242722 26.280609,-26.242722c0,0 44.677063,-54.029129 44.677063,-54.029129c0,0 49.933197,-9.262138 49.933197,-9.262138c0,0 35.478821,18.524277 35.478821,18.524277c0,0 61.75946,52.485435 61.75946,52.485435c0,0 27.594666,46.310684 27.594666,46.310684c0,0 9.198242,55.572815 9.198242,55.572815c0,0 -23.652588,32.41748 -23.652588,32.41748c0,0 -42.049011,46.310669 -42.049011,46.310669c0,0 -60.445435,0 -60.445435,0c0,0 -40.734924,-18.524261 -40.734924,-18.524261c0,0 -30.222748,-26.242737 -30.222748,-26.242737c0,0 -34.164795,9.262146 -34.164795,9.262146c0,0 -31.536743,50.941742 -31.536743,52.485443c0,1.543701 -48.619171,30.873779 -48.619171,30.873779c0,0 -35.478821,-3.087372 -35.478821,-3.087372c0,0 -73.585754,-9.262146 -73.585754,-9.262146c0,0 -61.75946,20.067963 -61.75946,20.067963c0,0 -45.991089,-27.786407 -45.991089,-27.786407c0,0 -61.75946,-72.553406 -61.75946,-72.553406c0,0 27.59465,-52.485428 27.59465,-52.485428z",
	path1: "m113.59465,224.174759l9.198219,-47.85437l27.594658,-52.485428l51.247208,-26.242729l43.363037,-38.592232l52.561249,1.543686c0,0 34.164795,21.611656 36.792847,21.611656c2.628082,0 14.454346,16.980583 14.454346,16.980583c0,0 15.768372,30.873779 15.768372,30.873779c0,0 56.503357,29.330109 56.503357,29.330109c0,0 26.280609,-26.242722 26.280609,-26.242722c0,0 44.677063,-54.029129 44.677063,-54.029129c0,0 49.933197,-9.262138 49.933197,-9.262138c0,0 35.478821,18.524277 35.478821,18.524277c0,0 61.75946,52.485435 61.75946,52.485435c0,0 27.594666,46.310684 27.594666,46.310684c0,0 9.198242,55.572815 9.198242,55.572815c0,0 -23.652588,32.41748 -23.652588,32.41748c0,0 -42.049011,46.310669 -42.049011,46.310669c0,0 -60.445435,0 -60.445435,0c0,0 -40.734924,-18.524261 -40.734924,-18.524261c0,0 -30.222748,-26.242737 -30.222748,-26.242737c0,0 -34.164795,9.262146 -34.164795,9.262146c0,0 -31.536743,50.941742 -31.536743,52.485443c0,1.543701 -48.619171,30.873779 -48.619171,30.873779c0,0 -35.478821,-3.087372 -35.478821,-3.087372c0,0 -73.585754,-9.262146 -73.585754,-9.262146c0,0 -61.75946,20.067963 -61.75946,20.067963c0,0 -45.991089,-27.786407 -45.991089,-27.786407c0,0 -61.75946,-72.553406 -61.75946,-72.553406c0,0 27.59465,-52.485428 27.59465,-52.485428z",
	path2: "m113.59465,224.174759l9.198219,-47.85437l27.594658,-52.485428l51.247208,-26.242729l43.363037,-38.592232l52.561249,1.543686c0,0 34.164795,21.611656 36.792847,21.611656c2.628082,0 14.454346,16.980583 14.454346,16.980583c0,0 15.768372,30.873779 15.768372,30.873779c0,0 56.503357,29.330109 56.503357,29.330109c0,0 26.280609,-26.242722 26.280609,-26.242722c0,0 44.677063,-54.029129 44.677063,-54.029129c0,0 49.933197,-9.262138 49.933197,-9.262138c0,0 35.478821,18.524277 35.478821,18.524277c0,0 61.75946,52.485435 61.75946,52.485435c0,0 27.594666,46.310684 27.594666,46.310684c0,0 9.198242,55.572815 9.198242,55.572815c0,0 -23.652588,32.41748 -23.652588,32.41748c0,0 -42.049011,46.310669 -42.049011,46.310669c0,0 -60.445435,0 -60.445435,0c0,0 -40.734924,-18.524261 -40.734924,-18.524261c0,0 -30.222748,-26.242737 -30.222748,-26.242737c0,0 -34.164795,9.262146 -34.164795,9.262146c0,0 -31.536743,50.941742 -31.536743,52.485443c0,1.543701 -48.619171,30.873779 -48.619171,30.873779c0,0 -35.478821,-3.087372 -35.478821,-3.087372c0,0 -73.585754,-9.262146 -73.585754,-9.262146c0,0 -61.75946,20.067963 -61.75946,20.067963c0,0 -45.991089,-27.786407 -45.991089,-27.786407c0,0 -61.75946,-72.553406 -61.75946,-72.553406c0,0 27.59465,-52.485428 27.59465,-52.485428z",
	path3: "m113.59465,224.174759l9.198219,-47.85437l27.594658,-52.485428l51.247208,-26.242729l43.363037,-38.592232l52.561249,1.543686c0,0 34.164795,21.611656 36.792847,21.611656c2.628082,0 14.454346,16.980583 14.454346,16.980583c0,0 15.768372,30.873779 15.768372,30.873779c0,0 56.503357,29.330109 56.503357,29.330109c0,0 26.280609,-26.242722 26.280609,-26.242722c0,0 44.677063,-54.029129 44.677063,-54.029129c0,0 49.933197,-9.262138 49.933197,-9.262138c0,0 35.478821,18.524277 35.478821,18.524277c0,0 61.75946,52.485435 61.75946,52.485435c0,0 27.594666,46.310684 27.594666,46.310684c0,0 9.198242,55.572815 9.198242,55.572815c0,0 -23.652588,32.41748 -23.652588,32.41748c0,0 -42.049011,46.310669 -42.049011,46.310669c0,0 -60.445435,0 -60.445435,0c0,0 -40.734924,-18.524261 -40.734924,-18.524261c0,0 -30.222748,-26.242737 -30.222748,-26.242737c0,0 -34.164795,9.262146 -34.164795,9.262146c0,0 -31.536743,50.941742 -31.536743,52.485443c0,1.543701 -48.619171,30.873779 -48.619171,30.873779c0,0 -35.478821,-3.087372 -35.478821,-3.087372c0,0 -73.585754,-9.262146 -73.585754,-9.262146c0,0 -61.75946,20.067963 -61.75946,20.067963c0,0 -45.991089,-27.786407 -45.991089,-27.786407c0,0 -61.75946,-72.553406 -61.75946,-72.553406c0,0 27.59465,-52.485428 27.59465,-52.485428z"
};
var raphs = {};
var slider;

function init(){
	
	//var pt = convertPathToArray(paths.path1);
	slider = new Dragdealer('slider', {slide:false, x:0.5, animationCallback: sliderMoving});
	$("#slider").hide();

	montaTela(currentTela);
}

function montaTela(tela, opt){
	var conteudo = $("#conteudo");
	if(tela == 0){
		conteudo.html("");
		for (var i = 0; i < 4; i++) {
			conteudo.append($("<div></div>")
				.attr("id", "path" + i)
				.attr("class", "path-opt")
			);

			var raph = {};
			raph.r = Raphael("path" + i);
			raph.r.setViewBox(0, 0, 780, 540, true);
			raph.r.canvas.setAttribute('preserveAspectRatio', 'none');

			raph.path = raph.r.path(paths["path" + i]);
			raph.length = raph.path.getTotalLength();

			raphs["path" + i] = raph;
			
			//$("#path" + i).css("width", (780/2) + "px").css("height", (540/2) + "px");
			//$("#path" + i).on("click", optClick);
			console.log($("#path" + i));
		};

		$(".path-opt").on("click", optClick);
		
	}else if(tela == 1){
		$("#title").html("Clique sobre a curva para escolher o ponto inicial");
		$("#" + tgId).on("click", canvasClick);
	}
}

var tgId;
function optClick(e){
	$(".path-opt").off("click", optClick);
	tgId = e.currentTarget.id;
	currentTela = 1;
	console.log(raphs[tgId].path.getTotalLength());

	$(".path-opt").css("z-index", "50");
	$("#" + tgId).css("z-index", "99").animate({width: "780px", height: "540px", top: "0px", left: "0px"}, 500, finishAnimate);
}

function finishAnimate(){
	montaTela(currentTela, tgId);
	//console.log(raphs[tgId].path.getTotalLength());
	//console.log(raphs[tgId].path.getPointAtLength(10))
}

function canvasClick(e){
	//console.log($().offset().left);
	var offX  = (e.offsetX || e.clientX - $("#" + tgId).offset().left + window.pageXOffset);
	var offY  = (e.offsetY || e.clientY - $("#" + tgId).offset().top + window.pageYOffset );
	//console.log(offX, offY);
	var minDist = 9999;
	var pt;
	var iniLength;
	for (var i = 0; i < raphs[tgId].length; i+=10) {
		var pDist = raphs[tgId].path.getPointAtLength(i);
		var dist = distance(offX, offY, pDist.x, pDist.y);
		if(dist < minDist) {
			minDist = dist;
			pt = pDist;
			iniLength = i;
		}
	};

	if(minDist < 5){
		if(raphs[tgId].gPt) raphs[tgId].gPt.remove();

		raphs[tgId].gPt = raphs[tgId].r.circle(pt.x, pt.y, 4);
		raphs[tgId].iniDist = minDist;
		raphs[tgId].pt = pt;
		raphs[tgId].iniLength = iniLength;

		$("#slider").show();
		$("#slider").css("z-index", 200);
		slider.setValue(0.5, 0);
	}
}

function sliderMoving(x, y){
	//console.log(x);
	if(!tgId) return;

	var sliderVal = (x - 0.5) * raphs[tgId].length;
	var newLen = raphs[tgId].iniLength + sliderVal;

	if(newLen > raphs[tgId].length) newLen -= raphs[tgId].length;
	else if(newLen < 0) newLen += raphs[tgId].length;

	var newPt = raphs[tgId].path.getPointAtLength(newLen);

	raphs[tgId].gPt.attr("cx", newPt.x);
	raphs[tgId].gPt.attr("cy", newPt.y);
	raphs[tgId].pt = newPt;
}

function convertPathToArray(path){
	return Raphael.parsePathString(path);
}

function distance(x1, y1, x2, y2){
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}