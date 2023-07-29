import lumianJpg from '../../assets/jpg-file/lumian.jpg';
import blogJpg from '../../assets/jpg-file/blog.jpg';

export interface IMyRole {
  figma: string;
  main: string;
  music: string;
  feed: string;
}

export interface IViewDetail {
  title: string;
  meaningContent: string;
  deploLink: string;
  deploTxt: string;
  githubLink: string;
  githubTxt: string;
  stacks: string;
  summarygContent: string;
  featuresContent: string;
  backgroundContent: string;
  myRole?: IMyRole;
  storyLink?: string;
  storyTxt?: string;
}

export interface IProjectData {
  id: number;
  img: any;
  date: string;
  title: string;
  subTitle: string;
  contribution: string;
  stacks: string;
  content: string;
  features: string;
  githubLink: string;
  githubTxt: string;
  deploLink: string;
  deploTxt: string;
  storyLink?: string;
  storyTxt?: string;
  viewDetail: IViewDetail;
}

const data: IProjectData[] = [
  {
    id: 1,
    img: lumianJpg,
    date: '2023.04.28 ~ 2023.05.25',
    title: '루미안(LUMIAN)',
    subTitle: '팀 프로젝트 (역할 : 프론트 팀장 / 4주)',
    contribution: '"기여도 : 50%" (Front 3명 / Back 2명)',
    stacks: 'React, Redux-toolKit, Styled-components, Axios, AmazonS3, ESLint, Prettier',
    content: `위버스에서 영감을 받아 만들었습니다. Lumian은 등록된 아티스트와 소통할 수 있는 공간입니다. 팀장을 맡았으며 첫 팀 프로젝트인 만큼 의견 조율과 협업을 위해 소통에 최선을 다해 프로젝트를 마쳤습니다. 공통 컴포넌트, 로그인 / 회원가입 페이지, 아티스트 페이지를 담당했습니다.`,
    features: `원하는 아티스트의 커뮤니티에 가입,
    아티스트가 추천해 주는 플레이리스트, 
    팬들만 게시글을 작성 할 수 있는 Feed 페이지, 
    아티스트만 게시글을 작성 할 수 있는 Artist 페이지`,
    githubLink: 'https://github.com/Joe-wonho/lumian-prj',
    githubTxt: 'github.com/Joe-wonho/lumian-prj',
    deploLink: 'http://lumian.s3-website.ap-northeast-2.amazonaws.com/',
    deploTxt: 'LUMIAN',
    viewDetail: {
      title: '루미안(Lumian) - 좋아하는 아티스트와 소통할 수 있는 서비스',
      meaningContent: `Lumian + Via (빛 + 길)
      Lumian은 라틴어 Luminae와 via를 합쳐서 만든 이름으로, 빛이 가득한 길을 의미합니다.
      
      빛은 영감과 창의성을 상징하는 요소로, Luminae과 via는
      아티스트와팬 간의 관계를 나타내며, 빛이 가득한 길로 함께 나아가는 것을 상징합니다.`,
      deploLink: 'http://lumian.s3-website.ap-northeast-2.amazonaws.com/',
      deploTxt: 'LUMIAN',
      githubLink: 'https://github.com/TATA-V/lumian-project',
      githubTxt: 'github.com/TATA-V/lumian',
      stacks: 'React, Redux-toolKit, Styled-components, Axios, AmazonS3, ESLint, Prettier, Figma',
      summarygContent: `위버스에서 영감을 받아 만들었습니다. Lumian은 아티스트와 팬 간의 경계를 허물고, 함께 소통할 수 있는 공간입니다.`,
      myRole: {
        figma: `Figma를 사용하여 전체 페이지를 디자인하였습니다. header, nav, footer 그리고 Feed 페이지와 Artist 페이지에서 사용하는 DetailPost, Comment 등의 공통 컴포넌트들을 제작했습니다.`,
        main: `웹 사이트의 첫 페이지는 사용자가 처음 접하는 부분이기 때문에, 사용자의 흥미를 끌기 위해 그래픽 요소를 적절히 활용하였습니다.`,
        music: `아티스트가 팬들에게 플레이리스트를 공유하는 페이지입니다. 음악이 끝나면 다음 음악으로 넘어가는 부분이 구현하기 어려웠지만, Redux를 사용하여 음악 재생 상태를 관리하고, 다음 음악으로 자동 전환하는 기능을 구현했습니다.`,
        feed: `팬만 게시글을 작성할 수 있는 페이지입니다. 모달 안에 모달이 있는 형태를 구현하면서 useRef와 position 속성에 대해 더 잘 알게 되었습니다.
      `,
      },
      featuresContent: `⦁ 일반 유저, 아티스트 회원가입 및 로그인
      ⦁ 원하는 아티스트의 커뮤니티 가입
      ⦁ 아티스트가 추천해 주는 플레이리스트가 있는 music 페이지
      ⦁ 팬들만 게시글을 작성 할 수 있는 Feed 페이지
      ⦁ 아티스트만 게시글을 작성 할 수 있는 Artist 페이지
      ⦁ 아티스트 검색 기능`,
      backgroundContent: `평소에 연예인과 관련된 분야에 관심이 많았기에, 팬과 아티스트가 소통할 수 있는 서비스를 만들고 싶었습니다.
      실제로 사용해 본 적 있는 위버스 웹 사이트를 벤치마킹하여 Lumian 웹 사이트를 디자인하였습니다.

      위버스와 조금 다른 점은 아티스트가 추천해 주는 플레이리스트가 있다는 점입니다.
      현재 뮤직 페이지는 서버가 없으며, 클라이언트만 구현되어 있습니다.

      프론트 3명, 백엔드 2명으로 이루어진 팀으로, 좋은 팀원분들을 만나 Lumian 프로젝트를 완성하였습니다.`,
    },
  },
  {
    id: 2,
    img: blogJpg,
    date: '2023.06.07 ~ 2023.07.18',
    title: '블로그(Blog)',
    subTitle: '팀 프로젝트 (역할 : 프론트 / 5주)',
    contribution: '"기여도 : 100%" (Front 1명 / Back 1명)',
    stacks: 'React, Recoil, TypeScript, Styled-components, Axios, AmazonS3, Prettier',
    content: `벨로그를 모티브로 제작하였습니다. 지난번 팀 프로젝트 때 아쉬운 부분이 있어 보완하고자 제작하게 되었습니다.`,
    features: `CRUD가 가능한 기본 기능을 갖춘 블로그입니다. 지난번 프로젝트 때의 아쉬움이 남아 제작하였습니다. 어떤 점을 보완했는지는 More Details 버튼을 눌러 확인해주세요!`,
    githubLink: 'https://github.com/Joe-wonho/blog-side',
    githubTxt: 'github.com/Joe-wonho/blog',
    deploLink: 'http://lumian.s3-website.ap-northeast-2.amazonaws.com/',
    deploTxt: 'Blog',
    viewDetail: {
      title: '루미안(Lumian) - 좋아하는 아티스트와 소통할 수 있는 서비스',
      meaningContent: `Lumian + Via (빛 + 길)
      Lumian은 라틴어 Luminae와 via를 합쳐서 만든 이름으로, 빛이 가득한 길을 의미합니다.
      
      빛은 영감과 창의성을 상징하는 요소로, Luminae과 via는
      아티스트와팬 간의 관계를 나타내며, 빛이 가득한 길로 함께 나아가는 것을 상징합니다.`,
      deploLink: '',
      deploTxt: 'Blog',
      githubLink: 'https://github.com/Joe-wonho/blog-side',
      githubTxt: 'github.com/Joe-wonho/blog',
      stacks: 'React, Redux-toolKit, Styled-components, Axios, AmazonS3, ESLint, Prettier, Figma',
      summarygContent: `위버스에서 영감을 받아 만들었습니다. Lumian은 아티스트와 팬 간의 경계를 허물고, 함께 소통할 수 있는 공간입니다.`,
      myRole: {
        figma: `Figma를 사용하여 전체 페이지를 디자인하였습니다. header, nav, footer 그리고 Feed 페이지와 Artist 페이지에서 사용하는 DetailPost, Comment 등의 공통 컴포넌트들을 제작했습니다.`,
        main: `웹 사이트의 첫 페이지는 사용자가 처음 접하는 부분이기 때문에, 사용자의 흥미를 끌기 위해 그래픽 요소를 적절히 활용하였습니다.`,
        music: `아티스트가 팬들에게 플레이리스트를 공유하는 페이지입니다. 음악이 끝나면 다음 음악으로 넘어가는 부분이 구현하기 어려웠지만, Redux를 사용하여 음악 재생 상태를 관리하고, 다음 음악으로 자동 전환하는 기능을 구현했습니다.`,
        feed: `팬만 게시글을 작성할 수 있는 페이지입니다. 모달 안에 모달이 있는 형태를 구현하면서 useRef와 position 속성에 대해 더 잘 알게 되었습니다.
      `,
      },
      featuresContent: `⦁ 일반 유저, 아티스트 회원가입 및 로그인
      ⦁ 원하는 아티스트의 커뮤니티 가입
      ⦁ 아티스트가 추천해 주는 플레이리스트가 있는 music 페이지
      ⦁ 팬들만 게시글을 작성 할 수 있는 Feed 페이지
      ⦁ 아티스트만 게시글을 작성 할 수 있는 Artist 페이지
      ⦁ 아티스트 검색 기능`,
      backgroundContent: `평소에 연예인과 관련된 분야에 관심이 많았기에, 팬과 아티스트가 소통할 수 있는 서비스를 만들고 싶었습니다.
      실제로 사용해 본 적 있는 위버스 웹 사이트를 벤치마킹하여 Lumian 웹 사이트를 디자인하였습니다.

      위버스와 조금 다른 점은 아티스트가 추천해 주는 플레이리스트가 있다는 점입니다.
      현재 뮤직 페이지는 서버가 없으며, 클라이언트만 구현되어 있습니다.

      프론트 3명, 백엔드 2명으로 이루어진 팀으로, 좋은 팀원분들을 만나 Lumian 프로젝트를 완성하였습니다.`,
    },
  },
];

export default data;
