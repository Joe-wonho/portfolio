import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Nav from './Nav';

const HeaderBox = styled.header`
  width: 100%;
  height: 65px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
`;

const HeaderBody = styled.div`
  width: 1425px;
  padding: 0 51px 0 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    color: #f9f9f9;
    font-size: 28px;
    font-weight: 600;
    user-select: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media all and (max-width: 479px) {
    padding: 0 0 0 20px;
    .logo {
      font-size: 24px;
    }
  }
`;

interface INavItem {
  id: number;
  item: string;
}

const buttonTxt: INavItem[] = [
  {
    id: 1,
    item: 'Introduction',
  },
  {
    id: 2,
    item: 'Skills',
  },
  {
    id: 3,
    item: 'Archiving',
  },
  {
    id: 4,
    item: 'Projects',
  },
];

const Header = () => {
  const [btnHovered, setBtnHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // 모바일, 태블릿 여부

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeys = ['android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
    const isMobileDevice = mobileKeys.some((keyword) => userAgent.includes(keyword));

    setIsMobile(isMobileDevice);
  }, []);

  const handleMouseEnter = () => {
    setBtnHovered(true);
  };

  const handleMouseLeave = () => {
    setBtnHovered(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <HeaderBox>
      <HeaderBody>
        <div onClick={handleLogoClick} className='logo'>
          WonHo Portfolio
        </div>

        <div className='nav-box' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {buttonTxt.map((el) => (
            <Nav key={el.id} item={el.item} />
          ))}
        </div>
      </HeaderBody>
    </HeaderBox>
  );
};

export default Header;
