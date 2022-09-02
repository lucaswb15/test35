import React from 'react'


const Main = () => {
  return (
    <div >
        <div className='flex object-cover max-h-screen'>
            <video muted autoPlay loop src={(require('/public/milk1.mp4'))} type='video/mp4'/>

        </div>
    </div>
  );
};


export default Main