input = $("#Jokes");
response = $(".output");
btn = $(".btn");


btn.click(getJokes);
function getJokes(e) {
    const number = document.querySelector("input[type='number']").value
    e.preventDefault()
    // Open new XHR Request Object
    xhr = new XMLHttpRequest();
    // OPEN
    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true)
    // ONLOAD
    xhr.onload = function() {
        if ( xhr.status === 200) {
            const jokes = JSON.parse(xhr.responseText)
            // console.log(jokes.value[0].joke)
            let output = "";
            console.log(jokes)
            if (jokes.type === "success") {
            jokes.value.forEach(function(data){
                output += `<li>${data.joke}</li>`
            })
        } else {
            output += `<li>Something went wrong</li>`
        }
        response.html(output)
        };
    };
    // SEND
    xhr.send();
}