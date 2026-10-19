const strengths = [
  {
    category: "強み",
    title: "最後までやりきる力",
    body: "1年生のときにチームリーダーとして参加したドローン競技大会では、練習の日程管理や意見の取りまとめを担当しました。飛行が安定せず苦戦することもありましたが、諦めずに練習を重ね、全国大会準優勝を達成しました。",
  },
  {
    category: "得意",
    title: "アイデアを考えること",
    body: "日常生活で不便を感じると、「もっと便利にできないか」「別の方法はないか」と考えることがよくあります。新しいアイデアや改善策を考えることが好きです。",
  },
  {
    category: "好きなこと",
    title: "料理",
    body: "一人暮らしをきっかけに自炊を始め、イタリアンのキッチンでのアルバイトを通じて、徐々に料理が好きになりました。今後は、特技と言えるくらい上達したいと思っています。",
  },
];

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 3 },
      { name: "CSS", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "React", level: 2 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", level: 3 },
      { name: "FastAPI", level: 2 },
      { name: "Google Apps Script", level: 2 },
      { name: "Java", level: 1 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: 3 },
      { name: "DynamoDB", level: 1 },
    ],
  },
  {
    category: "Cloud / Tools",
    skills: [
      { name: "AWS", level: 2 },
      { name: "GitHub", level: 3 },
      { name: "Figma", level: 3 },
      { name: "Google スプレッドシート", level: 2 },
    ],
  },
];

const skillLevels = [
  "基礎知識あり",
  "学習・演習経験あり",
  "調べながら実装可能",
  "自力で設計・実装可能",
  "応用的な開発が可能",
];

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">About</p>
          <h2>私について</h2>
        </div>

        <div className="strength-grid" aria-label="強み・得意・好きなこと">
          {strengths.map((strength) => (
            <article className="card strength-card" key={strength.title}>
              <h3>
                <span className="strength-category">{strength.category}</span>
                {strength.title}
              </h3>
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
                <ul className="skill-list">
                  {group.skills.map((skill) => (
                    <li className="skill-row" key={skill.name}>
                      <span className="skill-name">{skill.name}</span>
                      <span
                        className="skill-rating"
                        role="img"
                        aria-label={`習熟度 Lv.${skill.level} / 5：${skillLevels[skill.level - 1]}`}
                      >
                        <span className="skill-bar" aria-hidden="true">
                          {skillLevels.map((description, index) => (
                            <span
                              className={`skill-segment${index < skill.level ? " filled" : ""}`}
                              key={description}
                            />
                          ))}
                        </span>
                        <span className="skill-level" aria-hidden="true">Lv.{skill.level}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <ul className="skill-legend" aria-label="習熟度の基準">
            {skillLevels.map((description, index) => (
              <li key={description}>
                <strong>Lv.{index + 1}</strong>：{description}
              </li>
            ))}
          </ul>
          <p className="skills-learning-note">
            現在は、TypeScriptとPythonを中心に学習を進めており、自力でWebアプリケーションを設計・実装できるレベルを目指しています。
          </p>
        </div>
      </div>
    </section>
  );
}
