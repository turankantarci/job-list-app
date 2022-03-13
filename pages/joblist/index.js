import Header from 'components/organisms/Header';
import React from 'react';

const JobList = ({ searchResult }) => {

  return (
    <>
      <Header />
    </>
  )
}

export async function getServerSideProps(context) {

  const { query } = context;
  const { location: locationQuery, keyword: keywordQuery } = query;

  const response = await fetch(`http://localhost:3000/api/jobList`, query);
  const jobList = await response.json();

  if (locationQuery || keywordQuery) {

    const filteredJoblist = jobList.filter((item) => {
      const cityName = String(item.cityName).toLocaleLowerCase("tr-TR");
      const companyName = String(item.companyName).toLocaleLowerCase("tr-TR");
      const positionName = String(item.positionName).toLocaleLowerCase("tr-TR");

      if (locationQuery && keywordQuery) {
        if (cityName.includes(locationQuery) && (companyName.includes(keywordQuery) || positionName.includes(keywordQuery))) return item;
      } else if (locationQuery && !keywordQuery) {
        if (cityName.includes(locationQuery)) return item;
      } else {
        if (companyName.includes(keywordQuery) || positionName.includes(keywordQuery)) return item;
      }

    });

    return {
      props: {
        searchResult: filteredJoblist
      }
    }

  } else {

    return {
      props: {
        searchResult: jobList
      }
    }

  }

}

export default JobList;