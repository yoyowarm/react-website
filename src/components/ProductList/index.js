import { useState } from "react";
import TitleGroup from '../TitleGroup'
import ProductItem from './Item'
import productImage1 from '../../assets/images/section-image-1.png'
import productImage2 from '../../assets/images/section-image-2.png'
import productImage3 from '../../assets/images/section-image-3.png'
import productImage4 from '../../assets/images/section-image-4.png'
import productImage5 from '../../assets/images/section-image-5.png'
import productImage6 from '../../assets/images/section-image-6.png'

import './index.css'
const ProductList = () => {
  const [products] = useState([
    { imgSrc: productImage1, title: 'CREATE YOUR “GEMS”', instructions: 'Create your “GEMs” with the ability to embed series of multimedia (videos, audios, documents, pictures, links and more) as your digital products or a way to advertise your services.' },
    { imgSrc: productImage2, title: 'missions', instructions: 'Engage with potential customers in a more interesting way, and you can gift them your “GEMs” as rewards!' },
    { imgSrc: productImage3, title: 'dLBS Maps', instructions: 'An interactive map displays ongoing GEMs airdrops or missions available to all users.' },
    {
      imgSrc: productImage4, title: 'WEBSITE BUILDER', instructions: 'Build your website in just a few clicks! Our customizable templates can display your GEMs, info and other contents.You can use it as a simple Linktree page or a complex Wix site.'
    },
    { imgSrc: productImage5, title: 'AFFILIATE MARKETING', instructions: 'Advertisement request feature. Websites built with yoh app allows their visitors to post advertisement requests to bring traffic to their websites.' },
    { imgSrc: productImage6, title: 'ANALYTICS', instructions: 'Track the websites traffic and sales from NFT and advertisement requests. Easy to read charts to easily track your creative works performance on the web.' },
  ])
  return (
    <div className='product'>
      <TitleGroup title="Our Products" />
      <div className="column-2">
        {products.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </div>
  )
}


export default ProductList