const catBox = document.querySelector('.cat-box');

fetchFacts=()=>{
const link = 'https://cat-fact.herokuapp.com/facts';
const cats = [];
const dev = document.querySelector('.cats-facts');

fetch(link)
.then((res)=> res.json())
.then((data)=> {
    cats.push(data);
    console.log(cats[0].all[10].text);
    const animal = cats[0].all;

    const ranNum = Math.floor(Math.random()*(animal.length-1))+0;

    const html = `<p class="info">${animal[ranNum].text}</p>`;
    dev.innerHTML = html;
});

};
setInterval(fetchFacts, 15000);
document.querySelector('.change').addEventListener('click', fetchFacts);


const proxyurl = "https://cors-anywhere.herokuapp.com/";
const imageLink = 'http://shibe.online/api/cats?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]';


fetch(proxyurl + imageLink)
.then((res)=> res.json())
.then((data)=> {
   const param = data[0];
   const catImage = document.createElement('img');
// const catImage = document.querySelector('.cat-image');
   catImage.src = `https://cdn.shibe.online/cats/${param}.jpg`;
   catBox.appendChild(catImage);
});



 

