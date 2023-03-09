import './index.css'

const Item = ({ imgSrc }) => {
  return (
    <div className='partner-item'>
      <img src={imgSrc} alt="" />
    </div>
  )
}

export default Item