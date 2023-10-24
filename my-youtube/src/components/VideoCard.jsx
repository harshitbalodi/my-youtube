import React from 'react'

const VideoCard = ({title,thumbnails,channelTitle,publishedAt,viewCount}) => {
  return (
    <div className='w-80 shadow-lg py-4 mx-5 rounded-lg'>
      
      <img  className="rounded-lg w-fit h-fit" src={thumbnails.medium.url} alt={title+thumbnails} />
      <div className='font-semibold'>{title}</div>
      <div className='font-light'>{channelTitle}</div>
      <div>
        <span> {viewCount} views</span> 
         <span> {publishedAt.slice(0,10)}</span>
      </div>
    </div>
  )
}

export default VideoCard