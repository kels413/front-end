// // let heading = document.getElementById('kellys')
// // heading.textContent = "Kelly okoye"
// // console.log(heading)

// // const studentName = '1'

// // //arrays
// // let studentNames = ["book", "cup", "okoye", "eye"]

// // /*
// // For loops in js
// // */
// // for (let index = 0; index < studentNames.length; index++) {
// //     console.log(studentNames[index])
// // }
// // /*
// // conditionals
// // */
// // let person1 = 1
// // let person2 = "1"

// // if (person1 === person2){
// //     console.log("they are the same")
// // }else
// // {
// //     console.log("they are not the same")
// // }

// // /*
// // functions
// // */

// // function multiply()
// // {
// //     num1 = 5;
// //     num2 = 10;

// //     const sum = num1 + num2;

// //     console.log(sum)
// // }


// // multiply()


// //event handlers
// // mainBtn = document.getElementById("btn")
// // document.querySelector("#btn").addEventListener("click",function(){
// //     // console.log(btn)
// //     alert("GOD IS THE GREATESTg")
// // })

// // using arrow functions to listen to event.

// // document.querySelector("#btn").addEventListener("click", () =>{
// //     alert("praise the LORD oh my SOUL")
// // })


// // let firstImg = document.querySelector(".first_img")
// // let secondImg = document.querySelector(".second_img")


// // // images to dynamically change
// // img = document.querySelectorAll(".image_container img")


// // let firstImgSrc = firstImg.getAttribute('src');
// // let tmp = firstImg;
// // let secondImgSrc = secondImg.getAttribute('src');

// // firstImg.addEventListener('click', () => 
// // {
// //     firstImg.setAttribute('src', secondImgSrc)
    
// //     secondImg.setAttribute('src',firstImgSrc)
// // })



// // secondImg.addEventListener('click', () => 
// // {

// //     if (firstImg.getAttribute('src') === firstImg.getAttribute('src'))
// //     {
// //         secondImg.setAttribute('src', firstImgSrc)
// //     }else{
// //       firstImg.setAttribute('src', secondImgSrc)
// //     }

    
// // })


//     // if (firstImgSrc === secondImgSrc)
//     // {
//     //     console.log("it has changed")
//     // }else{
//     //     console.log("it has not changed")
//     // }

//     // let firstImgSwap = firstImg.setAttribute('src', firstImgSrc)
//     // let second_img = secondImg.setAttribute('src',secondImgSrc)
// // })


// // for (let i = 0; i < img.length; i++)
// // {


   

// //     // if (img[i].classList == 'first_img')
// //     // {
// //     //   firstImgSrc = img[i].getAttribute('src')
// //     //   console.log(firstImgSrc)
// //     // }
// //     // else{
// //     //     secondImgSrc = img[i].getAttribute('src')
// //     //     console.log("this is the second cat",secondImgSrc)
// //     // }


// //     // img[i].addEventListener('click', () => {
    
        
// //     // })
    

// //     // let imageList = []

// //     // console.log(img)

// //     // let imageAttri = []

// //     // let imageSrc = img[i].getAttribute('src')
// //     // let firstImage = imageSrc[i]
// //     // // imageAttri.push(imageSrc[i])

// //     // console.log(firstImage)
// //     // // console.log(imageAttri)
// //     // console.log(imageSrc)
// //     // let imgSrc = img[i].getAttribute('src')
// //     // let imgSrc2 = img[1].getAttribute('src')
// //     // console.log("this is cat1",imgSrc)
// //     // console.log("this is the cat",imgSrc2)

// //     //   img[0].addEventListener("click", () => {
// //     //     let imgSrc = img[i].getAttribute('src')
// //     //     console.log(imgSrc)
       
// //     //   })

// //     //   img[1].addEventListener("click", () => {
// //     // //     let imgSrc = img[i].getAttribute('src')
// //     //     console.log(imgSrc)
       
// //     //   })



    
// // }




// // // addeventlistner

// // // imgContainer.addEventListener('click', (e) =>{

// // //    if (e.target.nodeName === 'IMG')
// // //    {
// //         // get the image attribute
// //     //    imageSrc = e.target.getAttribute('src')
// //     //    console.log(imageSrc)

// //         // for(i < 0; i < imgContainer.length; i++)
// //         // {
// //         //     console.log(imgContainer[i])
// //         // }

// //         // for (let index = 0; index < array.length; index++) {
// //         //     const element = array[index];
            
// //         // }

// //        // swap their attribute.
// //     //    if (imageSrc === 'images/cat1.jpeg')
// //     //    {
// //     //         // set the attibute to change the image
// //     //         imageSrc = e.target.setAttribute('src', 'images/cat2.jpeg')
// //     //    }else
// //     //    {
// //     //         imageSrc = e.target.setAttribute('src', 'images/cat1.jpeg')
// //     //    }


// const person = {
//     names:{
//         firsName: 'Mista',
//         lastName: 'Kelly'
//     },
//     age: 50,
//     class: 'jss2',
//     gender: 'male',

//     characteristics: {
//         height: '1.8cm',
//         toxic: 'A lil bit',
//         womanizer: 'average',
//         married: 'yes',
//         childrenNo: '2',
//         childrenNames: ['Blessing', 'kelly'],
//         childrenInfo: {
//             firstChild:{
//                 firstname: 'Blessing',
//                 lastName: 'okoye',
//                 age: 20,
//                 gender: 'girl',
//                 height: '1.9cm',
//                 favorites: ['Football', 'Anime', 'Reading']
//             },
//             secondChild:{
//                 firstname: 'Kelly',
//                 lastName: 'okoye',
//                 age: 20,
//                 gender: 'boy',
//                 height: '2.9cm',
//             },
//         },
//     },
// }

// // for (let [k, v] of Object.entries(person)){
// //     console.log(k,v)
// // }
// // console.log(person)

// for (let [k, v] of Object.entries(person.characteristics.childrenInfo.firstChild)){  
//    console.log(k + ':' + v)
// }

const person = {
    name: ['kelly', 'okoye'],
    age: 20,
    gender: 'male',
}

function personName(name){
    return person[name]
}
let person1 = personName("age")
console.log(person1)

person['leg'] = 'okoh'

console.log(person)