import './titleSlogan.css';
import logo from '../../components/topBar/icon.png';

export default function TitleSlogan() {
  return (
    <div className='titleSlogan'>
        <h3 className='tsTitle'>Update Site Title and Description</h3>
        <div className="titleSloganWrapper">
            <form className="tsForm">
                <div className="tsItem">
                    <label>Website Title</label>
                    <input type="text" className='tsInput' placeholder='Enter Website title...' />
                </div>
                <div className="tsItem">
                    <label>Website Slogan</label>
                    <input type="text" className='tsInput' placeholder='Enter Website Slogan...' />
                </div>
                <div className="tsItem">
                    <label>Upload Logo</label>
                    <input type="file" />
                </div>
                <div className="tsItem">
                    <button className="tsSubmit">Update</button>
                </div>
            </form>
            <img src={logo} alt="" className="tsLogo" />
        </div>
    </div>
  )
}
