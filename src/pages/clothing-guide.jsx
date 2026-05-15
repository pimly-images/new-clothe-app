// src/pages/clothing-guide.jsx
import React from 'react';

export const ClothingGuide = () => {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h1>服と体感温度のひみつ</h1>
      <p>服を1枚重ねるごとに、体感温度はどのくらい変わるのでしょうか？</p>
      
      <section>
        <h2>👕 Tシャツ（綿100%）</h2>
        <p>Tシャツ1枚で、体感温度は約 <strong>+2℃</strong> 上がると言われています。綿は吸水性が高いですが、汗をかくと冷えやすいので注意が必要です。</p>
      </section>

      <section>
        <h2>👔 長袖シャツ</h2>
        <p>長袖のシャツを羽織ると、空気の層ができて <strong>+3〜4℃</strong> の保温効果があります。</p>
      </section>

      <section>
        <h2>🧶 カーディガン・セーター</h2>
        <p>ニット素材は空気をたくさん含むので、1枚で <strong>+5℃以上</strong> 体感温度が変わることもあります。</p>
      </section>

      {/* ここに窪田さんが調べた知識をどんどん足していけます！ */}
    </div>
  );
};