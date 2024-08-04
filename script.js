// // console.log("bye world")


// const glass = "paani"
// // const age = 22 
// // const isNepali = true


// const gamalaa = "fulll" 

// const friend1 = "Pranjal"
// const friend2 = "Aashish"
// const friend3 = "Anup"


// const friends = ["Pranjal","Aaashish","Anup"]

// const shoe1 = "Addidas"
// const shoe2 = "Puma"
// const shoe3 = "Umbro"








// const shoes = ['Addidas','Puma','Umbro','Nike','Zoom']

// // console.log(shoes[0])
// // console.log(shoes[3])

// // properties and methods 
// // console.log(shoes.length)


// // shoes.push('fasttrack')
// // shoes.pop()

// // shoes.unshift('fasttrack')
// // shoes.shift()
// // shoes[2] = "fasttrack"
// // console.log(shoes)
// shoes.splice(2,2,'fasttrack')
// console.log(shoes)

// // splice












// const name = "Manish Basnet" 
// const age = 22 
// const address = "Itahari"
// const isNepali = true 

// const me = {
//     name : "Manish Basnet", 
//     age : 22, 
//     address : "Itahari", 
//     isNepali : true 
// }







// slice --> used to create a copy of portion of array. doesn't modify original array 
const numbers = [1,2,3,4,5,6]
// const newNumbers = numbers.slice(0,5)
// console.log(newNumbers)
// console.log(numbers)

// splice 
 numbers.splice(2,1,100,101)
console.log(numbers)


// // split 
// const text = "I love javascript"
// const newArray = text.split(' ')
// console.log(newArray)


// const languages = ['php','js','c']
// // ['php','html','c'] using splice 
// languages.splice(1,1,'html')
// console.log(languages)

// const characters = ['m','a','n','i','s','h']
// // output --> [13,1,14,9,19,8] using splice 
// characters.splice(0,6,13,1,14,19,8)
// console.log(characters)



const me = {
    name : "Manish Basnet", 
    age : 22, 
    address : "Itahari", 
    isNepali : true 
}
// Object.freeze(me)
// me.college = "INC"
console.log(Object.keys(me))
console.log(Object.values(me))


// casing 
// camelCase 

/*
firstname --> camelCase -- > firstName
ilovejavascript --> camelCase -- > iLoveJavascript 
ihateprogramminginfortan --> camelCase --> iHateProgrammingInFortan

// snake_case 
firstname --> snake_case --> first_name
ilovejavascript --> snake_case --> i_love_javascript

// kebab-case 
firstname ---> kebab-case --> first-name 
ilovejavascript --> i-love-javascript

// PascalCase 
firstname --> PascalCase --> FirstName
ilovejavascript ---> ILoveJavascript 
ihateprogramminginfortan ---> IHateProgrammingInFortan

*/
