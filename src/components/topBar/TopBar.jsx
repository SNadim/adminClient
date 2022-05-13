import './topBar.css';
import logo from './icon.png'
import { LineStyle, TagFaces,  CopyrightRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className='topBar'>
        <div className="topBarTop">
            <div className="topBarWrapper">
                <div className="topLeft">
                    <img src={logo} alt="" className="logo" />
                    <div className="topContent">
                        <span className="topBarTitle">Science Blog</span>
                        <span className="topBarSiteAddress">scienceblog.com</span>
                    </div>
                </div>
                <div className="topRight">
                    <div className="topRightItem"><img src="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png" alt="" className="adminProfile" /></div>
                    <div className="topRightItem"><span>Shariar Nadim</span></div>
                    <div className="topRightItem"><span>|</span></div>
                    <div className="topRightItem"><span>Logout</span></div>
                    
                </div>
            </div>
        </div>
        <div className="topBarBottom">
            <div className="topBarWrapper">
            <div className="topLeft">
                <Link to="/" className='link'>
                    <div className="topLeftItem">
                        <LineStyle className='topBarIcon'/> Dashboard
                    </div>
                </Link>
                <Link to="/userList" className='link'>
                <div className="topLeftItem">
                    <LineStyle className='topBarIcon'/> User Profile
                </div>
                </Link>
                <div className="topLeftItem">
                    <LineStyle className='topBarIcon'/> Change Password
                </div>
                <div className="topLeftItem">
                    <LineStyle className='topBarIcon'/> Inbox
                </div>
                <div className="topLeftItem">
                    <LineStyle className='topBarIcon'/> Visit Website
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
