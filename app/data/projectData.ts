import { Project } from '../types/project';

export const projects: Project[] = [
    {
      id: 1,
      title: "굿슬",
      description: "React와 Node.js를 사용한 풀스택 웹 애플리케이션입니다. 사용자 인증, 실시간 채팅 기능을 구현했습니다.",
      image: "/images/project_a.jpg",
    },
    {
      id: 2,
      title: "위플리",
      description: "Next.js와 TypeScript로 제작한 블로그 플랫폼입니다. 정적 사이트 생성(SSG)으로 빠른 로딩 속도를 자랑합니다.",
      image: "/images/project_b.jpg",
    },
    {
      id: 3,
      title: "프로젝트 C",
      description: "Framer Motion을 활용한 인터랙티브 포트폴리오 사이트입니다. 부드러운 애니메이션과 사용자 경험에 중점을 두었습니다.",
      image: "/images/project_c.jpg",
    },
    {
      id: 4,
      title: "프로젝트 D",
      description: "데이터 시각화 대시보드입니다. D3.js를 사용하여 복잡한 데이터를 직관적인 차트로 표현했습니다.",
      image: "/images/project_d.jpg",
    },
  ];