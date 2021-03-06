import React from 'react';

const VideoDetail = ({video}) =>{

    if(!video){
        return <div>Loading...</div>
    }
    const videoId= video.id.videoId;
    console.log(videoId)
    const url =`https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div >
                <iframe src={url} width="560" height="315"></iframe>

            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>

        </div>
    )
};

export default VideoDetail;