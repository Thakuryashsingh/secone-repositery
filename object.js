let arr1 = ["yash"];
let arr2 = ["singh"];
let fullArr = arr1.concat(arr2);
// console.log(fullArr);

// console.log([...arr1,...arr2]);

const anothet_array = [1,2,3,[4,5],6,[7,8,[9,10,[11,15,18,40]]]]

const real_array = anothet_array.flat(2);

// console.log(real_array);



const tinderUser = {} 

tinderUser.id = "123@.com"
tinderUser.name = "sammay"
tinderUser.isloggedIn = false


// console.log(tinderUser);
// console.log(tinderUser.isloggedIn);

const regularUser = {
    username : "thakur",
    fullname : {
        userfullname:{
            firstname:"yash",
            lastname:"singh"
        }
    }
}
// console.log(regularUser.fullname);


const obj1 ={1:"a",2:"b"};
const obj2 ={3:"a",4:"b"};
const obj4 ={5:"a",6:"b"};
const obj3 = {...obj1,...obj2,...obj4};
console.log(obj3);



console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isloggedIn"));
