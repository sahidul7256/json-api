function loadpost(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response=>response.json())
    .then(data=>displayphoto(data));
}
loadpost()

function displayphoto(photos){
    const photoDiv= document.getElementById('photos')
    for (const photo of photos){
        const div= document.createElement("div")
        div.classList.add("photo")
        div.innerHTML=`<h3>AlbumId: ${photo?.albumId} </h3>
                        <h4>Id: ${photo?.id} </h4>
                        <p>Title: ${photo?.title} </p>
                        <span>url: ${photo?.url} </span>
                        <p>ThumbnailUrl: ${photo?.thumbnailUrl} </p>`
        
         photoDiv.appendChild(div)
    }
    
}