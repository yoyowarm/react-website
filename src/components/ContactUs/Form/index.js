import InputGroup from '../../InputGroup'
import Input from '../../InputGroup/Input'
import './index.css'
const Form = () => {
  return (
    <div className='form'>
      <div className='column-2 mb-5'>
        <InputGroup title='Name:' inputSlot={<Input placeholder='Enter your name' />} />
        <InputGroup title='Email:' inputSlot={<Input placeholder='Enter your email' />} />
      </div>
      <div className='column-2 mb-5'>
        <InputGroup title='Phone:' inputSlot={<Input placeholder='Enter your phone' />} />
        <InputGroup title='Address:' inputSlot={<Input placeholder='Enter your address' />} />
      </div>
      <div className='w-full mb-5'>
        <InputGroup title='Title:' inputSlot={<Input placeholder='Enter title' />} />
      </div>
      <div className='w-full'>
        <InputGroup title='Your Message:' inputSlot={<Input type="textarea" placeholder='Enter your message' />} />
      </div>
      <button className='submit'>submit</button>
    </div>
  )
}

export default Form