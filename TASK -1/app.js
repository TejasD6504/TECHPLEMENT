// const category = 'general';
let btn = document.querySelector("#ibtn");
let quo = document.querySelector(".quo");
let quoa = document.querySelector(".quo-author");
let forq = document.querySelector("#forquotes1");

const apiKey = 'HDPqF2YsBlWWX6Vr+sopiw==MwJBG7wxKXQCgVuf';



btn.addEventListener("click",async ()=>{
  console.log("hellofrom1");
  quo.innerText = "Updating....";
    let getqu =await getQuote();
    // console.log(getqu);
    quo.innerText = '" ' + getqu.content + ' "';
    quoa.innerText = getqu.author;
    forq.style.backgroundImage  = "linear-gradient(to right,#74c69d,#52b788,#40916c,#2d6a4f,#1b4332)"; 

})


async function getQuote() {
  
    try {
      const response = await fetch('https://api.quotable.io/random', {
        method: 'GET',
        headers: {
          //  'X-Api-Key' : apiKey,
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    // console.log(data);
    return data;
    
    } catch (error) {
      console.error(error);
    }
}

