const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e) {
	e.preventDefault();
	popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
	popUp.classList.remove('active');
})

let save = document.querySelector(".save_but");

save.addEventListener('click', newbox);

function newbox() {

	let new_div = document.createElement('div');
	let new_h2 = document.createElement('h2');
	let new_p = document.createElement('p');
	let new_img = document.createElement('img');

	let box_header = document.getElementById('box_header').value;
	let box_desc = document.getElementById('box_description').value;
	let box_img = document.getElementById('box_img').files[0].name;
	let main = document.querySelector(".main");

	new_div.className = 'box';
	new_div.innerHTML = `<img src="${box_img}">` + `<h2>${box_header} </h2>` + `<p>${box_desc}</p>` ;

	main.prepend(new_div);

	
}