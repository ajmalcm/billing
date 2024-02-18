import React,{useEffect,useRef} from 'react'

const Scanner = () => {
    const video=useRef(null);

    // useEffect(,[])

    const openCam=()=>{
        navigator.mediaDevices.getUserMedia({video:{width:500,height:500 }}).
        then(stream=>{
            video.current.srcObject=stream;
            // video.current.play();
        }).catch(err=>{
            console.log(err)
        })
    }

    const closeCam=()=>{
        const videoElement=video.current;

        if(videoElement.srcObject)
        {
            const stream=videoElement.srcObject;

            const tracks=stream.getTracks();


            tracks.forEach(track=>{
                track.stop()
            })

            videoElement.srcObject=null;

        }
    }

  return (
    <>
    <div className='flex justify-between items-center'>
    <button onClick={openCam} className='bg-green-500 text-white'>open</button>
    <button onClick={closeCam} className='bg-red-500 text-white'>close</button>
    </div>
    <video ref={video} autoPlay muted/>
    </>
  )
}

export default Scanner