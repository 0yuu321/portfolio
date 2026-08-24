const strengths = [
  {
    title: "課題を整理し、解決策を考える",
    body: "いきなりシステムを作るのではなく、利用者が抱えている課題や原因を整理し、必要な機能を考えることを大切にしています。保育園シフト作成支援システムでは、実際の利用者へのヒアリングから要件定義・画面設計まで経験しました。",
  },
  {
    title: "チームでの開発・ものづくり",
    body: "メンバーの意見を聞きながら、チームとして一つの方向にまとめていくことを大切にしています。システム開発だけでなく、ドローン競技ではチームリーダーとして練習の日程管理や意見の取りまとめを行い、全国大会準優勝を経験しました。",
  },
  {
    title: "アイデアを形にする",
    body: "自分が感じた不便や「あったら便利」を、Webアプリとして実際に形にすることが好きです。基本情報技術者試験の学習を効率化するための「FE STUDY POP!」など、身近な課題をテーマに個人開発にも取り組んでいます。",
  },
];

const skillGroups = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  },
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "Google Apps Script"],
  },
  {
    category: "Database",
    skills: ["MySQL", "DynamoDB", "Google Spreadsheet"],
  },
  {
    category: "Cloud / Tools",
    skills: ["AWS", "Git", "GitHub", "Figma"],
  },
];

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">About</p>
          <h2>私について</h2>
        </div>

        <div className="strength-grid" aria-label="得意分野">
          {strengths.map((strength) => (
            <article className="card strength-card" key={strength.title}>
              <h3>{strength.title}</h3>
              <p>{strength.body}</p>
            </article>
          ))}
        </div>

        <div id="skills" className="skills-section">
          <div className="section-heading compact">
            <p className="section-kicker">Skills</p>
            <h2>SKILLS</h2>
          </div>

          <div className="skill-grid" aria-label="スキル一覧">
            {skillGroups.map((group) => (
              <article className="card skill-card" key={group.category}>
                <h3>{group.category}</h3>
                <div className="tag-list">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
