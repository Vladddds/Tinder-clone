import React from 'react'
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import './SwipeButtons.css';

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat">
                <ReplayIcon fontsize="large" />
            </IconButton>
            <IconButton className="swipeButtons_left">
                <CloseIcon fontsize="large" />
            </IconButton>
            <IconButton className="swipeButtons_star">
                <StarRateIcon fontsize="large" />
            </IconButton>
            <IconButton className="swipeButtons_right">
                <FavoriteIcon fontsize="large" />
            </IconButton>
            <IconButton className="swipeButtons_lightning">
                <FlashOnIcon fontsize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons