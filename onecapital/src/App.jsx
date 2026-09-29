import "./styles.css";

function App() {
  return (
    <div className="site">
      {/* NAV */}
      <nav className="nav">
        <div className="brand">
          <span className="brand-mark">o</span>
          <span>one<span className="muted">Capital</span></span>
        </div>

        <div className="nav-center">
          <a href="#loans">Loans</a>
          <a href="#how">How it works</a>
          <a href="#business">For businesses</a>
        </div>

        <button className="nav-cta">Check eligibility</button>
      </nav>

      {/* HERO */}
      <main className="hero">
        <div className="hero-copy">
          <div className="pill">
            <span className="live-dot"></span>
            Smarter access to credit
          </div>

          <h1>
            Your next chapter
            <br />
            starts with <em>capital.</em>
          </h1>

          <p>
            Home loans and business finance, made simpler. OneCapital brings
            your financial picture together to help you find the right credit
            without the usual runaround.
          </p>

          <div className="hero-actions">
            <button className="main-btn">
              Find my loan <span>↗</span>
            </button>

            <button className="text-btn">
              I'm a business →
            </button>
          </div>

          <div className="hero-note">
            <span>✓</span>
            One application. Multiple lending possibilities.
          </div>
        </div>

        <div className="hero-art">
          <div className="sun"></div>

          <div className="house">
            <div className="roof"></div>
            <div className="house-body">
              <div className="window window-left"></div>
              <div className="window window-right"></div>
              <div className="door"></div>
            </div>
          </div>

          <div className="money-card">
            <div className="money-icon">₹</div>
            <div>
              <small>Home loan</small>
              <strong>₹48,00,000</strong>
            </div>
            <span className="approved">●</span>
          </div>

          <div className="rate-card">
            <small>Indicative rates</small>
            <strong>8.1%</strong>
            <span>starting from</span>
          </div>

          <div className="floating-card">
            <span className="check">✓</span>
            <div>
              <b>Profile ready</b>
              <small>Financial data connected</small>
            </div>
          </div>

          <div className="scribble">make<br />it happen</div>
        </div>
      </main>

      {/* LOAN TYPES */}
      <section className="loan-section" id="loans">
        <div className="section-intro">
          <div className="eyebrow">FINANCE FOR WHAT'S NEXT</div>

          <h2>
            One place for
            <br />
            <span>important moves.</span>
          </h2>

          <p>
            Whether you're buying a home or putting more capital into your
            business, we'll help you navigate the financing journey.
          </p>
        </div>

        <div className="loan-grid">
          <div className="loan-card home-loan">
            <div className="card-top">
              <span className="loan-tag">01 · HOME</span>
              <span className="arrow">↗</span>
            </div>

            <div className="card-content">
              <h3>
                A place
                <br />
                to call yours.
              </h3>

              <p>
                Home purchase, construction or balance transfer — find
                financing that fits your plans.
              </p>

              <button>Explore home loans →</button>
            </div>

            <div className="mini-house">
              <div className="mini-roof"></div>
              <div className="mini-body">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="loan-card business-loan" id="business">
            <div className="card-top">
              <span className="loan-tag">02 · BUSINESS</span>
              <span className="arrow">↗</span>
            </div>

            <div className="card-content">
              <h3>
                More room
                <br />
                to grow.
              </h3>

              <p>
                Working capital, expansion or a new opportunity — get
                financing built around your business.
              </p>

              <button>Explore business loans →</button>
            </div>

            <div className="bars-illustration">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="journey" id="how">
        <div className="journey-heading">
          <div className="eyebrow">THE ONECAPITAL JOURNEY</div>

          <h2>
            Less paperwork.
            <br />
            <span>More progress.</span>
          </h2>
        </div>

        <div className="journey-track">
          <div className="journey-line"></div>

          <div className="journey-step">
            <div className="step-circle">01</div>
            <h3>Tell us what you need</h3>
            <p>
              Home, business, purchase or expansion. Start with your goal.
            </p>
          </div>

          <div className="journey-step">
            <div className="step-circle">02</div>
            <h3>Build your profile</h3>
            <p>
              Connect your financial information securely with your consent.
            </p>
          </div>

          <div className="journey-step">
            <div className="step-circle">03</div>
            <h3>Explore your options</h3>
            <p>
              We help match your profile with relevant lending possibilities.
            </p>
          </div>

          <div className="journey-step">
            <div className="step-circle final">✓</div>
            <h3>Move forward</h3>
            <p>
              Choose an offer and complete the lender's application process.
            </p>
          </div>
        </div>
      </section>

      {/* DATA / AA */}
      <section className="data-section">
        <div className="data-visual">
          <div className="data-orbit outer"></div>
          <div className="data-orbit inner"></div>

          <div className="data-node node-one">
            <span>₹</span>
            Bank data
          </div>

          <div className="data-node node-two">
            <span>↗</span>
            Cash flow
          </div>

          <div className="data-node node-three">
            <span>✓</span>
            Repayments
          </div>

          <div className="central-node">
            <small>your</small>
            <strong>financial<br />picture</strong>
          </div>
        </div>

        <div className="data-copy">
          <div className="eyebrow">A BETTER WAY TO UNDERWRITE</div>

          <h2>
            There's more to
            <br />
            you than a <span>score.</span>
          </h2>

          <p>
            With your consent, OneCapital can use financial information
            available through Account Aggregators to create a more complete
            picture of your finances.
          </p>

          <div className="feature-list">
            <div>
              <span>01</span>
              <p>Consent-based financial data</p>
            </div>

            <div>
              <span>02</span>
              <p>Cash-flow aware borrower profiles</p>
            </div>

            <div>
              <span>03</span>
              <p>Built to connect you with formal credit</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS CTA */}
      <section className="business-banner">
        <div>
          <div className="eyebrow">FOR ENTREPRENEURS</div>

          <h2>
            Your business is
            <br />
            ready for its <em>next move.</em>
          </h2>

          <p>
            Don't let a complicated financing process slow it down.
          </p>

          <button className="white-btn">
            Explore business finance →
          </button>
        </div>

        <div className="growth-graphic">
          <div className="growth-label">BUSINESS GROWTH</div>

          <div className="growth-chart">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="growth-line"></div>
          </div>

          <div className="growth-number">
            <strong>+</strong>
            <span>room to grow</span>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="final-cta">
        <div className="eyebrow">ONECAPITAL</div>

        <h2>
          Ready when
          <br />
          you are.
        </h2>

        <p>
          Start with what you're trying to achieve.
          <br />
          We'll help you figure out the financing.
        </p>

        <button className="main-btn">
          Get started <span>↗</span>
        </button>
      </section>

      <footer>
        <div className="brand">
          <span className="brand-mark">o</span>
          <span>one<span className="muted">Capital</span></span>
        </div>

        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>

        <span>© 2026 OneCapital</span>
      </footer>
    </div>
  );
}

export default App;