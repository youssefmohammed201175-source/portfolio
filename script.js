/* =========================================================
   الإعدادات — عدّل البيانات من هنا فقط
   ========================================================= */
const CONFIG = {
  contact: {
    // ضع بياناتك الحقيقية هنا. أي رابط فارغ لن يظهر في الموقع.
    email: "",           // مثال: "name@example.com"
    whatsapp: "",        // رقم دولي بدون + أو مسافات، مثال: "201000000000"
    github: "",          // مثال: "https://github.com/username"
    linkedin: "",
    facebook: "",
  },

  projects: [
    {
      title: "سوبر ماركت التوفير",
      category: "متجر إلكتروني",
      status: "live", // live | demo | dev
      desc: "تجربة تسوق رقمية باللغة العربية، صُممت لتسهيل استكشاف المنتجات والوصول إلى احتياجات المستخدم بطريقة واضحة ومنظمة.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
      live: "https://altawfeermarket.com/",
      source: "",
      image: "", // ضع مسار لقطة شاشة حقيقية (WebP يُفضَّل) لتحل محل المعاينة التصميمية
      goal: "تقديم متجر عربي يسهّل على المتسوق الوصول إلى المنتجات بسرعة ووضوح.",
      challenge: "تنظيم عدد كبير من المنتجات والأقسام دون إرباك المستخدم.",
      solution: "بنية تصنيفات واضحة، وواجهة عربية مرتبة، ومنطق خادم يدير المنتجات وقاعدة البيانات.",
    },
    {
      title: "WebCrafters",
      category: "موقع شركة لتطوير المواقع",
      status: "live",
      desc: "هوية رقمية تعرّف بالخدمات، وتعرض رؤية الشركة، وتمنح الزائر طريقًا واضحًا لاكتشاف الحلول وطلب مشروعه.",
      tech: [],
      live: "", // أضف الرابط الحقيقي هنا
      source: "",
      image: "",
      goal: "تعريف الزائر بخدمات الشركة ورؤيتها في مسار واضح.",
      challenge: "صياغة رسالة الشركة بصريًا ونصيًا دون ازدحام.",
      solution: "أقسام متدرجة تقود الزائر من التعريف إلى الخدمات ثم إلى طلب المشروع.",
    },
    {
      title: "متجر إلكتروني للأزياء",
      category: "تجارة إلكترونية",
      status: "demo",
      desc: "تصور لمتجر أزياء يجمع بين عرض المنتجات، وسهولة التصفح، وبنية قابلة للتطوير لتلبية احتياجات التجارة الحديثة.",
      tech: [],
      live: "",
      source: "",
      image: "",
      goal: "تجربة تصميم وبناء متجر أزياء قابل للتوسّع.",
      challenge: "عرض المنتجات بصريًا مع الحفاظ على سهولة التصفح والفلترة.",
      solution: "شبكة منتجات مرنة وبنية مكوّنات قابلة لإضافة ميزات الشراء لاحقًا.",
    },
    {
      title: "مشروعات وأنظمة أخرى",
      category: "قريبًا",
      status: "placeholder",
      desc: "مساحة مفتوحة لأعمال قادمة؛ أنظمة ولوحات تحكم ومشروعات ما زالت في طريقها إلى النور.",
      tech: [],
      live: "", source: "", image: "",
    },
  ],

  skills: [
    { group: "تطوير الواجهات", items: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
    ]},
    { group: "تطوير الخوادم", items: [
      { name: "PHP", icon: "php" },
      { name: "OOP", label: "البرمجة كائنية التوجه" },
      { name: "Laravel", icon: "laravel" },
    ]},
    { group: "قواعد البيانات", items: [
      { name: "SQL" },
      { name: "MySQL", icon: "mysql" },
    ]},
    { group: "أدوات التطوير", items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
    ]},
    // أضف مستوى يدويًا عند الرغبة: { name: "X", icon: "x", level: "متقدم" }
  ],

  services: [
    ["المواقع التعريفية والتجارية", "مواقع تمنح الشركات والأفراد حضورًا رقميًا واضحًا ومتناسقًا مع هويتهم."],
    ["المتاجر الإلكترونية", "واجهات منظمة لعرض المنتجات، وتسهيل التصفح، ودعم رحلة الشراء."],
    ["لوحات التحكم والأنظمة الإدارية", "واجهات عملية لإدارة البيانات والمحتوى والعمليات اليومية بحسب احتياجات المشروع."],
    ["تطوير الواجهات وتجربة المستخدم", "واجهات متجاوبة، وتفاصيل مدروسة، وتجربة استخدام تعمل بكفاءة على مختلف الأجهزة."],
    ["تطوير الخوادم وقواعد البيانات", "بناء منطق الأعمال، وربط البيانات، وتنظيم العمليات باستخدام التقنيات المناسبة للمشروع."],
  ],

  quotes: [
    "لا تقاس قيمة الفكرة بضجيج بدايتها، بل بما تصنعه بعد أن ترى النور.",
    "الإتقان أن تمنح التفاصيل الصغيرة عنايةً لا يراها الجميع، لكنهم يشعرون بأثرها.",
    "ليس التقدم أن تصل قبل الآخرين، بل أن تعرف إلى أين تمضي، ولماذا.",
    "كل مشروعٍ ناجح يبدأ بسؤالٍ واضح، وينمو بإجاباتٍ دقيقة.",
    "ما نبنيه اليوم قد يصبح غدًا بداية الطريق لشخصٍ لم نلتقِ به بعد.",
  ],

  aboutPhoto: "", // مسار صورة شخصية حقيقية، اتركه فارغًا لإظهار المساحة البديلة
};

