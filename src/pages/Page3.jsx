import PhotoPage from '../components/PhotoPage';
import data from './data.js'; // Импортируем данные фотографий

const Page3 = () => {
  const selectedPhotos = data.photos.slice(6, 10);

  return (
    <PhotoPage photos={selectedPhotos} pageNumber={3} />
  );
};

export default Page3;