/**
 * Track hero (shared by Teens & Adults pages).
 */
export default function TrackHero({ image, titleA, titleB, desc, alt }) {
  return (
    <section className="track-hero">
      <div className="track-hero__glow bg-glow bg-glow--blue track-hero__glow--a" aria-hidden="true" />
      <div className="track-hero__glow bg-glow bg-glow--cyan track-hero__glow--b" aria-hidden="true" />

      <div className="container track-hero__grid">
        <div className="track-hero__copy">
          <h1 className="track-hero__title hero-enter">
            {titleA}
            <br />
            <span className="text-gradient">{titleB}</span>
          </h1>
          <p className="track-hero__desc hero-enter-1">{desc}</p>
        </div>

        <div className="track-hero__visual hero-enter-2" aria-hidden="true">
          <span className="track-hero__halo" />
          <img src={image} alt={alt || ''} className="track-hero__img anim-float" draggable="false" />
        </div>
      </div>
    </section>
  )
}
