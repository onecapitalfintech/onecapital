import { useState } from "react";
import "./styles.css";

const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");
const emi = (p, r, y) => {
  const m = r / 1200, n = y * 12;
  return (p * m * Math.pow(1 + m, n)) / (Math.pow(1 + m, n) - 1);
};

/* ---------- Illustrations (inline SVG, no dependencies) ---------- */
const Person = ({ x, y, s = 1, skin = "#C98B5E", cloth, hair = "#2B1B12", head = "hair", h = 70 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <rect x="-16" y="0" width="32" height={h} rx="14" fill={cloth} />
    <rect x="-9" y={h - 2} width="7" height="26" rx="3" fill="#2B2F45" />
    <rect x="2" y={h - 2} width="7" height="26" rx="3" fill="#2B2F45" />
    <circle cx="0" cy="-14" r="14" fill={skin} />
    {head === "hair" && <path d="M-14 -16a14 14 0 0 1 28 0c-6-6-22-6-28 0z" fill={hair} />}
    {head === "turban" && <path d="M-16 -18a16 13 0 0 1 32 0v4h-32z" fill="#F5A623" />}
    {head === "bun" && <><path d="M-14 -16a14 14 0 0 1 28 0c-6-6-22-6-28 0z" fill={hair} /><circle cx="0" cy="-30" r="6" fill={hair} /></>}
  </g>
);

const HeroScene = () => {
  const flags = ["#F5A623", "#FFF9E6", "#2E9E6B", "#E4572E"];
  const bunting = [...Array(12)].map((_, i) => {
    const t = (i + 1) / 13, u = 1 - t;
    const x = u * u * 40 + 2 * u * t * 320 + t * t * 610;
    const y = u * u * 96 + 2 * u * t * 140 + t * t * 70;
    return <path key={i} d={`M${x - 9} ${y} h18 l-9 20z`} fill={flags[i % 4]} stroke="#0F4C5C" strokeWidth="1" />;
  });
  return (
    <svg viewBox="0 0 640 400" className="art" role="img" aria-label="A shop and a family home side by side, with a proud family head holding house keys and loan papers">
      {/* Festive backdrop: glowing sun + rays */}
      <g>
        <circle cx="320" cy="200" r="185" fill="#FFE3A3" />
        <g stroke="#F59E0B" strokeWidth="2" opacity=".45">
          {[...Array(18)].map((_, i) => <line key={i} x1="320" y1="200" x2={320 + 340 * Math.cos((i * Math.PI) / 9)} y2={200 + 340 * Math.sin((i * Math.PI) / 9)} />)}
        </g>
        {[[60, 60], [600, 40], [560, 190], [24, 210], [300, 40]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i % 2 ? 4 : 6} fill="#F59E0B" opacity=".7" />)}
      </g>

      {/* Ground */}
      <rect x="0" y="372" width="640" height="28" fill="#2E9E6B" />
      <rect x="0" y="372" width="640" height="5" fill="#1F7A50" />

      {/* LEFT: Vyapar - the store */}
      <g id="shop">
        <rect x="30" y="200" width="240" height="172" fill="#FFFDF9" stroke="#0F4C5C" strokeWidth="5" />
        <rect x="60" y="136" width="180" height="30" rx="6" fill="#0F4C5C" />
        <text x="150" y="157" textAnchor="middle" fontSize="15" fontWeight="700" fill="#FFD700" fontFamily="Bricolage Grotesque, sans-serif">₹ LAXMI STORES</text>
        {[...Array(8)].map((_, i) => <path key={i} d={`M${30 + i * 30} 168 h30 v24 a15 15 0 0 1 -30 0z`} fill={i % 2 ? "#FFFDF9" : "#F59E0B"} stroke="#0F4C5C" strokeWidth="2" />)}
        <rect x="45" y="214" width="110" height="88" rx="4" fill="#FFE9B3" stroke="#0F4C5C" strokeWidth="4" />
        {[0, 1, 2].map((r) => [0, 1, 2, 3, 4].map((c) => <rect key={r + "-" + c} x={52 + c * 20} y={221 + r * 27} width="15" height="21" rx="3" fill={["#F59E0B", "#2E9E6B", "#0F4C5C", "#E4572E"][(r + c) % 4]} />))}
        <rect x="170" y="272" width="54" height="100" fill="#FFC94A" stroke="#0F4C5C" strokeWidth="4" />
        <rect x="178" y="280" width="38" height="92" fill="#0F4C5C" />
        {/* growth chart panel */}
        <rect x="172" y="212" width="80" height="52" rx="6" fill="#0F4C5C" />
        {[10, 20, 30, 40].map((h, i) => <rect key={i} x={181 + i * 15} y={256 - h} width="10" height={h} rx="2" fill={i === 3 ? "#FFD700" : "#9FD3C7"} />)}
        <path d="M180 240 L205 228 L222 234 L245 218" stroke="#FFFDF9" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M238 216 l9 1 -3 9z" fill="#FFFDF9" />
        {/* stocked sacks */}
        {[46, 84, 122].map((x, i) => (
          <g key={x}><rect x={x} y={334 - (i === 1 ? 10 : 0)} width="34" height={38 + (i === 1 ? 10 : 0)} rx="9" fill="#E8D5A8" stroke="#0F4C5C" strokeWidth="3" /><text x={x + 17} y={360} textAnchor="middle" fontSize="15" fontWeight="700" fill="#0F4C5C">₹</text></g>
        ))}
      </g>

      {/* Connecting courtyard gate between shop and home */}
      <g>
        <rect x="266" y="236" width="104" height="136" fill="#17565F" />
        <rect x="258" y="228" width="120" height="14" rx="4" fill="#0F4C5C" />
      </g>

      {/* RIGHT: Sapno ka Ghar - the family home */}
      <g id="home">
        <polygon points="356,228 486,128 616,228" fill="#0F4C5C" />
        <path d="M372 226 H600" stroke="#F59E0B" strokeWidth="5" strokeDasharray="3 9" strokeLinecap="round" />
        <rect x="372" y="228" width="228" height="144" fill="#FFFDF9" stroke="#0F4C5C" strokeWidth="5" />
        {[388, 538].map((x) => <rect key={x} x={x} y="250" width="44" height="44" fill="#FFC94A" stroke="#0F4C5C" strokeWidth="5" />)}
        <path d="M388 272 h44 M410 250 v44 M538 272 h44 M560 250 v44" stroke="#0F4C5C" strokeWidth="3" />
        <rect x="458" y="288" width="56" height="84" rx="4" fill="#C8642D" stroke="#0F4C5C" strokeWidth="5" />
        <circle cx="506" cy="332" r="3" fill="#FFD700" />
        {/* toran: marigold garland over door */}
        <path d="M452 292 Q486 316 520 292" fill="none" stroke="#2E9E6B" strokeWidth="7" strokeDasharray="7 5" transform="translate(0 6)" />
        <path d="M452 292 Q486 316 520 292" fill="none" stroke="#FFC94A" strokeWidth="9" strokeLinecap="round" strokeDasharray="0.1 11" />
        {/* rangoli */}
        <ellipse cx="486" cy="386" rx="36" ry="8" fill="#E4572E" />
        <ellipse cx="486" cy="386" rx="24" ry="5" fill="#FFC94A" />
        <ellipse cx="486" cy="386" rx="10" ry="3" fill="#FFFDF9" />
      </g>

      {/* Festive bunting stretched across both */}
      <path d="M40 96 Q320 140 610 70" fill="none" stroke="#0F4C5C" strokeWidth="2" />
      {bunting}

      {/* Family in front */}
      <Person x={250} y={302} s={0.95} h={50} cloth="#F59E0B" skin="#B97A50" />
      <Person x={395} y={250} s={1.3} h={70} cloth="#E4572E" head="bun" hair="#1E1410" />
      <Person x={450} y={302} s={0.95} h={50} cloth="#2E9E6B" head="bun" hair="#1E1410" skin="#B97A50" />
      <Person x={540} y={254} s={1.25} h={70} cloth="#FFFDF9" head="turban" skin="#B97A50" />
      {/* Head of family, centre stage */}
      <Person x={320} y={221} s={1.45} h={80} cloth="#FFFDF9" />
      <path d="M310 224 L334 262" stroke="#F59E0B" strokeWidth="9" strokeLinecap="round" />
      {/* raised arm with house keys */}
      <path d="M340 240 L374 212" stroke="#C98B5E" strokeWidth="10" strokeLinecap="round" />
      <g transform="translate(374 206)" fill="none" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round">
        <circle cx="0" cy="0" r="7" /><path d="M0 -7 v-12 M0 -19 h7 M0 -13 h5" />
      </g>
      {/* other arm with loan papers */}
      <path d="M300 240 L292 268" stroke="#C98B5E" strokeWidth="10" strokeLinecap="round" />
      <g transform="rotate(-8 290 270)"><rect x="278" y="258" width="24" height="32" rx="2" fill="#FFFDF9" stroke="#0F4C5C" strokeWidth="2.5" /><path d="M283 266h14M283 272h14M283 278h9" stroke="#2E9E6B" strokeWidth="2.5" /></g>
    </svg>
  );
};

