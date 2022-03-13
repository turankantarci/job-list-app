import { useState } from 'react';
import { useRouter } from 'next/router';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

const Search = () => {
    const [formData, setFormData] = useState({});
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push({
            pathname: '/joblist',
            query: formData
        }, '/joblist');
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: (e.target.value).toLocaleLowerCase("tr-TR") });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between">
                <div className="flex-1 p-2">
                    <Input type="text" name="location" id="location" labelText="Lokasyon" placeholder="Şehir" onChange={handleChange} />
                </div>
                <div className="flex-1 p-2">
                    <Input type="text" name="keyword" id="keyword" labelText="Anahtar Kelime" placeholder="Firma adı veya pozisyon" onChange={handleChange} />
                </div>
            </div>
            <div className="text-center mt-3">
                <Button type="submit" text="Ara" />
            </div>
        </form>
    )
}

export default Search;