import Header from 'components/organisms/Header';
import SearchResults from 'components/organisms/SearchResults';
import { server } from 'config';

const JobList = ({ searchResults }) => {
  return (
    <>
      <Header />
      <SearchResults searchResults={searchResults} />
    </>
  )
}

export async function getServerSideProps({ query }) {

  const { location, keyword } = query;

  const response = await fetch(`${server}/api/jobList`);
  const jobList = await response.json();

  if (location || keyword) {

    const filteredJoblist = jobList.filter((item) => {
      const cityName = String(item.cityName).toLocaleLowerCase("tr-TR");
      const townName = String(item.townName).toLocaleLowerCase("tr-TR");
      const companyName = String(item.companyName).toLocaleLowerCase("tr-TR");
      const positionName = String(item.positionName).toLocaleLowerCase("tr-TR");

      if (location && keyword) {
        if ((cityName.includes(location) || townName.includes(location)) && (companyName.includes(keyword) || positionName.includes(keyword))) return item;
      } else if (location && !keyword) {
        if (cityName.includes(location) || townName.includes(location)) return item;
      } else {
        if (companyName.includes(keyword) || positionName.includes(keyword)) return item;
      }

    });

    return {
      props: {
        searchResults: filteredJoblist
      }
    }

  } else {

    return {
      props: {
        searchResults: jobList
      }
    }

  }

}

export default JobList;