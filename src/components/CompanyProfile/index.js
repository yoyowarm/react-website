import TitleGroup from '../TitleGroup'
import historyImg from '../../assets/images/roadmap.png'
import infoImg from '../../assets/images/info-image.png'
import infoImg2 from '../../assets/images/info-image-2.png'
import './index.css'
const CompanyProfile = () => {
  return (
    <div className='company'>
      <TitleGroup title="Roadmap" />
      <img className='mt-6' src={historyImg} alt="" />
      <div className='column-2 mt-20'>
        <div className='column-2-item'>
          <TitleGroup title="Meet Our Team" />
          <p className='mt-8'>We are a team of experts in the field of Web3.0 LBS systems, and we are passionate about creating a platform that empowers individuals to connect, create, and explore their world. Our system is designed to provide a unique and personalized experience for each user, allowing them to create their own universe and connect with like-minded people.
            <br /><br /><span className='more text-blue-500'>See More</span></p>
        </div>
        <img src={infoImg} alt="" />
      </div>
      <div className='column-2 mt-14'>
        <img src={infoImg2} alt="" />
        <div className='column-2-item'>
          <TitleGroup title="Join Us!" />
          <p className='mt-8'>We are looking for talents to expand our business! As a full-remote teams, we offer competitive salary, flexibility worktime and open culture.
            Please go to the link to see positions and reach us if you are interested.
            See Open Positions<br /><br /><span className='more text-blue-500'>See More</span></p>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile