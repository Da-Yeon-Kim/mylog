import Link from "next/link";

import { DarkMode } from "./DarkMode";

export const Header = () => {

    return (
        <header className="header-wrapper">
        <div className="header-container">
            <Link className="flex font-bold text-xl" href="/">
            프론트엔드 개발자 김다연
            </Link>
            <nav className="flex gap-4 flex-row">
            <Link className="header-link" href="/profile">소개</Link>
            <Link className="header-link" href="/profile">경력</Link>
            <Link className="header-link" href="/profile">참여 프로젝트</Link>
            <Link className="header-link" href="/profile">대외활동</Link>
            </nav>
            <div className="flex flex-row gap-5">
                <DarkMode />
            </div>
        </div>
        </header>
);
};