const KiranaShop = () => (
  <svg viewBox="0 0 320 220" className="art art-sm" role="img" aria-label="Kirana shop owner managing stock">
    <rect x="20" y="196" width="280" height="10" rx="5" fill="#F5A623" />
    <rect x="40" y="70" width="240" height="126" fill="#FFF4DC" stroke="#0E3B43" strokeWidth="4" />
    <path d="M30 70h260l-16-40H46z" fill="#E4572E" />
    {[0, 1, 2, 3, 4, 5].map((i) => <path key={i} d={`M${46 + i * 40} 30h40l-4 40h-40z`} fill={i % 2 ? "#FFF4DC" : "#E4572E"} />)}
    {[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => <rect key={r + "" + c} x={56 + c * 28} y={92 + r * 30} width="20" height="22" rx="3" fill={["#F5A623", "#2E9E6B", "#17565F", "#E4572E"][(r + c) % 4]} />))}
    <rect x="165" y="140" width="100" height="56" fill="#0E3B43" />
    <Person x={215} y={112} cloth="#fff" head="turban" skin="#B97A50" h={50} s={0.9} />
    <text x="215" y="176" textAnchor="middle" fontSize="11" fill="#FFC94A" fontWeight="700">₹ Stock ready</text>
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 320 220" className="art art-sm" role="img" aria-label="Home with plot and construction">
    <rect x="20" y="196" width="280" height="10" rx="5" fill="#2E9E6B" />
    <path d="M70 110 L160 40 L250 110Z" fill="#0E3B43" />
    <rect x="85" y="110" width="150" height="86" fill="#FFF4DC" stroke="#0E3B43" strokeWidth="4" />
    <rect x="105" y="130" width="34" height="34" fill="#9FD3C7" stroke="#0E3B43" strokeWidth="4" />
    <rect x="175" y="140" width="34" height="56" fill="#C8642D" stroke="#0E3B43" strokeWidth="4" />
    <Person x={40} y={140} s={0.8} cloth="#E4572E" head="bun" h={48} />
    <Person x={282} y={140} s={0.8} cloth="#F5A623" h={48} />
  </svg>
);