/* ========================================================= */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const toAr = (n) => String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
const STATUS = { live: ["منشور", "badge--live"], demo: ["مشروع تجريبي", ""], dev: ["قيد التطوير", ""] };

/* Projects */
function mockup(p, label = true) {
  if (p.image) return `<img src="${esc(p.image)}" alt="لقطة من ${esc(p.title)}" width="1200" height="825" loading="lazy" style="width:100%;height:100%;object-fit:cover">`;
  if (p.status === "placeholder") return `<div class="mock mock--add"><span>+</span></div>`;
  return `<div class="mock"><div class="mock__win"><div class="mock__bar"><i></i><i></i><i></i></div>
    <div class="mock__body"><div class="mock__h"></div><div class="mock__t"></div><div class="mock__t" style="width:50%"></div>
    <div class="mock__grid"><b></b><b></b><b></b><b></b></div></div></div></div>
    ${label ? '<span class="mock__label">معاينة تصميمية — ليست لقطة من الموقع</span>' : ""}`;
}
function renderProjects() {
  const box = $("#projects");
  box.innerHTML = CONFIG.projects.map((p, i) => {
    const st = STATUS[p.status];
    return `<button class="project reveal" type="button" data-i="${i}" aria-label="تفاصيل ${esc(p.title)}">
      <div class="project__media">${st ? `<span class="badge ${st[1]}">${st[0]}</span>` : ""}${mockup(p)}</div>
      <div class="project__info"><div>
        <span class="project__cat">${esc(p.category)}</span><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
        ${p.tech.length ? `<div class="tags">${p.tech.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
      </div><span class="project__num">${toAr(String(i + 1).padStart(2, "0"))}</span></div>
    </button>`;
  }).join("");
  box.addEventListener("click", (e) => {
    const b = e.target.closest(".project");
    if (b) openProject(CONFIG.projects[+b.dataset.i]);
  });
}
function openProject(p) {
  const st = STATUS[p.status];
  const links = [
    p.live && `<a class="btn btn--primary" href="${esc(p.live)}" target="_blank" rel="noopener">زيارة المشروع ↗</a>`,
    p.source && `<a class="btn btn--ghost" href="${esc(p.source)}" target="_blank" rel="noopener">الشيفرة المصدرية</a>`,
  ].filter(Boolean).join("");
  $("#mBody").innerHTML = `<div class="modal__media">${st ? `<span class="badge ${st[1]}">${st[0]}</span>` : ""}${mockup(p)}</div>
    <div class="modal__content"><span class="project__cat">${esc(p.category)}</span><h3 id="mTitle">${esc(p.title)}</h3><p>${esc(p.desc)}</p>
    ${p.goal ? `<div class="modal__cols"><div><h4>الهدف</h4><p>${esc(p.goal)}</p></div><div><h4>التحدي</h4><p>${esc(p.challenge)}</p></div><div><h4>الحل</h4><p>${esc(p.solution)}</p></div></div>` : ""}
    ${p.tech.length ? `<h4 class="kicker">التقنيات</h4><div class="tags">${p.tech.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
    <div class="btns" style="margin-top:2rem">${links || '<p style="color:var(--muted)">الرابط سيُضاف قريبًا.</p>'}</div></div>`;
  const m = $("#modal");
  m.showModal();
}
$("#mClose").addEventListener("click", () => $("#modal").close());
$("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") e.target.close(); });

/* Skills */
function renderSkills() {
  $("#skillGroups").innerHTML = CONFIG.skills.map((g) => `<div class="skill-group reveal"><h3>${esc(g.group)}</h3><div class="skill-items">
    ${g.items.map((s) => `<div class="skill">${s.icon ? `<img src="https://cdn.simpleicons.org/${s.icon}" alt="" width="26" height="26" loading="lazy">` : ""}
      <div><div class="skill__name">${esc(s.label || s.name)}</div>${s.level ? `<div class="skill__lvl">${esc(s.level)}</div>` : ""}</div></div>`).join("")}
  </div></div>`).join("");
}

/* Services */
function renderServices() {
  $("#servList").innerHTML = CONFIG.services.map(([t, d], i) => `<li class="serv reveal"><span class="serv__n">${toAr(String(i + 1).padStart(2, "0"))}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join("");
}

/* Contact links */
function renderLinks() {
  const c = CONFIG.contact, out = [];
  if (c.email) out.push(["البريد الإلكتروني", `mailto:${c.email}`, c.email]);
  if (c.whatsapp) out.push(["واتساب", `https://wa.me/${c.whatsapp}`, "+" + c.whatsapp]);
  if (c.github) out.push(["GitHub", c.github, c.github.replace(/^https?:\/\//, "")]);
  if (c.linkedin) out.push(["LinkedIn", c.linkedin, "LinkedIn"]);
  if (c.facebook) out.push(["Facebook", c.facebook, "Facebook"]);
  $("#contactLinks").innerHTML = out.length
    ? out.map(([l, h, s]) => `<li><a href="${esc(h)}" ${h.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}><span>${l}</span><small>${esc(s)}</small></a></li>`).join("")
    : `<li style="padding:1rem 0;color:var(--muted)">ستُضاف وسائل التواصل قريبًا.</li>`;
  if (!c.whatsapp) $("#sendWa").hidden = true;
}

/* Quotes */
let qi = 0;
function showQuote(i) {
  const el = $("#quoteText");
  el.classList.add("out");
  setTimeout(() => {
    el.textContent = CONFIG.quotes[i];
    $("#quoteCount").textContent = `${toAr(i + 1)} / ${toAr(CONFIG.quotes.length)}`;
    el.classList.remove("out");
  }, 250);
}
$("#quoteNext").addEventListener("click", () => { qi = (qi + 1) % CONFIG.quotes.length; showQuote(qi); });

/* About photo */
if (CONFIG.aboutPhoto) $("#aboutPhoto").innerHTML = `<img src="${esc(CONFIG.aboutPhoto)}" alt="يوسف محمد إسماعيل" width="480" height="600" loading="lazy">`;

/* Form */
const form = $("#contactForm");
function validate() {
  const v = { name: $("#fName").value.trim(), email: $("#fEmail").value.trim(), type: $("#fType").value, msg: $("#fMsg").value.trim() };
  const rules = [
    ["fName", "eName", !v.name ? "يرجى كتابة الاسم." : v.name.length < 2 ? "الاسم قصير جدًا." : ""],
    ["fEmail", "eEmail", !v.email ? "يرجى كتابة البريد الإلكتروني." : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email) ? "صيغة البريد الإلكتروني غير صحيحة." : ""],
    ["fType", "eType", !v.type ? "يرجى اختيار نوع المشروع." : ""],
    ["fMsg", "eMsg", !v.msg ? "يرجى وصف فكرتك باختصار." : v.msg.length < 15 ? "أضف مزيدًا من التفاصيل (١٥ حرفًا على الأقل)." : ""],
  ];
  let ok = true, first;
  rules.forEach(([f, e, m]) => { $("#" + e).textContent = m; $("#" + f).closest(".field").classList.toggle("invalid", !!m); $("#" + f).setAttribute("aria-invalid", !!m); if (m) { ok = false; first ??= f; } });
  if (first) $("#" + first).focus();
  return ok ? v : null;
}
const body = (v) => `الاسم: ${v.name}\nالبريد: ${v.email}\nنوع المشروع: ${v.type}\n\n${v.msg}`;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const v = validate(); if (!v) return;
  if (!CONFIG.contact.email) { $("#formStatus").textContent = "لم يُضَف البريد الإلكتروني بعد؛ يرجى استخدام وسيلة تواصل أخرى."; return; }
  location.href = `mailto:${CONFIG.contact.email}?subject=${encodeURIComponent("مشروع جديد: " + v.type)}&body=${encodeURIComponent(body(v))}`;
  $("#formStatus").textContent = "فُتح تطبيق البريد برسالتك الجاهزة؛ أكمل الإرسال من هناك.";
});
$("#sendWa").addEventListener("click", () => {
  const v = validate(); if (!v) return;
  window.open(`https://wa.me/${CONFIG.contact.whatsapp}?text=${encodeURIComponent(body(v))}`, "_blank", "noopener");
  $("#formStatus").textContent = "فُتح واتساب برسالتك الجاهزة.";
});

/* Nav */
const nav = $("#nav"), toggle = $("#navToggle"), menu = $("#navMenu");
const closeMenu = () => { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "فتح القائمة"); };
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open); toggle.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
  if (open) $("a", menu).focus();
});
$$("a", menu).forEach((a) => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && menu.classList.contains("open")) { closeMenu(); toggle.focus(); } });

/* Scroll: progress, nav, to-top */
const bar = $("#progressBar"), toTopBtn = $("#toTop");
function onScroll() {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  nav.classList.toggle("scrolled", y > 20);
  toTopBtn.classList.toggle("show", y > 700);
}
addEventListener("scroll", onScroll, { passive: true });
toTopBtn.addEventListener("click", () => scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }));

/* Render then observe */
renderProjects(); renderSkills(); renderServices(); renderLinks(); showQuote(0); onScroll();
$("#year").textContent = new Date().getFullYear();

const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
$$(".reveal").forEach((el) => io.observe(el));

const verses = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle("lit", e.isIntersecting)), { rootMargin: "-35% 0px -35% 0px" });
$$(".verse").forEach((v) => verses.observe(v));

const links = $$(".nav__menu a");
const spy = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
["home", "about", "work", "skills", "services", "contact"].forEach((id) => spy.observe(document.getElementById(id)));
