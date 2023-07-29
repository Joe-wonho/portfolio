import styled from 'styled-components';
import github from '../../assets/svg-file/github.svg';
import velog from '../../assets/png-file/velog.png';

import ArchivingCard from './ArchivingCard';

const ArchivingBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ArchivingBody = styled.div`
  width: 974px;
  height: 570px;
  margin-top: 84px;
  padding: 0 0 98.5px 0;
  border-bottom: 2px solid #edecee;

  .archiving {
    padding: 0 0 43px 0;

    .archiving-txt {
      width: 255px;
      height: 61px;
      color: rgba(0, 0, 0, 0.8);
      font-size: 50px;
      font-weight: 700;
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;
    height: 570px;
    .archiving {
      padding: 20px 0 83px 0;
    }
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 330px;
    height: 730px;
    font-size: 35px;

    .skills-bold {
      font-size: 15px;
    }

    .archiving {
      .archiving-txt {
        font-size: 40px;
      }
    }
  }

  @media all and (max-width: 479px) {
    width: 330px;
    height: 730px;
    font-size: 35px;

    .skills-bold {
      font-size: 15px;
    }

    .archiving {
      .archiving-txt {
        font-size: 35px;
      }
    }
  }
`;

const ArchivingList = styled.div`
  display: flex;

  .divider {
    padding: 0 65.67px 0 67px;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;

    .divider {
      padding: 0 7px 0 7px;
    }
  }

  @media all and (max-width: 767px) {
    display: flex;
    flex-direction: column;

    .divider {
      padding: 0 65.67px 0 67px;
    }
  }
`;

const Archiving = () => {
  return (
    <ArchivingBox>
      <ArchivingBody>
        <div className='archiving'>
          <span className='archiving-txt'>Archiving</span>
        </div>

        <ArchivingList>
          <ArchivingCard
            img={github}
            title='GitHub'
            link='https://github.com/Joe-wonho'
            linkTxt='github.com/Joe-wonho'
            des='소스 코드 저장 공간'
            firstTxt='팀이나 개인 프로젝트 소스 코드'
            secondTxt='코딩 연습을 위해 작성한 개인 소스 코드'
            // secondTxt='코딩 과제를 하기 위해 작성했던 소스 코드'
          />

          <div className='divider'></div>

          <ArchivingCard
            img={velog}
            title='Velog'
            link='https://velog.io/@whdnjsgh22'
            linkTxt='velog.io/@whdnjsgh22'
            des='복습 및 공유를 위한 블로그'
            firstTxt='수업이나 공부했던 내용들을 복습하기 위해 기록'
            secondTxt='프로젝트를 하며 궁금했던 내용들을 공부하며 정리'
          />
        </ArchivingList>
      </ArchivingBody>
    </ArchivingBox>
  );
};

export default Archiving;
