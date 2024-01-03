/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/

function panic(string){
    const arrayString = string.split('')
    
    const editedArray = arrayString.map(letter => {
        if(letter === " "){
            return "😱"
        }
        else{
            return letter
        }
    })
    
    const finalString = editedArray.join('').toUpperCase() + '!';
    return finalString
    // Toevoegen aan elkaar in caps + uitroepteken
}



// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))

