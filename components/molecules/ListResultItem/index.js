import ImageBox from 'components/atoms/ImageBox';
import InfoWrapper from 'components/atoms/InfoWrapper';
import Link from 'next/link';

const ListResultItem = ({ id, companyName, positionName, cityName, townName, address, image }) => {
    return (
        <InfoWrapper withHover>
            <Link href={`/jobdetail/${id}`} passHref>
                <div className="d-flex justify-content-between">
                    <div className="flex-1">
                        <div className='mb-2'>
                            <small className="font-weight-bold">Firma adı:</small>
                            <div className="mt-3">{companyName}</div>
                        </div>
                        <div className='mb-2'>
                            <small className="font-weight-bold">Pozisyon:</small>
                            <div className="mt-3">{positionName}</div>
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
                    <div className="d-flex align-items-center">
                        <ImageBox src={image} alt={companyName} width="230px" height="230px" />
                    </div>
                </div>
            </Link>
        </InfoWrapper>
    )
}

export default ListResultItem;