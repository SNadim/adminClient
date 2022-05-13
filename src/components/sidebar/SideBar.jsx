import './sidebar.css';
import { LineStyle, TagFaces,  CopyrightRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
        <h3 className="sidebarTitle">Site Option</h3>
          <ul className="sidebarList">
            <Link to="/titleslogan" className='link'>
                <li className="sidebarListItem">
                <LineStyle className='sidebarIcon' />Title & Slogan
                </li>
            </Link>
            <li className="sidebarListItem">
            <TagFaces className='sidebarIcon' />Social Media
            </li>
            <li className="sidebarListItem">
            <CopyrightRounded className='sidebarIcon' />CopyRight
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Update Pages</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
            <LineStyle className='sidebarIcon' />About Us
            </li>
            <li className="sidebarListItem">
            <LineStyle className='sidebarIcon' />Contact Us
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
        <h3 className="sidebarTitle">Category Option</h3>
          <ul className="sidebarList">
            <Link to="/addcat" className="link" >
              <li className="sidebarListItem">
              <LineStyle className='sidebarIcon' />Add Category
              </li>
            </Link>
            <Link to="/categories" className='link'>
                <li className="sidebarListItem">
                <LineStyle className='sidebarIcon' />Category List
                </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
        <h3 className="sidebarTitle">Post Option</h3>
          <ul className="sidebarList">
            <Link to="/addpost" className='link'>
              <li className="sidebarListItem">
              <LineStyle className='sidebarIcon' />Add Post
              </li>
            </Link>
            <Link to="/postlist" className='link'>
              <li className="sidebarListItem">
              <LineStyle className='sidebarIcon' />Post List
              </li>
            </ Link>
            <Link to="/pending" className='link'>
              <li className="sidebarListItem">
              <LineStyle className='sidebarIcon' />Pending Post List
              </li>
            </ Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
