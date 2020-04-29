const GameList = (argument = "") => {
  console.log("Game List", argument);

  const preparePage = () => {
    cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "?search=" + argument;
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((article) => {
            articles += `
                  <div class="cardGame">
                    <h1>${article.name}</h1>
                    <h2>${article.released}</h2>
                    <a href = "#gamedetail/${article.id}">${article.id}</a>
                  </div>
                `;
          });
          document.querySelector(".page-list .articles").innerHTML = articles;
        });
    };

    fetchList("https://api.rawg.io/api/games", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Hey, this page is a GameList template, about : ${argument}</div>
      </section>
    `;
  };

  render();
};

export default GameList;
