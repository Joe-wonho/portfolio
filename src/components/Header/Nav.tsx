import styled from 'styled-components';

const NavBox = styled.button`
  width: auto;
  height: 37px;
  color: #f9f9f9;
  font-size: 19px;
  font-weight: 700;
  border-radius: 3px;
  padding: 7px 15px;
  margin-left: 10px;
  transition: 0.1s;

  &:hover {
    color: #068fff;
    background-color: rgba(0, 0, 0, 0.6);
    transition: 0.1s;
    border-radius: 2rem;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 0px;
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    display: none;
  }

  @media all and (max-width: 479px) {
    display: none;
  }
`;

interface INavProps {
  item: string;
}

const Navigation = ({ item }: INavProps) => {
  const handleBtnClick = () => {
    if (item === 'Introduction') {
      window.scrollTo({
        top: 343,
        behavior: 'smooth',
      });
    }

    if (item === 'Skills') {
      window.scrollTo({
        top: 805,
        behavior: 'smooth',
      });
    }

    if (item === 'Archiving') {
      window.scrollTo({
        top: 1695,
        behavior: 'smooth',
      });
    }

    if (item === 'Projects') {
      window.scrollTo({
        top: 2350,
        behavior: 'smooth',
      });
    }
  };

  return <NavBox onClick={handleBtnClick}>{item}</NavBox>;
};

export default Navigation;
