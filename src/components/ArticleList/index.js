import TitleGroup from '../TitleGroup'
import articleImage1 from '../../assets/images/article-image-1.png'
import articleImage2 from '../../assets/images/article-image-2.png'
import articleImage3 from '../../assets/images/article-image-3.png'
import articleImage4 from '../../assets/images/article-image-4.png'
import articleImage5 from '../../assets/images/article-image-5.png'

import './index.css'
const ArticleList = () => {
  return (
    <div className="article">
      <TitleGroup title="Spotlight: GEMs" />
      <div className='column-2 mt-6'>
        <img src={articleImage1} alt="" />
        <p className='sm:pl-10'>“GEMs” is the name of our unique NFT format, currently based on Ethereum or Polygon chain. It is light-weight with low gas fee and able to embed in picture, video, link or events.
          You can create a GEM on our portal or import an existing NFT, then sells your GEMs or attach it to a mission to attract more customers to your business!</p>
      </div>
      <h3 className='mt-8 text-xl'>Situations to apply GEMs</h3>
      <div className='column-3 mt-4 mb-10'>
        <div className='Item'>
          <img src={articleImage2} alt="" />
          <h3>Artist & Creators</h3>
          <ul className='list-disc pl-4 text-left'>
            <li>Create a personalized profile and connect with like-minded people</li>
            <li>Use GEMs to sell your artworks, and use our website builder to make your portfolio or commission info.</li>
          </ul>
        </div>
        <div className='Item'>
          <img src={articleImage3} alt="" />
          <h3>Event Holders</h3>
          <ul className='list-disc pl-4 text-left'>
            <li>Create a personalized profile for your event, including schedules and maps</li>
            <li>Guide attendees with location-based services</li>
            <li>Create interactive exhibits and displays with 3D mapping and augmented reality</li>
          </ul>
        </div>
        <div className='Item'>
          <img src={articleImage4} alt="" />
          <h3>Local Business</h3>
          <ul className='list-disc pl-4 text-left'>
            <li>Promote products and services to nearby customers through a personalized profile</li>
            <li>Offer exclusive deals to users who visit your location</li>
            <li>Enhance in-store experience with 3D mapping and augmented reality</li>
          </ul>
        </div>
      </div>
      <TitleGroup title="Spotlight: Missions" />
      <div className='column-2 mt-6'>
        <img src={articleImage5} alt="" />
        <p className='sm:pl-10'>Be a treasure hunter in the 21st century.
          Our mission module provides an easy way to distribute your GEMs by airdrops or mini games to interact with customers. People can easy find collaborated business and ongoing missions by our interactive map.
          Kindle everyday with more and more fun!</p>
      </div>

    </div>
  );
}

export default ArticleList;