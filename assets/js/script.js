window.addEventListener("scroll",function(){
	let menuArea= document.getElementById("menuArea");
	let brandimagelight = document.getElementsByClassName("logo-light");
	let brandimagedark = document.getElementsByClassName("logo-dark");
	let navbarcontent = document.getElementsByClassName("nav-link");
	var x = window.matchMedia("(max-width: 1023px)");
	let navicon=document.getElementsByClassName("navbar-toggler");
	if(window.pageYOffset>0){
		menuArea.classList.add("nav-trans");
		menuArea.style.padding="0% 1%";
		brandimagelight[0].style.display="block";
		brandimagedark[0].style.display="none";

		for(var i=0;i<navbarcontent.length;i++){
			navbarcontent[i].style.color="white";
		}
		navicon[0].style.color="white";
		
	}else{
		menuArea.classList.remove("nav-trans");
		
		
		for(var i=0;i<navbarcontent.length;i++){
			navbarcontent[i].style.color="rgba(0, 0, 0, 0.5)";
		}
		function media(x){
			if(x.matches){
				menuArea.style.padding="1%";
			}else{
				menuArea.style.padding="2% 10%";
				brandimagelight[0].style.display="none";
				brandimagedark[0].style.display="block";
			}
		}
		media(x);
		navicon[0].style.color="rgba(0, 0, 0, 0.5)";
	}
});