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

const FamilyHome = () => (
  <svg viewBox="0 0 460 400" className="art" role="img" aria-label="Family standing outside their new home">
    <circle cx="230" cy="190" r="175" fill="#FFE3A3" />
    <g stroke="#F5A623" strokeWidth="2" opacity=".5">{[...Array(12)].map((_, i) => <line key={i} x1="230" y1="190" x2={230 + 215 * Math.cos((i * Math.PI) / 6)} y2={190 + 215 * Math.sin((i * Math.PI) / 6)} />)}</g>
    <rect x="40" y="330" width="380" height="14" rx="7" fill="#2E9E6B" />
    <path d="M70 150 L230 50 L390 150 Z" fill="#0E3B43" />
    <rect x="95" y="150" width="270" height="180" fill="#FFF4DC" stroke="#0E3B43" strokeWidth="5" />
    <rect x="120" y="185" width="50" height="50" fill="#9FD3C7" stroke="#0E3B43" strokeWidth="5" />
    <rect x="290" y="185" width="50" height="50" fill="#9FD3C7" stroke="#0E3B43" strokeWidth="5" />
    <rect x="205" y="240" width="50" height="90" fill="#C8642D" stroke="#0E3B43" strokeWidth="5" />
    <path d="M100 148h260" stroke="#F5A623" strokeWidth="6" strokeDasharray="4 10" />
    <Person x={150} y={250} cloth="#E4572E" head="bun" hair="#1E1410" />
    <Person x={205} y={262} s={0.7} cloth="#F5A623" skin="#B97A50" h={55} />
    <Person x={265} y={250} cloth="#2E9E6B" />
    <Person x={318} y={262} s={0.6} cloth="#17565F" skin="#B97A50" h={50} />
    <g transform="translate(330 60) rotate(8)"><rect width="110" height="46" rx="10" fill="#fff" /><text x="44" y="20" textAnchor="middle" fontSize="10" fill="#0E3B43">Griha Pravesh</text><text x="44" y="36" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1F7A50">Loan sanctioned ✓</text></g>
  </svg>
);

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
          <FamilyHome />
          <div className="float f1"><b><small>rates starting from</small></b>7%*</div>
          <div className="float f2"><b>₹48,00,000</b><small>Approved!</small></div>
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