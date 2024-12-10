import React from 'react';
import { useParams } from 'react-router-dom';

const PhotoPage = ({ photos }) => {
  const { pageNumber } = useParams();
  const currentPage = parseInt(pageNumber) || 1; // Преобразуем строку в число, если строка пустая или неверного формата, используем 1

  const startIndex = (currentPage - 1) * 12;
  const endIndex = startIndex + 12;
  const currentPhotos = photos.slice(startIndex, endIndex);

  if (!currentPhotos || !currentPhotos.length) {
    return null; // Возвращаем пустое содержимое, если фотографий нет
  }

  return (
    <div className="album">
      {currentPhotos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.src} alt={photo.alt} />
          <p className="photo-description">{photo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoPage;
