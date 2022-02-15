import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [userdata, setuserdata] = useState([
        {
            name: "Neeleshwar Dogra",
            username: "neeleshwardogra@gmail.com",
            password: "123456",
        },
        {
            name: "Someone",
            username: "someone@email.com",
            password: "password",
        },
    ]);

    const navigate = useNavigate();

    const [showlogin, setlogin] = useState(true)

    const [showreg, setreg] = useState(false)

    const [email, setemail] = useState({ value: "" });

    const [password, setpassword] = useState({ value: "" });

    const [name, setname] = useState({value: ""})

    const newuser = {name: "", username: "", password:""}
    const cp = {password: ""}

    const handleemail = (e) => {
        setemail({ value: e.target.value });
    };

    const handlepass = (e) => {
        setpassword({ value: e.target.value });
    };

    const handlename = (e) => {
        newuser.name =  e.target.value
    }

    const handleregemail = (e) => {
        newuser.username = e.target.value
    }

    const handleregpass = (e) => {
        newuser.password = e.target.value
    }

    const handlecppass = (e) => {
        cp.password = e.target.value
    }

    const Validator = (e) => {
        e.preventDefault();
        let checker = 0;
        if (email.value.length < 1) {
            alert("Enter Username");
        } else if (password.value.length > 0) {
            userdata.map((user, index) => {
                if (
                    user.username === email.value &&
                    user.password === password.value
                ) {
                    setname({value: user.name})
                    checker = 1;
                }
                return true;
            });
            if (checker === 1) {
                console.log("login");
                navigate("/home", {
                    state: {name: name.value, user: email.value, pass: password.value },
                });
            } else {
                alert("Incorrect email or password");
            }
        } else {
            alert("Enter password");
        }
    };

    const RegisterUser = (e) => {
        e.preventDefault()
        if (newuser.name.length < 1){
            alert("Please Enter a name")
        }
        else if(newuser.username.length < 1) {
            alert("Please enter a valid email")
        }
        else if(newuser.password.length < 1) {
            alert("Please enter a password")
        }
        else if(cp.password.length < 1) {
            alert("Please confirm password")
        }
        else if(cp.password != newuser.password){
            alert("Passwords dont match")
        }
        else{
            setuserdata([...userdata,newuser])
            console.log(userdata)
            alert("You can now login")
        }
    }

    const Login = ({display}) => {
        if (display) {
            return(
                <div>
                    <form onSubmit={Validator} className="loginform">
                        <label>
                            Email
                        <input
                            className="emailinputtab"
                            type="email"
                            name="email"
                            value={email.value}
                            onChange={handleemail}
                            placeholder="Enter Email"
                        />
                        </label>
                        <label>
                            Password
                            <input
                                className="inputtab"
                                type="password"
                                name="password"
                                value={password.value}
                                onChange={handlepass}
                                placeholder="Enter Password"
                            />
                        </label>
                        <label><input type="submit" value="submit" /></label>
                    </form>
                </div>
            )
        }
        else{
            return null
        }
    }

    const Register = ({display2}) => {
        if (display2) {
            return(
                <div>
                    <form className="loginform" onSubmit={RegisterUser}>
                        <label>
                            Enter name
                            <input className="np" type="text" placeholder="Enter Name" onChange={handlename}/>
                        </label>
                        <label>
                            Enter Email
                            <input className="emailinputtab" type="email" placeholder="Enter Email" onChange={handleregemail} />
                        </label>
                        <label>
                            Enter Password
                            <input className="ep" type="password" placeholder="Enter password" onChange={handleregpass}/>
                        </label>
                        <label>
                            Confirm Password
                            <input className="cp" type="password" placeholder="Confirm Password" onChange={handlecppass}/>
                        </label>
                        <label><input type="submit"></input></label>
                    </form>
                </div>
            )
        }
        else{
            return null
        }
    }

    const Show = (props) => {
        if (props.target.id === "login"){
            document.getElementById("login").style.backgroundColor = "#e05ad3"
            document.getElementById("login").style.borderBottom = "none"
            document.getElementById("register").style.backgroundColor = "aqua"
            document.getElementById("register").style.borderBottom = "2px solid black"
            setlogin(true)
            setreg(false)
        }
        else if(props.target.id === "register"){
            document.getElementById("register").style.backgroundColor = "#e05ad3";
            document.getElementById("login").style.backgroundColor = "aqua";
            document.getElementById("register").style.borderBottom = "none";
            document.getElementById("login").style.borderBottom = "2px solid black";
            setlogin(false)
            setreg(true)
        }
    }

    return (
        <div className="container">
            <h3>
                To access the site and view amazing recipes, you need to
                register or Login if you already have an account.
            </h3>
            <div className="form">
                <div className="buttons">
                    <button id="login" onClick={Show}>
                        LogIn
                    </button>
                    <button id="register" onClick={Show}>
                        Register
                    </button>
                </div>
                {Login({display: showlogin})}
                {Register({display2: showreg})}
            </div>
        </div>
    );
};

export default Register;
