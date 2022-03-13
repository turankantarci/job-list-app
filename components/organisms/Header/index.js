import Container from "components/atoms/Container";
import Search from "components/molecules/Search";
import Link from "next/link";

const Header = () => {
  return (
    <Container withColor>
      <Link href="/" passHref><h1 className="text-center cursor-pointer m-1">İş Arama Motoru</h1></Link>
      <Search />
    </Container>
  )
}

export default Header