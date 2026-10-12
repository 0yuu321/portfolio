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
    body: "一人暮らしをきっかけに自炊を始め、イタリアンのキッチンでのアルバイトを通じて、徐々に料理が好きになりました。もっと腕を磨き、趣味として楽しんでいきたいと思っています。",
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
