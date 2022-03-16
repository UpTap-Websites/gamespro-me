import React, { useEffect } from "react"

export default function Adsense({ slot, height, wFull }) {
  const loadAds = () => {
    try {
      if (typeof window !== "undefined") {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (error) {
      console.log("adsense error", error.message)
    }
  }

  useEffect(() => {
    loadAds()
  }, [])

  return (
    <div>
      <ins
        className="adsbygoogle bg-loading bg-center bg-no-repeat"
        style={{ display: "block" }}
        data-ad-client={`ca-pub-7075554936132634`}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      >
        <a
          className={`relative z-30 mx-auto my-4 block h-20 overflow-hidden bg-slate-900/10 text-white no-underline lg:my-8`}
          href="/"
        >
          <div className="text-center text-xs uppercase">Advertisement</div>
        </a>
      </ins>
    </div>
  )
}
