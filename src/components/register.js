import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const userdata = [
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
    ];

    const navigate = useNavigate();

    const [butstate, setbutstate] = useState([true, false]);

    const [username, setusername] = useState({ value: "" });

    const [password, setpassword] = useState({ value: "" });

    const [name, setname] = useState({ value: "" });

    const handlename = (e) => {
        setusername({ value: e.target.value });
    };

    const handlepass = (e) => {
        setpassword({ value: e.target.value });
    };

    const Validator = (e) => {
        e.preventDefault();
        let checker = 0;
        if (username.value.length < 1) {
            alert("Enter Username");
        } else if (password.value.length > 0) {
            userdata.map((user, index) => {
                if (
                    user.username === username.value &&
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
                    state: { user: username.value, pass: password.value },
                });
            } else {
                alert("Incorrect email or password");
            }
        } else {
            alert("Enter password");
        }
    };

    const changecolor = (event) => {
        if (event.target.id === "login") {
            let var1 = document.getElementById("login");
            var1.style.backgroundColor = "#e05ad3";
            var1.style.borderBottom = "none";
            document.getElementById("register").style.backgroundColor = "";
            document.getElementById("register").style.borderBottom =
                "2px solid black";
            setbutstate([true, false]);
        } else if (event.target.id === "register") {
            document.getElementById("register").style.backgroundColor =
                "#e05ad3";
            document.getElementById("login").style.backgroundColor = "aqua";
            document.getElementById("register").style.borderBottom = "none";
            document.getElementById("login").style.borderBottom =
                "2px solid black";
            setbutstate([false, true]);
        }
    };

    const Show = (props) => {
        if (props.showval[0] === true && props.showval[1] === false) {
            return (
                <div>
                    <form onSubmit={Validator} className="loginform">
                        <label>
                            Username
                            <input
                                className="inputtab"
                                type="email"
                                name="username"
                                value={username.value}
                                onChange={handlename}
                                placeholder="Enter Username"
                            />
                        </label>
                        <br />
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
                        <br />
                        <input type="submit" value="submit" />
                    </form>
                </div>
            );
        } else if (props.showval[1] === true && props.showval[0] === false) {
            return null;
        }
    };

    return (
        <div className="container">
            <h3>
                To access the site and view amazing recipes, you need to
                register or Login if you already have an account.
            </h3>
            <div className="form">
                <div className="buttons">
                    <button id="login" onClick={changecolor}>
                        LogIn
                    </button>
                    <button id="register" onClick={changecolor}>
                        Register
                    </button>
                </div>
                {Show({ showval: butstate })}
            </div>
        </div>
    );
};

export default Register;

// <div>
//                      <form >
//                         <label>
//                             Enter Email
//                             <input  type="text"  placeholder="Enter Email" />
//                         </label><br />
//                         <label>
//                             Password
//                             <input type="password" name="password"  placeholder="Enter Password" />
//                         </label><br />
//                         <input type="submit" value="submit" />
//                     </form>
//                 </div>
