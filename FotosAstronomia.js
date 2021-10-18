let date = prompt("Introduce el dia, mes y año de que quieres ver la foto:");

fetch("https://api.nasa.gov/planetary/apod?api_key=tRwGThMOewTQOfgvMjQyEi6Jauja0qiA8y6pl9Ni&date=" + date).then(function(result) {
    return result.json();
}).then(function(json) {
    console.log(json);
    document.querySelector("h1").innerHTML = json.title;
    document.querySelector("p").innerHTML = json.explanation;
    document.querySelector("img").src = json.url;
})