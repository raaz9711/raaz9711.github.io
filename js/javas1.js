function abc(){
	var a=document.getElementsByClassName('menu')[0];
	if(a.style.display==="none"){
		document.getElementById('navb1').src="assets/cross.png"
	a.style.display='block';}
	else{
		document.getElementById('navb1').src="assets/menubtn.png"
		a.style.display='none';
	}
}