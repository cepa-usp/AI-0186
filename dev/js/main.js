var currentTela = 0;
var paths = {
	path0: "m90,395.746521l598.850037,-345.746521",
	path1: "m390,241.354034c-93.902008,135.249176 -293.161011,408.328949 -314.576996,-0.496307c16.473007,-411.893738 228.911011,-130.141373 314.576996,0.496307 390,241.354034c93.901001,135.249176 293.159973,408.328949 314.575989,-0.496307c-16.472961,-411.893738 -228.910004,-130.141373 -314.575989,0.496307z",
	path2: "m180,230c0,-116.022102 93.977905,-210 210,-210c116.022095,0 210,93.977898 210,210c0,116.022095 -93.977905,210 -210,210c-116.022095,0 -210,-93.977905 -210,-210z",
	path3: "m717.481995,238.957993c-20.471985,98.835007 -40.937988,197.682999 -81.880981,197.682999c-81.872986,0 -81.872986,-395.278015 -163.749023,-395.278015c-81.868988,0 -81.868988,395.278015 -163.742981,395.278015c-81.882996,0 -81.882996,-395.278015 -163.766006,-395.278015c-40.903999,0.001999 -61.374001,98.641006 -81.824997,197.371002"
};
var raphs = {};
var slider;
var next;
var prev;
var check;
var ds;
var r = 210;
var cx = 390;
var cy = 230;
var changeDir = false;

var inicialPosition = {
	path0: {x:10, y:10},
	path1: {x:400, y:10},
	path2: {x:10, y:280},
	path3: {x:400, y:280}
}
var whInicial = {
	w:370,
	h:250
}

function init(){
	var conteudo = $("#conteudo");
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
	};

	slider = new Dragdealer('slider', {slide:false, x:0.5, animationCallback: sliderMoving});
	next = $("#next");
	prev = $("#prev");
	check = $("#check");
	ds = $("#dist");
	check.hide();
	ds.hide();

	next.on("click", avancar);
	prev.on("click", retornar);
	next.on("mouseover", over);
	prev.on("mouseover", over);
	next.on("mouseout", out);
	prev.on("mouseout", out);
	$("#changeDir").on("click", function(){
		//changeDir = !changeDir;
		if(changeDir){
			changeDir = false;
			$("#changeDir").html("-->");
		}else{
			changeDir = true;
			$("#changeDir").html("<--");
		}
		updateDS();
	});

	$("#changeDir").hide();
	$("#slider").hide();
	$("#distAngle").hide();
	$("#show").on("click", showhideAngle);

	montaTela(currentTela);
}

function over(e){
	if($(e.target).hasClass("inativo")) return;
	$(e.target).css("font-weight", "bold").css("background-color", "#F55F5F").css("color", "white");
}

function out(e){
	$(e.target).css("font-weight", "normal").css("background-color", "transparent").css("color", "black");
}

function montaTela(){
	if(currentTela == 0){
		next.show();
		prev.hide();
		next.attr("class", "inativo");
		$("#title").html("Escolha uma das formas para iniciar");
		$(".path-opt").on("click", optClick);
	}else if(currentTela == 1){
		next.show();
		prev.show();
		if(raphs[tgId].gPtF){
			next.attr("class", "");
		}else{
			next.attr("class", "inativo");
		}
		prev.attr("class", "");
		$("#title").html("Clique sobre a curva para escolher o ponto inicial");
		$("#" + tgId).on("click", canvasClick);
	}else if(currentTela == 2){
		next.hide();
		prev.show();
		prev.attr("class", "");
		$("#title").html("Arraste o slider");
		raphs[tgId].gPt = raphs[tgId].r.circle(raphs[tgId].pt.x, raphs[tgId].pt.y, 4).attr("fill", "#FF0000");
		raphs[tgId].subPathInc = true;
		$("#slider").show();
		$("#changeDir").show();
		ds.html("Coordenada: 0");
		ds.show();
		$("#slider").css("z-index", 200);

		if(tgId == "path1" || tgId == "path2"){
			sliderIni = 0.5;
			slider.setValue(0.5, 0);
		}else{
			var sliderVal = raphs[tgId].iniLength/raphs[tgId].length;
			sliderIni = sliderVal;
			slider.setValue(sliderVal, 0, true);
		}

		if(tgId == "path2"){
			$("#show").attr("checked", false);
			check.show();
		}
	}
}

function avancar(){
	if(currentTela == 0){
		return;
	}else if(currentTela == 1){
		if(raphs[tgId].gPtF){
			currentTela = 2;
			$("#" + tgId).off("click", canvasClick);
		}else{
			return;
		}
	}else if(currentTela == 2){
		return;
	}
	montaTela();
}

