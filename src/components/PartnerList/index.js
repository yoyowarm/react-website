import { useState } from 'react'
import TitleGroup from '../TitleGroup'
import PartnerItem from './Item'
import partnerImg1 from '../../assets/images/clients-1.png'
import partnerImg2 from '../../assets/images/clients-2.png'
import partnerImg3 from '../../assets/images/clients-3.png'
import partnerImg4 from '../../assets/images/clients-4.png'
import './index.css'
const PartnerList = () => {
  const [partners] = useState([
    { imgSrc: partnerImg1 },
    { imgSrc: partnerImg2 },
    { imgSrc: partnerImg3 },
    { imgSrc: partnerImg4 },
  ])
  return (
    <div className='partner'>
      <TitleGroup title="Our Clients" />
      <div className='flex flex-row flex-wrap justify-center sm:justify-between mt-6'>
        {partners.map((partner, index) => (
          <PartnerItem key={index} imgSrc={partner.imgSrc} />
        ))}
      </div>
    </div>
  )
}

export default PartnerList