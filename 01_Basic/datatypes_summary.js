let myfunct = function(){
    console.log("Hello")
}
let myObj = {
    name:"Pratham",
    age:22,
}
//myfunct()



//********************************Memory In JavaScript**************************

// Stack(Primitive), Heap(Non-Primitive)

// In stack the data is copied it is the example for that

let name = "pratham"
let surname = name
console.log(surname)
surname = "nigam"
console.log(surname)


//In heap

let userOne = {
    email:"pratham@gmail",
    upi:"ybl"
}
let userTwo = userOne
userTwo.email = "s@"

console.log(userOne.email)
console.log(userTwo.email)