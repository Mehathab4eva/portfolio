



const upArrow = document.querySelector('#upArrow');
const downArrow = document.querySelector("#downArrow");

toggleDisplayUp(upArrow);



upArrow.addEventListener('click', scrollUp);
downArrow.addEventListener('click',scrollDown);

window.addEventListener('scroll', ()=>{
	toggleDisplayUp(upArrow);
	toggleDisplayDown(downArrow);
});






function scrollDown() {

	let scrollValue = (Math.floor((window.pageYOffset+1)/window.innerHeight)+1)*window.innerHeight;
	//window.scroll(0, scrollValue);
	window.scroll({
  			top: scrollValue,
  			behavior: "smooth"
				});
}

function scrollUp() {
	let scrollValue = ((pageYOffset/innerHeight)-1)*innerHeight;
	//window.scroll(0, scrollValue);
	window.scroll({
 			 top: scrollValue,
  			behavior: "smooth"
				});
}


function toggleDisplayUp(elem){
	if(window.pageYOffset> window.innerHeight-100) {
		elem.style.display = "block"
	}
	else {
		elem.style.display = "none"
	}
}

function toggleDisplayDown(elem) {
	if(document.documentElement.scrollHeight- (window.innerHeight+200) > window.pageYOffset )
	{
		elem.style.display = "block"	
	}
	else{
		elem.style.display = "none"	
	}
}