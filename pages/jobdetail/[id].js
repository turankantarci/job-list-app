import Header from 'components/organisms/Header';
import JobDetailSection from 'components/organisms/JobDetailSection';
import { server } from 'config';

const JobDetail = ({ jobDetail }) => {
    return (
        <>
            <Header />
            <JobDetailSection details={jobDetail} />
        </>
    )
}

export async function getServerSideProps({ query }) {

    const response = await fetch(`${server}/api/jobDetail`, {
        method: "POST",
        body: JSON.stringify(query)
    });

    const jobDetail = await response.json();

    return {
        props: {
            jobDetail
        }
    }

}

export default JobDetail;