function retornar(){
	if(currentTela == 0){
		return;
	}else if(currentTela == 1){
		currentTela = 0;
		$("#" + tgId).off("click", canvasClick);
		if(raphs[tgId].gPtF) {
			raphs[tgId].gPtF.remove();
			raphs[tgId].gPtF = null;
		}
		//raphs[tgId].gPt = raphs[tgId].r.circle(pt.x, pt.y, 6).attr("stroke-width", "2");
		raphs[tgId].iniDist = null;
		raphs[tgId].ptF = null;
		raphs[tgId].pt = null;
		raphs[tgId].iniLength = null;
		shrinkPath();
	}else if(currentTela == 2){
		currentTela = 1;
		raphs[tgId].gPt.remove();
		raphs[tgId].subPath.remove();
		raphs[tgId].subPath = null;
		raphs[tgId].subPathInc = false;
		//raphs[tgId].subPathString = null;
		$("#slider").hide();
		if(tgId == "path2"){
			$("#show").attr("checked", false);
			check.hide();
		}
		ds.hide();
		$("#changeDir").hide();
		changeDir = false;
		$("#changeDir").html("-->");
		slider.setValue(0.5, 0);
	}
	montaTela();
}

var tgId;
function optClick(e){
	$(".path-opt").off("click", optClick);
	tgId = e.currentTarget.id;
	currentTela = 1;
	//console.log(raphs[tgId].path.getTotalLength());

	growPath();
}

function growPath(){
	$(".path-opt").css("z-index", "50");
	$("#" + tgId).css("z-index", "99").animate({width: "780px", height: "540px", top: "0px", left: "0px"}, 500, finishGrow);
}

function shrinkPath(){
	$("#" + tgId).css("z-index", "99").animate({width: whInicial.w + "px", height: whInicial.h + "px", top: inicialPosition[tgId].y + "px", left: inicialPosition[tgId].x + "px"}, 500, finishShrink);
}

function finishGrow(){
	montaTela();
}

function finishShrink(){

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
		next.attr("class", "");
		if(raphs[tgId].gPtF) raphs[tgId].gPtF.remove();

		raphs[tgId].gPtF = raphs[tgId].r.circle(pt.x, pt.y, 6).attr("stroke-width", "1");
		//raphs[tgId].gPt = raphs[tgId].r.circle(pt.x, pt.y, 6).attr("stroke-width", "2");
		raphs[tgId].iniDist = minDist;
		raphs[tgId].ptF = pt;
		raphs[tgId].pt = pt;
		raphs[tgId].iniLength = iniLength;
	}
}
var sliderIni = 0.5;
function sliderMoving(x, y){
	//console.log(x);
	if(!tgId) return;

	var sliderVal = (x - sliderIni) * raphs[tgId].length;
	var newLen = raphs[tgId].iniLength + sliderVal;

	if(newLen > raphs[tgId].length) newLen -= raphs[tgId].length;
	else if(newLen < 0) newLen += raphs[tgId].length;

	var newPt = raphs[tgId].path.getPointAtLength(newLen);

	if(raphs[tgId].subPathInc){
		var pathsDrag = [];
		var from = raphs[tgId].iniLength;
		var to = newLen;
		if(sliderVal < 0){
			if(from < raphs[tgId].length/2){
				if(to >= from + raphs[tgId].length/2){
					pathsDrag.push(raphs[tgId].path.getSubpath(0, from));
					pathsDrag.push(raphs[tgId].path.getSubpath(to, raphs[tgId].length));
				}else{
					if(from > to){
						var aux = from;
						from = to;
						to = aux;
					}
					pathsDrag.push(raphs[tgId].path.getSubpath(from, to));
				}
			}else{
				if(from > to){
					var aux = from;
					from = to;
					to = aux;
				}
				pathsDrag.push(raphs[tgId].path.getSubpath(from, to));
			}
		}else{
			if(from > raphs[tgId].length/2){
				if(to <= from - raphs[tgId].length/2){
					pathsDrag.push(raphs[tgId].path.getSubpath(from, raphs[tgId].length));
					pathsDrag.push(raphs[tgId].path.getSubpath(0, to));
				}else{
					if(from > to){
						var aux = from;
						from = to;
						to = aux;
					}
					pathsDrag.push(raphs[tgId].path.getSubpath(from, to));
				}
			}else{
				if(from > to){
					var aux = from;
					from = to;
					to = aux;
				}
				pathsDrag.push(raphs[tgId].path.getSubpath(from, to));
			}
		}
		//console.log(from, to)

		//raphs[tgId].subPathString = raphs[tgId].path.getSubpath(from, to);

		if(raphs[tgId].subPath) raphs[tgId].subPath.remove();//raphs[tgId].subPath.attr("path", raphs[tgId].subPathString);
		//else raphs[tgId].subPath = raphs[tgId].r.path(raphs[tgId].subPathString).attr("stroke-width", "2");
		if(from != to){
			raphs[tgId].subPath = raphs[tgId].r.set();
			for (var i = 0; i < pathsDrag.length; i++) {
				raphs[tgId].subPath.push(raphs[tgId].r.path(pathsDrag[i]).attr("stroke-width", "2"));
			};
		}
	}

	//console.log();

	raphs[tgId].gPt.attr("cx", newPt.x);
	raphs[tgId].gPt.attr("cy", newPt.y);
	raphs[tgId].pt = newPt;

	ds.html("Coordenada: " + sliderVal.toFixed(0) * (changeDir ? -1 : 1));

	showhideAngle();
}

function updateDS(){
	console.log(slider.getValue());
	var sliderVal = (slider.getValue()[0] - sliderIni) * raphs[tgId].length;
	ds.html("Coordenada: " + sliderVal.toFixed(0) * (changeDir ? -1 : 1));
}

function showhideAngle(){
	if($("#show").is(":checked")){
		if(raphs[tgId].angle) raphs[tgId].angle.remove();
		raphs[tgId].angle = raphs[tgId].r.set();
		$("#distAngle").show();
		var pths = getRpath();
		
		raphs[tgId].angle.push(raphs[tgId].r.path(pths[0]));
		raphs[tgId].angle.push(raphs[tgId].r.path(pths[1]));
		raphs[tgId].angle.push(raphs[tgId].r.path(pths[2]).attr("fill", "#FF0000"));
	}else{
		if(raphs[tgId].angle) {
			raphs[tgId].angle.remove();
			raphs[tgId].angle = null;
			$("#distAngle").hide();
		}
	}
}

function convertPathToArray(path){
	return Raphael.parsePathString(path);
}

function distance(x1, y1, x2, y2){
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function getRpath(){
	var arrCaminhos = [];
	var posPtF = raphs[tgId].ptF;
	var posPt = raphs[tgId].pt;


	var caminho = "M" + cx + "," + cy;
	caminho += "L" + posPt.x + "," + posPt.y;
	arrCaminhos.push(caminho);

	var caminho2 = "M" + cx + "," + cy;
	caminho2 += "L" + posPtF.x + "," + posPtF.y;
	arrCaminhos.push(caminho2);

	var caminho3 = "M" + cx + "," + cy;

	var raio = 50;

	var anguloInicial = Math.atan2(posPtF.y - cy,posPtF.x - cx);
	var anguloFinal = Math.atan2(posPt.y - cy,posPt.x - cx);
	

	//if(anguloInicial < 0) anguloInicial += 2 * Math.PI;
	//if(anguloFinal < 0) anguloFinal += 2 * Math.PI;

	anguloInicial *= 180/Math.PI;
	anguloFinal *= 180/Math.PI;

	var max;
	var min;

	if(anguloInicial > 0){
		min = anguloInicial - 180;
		if(anguloFinal < min){
			anguloFinal = 180 + (180 + anguloFinal);
		}
	}else{
		max = anguloInicial + 180;
		if(anguloFinal > max){
			anguloFinal = -179.99 - (180 - anguloFinal);
		}
	}

	//var passo = anguloFinal > anguloInicial ? (anguloFinal - anguloInicial)/100 : (anguloInicial - anguloFinal)/100;
	var passo = 1// * (anguloFinal > anguloInicial ? 1 : -1);//(anguloFinal - anguloInicial)/100;
	//console.log(anguloFinal - anguloInicial);
	$("#distAngle").html(((anguloFinal - anguloInicial) * -1).toFixed(1) + "º");

	if(anguloFinal < anguloInicial){
		var aux = anguloFinal;
		anguloFinal = anguloInicial;
		anguloInicial = aux;
	}

	var count = 0;

	
	for (var i = anguloInicial; i < anguloFinal; i+=passo) {
		var ang = i * Math.PI/180;

		//if(ang > Math.PI) ang -= 2 * Math.PI;
		var rx = raio * Math.cos(ang);
		var ry = raio * Math.sin(ang);
		caminho3 += "L" + (rx + cx) + "," + (ry + cy);

		count++;
		if(count > 180) break;
	};

	caminho3 += "z";

	arrCaminhos.push(caminho3);

	return arrCaminhos;

}