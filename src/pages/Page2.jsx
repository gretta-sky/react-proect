import PhotoPage from '../components/PhotoPage';
import data from './data.js'; // Импортируем данные фотографий

const Page2 = () => {
  const selectedPhotos = data.photos.slice(3, 6);

  return (
    <PhotoPage photos={selectedPhotos} pageNumber={2} />
  );
};
export default Page2;