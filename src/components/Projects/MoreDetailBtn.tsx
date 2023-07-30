import styled from 'styled-components';
import useBodyScrollLock from '../Modal/useBodyScrollLock';

const MoreDetailBtnBox = styled.div`
  margin-top: 35px;
  width: 290px;
  height: 50px;
  border-radius: 3px;
  transition: 0.08s;
  background: linear-gradient(to bottom right, #aac8a7, #c3edc0);
  box-shadow: inset 1px 1px 0px 0px rgba(170, 200, 167, 0.5), 1px 1px 2px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(to bottom right, #a0c49d 0%, #c4d7b2 74%);
    transform: scale(1.02, 1.02);
    transition: 0.08s;
  }

  .more-btn {
    width: 290px;
    height: 50px;
    color: #30313e;
    font-size: 14.5px;
    font-weight: 700;
    text-shadow: 0 0 0 #30313e;
    border-radius: 3px;
    text-shadow: none;

    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0.5px 0.5px 0.3px rgba(170, 200, 167, 0.5);
    transition: 0.08s;

    &:hover {
      box-shadow: inset 2px 2px 1.8px rgba(170, 200, 167, 0.5);
      transition: 0.08s;
    }
  }
  @media all and (max-width: 480px) {
    width: 250px;
    height: 45px;
    .more-btn {
      width: 250px;
      height: 45px;
    }
  }
`;

interface IMoreDetailProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MoreDetailBtn = ({ setModal }: IMoreDetailProps) => {
  const { lockScroll } = useBodyScrollLock();

  return (
    <MoreDetailBtnBox>
      <button
        className='more-btn'
        onClick={() => {
          lockScroll();
          setModal(true);
        }}
      >
        More Details
      </button>
    </MoreDetailBtnBox>
  );
};

export default MoreDetailBtn;
