import React from 'react';
import { Link } from 'react-router-dom';

// もし共通のレイアウトコンポーネントがある場合は、適宜インポートして囲んでください
const AboutPage = () => {
  return (
    <div className='about-box' style={{
      
    }}>
      <header className='about-head'>
        <h1 style={{ color: '#4A90E2', fontSize: '2.5rem', marginBottom: '10px' }}>
          About
        </h1>
        <p style={{ color: '#888', fontSize: '1.1rem' }}>
          「今のお天気から見る服装アドバイス」について
        </p>
      </header>

      <section style={{ marginBottom: '40px' }} className='guide01'>
        <h2 style={{ borderBottom: '2px solid #f0f0f0', paddingBottom: '10px', color: '#555' }}>
          コンセプト
        </h2>
        <p>
          🌞「今日は何を着ていこう？」<br />
          朝、窓の外を見ながら悩む時間は、忙しい毎日の中で少しだけもったいない時間かもしれません。
        </p>
        <p>
          「お天気といっしょ」は、最新の気象データをもとに、その日の気温や天候にぴったりな服装の目安を提案するサービスです。
          あなたの毎日が、より軽やかで心地よいものになるようにお手伝いします。
        </p>
      </section>

      <section style={{ marginBottom: '40px' }} className='guide01'>
        <h2 style={{ borderBottom: '2px solid #f0f0f0', paddingBottom: '10px', color: '#555' }}>
          主な機能
        </h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>⭐️リアルタイム天気予報：</strong> 現在地の正確な天気を瞬時に確認できます。</li>
          <li><strong>🌡️体感温度：</strong> 体感温度を含めて服装のアドバイスをします。</li>
          <li><strong>👕服装アドバイス：</strong> 気温（最高・最低）に合わせた最適なコーディネートを提案します。</li>
          <li><strong>🗺️お出かけ指数：</strong> 雨具の必要性や、紫外線・寒さ対策のヒントをお届けします。</li>
          <li><strong>☀️UV指数：</strong> 紫外線の指数を表示お届けします。</li>
          <li><strong>🌍世界のお天気：</strong> 世界の代表都市のお天気や気温も確認できます。</li>
        </ul>
      </section>

      <section style={{ textAlign: 'center', marginTop: '80px', padding: '40px', backgroundColor: '#f9f9f9', borderRadius: '15px' }} className='guide01'>
        {/* メジロの吹き出しメッセージエリア */}
<div className="about-mejiro-chat">
  {/* メジロのイラスト */}
  <img src="/mejiro.png" alt="メジロ" className="about-mejiro" />

  {/* 吹き出しの本体 */}
  <div className="about-mejiro-balloon">
    <p>お気に入りの快適な服を着て、空を見上げて。スキップ🎵</p>
    <p style={{ marginTop: '5px', fontWeight: 'bold' }}>今日も素敵な一日になりますように。</p>
  </div>
</div>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '60px', fontSize: '0.9rem', color: '#aaa' }}>
        &copy; {new Date().getFullYear()} 今のお天気から見る服装アドバイス
        <nav style={{ marginTop: '20px', textAlign: 'center' }}>
                <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
                  ← ホームへ戻る
                </Link>
              </nav>    
      </footer>
    </div>
  );
};

export default AboutPage;