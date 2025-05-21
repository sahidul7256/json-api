function loadpost(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response=>response.json())
    .then(data=>displaycomment(data));
}
loadpost()

function displaycomment(comments){
    const commentDiv= document.getElementById('comments')
    for (const comment of comments){
        const div= document.createElement("div")
        div.classList.add("comment")
        div.innerHTML=`<h3>postId: ${comment?.postId} </h3>
                        <h4>id: ${comment?.id} </h4>
                        <p>name: ${comment?.name} </p>
                        <span>email: ${comment?.email} </span>
                        <p>body: ${comment?.body} </p>`
        
         commentDiv.appendChild(div)
    }
    
}

document.getElementById('albums').addEventListener('click', () => {
  window.open('album.html', '_blank');
});


buyButton.addEventListener('click', () => {
      window.open('album.html', '_blank');
    });