import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Joko guztiak / Kategoriak');
  const [visibleNewsCount, setVisibleNewsCount] = useState(6);
  const [news, setNews] = useState<{ games: any[]; esports: any[] }>({ games: [], esports: [] });
  const [loading, setLoading] = useState(true);
  const [filteredNews, setFilteredNews] = useState<any[]>([]);
  const [savedNews, setSavedNews] = useState<any[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/news');
        setNews(response.data); 
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'Joko guztiak / Kategoriak') {
      setFilteredNews([...news.games, ...news.esports]);
    } else if (selectedCategory === 'Jokoak') {
      setFilteredNews(news.games);
    } else if (selectedCategory === 'Esports') {
      setFilteredNews(news.esports);
    }
  }, [selectedCategory, news]);

  useEffect(() => {
    const storedNews = localStorage.getItem('savedNews');
    if (storedNews) {
      setSavedNews(JSON.parse(storedNews));
    }
  }, []);

  useEffect(() => {
    if (savedNews.length > 0) {
      localStorage.setItem('savedNews', JSON.stringify(savedNews));
    }
  }, [savedNews]);

  const handleSaveNews = (newsItem: any) => {
    const isAlreadySaved = savedNews.some((item) => JSON.stringify(item) === JSON.stringify(newsItem));
    
    if (!isAlreadySaved) {
      setSavedNews((prevSavedNews) => [...prevSavedNews, newsItem]);
    }
  };

  const handleRemoveSavedNews = (newsItem: any) => {
    setSavedNews((prevSavedNews) =>
      prevSavedNews.filter((item) => JSON.stringify(item) !== JSON.stringify(newsItem))
    );
  };

  if (loading) return <p>Loading...</p>;

  const cardStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
  };

  return (
    <div className="container-fluid bg-black position-relative w-100 pb-3 px-3" style={{minHeight: "100vh"}}>
      <br />
      <br />
      <br />
      <br />

      <div className="row justify-content-center">
        <div className="col-md-8 col-12 text-center">
          <h4 className="text-white">Albisteak</h4>
          <div className="mb-3 w-50 mx-auto">
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>Joko guztiak / Kategoriak</option>
              <option>Esports</option>
              <option>Jokoak</option>
            </select>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center">
            {filteredNews.slice(0, visibleNewsCount).map((game, index) => (
              <div key={index} className="col d-flex justify-content-center">
                <div className="card bg-dark text-light rounded-3" style={cardStyle}>
                  <img
                    src={game.urlToImage}
                    className="card-img-top"
                    alt={game.title}
                    style={{ height: '70%', objectFit: 'cover', borderRadius: '10px' }}
                    onClick={() => window.location.href = game.url}
                  />
                  <div className="card-body p-2 d-flex flex-column justify-content-between">
                    <h6 className="card-title text-center mb-2" style={{ fontSize: '16px' }}>
                      {game.title}
                    </h6>
                    <p className="card-text text-white" style={{ fontSize: '14px' }}>
                      {game.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <button
                        className="btn btn-sm btn-outline-light"
                        onClick={() => handleSaveNews(game)}
                      >
                        💾 Guardar
                      </button>
                      <p className="card-text text-white mb-0" style={{ fontSize: '14px' }}>
                        {new Date(game.publishedAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleNewsCount < filteredNews.length && (
            <div className="d-flex justify-content-center mt-4 mb-4">
              <button
                className="btn btn-dark mt-3"
                onClick={() => setVisibleNewsCount(visibleNewsCount + 6)}
              >
                Gehiago ikusi →
              </button>
            </div>
          )}
        </div>

        <div className="col-md-4 col-12 text-center">
          <h4 className="text-white">Noticias Guardadas</h4>
          <ul className="list-group list-group-flush">
            {savedNews.slice(0, 3).map((game, index) => (
              <li key={index} className="list-group-item bg-dark text-light">
                <h6>{game.title}</h6>
                <small className="text-muted">{new Date(game.publishedAt).toLocaleString()}</small>
                <p className="card-text text-white" style={{ fontSize: '14px' }}>
                  {game.description}
                </p>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleRemoveSavedNews(game)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <button className="btn btn-dark mt-3">Ver todas las guardadas →</button>
        </div>
      </div>
    </div>
  );
};

export default News;
