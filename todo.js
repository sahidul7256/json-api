function loadpost(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=>response.json())
    .then(data=>displayUser(data));
}
loadpost()

function displayUser(users){
    const userDiv= document.getElementById('users')
    for (const user of users){
        const div= document.createElement("div")
        div.classList.add("user")
        div.innerHTML=`<h4>userId: ${user?.userId} </h4>
                        <p>id: ${user?.id} </p>
                        <h4>title: ${user?.title} </h4>
                        <p>completed: ${user?.completed} </p>`
        
         userDiv.appendChild(div)
    }
    
}

document.getElementById('comments').addEventListener('click', () => {
  window.open('comment.html', '_blank');
});


buyButton.addEventListener('click', () => {
      window.open('comment.html', '_blank');
    });