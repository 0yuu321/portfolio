const works = [
  {
    title: "FE STUDY POP!",
    type: "個人開発",
    summary:
      "基本情報技術者試験の学習を効率化するために制作したWebアプリです。学校の課題をきっかけに、AIを開発支援として活用した個人開発に挑戦しました。",
    purpose:
      "単純に問題を解くだけではなく、ゲーム要素や復習機能を取り入れることで、飽きずに継続して学習できるアプリを目指しました。",
    role: "",
    technologies: ["React", "TypeScript", "LocalStorage"],
    features: ["四択クイズ", "FEオセロ", "復習箱", "解説・メモ機能", "学習状況管理"],
    effort:
      "学習を継続しやすくするため、クイズだけではなくゲーム要素を取り入れました。また、間違えた問題を繰り返し復習し、一定の理解度に達すると復習対象から外れる仕組みを取り入れています。",
    future:
      "今後さらに機能追加やUIの改善を行い、より継続して学習しやすいアプリにしていきたいと考えています。",
    linkLabel: "アプリを見る",
    linkUrl: "https://0yuu321.github.io/fe-study-pop/",
    note: "",
    screenshots: [
      {
        src: "/works-images/study-pop-quiz.png",
        alt: "FE STUDY POP!の四択クイズ画面",
        caption: "四択クイズ",
      },
      {
        src: "/works-images/study-pop-othello.png",
        alt: "FE STUDY POP!のFEオセロ画面",
        caption: "FEオセロ",
      },
      {
        src: "/works-images/study-pop-review-box.png",
        alt: "FE STUDY POP!の復習箱画面",
        caption: "復習箱",
      },
    ],
  },
  {
    title: "保育園シフト作成支援システム",
    type: "チーム開発",
    summary:
      "実在する保育園のシフト作成業務を支援するために、チームで開発したWebシステムです。",
    purpose:
      "保育園で行われているシフト作成業務の負担を軽減し、職員の希望を考慮したシフト作成を支援することを目的としています。",
    role: "保育園へのヒアリング / 要件定義 / 画面設計 / 開発サポート",
    technologies: ["Google Apps Script", "HTML", "CSS", "Google Spreadsheet", "GitHub"],
    features: [],
    effort:
      "実際に利用する保育園へのヒアリングを行い、現場の要望や課題を整理した上で、必要な機能や画面構成を検討しました。",
    future:
      "実際の運用を想定しながら、操作性や機能面をさらに改善していくことが課題です。",
    linkLabel: "GitHubを見る",
    linkUrl: "https://github.com/SIW-ShiftSystem/shift-app-public",
    note: "※本システムはGoogle Apps ScriptおよびGoogle Spreadsheetを利用しているため、実行には初期セットアップが必要です。セットアップ手順はGitHubに掲載しています。",
    screenshots: [
      {
        src: "/works-images/shift-frontend-form.png",
        alt: "保育園シフト作成支援システムの希望休提出フォーム画面",
        caption: "フロントエンド：希望休提出フォーム",
      },
      {
        src: "/works-images/shift-frontend-calendar.png",
        alt: "保育園シフト作成支援システムのカレンダー入力画面",
        caption: "フロントエンド：カレンダー入力",
      },
      {
        src: "/works-images/shift-backend-spreadsheet.png",
        alt: "保育園シフト作成支援システムのGoogle Spreadsheet管理画面",
        caption: "バックエンド：Google Spreadsheet連携",
      },
    ],
  },
];

export function Works() {
  return (
    <section id="works" className="section works">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Works</p>
          <h2>WORKS</h2>
        </div>

        <div className="works-list">
          {works.map((work) => (
            <article className="card work-card" key={work.title}>
              <div className="screenshot-gallery" aria-label={`${work.title}のスクリーンショット`}>
                {work.screenshots.map((screenshot, index) => (
                  <figure
                    className={index === 0 ? "screenshot-item featured" : "screenshot-item"}
                    key={screenshot.src}
                  >
                    <img src={screenshot.src} alt={screenshot.alt} />
                    <figcaption>{screenshot.caption}</figcaption>
                  </figure>
                ))}
              </div>

              <div className="work-content">
                <div className="work-title-row">
                  <div>
                    <p className="work-type">{work.type}</p>
                    <h3>{work.title}</h3>
                  </div>
                  <a
                    className="primary-button work-button"
                    href={work.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {work.linkLabel}
                  </a>
                </div>

                <div className="work-details">
                  <div>
                    <h4>概要</h4>
                    <p>{work.summary}</p>
                  </div>
                  <div>
                    <h4>目的</h4>
                    <p>{work.purpose}</p>
                  </div>
                  {work.role && (
                    <div>
                      <h4>担当</h4>
                      <p>{work.role}</p>
                    </div>
                  )}
                  {work.features.length > 0 && (
                    <div>
                      <h4>主な機能</h4>
                      <ul className="feature-list">
                        {work.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h4>使用技術</h4>
                    <div className="tag-list">
                      {work.technologies.map((technology) => (
                        <span className="skill-tag" key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4>工夫した点</h4>
                    <p>{work.effort}</p>
                  </div>
                  <div>
                    <h4>今後の課題</h4>
                    <p>{work.future}</p>
                  </div>
                </div>

                {work.note && <p className="work-note">{work.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
