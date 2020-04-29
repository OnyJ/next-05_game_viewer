const URL_MOST_WANTED_GAMES =
  "https://api.rawg.io/api/games?dates=2020-01-01,2021-10-10&ordering=-added";
// const URL = "https://api.rawg.io/api/games";

const Home = (argument = "") => {
  console.log("Page Home", argument);
  // <h1 style="color: red;">Le menu stp</h1>;

  const preparePage = () => {
    // let cleanedArgument = argument.replace(/\s+/g, "-");
    let cleanedArgument = "?dates=2020-01-01,2021-10-10&ordering=-added";
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      // if (argument) {
      // finalURL = URL + "?search=" + argument;
      // }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
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
    fetchList(URL_MOST_WANTED_GAMES, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="game-list">
        <div class="articles">Hey, this page is a GameList template, about : ${argument}</div>
      </section>
    `;
    preparePage();
  };

  render();
};

export default Home;
