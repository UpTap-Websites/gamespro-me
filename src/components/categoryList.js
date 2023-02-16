import React from "react"
import { Link } from "gatsby"

export const CategoryList = ({ categories, games, className }) => {
  const getGamesCount = category => {
    const currentGames = games.filter(game => game.category === category)
    return currentGames.length
  }

  return (
    <div className="relative overflow-hidden after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-r after:from-blue-700/0 after:to-blue-700 md:after:w-0">
      <ul
        className={`shadow-mask scrollbar-hide ${className} relative flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden p-4 pr-6 md:flex-wrap md:pr-4`}
      >
        <li className="mb-2 mr-3 snap-center">
          <Link
            className={`block rounded-lg bg-blue-500 py-2 px-4 text-sm`}
            to={`/`}
            activeClassName={`bg-blue-600`}
          >
            All
          </Link>
        </li>
        {categories.map(category => (
          <li key={category} className="mb-2 mr-3 snap-center">
            <Link
              className="block whitespace-nowrap rounded-lg bg-blue-500 p-2 text-sm"
              to={`/category/${category.toLowerCase().replace(/ /, "-")}`}
              activeClassName={`bg-blue-600`}
            >
              {category !== "Io" ? category : ".IO"}{" "}
              <span>({getGamesCount(category)})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
