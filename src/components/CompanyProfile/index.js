import TitleGroup from '../TitleGroup'
import historyImg from '../../assets/images/roadmap.png'
import infoImg from '../../assets/images/info-image.png'
import infoImg2 from '../../assets/images/info-image-2.png'
import './index.css'
const CompanyProfile = () => {
  return (
    <div className='company'>
      <TitleGroup title="Roadmap" />
      <img src={historyImg} alt="" />
      <div className='column-2 mt-20'>
        <div className='column-2-item'>
          <TitleGroup title="Meet Our Team" />
        </div>
        <img src={infoImg} alt="" />
      </div>
      <div className='column-2 mt-14'>
        <img src={infoImg2} alt="" />
        <div className='column-2-item'>
          <TitleGroup title="Join Us!" />
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile