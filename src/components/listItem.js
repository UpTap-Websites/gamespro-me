import React from "react"
import { Link } from "gatsby"

export const ListItem = ({ game }) => {
  return (
    <li className="delay-50 transform duration-500 ease-in-out lg:hover:scale-110">
      <Link
        className="flex flex-row overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg"
        to={`/game/${game.slug}`}
        title={game.title}
      >
        <img
          className="mr-3 aspect-square rounded-tl-2xl rounded-bl-2xl bg-[#00000010]"
          src={game.icon}
          alt={game.title}
          width={100}
          height={100}
        />
        <div className="min-h-14 mt-2 grow overflow-hidden text-ellipsis pb-2 pr-2 text-left text-sm leading-tight drop-shadow-md">
          <h3 className="mb-2 font-bold">{game.title}</h3>
          <div className="mb-2 flex items-center">
            <span className="flex items-center text-yellow-300">
              <svg width="16" height="20" fill="currentColor">
                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
              </svg>
              <span className="ml-1 font-bold">{game.star}</span>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span>{game.played}</span>
          </div>
          <span className="rounded-md bg-black/10 p-1 text-xs text-white/80">
            {game.category}
          </span>
        </div>
        <div className="flex w-1/4 items-center justify-center bg-blue-500/50 sm:hidden">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </Link>
    </li>
  )
}
