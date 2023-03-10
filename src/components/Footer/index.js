import logo from '../../assets/images/dlbs-logo.png'
import icon1 from '../../assets/images/linkedin.png'
import icon2 from '../../assets/images/facebook.png'
import icon3 from '../../assets/images/twitter.png'
import icon4 from '../../assets/images/instagram.png'
import icon5 from '../../assets/images/youtube.png'
import icon6 from '../../assets/images/discord.png'
import icon7 from '../../assets/images/line.png'
import './index.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='container column-3 border-b-2 border-gray-400 pb-2 sm:pb-6'>
        <div>
          <ul>
            <li className='text-xl font-semibold'>dLBS</li>
            <li className='my-2'>Home</li>
            <li className='my-2'>App</li>
            <li className='my-2'>About Us</li>
            <li className='my-2'>Insight</li>
            <li className='my-2'>Investor</li>
            <li className='my-2'>Careers</li>
            <li className='my-2'>Insight</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='text-xl font-semibold'>Social media</li>
            <li className='my-2'>Twitter</li>
            <li className='my-2'>Discord</li>
            <li className='my-2'>Telegram</li>
            <li className='my-2'>Github</li>
            <li className='my-2'>Linkedin</li>
            <li className='my-2'>Youtube</li>
            <li className='my-2'>Instagram</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='text-xl font-semibold'>Product Help</li>
            <li className='my-2'>consultant@mzyme.xyz</li>
          </ul>
        </div>
      </div>
      <div className='container flex flex-wrap items-center justify-between !pt-2 pb-4'>
        <div className='flex flex-wrap h-auto'>
          <img className='w-24 mr-12 mb-2' src={logo} alt="logo" />
          <div className='flex flex-wrap mb-2'>
            <img className='w-6 mr-8 h-auto object-contain' src={icon1} alt="icon" />
            <img className='w-6 mr-8 h-auto object-contain' src={icon2} alt="icon" />
            <img className='w-6 mr-8 h-auto object-contain' src={icon3} alt="icon" />
            <img className='w-6 mr-8 h-auto object-contain' src={icon4} alt="icon" />
            <img className='w-6 mr-8 h-auto object-contain' src={icon5} alt="icon" />
            <img className='w-6 ' src={icon6} alt="icon" />
          </div>
        </div>
        <p className='text-sm'>© 2023 PlayaLab All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer