import NextTopLoader from 'nextjs-toploader'
import React from 'react'

export default function TopLoader() {
  return (
    <>
        <NextTopLoader
            color="#00b8db"
            initialPosition={0.08}
            crawlSpeed={200}
            height={5}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
        />
    </>
  )
}
