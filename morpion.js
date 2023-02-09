
// let cells = document.querySelectorAll('#field td');
// start(cells);

// function start(cells) {
// 	let i = 0;

// 	for (let cell of cells) {
// 		cell.addEventListener('click', function step() {
// 			this.textContent = ['X', 'O'][i % 2];
// 			this.removeEventListener('click', step);

// 			if (isVictory(cells)) {
// 				alert(this.textContent + "__wins"); //  winner name O or X

// 			}else if (i == 8) {
// 				alert('draw');
// 			}

// 			i++;
// 		});
// 	}
// }


// function isVictory(cells) {
// 	let combs = [
// 		[0, 1, 2],
// 		[3, 4, 5],
// 		[6, 7, 8],
// 		[0, 3, 6],
// 		[1, 4, 7],
// 		[2, 5, 8],
// 		[0, 4, 8],
// 		[2, 4, 6],
// 	];

// 	for (let comb of combs) {
// 		if (
// 			cells[comb[0]].textContent == cells[comb[1]].textContent &&
// 			cells[comb[1]].textContent == cells[comb[2]].textContent &&
// 			cells[comb[0]].textContent != ''
// 		) {
// 			return true;
// 		}
// 	}

// 	return false;
// }








cells = document.querySelectorAll('#field td');

start(cells); //lancer le jeu



let player = 'X';
let CPU = 'O';
let i = 0;
let gameOver = false
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



function randomCPUStep(cells) {
	let cell;
	do {
		cell = cells[randomNumber(0, 8)]
	} while (cell.innerText != "")
	// tant que cells pas vide, trouver de manière random une case vide...


	cell.textContent = 'O'; //ce que rajoute le CPU dans sa case random

	
	

	// l'autre option c'est de laisser le callback et de mettre un truc genre  if(this.textContent != '') return dans 'step', je crois ?


}



function start(cells) {
	


	for (let cell of cells) {
		cell.addEventListener('click', function step() {
			if (!gameOver) {
				if (this.innerText == "") {
					this.textContent = 'x';
			
	
	
				if (isVictory(cells)) {
					gameOver = true
					alert(this.textContent + "__wins"); //  winner name O or X
					return
	
				} else if (i == 8) {
					gameOver = true
					alert('draw');
					return
				}
	
				i++;
				randomCPUStep(cells)
	
				}
			}
			
			
		});
	}




	
}

function isVictory(cells) {
	let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let comb of combs) {
		if (
			cells[comb[0]].textContent == cells[comb[1]].textContent &&
			cells[comb[1]].textContent == cells[comb[2]].textContent &&
			cells[comb[0]].textContent != ''
		) {
			return true;
		}
	}

	return false;
}



const restartButton = document.querySelector("#restartButton");
restartButton.addEventListener("click", restartGame);


function restartGame() {
	gameOver = false;
	i = 0;
	for (let cell of cells) {
	  cell.textContent = '';
	}
  }
