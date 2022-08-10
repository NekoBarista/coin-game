function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


const player = document.querySelector('#player')
const coin = document.querySelector('#coin')
const scoreCard = document.querySelector('#score')

window.addEventListener('keyup', function(e) {

	if (e.key === 'ArrowDown' || e.key === "down") {

	const currentTop = extractPosition(player.style.top)
	player.style.top = `${currentTop + 50}px`
}

else if (e.key === 'ArrowUp' || e.key === "Up") {

	const currentTop = extractPosition(player.style.top)
	player.style.top = `${currentTop  - 50}px`
}

else if (e.key === "ArrowRight" || e.key=="Right") {
	const currentLeft = extractPosition(player.style.left)
	player.style.left = `${currentLeft  + 50}px`
	player.style.transform = 'scale(1,1)'
}

else if (e.key === "ArrowLeft" || e.key=="Left") {
	const currentLeft = extractPosition(player.style.left)
	player.style.left = `${currentLeft  - 50}px`
	player.style.transform = 'scale(-1,1)'
}

	if(isTouching(player, coin)) {
		moveCoin()
		countTouches()
	} 

})

const extractPosition = (position) => {
	
	if (!position) return 100
	return parseInt(position.slice(0,-2))}


const moveCoin = () => {
const y = Math.floor(Math.random() * window.innerHeight)
const x = Math.floor(Math.random() * window.innerHeight)

coin.style.top = `${y}px`
coin.style.left = `${x}px`
}

let counter = 0
function countTouches() {
	scoreCard.innerText = `${++counter}`

};


moveCoin()