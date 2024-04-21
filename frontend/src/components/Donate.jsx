import React, { useState } from 'react'

const Donate = () => {
  const [amount, setAmount] = useState("");
  const[name,setName] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false)
  return (
    <section className='donate'>
      <form>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <h1> Show Your Love For Needy</h1>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder='Enter Donation Amount'/>
        </div>
        <input type="text" value={name} placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
        <input type="email" value={email} placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
        <textarea rows="10" value={message} placeholder='Your Message' onChange={(e) => setMessage(e.target.value)} />
        <button type='submit' className='btn' disabled={disableBtn}>Donate {amount ? `Rs ${amount}` : " "}</button>
      </form>
      
    </section>
  )
}

export default Donate
