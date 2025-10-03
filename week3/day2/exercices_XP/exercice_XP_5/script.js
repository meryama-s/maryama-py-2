const containerDiv = document.getElementById("container");
console.log(containerDiv);

const allLis = document.querySelectorAll("li");

//change "Pete" to "Richard"
allLis.forEach(li => {
    if (li.textContent === "Pete") {
        li.textContent = "Richard";
    }
});

// remove the second <li> from the second <ul>
const secondUl = document.querySelectorAll("ul.list")[1];
const secondLiSecondUl = secondUl.querySelectorAll("li")[1];
secondUl.removeChild(secondLiSecondUl);

// change the first <li> of each <ul> to your name
const allUls = document.querySelectorAll("ul.list");
const myName = "maryama";  
allUls.forEach(ul => {
    const firstLi = ul.querySelector("li");
    if (firstLi) {
        firstLi.textContent = myName;
    }
});

// add class 'student_list' to all <ul>s
allUls.forEach(ul => {
    ul.classList.add("student_list");
});

// add classes 'university' and 'attendance' to the first <ul>
allUls[0].classList.add("university", "attendance");

// add light blue background color and padding to the div
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

// hide the <li> that contains "Dan"
allLis.forEach(li => {
    if (li.textContent === "Dan") {
        li.style.display = "none";
    }
});

// add border to the <li> that contains "Richard"
allLis.forEach(li => {
    if (li.textContent === "Richard") {
        li.style.border = "2px solid black";
        li.style.padding = "5px";
    }
});

// vhange font size of the entire body
document.body.style.fontSize = "18px";

// bonus
if (containerDiv.style.backgroundColor === "lightblue") {
    const names = [];
    allUls.forEach(ul => {
        const firstLi = ul.querySelector("li");
        if (firstLi && firstLi.style.display !== "none") {
            names.push(firstLi.textContent);
        }
    });
    alert("Hello " + names.join(" and "));
}
