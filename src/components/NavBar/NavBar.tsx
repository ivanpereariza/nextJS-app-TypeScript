import { Navbar, Text } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {

  const { pathname } = useRouter()

  return (

    <Navbar variant='static'>
      <Navbar.Brand>
        <Link href={'/'}>
          <Text b color="black">
            Avo APP
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content activeColor={'success'} variant={'highlight-rounded'}>
        <Navbar.Link isActive={pathname === '/'} as={'span'}><Link style={{ height: 'auto', color: 'green' }} href={'/'}>Home</Link></Navbar.Link>
        <Navbar.Link isActive={pathname === '/about'} as={'span'}><Link style={{ height: 'auto', color: 'green' }} href={'/about'}>About me</Link></Navbar.Link>
      </Navbar.Content>
    </Navbar>
  )
}

export default NavBar
