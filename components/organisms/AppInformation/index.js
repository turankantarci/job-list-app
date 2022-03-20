import Container from 'components/atoms/Container';

const AppInformation = () => {
  return (
    <Container withColor>
        <h2>
            Bilgilendirme
        </h2>
        <div className="mt-1 font-weight-bold">
            Lokasyon için örnek aramalar:
        </div>
        <div className="mt-3">
            İl veya ilçe yazarak lokasyon araması yapılabilir. Örn; istanbul, çengelköy, büyükdere, muğla, sarıyer, izmir, adana, çanakkale
        </div>
        <div className="mt-1 font-weight-bold">
            Anahtar kelime için örnek aramalar:
        </div>
        <div className="mt-3">
            Anahtar kelime alanı hem firma adına göre hem de pozisyona göre arama yapabilir. Örn; usta, tesla, pide, kardeşler, uzay, uzman, melodi, aşçı, kasiyer, satış
        </div>
        <div className="mt-1 font-weight-bold">
            Lokasyon ve anahtar kelime için örnek aramalar:
        </div>
        <div className="mt-3">
            Lokasyon ve anahtar kelime alanları birlikte doldurularak filtreleme yapılabilir. Örn; istanbul - uzman, muğla - satış
        </div>
    </Container>
  )
}

export default AppInformation;