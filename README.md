# TypeScript + Tailwind CSS 프로젝트

이 프로젝트는 TypeScript와 Tailwind CSS를 사용하여 구축된 현대적인 웹 애플리케이션입니다.

## 🚀 기술 스택

- **Next.js 14** - React 기반 풀스택 프레임워크
- **TypeScript** - 타입 안전성을 위한 JavaScript 확장
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **React 18** - 사용자 인터페이스 구축을 위한 JavaScript 라이브러리

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

### 3. 프로덕션 빌드
```bash
npm run build
npm start
```

## 🛠️ 사용 가능한 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션용 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint를 사용한 코드 검사

## 📁 프로젝트 구조

```
├── app/                 # Next.js 13+ App Router
│   ├── globals.css     # 전역 CSS 및 Tailwind 디렉티브
│   ├── layout.tsx      # 루트 레이아웃 컴포넌트
│   └── page.tsx        # 메인 페이지 컴포넌트
├── tailwind.config.js  # Tailwind CSS 설정
├── postcss.config.js   # PostCSS 설정
├── tsconfig.json       # TypeScript 설정
├── package.json        # 프로젝트 의존성 및 스크립트
└── README.md          # 프로젝트 문서
```

## 🎨 Tailwind CSS 사용법

이 프로젝트는 Tailwind CSS가 완전히 설정되어 있습니다. 컴포넌트에서 다음과 같이 사용할 수 있습니다:

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  Hello Tailwind!
</div>
```

## 🔧 TypeScript 설정

- 엄격한 타입 검사 활성화
- Next.js 타입 지원
- 경로 별칭 설정 (`@/*`)

## 🌙 다크 모드 지원

Tailwind CSS의 다크 모드가 설정되어 있으며, 사용자의 시스템 설정에 따라 자동으로 전환됩니다.

## 📝 추가 개발

새로운 컴포넌트나 페이지를 추가할 때는 `app/` 디렉토리 내에 생성하세요. TypeScript와 Tailwind CSS의 모든 기능을 활용할 수 있습니다.

## 🤝 기여

프로젝트에 기여하고 싶으시다면 Pull Request를 보내주세요!

---

**Happy Coding! 🎉**
