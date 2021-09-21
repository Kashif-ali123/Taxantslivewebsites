import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    return (
        <div className='App'>
        <ReactPlayer className="video"
          url='https://www.youtube.com/watch?v=Fg3cJaFTpiQ'
          
          controls
         
          

          onReady={() => console.log('onReady callback')}
          onStart={() => console.log('onStart callback')}
          onPause={() => console.log('onPause callback')}
          onEnded={() => console.log('onEnded callback')}
          onError={() => console.log('onError callback')}
        />
          <ReactPlayer className="video1"
          url='https://www.youtube.com/watch?v=9qIRPwF6B-w'
          
          controls
         
          

          onReady={() => console.log('onReady callback')}
          onStart={() => console.log('onStart callback')}
          onPause={() => console.log('onPause callback')}
          onEnded={() => console.log('onEnded callback')}
          onError={() => console.log('onError callback')}
        />
         <ReactPlayer className="audio"
          url='https://www.youtube.com/watch?v=2SgPTBlMHEc'
          
          controls
         
          

          onReady={() => console.log('onReady callback')}
          onStart={() => console.log('onStart callback')}
          onPause={() => console.log('onPause callback')}
          onEnded={() => console.log('onEnded callback')}
          onError={() => console.log('onError callback')}
        />
      </div>
    )
}

export default VideoPlayer
