const body = document.querySelector('body')


async function fetcher() {
try {

    let data = await fetch('http://localhost:3000/vaibhav')
    if(!data.ok){
        return 'network issue'
    }
    let response = data.text()
    body.innerHTML(response)


} catch (error) {
    console.log(error);
    
}

    
}


fetcher()
