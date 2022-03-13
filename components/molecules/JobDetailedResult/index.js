import ImageBox from 'components/atoms/ImageBox';
import InfoWrapper from 'components/atoms/InfoWrapper';

const JobDetailedResult = ({ companyName, companySlogan, positionName, positionDescription, cityName, townName, address, image }) => {
    return (
        <>
            <InfoWrapper>
                <div className="d-flex justify-content-between">
                    <div>
                        <ImageBox src={image} alt={companyName} width="80px" height="80px" />
                    </div>
                    <div className="d-flex justify-content-center flex-column flex-1 ml-3">
                        <h1 className="mb-2">{companyName}</h1>
                        <div>{companySlogan}</div>
                    </div>
                </div>
            </InfoWrapper>
            <InfoWrapper>
                <div className="flex-1">
                    <div className='mb-2'>
                        <small className="font-weight-bold">Pozisyon:</small>
                        <div className="mt-3">{positionName}</div>
                    </div>
                    <div className='mb-2'>
                        <small className="font-weight-bold">Pozisyon Açıklaması:</small>
                        <div className="mt-3">{positionDescription}</div>
                    </div>
                    <div className='mb-2'>
                        <small className="font-weight-bold">Şehir:</small>
                        <div className="mt-3">{cityName}</div>
                    </div>
                    <div className='mb-2'>
                        <small className="font-weight-bold">İlçe/Mahalle:</small>
                        <div className="mt-3">{townName}</div>
                    </div>
                    <div>
                        <small className="font-weight-bold">Adres:</small>
                        <div className="mt-3">{address}</div>
                    </div>
                </div>
            </InfoWrapper>
        </>
    )
}

export default JobDetailedResult;