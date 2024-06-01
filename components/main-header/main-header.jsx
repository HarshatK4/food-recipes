import styles from '@/components/main-header/main-header.module.css'
import Link from 'next/link';
import LogoImg from '@/assets/logo.png';
import Image from 'next/image';
import MainHeaderBack from './main-header-background';
import NavLink from '@/components/main-header/nav-link';
export default function MainHeader(){
    return(
        <>
        <MainHeaderBack />
        <header className={styles.header}>
            <Link className={styles.logo} href="/">
                <Image src={LogoImg} alt='A plate with food' priority/> Next Level Food
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Community of Foodies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}