import styled from 'styled-components';
import { useRef, useEffect } from 'react';
// import xBtn from '../../assets/png-file/x-btn.png';
import { IModalData } from '../Projects/data';
import useBodyScrollLock from './useBodyScrollLock';
import checkImg from '../../assets/png-file/check.png';
const Container = styled.div`
  z-index: 15;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  transition: all 0.3s linear;
  width: 100%;
  height: 100%;
  &.modal-visible {
    opacity: 1;
    visibility: visible;
  }
  &.modal-hidden {
    visibility: hidden;
    opacity: 0;
  }
`;
const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0 15px 15px;
  width: 620px;
  height: 680px;
  min-width: 340px;
  background-color: white;
  z-index: 12;
  border-radius: 10px;

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 590px;
    height: 680px;
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 460px;
    height: 560px;
  }
  @media all and (max-width: 479px) {
    width: 320px;
    height: 520px;
  }
`;
const TitleBox = styled.div`
  font-size: 23px;
  font-weight: 700;
  border-bottom: 2px solid #d8d9da;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: 20px;
  }
  @media all and (max-width: 479px) {
    font-size: 19px;
  }
`;
const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-right: 15px;
  padding-top: 15px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ddd;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .title {
    font-size: 18px;
    text-shadow: 0.05px 0.05px black;
    padding: 10px 0;
    img {
      width: 15px;
      margin-right: 10px;
    }
  }
  .content {
    font-size: 15px;
    text-shadow: none;
    margin-bottom: 10px;
    line-height: 17px;
  }
  .etc {
    font-size: 14px;
    padding: 8px 0;
    display: flex;
    align-items: center;
    a {
      margin-left: 6px;
      color: #82a0e8;
      text-shadow: 0 0 0 #82a0e8;
      text-decoration: underline;
    }
  }
  @media all and (max-width: 767px) {
    .title {
      font-size: 15px;
      img {
        width: 13px;
      }
    }
    .content {
      font-size: 14px;
      line-height: 15px;
      text-shadow: none;
    }
    .etc {
      font-size: 13px;
    }
  }
`;
const TableBox = styled.table`
  border: 1px solid #dddddd;
  table-layout: fixed;
  th {
    font-size: 15px;
    font-weight: 600;
    border: 1px solid #dddddd;
    padding: 8px 0;
  }
  td {
    font-size: 14px;
    border: 1px solid #dddddd;
    padding: 8px 6px;
    .td-p {
      padding: 4px 0;
    }
  }
  @media all and (max-width: 767px) {
    th {
      font-size: 15px;
    }
    td {
      font-size: 14px;
      line-height: 15px;
    }
  }
`;

interface IModalDataProps {
  id: number;
  modalOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalData: IModalData;
}

const DetailModal = ({ id, modalOpen, setModal, modalData }: IModalDataProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { openScroll } = useBodyScrollLock();

  const {
    title,
    introContent,
    deployLink,
    deployTxt,
    githubLink,
    githubTxt,
    stacks,
    featuresContent,
    backgroundContent,
  } = modalData;

  useEffect(() => {
    const outsideClick = (e: MouseEvent) => {
      if (modalOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        openScroll();
        setModal(false);
      }
    };
    scrollRef.current?.scrollTo(0, 0);
    document.addEventListener('mousedown', outsideClick);
    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, [modalOpen, setModal]);

  // const onClickCloseBtn = () => {
  //   openScroll();
  //   setModal(false);
  //   modalRef.current?.scrollTo(0, 0);
  // };

  return (
    <>
      <Container className={modalOpen ? 'modal-visible' : 'modal-hidden'}>
        <ModalBox ref={modalRef}>
          <TitleBox>{title}</TitleBox>
          <ListBox ref={scrollRef}>
            <ListItem>
              <p className='title'>
                <img src={checkImg} alt='check-img' />
                서비스 소개
              </p>
              {introContent.map((el, idx) => (
                <p key={idx} className='content'>
                  {el}
                </p>
              ))}
              <p className='etc'>
                ⦁ 배포 링크 :
                <a rel='noreferrer' href={deployLink} target='_blank'>
                  {deployTxt}
                </a>
              </p>
              <p className='etc'>
                ⦁ GitHub 링크 :
                <a rel='noreferrer' href={githubLink} target='_blank'>
                  {githubTxt}
                </a>
              </p>
              <p className='etc'>⦁ 기술 스택 : {stacks}</p>
            </ListItem>
            <ListItem>
              {deployTxt === 'Blog' ? (
                <>
                  <p className='title'>
                    <img src={checkImg} alt='check-img' />
                    보완한 점
                  </p>
                </>
              ) : (
                <>
                  <p className='title'>
                    <img src={checkImg} alt='check-img' />
                    나의 역할 - 팀장
                  </p>
                  <p className='content'>첫 프로젝트를 팀장을 맡아 진행하게 되었습니다.</p>
                  <p className='content'>
                    협업 툴과 의사소통 방법, 일정관리 등을 조율하고 결정하며 프론트와 백의 전반적인 소통을
                    담당하였습니다.
                  </p>
                  <p className='content'>프로젝트에서 맡았던 기능적인 부분은 아래와 같습니다.</p>
                  <TableBox>
                    <thead>
                      <tr>
                        <th>로그인 / 회원가입 </th>
                        <th>Artist 페이지 제작</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p className='td-p'>로그인과 회원가입을 위한 페이지입니다.</p>
                          <p className='td-p'>회원가입의 유형은 2가지로 팬 / 아티스트 로 가입이 가능합니다.</p>
                          <p className='td-p'>회원가입 유형에 따라 글의 작성권한이 달라집니다.</p>
                          <p className='td-p'>인증방식과 전역상태관리에 대해 잘 알게 되었습니다.</p>
                        </td>
                        <td>
                          <p className='td-p'>
                            아티스트가 글을 작성하면 팬들이 이를 확인하고 소통할 수 있는 공간입니다.
                          </p>
                          <p className='td-p'>회원가입 유형이 아티스트인 경우만 글을 작성할 수 있습니다.</p>
                          <p className='td-p'>이미지 업로드 공용 컴포넌트를 제작하였습니다.</p>
                          <p className='td-p'>이미지 처리 방식과 기본 CRUD에 대해 잘 알게 되었습니다.</p>
                        </td>
                      </tr>
                    </tbody>
                  </TableBox>
                </>
              )}
            </ListItem>
            <ListItem>
              <p className='title'>
                <img src={checkImg} alt='check-img' />
                주요 기능
              </p>
              {featuresContent.map((el, idx) => (
                <p key={idx} className='content'>
                  {el}
                </p>
              ))}
            </ListItem>
            <ListItem>
              <p className='title'>
                <img src={checkImg} alt='check-img' />
                제작 배경
              </p>
              {backgroundContent.map((el, idx) => (
                <p key={idx} className='content'>
                  {el}
                </p>
              ))}
            </ListItem>
          </ListBox>
        </ModalBox>
      </Container>
    </>
  );
};

export default DetailModal;
