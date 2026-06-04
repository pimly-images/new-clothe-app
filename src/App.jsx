import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/about';
import { ClothingGuide } from './pages/clothing-guide';

// --- 各都市のリスト ---
const cities = [
  { name: '札幌', query: 'Sapporo' },
  { name: '東京', query: 'Tokyo' },
  { name: '名古屋', query: 'Nagoya' },
  { name: '福岡', query: 'Fukuoka' },
  { name: 'ニューヨーク', query: 'New York' },
  { name: 'ロンドン', query: 'London' },
  { name: 'パリ', query: 'Paris' },
];

// --- 天気予報を表示するメイン画面のコンポーネント ---
const Home = ({ weather, loading, locationName, handleGetCurrentLocation, handleGetCityWeather, getUvLevel, getAdvice, getWeatherStyle, getMejiroConfig }) => {
  if (loading && !weather) return <div style={{ textAlign: 'center', marginTop: '30px' }}>読み込み中...</div>;

  const currentTemp = weather ? Math.round(weather.main.temp) : 0;
  const feelsLikeTemp = weather ? Math.round(weather.main.feels_like) : 0;
  const uvValue = weather ? weather.uvi : 0;
  const uvInfo = getUvLevel(uvValue);
  const weatherMain = weather ? weather.weather[0].main : 'Default';
  const mejiro = getMejiroConfig(weatherMain, uvValue);

  // 【修正！】お天気スタイル（背景色と文字色のセット）を呼び出す
  const weatherStyle = getWeatherStyle(weatherMain);

  return (
    // 【修正！】styleの中に背景（bg）と文字色（color）を両方適用！
    <div className={'top-main ' + weatherMain} style={{ background: weatherStyle.bg, color: weatherStyle.color, minHeight: '100vh', paddingBottom: '40px' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>今のお天気から見る服装アドバイザー</h1>
      <div className='current-place-box'>
        <button onClick={handleGetCurrentLocation} className='current-place-button'>
          📍 あなたの今いる場所の天気は？
        </button>
        <p className='ml-10' style={{ opacity: 0.8 }}><b>{locationName}</b>のお天気</p>
      </div>

      {/* 都市切り替えボタンのエリア */}
      <div className="city-buttons-container">
        {cities.map((city) => (
          <button 
            key={city.query} 
            onClick={() => handleGetCityWeather(city.query, city.name)}
            className="city-btn"
          >
            {city.name}
          </button>
        ))}
      </div>

      {weather && (
        <>
          <div className='mainbox'>
            <div className='current-place-box02'>
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} className="weather-icon" />
              <p className="weather-description">{weather.weather[0].description}</p>
            </div>
            <div className="temperature-style">{currentTemp}℃</div>
            <div style={{ marginBottom: '15px' }}>
              <span style={{ padding: '5px 15px', borderRadius: '15px', backgroundColor: uvInfo.color, color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>
                UV指数: {uvValue} ({uvInfo.label})
              </span>
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>（体感：{feelsLikeTemp}℃）</div>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>風速: {weather.wind.speed} m/s</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px', marginBottom: '20px', gap: '15px' }}>
              <img src={mejiro.image} alt="メジロ" style={{ width: '80px', height: 'auto' }} />
              <div style={{ position: 'relative', background: '#fff', borderRadius: '15px', padding: '12px', fontSize: '0.85rem', color: '#333', boxShadow: '2px 2px 10px rgba(0,0,0,0.05)', maxWidth: '180px', textAlign: 'left' }}>
                {mejiro.message}
                <div style={{ position: 'absolute', left: '-10px', top: '50%', marginTop: '-5px', borderWidth: '5px 10px 5px 0', borderStyle: 'solid', borderColor: 'transparent #fff transparent transparent' }}></div>
              </div>
            </div>
            <div style={{ marginTop: '10px', padding: '15px', backgroundColor: '#fff', borderRadius: '15px', color: '#333' }}>
              <p style={{ fontWeight: 'bold' }}>おすすめ：{getAdvice(feelsLikeTemp)}</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', opacity: 0.9 }}>
            <div style={{ width: '140px' }}>
              <p style={{ fontSize: '0.7rem' }}>-5℃ ({currentTemp - 5}℃)</p>
              <p style={{ fontWeight: 'bold', fontSize: '0.8rem' }}>{getAdvice(feelsLikeTemp - 5)}</p>
            </div>
            <div style={{ borderLeft: '1px solid rgba(0,0,0,0.1)', height: '60px' }}></div>
            <div style={{ width: '140px' }}>
              <p style={{ fontSize: '0.7rem' }}>+5℃ ({currentTemp + 5}℃)</p>
              <p style={{ fontWeight: 'bold', fontSize: '0.8rem' }}>{getAdvice(feelsLikeTemp + 5)}</p>
            </div>
          </div>
        </>
      )}
      
      <footer className='foot-menu' style={{ marginTop: '40px' }}>
        <div>
          <Link to="/about" style={{ color: 'inherit', textDecoration: 'underline' }}>🌞このサイトについて</Link>
        </div>
        <div style={{ marginLeft:'20px' }}>
          <Link to="/clothing-guide" style={{ color: 'inherit', textDecoration: 'underline', marginLeft:'20px' }}>🌡️服と体感温度のひみつ</Link>
        </div>
      </footer>
    </div>
  );
};

// --- メインのAppコンポーネント ---
function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState({ lat: 35.6895, lon: 139.6917 });
  const [locationName, setLocationName] = useState("新宿");

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const getUvLevel = (uv) => {
    if (uv >= 8) return { label: "非常に強い", color: "#d63384" };
    if (uv >= 6) return { label: "強い", color: "#fd7e14" };
    if (uv >= 3) return { label: "中程度", color: "#fadb14" };
    return { label: "低い", color: "#52c41a" };
  };

  const getAdvice = (temp) => {
    if (temp >= 25) return "半袖で快適。日差しに注意！";
    if (temp >= 20) return "長袖シャツや薄い羽織ものが◎";
    if (temp >= 15) return "ジャケットが必要な涼しさです。";
    if (temp >= 10) return "冬用コートを着て暖かく。";
    return "マフラー等も必要な寒さです。";
  };

  // 【ここが変わりました！】背景色（bg）と文字色（color）をセットで返す新関数！
  const getWeatherStyle = (weatherMain) => {
    switch (weatherMain) {
      case 'Clear': 
        return { bg: 'linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)', color: '#ff6b6b' }; // 晴れ：ピンク×水色背景、優しい赤文字
      case 'Clouds': 
        return { bg: 'linear-gradient(135deg, #E0EAFC 0%, #CFDEF3 100%)', color: '#333333' }; // 曇り：グレー背景、濃いグレー文字
      case 'Rain':
      case 'Drizzle': 
        return { bg: 'linear-gradient(135deg, #9599a2 0%, #2a3858 100%)', color: '#ffffff' }; // 霧雨・雨：暗い背景、白い文字！
      case 'Snow': 
        return { bg: 'linear-gradient(135deg, #E0EAFC 0%, #ffffff 100%)', color: '#4b5563' }; // 雪：白背景、グレー文字
      default: 
        return { bg: 'linear-gradient(135deg, #e0f2fe 0%, #fff 100%)', color: '#333333' };
    }
  };

  const getMejiroConfig = (weatherMain, uv) => {
    if (uv >= 6 && weatherMain === 'Clear') {
      return { image: "/mejiro-sunny.png", message: "日差しが強いね！メジロも日陰を探しちゃうよ。" };
    }
    switch (weatherMain) {
      case 'Rain':
      case 'Drizzle':
        return { image: "/mejiro-rain.png", message: "あめあめ、ふれふれ。雨宿りしていかない？" };
      case 'Clouds':
        return { image: "/mejiro-cloudy.png", message: "曇ってるねぇ。どんより気分も吹き飛ばそう！" };
      default:
        return { image: "/mejiro-sunny.png", message: "いいお天気！羽をのばしてどこへ行こうか？" };
    }
  };

  const fetchWeather = async (lat, lon) => {
    setLoading(true);
    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ja`
      );
      const weatherData = await weatherRes.json();
      const uvRes = await fetch(
        `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      const uvData = await uvRes.json();
      setWeather({ ...weatherData, uvi: uvData.value });
      if (weatherData.name) setLocationName(weatherData.name);
      setLoading(false);
    } catch (error) {
      console.error("データ取得エラー:", error);
      setLoading(false);
    }
  };

  const handleGetCityWeather = async (cityQuery, cityJapaneseName) => {
    setLoading(true);
    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&appid=${API_KEY}&units=metric&lang=ja`
      );
      const weatherData = await weatherRes.json();
      const { lat, lon } = weatherData.coord;
      const uvRes = await fetch(
        `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      const uvData = await uvRes.json();

      setWeather({ ...weatherData, uvi: uvData.value });
      setLocationName(cityJapaneseName);
      setLoading(false);
    } catch (error) {
      console.error("都市データの取得エラー:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(coords.lat, coords.lon);
  }, [coords]);

  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({ lat: position.coords.latitude, lon: position.coords.longitude });
      setLocationName("現在地");
    });
  };

  return (
    <Routes>
      {/* ホームページ */}
      <Route path="/" element={
        <Home 
          weather={weather} loading={loading} locationName={locationName} 
          handleGetCurrentLocation={handleGetCurrentLocation}
          handleGetCityWeather={handleGetCityWeather}
          getUvLevel={getUvLevel}
          getAdvice={getAdvice} 
          getWeatherStyle={getWeatherStyle} // 【修正！】新しい関数を渡す
          getMejiroConfig={getMejiroConfig}
        />
      } />

      {/* Aboutページ */}
      <Route path="/about" element={
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <About />
          <nav style={{ marginTop: '20px' }}><Link to="/">← ホームへ戻る</Link></nav>
        </div>
      } />

      {/* 服ごとの体感温度ページ */}
      <Route path="/clothing-guide" element={<ClothingGuide />} />
    </Routes>
  );
}

export default App;