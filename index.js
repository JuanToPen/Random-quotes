const quote = document.getElementById("quote")
const author = document.getElementById("author")
const button = document.getElementById("button")
let regex = /[,]/g
let rand = Math.floor(Math.random() * 16)

async function fetchText(){
    try {
        const response = await fetch('https://type.fit/api/quotes')
        const data = await response.json()
        return data[rand].text
    } catch (error) {
        console.error(error);
    }
}

async function fetchAuthor(){
    try {
        const response = await fetch('https://type.fit/api/quotes')
        const data = await response.json()
        if(rand === 15){
            return "Dale Carnegie"
        }
        let index = data[rand].author.search(regex)
        if(index === -1){
            return data[rand].author
        }
        return data[rand].author.slice(0,index)
    } catch (error) {
        console.error(error);
    }
}

fetchText().then(data =>{
    quote.innerText = `"${data}"`
})

fetchAuthor().then(data =>{
    author.innerText = `- ${data}`
})

button.addEventListener("click",()=>{
    let rand2 = Math.floor(Math.random() * 16)
    async function fetchText2(){
        try {
            const response = await fetch('https://type.fit/api/quotes')
            const data = await response.json()
            return data[rand2].text
        } catch (error) {
            console.error(error);
        }
    }
    
    async function fetchAuthor2(){
        try {
            const response = await fetch('https://type.fit/api/quotes')
            const data = await response.json()
            if(rand2 === 15){
                return "Dale Carnegie"
            }
            let index = data[rand2].author.search(regex)
            if(index === -1){
                return data[rand2].author
            }
            return data[rand2].author.slice(0,index)
        } catch (error) {
            console.error(error);
        }
    }
    fetchText2().then(data =>{
        quote.innerText = `"${data}"`
    })
    fetchAuthor2().then(data =>{
        author.innerText = `- ${data}`
    })
})