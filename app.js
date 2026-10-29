/* =====================================================================
   ЛОГИКА САЙТА. Для обычного обновления портфолио редактируйте content.js.
   Здесь: вкладки, таймлайны, фильтры, окна работ, галерея и копирование.
   Никаких библиотек, серверных запросов и ключей API не требуется.
   ===================================================================== */
(() => {
  "use strict";
  const data = window.PORTFOLIO;
  if (!data) return;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  // Отсекаем javascript: и другие исполняемые схемы у настраиваемых ссылок.
  function safeUrl(value) {
    if (typeof value !== "string" || !value.trim()) return "#";
    const url = value.trim();
    if (/^(assets\/|#|\.\.?\/)/.test(url)) return url;
    try { return ["https:", "http:", "mailto:", "tel:"].includes(new URL(url).protocol) ? url : "#"; }
    catch { return "#"; }
  }
  const tags = items => `<div class="tag-list">${(items || []).map(item => `<span class="tag">${esc(item)}</span>`).join("")}</div>`;
  const list = items => `<ul class="clean-list">${(items || []).map(item => `<li>${esc(item)}</li>`).join("")}</ul>`;
  const routes = ["profile", "path", "skills", "process", "projects", "contact"];
  const titles = {profile:"Портфолио",path:"Опыт и обучение",skills:"Навыки",process:"Как работаю",projects:"Мои работы",contact:"Контакты"};
  const state = { route:"profile", skillFilter:"all", projectFilter:"all", search:"", process:data.process[0].id, work:data.work.at(-1).id, education:data.education.at(-1).id, gallery:[], imageIndex:0, routeSync:false, initialized:false, keepTabFocus:false };

  // 01. ПОДСТАНОВКА ПРОФИЛЯ. Фотографию меняйте через profile.photo.
  function renderProfile() {
    const p = data.profile;
    $("#hero-first-name").textContent = p.firstName;
    $("#hero-last-name").textContent = p.lastName;
    $("#hero-role").textContent = p.role;
    $("#hero-description").textContent = p.description;
    $("#hero-photo").src = safeUrl(p.photo);
    $("#hero-photo").alt = `${p.firstName} ${p.lastName}`;
    $("#about-text").textContent = p.about;
    $("#about-transition").textContent = p.transition;
    $$(".cv-link").forEach(a => a.href = safeUrl(p.resume));
    $$(".telegram-link").forEach(a => a.href = `https://t.me/${encodeURIComponent(p.telegram.replace(/^@/, ""))}`);
    $$(".email-link").forEach(a => a.href = `mailto:${p.email}`);
    $("#contact-email").textContent = p.email;
    $("#contact-telegram").textContent = "@" + p.telegram.replace(/^@/, "");
    $("#contact-phone").textContent = p.phone;
    $("#contact-phone-link").href = `tel:${p.phoneHref}`;
    $("#portfolio-drive-link").href = safeUrl(p.portfolio);
    $("#copyright").textContent = `© ${new Date().getFullYear()}`;
  }

  // 02. ДВА НЕЗАВИСИМЫХ ТАЙМЛАЙНА. Даты и подробности живут в content.js.
  function renderTimelines() {
    $("#work-timeline").innerHTML = data.work.map(item => `<button type="button" class="timeline-item" id="work-tab-${esc(item.id)}" role="tab" aria-controls="work-detail" aria-selected="false" tabindex="-1" data-work="${esc(item.id)}"><span class="timeline-year">${esc(item.year)}</span><span><strong>${esc(item.company)}</strong><small>${esc(item.role)}</small></span></button>`).join("");
    $("#education-timeline").innerHTML = data.education.map(item => `<button type="button" class="timeline-item" id="education-tab-${esc(item.id)}" role="tab" aria-controls="education-detail" aria-selected="false" tabindex="-1" data-education="${esc(item.id)}"><span class="timeline-year">${esc(item.year)}</span><span><strong>${esc(item.title)}</strong><small>${esc(item.subtitle)}</small></span></button>`).join("");
    selectWork(state.work); selectEducation(state.education);
  }
  function selectWork(id) {
    const item = data.work.find(x => x.id === id); if (!item) return;
    state.work = id;
    $$("[data-work]").forEach(button => { const active = button.dataset.work === id; button.setAttribute("aria-selected", active); button.tabIndex = active ? 0 : -1; });
    const panel = $("#work-detail");
    panel.setAttribute("aria-labelledby", "work-tab-" + id);
    panel.innerHTML = `<p class="detail-period">${esc(item.period)}</p><h4>${esc(item.role)}</h4><p>${esc(item.intro)}</p>${list(item.tasks)}${item.projects ? `<p class="detail-subheading">Проекты</p>${list(item.projects)}` : ""}${tags(item.tools)}`;
  }
  function selectEducation(id) {
    const item = data.education.find(x => x.id === id); if (!item) return;
    state.education = id;
    $$("[data-education]").forEach(button => { const active = button.dataset.education === id; button.setAttribute("aria-selected", active); button.tabIndex = active ? 0 : -1; });
    const panel = $("#education-detail"); panel.setAttribute("aria-labelledby", "education-tab-" + id);
    panel.innerHTML = `<p class="detail-period">${esc(item.year)} · ${esc(item.subtitle)}</p>${item.items.map(course => `<div class="course"><h4>${esc(course.name)}</h4>${course.text ? `<p>${esc(course.text)}</p>` : ""}</div>`).join("")}`;
  }

  // 03. НАВЫКИ И ШКАЛЫ ИЗ ПЯТИ ТОЧЕК. Числа можно заменить или скрыть.
  const skillFilters = [{id:"all",label:"Все"},{id:"requirements",label:"Требования"},{id:"models",label:"Модели"},{id:"technical",label:"Техническая база"}];
  const projectFilters = [{id:"all",label:"Все работы"},{id:"processes",label:"BPMN"},{id:"requirements",label:"Требования"},{id:"models",label:"Данные"},{id:"interfaces",label:"Интерфейсы"},{id:"testing",label:"Приёмка"}];
  function filterButtons(items, current, attr) { return items.map(item => `<button class="filter-button" type="button" ${attr}="${esc(item.id)}" aria-pressed="${item.id === current}">${esc(item.label)}</button>`).join(""); }
  function skillDots(skill) {
    if (!Number.isFinite(skill.level)) return "";
    const level = Math.max(1, Math.min(5, Math.round(skill.level)));
    return `<span class="skill-dots" role="img" aria-label="${data.skillLevelsAreDraft ? "Предварительная оценка: " : "Уровень: "}${level} из 5">${Array.from({length:5}, (_, i) => `<i class="skill-dot${i < level ? " filled" : ""}" aria-hidden="true"></i>`).join("")}<span class="skill-level-number" aria-hidden="true">${level}/5</span></span>`;
  }
  function renderSkills() {
    $("#skill-filters").innerHTML = filterButtons(skillFilters, state.skillFilter, "data-skill-filter");
    $("#skill-rating-note").textContent = data.skillLevelsAreDraft ? "Предварительная оценка · 1–5" : "Самооценка · 1–5";
    $("#skills-grid").innerHTML = data.skills.filter(s => state.skillFilter === "all" || s.category === state.skillFilter).map(s => `<button class="skill-card ${s.category === "technical" ? "technical" : ""}" type="button" data-skill="${esc(s.id)}" aria-haspopup="dialog"><h3>${esc(s.name)}</h3><small>${esc(s.status)}</small>${skillDots(s)}${icon("plus")}</button>`).join("");
  }
  function openSkill(id) {
    const skill = data.skills.find(s => s.id === id); if (!skill) return;
    $("#skill-dialog-content").innerHTML = `<p class="section-kicker">${esc(skill.status)}</p><h2 id="skill-dialog-title">${esc(skill.name)}</h2><div class="${skill.category === "technical" ? "technical" : ""}" style="--dot-color:${skill.category === "technical" ? "var(--pink)" : "var(--purple)"}">${skillDots(skill)}</div><p>${esc(skill.text)}</p><h3>${skill.status === "Изучаю" ? "Фокус обучения" : "В моих задачах"}</h3><p>${esc(skill.evidence)}</p>${tags(skill.tags)}${skill.project ? `<a class="text-link" href="#projects/${esc(skill.project)}" data-skill-project>Посмотреть работу ${icon("arrow")}</a>` : ""}${data.skillLevelsAreDraft ? `<p class="subtle-note">Уровень на шкале — предварительная оценка.</p>` : ""}`;
    $("#skill-dialog").showModal();
  }

  // 04. КАК Я РАБОТАЮ. Нажатие на этап меняет подробности под схемой.
  function renderProcess() {
    $("#process-steps").innerHTML = data.process.map((step, i) => `<button class="process-step" id="process-tab-${esc(step.id)}" type="button" role="tab" aria-controls="process-detail" aria-selected="false" tabindex="-1" data-process="${esc(step.id)}"><span class="process-number">${String(i + 1).padStart(2,"0")}</span><strong>${esc(step.title)}</strong><small>${esc(step.short)}</small></button>`).join("");
    selectProcess(state.process);
  }
  function selectProcess(id) {
    const step = data.process.find(x => x.id === id); if (!step) return;
    state.process = id;
    $$("[data-process]").forEach(button => { const active = button.dataset.process === id; button.setAttribute("aria-selected", active); button.tabIndex = active ? 0 : -1; });
    $("#process-detail").setAttribute("aria-labelledby", "process-tab-" + id);
    $("#process-detail").innerHTML = `<div><h3>${esc(step.title)}</h3><p>${esc(step.description)}</p><p class="process-result">${esc(step.result)}</p></div><div>${list(step.bullets)}${step.project ? `<a href="#projects/${esc(step.project)}" class="text-link">Пример из портфолио ${icon("arrow")}</a>` : `<a href="#path" class="text-link">Связанный опыт работы ${icon("arrow")}</a>`}</div>`;
  }

  // 05. РАБОТЫ. Поиск не отправляет запросы, всё фильтруется в браузере.
  const normalize = text => text.toLocaleLowerCase("ru").replaceAll("ё", "е");
  function renderProjects() {
    $("#project-filters").innerHTML = filterButtons(projectFilters, state.projectFilter, "data-project-filter");
    const query = normalize(state.search.trim());
    const projects = data.projects.filter(p => (state.projectFilter === "all" || p.category === state.projectFilter) && (!query || normalize([p.title,p.subtitle,p.task,p.role,...p.tags].join(" ")).includes(query)));
    $("#projects-count").textContent = `Найдено материалов: ${projects.length}`;
    $("#projects-empty").hidden = projects.length !== 0;
    $("#projects-grid").innerHTML = projects.map(p => `<article class="project-card"><a href="#projects/${esc(p.id)}" class="project-image" aria-label="Открыть работу: ${esc(p.title)}"><img src="${esc(safeUrl(p.image))}" alt="${esc(p.imageAlt)}" loading="lazy" width="800" height="500"></a><div class="project-meta"><span>${esc(p.type)}</span><span class="project-number">${esc(p.number)}</span></div><h3><a href="#projects/${esc(p.id)}">${esc(p.title)}</a></h3><p>${esc(p.subtitle)}</p>${tags(p.tags)}<a href="#projects/${esc(p.id)}" class="text-link">Открыть работу ${icon("arrow")}</a></article>`).join("");
  }
  function openProject(id) {
    const p = data.projects.find(item => item.id === id); if (!p) return false;
    $("#project-dialog-content").innerHTML = `<p class="section-kicker">${esc(p.type)}${p.projectName ? " · " + esc(p.projectName) : ""}</p><h2 id="project-dialog-title">${esc(p.title)}</h2>${tags(p.tags)}<p class="project-lead">${esc(p.intro)}</p>${p.task || p.role ? `<div class="project-context">${p.task ? `<div><h3>Задача</h3><p>${esc(p.task)}</p></div>` : ""}${p.role ? `<div><h3>Моя роль</h3><p>${esc(p.role)}</p></div>` : ""}</div>` : ""}<div class="project-content-grid"><div><h3>${esc(p.contributionTitle || "Материалы и мой вклад")}</h3>${list(p.contribution)}</div><div class="project-result"><h3>Результат</h3><p>${esc(p.result)}</p></div></div><h3>Изображения работы</h3><div class="gallery-grid">${p.gallery.map((img, i) => `<button class="gallery-item" type="button" data-gallery-project="${esc(p.id)}" data-gallery-index="${i}" aria-label="Увеличить: ${esc(img.caption)}"><img src="${esc(safeUrl(img.src))}" alt="${esc(img.caption)}" loading="lazy"><span>${esc(img.caption)}</span></button>`).join("")}</div><div class="document-links">${p.links.map(link => `<a class="button button-quiet" href="${esc(safeUrl(link.href))}" ${link.download ? "download" : 'target="_blank" rel="noopener noreferrer"'}>${esc(link.label)}${icon(link.download ? "download" : "external")}</a>`).join("")}</div>`;
    if (!$("#project-dialog").open) $("#project-dialog").showModal();
    return true;
  }

  // 06. ГАЛЕРЕЯ. Стрелки клавиатуры переключают изображения, Esc закрывает.
  function openGallery(projectId, index) {
    const project = data.projects.find(x => x.id === projectId); if (!project) return;
    state.gallery = project.gallery; state.imageIndex = index;
    updateImage(); $("#image-dialog").showModal();
  }
  function updateImage() {
    if (!state.gallery.length) return;
    state.imageIndex = (state.imageIndex + state.gallery.length) % state.gallery.length;
    const img = state.gallery[state.imageIndex];
    $("#lightbox-image").src = safeUrl(img.src); $("#lightbox-image").alt = img.caption;
    $("#image-caption").textContent = img.caption;
    $("#image-position").textContent = `${state.imageIndex + 1} / ${state.gallery.length}`;
    $("#image-download").href = safeUrl(img.src);
    $("#image-previous").disabled = $("#image-next").disabled = state.gallery.length < 2;
    $("#image-stage").classList.remove("zoomed");
    $("#image-zoom").setAttribute("aria-pressed", "false");
    $("#image-zoom").setAttribute("aria-label", "Увеличить изображение");
  }

  // 07. ВКЛАДКИ И ПРЯМЫЕ ССЫЛКИ. Hash-маршруты не дают 404 на GitHub Pages.
  function route() {
    let path; try { path = decodeURIComponent(location.hash.slice(1)).split("/"); } catch { path = ["profile"]; }
    let page = routes.includes(path[0]) ? path[0] : "profile";
    if (path[0] === "about") page = "profile";
    const changed = state.route !== page;
    state.route = page; state.routeSync = true;
    $$(".page").forEach(section => section.hidden = section.id !== `page-${page}`);
    $$(".nav-tabs [role='tab']").forEach(tab => { const active = tab.id === `tab-${page}`; tab.setAttribute("aria-selected", active); tab.tabIndex = active ? 0 : -1; });
    $("#main-nav").classList.remove("open"); $("#menu-toggle").setAttribute("aria-expanded", "false"); $("#menu-toggle").setAttribute("aria-label", "Открыть меню");
    ["skill-dialog", "image-dialog"].forEach(id => { if ($("#" + id).open) $("#" + id).close(); });
    if (page === "projects" && path[1]) {
      if (!openProject(path[1])) { history.replaceState(null, "", "#projects"); if ($("#project-dialog").open) $("#project-dialog").close(); }
    } else if ($("#project-dialog").open) $("#project-dialog").close();
    state.routeSync = false;
    document.title = `${titles[page]} — ${data.profile.firstName} ${data.profile.lastName}`;
    if (changed && state.initialized) { window.scrollTo({top:0,behavior:"instant"}); if (!$("#project-dialog").open && !state.keepTabFocus) $("h1, h2", $("#page-" + page))?.focus({preventScroll:true}); }
    state.keepTabFocus = false;
    state.initialized = true;
    if (path[0] === "about") $("#about").scrollIntoView({behavior:"smooth"});
  }

  // 08. ДОСТУПНОСТЬ: стрелки, Home и End внутри групп вкладок.
  function tabKeys(event) {
    const tab = event.target.closest("[role='tab']"); if (!tab) return;
    const group = tab.closest("[role='tablist']"); if (!group) return;
    const tabs = $$("[role='tab']", group), index = tabs.indexOf(tab);
    const vertical = group.getAttribute("aria-orientation") === "vertical";
    const prev = vertical ? "ArrowUp" : "ArrowLeft", next = vertical ? "ArrowDown" : "ArrowRight";
    let target;
    if (event.key === prev) target = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === next) target = (index + 1) % tabs.length;
    else if (event.key === "Home") target = 0;
    else if (event.key === "End") target = tabs.length - 1;
    else return;
    event.preventDefault(); tabs[target].focus(); tabs[target].click();
  }
  function showToast(message) {
    const toast = $("#toast"); toast.textContent = message; toast.classList.add("visible");
    clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("visible"), 3000);
  }
  async function copyEmail() {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(data.profile.email);
      else { const textarea = document.createElement("textarea"); textarea.value = data.profile.email; textarea.style.position = "fixed"; textarea.style.opacity = "0"; document.body.append(textarea); textarea.select(); const ok = document.execCommand("copy"); textarea.remove(); if (!ok) throw Error("copy"); }
      showToast("Email скопирован");
    } catch { showToast("Не удалось скопировать. Адрес можно выделить в разделе контактов."); }
    finally { $("#copy-email").focus({preventScroll:true}); }
  }

  // 09. ОБРАБОТЧИКИ СОБЫТИЙ. Делегирование работает и для новых карточек.
  document.addEventListener("click", event => {
    const target = event.target.closest("button, a"); if (!target) return;
    state.keepTabFocus = target.matches(".nav-tabs [role='tab']") && window.matchMedia("(min-width:901px)").matches;
    if (target.matches(".skip-link")) { event.preventDefault(); $("#main").focus(); $("#main").scrollIntoView(); return; }
    if (target.matches("[data-work]")) selectWork(target.dataset.work);
    if (target.matches("[data-education]")) selectEducation(target.dataset.education);
    if (target.matches("[data-process]")) selectProcess(target.dataset.process);
    if (target.matches("[data-skill]")) openSkill(target.dataset.skill);
    if (target.matches("[data-skill-filter]")) { state.skillFilter = target.dataset.skillFilter; renderSkills(); $("[data-skill-filter='" + state.skillFilter + "']").focus(); }
    if (target.matches("[data-project-filter]")) { state.projectFilter = target.dataset.projectFilter; renderProjects(); $("[data-project-filter='" + state.projectFilter + "']").focus(); }
    if (target.matches("[data-gallery-project]")) openGallery(target.dataset.galleryProject, Number(target.dataset.galleryIndex));
    if (target.matches("[data-close-dialog]")) $("#" + target.dataset.closeDialog).close();
    if (target.matches("[data-scroll-about]")) { event.preventDefault(); $("#about").scrollIntoView({behavior:document.body.classList.contains("reduce-motion") ? "instant" : "smooth"}); }
    if (target.matches("[data-skill-project]")) $("#skill-dialog").close();
  });
  document.addEventListener("keydown", event => {
    if ($("#image-dialog").open && ["ArrowLeft", "ArrowRight"].includes(event.key)) { event.preventDefault(); state.imageIndex += event.key === "ArrowRight" ? 1 : -1; updateImage(); return; }
    tabKeys(event);
  });
  $$("dialog").forEach(dialog => dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); }));
  $("#project-dialog").addEventListener("close", () => { if (!state.routeSync && location.hash.startsWith("#projects/")) history.replaceState(null, "", "#projects"); });
  $("#project-search").addEventListener("input", event => { state.search = event.target.value; renderProjects(); });
  $("#reset-projects").addEventListener("click", () => { state.projectFilter = "all"; state.search = ""; $("#project-search").value = ""; renderProjects(); $("[data-project-filter='all']").focus(); });
  $("#menu-toggle").addEventListener("click", () => { const open = $("#main-nav").classList.toggle("open"); $("#menu-toggle").setAttribute("aria-expanded", open); $("#menu-toggle").setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню"); });
  $("#copy-email").addEventListener("click", copyEmail);
  $("#image-previous").addEventListener("click", () => { state.imageIndex--; updateImage(); });
  $("#image-next").addEventListener("click", () => { state.imageIndex++; updateImage(); });
  $("#image-zoom").addEventListener("click", () => { const zoomed = $("#image-stage").classList.toggle("zoomed"); $("#image-zoom").setAttribute("aria-pressed", zoomed); $("#image-zoom").setAttribute("aria-label", zoomed ? "Уменьшить изображение" : "Увеличить изображение"); });
  // Настройка анимации сохраняется только в браузере посетителя.
  try { document.body.classList.toggle("reduce-motion", localStorage.getItem("portfolio-reduce-motion") === "true"); } catch { /* Хранилище может быть отключено в браузере. */ }
  function syncMotionButton() { const reduced = document.body.classList.contains("reduce-motion"); $("#motion-control").setAttribute("aria-pressed", reduced); $("#motion-control").textContent = reduced ? "Анимация уменьшена" : "Уменьшить анимацию"; }
  $("#motion-control").addEventListener("click", () => { const reduced = document.body.classList.toggle("reduce-motion"); try { localStorage.setItem("portfolio-reduce-motion", String(reduced)); } catch {} syncMotionButton(); });
  document.addEventListener("error", event => { const image = event.target; if (image.tagName === "IMG" && !image.dataset.fallback) { image.dataset.fallback = "true"; image.src = "assets/images/project-fallback.svg"; } }, true);
  window.addEventListener("hashchange", route);

  // 10. ЗАПУСК. Добавленные в content.js карточки появятся автоматически.
  renderProfile(); renderTimelines(); renderSkills(); renderProcess(); renderProjects();
  $("#tools-list").innerHTML = data.tools.map(tool => `<span class="tool-item">${esc(tool)}</span>`).join("");
  $("#languages").textContent = data.languages;
  syncMotionButton(); route();
})();
