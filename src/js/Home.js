const URL_MOST_WANTED_GAMES =
  "https://api.rawg.io/api/games?dates=2020-01-01,2021-10-10&ordering=-added";
const SEARCH_URL = "https://api.rawg.io/api/games?search=";

const Home = (argument = "") => {
  console.log("Page Home", argument);

  const doFetch = (finalURL) => {
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
        document.querySelector(".game-list .articles").innerHTML = articles;
      });
  };

  const preparePage = () => {
    // let cleanedArgument = argument.replace(/\s+/g, "-");
    // let cleanedArgument = "?dates=2020-01-01,2021-10-10&ordering=-added";
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      // if (argument != "") {
      // finalURL = URL + "?search=" + argument;
      // }
      doFetch(finalURL);
    };
    fetchList(URL_MOST_WANTED_GAMES);
  };

  const searchGame = () => {
    console.log("searching");
    let argument = document.getElementsByTagName("input")[0].value;
    let cleanedArgument = argument.replace(/\s+/g, "-");
    console.log(SEARCH_URL + cleanedArgument);
    doFetch(SEARCH_URL + cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="game-list">
        <div class="search-bar">
          <form>
            <input type="text" />
            <input type="submit" id="submit-search" />
          </form>
        </div>
        <div class="articles">Hey, this page is a GameList template, about : ${argument}</div>
      </section>
    `;
    preparePage();
    document
      .getElementById("submit-search")
      .addEventListener("click", searchGame);
  };

  render();
};

export default Home;
