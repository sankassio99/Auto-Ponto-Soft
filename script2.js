var click = 0 ;
var finalIntervalo ;
var numberIntervaloInicio = 0 ;
var numberIntervaloFinal = 0 ;
function iniciar() {
	var btn0 = document.getElementsByTagName('button')[0];
	btn0.onclick = function () {
		
		write(0) ;
	}
	var btn1 = document.getElementsByTagName('button')[1];
	btn1.onclick = function () {
		
		write(1) ;		
	}
	var btn2 = document.getElementsByTagName('button')[2];
	btn2.onclick = function () {
		var folgaclicada = false ;
		write(2) ;
	}
	var btn3 = document.getElementsByTagName('button')[3];
	btn3.onclick = function () {
		
		write(3) ;
	}	
	var btn4 = document.getElementsByTagName('button')[4];
	btn4.onclick = function () {
		writeFolga();
    }
    var btn4 = document.getElementById('reload');
	btn4.onclick = function () {
		document.location.reload(true);
	}
	var btn5 = document.getElementById('apagar');
	btn5.onclick = function () {
		apagar();
    }
    
}



function write(num){
	click ++ ;
	var turno ;

	//analisar entrada turno;
		if(num==0){
			turno = "alfa";
		}else if(num==1) {
			turno = "bravo";
		}else if(num==2){
			turno = "charlie" ;
		}else if(num==3){
            turno = "delta" ;
        }    
		// }else {
		// 	turno = "folga" ;
		// }
	// console.log("turno "+turno);
	


	let tbody = document.getElementById("linha");

	let linha = document.createElement("tr");
	let colDia = document.createElement("td");
	let colEntrada = document.createElement("td");
	let colDe = document.createElement("td");
	let colAs = document.createElement("td");
	let colSaida = document.createElement("td");
	let colTurno = document.createElement("td");

	let txtDia = document.createTextNode(click);
	let txtEntrada = document.createTextNode(entrada(turno));
	let txtDe = document.createTextNode(de(turno));
	let txtAs = document.createTextNode(finalIntervalo);
	let txtSaida = document.createTextNode(saida(turno));
	let txtTurno = document.createTextNode(turno.toUpperCase());

	linha.appendChild(colDia);
	linha.appendChild(colEntrada);
	linha.appendChild(colDe);
	linha.appendChild(colAs);
	linha.appendChild(colSaida);
	linha.appendChild(colTurno);

	colDia.appendChild(txtDia);
	colEntrada.appendChild(txtEntrada);
	colDe.appendChild(txtDe);
	colAs.appendChild(txtAs);
	colSaida.appendChild(txtSaida);
	colTurno.appendChild(txtTurno);

    tbody.appendChild(linha);
    
    tempoIntervalo();

}
var folgaclicada = 0 ;
function writeFolga(){
	click ++ ;
	folgaclicada ++ ;
	
    let turno = "Folga" ;
    let tbody = document.getElementById("linha");

    let linha = document.createElement("tr");
    let colDia = document.createElement("td");
    let colFolga = document.createElement("td");
    let col = document.createElement("td");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");

    let txtDia = document.createTextNode(click);
    let TextoFolga = document.createTextNode(turno);

    linha.style.backgroundColor="#8FB399";
    linha.style.color="white";
    linha.style.width="400px";

    linha.appendChild(colDia);
    linha.appendChild(colFolga);
    linha.appendChild(col);
    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col3);

    colDia.appendChild(txtDia);
    colFolga.appendChild(TextoFolga);
    

	tbody.appendChild(linha);
	
	var minIntervalos = document.getElementById("minIntervalos");
	minIntervalos.innerHTML +="<br>" ;
}
var vetMinIntervalor = [] ;
function tempoIntervalo(){
	
    var minIntervalos = document.getElementById("minIntervalos");
	var tempoIntervalo = numberIntervaloFinal - numberIntervaloInicio ;
	vetMinIntervalor.push(tempoIntervalo+" ");
    console.log("Tempo de intervalo "+tempoIntervalo);
    minIntervalos.innerHTML = vetMinIntervalor ;
}
function apagar(){
	
	var linhas = document.getElementById("linha");
	linhas.removeChild(linhas.childNodes[click]);
	var minIntervalos = document.getElementById("minIntervalos");
	if(folgaclicada<=0){
		vetMinIntervalor.pop();
		folgaclicada -- ;
	}else{
		folgaclicada -- ;
	}
	console.log("Cliques na folga: "+folgaclicada);
	minIntervalos.innerHTML = vetMinIntervalor ;
	click -- ;
	
}

