// // // // // // // console.log("bye world")


// // // // // // const glass = "paani"
// // // // // // // const age = 22 
// // // // // // // const isNepali = true


// // // // // // const gamalaa = "fulll" 

// // // // // // const friend1 = "Pranjal"
// // // // // // const friend2 = "Aashish"
// // // // // // const friend3 = "Anup"


// // // // // // const friends = ["Pranjal","Aaashish","Anup"]

// // // // // // const shoe1 = "Addidas"
// // // // // // const shoe2 = "Puma"
// // // // // // const shoe3 = "Umbro"








// // // // // // const shoes = ['Addidas','Puma','Umbro','Nike','Zoom']

// // // // // // // console.log(shoes[0])
// // // // // // // console.log(shoes[3])

// // // // // // // properties and methods 
// // // // // // // console.log(shoes.length)


// // // // // // // shoes.push('fasttrack')
// // // // // // // shoes.pop()

// // // // // // // shoes.unshift('fasttrack')
// // // // // // // shoes.shift()
// // // // // // // shoes[2] = "fasttrack"
// // // // // // // console.log(shoes)
// // // // // // shoes.splice(2,2,'fasttrack')
// // // // // // console.log(shoes)

// // // // // // // splice












// // // // // // const name = "Manish Basnet" 
// // // // // // const age = 22 
// // // // // // const address = "Itahari"
// // // // // // const isNepali = true 

// // // // // // const me = {
// // // // // //     name : "Manish Basnet", 
// // // // // //     age : 22, 
// // // // // //     address : "Itahari", 
// // // // // //     isNepali : true 
// // // // // // }







// // // // // // slice --> used to create a copy of portion of array. doesn't modify original array 
// // // // // const numbers = [1,2,3,4,5,6]
// // // // // // const newNumbers = numbers.slice(0,5)
// // // // // // console.log(newNumbers)
// // // // // // console.log(numbers)

// // // // // // splice 
// // // // //  numbers.splice(2,1,100,101)
// // // // // console.log(numbers)


// // // // // // // split 
// // // // // // const text = "I love javascript"
// // // // // // const newArray = text.split(' ')
// // // // // // console.log(newArray)


// // // // // // const languages = ['php','js','c']
// // // // // // // ['php','html','c'] using splice 
// // // // // // languages.splice(1,1,'html')
// // // // // // console.log(languages)

// // // // // // const characters = ['m','a','n','i','s','h']
// // // // // // // output --> [13,1,14,9,19,8] using splice 
// // // // // // characters.splice(0,6,13,1,14,19,8)
// // // // // // console.log(characters)



// // // // // const me = {
// // // // //     name : "Manish Basnet", 
// // // // //     age : 22, 
// // // // //     address : "Itahari", 
// // // // //     isNepali : true 
// // // // // }
// // // // // // Object.freeze(me)
// // // // // // me.college = "INC"
// // // // // console.log(Object.keys(me))
// // // // // console.log(Object.values(me))


// // // // // // casing 
// // // // // // camelCase 

// // // // // /*
// // // // // firstname --> camelCase -- > firstName
// // // // // ilovejavascript --> camelCase -- > iLoveJavascript 
// // // // // ihateprogramminginfortan --> camelCase --> iHateProgrammingInFortan

// // // // // // snake_case 
// // // // // firstname --> snake_case --> first_name
// // // // // ilovejavascript --> snake_case --> i_love_javascript

// // // // // // kebab-case 
// // // // // firstname ---> kebab-case --> first-name 
// // // // // ilovejavascript --> i-love-javascript

// // // // // // PascalCase 
// // // // // firstname --> PascalCase --> FirstName
// // // // // ilovejavascript ---> ILoveJavascript 
// // // // // ihateprogramminginfortan ---> IHateProgrammingInFortan

// // // // // */




// // // // // conditional statements 

// // // // // const isRaining = true 

// // // // // // if(isRaining){
// // // // // //     console.log("Umbrella boka")
// // // // // // }else{
// // // // // //     console.log("Umbrella na boka")
// // // // // // }

// // // // // //ternary operator 
// // // // // // isRaining ? console.log("Umbrella boka") : console.log("Umbrella na boka")

