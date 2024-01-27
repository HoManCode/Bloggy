import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const CreatAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const createAccount = async () => {
        try{
            if(password !== confirmedPassword){
                setError('Password and confirmed password do not match');
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e){
            setError(e.message);
        }
    }

    return(
        <>
            <h1>Create Account</h1>
            {error && <p className="error">{error}</p>}
            <input 
                placeholder="Your email address"
                value={email}
                onChange={e=>setEmail(e.target.value)}/>
            <input 
                placeholder="Enter Your password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                type="password" />
            <input 
                placeholder="Re-enter Your password"
                value={confirmedPassword}
                onChange={e=>setConfirmedPassword(e.target.value)}
                type="password" />
            <button onClick={createAccount}>Create Account</button>
            <Link to="/login">Already have an account? Log in here</Link>
        </>
    )
}

export default CreatAccountPage;