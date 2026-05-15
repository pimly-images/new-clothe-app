// src/pages/clothing-guide.jsx
import React from 'react';

export const ClothingGuide = () => {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h1 className='guide-title'>🌡️服と体感温度のひみつ</h1>

      <p className='guide-copy'><strong>服を1枚重ねるごとに、体感温度はどのくらい変わるのでしょうか？</strong></p>
 <div className='guide-page-bg'>     
      <section className='guide01'>
        <h2>👕 Tシャツ（綿100%）</h2>
        <p>Tシャツ1枚で、体感温度は約 <strong>+2℃</strong> 上がると言われています。綿は吸水性が高いですが、汗をかくと冷えやすいので注意が必要です。</p>
      </section>

      <section className='guide01'>
        <h2>👔 長袖シャツ</h2>
        <p>長袖のシャツを羽織ると、空気の層ができて <strong>+3〜4℃</strong> の保温効果があります。</p>
      </section>

      <section className='guide01'>
        <h2>🧶 カーディガン・セーター</h2>
        <p>ニット素材は空気をたくさん含むので、1枚で <strong>+5℃以上</strong> 体感温度が変わることもあります。</p>
      </section>
 <section className='guide01'>
<h2>👚綿のシャツ（コットン）</h2><p>熱を伝える力（熱伝導率）が少し高めなので、実は「着るとすぐ温まる」というよりは「肌の熱を外に逃がしやすい」素材です。だから夏は涼しくて快適なんですね。</p>
</section>
 <section className='guide01'>
<h2>👕Tシャツの重ね着</h2><p>1枚で約 2℃。2枚重ねると、その間の「動かない空気（デッドエア）」が魔法瓶のような役割をして、単純な足し算以上の温かさを感じることがあります。</p>
</section>

 <section className='guide01'>
<h2>🐏「綿」が夏に涼しい理由</h2>
<p>綿は水分を吸うと、その水分を外に逃がそうとします。その時に周囲の熱を一緒に持っていく（気化熱）ので、涼しく感じます。</p>
</section>

 <section className='guide01'>
<h2>🐏「綿」が冬にひんやりする理由</h2>
<p>冬は空気が乾燥しているため、綿が含むわずかな水分が蒸発するだけでも、肌から熱を奪ってしまいます。だから冬に綿のシャツを1枚で着ると「なんだか寒い」と感じるんですね。</p>
</section>

 <section className='guide01'>
<h2>レイヤリング（重ね着）のひみつ</h2>
<figure>
<img src="/layer.png" alt="重ね着の仕組み" style={{ width: '100%',  height: 'auto' }} />
<figcaption style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
    ▲ 図1：重ね着による空気の層（デッドエア）のイメージ
  </figcaption>
</figure>
</section>

</div>

      {/* ここに窪田さんが調べた知識をどんどん足していけます！ */}
    </div>
  );
};