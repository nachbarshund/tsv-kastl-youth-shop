export const metadata = { title: 'Login · Jugendshop TSV Kastl' };

export default async function LoginPage({ searchParams }) {
  const sp = await searchParams;
  const error = sp?.error;
  return (
    <main className="center">
      <div className="logo-disc">
        <img src="/logo.png" alt="TSV Kastl Wappen" />
      </div>
      <div>
        <h1>Jugendshop</h1>
        <p className="sub" style={{ marginTop: 10 }}>
          TSV Kastl · Sammelbestellung für Vereinskleidung der Jugend. Das Passwort bekommst Du von Deinem Trainer.
        </p>
      </div>
      <form className="login-form" method="POST" action="/api/login">
        <label htmlFor="pw">Passwort</label>
        <input id="pw" name="password" type="password" className="pw" placeholder="Passwort eingeben" autoComplete="current-password" required />
        {error && <p className="error" role="alert">Das Passwort stimmt nicht. Versuch es noch einmal.</p>}
        <button type="submit" className="btn">Zum Shop</button>
      </form>
      <p className="note">Nur für Eltern und Trainer der TSV Kastl Jugend</p>
    </main>
  );
}
