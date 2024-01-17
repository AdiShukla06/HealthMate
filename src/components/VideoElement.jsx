

const VideoElement = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <video autoPlay loop muted className="w-1/2 h-1/2 object-contain" controls>
      <source src="/videoelement.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
  )
}

export default VideoElement
