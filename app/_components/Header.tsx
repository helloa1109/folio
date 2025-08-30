"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "react-feather";

import cn from "classnames";
import { useAnimate, stagger } from "framer-motion";
import Link from "next/link";

import useOnClickOutside from "@/utils/useOnClickOutside";

// Logo와 SectionWatcher는 그대로 사용한다고 가정합니다.
// import Logo from "./Logo"; 
import { useSectionWatch } from "./SectionWatcher";

interface HeaderProps extends React.HTMLAttributes<HTMLHeadElement> {}

const navItems = [
  { label: "기술", id: "skill" },
  { label: "경력", id: "experience" },
  { label: "프로젝트", id: "project" },
  { label: "블로그", id: "blog" },
];

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const Header = ({ className, ...props }: HeaderProps) => {
  const { activeId } = useSectionWatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const [scope, animate] = useAnimate();

  const toggleMobileMenu = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    animate([
      [
        ".mobile-menu",
        { clipPath: isExpanded ? "inset(0% 0% 0% 0% round 16px)" : "inset(0% 10% 100% 90% round 16px)" },
        { type: "spring", bounce: 0, duration: 0.5 },
      ],
      [
        ".mobile-menu-item",
        { opacity: isExpanded ? 1 : 0 },
        { duration: 0.2, delay: isExpanded ? staggerMenuItems : 0, at: "-0.2" },
      ],
    ]);
  }, [isExpanded]);

  useOnClickOutside(scope, () => setIsExpanded(false));

  return (
    <header className="w-full sm:w-auto sticky top-4 z-50 px-3 sm:px-0" {...props} ref={scope}>
      <div
        className={cn(
          className,
          "w-full h-10 md:h-12 px-4 md:px-6 sm:pr-1.5 md:pr-2 bg-foreground/[0.07] backdrop-blur-lg rounded-full",
          "flex justify-between items-center gap-1.5 md:gap-2",
          "dark:bg-light/10 ",
        )}
      >
        {/* 로고가 필요하다면 주석을 해제하세요. */}
        {/* <Link className="no-underline mr-4" href="#top">
          <Logo />
        </Link> */}
        <div className="flex-grow"></div> {/* 로고가 없을 경우 메뉴를 오른쪽으로 밀기 위한 빈 div */}

        {/* --- 데스크탑 메뉴 (구조 수정됨) --- */}
        <ul className="hidden sm:flex gap-1.5 md:gap-2 items-center list-none p-0 m-0 indent-0">
          {navItems.map(({ label, id }) => (
            <li
              key={`header-item-${id}`}
              className={cn(
                "rounded-full transition-colors",
                activeId === id && "bg-background",
              )}
            >
              <Link
                href={`#${id}`}
                className="no-underline px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-0.5"
              >
                <span
                  className={cn(
                    "text-xs md:text-sm font-semibold whitespace-nowrap",
                    activeId === id ? "text-foreground" : "text-foreground/60",
                  )}
                >
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <button className="block sm:hidden" onClick={toggleMobileMenu}>
          {isExpanded ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* --- 모바일 메뉴 (구조 수정됨) --- */}
      <ul
        className={cn(
          "mobile-menu",
          "absolute top-12 left-1 right-1",
          "h-fit px-5 py-4 mt-2 flex flex-col sm:hidden indent-0",
          "bg-foreground/[0.07] backdrop-blur-lg list-none m-0",
          isExpanded ? "pointer-events-auto" : "pointer-events-none",
        )}
        style={{ clipPath: "inset(0% 50% 100% 50% round 10px)" }}
      >
        {navItems.map(({ label, id }) => (
          <li key={`header-item-m-${id}`}>
            <Link
              href={`#${id}`}
              // 애니메이션을 위해 'mobile-menu-item' 클래스 유지
              className={cn("mobile-menu-item", "no-underline block py-2.5")}
              onClick={() => setIsExpanded(false)} // 메뉴 아이템 클릭 시 메뉴 닫기
            >
              <span className="text-base font-semibold whitespace-nowrap text-foreground/80">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;