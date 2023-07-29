import styled from 'styled-components';

const FooterBox = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140px;
  border-top: 2px solid #395b64;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const FooterBody = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: rgba(63, 78, 79, 0.9);

  .email {
    font-size: 14px;

    .email-send {
      color: rgba(63, 78, 79, 0.9);
      font-weight: 600;
      text-decoration: underline;
    }
  }

  .rights {
    font-size: 14px;
  }
`;

const Foot = () => {
  return (
    <FooterBox>
      <FooterBody>
        <p className='email'>
          마음에 드신다면&nbsp;
          <a className='email-send' href='mailto: tatahyeonv@gmail.com'>
            Email을 보내주십시오
          </a>
          .
        </p>

        <div className='rights'>ⓒ 2023 Joe Wonho. All Rights Reserved.</div>
      </FooterBody>
    </FooterBox>
  );
};

export default Foot;
