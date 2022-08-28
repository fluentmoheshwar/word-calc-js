function wordCount (){
    let count = 1
    words = document.querySelector("textarea").value
    for (x of words){
        if (x == " "){
            count++
        }
        
    }
    document.querySelector("p").innerHTML = "Words: " + count
}