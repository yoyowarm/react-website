import './index.css'

const Input = ({ value, placeholder, onChange, type }) => {
  return (
    <div className='w-full'>
      {type === 'textarea' ?
        <textarea className='bg-transparent outline-0' value={value} onChange={onChange} placeholder={placeholder} rows="4" cols="50" /> :
        <input className='bg-transparent outline-0' type="text" value={value} onChange={onChange} placeholder={placeholder} />
      }
    </div>
  )
}

export default Input