import React from 'react'

export function Clients() {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
    <h1 className="text-2xl font-medium text-gray-800 text-center">
      Trusted by greatest companies
    </h1>
    <div className="[&>img]:w-40 flex flex-col md:flex-row items-center flex-wrap gap-20">
      <img src="google.png" />
      <img src="airbnb.png" />
      <img src="amazon.png" />
      <img src="shopify.png" />
      <img src="google.png" />
    </div>
  </div>
  )
}
