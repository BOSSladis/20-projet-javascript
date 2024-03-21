// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`

const API_URL = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=";
const WIKIPEDIA_URL = "https://en.wikipedia.org/?curid=";
const inputResearch = document.querySelector("#research");
const outputContent = document.querySelector("#content");

function callWikipediaAPI(){
    const ul = document.createElement('ul');
    ul.classList.add("results")
    const input = inputResearch.value.trim();
    if(input.length == 0){
        outputContent.replaceChild(ul, outputContent.querySelector(".results"));
        return;
    }
    console.log("Continue wikipedia function");
    const research = encodeURIComponent(input);
    fetch(API_URL + research)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const searchResults = data.query.search;

        const ul = document.createElement('ul');
        ul.classList.add("results")
        

        searchResults.forEach(result => {
            // Create a list item for each result
            const li = document.createElement('li');
            li.classList.add("result");

            const currentTitle = result.title;
            const currentURL = WIKIPEDIA_URL + result.pageid;
            const currentDescription = result.snippet;

            const aTitle = document.createElement('a');
            aTitle.classList.add("result__title");
            aTitle.setAttribute('href', currentURL);
            aTitle.setAttribute('target', '_blank');
            aTitle.setAttribute('rel', `link to ${currentTitle} wikipedia page.`);
            aTitle.setAttribute('title', `${currentTitle}`);
            aTitle.textContent = currentTitle;

            const aURL = document.createElement('a');
            aURL.classList.add("result__url");
            aURL.setAttribute('href', currentURL);
            aURL.setAttribute('target', '_blank');
            aURL.setAttribute('rel', `link to ${currentTitle} wikipedia page.`);
            aURL.setAttribute('title', `${currentTitle}`);
            aURL.textContent = currentURL;

            const pDescription = document.createElement('p');
            pDescription.classList.add("result__description");
            pDescription.innerHTML = currentDescription;

            li.appendChild(aTitle);
            li.appendChild(aURL);
            li.appendChild(pDescription);
            ul.appendChild(li);
          });
          
          outputContent.replaceChild(ul, outputContent.querySelector(".results"));
    })
    .catch(error => {
        console.log(`Error : ${error}`);
    });
}