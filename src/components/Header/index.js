import Menu from '../Menu';
import bannerImg from '../../assets/images/banner-1.png'
import arrowIcon from '../../assets/images/arrow-icon.png';
import './index.css';

const Header = () => {
  return (
    <div className="header">
      <Menu hasSwitch />
      <div className="header-content">
        <div className="left-block">
          <h2>dLBS</h2>
          <h3>Your Life, Your Space, Your World</h3>
          <div className="btn-group">
            <img src={arrowIcon} alt="arrowIcon" />
            <span>experience now</span>
          </div>
          <div className="subtitle-group">Discover Your World, Collect Your GEMs, Complete Your Missions, Connect, Create, and Explore Your World, the future of your personal universe is here.</div>
        </div>
        <img src={bannerImg} alt='banner' />
      </div>
    </div>
  );
}

export default Header;