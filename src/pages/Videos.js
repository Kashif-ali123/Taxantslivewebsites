import React from 'react';
import ReactPlayer from 'react-player';

const Videos = () => {
    return (
        <div className='ap'>
        <ReactPlayer style={{marginLeft:"5px"}}
          url='https://taxants.ca/wp-content/uploads/2020/07/WhatsApp-Video-2020-07-14-at-9.00.36-AM-1.mp4'
          
          controls
         
          

          onReady={() => console.log('onReady callback')}
          onStart={() => console.log('onStart callback')}
          onPause={() => console.log('onPause callback')}
          onEnded={() => console.log('onEnded callback')}
          onError={() => console.log('onError callback')}
        />
          <ReactPlayer style={{marginLeft:"5px"}}
          url='https://taxants.ca/wp-content/uploads/2020/07/WhatsApp-Video-2020-07-14-at-9.00.36-AM-2.mp4'
          
          controls
         
          

          onReady={() => console.log('onReady callback')}
          onStart={() => console.log('onStart callback')}
          onPause={() => console.log('onPause callback')}
          onEnded={() => console.log('onEnded callback')}
          onError={() => console.log('onError callback')}
        />
         <ReactPlayer style={{marginLeft:"5px"}}
          url='https://taxants.ca/wp-content/uploads/2020/07/WhatsApp-Video-2020-07-14-at-9.00.36-AM-3.mp4'
          
          controls
         
          

          onReady={() => console.log('onReady callback')}
          onStart={() => console.log('onStart callback')}
          onPause={() => console.log('onPause callback')}
          onEnded={() => console.log('onEnded callback')}
          onError={() => console.log('onError callback')}
        />
        <ReactPlayer style={{marginLeft:"5px"}}
          url='https://taxants.ca/wp-content/uploads/2020/07/WhatsApp-Video-2020-07-14-at-9.00.36-AM-4.mp4'
          
          controls
         
          

          onReady={() => console.log('onReady callback')}
          onStart={() => console.log('onStart callback')}
          onPause={() => console.log('onPause callback')}
          onEnded={() => console.log('onEnded callback')}
          onError={() => console.log('onError callback')}
        />
        <ReactPlayer  style={{marginLeft:"5px"}}
          url='https://taxants.ca/wp-content/uploads/2020/07/WhatsApp-Video-2020-07-14-at-9.00.36-AM-5.mp4'
          
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

export default Videos;