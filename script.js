//  function getUserId(username){
//   if(username === undefined){
//      console.log("please enter user name");
//      return ;
//      }
//   }
//   return `${username} just looged in`;
//  };
//  let result = getUserId();
//  console.log(result);





// let obj = {
//   username : "Yash Singh",
//   mark : 95
// }

// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.mark}`);
    
// }
// handleObject(obj);



// let obj = {
//   username : "Yash",
//   price : 999 ,
// welcomeMessage : function(){
//   console.log(`${this.username} , welcome to website`);
//   // console.log(this);
  
//   }
// }

// 





// const arr = [2,4,6,8];
// console.log("Here is your arr : ",arr);

// arr.push(10);
// console.log("Here is your updated arr : ",arr);

const mySym =  Symbol("key1")
let jsUser ={
  "full name" : "Yash Singh",
  name : "Yash",
  [mySym]: "ker1",
  age : 18 ,
  location : "jaunpur" ,
  email :"yash@1234gmail.com",
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser.mySym);

jsUser.email = "yash!google.com";
// Object.freeze(jsUser);

jsUser.email = "yash!chatgpt.com";
// console.log(jsUser["email"]);

jsUser.greeting = function () {
   console.log("hello function there");
   
}
jsUser.greeting();









