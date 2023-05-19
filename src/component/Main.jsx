import React, { useState } from 'react'

export default function Main() {
 
    //hooks for the inputfields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    //hooks for the error messages
    const [eusername, seteusername] = useState('');
    const [eemail, seteemail] = useState('');
    const [epassword, setepassword] = useState('');
    const [ecpassword, setecpassword] = useState('');

    //hooks for the input border color
    const [ucolor, setucolor] = useState('');
    const [ecolor, setecolor] = useState('');
    const [pcolor, setpcolor] = useState('');
    const [cpcolor, setcpcolor] = useState('');
    

    //function for the submit button
    function validate() {
        if(username.length > 8){
            seteusername('')
            setucolor('green')
        }else{
            seteusername('username must be atleast 8 characters')
            setucolor('red')
        }

        if(email.includes('@gmail')){
            seteemail('')
            setecolor('green')
        }else{
            seteemail('email must contain @gmail')
            setecolor('red')
        }

        if(password.length > 8 && password.includes('@')){
            setepassword('')
            setpcolor('green')
        }else{
            setepassword('password must contain @ & have atleast 8 characters')
            setpcolor('red')
        }

        if(password!='' && password == cpassword){
            setecpassword('')
            setcpcolor('green')
        }else{
            setecpassword('passwords not matched')
            setcpcolor('red')
        }

    }

    return (
        <div className='row justify-content-center'>
        <div className='col-md-5 <div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>'>
          <h1>Form Validation</h1>
  
          <input type='text' placeholder='username' className='form-control' value={username}  style={{borderColor:ucolor}} onChange={(e)=>{setUsername(e.target.value)}}/>
          <p>{eusername}</p>

          <input type='text' placeholder='email' className='form-control' value={email} style={{borderColor:ecolor}} onChange={(e)=>{setEmail(e.target.value)}}/>
          <p>{eemail}</p>

          <input type='text' placeholder='password' className='form-control' value={password} style={{borderColor:pcolor}} onChange={(e)=>{setPassword(e.target.value)}}/>
          <p>{epassword}</p>

          <input type='text' placeholder='confirm password' className='form-control' value={cpassword} style={{borderColor:cpcolor}} onChange={(e)=>{setCpassword(e.target.value)}}/>
          <p>{ecpassword}</p>
  
          <buttton className='btn btn-primary' onClick={validate}>SUBMIT</buttton>
        </div>
       </div>
    )
}
