let cl = console.log;

const imageContainer = document.getElementById('imageContainer');

const count = 10;
const apiKey = 'xloMzbEgalV5ABNMRl1jtD340RkBCHrYcS2PzlzEfiw';
// const apiKey= 'X0D9jErI17R20j6aiPMT-4KJ3xZSKdLPzKjUf5kjsAc'
const baseUrl = 'https://api.unsplash.com/photos/random'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


const tempating = (arr) => {
    arr.forEach(ele => {
        let div = document.createElement('div');
        div.classList.add('gallary-img');

        let anchor = document.createElement('a');
        anchor.setAttribute('href', `${ele.urls.regular}`)

        let img = document.createElement('img');
        img.setAttribute('src', `${ele.urls.regular}`)

        anchor.appendChild(img);
        div.appendChild(anchor);
        imageContainer.appendChild(div)
    })
}


async function fetchData(){
    let response = await fetch(apiUrl);
    let data = await response.json();
    // imageArray.push(...data)
    cl(data);
    // data.forEach(element => {
    //     cl(ele.urls.regular)
    // });

    tempating(data)
}

window.addEventListener('scroll', () => {


    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight =  document.documentElement.scrollHeight;
    if(scrollTop +  clientHeight  >= scrollHeight - 300){
        fetchData()
    }
})


fetchData()