// //ECMA Script Standards 6
// 1.variable declaration
// // 2.arrow function
//   res= () => {
//     console.log("arrow function")   
// }
// res();

// //3.scoping
// const a=10;
// console.log(a);
// {
//     const a=20;
//     console.log(a);
//     let b=30;
//     console.log(b);
//     let c=40;
//     console.log(c);
//     a=30;
//     console.log(a);
//     f=70;
//     f=20;
// }
// console.log(a);
// console.log(f);

// // 4.ternary operator
// a=2
// console.log((a%2)? "Odd":"Even");

// //5.spread operator
// stud1=["user1","user2","user3"];
// stud2=["user4","user5","user6"];
// stud3=["user7","user8","user9"];
// stud4=["user10","user11","user12"];
// studDB=[...stud1,...stud2,...stud3,...stud4];
// console.log(studDB);
 
// alumniDB=stud4;
// console.log(alumniDB)
// //destructuring operator

// var arr=[10,20,30,40]
// var[a,b,c,]=arr
// console.log(a,b,c)
// console.log(arr)

//8.Hoisting
//1) Variable Hoisting
// console.log(a); //throws ref Error
// //---------------------------//
//  console.log(a);  //throws undefined msg -> because of Hoisting
//   var a=10;
 //2) Functional Hoisting
//  fun();
// function fun(){
//     console.log("hii");
// }

//  fun();
//  fun= ()=>{
//     console.log("hii")  //Referecnce error because arrow function doesnt have  function keyword thud not considered as function hoisting
//  }

// 9.class and objects 

class ClassEg{
    classFun(){
         console.log("Hello function from class");
    }
}

console.log(new ClassEg().classFun())
