
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <ul>
      <li><Link to="/MenuPage">Меню</Link></li>
        <li><Link to="/page1">Фото 2021г.</Link></li>
        <li><Link to="/page2">Фото 2022г.</Link></li>
        <li><Link to="/page3">Фото 2023г.</Link></li>
        <li><Link to="/gallery">Галерея</Link></li>
        {/* Добавьте больше ссылок для других страниц */}
      </ul>
    </nav>
  );
};

export default Navbar;