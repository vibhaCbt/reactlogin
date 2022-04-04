import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser, myLoginData } from '../../reducers/LoginDataSlice'

export const Navbar = () => {

    const loginUser = useSelector(myLoginData)
    console.log(loginUser.userName)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () =>{
        dispatch(logoutUser())
        navigate('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to='/'>Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='register'>Register</Link></li>
                        {/* <li className="nav-item"><Link className="nav-link" to='login'>Login</Link></li> */}
                    </ul>
                </div>

                {/* <div className='loginInfo'> */}
                    {/* <span className='me-3'>{loginUser && `hi... ${loginUser.userName}`}</span> */}
                    {/* <button type="button" className="btn btn-info">
                        {
                            loginUser && 'Logout'
                        }
                    </button> */}
                    {loginUser &&
                       (
                            <div className='loginInfo'>
                                <span className='me-3'>{`hi... ${loginUser.userName}`}</span>
                                <button className="btn btn-info" type="button" onClick={handleLogout}>Logout</button>
                            </div>
                        )
                    }
                {/* </div> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}