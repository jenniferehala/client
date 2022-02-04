import React from 'react';
import '../views/SubNav_Chapter.css'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

function SubNav_Chapter() {
    return (
        <div className="sub">
            <div className='sub__left'>
                <a href="">Tracks</a>
                <a href="">Course</a>
                <a href="">Assignment Checklist</a>
                <a href="">Belt Exam History</a>
                <a href="">Take Exams</a>
            </div>
            <div className='sub__right'>
                <BookmarkIcon />
                <LiveTvIcon ></LiveTvIcon>
                <WarningAmberIcon ></WarningAmberIcon>
                <span className="toggle">
                    <ToggleOnIcon ></ToggleOnIcon>
                </span>
            </div>
        </div>);
}

export default SubNav_Chapter;