function entrada(turno){
	var min = 59 ;
	if(turno=="alfa"){
		var hora = [23];	
		var number = (hora+":"+calculaMin(min));		
		return number;
	}else if(turno=="bravo") {
		var hora = [5];	
		var number = ("0"+hora+":"+calculaMin(min));		
		return number;
	}else if(turno=="charlie"){
		var hora = [11];	
		var number = (hora+":"+calculaMin(min));		
		return number;
	}else if(turno=="delta"){
		var hora = [17];	
		var number = (hora+":"+calculaMin(min));		
		return number;
	}else {
		return "folga" ;
	}
	
}
function calculaMin(min){
	// var min = 59 ;
	for (let i = 0; i < 1; i++) {
		min = min - Math.round(Math.random()*15);
	}
	if(min>=0 && min<10){
		return "0"+min ;
	}
	return min ;
}
function calculaIntervalo(){
	var min = 42 ;
	for (let i = 0; i < 1; i++) {
		min = min - Math.round(Math.random()*41);
    }
	return min ;
}
function calculaIntervaloFinal(hora,inicio){
    var final = inicio + Math.round(Math.random()*(18-13)+13)
    numberIntervaloFinal = final ;
	if(hora>0 && hora<10){
		finalIntervalo = ("0"+hora+":"+final);
	}else{
		finalIntervalo = (hora+":"+final);
	}
	
	// console.log("horario final "+finalIntervalo)
	return final ;
}



function de(turno){
	if(turno=="alfa"){
		var hora = Math.round(Math.random()*(5-0));	
        var inicio = calculaIntervalo() ;
		numberIntervaloInicio = inicio ;
		var number = ("0"+hora+":"+inicio);
        calculaIntervaloFinal(hora,inicio);
		return number;
	}else if(turno=="bravo") {
		var hora = Math.round(Math.random()*(11-6)+6);	
        var inicio = calculaIntervalo() ;
		numberIntervaloInicio = inicio ;
		if(hora>0 && hora<10){
			var number = ("0"+hora+":"+inicio);
		}else{
			var number = (hora+":"+inicio);
		}
		calculaIntervaloFinal(hora,inicio);	
		return number;
	}else if(turno=="charlie"){
		var hora = Math.round(Math.random()*(17-12)+12);	
        var inicio = calculaIntervalo() ;
        numberIntervaloInicio = inicio ;
		var number = (hora+":"+inicio);
		calculaIntervaloFinal(hora,inicio);	
		return number;
	}else if(turno=="delta"){
		var hora = Math.round(Math.random()*(23-18)+18);	
        var inicio = calculaIntervalo() ;
        numberIntervaloInicio = inicio ;
		var number = (hora+":"+inicio);
		calculaIntervaloFinal(hora,inicio);	
		return number;
	}else {
		return "folga" ;
	}
}

function saida(turno){
	min = 15 ;
	if(turno=="alfa"){
		var hora = [6];	
		var number = ("0"+hora+":"+calculaMin(min));		
		return number;
	}else if(turno=="bravo") {
		var hora = [12];	
		var number = (hora+":"+calculaMin(min));		
		return number;
	}else if(turno=="charlie"){
		var hora = [18];	
		var number = (hora+":"+calculaMin(min));		
		return number;
	}else if(turno=="delta"){
		var hora = 0;	
		var number = ("0"+hora+":"+calculaMin(min));		
		return number;
	}else {
		return "folga" ;
	}
}

window.onload = iniciar ;
