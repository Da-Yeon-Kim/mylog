import Link from "next/link"
import { Github, Phone, Mail, ArrowUpRight } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="flex w-full p-16 bg-background border-t-1">
                <div className="header-container">
                <div className="flex flex-1 flex-col">
                    <p className="footer-title">연락처</p>
                    <div className="footer-menu">
                        <div className="flex flex-row gap-2 items-center">
                            <Phone className="w-5 h-5"/>
                            <p>010-5218-7733</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <Mail className="w-5 h-5"/>
                            <p>hq9mhq@gmail.com</p>
                        </div>
                        <Link href="https://github.com/Da-Yeon-Kim" className="flex flex-row">
                            <Github className="w-5 h-5 mr-2 text-foreground" />
                            <p>Da-Yeon-Kim</p>
                            <ArrowUpRight className="w-4 h-4 mt-1.5"/>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-2 flex-row justify-between items-top">
                    <div className="footer-menu">
                        <p className="footer-menu-title">소개</p>
                        <Link className="footer-menu-link" href="/profile">인적사항</Link>
                        <Link className="footer-menu-link"  href="/profile">사용 기술</Link>
                    </div>
                    <div className="footer-menu">
                        <p className="footer-menu-title">경력</p>
                        <Link className="footer-menu-link" href="/profile">AIS</Link>
                        <Link className="footer-menu-link"  href="/profile">기역기역 주식회사</Link>
                    </div>
                    <div className="footer-menu">
                        <p className="footer-menu-title">참여 프로젝트</p>
                        <Link className="footer-menu-link" href="/profile">밥팅</Link>
                        <Link className="footer-menu-link"  href="/profile">용산구 FMS</Link>
                        <Link className="footer-menu-link"  href="/profile">용산구 SMS</Link>
                        <Link className="footer-menu-link"  href="/profile">포트폴리오 사이트</Link>
                    </div>
                    <div className="footer-menu">
                        <p className="footer-menu-title">대외활동</p>
                        <Link className="footer-menu-link" href="/profile">참여 프로그램</Link>
                        <Link className="footer-menu-link" href="/profile">수상 실적</Link>
                        <Link className="footer-menu-link"  href="/profile">봉사활동</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}