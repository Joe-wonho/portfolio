import lumianJpg from '../../assets/jpg-file/lumian.jpg';
import blogJpg from '../../assets/jpg-file/blog.jpg';

export interface IModalData {
  title: string;
  introContent: string[];
  deployLink: string;
  deployTxt: string;
  githubLink: string;
  githubTxt: string;
  stacks: string;
  featuresContent: string[];
  backgroundContent: string[];
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
  deployLink: string;
  deployTxt: string;
  modalData: IModalData;
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
    deployLink: 'http://lumian.s3-website.ap-northeast-2.amazonaws.com/',
    deployTxt: 'LUMIAN',
    modalData: {
      title: '루미안(Lumian) - 아티스트와 소통할 수 있는 서비스',
      introContent: [
        'Lumian + Via (빛 + 길) Lumian은 라틴어 Luminae와 via를 합쳐서 만든 이름으로, 빛이 가득한 길을 의미합니다.',
        '빛은 영감과 창의성을 상징하는 요소로, Luminae과 via는 아티스트와팬 간의 관계를 나타내며, 빛이 가득한 길로 함께 나아가는 것을 상징합니다.',
        '위버스에서 영감을 받아 제작했으며 Lumian은 동록된 아티스트와 팬이 함께 소통할 수 있는 공간입니다.',
      ],

      deployLink: 'http://lumian.s3-website.ap-northeast-2.amazonaws.com/',
      deployTxt: 'LUMIAN',
      githubLink: 'https://github.com/Joe-wonho/lumian-prj',
      githubTxt: 'github.com/Joe-wonho/lumian-prj',
      stacks: 'React, Redux-toolKit, Styled-components, Axios, AmazonS3, ESLint, Prettier, Figma',

      featuresContent: [
        '⦁ 일반 유저, 아티스트 회원가입 및 로그인',
        '⦁ 원하는 아티스트의 커뮤니티 가입',
        '⦁ 아티스트가 추천해 주는 플레이리스트가 있는 music 페이지',
        '⦁ 팬들만 게시글을 작성 할 수 있는 Feed 페이지',
        '⦁ 아티스트만 게시글을 작성 할 수 있는 Artist 페이지',
      ],

      backgroundContent: [
        '어떤 주제로 프로젝트를 진행할 것인지 회의를 하던 중 팀원 개개인이 이용중인 서비스를 말하는 시간을 가졌습니다.',
        '그러던 중 한 분의 의견으로 위버스라는 서비스를 벤치마킹하게 되었습니다.',
        '프론트 3명, 백엔드 2명으로 이루어진 팀으로, 좋은 팀원분들을 만나 Lumian 프로젝트를 완성하였습니다.',
      ],
    },
  },
  {
    id: 2,
    img: blogJpg,
    date: '2023.06.07 ~ 2023.07.18',
    title: '블로그(Blog)',
    subTitle: '팀 프로젝트 (역할 : 프론트 / 5주)',
    contribution: '"기여도 : 100%" (Front 1명 / Back 1명)',
    stacks: 'React, Recoil, TypeScript, Qulil, Styled-components, Axios, AmazonS3, Prettier',
    content: `벨로그를 모티브로 제작하였습니다. 지난번 팀 프로젝트 때 아쉬운 부분이 있어 보완하고자 제작하게 되었습니다.`,
    features: `CRUD가 가능한 기본 기능을 갖춘 블로그입니다. 지난번 프로젝트 때의 아쉬움이 남아 제작하였습니다. 어떤 점을 보완했는지는 More Details 버튼을 눌러 확인해주세요!`,
    githubLink: 'https://github.com/Joe-wonho/blog-side',
    githubTxt: 'github.com/Joe-wonho/blog',
    deployLink: '',
    deployTxt: 'Blog',
    modalData: {
      title: 'Blog(블로그) - CRUD가 가능한 블로그',
      introContent: [
        'velog를 모티브로 디자인한 블로그입니다.',
        '사용하고 싶었던 라이브러리나 지난번에 기능적으로 아쉬웠던 부분을 보완하고자 제작하였습니다.',
      ],
      deployLink: '',
      deployTxt: 'Blog',
      githubLink: 'https://github.com/Joe-wonho/blog-side',
      githubTxt: 'github.com/Joe-wonho/blog',
      stacks: 'React, Recoil, TypeScript, Qulil, Styled-components, Axios, AmazonS3, Prettier',

      featuresContent: ['⦁ 로그인 / 회원가입', '⦁ 회원 정보 수정, 탈퇴', '⦁ 글 조회, 작성, 수정, 삭제'],
      backgroundContent: [
        ' 지난번 팀 프로젝트 때 아쉬운 부분이 있어 보완하고자 제작하게 되었습니다.',
        '지난 번 프로젝트를 같이 진행한 백엔드 팀원분과 기회가 되어 기능적인 부분을 보완하였습니다.',
      ],
    },
  },
];

export default data;
