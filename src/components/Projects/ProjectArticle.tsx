import styled from 'styled-components';
import { useState } from 'react';
import check from './../../assets/png-file/check.png';

import MoreDetailBtn from './MoreDetailBtn';
import { IProjectData } from './data';
import DetailModal from '../Modal/DetailModal';
const ProjectArticleBox = styled.article`
  display: flex;
  flex-wrap: wrap;
  padding: 84px 0 64px 0;
  border-bottom: 2px solid #edecee;
  .left-img {
    width: 515px;
  }
`;

const RightBox = styled.div`
  width: 434px;
  height: auto;
  padding: 5px 0 0 42px;

  .date {
    color: rgba(39, 55, 77, 0.8);
    font-size: 12px;
    font-weight: 700;
  }

  .project-name {
    color: #2c3333;
    font-size: 37px;
    font-weight: 700;
    padding-top: 7px;
  }

  .project-team {
    color: #2c3333;
    font-size: 17px;
    font-weight: 700;
    padding: 14px 0 14px 0;
  }
  .contri {
    color: #61647a;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 7px;
  }

  .project-stacks {
    color: rgba(39, 55, 77, 0.8);
    font-size: 14px;
    line-height: 20px;
  }

  .line-box {
    display: flex;
    padding: 17px 0 33px 0;

    .divider {
      width: 100%;
      height: 1.5px;
      background-color: #61647a;
    }
  }

  .project-des {
    color: rgba(39, 55, 77, 0.9);
    font-size: 14.5px;
    text-shadow: 0 0 0 rgba(39, 55, 77, 0.8);
    line-height: 21px;
    padding-bottom: 20px;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 550px;
    padding: 5px 0 0 0;

    .date {
      padding-top: 18px;
    }

    .line-box {
      .divider {
        width: 470px;
      }
    }
  }

  @media all and (max-width: 767px) {
    width: 355px;
    padding: 5px 0 0 0;

    .project-des {
      width: 340px;
    }

    .date {
      padding-top: 15px;
    }
  }
`;

const FeaturesAndLink = styled.div`
  padding-top: 23px;
  .more-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .check {
    width: 15px;
    height: 14px;
    margin-right: 7px;
    transform: translateY(1px);
  }

  .check-box {
    width: 87px;
    height: 24px;

    display: flex;
    align-items: center;

    .check {
      transform: translateY(-1px);
    }

    span {
      color: rgba(39, 55, 77, 0.9);
      font-size: 16px;
      font-weight: 700;
    }
  }

  .features {
    display: flex;

    .features-des {
      width: 283px;
      height: auto;
      color: rgba(39, 55, 77, 1);
      font-size: 14px;
      text-shadow: 0 0 0 #ededed;
      line-height: 21px;
      padding: 0 0 0 36px;
    }
  }

  .link {
    color: #82a0e8;
    font-size: 15px;
    text-shadow: 0 0 0 #82a0e8;
    text-decoration: underline;
  }

  .github {
    padding: 16px 0 16px 0;

    .github-txt {
      color: rgba(39, 55, 77, 0.9);
      font-size: 16px;
      font-weight: 700;
    }

    .github-link {
      padding-left: 54px;
    }
  }

  .deployment {
    padding-bottom: 22px;
  }

  .deplo-txt {
    color: rgba(39, 55, 77, 0.9);
    font-size: 16px;
    font-weight: 700;
  }

  .deplo-link {
    padding-left: 42px;
  }

  .story-txt {
    color: #f9f9f9;
    font-size: 16px;
    font-weight: 700;
  }

  .story-link {
    padding-left: 14px;
  }

  @media all and (max-width: 767px) {
    .features {
      .features-des {
        width: 252px;
        height: auto;
        font-size: 14px;
        line-height: 21px;
        padding: 0 0 0 36px;
      }
    }
  }
`;

const ProjectArticle = ({
  id,
  img,
  date,
  title,
  subTitle,
  contribution,
  stacks,
  content,
  features,
  githubLink,
  githubTxt,
  deploLink,
  deploTxt,
  viewDetail,
}: IProjectData) => {
  const [modalOpen, setModal] = useState(false);

  return (
    <>
      <ProjectArticleBox className='project-article'>
        <div className='left-box'>
          <img className='left-img' src={img} alt='lumian' />
        </div>

        <RightBox>
          <p className='date'>{date}</p>
          <p className='project-name'>{title}</p>
          <p className='project-team'>{subTitle}</p>
          <p className='contri'>{contribution}</p>
          <p className='project-stacks'>{stacks}</p>
          <div className='line-box'>
            <div className='divider'></div>
          </div>
          <p className='project-des'>{content}</p>

          <FeaturesAndLink>
            <div className='features'>
              <div className='check-box'>
                <img className='check' src={check} alt='check' />
                <span>주요 기능</span>
              </div>
              <p className='features-des'>{features}</p>
            </div>

            <div className='github'>
              <img className='check' src={check} alt='check' />
              <span className='github-txt'>GitHub</span>
              <a className='link github-link' rel='noreferrer' href={githubLink} target='_blank'>
                {githubTxt}
              </a>
            </div>

            <div className='deployment'>
              <img className='check' src={check} alt='check' />
              <span className='deplo-txt'>배포 링크</span>
              <a className='link deplo-link' rel='noreferrer' href={deploLink} target='_blank'>
                {deploTxt}
              </a>
            </div>
            <div className='more-btn'>
              <MoreDetailBtn setModal={setModal} />
            </div>
          </FeaturesAndLink>
        </RightBox>
      </ProjectArticleBox>
      {modalOpen && <DetailModal id={id} viewDetail={viewDetail} modalOpen={modalOpen} setModal={setModal} />}
    </>
  );
};

export default ProjectArticle;
