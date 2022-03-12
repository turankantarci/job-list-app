import { useState } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">
          Lokasyon
          <input type="text" id="location" name="location" onChange={handleChange} />
        </label>
        <label htmlFor="keyword">
          Anahtar Kelime
          <input type="text" id="keyword" name="keyword" onChange={handleChange} />
        </label>
        <button>Gönder</button>
      </form>
    </div>
  )
}

export default Home;