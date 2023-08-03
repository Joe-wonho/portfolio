import styled from 'styled-components';

import data from './data';
import ProjectArticle from './ProjectArticle';

const ProjectsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ProjectsBody = styled.div`
  width: 974px;
  height: auto;
  padding: 74px 0 225px 0;

  .projects {
    padding: 0 0 43px 0;

    .project-txt {
      width: 255px;
      height: 61px;
      color: rgba(0, 0, 0, 0.8);
      font-size: 50px;
      font-weight: 700;
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;
    .projects {
      padding: 18px 0 33px 0;
    }
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 355px;
    .projects {
      padding: 0 0 3px 0;
      .project-txt {
        font-size: 40px;
      }
    }
  }

  @media all and (max-width: 479px) {
    width: 330px;
    font-size: 35px;

    .projects {
      padding: 0 0 3px 0;
      .project-txt {
        font-size: 35px;
      }
    }
  }
`;

const ProjectSection = styled.section`
  /* .project-article:first-of-type {
    padding: 0 0 4px 0;
  } */

  .project-article:last-of-type {
    padding: 54px 0 0 0;
    border-bottom: none;
  }
`;

const Projects = () => {
  return (
    <ProjectsBox>
      <ProjectsBody>
        <div className='projects'>
          <span className='project-txt'>Projects</span>
        </div>

        <ProjectSection>
          {data.map((el) => (
            <ProjectArticle
              key={el.id}
              id={el.id}
              img={el.img}
              date={el.date}
              title={el.title}
              subTitle={el.subTitle}
              contribution={el.contribution}
              stacks={el.stacks}
              content={el.content}
              features={el.features}
              githubLink={el.githubLink}
              githubTxt={el.githubTxt}
              deployLink={el.deployLink}
              deployTxt={el.deployTxt}
              modalData={el.modalData}
            />
          ))}
        </ProjectSection>
      </ProjectsBody>
    </ProjectsBox>
  );
};

export default Projects;
