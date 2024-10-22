const calculator =(value)=>{
    try{
        let newValue = eval(value)
        return newValue
    } catch(error){
        console.error("Invalid input")
    }

return newValue

}
console.log(calculator('6 + 3 * 4 - 5'))
