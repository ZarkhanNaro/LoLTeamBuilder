import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/App.css"

const Login = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [errorMessage, setErrorMessage] = useState<string>("")
    let navigate = useNavigate();
    
    useEffect(() => {
        document.title = "LoL TeamBuilder"
        }, [])

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(username === "Admin" && password === "Admin"){
            navigate("/createteam")
        }else{
            setErrorMessage("wrong username or password")
        }
    }

  return (
    <div className='App'>
        <span className="heading">Team Builder</span>
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <span>
                    Please sign-in
                </span>
                <div className="error">
                    {errorMessage}
                </div>
                <div className='input'>
                    <span className='input__text'>Username: </span>
                    <span className='input__space'>
                        <input 
                            className='input__box'
                            onChange={
                                (e) => setUsername(e.target.value)
                            }
                        />
                    </span>
                </div>
                <div>
                    <span className='input__text'> Password: </span>
                    <span className='input__space'>
                        <input 
                            className='input__box'
                            type="password"
                            onChange={
                                (e) => setPassword(e.target.value)
                            }
                        />
                    </span>
                </div>
                <button className='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login