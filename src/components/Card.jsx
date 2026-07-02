import React from 'react'

const Card = () => {
  return (
    <div className="max-w-sm rounded-xl shadow-lg bg-white overflow-hidden">
  <img
    className="w-full h-48 object-cover"
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    alt="Nature"
  />

  <div className="p-5">
    <h2 className="text-xl font-bold mb-2">
      Beautiful Nature
    </h2>

    <p className="text-gray-600 mb-4">
      Explore the beauty of nature with breathtaking landscapes and peaceful surroundings.
    </p>

    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
      Learn More
    </button>
  </div>
</div>
  )
}

export default Card
