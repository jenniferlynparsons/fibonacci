// RESOURCES AND REFERENCES
// https://www.mathsisfun.com/numbers/fibonacci-sequence.html
// http://antjanus.com/blog/web-development-tutorials/fibonacci-taught-programming/
// http://stackoverflow.com/questions/9453421/how-to-round-float-numbers-in-javascript
// https://www.kirupa.com/html5/rounding_numbers_in_javascript.htm

document.querySelector("input").focus()

function fibMath (i) {
	var sqrtFive = Math.sqrt(5)
	var firstHalf = 0
	var secondHalf = 0

	firstHalf = 1 / sqrtFive * Math.pow( ( ( 1 + sqrtFive ) / 2), i)
	secondHalf = 1 / sqrtFive * Math.pow( ( (1 - sqrtFive ) / 2 ), i)
	return Math.round((firstHalf - secondHalf) * 10) / 10
}

document.querySelector("button").addEventListener('click', function (e) {
	var number = document.querySelector("input").value
	var fibnumber = fibMath(number)
	document.querySelector("span").innerHTML = fibnumber
	document.querySelector("input").value = ''
	document.querySelector("input").focus()
})
