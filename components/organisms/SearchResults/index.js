import Container from 'components/atoms/Container';
import ListResultItem from 'components/molecules/ListResultItem';

const SearchResults = ({ searchResults }) => {
    return (
        <>
            <Container>
                <div className='text-center'>
                    {searchResults.length ? `${searchResults.length} sonuç bulundu` : "Sonuç bulunamadı."}
                </div>
            </Container>
            {!!searchResults.length && (
                <Container withColor>
                    {
                        searchResults.map(result => {
                            return <ListResultItem
                                key={result.id}
                                id={result.id}
                                companyName={result.companyName}
                                positionName={result.positionName}
                                cityName={result.cityName}
                                townName={result.townName}
                                address={result.address}
                                image={result.image}
                            />
                        })
                    }
                </Container>
            )}
        </>

    )
}

export default SearchResults;