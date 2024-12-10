import PhotoPage from '../components/PhotoPage'; 
import data from './data.js'; // Импортируем данные фотографий 
 
const Page1 = () => {
  
  const selectedPhotos = data.photos.slice(0, 3);

  return (
    <PhotoPage photos={selectedPhotos} pageNumber={1} />
  );
};

export default Page1;

