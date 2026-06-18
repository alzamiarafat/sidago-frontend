export default function ArmitageHero() {
  return (
    <section className="armitage-hero">
      <div className="armitage-hero__inner armitage-container">
        <div className="armitage-hero__grid">
          <div className="armitage-hero__copy">
            <h1 className="armitage-hero__title">
              A new standard
              <br />
              for <span className="armitage-hero__accent">vault curation</span>
            </h1>
            <p className="armitage-hero__subtitle">
              Armitage curates onchain vaults, managing risk and earning yield for
              depositors backed by 9 years of active trading.
            </p>
          </div>

          <div className="armitage-hero__visual armitage-bevel-md">
            <video
              src="/media/hero-matrix.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="armitage-hero__video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
