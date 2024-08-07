let inp = document.querySelector("#forquotes2 input");
let sbtn = document.querySelector("#forquotes2 #sbtn");
let search = document.querySelector("#squo");
let fqu = document.querySelector("#forquotes2");


const apiKey = 'HDPqF2YsBlWWX6Vr+sopiw==MwJBG7wxKXQCgVuf';

sbtn.addEventListener("click",async () => {

    // console.log("hello");
    
    let datamain = await searchQuotebyAuthor(inp.value);
    console.log(datamain);
    //   console.log(datamain.results[0].content);
      for(let i=0;i<datamain.results.length;i++)
      {
      search.innerHTML += i+1 +'.' + ' " ' + datamain.results[i].content + ' "' + "<br><br>";
      }

    fqu.style.backgroundImage  = "linear-gradient(to right,#74c69d,#52b788,#40916c,#2d6a4f,#1b4332)"; 

  })

  
  async function searchQuotebyAuthor(author) {
    try {
      const response = await fetch(`https://api.quotable.io/quotes?author=${author}`, {
        method: 'GET',
        headers: {
          //  'X-Api-Key' : apiKey,
            'Content-Type': 'application/json'
        }
    });
  
    const data = await response.json();
    // console.log(data.results[0].content);
    return data;
    // console.log(data.author);
    // return data;
    
    } catch (error) {
      console.error(error);
    }
  }