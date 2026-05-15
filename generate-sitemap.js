const { SitemapStream, streamToPromise } = require('sitemap');
   const { Readable } = require('stream');
   const fs = require('fs');

   // 自分のサイトのURLリスト
   const links = [
     { url: '/',  changefreq: 'daily', priority: 1.0 },
     { url: '/about',  changefreq: 'monthly', priority: 0.7 },
     // 他のページを追加
   ];

   const stream = new SitemapStream({ hostname: 'https://www.otenki-to.com' });

   streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
     fs.writeFileSync('./public/sitemap.xml', data.toString());
     console.log('Sitemap created!');
   });