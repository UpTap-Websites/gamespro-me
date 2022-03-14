import React, { useState } from "react"
import { ListItem } from "../components/listItem"
import { CategoryList } from "../components/categoryList"

import Layout from "../components/layout"
import Seo from "../components/seo"
import InfiniteScroll from "react-infinite-scroll-component"
import Adsense from "../components/adsense"

const Home = ({ pageContext: { allGames, categories } }) => {
  const initGames = allGames.slice(0, 30)

  // console.log(initGames)
  const total = allGames.length
  // console.log(total)
  const [games, setGames] = useState(initGames)
  const [hasMore, setHasMore] = useState(true)

  const getMoreGames = () => {
    // console.log(games.length)
    const newGames = allGames.slice(games.length, games.length + 5)

    setGames(game => [...game, ...newGames])
    if (games.length >= total) {
      setHasMore(!hasMore)
    }
  }

  return (
    <Layout>
      <Seo title="Home" />
      <div className="container mx-auto pb-4 lg:pb-8">
        {/* <Adsense slot={`4124206286`} height={`h-auto`} /> */}
        <CategoryList categories={categories} games={allGames} />
        <h2 className="sr-only p-4 text-center align-baseline text-2xl font-bold capitalize lg:text-3xl">
          All Games
        </h2>
        <InfiniteScroll
          dataLength={games.length}
          next={getMoreGames}
          hasMore={hasMore}
          loader={<h3 className="my-2 text-center">Loading...</h3>}
        >
          <ul className="grid h-full grid-cols-1 gap-4 overflow-auto p-4 md:grid-cols-3 xl:grid-cols-5 xl:gap-8">
            {games.map(game => (
              <ListItem key={game.id} game={game} />
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    </Layout>
  )
}

export default Home
