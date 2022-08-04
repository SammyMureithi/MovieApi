let html = ""
const searchQuery=document.getElementById("search")
const myHtml = document.getElementById( "movieList" )
searchQuery.addEventListener("keyup", function ( event ) {
    let userInput = event.target.value.trim()
    console.log(userInput)
    fetch(`https://www.omdbapi.com/?s=${userInput}&apikey=629f1f52`)
    .then( res => {
        if ( res.ok ) {
            console.log("Fetch done Succesfuly")
        }
        else {
            console.log("Failed to fetch")
        }
        return res
    })
        .then(res => res.json())
    .then( data => {
       let mySearch=data.Search
        for ( let element of mySearch) {
            html += `
            <div class="movieContainer">
            <div class="poster">
                <img src="${element.Poster}" alt="img"/>
            </div>
            <div class="description">
                <div class="movieTittle">
                    <h1>Title:${element.Title}e</h1>
                </div>
                <div class="movieType">
                    <h2>Type:${element.Type}</h2>
                </div>
                <div class="movieYear">
                    <h2>Year:${element.Year}</h2>
                </div>
            </div>
        </div>
            `
        }
        myHtml.innerHTML=html
            })
          
})


