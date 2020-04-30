let selectedPlatform = "";
let articlesToDisplay = "";
let articles = [];
let visibleArticles = 0;
const URL_MOST_WANTED_GAMES =
  "https://api.rawg.io/api/games?dates=2020-01-01,2021-10-10&ordering=-added";

const Home = (argument = "") => {
  console.log("Page Home", argument);

  // const nineMore = () => {
  // let showMore = document.getElementById("show-more");
  // let i = visibleArticles;
  //
  // if (visibleArticles > 21) {
  // showMore.hidden = true;
  // return;
  // }
  // showMore.hidden = false;
  //
  // for (i; i < visibleArticles + 9; i++) {
  // console.log(articles[i]);
  // if (articles[i] !== undefined)
  // document.querySelector(".game-list .articles").innerHTML += articles[i];
  // }
  // visibleArticles += 9;
  // };

  const preparePage = (finalURL) => {
    articles = "";

    const selectByPlatform = (jsonArticlePlatforms) => {
      let articlePlatforms = [];
      jsonArticlePlatforms.forEach((platform) => {
        articlePlatforms.push(platform.platform.slug);
      });
      if (selectedPlatform === "") return true;
      return articlePlatforms.includes(selectedPlatform) ? true : false;
    };

    fetch(`${finalURL}`)
      .then((response) => response.json())
      .then((response) => {
        console.log("ma response");
        console.log(response);
        response.results.forEach((article) => {
          if (selectByPlatform(article.platforms)) {
            articles += `
              <div class="cardGame">
                <img src="${article.background_image}" alt=""  />
                <div class="card-text">
                  <h1>${article.name}</h1>
                  <h2 class="date">${article.released}</h2>
                  <a href = "#gamedetail/${article.id}">${article.id}</a>
                </div>
              </div>
            `;
          }
        });
        // articlesToDisplay = nineMore();
        document.querySelector(".game-list .articles").innerHTML = articles;
      });
  };

  const changePlatform = () => {
    selectedPlatform = document.getElementById("filter").value;
    preparePage(URL_MOST_WANTED_GAMES);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="game-list">
        <select id="filter">
          <option value="">Platforms</option>
          <option value="pc">PC</option>
          <option value="xbox-one">Xbox One</option>
          <option value="playstation4">Playstation 4</option>
          <option value="nintendo-switch">Nintendo Switch</option>
          <option value="ios">iOS</option>
          <option value="android">Android</option>
          <option value="macos">Mac OS</option>
          <option value="linux">Linux</option>
        </select>
        <div class="articles">Hey, this page is a GameList template, about : ${argument}</div>
        <button id="show-more">Show More</button>
      </section>
    `;
    preparePage(URL_MOST_WANTED_GAMES);
    document.getElementById("filter").addEventListener("click", changePlatform);
    // document.getElementById("show-more").addEventListener("click", nineMore);
  };
  render();
};

export default Home;

// nine per nine display
// fetchList(`https://api.rawg.io/api/games?dates=${time},${future_time}&ordering=-added&page_size=27`);
