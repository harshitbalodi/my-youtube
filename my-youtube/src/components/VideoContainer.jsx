import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, [])
  async function getVideos() {
    try {
      var data = await fetch(import.meta.env.VITE_YOUTUBE_API_POPULAR_VIDEOS_URL);
      var jsondata = await data.json();
    } catch (err) {
      console.log(err);
    }
    setVideos(jsondata.items);

  }

  return videos.length === 0 ? null : (
    <div className='flex flex-wrap'>
      {
        videos.map((video)=>{
          return (
          <VideoCard 
          title={video.snippet.title} 
          thumbnails={video.snippet.thumbnails} 
          channelTitle={video.snippet.channelTitle} 
          publishedAt={video.snippet.publishedAt}  
          viewCount={video.statistics.viewCount}
          key={video.id}
          />
          )
        })
      }
    </div>
  )
}

export default VideoContainer