// async function asAw() {
//     var a=15
//     setTimeout(function(){
//         console.log("hello");},
//         1000)
//         console.log(await a)  
// }
// asAw()
// console.log()
// console.log(asAw())
// asAw().then((res)=>{
//     console.log(res);
// })
// asAw().catch((res)=>{
//     console.log(res);
// })
// console.log(asAw().catch())
// likePost=async()=>{
//     return new Promise((likePost)=>{
//         setTimeout(()=>{
//             likePost("Liked the Post")
//         },5000)
//     })
// }
// commentPost=async()=>{
//     return new Promise((commentPost)=>{
//         setTimeout(()=>{
//             commentPost("Commented the Post")
//         },5000)
//     })
// }
// SharePost=async()=>{
//     return new Promise((SharePost)=>{
//         setTimeout(()=>{
//             SharePost("Shared the Post")
//         },5000)
//     })
// }
// async function postCode(){
//     var post= new Promise((createPost)=>{
//         setTimeout(() => {
//             createPost("Post created Successfully")
//         }, 5000);
//     })
//     const[pos,like,comment,share]= await Promise.all([post,likePost(),commentPost(),SharePost()])
//     console.log( post)
//     console.log( likePost())
//     console.log( commentPost())
//     console.log( SharePost())

//  }
// postCode()

likeCode = async ()=>{
    return new Promise((likepost) => {
        setTimeout(() => {
            likepost("Liked the post successfully")
        }, 5000);
    })
}
commentCode = async ()=>{
    return new Promise((commentpost) => {
        setTimeout(() => {
            commentpost("Commented on the post")
        }, 5000);
    })
}
shareCode = async ()=>{
    return new Promise((sharepost) => {
        setTimeout(() => {
            sharepost("Shared the post successfully")
        }, 5000);
    })
}
async function postCode(){
    var post=new Promise((createpost)=>{
        setTimeout(() => {
            createpost("Post created successfully")
        }, 5000);
    })
    const [pos,like,comment,share]=await Promise.all([post,likeCode(),commentCode(),shareCode()])
    console.log(pos)
    console.log(like)
    console.log(comment)
    console.log(share)
}
postCode()