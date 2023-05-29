import Link from "next/link";

export default function NavItem({text, href, active}) {
    return ( 
    <Link legacyBehavior href={href}>
        <a className={`nav__link $`}>{text}
        </a>
    </Link>
    )
  }