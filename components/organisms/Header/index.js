import Container from "components/atoms/Container";
import Search from "components/molecules/Search";

const Header = () => {
  return (
      <Container withColor>
          <h1 className="text-center m-1">İş Arama Motoru</h1>
          <Search/>
      </Container>
  )
}

export default Header