import './index.css'

const Item = ({ imgSrc, className }) => {
  return (
    <div className={'partner-item ' + className}>
      <img src={imgSrc} alt="" />
    </div>
  )
}

export default Item