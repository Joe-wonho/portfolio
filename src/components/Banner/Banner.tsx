import styled, { keyframes } from 'styled-components';

const BannerBox = styled.div`
  width: 100%;
  height: 415px;
  background-color: #f4f9f9;

  display: flex;
  justify-content: center;

  @media all and (min-width: 480px) and (max-width: 767px) {
    justify-content: none;
    margin: 0 auto;
  }

  @media all and (max-width: 479px) {
    justify-content: none;
    margin: 0 auto;
  }
`;

const BannerBody = styled.div`
  width: 1440px;
  height: 550px;
  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    width: 60px;
    height: 350px;
    position: absolute;
    top: 65px;
    right: 0%;
    background: linear-gradient(to left, #ccf2f4, transparent);
  }

  &::after {
    content: '';
    width: 60px;
    height: 350px;
    position: absolute;
    top: 65px;
    left: 0%;
    background: linear-gradient(to left, transparent, #ccf2f4);
  }
  @media all and (min-width: 1440px) {
    &::before {
      content: '';
      width: auto;
      height: 485px;
      position: absolute;
      top: 65px;
      right: 0%;
      background: linear-gradient(to left, #ccf2f4, transparent);
    }

    &::after {
      content: '';
      width: auto;
      height: 485px;
      position: absolute;
      top: 65px;
      left: 0%;
      background: linear-gradient(to left, transparent, #ccf2f4);
    }
  }
`;

const titleText = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }

  92% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
const TextBody = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 67.5px;
  cursor: default;
  animation: ${titleText} 1s ease-in-out;

  .text-box {
    width: 974px;
    height: 413px;
    display: flex;
    flex-direction: column;
    font-size: 85px;
    font-weight: 700;
    z-index: 1;
  }

  .text {
    line-height: 108%;
  }

  .hi {
    color: transparent;
    background: linear-gradient(to bottom right, #00d2ff, #928dab);
    background-clip: text;
    -webkit-background-clip: text;
  }

  .im {
    color: transparent;
    background: linear-gradient(to bottom right, #00d2ff, #928dab, #3a7bd5, #3a6073);
    background-clip: text;
    -webkit-background-clip: text;
  }

  .des {
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
    padding: 18px 0 45px 3px;
  }

  .front {
    color: transparent;
    background: linear-gradient(to bottom right, #00d2ff, #928dab, #3a7bd5, #3a6073);
    background-clip: text;
    -webkit-background-clip: text;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    .text-box {
      align-items: center;
    }
    .text {
      line-height: 90%;
      transform: translateX(-10px);
    }

    .des {
      transform: translateX(-135px);
    }

    .hi,
    .im,
    .front {
      font-size: 73px;
    }
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    .text-box {
      align-items: center;
    }
    .text {
      line-height: 45%;
      transform: translateX(-10px);
    }

    .des {
      transform: translateX(-21px);
    }

    .hi,
    .im,
    .front {
      font-size: 45px;
    }
  }

  @media all and (max-width: 479px) {
    .text-box {
      align-items: center;
    }
    .text {
      line-height: 36%;
      transform: translateX(-10px);
    }

    .des {
      transform: translateX(-23.5px);
      font-size: 12px;
    }

    .hi,
    .im,
    .front {
      font-size: 40px;
    }
  }
`;

const Banner = () => {
  return (
    <BannerBox className='main'>
      <BannerBody className='main-bg'>
        <TextBody>
          <div className='text-box'>
            <p className='text'>
              <span className='hi'>안녕하세요</span>
              <br />
              <span className='im'>프론트엔드 개발자</span>
              <br />
              <span className='front'>조원호 입니다.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <br />
            </p>
            <span className='des'></span>
          </div>
        </TextBody>
      </BannerBody>
    </BannerBox>
  );
};

export default Banner;
