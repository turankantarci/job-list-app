import React from 'react';

const JobList = (props) => {
  console.log("props", props)

  return (
    <div>JobList</div>
  )
}

export async function getServerSideProps(context) {

  const { query } = context;
  const {location: locationQuery, keyword: keywordQuery} = query;

  const response = await fetch(`http://localhost:3000/api/jobList`, query);
  const jobList = await response.json();

  if (locationQuery || keywordQuery) {

    const filteredJoblist = jobList.filter((item) => {
      const cityName = String(item.cityName).toLocaleLowerCase("tr-TR");
      const companyName = String(item.companyName).toLocaleLowerCase("tr-TR");
      const positionName = String(item.positionName).toLocaleLowerCase("tr-TR");

      const filterCondition = cityName.includes(locationQuery) || companyName.includes(keywordQuery) || positionName.includes(keywordQuery);
      if (filterCondition) return item;
    });

    return {
      props: {
        filteredJoblist
      }
    }

  } else {

    return {
      props: {
        jobList
      }
    }

  }

}

export default JobList;