// // // // // // short circuit  
// // // // // // isRaining && console.log("Umbrella boka")
// // // // // isRaining || console.log("Umbrella na boka")


// // // // // const temperature = 10 
// // // // // if(temperature > 30){
// // // // //     console.log("Dherae garmi vayo")
// // // // // }else if(temperature > 25){
// // // // //     console.log("Thik thak normal xa weather")
// // // // // }else{
// // // // //     console.log("bahut jado xa bahira")
// // // // // }

// // // // // nullish coelescing operator 
// // // // // const age = 22
// // // // // const result = age ?? "No age"
// // // // // console.log(result)



// // // // const numbers = [1,2,3,4,5,6]
// // // // // console.log(numbers.length)

// // // // // for(var i=0;i<numbers.length;i++){
// // // // //     console.log(numbers[i])
// // // // // }

// // // // // for(let number of numbers){
// // // // //     console.log(number)
// // // // // }

// // // // const names = ['Manish','Pranjal','Anup']
// // // // // console.log(names[2])

// // // // for(var i = 3 ; i < names.length; i++){
// // // //     console.log(names[2])
// // // // }
// // // // // for(let name of names){
// // // // //     console.log(name)
// // // // // }


// // // // console.log(1+2)
// // // // console.log(1+3)
// // // // console.log(1+4)
// // // // console.log(1+5)

// // // // regular function or normal function 
// // // // parameter 
// // // // function add(a,b){
// // // //     console.log(a+b)
// // // // }

// // // // add(1,2)
// // // // add(5,6)


// // // // // named regular function 
// // // // const add = function(a,b){
// // // //     console.log(a+b)
// // // // }

// // // // // arrow function
// // // // const add = (a,b)=>{
// // // //    console.log(a+b) 
// // // // }

// // // //anonymous function
// // // // anonymous arrow function
// // // // (()=>{
// // // //     console.log(1+2)
// // // // })()


// // // // higher order function 
// // // // forEach
// // // // map 
// // // // reduce 
// // // // filter 


// // // const numbers = [1,2,3,4,5] 

// // // // higher order function vaneko testo function jaslai argument ma hamile function dinu parxa 
// // // // higher order function ma gako function lai chai call back function 


// // // numbers.forEach(function(number){
// // //     console.log(number)
// // // })

// const code = [
//     {
//         _id: "66b3711a18d90581711ba314",
//         text: "test1",
//         userId: "f552665",
//         title: "test1",
//         ipAddress: "188.253.102.11",
//         createdAt: "2024-08-07T13:05:30.346Z",
//         updatedAt: "2024-08-07T13:05:30.346Z",
//         __v: 0
//     },
//     {
//         _id: "66b3712218d90581711ba31a",
//         text: "test2",
//         userId: "f552665",
//         title: "test2",
//         ipAddress: "188.253.102.11",
//         createdAt: "2024-08-07T13:05:38.079Z",
//         updatedAt: "2024-08-07T13:05:38.079Z",
//         __v: 0
//     }
// ]

// // // // code.forEach(function(hello){
// // // //     console.log(hello.userId)
// // // //     console.log(hello.ipAddress)
// // // // })



// // // const people = [
// // //     {
// // //         firstName : "Manish", 
// // //         lastName : "Basnet"
// // //     },
// // //     {
// // //         firstName : "Reeya", 
// // //         lastName : "Basnet"
// // //     }
// // // ]


// // // const data = people.map(function(person){
// // //     return {
// // //         ...person,
// // //         fullName : person.firstName + person.lastName
// // //     }
// // // })

// // // console.log(data)



// // // // output 
// // // // const newPeople = [
// // //     //     {
// // //         //         firstName : "Manish", 
// // //         //         lastName : "Basnet", 
// // //         //         fullName : "Manish Basnet"
// // //         //     },
// // //         //     {
// // //             //         firstName : "Reeya", 
// // //             //         lastName : "Basnet", 
// // //             //         fullName : "Reeya Basnet"
// // //             //     }
// // //             // ]
            
// // // const products = [
// // //     {
// // //         name : "Apple", 
// // //         price : 200, 
// // //         qty : 2
// // //     }, 
// // //     {
// // //         name : "Mango", 
// // //         price : 100, 
// // //         qty : 4
// // //     }, 
// // //     {
// // //         name : "PineApple", 
// // //         price : 300, 
// // //         qty : 1
// // //     }, 

