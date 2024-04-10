let div=document.querySelector('.div');

const apiKey=`sn5SiZ85xMWAYLdOZ3M9kp4Cqfn8raPA`;
const endpoint = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=50`;

async function fetchData() {
const response=await fetch(endpoint);
const data=await response.json();
console.log(data);
data.data.forEach(el=>{
    let img= document.createElement('img');
    img.src=el.images.original.url;
    div.appendChild(img);
})
}

fetchData();