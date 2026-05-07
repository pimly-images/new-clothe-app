import { useState, useEffect } from 'react';

function App() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 新宿の緯度・経度
  const lat = 35.6895;
  const lon = 139.6917;
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    // APIからデータを取得する関数
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ja`
        );
        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error("データ取得エラー:", error);
      }
    };

    fetchWeather();
  }, []);

  // 服装アドバイスの判定ロジック
  const getAdvice = (temp: number) => {
    if (temp >= 25) return "半袖で快適に過ごせます。日傘も忘れずに！";
    if (temp >= 20) return "長袖シャツやカーディガンがちょうどいいです。";
    if (temp >= 15) return "ジャケットやトレンチコートが必要な涼しさです。";
    if (temp >= 10) return "冬用のコートや厚手のブルゾンを着ましょう。";
    return "マフラーや手袋も検討する寒さです。";
  };

  if (loading) return <div style={{ textAlign: 'center', marginTop: '50px' }}>読み込み中...</div>;

  const currentTemp = Math.round(weather.main.temp);

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif', color: '#333' }}>
      <h1>新宿の「今」の服装</h1>
      
      <div style={{ margin: '40px auto', maxWidth: '450px', border: '2px solid #007bff', padding: '30px', borderRadius: '20px', backgroundColor: '#f0f8ff' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>現在の天気: {weather.weather[0].description}</p>
        <div style={{ fontSize: '4.5rem', fontWeight: 'bold', color: '#007bff' }}>{currentTemp}℃</div>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>風速: {weather.wind.speed} m/s</p>
        
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <p style={{ fontWeight: 'bold' }}>おすすめ：{getAdvice(currentTemp)}</p>
        </div>
      </div>

      {/* ±5度のアドバイス */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', color: '#666' }}>
        <div style={{ width: '150px' }}>
          <p style={{ fontSize: '0.8rem' }}>+5℃ ({currentTemp + 5}℃) なら</p>
          <p style={{ fontWeight: 'bold', color: '#444' }}>{getAdvice(currentTemp + 5)}</p>
        </div>
        <div style={{ borderLeft: '1px solid #ccc', height: '80px' }}></div>
        <div style={{ width: '150px' }}>
          <p style={{ fontSize: '0.8rem' }}>-5℃ ({currentTemp - 5}℃) なら</p>
          <p style={{ fontWeight: 'bold', color: '#444' }}>{getAdvice(currentTemp - 5)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;