/* ---------- Data ---------- */
const banks = ["HDFC Bank", "SBI", "ICICI Bank", "Axis Bank", "Bajaj Finserv", "Kotak", "PNB", "Tata Capital"];
const faqs = [
  ["What CIBIL score do I need?", "Most banks prefer 750+ for the lowest home loan rates. Scores from 650 to 750 can still get offers, usually at slightly higher rates. NBFCs are more flexible for business loans."],
  ["Which documents are needed for a working capital limit?", "Typically KYC, 6–12 months of bank statements, GST returns and ITR. With your consent, we can fetch bank data digitally, so you upload fewer papers."],
  ["How much can I save by transferring my home loan?", "A 0.5% rate drop on ₹50 lakh over 15 years can save several lakh rupees. Use the calculator above to check your own numbers."],
  ["Does comparing offers affect my CIBIL score?", "Checking eligibility here uses a soft check and does not lower your score. A hard enquiry happens only when you apply to a lender."],
  ["Is there any fee to use the service?", "Comparing offers is free. Any lender processing fee is shown upfront, before you choose."],
];
const stories = [
  ["Priya & Amit", "Homebuyers, Bengaluru", "We compared 6 offers in one evening and saved 0.4% on our rate. Our loan expert handled the builder paperwork.", "#B23A17"],
  ["Rajesh K.", "Textile manufacturer, Surat", "Cash-credit limit was sanctioned in 4 days. Earlier my bank kept asking for the same papers again and again.", "#1F7A50"],
  ["Sunita Devi", "Kirana owner, Jaipur", "I needed money to stock up before Diwali. They explained everything in Hindi and there were no hidden charges.", "#17565F"],
];

