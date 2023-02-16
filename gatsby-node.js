const axios = require("axios")

const API_URL = `https://uptapapi.uptap.com/h5Game/?type=GameList&platform=uptap&token=dXB0YXBnYW1l572R56uZ55So`

const fetchAPI = url => axios.get(url).then(res => res.data)

const toSlug = name => toTitle(name).replace(/ /g, "-").toLowerCase()

const IMAGE_FORMAT = `webp`

const toTitle = name =>
  name
    .toString()
    .replace(/([A-Z])/g, " $1")
    .trim()
    .replace(/3 D/g, " 3D")

function getRange(m, n, o) {
  let min = m
  let max = n
  let range = max - min
  return o
    ? ((Math.random() * range + min) * o).toFixed(1)
    : (Math.random() * range + min).toFixed(1)
}

function getStars(level) {
  if (level !== undefined) {
    if (level == "latest") return getRange(4, 4.8)
    else if (level == "featured") return getRange(4.5, 5)
  } else return getRange(4.1, 4.5)
}

function getCount(level) {
  let latest = 1
  let normal = 2
  let featured = 3
  if (level !== undefined) {
    if (level == "latest") {
      return getRange(1, 5, latest) + `k`
    } else if (level == "featured") {
      return getRange(11, 20, featured) + `k`
    }
  } else {
    return getRange(6, 10, normal) + `k`
  }
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const res = await fetchAPI(API_URL)
  const allGames = res.gamelist

  // let allGames = data.filter(
  //   game =>
  //     game.rkScore >= 0.6 &&
  //     game.touch == true &&
  //     game.orientation == "portrait"
  // )

  allGames.map(
    game =>
      (game["title"] = toTitle(
        game.name !== "LittelBoxer" ? game.name : "Little Boxer"
      ))
  )
  allGames.map(
    game =>
      (game[
        "icon"
      ] = `https://cdn.iwantalipstick.com/gameicon2/${IMAGE_FORMAT}/${
        game.name !== "LittelBoxer" ? game.name : "LittleBoxer"
      }.${IMAGE_FORMAT}`)
  )
  allGames.map(game => (game["slug"] = toSlug(game.name)))
  allGames.map(game => (game["star"] = getStars()))
  allGames.map(game => (game["played"] = getCount()))
  allGames.map(
    game =>
      (game[
        "url"
      ] = `https://cdn.uptapgame.com/newgames/minigame.html?platform=uptap&appid=${game.name}`)
  )
  allGames.map(game =>
    (game["category"] = game.category
      .toString()
      .trim()
      .toLowerCase()
      .replace(/gril/, "girl")
      .replace(/match3/, "match 3")
      .replace(/sport/, "sports")
      .replace(/^\S/, s => s.toUpperCase())).replace(/Io/, ".IO")
  )

  allGames.sort((a, b) => (new Date(a.time) < new Date(b.time) ? 1 : -1))

  let categories = [...new Set(allGames.map(game => game.category))]

  createPage({
    path: "/",
    component: require.resolve("./src/templates/all-games.js"),
    context: { allGames, categories },
  })

  allGames.forEach(game => {
    createPage({
      path: `/game/${game.slug}`,
      component: require.resolve("./src/templates/single-game.js"),
      context: { game, categories },
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/category/${category.toLowerCase().replace(/ /, "-")}`,
      component: require.resolve("./src/templates/category.js"),
      context: { allGames, category, categories },
    })
  })
}
