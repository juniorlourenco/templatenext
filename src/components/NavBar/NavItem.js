import Link from "next/link";

export default function NavItem() {
    return ( 
    <Link href={href}>
        <a className={`
            nav__link ${active ? 'active' : ''}
        `}>{text}
        </a>
    </Link>
    )
  }