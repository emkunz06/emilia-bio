import { Link } from 'react-router-dom';

const portfolioItems = [
  { title: 'Editorial 01', tag: 'Motion / Editorial', image: 'https://cdn.corenexis.com/f/FAi5Ix097sm.jpg' },
  { title: 'Campaign 02', tag: 'Commercial / Studio', image: 'https://cdn.corenexis.com/f/lFiwBbLvL6j.jpg' },
  { title: 'Portrait 03', tag: 'Clean / Minimal', image: 'https://cdn.corenexis.com/f/eSzDyyvx7rE.jpg' },
  { title: 'Commercial 04', tag: 'Fashion / Beauty', image: 'https://cdn.corenexis.com/f/4UoRuo78pXR.jpg' },
  { title: 'Runway 05', tag: 'Movement / Fashion', image: 'https://cdn.corenexis.com/f/ujsHFSruYR7.jpeg' },
  { title: 'Studio 06', tag: 'Portrait / Campaign', image: 'https://cdn.corenexis.com/f/8uiHHwwrUtA.jpg' },
];

export default function PortfolioPage() {
  return (
    <main className="page-shell portfolio-page">
      <section className="section portfolio-intro">
        <div className="site-header portfolio-header">
          <Link to="/" className="brand">Emi Marie</Link>
          <nav className="nav-links">
            <span className="nav-current">Portfolio</span>
            <a href="/#artwork">Artwork</a>
          </nav>
        </div>

        <div className="portfolio-hero-grid">
          <div>
            <p className="section-label">Portfolio</p>
            <h1 className="portfolio-title">Selected work</h1>
            <p className="portfolio-copy">
              A curated archive of editorial, commercial, and fashion images built to keep the strongest frames close and easy to browse.
            </p>
            <div className="portfolio-tags">
              <span>Editorial</span>
              <span>Commercial</span>
              <span>Fashion</span>
              <span>Campaign</span>
            </div>
          </div>

          <div className="portfolio-hero-card">
            <img src="https://cdn.corenexis.com/f/FvksMCydcQu.jpg" alt="Portfolio hero" />
          </div>
        </div>
      </section>

      <section className="section portfolio-grid-section">
        <div className="artwork-grid">
          {portfolioItems.map((item, index) => (
            <article key={`${item.title}-${index}`} className="artwork-card">
              <div className="card-visual">
                <img src={item.image} alt={item.title} />
                <div className="card-caption">
                  <p>{item.tag}</p>
                  <h3>{item.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
