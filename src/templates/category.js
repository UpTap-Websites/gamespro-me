import * as React from "react"
import { ListItem } from "../components/listItem"
import { CategoryList } from "../components/categoryList"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Adsense from "../components/adsense"

const Category = ({ pageContext: { category, categories, allGames } }) => {
  const games = allGames.filter(game => game.category === category)

  return (
    <Layout>
      <Seo title={`${category} Games`} />
      <div className="container mx-auto pb-4 lg:pb-8">
        {/* <Adsense slot={`4124206286`} height={`h-[200px]`} /> */}
        <CategoryList
          categories={categories}
          games={allGames}
          className={`flex-wrap`}
        />
        <h1 className="p-4 text-center align-baseline text-2xl font-bold capitalize lg:text-3xl">
          {category} {games.length > 1 ? `Games` : `Game`}
        </h1>
        <ul className="grid h-full grid-cols-1 gap-4 overflow-auto p-4 md:grid-cols-3 xl:grid-cols-5 xl:gap-8">
          {games.map(game => (
            <ListItem key={game.id} game={game} />
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Category
