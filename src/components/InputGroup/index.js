import './index.css'
const InputGroup = ({ inputSlot, title }) => {
  return (
    <div className='input-group w-full'>
      <p className='title'>{title}</p>
      <div className='input'>
        {inputSlot}
      </div>
    </div>
  )
}

export default InputGroup