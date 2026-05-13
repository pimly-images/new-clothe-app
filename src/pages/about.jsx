import React from 'react';

// もし共通のレイアウトコンポーネントがある場合は、適宜インポートして囲んでください
const AboutPage = () => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif',
      color: '#333',
      lineHeight: '1.8'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ color: '#4A90E2', fontSize: '2.5rem', marginBottom: '10px' }}>
          About
        </h1>
        <p style={{ color: '#888', fontSize: '1.1rem' }}>
          「お天気といっしょ」について
        </p>
      </header>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #f0f0f0', paddingBottom: '10px', color: '#555' }}>
          コンセプト
        </h2>
        <p>
          「今日は何を着ていこう？」<br />
          朝、窓の外を見ながら悩む時間は、忙しい毎日の中で少しだけもったいない時間かもしれません。
        </p>
        <p>
          「お天気といっしょ」は、最新の気象データをもとに、その日の気温や天候にぴったりな服装の目安を提案するサービスです。
          あなたの毎日が、より軽やかで心地よいものになるようにお手伝いします。
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #f0f0f0', paddingBottom: '10px', color: '#555' }}>
          主な機能
        </h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>リアルタイム天気予報：</strong> 現在地の正確な天気を瞬時に確認できます。</li>
          <li><strong>服装アドバイス：</strong> 気温（最高・最低）に合わせた最適なコーディネートを提案します。</li>
          <li><strong>お出かけ指数：</strong> 雨具の必要性や、紫外線・寒さ対策のヒントをお届けします。</li>
        </ul>
      </section>

      <section style={{ textAlign: 'center', marginTop: '80px', padding: '40px', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
        <p style={{ fontStyle: 'italic', color: '#666' }}>
          お気に入りの服を着て、空を見上げて。
          今日も素敵な一日になりますように。
        </p>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '60px', fontSize: '0.9rem', color: '#aaa' }}>
        &copy; {new Date().getFullYear()} お天気といっしょ
      </footer>
    </div>
  );
};

export default AboutPage;