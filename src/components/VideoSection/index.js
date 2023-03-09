import videoImg from '../../assets/images/banner-2.png'
import './index.css'
const VideoSection = () => {
  return (
    <div className="video-section">
      <img src={videoImg} alt="video" />
      <div className='info'>
        The rise of Web3.0 has brought a new era of personalized experiences.
        With the current state of social networking, people are seeking deeper and more meaningful connections. They are looking for ways to create and explore their world, and they want a platform that allows them to do so. That's where we come in.
        Tired of generic social media platforms? Want to connect with like-minded individuals who share your interests and passions? Our LBS system provides a personalized experience that allows you to explore and discover new experiences in the world around you.
        <br /><span className='more'>Learn more {'>'}</span>
      </div>

    </div>
  )
}

export default VideoSection