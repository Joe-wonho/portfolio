import styled from 'styled-components';
import htmlSvg from '../../assets/svg-file/html.svg';
import cssSvg from '../../assets/svg-file/css.svg';
import jsSvg from '../../assets/svg-file/js.svg';
import tsSvg from '../../assets/svg-file/ts.svg';
import reactSvg from '../../assets/svg-file/react.svg';
import reduxSvg from '../../assets/svg-file/redux.svg';
import recoilSvg from '../../assets/svg-file/recoil.svg';
import styledSvg from '../../assets/svg-file/styled.svg';
import gitSvg from '../../assets/svg-file/git.svg';
import s3Svg from '../../assets/svg-file/s3.svg';
const SkillsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const SkillsBody = styled.div`
  width: 974px;
  height: 820px;
  margin-top: 84px;
  padding: 0 0 84px 0;
  border-bottom: 2px solid #edecee;
  .skills {
    padding-bottom: 48px;
  }

  .skills-txt {
    width: 255px;
    height: 61px;
    color: rgba(0, 0, 0, 0.8);
    font-size: 50px;
    font-weight: 700;
  }

  .skills-bold {
    color: #262626;
    font-size: 22px;
    font-weight: 700;
  }

  p {
    color: #f9f9f9;
    font-size: 18px;
    font-weight: 700;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;
    height: 782px;
    .skills-bold {
      font-size: 17px;
    }

    .skills {
      padding-bottom: 30px;
    }
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 330px;
    height: 580px;
    font-size: 35px;

    .skills-bold {
      font-size: 15px;
    }

    .skills {
      .skills-txt {
        font-size: 40px;
      }
    }
  }

  @media all and (max-width: 479px) {
    width: 330px;
    height: 580px;
    font-size: 35px;

    .skills-bold {
      font-size: 15px;
    }

    .skills {
      .skills-txt {
        font-size: 35px;
      }
    }
  }
`;

const SkillsContainer = styled.div`
  width: 581.5px;
  height: 225px;

  .divider {
    width: 229px;
    height: 2px;
    background-color: #f6f1f8;
    margin: 5px 0 13px 0;
  }

  .item-container {
    width: 579.5px;
    height: 180px;
    display: flex;
    gap: 20px;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;
    height: 210px;

    .divider {
      width: 177px;
    }

    .item-container {
      width: 440px;
      height: 136px;
      display: flex;
    }
  }

  @media all and (max-width: 767px) {
    height: 150px;

    .divider {
      width: 158px;
    }

    .item-container {
      width: 275px;
      height: 85px;
      display: flex;
    }
  }
`;

const StackItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  img {
    width: 80px;
    border-radius: 10px;
  }
  p {
    color: rgba(0, 0, 0, 0.8);
  }
  .styled-com {
    font-size: 15px;
  }
  @media all and (max-width: 767px) {
    img {
      width: 50px;
    }
    p {
      font-size: 13px;
      font-weight: 700;
    }
    .styled-com {
      font-size: 11px;
    }
  }
`;

const Skills = () => {
  return (
    <SkillsBox>
      <SkillsBody>
        <div className='skills'>
          <span className='skills-txt'>Skills</span>
        </div>

        <SkillsContainer>
          <p className='skills-bold'>Programming SkillsContainer</p>
          <div className='divider'></div>
          <div className='item-container'>
            <StackItem>
              <img src={htmlSvg} alt='html-svg' />
              <p>HTML</p>
            </StackItem>
            <StackItem>
              <img src={cssSvg} alt='css-svg' />
              <p>CSS</p>
            </StackItem>
            <StackItem>
              <img src={jsSvg} alt='js-svg' />
              <p>JavaScript</p>
            </StackItem>
            <StackItem>
              <img src={tsSvg} alt='ts-svg' />
              <p>TypeScript</p>
            </StackItem>
          </div>
        </SkillsContainer>
        <SkillsContainer>
          <p className='skills-bold'>Frameworks & Libraries</p>
          <div className='divider'></div>
          <div className='item-container'>
            <StackItem>
              <img src={reactSvg} alt='react-svg' />
              <p>React</p>
            </StackItem>
            <StackItem>
              <img src={reduxSvg} alt='redux-svg' />
              <p>Redux</p>
            </StackItem>
            <StackItem>
              <img src={recoilSvg} alt='recoil-svg' />
              <p>Recoil</p>
            </StackItem>
            <StackItem>
              <img src={styledSvg} alt='styled-svg' />
              <p className='styled-com'>
                Styled
                <br />
                Components
              </p>
            </StackItem>
          </div>
        </SkillsContainer>
        <SkillsContainer>
          <p className='skills-bold'>Others</p>
          <div className='divider'></div>
          <div className='item-container'>
            <StackItem>
              <img src={gitSvg} alt='git-svg' />
              <p>Git</p>
            </StackItem>
            <StackItem>
              <img src={s3Svg} alt='s3-svg' />
              <p>AWS S3</p>
            </StackItem>
          </div>
        </SkillsContainer>
      </SkillsBody>
    </SkillsBox>
  );
};

export default Skills;
