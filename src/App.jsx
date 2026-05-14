import { useState, useEffect } from 'react';
import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/about';

// --- 天気予報を表示するメイン画面のコンポーネント ---
const Home = ({ weather, loading, locationName, handleGetCurrentLocation, getUvLevel, getAdvice, getBackgroundStyle, getMejiroConfig }) => {
  if (loading && !weather) return <div style={{ textAlign: 'center', marginTop: '50px' }}>読み込み中...</div>;

  const currentTemp = weather ? Math.round(weather.main.temp) : 0;
  const feelsLikeTemp = weather ? Math.round(weather.main.feels_like) : 0;
  const uvValue = weather ? weather.uvi : 0;
  const uvInfo = getUvLevel(uvValue);
  const weatherMain = weather ? weather.weather[0].main : 'Default';
  const backgroundStyle = getBackgroundStyle(weatherMain);
  const mejiro = getMejiroConfig(weatherMain, uvValue);

  return (
    <div style={{ 
      textAlign: 'center', padding: '40px 20px', fontFamily: 'sans-serif', 
      background: backgroundStyle, transition: 'background 0.5s ease',
      color: weatherMain === 'Rain' ? '#fff' : '#333', minHeight: '100vh' 
    }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>今のお天気から見る服装アドバイザー</h1>
      <div className='current-place-box'>
        <button onClick={handleGetCurrentLocation} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold' }}>
          📍 あなたの今いる場所の天気は？
        </button>
        <p className='ml-10' style={{ opacity: 0.8 }}><b>{locationName}</b>のお天気</p>
      </div>

      {weather && (
        <>
          <div style={{ 
            margin: '0 auto 40px', maxWidth: '80%', padding: '30px', borderRadius: '30px', 
            backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',         
            border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)' 
          }}>
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
      
      <footer style={{ marginTop: '40px' }}>
        <Link to="/about" style={{ color: 'inherit', textDecoration: 'underline' }}>このサイトについて (About)</Link>
      </footer>
    </div>
  );
};

// --- メインのAppコンポーネント ---
>>>>>>> 13cc7f9 (feat: React Routerを導入し、Aboutページを追加)
=======

>>>>>>> 9d403b62e4b21fd59057021da30572dccfa19e4e
function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState({ lat: 35.6895, lon: 139.6917 });
  const [locationName, setLocationName] = useState("新宿");
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9d403b62e4b21fd59057021da30572dccfa19e4e

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  // --- 判定ロジック群 ---

<<<<<<< HEAD
=======
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  // 判定ロジック群
>>>>>>> 13cc7f9 (feat: React Routerを導入し、Aboutページを追加)
=======
>>>>>>> 9d403b62e4b21fd59057021da30572dccfa19e4e
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

  const getBackgroundStyle = (weatherMain) => {
    switch (weatherMain) {
      case 'Clear': return 'linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)';
      case 'Clouds': return 'linear-gradient(135deg, #E0EAFC 0%, #CFDEF3 100%)';
<<<<<<< HEAD
<<<<<<< HEAD
      case 'Rain':
      case 'Drizzle': return 'linear-gradient(135deg, #606c88 0%, #3f4c6b 100%)';
=======
      case 'Rain': case 'Drizzle': return 'linear-gradient(135deg, #606c88 0%, #3f4c6b 100%)';
>>>>>>> 13cc7f9 (feat: React Routerを導入し、Aboutページを追加)
=======
      case 'Rain':
      case 'Drizzle': return 'linear-gradient(135deg, #606c88 0%, #3f4c6b 100%)';
>>>>>>> 9d403b62e4b21fd59057021da30572dccfa19e4e
      case 'Snow': return 'linear-gradient(135deg, #E0EAFC 0%, #ffffff 100%)';
      default: return 'linear-gradient(135deg, #e0f2fe 0%, #fff 100%)';
    }
  };

  const getMejiroConfig = (weatherMain, uv) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9d403b62e4b21fd59057021da30572dccfa19e4e
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

  // --- データ取得処理 ---

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
<<<<<<< HEAD
=======
    if (uv >= 6 && weatherMain === 'Clear') return { image: "/mejiro-sunny.png", message: "日差しが強いね！メジロも日陰を探しちゃうよ。" };
    switch (weatherMain) {
      case 'Rain': case 'Drizzle': return { image: "/mejiro-rain.png", message: "あめあめ、ふれふれ。雨宿りしていかない？" };
      case 'Clouds': return { image: "/mejiro-cloudy.png", message: "曇ってるねぇ。どんより気分も吹き飛ばそう！" };
      default: return { image: "/mejiro-sunny.png", message: "いいお天気！羽をのばしてどこへ行こうか？" };
    }
  };

  const fetchWeather = async (lat, lon) => {
    setLoading(true);
    try {
      const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ja`);
      const weatherData = await weatherRes.json();
      const uvRes = await fetch(`https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
>>>>>>> 13cc7f9 (feat: React Routerを導入し、Aboutページを追加)
=======
>>>>>>> 9d403b62e4b21fd59057021da30572dccfa19e4e
      const uvData = await uvRes.json();
      setWeather({ ...weatherData, uvi: uvData.value });
      if (weatherData.name) setLocationName(weatherData.name);
      setLoading(false);
    } catch (error) {
      console.error("データ取得エラー:", error);
      setLoading(false);
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
    fetchWeather(coords.lat, coords.lon);
  }, [coords]);
=======
  useEffect(() => { fetchWeather(coords.lat, coords.lon); }, [coords]);
>>>>>>> 13cc7f9 (feat: React Routerを導入し、Aboutページを追加)
=======
  useEffect(() => {
    fetchWeather(coords.lat, coords.lon);
  }, [coords]);
>>>>>>> 9d403b62e4b21fd59057021da30572dccfa19e4e

  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({ lat: position.coords.latitude, lon: position.coords.longitude });
      setLocationName("現在地");
    });
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9d403b62e4b21fd59057021da30572dccfa19e4e
  if (loading && !weather) return <div style={{ textAlign: 'center', marginTop: '50px' }}>読み込み中...</div>;

  // --- 表示用データの準備 ---
  const currentTemp = weather ? Math.round(weather.main.temp) : 0;
  const feelsLikeTemp = weather ? Math.round(weather.main.feels_like) : 0;
  const uvValue = weather ? weather.uvi : 0;
  const uvInfo = getUvLevel(uvValue);
  const weatherMain = weather ? weather.weather[0].main : 'Default';
  const backgroundStyle = getBackgroundStyle(weatherMain);
  const mejiro = getMejiroConfig(weatherMain, uvValue);

  return (
    <div style={{ 
      textAlign: 'center', padding: '40px 20px', fontFamily: 'sans-serif', 
      background: backgroundStyle, transition: 'background 0.5s ease',
      color: weatherMain === 'Rain' ? '#fff' : '#333', minHeight: '100vh' 
    }}>

      <h1 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>今のお天気から見る服装アドバイザー</h1>
<div className='current-place-box'>
      <button onClick={handleGetCurrentLocation} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold' }}>
        📍 現在地でチェック
      </button>

      <p className='ml-10' style={{ opacity: 0.8 }}><b>{locationName}</b>のお天気</p>
</div>
      

      {weather && (
        <>
          <div style={{ 
            margin: '0 auto 40px', maxWidth: '80%', padding: '30px', borderRadius: '30px', 
            backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',         
            border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)' 
          }}>

<div className='current-place-box02'>
{/* 天気アイコンの表示 */}
<img 
  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
  alt={weather.weather[0].description} 
  className="weather-icon"
/>
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
            
            {/* メジロエリア */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px', marginBottom: '20px', gap: '15px' }}>
              <img src={mejiro.image} alt="メジロ" style={{ width: '80px', height: 'auto' }} />
              <div style={{ 
                position: 'relative', background: '#fff', borderRadius: '15px', padding: '12px', 
                fontSize: '0.85rem', color: '#333', boxShadow: '2px 2px 10px rgba(0,0,0,0.05)', maxWidth: '180px', textAlign: 'left'
              }}>
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
              <p style={{ fontSize: '0.7rem' }}>+5℃ ({currentTemp + 5}℃)</p>
              <p style={{ fontWeight: 'bold', fontSize: '0.8rem' }}>{getAdvice(feelsLikeTemp + 5)}</p>
            </div>
            <div style={{ borderLeft: '1px solid rgba(0,0,0,0.1)', height: '60px' }}></div>
            <div style={{ width: '140px' }}>
              <p style={{ fontSize: '0.7rem' }}>-5℃ ({currentTemp - 5}℃)</p>
              <p style={{ fontWeight: 'bold', fontSize: '0.8rem' }}>{getAdvice(feelsLikeTemp - 5)}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
<<<<<<< HEAD
=======
  return (
    <Routes>
      <Route path="/" element={
        <Home 
          weather={weather} loading={loading} locationName={locationName} 
          handleGetCurrentLocation={handleGetCurrentLocation} getUvLevel={getUvLevel}
          getAdvice={getAdvice} getBackgroundStyle={getBackgroundStyle} getMejiroConfig={getMejiroConfig}
        />
      } />
      <Route path="/about" element={
        <>
          <nav style={{ padding: '20px', textAlign: 'center' }}><Link to="/">← Homeへ戻る</Link></nav>
          <About />
        </>
      } />
    </Routes>
  );
}

export default App;
>>>>>>> 13cc7f9 (feat: React Routerを導入し、Aboutページを追加)
=======
>>>>>>> 9d403b62e4b21fd59057021da30572dccfa19e4e
