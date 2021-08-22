const { connect, disconnect } = require("./src/db/db");
const Project = require("./src/models/project-model");
async function main() {
  await Project.deleteMany();
  const project = [
    {
      title: "Smart home",
      creators: ["60f176c1b74f86c1e488bfdd", '60f56fcc584d1b4761135f08', "60f67c3bae79a10963bc5398"],
      likes: [],
      description:
        "We have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found.",
      gitHub: "https://github.com/cyberspacedk/Git-commands",
      website: "https://yandex.ru/pogoda/moscow?lat=55.706898&lon=37.597745",
      twitter: "https://twitter.com/kirillnemkov",
      instagram: "https://www.instagram.com/kirillnemkov/",
      facebook: "https://www.facebook.com/public/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%9D%D0%B5%D0%BC%D0%BA%D0%BE%D0%B2",
      image: [
        "https://img.gazeta.ru/files3/217/10588217/Zootopia-pic905-895x505-73183.jpg",
        "https://www.capital.ua/uploads/news/2016/03/02/3398ae30bb3b7cb9f39b0afdbfbeb9bdb222d99d.jpg",
        "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1345014/bc1572a6620df5da38f6d4f86a67e959/960x540",
      ],
      date: "July 2021 - leopards",
      views: [],
      hashtags: ["JS", "React", "Material UI"],
      comments: [],
    },
    {
      title: "CRM",
      creators: ["60f176c1b74f86c1e488bfdd", "60f67c3bae79a10963bc5398"],
      likes: [],
      description:
        "We have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found.",
      gitHub: "https://github.com/cyberspacedk/Git-commands",
      website: "https://yandex.ru/pogoda/moscow?lat=55.706898&lon=37.597745",
      twitter: "https://twitter.com/kirillnemkov",
      instagram: "https://www.instagram.com/kirillnemkov/",
      facebook: "https://www.facebook.com/public/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%9D%D0%B5%D0%BC%D0%BA%D0%BE%D0%B2",
      image: [
        "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1345014/bc1572a6620df5da38f6d4f86a67e959/960x540",
      ],
      date: "July 2021 - leopards",
      views: [],
      hashtags: ["JS", "React", "Bootstrap"],
      comments: [],
    },
    {
      title: "Made By Elbrus",
      creators: ['60f56fcc584d1b4761135f08', "60f67c3bae79a10963bc5398"],
      likes: [],
      description:
        "We have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found.",
      gitHub: "https://github.com/cyberspacedk/Git-commands",
      website: "https://yandex.ru/pogoda/moscow?lat=55.706898&lon=37.597745",
      twitter: "https://twitter.com/kirillnemkov",
      instagram: "https://www.instagram.com/kirillnemkov/",
      facebook: "https://www.facebook.com/public/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%9D%D0%B5%D0%BC%D0%BA%D0%BE%D0%B2",
      image: [
        "https://img.gazeta.ru/files3/217/10588217/Zootopia-pic905-895x505-73183.jpg",
        "https://www.capital.ua/uploads/news/2016/03/02/3398ae30bb3b7cb9f39b0afdbfbeb9bdb222d99d.jpg",
      ],
      date: "July 2021 - leopards",
      views: [],
      hashtags: ["JS", "React", "Express"],
      comments: [],
    },
    {
      title: "Akim Express",
      creators: ["60f67c3bae79a10963bc5398"],
      likes: [],
      description:
        "We have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found.",
      gitHub: "https://github.com/cyberspacedk/Git-commands",
      website: "https://yandex.ru/pogoda/moscow?lat=55.706898&lon=37.597745",
      twitter: "https://twitter.com/kirillnemkov",
      instagram: "https://www.instagram.com/kirillnemkov/",
      facebook: "https://www.facebook.com/public/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%9D%D0%B5%D0%BC%D0%BA%D0%BE%D0%B2",
      image: [
        "https://img.gazeta.ru/files3/217/10588217/Zootopia-pic905-895x505-73183.jpg",
      ],
      date: "June 2021 - bears",
      views: [],
      hashtags: ["JS", "React"],
      comments: [],
    },
  ];
  await Project.insertMany(project);
}
connect();
main().then(() => {
  disconnect();
});
