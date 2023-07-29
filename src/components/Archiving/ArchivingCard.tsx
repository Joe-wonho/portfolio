import styled from 'styled-components';
import check from '../../assets/png-file/check.png';

const ArchivingBody = styled.div<Ititle>`
  width: 417px;
  height: 268px;
  border: 2px solid transparent;
  border-radius: 20px;
  background-image: linear-gradient(rgba(250, 243, 240, 0.8), #f9f9f9), linear-gradient(315deg, #c4d7b2, #a0c49d);
  background-origin: border-box;
  background-clip: content-box, border-box;

  .archiving-wrapper {
    padding: 33px;
  }

  .archiving-box {
    display: flex;
    align-items: center;

    .archiving-img {
      width: 42px;
      height: 41px;
    }

    .archiving-box-txt {
      color: rgba(0, 0, 0, 0.7);
      font-size: 40px;
      font-weight: 700;
      padding-left: 7px;
    }
  }

  .archiving-link-box {
    padding: 20px 0 21px 0;

    .archiving-link {
      color: #4b69ac;
      text-shadow: 0 0 0 #4b69ac;
      text-decoration: none;
    }
  }

  .archiving-des {
    color: #2a2b35;
    font-size: 16px;
    text-shadow: 0 0 0 #2a2b35;
    padding-bottom: 23px;

    .bold {
      font-weight: 700;
      color: rgba(0, 0, 0, 0.3);
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 330px;
    margin-bottom: 20px;
    height: 295px;

    .archiving-box {
      .archiving-img {
        width: 35px;
        height: 34px;
      }

      .archiving-box-txt {
        font-size: 35px;
      }
    }

    .archiving-link-box {
      padding: 10px 0 13px 0;

      .archiving-link {
        font-size: 15.5px;
      }
    }
  }

  @media all and (max-width: 767px) {
    width: 380px;
    margin-bottom: 20px;
    height: ${({ title }) => (title === 'GitHub' ? `263px` : `263px`)};

    .archiving-link-box {
      padding: 0 0 15px 0;

      .archiving-link {
        font-size: 15.5px;
      }
    }
  }
`;

const ArchivingThree = styled.ul<Ititle>`
  height: 82px;
  color: #2a2b35;
  font-size: 14px;
  text-shadow: 0 0 0 #2a2b35;

  .check {
    width: 13px;
    height: 12.91px;
    margin-right: 11px;
  }

  .first-box,
  .second-box,
  .third-box {
    display: flex;
    height: 17px;
  }

  .second-box,
  .third-box {
    margin-top: 15px;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    .first-box,
    .second-box,
    .third-box {
      display: flex;
      line-height: 20px;
    }

    .first-box {
      height: ${({ title }) => (title === 'GitHub' ? `17px` : `37px`)};
    }

    .second-box,
    .third-box {
      height: ${({ title }) => (title === 'GitHub' ? `37px` : `37px`)};
    }

    .first-txt,
    .second-txt,
    .third-txt {
      display: flex;
      transform: translateY(-1.5px);
    }
  }

  @media all and (max-width: 767px) {
    .first-box,
    .second-box,
    .third-box {
      display: flex;
      line-height: 20px;
    }

    .second-box,
    .third-box {
      height: ${({ title }) => (title === 'GitHub' ? `17px` : `37px`)};
    }

    .first-txt,
    .second-txt,
    .third-txt {
      display: flex;
      transform: translateY(-1.5px);
    }
  }
`;

interface Ititle {
  title: string;
}

interface IArchivingBoxProps {
  img: any;
  title: string;
  link: string;
  linkTxt: string;
  des: string;
  firstTxt: string;
  secondTxt: string;
}

const ArchivingCard = ({ img, title, link, linkTxt, des, firstTxt, secondTxt }: IArchivingBoxProps) => {
  return (
    <ArchivingBody title={title}>
      <div className='archiving-wrapper'>
        <div className='archiving-box'>
          <img className='archiving-img' src={img} alt='github' />
          <p className='archiving-box-txt'>{title}</p>
        </div>

        <div className='archiving-link-box'>
          <a className='archiving-link' rel='noreferrer' href={link} target='_blank'>
            {linkTxt}
          </a>
        </div>

        <p className='archiving-des'>
          <span className='bold'>{des}</span>.
        </p>

        <ArchivingThree title={title}>
          <li className='first-box'>
            <img className='check' src={check} alt='check' />
            <p className='first-txt'>{firstTxt}</p>
          </li>

          <li className='second-box'>
            <img className='check' src={check} alt='check' />
            <p className='second-txt'>{secondTxt}</p>
          </li>
        </ArchivingThree>
      </div>
    </ArchivingBody>
  );
};

export default ArchivingCard;
