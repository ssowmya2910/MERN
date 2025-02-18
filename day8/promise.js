// // two keywords in promise--> resolve,reject

// function promiseFun(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            if(value) resolve("promise is resolved")
//             else reject("This project is rejected")
//         },1000)
//     })
// }
// // console.log(promiseFun())

// promiseFun(true).then((res)=>{
//     console.log(res)
// })
// .catch((res)=>{
//    console.log(res)
// })
//Location Finder
//1.Promise (LocFound,LocNotFound)
//2.Chennai,2000
// function locationFinder(loc,time){
//     var loc=new Promise(locFound,locNotFound)  {
//         setTimeout(()=>{
//             if(isLocationFound(loc,time)){
//                 locFound(loc)
//             }
//             else{
//                 locNotFound(loc,"not Found")
//             }
//         },time)} }

    
//     isLocationFound=(loc,t)=>{
//         location="Chennai";
//         t =1000;
//         if(loc===location && t<=time){
//             return true;
//         }
//         else{
//             return false;
//         }

//     };
//     locationFinder("Chennai",2000);
// Location Finder
// 1. Promise(LocFound,LocNotFound)
// 2. Chennai,2000

function locationFinder(loc,time){
    var location=new Promise((locFound,locNotFound)=>{
          setTimeout(() => {
            if(isLocationFound(loc,time))
                locFound("Chennai")
            else
                locNotFound(loc+"Not Found")
          }, time);
    }) 
    location.then((found)=>{
        console.log(found);
    }).catch((Notfound)=>{
        console.log(Notfound);
    })
}
isLocationFound=((loc,time)=>{
     location="Chennai"
     t=3000
     if(loc===location && t<=time) return true
     else return false
})
locationFinder("Chennai",2000)