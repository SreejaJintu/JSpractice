function hello(){
    var i=0
    if(i==0){
        var hey=20
        let hoy=10
        console.log(hoy) 

    }
    console.log(hey)
    //console.log(hoy)--- let variable wont be accesible outside the block
}
hello()
//***const as array- olny add items through push 
const array1=[1,2,3,4]
array1.push('sree',6)
    console.log(array1)
//***can pass default parameter in function
function adding (num1=10,num2){
    console.log(num1+num2)
}
adding(undefined,31) // pass num1 value as undefined , then resuit will be 41
//**call back usage in below example,*/

//Create an Array
const array2=[1,-2,3,-4,5,-5]

//Keep only positive numbers
function avoidNegatives(arr,callbackd){
    var posArray
    for(let i=0;i<=5;i++){
     if(arr[i]>0)
        {
            posArray.adding(arr[i])
        }
    }
    callbackd(posArray)

}
//callbacck function defnision
 function displayPosArray(disArray){console.log(disArray)

}
// Call avoidNeagtives with a callback

avoidNegatives(array2,displayPosArray)