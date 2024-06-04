import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <div className='mt-9 mb-5'>
        <h1 className="text-white mb-4 text-4xl sm:text-5xl text-center lg:text-5xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            {title}
          </span>
        </h1>
        <p className="text-[#dfe1e2] text-center text-base sm:text-lg mb-6 lg:text-xl">
          {subtitle}
        </p>
    </div>
  )
}

export default Title