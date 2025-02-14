/*//primary datatypes
a="abs"
b=true
c=100
console.log(a,b,c);
console.log(typeof(a),typeof(b),typeof(c));
a="abc";
b=21.21
console.log(a,b,c);
console.log(typeof(a),typeof(b),typeof(c));
//c=false (throws error message because changing const)
*/
//secondary datatype
//Array
// array=[1,6,"abc",true,[12,13]]
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array);

//Objects
//1st type object declaration
/*object1={
       "firstname":"SJIT",
      "lastname":"tech",
      "dept":["CSE","IT",'ADS',"ECE"],

}
console.log(object1);
console.log(object1.dept);
console.log(object1['dept']);
*/
//2nd type of declaration
// object2={}
// object2["firstname"]="Hello"
// object2["lastname"]='SJIT'
// object2["training"]=["Git","MERN","Deploy"]
// console.log(object2)

//3rd way of declaration
// object3=new Object()
// console.log(object3);// returns empty {}
// object3.training="MERN"
// object3.Dept=["CSE","IT","AD"]
// console.log(object3);

//Set
// set=new Set(["hello"])  //op  { 'hello' } -> it takes as one of parameter of set
// set=new Set("hello") //op { 'h', 'e', 'l', 'o' }-> takes the whole value as a set and prints it
// console.log(set);
// console.log(typeof(set));  //gives it as object


// console.log("Logical AND(&&) Operator")
// console.log(10 && true)//true
// console.log(5 && 10)//10
// console.log(false && 10) //false
// console.log(false && true) //false
// console.log(10 && true) //true

// console.log("Logical OR(||) Operator")
// console.log(10 || true) //10
// console.log(5 || 10) //5
// console.log(false || 10) // 10
// console.log(false || true) //true
// console.log(10 || true) //10
// a="5"
// b=5
// console.log(a==b); //true
// console.log(a === b); //false The triple equal operator is used to compare two values to see if they are equal and of the same type
//bitwise operator
a=70 
b=72
console.log(a&b);
a=70
b=32
console.log(a|b);
console.log(a^b);