export default function App() {
  const [lead, setLead] = useState({ amount: "", type: "home", phone: "" });
  const [sent, setSent] = useState(false);
  const [tab, setTab] = useState("home");
  const [amt, setAmt] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [yrs, setYrs] = useState(20);
  const [turn, setTurn] = useState(20000000);
  const [margin, setMargin] = useState(20);

  const submit = (e) => {
    e.preventDefault();
    if (/^[6-9]\d{9}$/.test(lead.phone)) setSent(true);
  };
  const e = emi(amt, rate, yrs);
  const limit = turn * (margin / 100);

  return (
    <div className="site">
      <nav className="nav">
        <a className="brand" href="#top"><span className="brand-mark">₹</span>one<b>Capital</b></a>
        <div className="nav-links">
          <a href="#loans">Loans</a><a href="#calc">Calculator</a><a href="#how">How it works</a><a href="#faq">FAQ</a>
        </div>
        <a className="btn btn-saffron sm" href="#start">Check eligibility</a>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <span className="pill"><span className="live-dot" /> Free to compare. No spam calls.</span>
          <h1>Compare and secure the lowest home &amp; business loan rates in <mark>2 minutes</mark></h1>
          <p>One application, offers from 40+ banks and NBFCs. A loan expert stays with you from sanction to disbursal.</p>

          <form className="quick" id="start" onSubmit={submit}>
            {sent ? (
              <div className="sent">✓ Thank you! A loan expert will call {lead.phone} shortly.</div>
            ) : (
              <>
                <label>Loan amount
                  <input inputMode="numeric" placeholder="₹ 50,00,000" value={lead.amount} onChange={(x) => setLead({ ...lead, amount: x.target.value.replace(/\D/g, "") })} />
                </label>
                <label>Loan type
                  <select value={lead.type} onChange={(x) => setLead({ ...lead, type: x.target.value })}>
                    <option value="home">Home loan</option><option value="bt">Balance transfer</option>
                    <option value="wc">Working capital</option><option value="msme">MSME loan</option>
                  </select>
                </label>
                <label>Mobile number
                  <input inputMode="tel" maxLength={10} placeholder="10-digit number" value={lead.phone} onChange={(x) => setLead({ ...lead, phone: x.target.value.replace(/\D/g, "") })} />
                </label>
                <button className="btn btn-saffron" type="submit">See my offers</button>
              </>
            )}
          </form>
          <ul className="badges">
            <li>₹0 hidden fees</li><li>Instant in-principle sanction</li><li>50+ partner banks</li>
          </ul>
        </div>
        <div className="hero-art">
          <HeroScene />
          <div className="float badge badge-biz">
            <span className="tick gold" aria-hidden="true">₹</span>
            <div><b>Inventory Stocked</b><small>Working Capital Disbursed</small></div>
          </div>
          <div className="float badge badge-home">
            <span className="tick" aria-hidden="true">✓</span>
            <div><b>Griha Pravesh Ready</b><small>₹48,00,000 Sanctioned</small></div>
          </div>
        </div>
      </header>

      <section className="trust-bar" aria-label="Partner banks">
        <p>Partnered with 40+ banks and NBFCs</p>
        <div className="marquee">{banks.map((b) => <span key={b}>{b}</span>)}</div>
      </section>

      <section className="loans" id="loans">
        <h2>Two kinds of dreams. One place to fund them.</h2>
        <div className="loan-grid">
          <article className="loan-card home">
            <HomeIcon />
            <h3>Home loans</h3>
            <p>For the house your family has been waiting for.</p>
            <ul><li>New home purchase</li><li>Balance transfer (rate drop)</li><li>Top-up loans</li><li>Plot + construction</li></ul>
            <a className="btn btn-dark" href="#start">Compare home loans</a>
          </article>
          <article className="loan-card biz">
            <KiranaShop />
            <h3>Business &amp; commercial loans</h3>
            <p>For the shop, factory or firm you are building.</p>
            <ul><li>Working capital (OD/CC limits)</li><li>Inventory &amp; purchase order financing</li><li>Machinery loans</li><li>Unsecured MSME loans</li></ul>
            <a className="btn btn-saffron" href="#start">Compare business loans</a>
          </article>
        </div>
      </section>

      <section className="calc-sec" id="calc">
        <h2>Know your numbers before you apply</h2>
        <div className="calc">
          <div className="tabs" role="tablist">
            <button role="tab" aria-selected={tab === "home"} onClick={() => setTab("home")}>Home loan EMI</button>
            <button role="tab" aria-selected={tab === "wc"} onClick={() => setTab("wc")}>Working capital limit</button>
          </div>
          {tab === "home" ? (
            <div className="calc-body">
              <div className="sliders">
                <Slider label="Loan amount" val={inr(amt)} min={500000} max={20000000} step={100000} v={amt} set={setAmt} />
                <Slider label="Interest rate" val={rate.toFixed(1) + "%"} min={7} max={14} step={0.1} v={rate} set={setRate} />
                <Slider label="Tenure" val={yrs + " years"} min={1} max={30} step={1} v={yrs} set={setYrs} />
              </div>
              <div className="result">
                <small>Your monthly EMI</small><strong>{inr(e)}</strong>
                <dl><dt>Total interest</dt><dd>{inr(e * yrs * 12 - amt)}</dd><dt>Total payable</dt><dd>{inr(e * yrs * 12)}</dd></dl>
                <a className="btn btn-saffron" href="#start">Get this rate</a>
              </div>
            </div>
          ) : (
            <div className="calc-body">
              <div className="sliders">
                <Slider label="Annual turnover" val={inr(turn)} min={1000000} max={200000000} step={500000} v={turn} set={setTurn} />
                <Slider label="Limit as % of turnover" val={margin + "%"} min={10} max={25} step={1} v={margin} set={setMargin} />
              </div>
              <div className="result">
                <small>Indicative credit limit</small><strong>{inr(limit)}</strong>
                <p className="fine">Banks commonly assess up to 20% of turnover. Final limit depends on your financials.</p>
                <a className="btn btn-saffron" href="#start">Check my limit</a>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="how" id="how">
        <h2>From “I need a loan” to money in your account</h2>
        <ol>
          <li><span>1</span><h3>Enter your requirement</h3><p>Tell us the amount, loan type and a few basic details.</p></li>
          <li><span>2</span><h3>Compare instant offers</h3><p>See rates and EMIs from 40+ banks and NBFCs side by side.</p></li>
          <li><span>3</span><h3>Expert handles the rest</h3><p>A dedicated loan expert manages paperwork from sanction to disbursal.</p></li>
        </ol>
      </section>

      <section className="proof">
        <h2>Families and business owners like you</h2>
        <div className="stories">
          {stories.map(([n, w, q, c]) => (
            <figure key={n}>
              <blockquote>“{q}”</blockquote>
              <figcaption><span className="avatar" style={{ background: c }}>{n[0]}</span><div><b>{n}</b><small>{w}</small></div></figcaption>
            </figure>
          ))}
        </div>
        <div className="secure">
          <span>🔒 100% data protection</span><span>✓ RBI-regulated partner network</span><span>✓ Consent-based data sharing</span>
        </div>
      </section>

      <section className="faq" id="faq">
        <h2>Questions we hear every day</h2>
        {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </section>

      <section className="final">
        <h2>Ready when you are.</h2>
        <p>Start with what you want to achieve. We will find the right loan.</p>
        <a className="btn btn-saffron" href="#start">Get started</a>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">₹</span>one<b>Capital</b></a>
        <div><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Contact</a></div>
        <small>© 2026 OneCapital. *Indicative rate; final rate depends on lender and profile.</small>
      </footer>

      <div className="sticky-cta">
        <a className="btn btn-saffron" href="#start">Check eligibility</a>
        <a className="btn btn-call" href="tel:+910000000000" aria-label="Call us">📞</a>
      </div>
    </div>
  );
}

function Slider({ label, val, min, max, step, v, set }) {
  return (
    <label className="slider">
      <span><em>{label}</em><b>{val}</b></span>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(x) => set(+x.target.value)} />
    </label>
  );
}