// // // ]


// // // const newProductss = products.map(function(product){
// // //     return {
// // //         ...product, 
// // //         total : product.price * product.qty
// // //     }
// // // })
// // // console.log(newProductss)

// // // const nums = [1,2,3,4,5]



// // // const squareOutput = nums.map(function(num){
// // //     return num * num
// // // })
// // // console.log(squareOutput)
// // // // output using map
// // // const squares = [1,4,9,16,25]







// // // // output 
// // // const newProducts = [
// // //     {
// // //         name : "Apple", 
// // //         price : 200, 
// // //         qty : 2, 
// // //         total : 400
// // //     }, 
// // //     {
// // //         name : "Mango", 
// // //         price : 100, 
// // //         qty : 4, 
// // //         total : 400
// // //     }, 
// // //     {
// // //         name : "PineApple", 
// // //         price : 300, 
// // //         qty : 1, 
// // //         total : 300
// // //     }, 

// // // ]


            
            
            
            
// // // // numbers.map(function(){

// // // // })

// // // // numbers.filter(function(){

// // // // })

// // // // numbers.reduce(function(){
    
// // // // })


// // const numbers = [1,2,3,4,5,6,7,8,9,10]

// // // output 
// // const evenNumber = [2,4,6,8,10]

// // const evens  = numbers.filter(function(num){
// //     return num % 2 == 0
// // })
// // console.log(evens)

// // const books = [ 
// //     {
// //         title : 'Mahabir Pun', 
// //         year : 2023
// //     },
// //     {
// //         title : 'Think like a monk', 
// //         year : 2020
// //     },
// //     {
// //         title : 'Think and grow rich', 
// //         year : 2000
// //     },
// // ]

// // const newBooks = books.filter(function(book){
// //     return book.year > 2000 
// // })

// // console.log(newBooks)


// // const age = "22" 

// // if(age === 22){
// //     console.log("you are 22 years old")
// // }else{
// //     console.log("You are not 22 years old")
// // }

// // const files = ["app.js","a.c","index.html","style.css","script.js"]

// // const result = files.filter(function(file){
// //     return file.endsWith(".js")
// // })
// // console.log(result)

// // reduce 

// const numbers = [1,2,3,4,5]

// const sum = numbers.reduce(function(accumulator,number){
//     return accumulator + number
// },0)
// // accumulator = 0 
// // 0 + 1 = 1 
// // accumulator = 1 
// // 1 + 2 = 3 
// // accumulator = 3 
// // 3 + 3 = 6 
// // accumulator = 6 
// // 15
// // accumulator = 15 


// console.log(sum)


const myCart = [
    {
        product : "Apple", 
        price : 200, 
        qty : 20
    }, 
    {
        product : "Mango", 
        price : 100, 
        qty : 10
    }, 
    {
        product : "Pineapple", 
        price : 400, 
        qty : 12
    }, 

]
// total qty , total price  
const output = myCart.reduce(function(acc,item){
    acc.totalPrice += item.price * item.qty 
    acc.totalQty = acc.totalQty + item.qty
    return acc
},{totalPrice : 9800, totalQty:42})

console.log(output)
// acc.totalQty = 0 + 20 = 20 
// acc.totalQty = 20 + 10 = 30 
// acc.totalQty = 30 + 12 = 42

// acc.totalPrice = 0 + (20*200) = 0 + 4000 = 4000 
// acc.totalPrice = 4000 + (10*100) = 4000 + 1000 = 5000 
// acc.totalPrice = 5000 + (12*400) = 5000 + 4800 = 9800



// a +=1 
// a = a + 1 

// acc = {
//     totalPrice : 0,
//      totalQty:0
// }

const students = [
    {
        name : "Manish", 
        marks : 700, 
        status : "pass"
    },
    {
        name : "Anish", 
        marks : 900, 
        status : "fail"
    },
    {
        name : "Pranjal", 
        marks : 400, 
        status : "fail"
    },
    {
        name : "Aashish", 
        marks : 200, 
        status : "fail"
    }
]

const result = students.filter(function(student){
    return student.marks > 300 && student.name.endsWith("sh") && student.status == "pass"
})
console.log(result)