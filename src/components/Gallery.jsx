import { useState, useEffect, useRef } from 'react';
import '../App.css'; // Исправлено: путь к CSS-файлу
import React from 'react';

// Импорт массива фотографий из файла data.js
import data from '../pages/data'; // Исправлено: импортируется весь объект, а не конкретный ключ

// Компонент галереи изображений
const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);

  // Создаем ref для отслеживания элемента, который содержит изображение
  const modalRef = useRef(null);

  const handleClick = (e, index) => {
    e.stopPropagation(); // Останавливаем всплытие события
    setCurrentImageIndex(index); // Просто открываем изображение без проверки
  };

  const handleClose = () => {
    setCurrentImageIndex(-1); // Закрываем изображение
  };

  const handleNext = () => {
    let nextIndex = currentImageIndex + 1;
    if (nextIndex >= data.photos.length) {
      nextIndex = 0;
    }
    setCurrentImageIndex(nextIndex);
  };

  const handlePrev = () => {
    let prevIndex = currentImageIndex - 1;
    if (prevIndex < 0) {
      prevIndex = data.photos.length - 1;
    }
    setCurrentImageIndex(prevIndex);
  };

  // Обработчик клика вне изображения
  const handleDocumentClick = (event) => {
    // Если клик был вне модального окна, то закрываем изображение
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  // Подписываемся на событие клика по документу при монтировании компонента
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <>
      <h1 className="galleryh">Галерея всех лет</h1>
      <div className="gallery">
        {data.photos.map((photo, index) => (
          <img
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            onClick={(e) => handleClick(e, index)}

          />
        ))}
      </div>
      {currentImageIndex !== -1 && (
        <div className="modal" ref={modalRef}>
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>
          <button className="nav-btn prev-btn" onClick={handlePrev}>
            &#10094;
          </button>
          <img
            src={data.photos[currentImageIndex].src}
            alt={data.photos[currentImageIndex].alt}
          />
          <button className="nav-btn next-btn" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
