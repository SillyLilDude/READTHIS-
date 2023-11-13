 // selecting all the circles in one go
const myCircles = document.querySelectorAll(".circles");

// targeting the 2nd circle with the index number for this array/object
// changing bg color to green
myCircles[1].style.backgroundColor = "green";

myCircles.forEach(function (item, index, array) {

    item.addEventListener("click", function () {
        item.classList.toggle("nice");
        console.log("circle with index nr: " + index);
    });
})
