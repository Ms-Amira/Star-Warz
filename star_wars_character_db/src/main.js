const searchTextBox = document.getElementById('search-input');

searchTextBox.addEventListener('input', function(e) {
  const input = e.target.value;
  console.log(input)
  searchForCharacter(input)
});


document.addEventListener("DOMContentLoaded", function () {
  fetch(`https://swapi.py4e.com/api/people`).then(resp => resp.json()).then(data => {
    console.log(data)
    displayCharacters(data.results);
    function displayCharacters(characters){
      const listOfCharacterNames = data.results.map(character => {
        return `<li>${character.name}</li>`
      }).join(" ");
      results.innerHTML = `<ul class="characters">${listOfCharacterNames}</ul>`;
    }
  }).catch(e => {
    console.log(e);
    results.innerText = "The characters you seek are not here";
  })
})

const results = document.getElementById('results');

async function searchForCharacter(query) {
const characterData = await fetch(`https://swapi.py4e.com/api/people?search=${query}`)
.then(resp => resp.json());

	console.log(characterData);
  displayCharacters(characterData.results);
};