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


// async function getquote(){

//     try{
      
//             let res = await fetch(``);
            
//             let data = await res.json();
//             console.log(data);
//         // return data[0];

//     } catch(e){
//         console.log("error - ",e);
//     }
 
// }

//++++++++++++++++++++++++++++++main code+++++++++++++++++++++++++++++++++++++==
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






// async function getQuote() {
//   try {
//     const response = await fetch('https://api.quotable.io/random', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
    
//   } catch (error) {
//     console.error('Error fetching quote:', error);
//   }
// }

// function getQuote(){
//   fetch("https://api.quotable.io/random")
//   .then(res => console.log(res))
// }


// .then(response => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
// })
// .then(result => {
//     console.log(result);
// })
// .catch(error => {
//     console.error('Error: ', error.message);
// });






















































// // const options = {method: 'GET'};


// // async function getquota()
// // {
// //     try {
// //         const response = await fetch(url, options);
// //         const data = await response.json();
// //         console.log(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// // }

// fetch("https://zenquotes.io/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });


