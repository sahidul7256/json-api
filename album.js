function loadpost(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response=>response.json())
    .then(data=>displayalbum(data));
}
loadpost()

function displayalbum(albums){
    const albumDiv= document.getElementById('albums')
    for (const album of albums){
        const div= document.createElement("div")
        div.classList.add("album")
        div.innerHTML=`<h3>userId: ${album?.userId} </h3>
                        <h4>id: ${album?.id} </h4>
                        <p>title: ${album?.title} </p>`
        
         albumDiv.appendChild(div)
    }
    
}

document.getElementById('photos').addEventListener('click', () => {
  window.open('photo.html', '_blank');
});


buyButton.addEventListener('click', () => {
      window.open('photo.html', '_blank');
    });