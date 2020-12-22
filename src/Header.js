import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import UserProfile from "./UserProfile";


function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontsize="large" className="header_backicon" />
                </IconButton>
            ) : (
                <Link to="/userProfile">
                    <IconButton>
                        <PersonIcon className="header_icon" fontSize="large" />
                    </IconButton>
                </Link>

                )}

            <Link to="/">
                {/* <img className="header_logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder logo" /> */}
            </Link>

            <Link to="/chat">
                <IconButton>
                    <QuestionAnswerIcon className="header_icon" fontSize="large" />
                </IconButton>
            </Link>



        </div>
    )
}

export default Header;