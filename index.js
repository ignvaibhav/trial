const body = document.querySelector('body')


async function fetcher() {
try {

    let data = await fetch('http://localhost:3000/vaibhav')
    if(!data.ok){
        body.innerHTML = 'Network issue: ' + response.statusText; 
        return;
    }
    let response = await data.text()
    body.innerHTML(response)


} catch (error) {
    console.log(error);
    body.innerHTML = 'An error occurred: ' + error.message;
    
}

    
}


fetcher()
