import Link from "next/link"

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link href={'/'}>
                    Home
                </Link>
                <Link href={'/about'}>
                    About
                </Link>
            </nav>
        </div>
    )
}

export default NavBar