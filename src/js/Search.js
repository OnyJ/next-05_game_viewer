const URL_SEARCH = "https://api.rawg.io/api/games?search=";

const Search = () => {
  const preparePage = (finalURL) => {
    let articles = "";

    fetch(`${finalURL}`)
      .then((response) => response.json())
      .then((response) => {
        console.log("ma response");
        console.log(response);
        response.results.forEach((article) => {
          articles += `
              <div class="cardGame">
                <h1>${article.name}</h1>
                <h2>${article.released}</h2>
                <a href = "#gamedetail/${article.id}">${article.id}</a>
              </div>
            `;
        });
        document.querySelector("#pageContent").innerHTML = articles;
      });
  };

  const searchGame = () => {
    let argument = document.getElementsByTagName("input")[0].value;
    let cleanedArgument = argument.replace(/\s+/g, "-");
    preparePage(URL_SEARCH + cleanedArgument);

    document.getElementsByTagName("input")[0].value = "";
  };

  document
    .getElementById("submit-search")
    .addEventListener("click", searchGame);
};

export default Search;
