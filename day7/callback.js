function formSub(message,cbFun){
    
    if(cbFun())
    console.log(message)
    else
    console.log("form sub unsuccessful")
}
function formValidation(){
    
    console.log("validation success!");
}
formSub("submitted successfully",formValidation)