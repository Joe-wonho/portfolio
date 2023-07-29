import styled from 'styled-components';
import peopleImg from '../../assets/png-file/people.png';
import emailImg from '../../assets/png-file/email.png';
import schoolImg from '../../assets/png-file/school.png';
import locationImg from '../../assets/png-file/location.png';

const IntroductionBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const IntroductionBody = styled.div`
  width: 974px;
  height: 440px;
  padding: 85px 0 84px 0;
  border-bottom: 2px solid #edecee;

  .about-me {
    padding: 0 0 55px 0;

    .about-me-txt {
      width: 255px;
      height: 61px;
      color: rgba(0, 0, 0, 0.8);
      font-size: 50px;
      font-weight: 700;
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 355px;

    .about-me {
      .about-me-txt {
        font-size: 40px;
      }
    }
  }

  @media all and (max-width: 479px) {
    width: 330px;
    font-size: 35px;

    .about-me {
      .about-me-txt {
        font-size: 35px;
      }
    }
  }
`;

const InforBox = styled.div`
  width: 564px;
  height: 153px;

  display: flex;
  justify-content: space-between;

  .bold {
    color: rgb(38, 39, 49);
    font-size: 20px;
    font-weight: 700;
  }

  .not-bold {
    color: #2a2b35;
    font-size: 16px;
    text-shadow: 0 0 0 #2a2b35;
  }

  .name-area {
    height: 153px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .college {
    height: 153px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .name {
    display: flex;
    width: 113px;
    height: 58px;

    .people-img {
      width: 30px;
      height: 30px;
    }

    .name-txt-box {
      padding: 4px 0 0 33px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
  }

  .email {
    display: flex;
    width: 217px;
    height: 56px;

    .email-img {
      width: 30px;
      height: 24px;
    }

    .email-txt-box {
      padding: 2.2px 0 0 33px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
  }

  .college-area {
    display: flex;
    width: 144px;
    height: 58px;

    .college-img {
      width: 32px;
      height: 32px;
    }

    .college-txt-box {
      padding: 4px 0 0 33px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
  }

  .address {
    display: flex;
    width: 126px;
    height: 56px;

    .location-img {
      width: 26px;
      height: 30px;
    }

    .address-txt-box {
      padding: 2.2px 0 0 39px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 366px;

    .bold {
      font-size: 16px;
    }

    .not-bold {
      font-size: 12px;
    }
  }

  .name-area {
    width: 180px;
  }

  .name {
    height: 50px;
    .people-img {
      width: 28px;
      height: 28px;
    }

    .name-txt-box {
      padding: 7px 0 0 25px;
    }
  }

  .email {
    height: 48px;
    .email-img {
      width: 28px;
      height: 22px;
    }

    .email-txt-box {
      padding: 4px 0 0 25px;
    }
  }

  .college-area {
    height: 50px;
    display: flex;
    justify-content: end;
    padding-right: 13px;

    .college-img {
      width: 28px;
      height: 28px;
    }

    .college-txt-box {
      padding: 7px 0 0 20px;
    }
  }

  .address {
    height: 48px;
    display: flex;
    justify-content: end;
    padding-right: 2px;

    .location-img {
      width: 24px;
      height: 28px;
    }

    .address-txt-box {
      padding: 4px 0 0 25px;
    }
  }

  @media all and (max-width: 479px) {
    width: 330px;

    .bold {
      font-size: 16px;
    }

    .not-bold {
      font-size: 12px;
    }
  }

  .name-area {
    width: 180px;
  }

  .name {
    height: 50px;
    .people-img {
      width: 28px;
      height: 28px;
    }

    .name-txt-box {
      padding: 7px 0 0 25px;
    }
  }

  .email {
    height: 48px;
    .email-img {
      width: 28px;
      height: 22px;
    }

    .email-txt-box {
      padding: 4px 0 0 25px;
    }
  }

  .college-area {
    height: 50px;
    display: flex;
    justify-content: end;
    padding-right: 13px;

    .college-img {
      width: 28px;
      height: 28px;
    }

    .college-txt-box {
      padding: 7px 0 0 20px;
    }
  }

  // 주소지
  .address {
    height: 48px;
    display: flex;
    justify-content: end;
    padding-right: 2px;

    .location-img {
      width: 24px;
      height: 28px;
    }

    .address-txt-box {
      padding: 4px 0 0 25px;
    }
  }
`;

const Introduction = () => {
  return (
    <IntroductionBox>
      <IntroductionBody>
        <div className='about-me'>
          <span className='about-me-txt'>MY Introduction</span>
        </div>

        <InforBox>
          <div className='name-area'>
            <div className='name'>
              <img className='people-img' src={peopleImg} alt='people' />
              <p className='name-txt-box'>
                <span className='bold'>Name</span>
                <span className='not-bold'>조원호</span>
              </p>
            </div>

            <div className='email'>
              <img className='email-img' src={emailImg} alt='email' />
              <p className='email-txt-box'>
                <span className='bold'>Email</span>
                <a className='not-bold' href='mailto: whdnjsgh22@gmail.com'>
                  whdnjsgh22@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className='college'>
            <div className='college-area'>
              <img className='college-img' src={schoolImg} alt='college' />
              <p className='college-txt-box'>
                <span className='bold'>College</span>
                <span className='not-bold'>서경 대학교</span>
              </p>
            </div>

            <div className='address'>
              <img className='location-img' src={locationImg} alt='address' />
              <p className='address-txt-box'>
                <span className='bold'>Address</span>
                <span className='not-bold'>서울</span>
              </p>
            </div>
          </div>
        </InforBox>
      </IntroductionBody>
    </IntroductionBox>
  );
};

export default Introduction;
