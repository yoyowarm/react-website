import './index.css'

const Item = ({ imgSrc, title, instructions }) => {
  return (
    <div className='product-item'>
      <img src={imgSrc} alt="" />
      <h1>{title}</h1>
      <p>{instructions}</p>
    </div>
  )
}

export default Item