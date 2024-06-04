import { useState } from 'react';
import './Signin.css'
import axios from 'axios';
import { setCache } from '../../caching/caching';
import { useNavigate } from "react-router-dom";

const Signin =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedadmin, setLoggedadmin] = useState("");
   // const [loggedteacher, setLoggedteacher] = useState("");
    const navigate = useNavigate();

    const handleSignin = async () => {
        console.log('handleSignin function called');
        if (email && password) {
            try {
                console.log('Attempting to sign in with:', { email, password });
                const admin = await axios.post('http://localhost:4000/Admin', {
                    email,
                    password
                });
                console.log('Admin response:', admin);
    
                if (admin.data.status === "success") {
                    setCache('HDLGenHub_Admin', JSON.stringify(admin.data.response));
                    setCache('HDLGenHub_User', JSON.stringify({ data: admin.data.response, role: 'admin' }));
                    setCache('HDLGenHub_loggedState', 1);
                    alert('Admin logged');
                    console.log({ admin });
                    setEmail('');
                    setPassword('');
                    navigate('/adminPage');
                    window.location.reload();
                } else if (admin.data.status === "incorrect password") {
                    alert("Incorrect password");
                } else if (admin.data.status === "user not found") {
                    alert("User not found");
                } else if (admin.data.status === "error with login") {
                    alert("Error with login");
                } else {
                    alert("Unknown response status");
                    console.log('Unknown response status:', admin.data.status);
                }
            } catch (error) {
                console.error('Error logging in:', error);
                alert('User logging failed');
            }
        } else {
            console.log('Email and password must not be empty');
        }
    };
    
    return(
        <div className="signincontainer">
            <div className='signinheader'>
                <h1>Sign In</h1>
            </div>
            <div className='signininputs'>
                <div className='signininputfield'>
                    <label>Email Address</label>
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
            </div>
            <div className='signinbottom'>
                <div className='signinforgotpw'><a href='#'>Forgot Password ?</a></div>
                <div className='signinagreementtext'>
                    <label>By clicking "Sign in," you agree to our <span className='signinterms'>
                        <a href='#'>Terms of Use</a>
                        </span> and our <span className='signinprivacy'>
                        <a href='#'>Privacy Policy</a></span>.
                    </label>
                </div>
                <div className='signinbutton'>
                    <button onClick={handleSignin}>Sign In</button>
                </div>
                <div className='singindonthaveacc'>Don't have an account? <a href='/signuppage'>Sign Up</a></div>
            </div>
        </div>
    );
}

export default Signin;