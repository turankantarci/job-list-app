import { useRouter } from 'next/router'
import Container from 'components/atoms/Container';
import JobDetailedResult from 'components/molecules/JobDetailedResult';

const JobDetailSection = ({ details }) => {
    const router = useRouter()
    return (
        <>
            <Container>
                <div className="cursor-pointer" onClick={() => router.back()}>
                    {'< Sonuçlara geri dön'}
                </div>
            </Container>
            <Container withColor>
                <JobDetailedResult {...details} />
            </Container>
        </>
    )
}

export default JobDetailSection;