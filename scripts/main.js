heading = document.getElementById('kellys')
heading.textContent = "Kelly okoye"
console.log(heading)

const studentName = '1'
const book = 'cup'
const sum = studentName + book
console.log(sum)

//arrays
let studentNames = ["book", "cup", "okoye", "eye"]

/*
For loops in js
*/
for (let index = 0; index < studentNames.length; index++) {
    console.log(studentNames[index])
}
/*
conditionals
*/
let person1 = 1
let person2 = "1"

if (person1 === person2){
    console.log("they are the same")
}else
{
    console.log("they are not the same")
}

/*
functions
*/

function multiply()
{
    num1 = 5;
    num2 = 10;

    const sum = num1 + num2;

    console.log(sum)
}


multiply()


//event handlers
mainBtn = document.getElementById("btn")
btn = document.querySelector("#btn").addEventListener("click",function(){
    // console.log(btn)
    alert("GOD IS THE GREATEST")
})

