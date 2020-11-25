(function() { 

/*****************************************/
/*     globale Variablen fuer die App     */
/*****************************************/

console.log(zitate[0]);



document.getElementById("shuffle-button").addEventListener('click',function(){

	for (let i=1;i<11;i++){
		let zitat;
		do {
			idx = Math.floor(Math.random() * 24623);  
			zitat = zitate[idx].zitat+", "+zitate[idx].kontext;
		} while (zitat.length>150);
		let divName = "zitat-"+i.toString()+"-div";
		console.log(divName);
		document.getElementById(divName).innerHTML = zitat;
		//document.getElementById("zitat-1-div").innerHTML = zitat;
	}
	     
});


/************************************************/
/*                  Ende                        */
/************************************************/

}) ();
