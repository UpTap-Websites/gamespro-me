import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SingleGame = ({ pageContext: { game } }) => {
  const [isPlay, setIsPlay] = useState(false)
  return (
    <Layout>
      <Seo title={game.title} />
      <div className="container mx-auto flex grow flex-col lg:w-1/2">
        <div className="m-4 flex flex-row space-x-2 text-sm md:mx-0 md:px-3 lg:px-0">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <span className="opacity-30">/</span>
          <Link to={`/category/${game.category.toLowerCase()}`}>
            {game.category}
          </Link>
          <span className="opacity-30">/</span>
          <span className="opacity-60">{game.title}</span>
        </div>

        <div
          className={`relative mx-auto flex h-full w-full grow justify-center overflow-hidden bg-[#00000020]`}
        >
          <button
            className={
              isPlay
                ? `hidden`
                : `absolute top-1/2 left-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-500 py-4 px-8 font-bold uppercase text-white shadow-lg lg:block`
            }
            onClick={() => setIsPlay(!isPlay)}
          >
            Play now
          </button>

          <a
            className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-500 py-4 px-8 font-bold uppercase text-white shadow-lg lg:hidden"
            href={game.url}
          >
            Play now
          </a>

          {isPlay ? (
            <div className="fixed top-0 z-50 h-full w-full bg-[#00000030] lg:absolute ">
              <button
                className={
                  isPlay
                    ? `absolute top-2 left-0 z-50 rounded-tr-xl rounded-br-xl border-y-4 border-r-4 border-white/50 bg-lime-600 px-2 py-1 text-white opacity-80 md:hidden`
                    : `hidden`
                }
                onClick={() => setIsPlay(!isPlay)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  />
                </svg>
              </button>

              <iframe
                className={`mx-auto h-full w-full border-0 bg-black md:aspect-9/16 md:w-auto lg:h-full`}
                src={game.url}
                title={game.title}
                allowFullScreen
              >
                Loading...
              </iframe>
            </div>
          ) : (
            ""
          )}
          <img
            className="absolute top-1/2 left-1/2 w-full -translate-y-1/2 -translate-x-1/2 object-cover opacity-70 blur-2xl"
            src={game.icon}
            alt={game.title}
          />
        </div>

        <div className="flex bg-white p-4 text-slate-500">
          <img
            className="h-24 w-24 rounded-2xl"
            src={game.icon}
            alt={game.title}
          />

          <div className="ml-3">
            <h1 className="font-medium">{game.title}</h1>
            <div className="my-2">
              <Link
                className="rounded-md bg-sky-400 py-1 px-2 text-xs text-white"
                to={`/category/${game.category.toLowerCase()}`}
              >
                {game.category}
              </Link>
            </div>
            <div className="flex items-center text-orange-500">
              <svg width="16" height="20" fill="currentColor">
                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
              </svg>
              <span className="ml-1 font-bold">{game.star}</span>
              <span className="ml-2 flex items-center text-blue-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-1">{game.played}</span>
              </span>
            </div>
          </div>
        </div>
        <p className="bg-slate-300 p-4 text-sm text-slate-500 md:mb-4">
          {game.description}
        </p>
      </div>
    </Layout>
  )
}

export default SingleGame
