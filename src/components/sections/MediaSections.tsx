const images = Array.from({ length: 47 }, (_, index) => `/gallery/image-${String(index + 1).padStart(2, "0")}.jpeg`);
const videos = Array.from({ length: 6 }, (_, index) => `/gallery/video-${String(index + 1).padStart(2, "0")}.mp4`);

export function MediaGallery() {
  return <><section className="page-heading"><div className="page-shell max-w-3xl"><span className="eyebrow">Gallery</span><h1>Moments of devotion and togetherness</h1><p>A glimpse into gatherings shaped by prayer, seva and the warmth of a shared spiritual path.</p></div></section><section className="section bg-white"><div className="page-shell gallery-grid">{images.map((src, index) => <figure className="gallery-item" key={src}><img src={src} alt={`Satguru Sain Sadhram Sahib gathering ${index + 1}`} loading="lazy"/></figure>)}</div></section></>;
}

export function MediaVideos() {
  return <><section className="page-heading"><div className="page-shell max-w-3xl"><span className="eyebrow">Video library</span><h1>Watch, reflect and reconnect</h1><p>Messages and moments of devotion to watch at your own pace.</p></div></section><section className="section bg-white"><div className="page-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">{videos.map((src, index) => <article key={src} className="overflow-hidden rounded-3xl border border-[#eadfce] bg-[#fffdf9]"><video controls preload="metadata" poster={images[index]} className="aspect-video w-full bg-[#3d0b13]"><source src={src} type="video/mp4"/>Your browser does not support video playback.</video></article>)}</div></section></>;
}
