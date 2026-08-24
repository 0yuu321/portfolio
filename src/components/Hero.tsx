export function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="section-kicker">Portfolio</p>
          <h1>本間 志悠</h1>
          <p className="hero-lead">
            課題を見つけ、アイデアをWebサービスとして形にできるエンジニアを目指しています。
          </p>
          <p className="hero-description">
            さいたまIT・WEB専門学校で、Web開発・データベース・AWS・プロジェクトマネジメントなどを学んでいます。
            チーム開発では、実在する保育園のシフト作成支援システムに取り組み、ヒアリングや要件定義、画面設計を経験しました。
            将来は、多くの人が実際に利用するWebサービスの企画から開発まで携わり、ユーザーの課題を解決できるエンジニアを目指しています。
          </p>
          <a className="primary-button" href="#works">
            作品を見る
          </a>
        </div>
        <div className="hero-panel" aria-label="学習領域">
          <span>Web Development</span>
          <span>Database</span>
          <span>AWS</span>
          <span>Project Management</span>
        </div>
      </div>
    </section>
  );
}
