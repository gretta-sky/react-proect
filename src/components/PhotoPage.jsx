import React from 'react';
import { Link } from 'react-router-dom';
import Album from './Album';

const PhotoPage = ({ photos, pageNumber }) => {
  if (!photos || !photos.length) {
    return null; // Возвращаем пустое содержимое, если фотографий нет
  }

  const totalPages = Math.ceil(photos.length / 12);

  return (
    <div className="photopage">
      <Album photos={photos} />
      
    </div>
  );
};

export default PhotoPage;