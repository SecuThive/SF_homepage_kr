/* ===== SAFESQUARE — shared header/footer/tweaks ===== */

const SS_NAV = [
  {id:'about', label:'회사소개', href:'about.html'},
  {id:'solutions', label:'취급 솔루션', href:'#', children:[
    {num:'01', title:'NSHC', desc:'보안컨설팅 · 모의해킹 · CTI · 다크웹', href:'solutions/nshc.html'},
    {num:'02', title:'에브리존', desc:'안티랜섬웨어 (TrustEyes)', href:'solutions/everyzone.html'},
    {num:'03', title:'블루문소프트', desc:'문서보안 · DRM', href:'solutions/bluemoon.html'},
    {num:'04', title:'Sumo Logic', desc:'Cloud SIEM (SaaS)', href:'solutions/sumologic.html'},
    {num:'05', title:'한국정보인증', desc:'다중요소인증 · MFA', href:'solutions/kica.html'},
    {num:'06', title:'피앤피시큐어', desc:'DB/서버 접근제어 · 지속인증', href:'solutions/pnpsecure.html'},
  ]},
  {id:'services', label:'도입 프로세스', href:'technology.html'},
  {id:'business', label:'사업영역', href:'business.html'},
  {id:'clients', label:'고객사', href:'clients.html'},
  {id:'labs', label:'Our Labs', href:'index.html#labs', badge:'2026'},
  {id:'news', label:'뉴스', href:'news.html'},
  {id:'careers', label:'채용', href:'careers.html'},
];

function ssPath(rel){
  const depth = (window.SS_DEPTH || 0);
  return (depth > 0 ? '../' : '') + rel;
}

function ssHeader(activeId){
  const logoHref = ssPath('index.html');
  const navHtml = SS_NAV.map(item=>{
    const active = item.id === activeId ? ' active' : '';
    if(item.children){
      return `
        <div class="nav-item${active}">
          <button aria-haspopup="true">${item.label}
            <svg class="caret" viewBox="0 0 8 8" fill="none"><path d="M1 2l3 4 3-4" stroke="currentColor" stroke-width="1.2"/></svg>
          </button>
          <div class="dropdown" role="menu">
            ${item.children.map(c=>`
              <a href="${ssPath(c.href)}">
                <span class="num">${c.num}</span>
                <span>
                  <span class="title">${c.title}</span>
                  <span class="desc">${c.desc}</span>
                </span>
                <span class="arr">→</span>
              </a>`).join('')}
          </div>
        </div>`;
    }
    const badge = item.badge ? `<span class="nav-badge">${item.badge}</span>` : '';
    return `<div class="nav-item${active}"><a href="${ssPath(item.href)}">${item.label}${badge}</a></div>`;
  }).join('');

  return `
  <header class="topbar" id="topbar">
    <a href="${logoHref}" class="brand">
      <span class="brand-mark">
        <svg viewBox="0 0 22 22" fill="none">
          <path d="M2 2 L18 3 L20 18 L3 20 Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
        </svg>
      </span>
      SAFESQUARE
    </a>
    <nav class="primary" aria-label="주요 메뉴">${navHtml}</nav>
    <div class="top-cta">
      <span class="lang"><b>KR</b><span>EN</span></span>
      <a href="${ssPath('contact.html')}" class="contact-btn">
        CONTACT
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" stroke-width="1.2"/></svg>
      </a>
      <button class="mobile-toggle" id="mobileToggle" aria-label="메뉴"><span></span><span></span><span></span></button>
    </div>
  </header>

  <div class="mobile-nav" id="mobileNav">
    ${SS_NAV.map(item=>{
      if(item.children){
        return `
          <button class="m-group" data-toggle>${item.label}<span>+</span></button>
          <div class="sublist">
            ${item.children.map(c=>`<a href="${ssPath(c.href)}">${c.title}<span>→</span></a>`).join('')}
          </div>`;
      }
      return `<a href="${ssPath(item.href)}">${item.label}<span>→</span></a>`;
    }).join('')}
    <a href="${ssPath('contact.html')}" style="color:var(--accent);margin-top:24px">CONTACT<span>→</span></a>
  </div>
  `;
}

function ssFooter(){
  return `
  <footer>
    <span class="brand-small">SAFESQUARE</span>
    <div>© 2026 SAFESQUARE Inc. All rights reserved.</div>
    <div class="foot-links">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Security</a>
      <a href="#">ISMS-P</a>
    </div>
  </footer>
  `;
}

function ssTweaksPanel(){
  return `
  <div class="tweaks-panel" id="tweaksPanel">
    <h4>Tweaks</h4>
    <div class="tweak-row">
      <span>Accent color</span>
      <div class="swatches" id="accentSwatches">
        <div class="sw active" data-accent="245" style="background:oklch(0.55 0.15 245)"></div>
        <div class="sw" data-accent="150" style="background:oklch(0.55 0.15 150)"></div>
        <div class="sw" data-accent="30" style="background:oklch(0.62 0.16 30)"></div>
        <div class="sw" data-accent="300" style="background:oklch(0.55 0.15 300)"></div>
        <div class="sw" data-accent="0" style="background:#0A0A0A"></div>
      </div>
    </div>
    <div class="tweak-row">
      <span>Scroll animations</span>
      <div class="toggle on" id="animToggle"></div>
    </div>
    <div class="tweak-row">
      <span>Display font</span>
      <div class="swatches" id="fontSwatches">
        <div class="sw active" data-font="manrope" style="background:#fff;font-family:Manrope;display:grid;place-items:center;font-size:9px">Aa</div>
        <div class="sw" data-font="serif" style="background:#fff;font-family:'Times New Roman',serif;display:grid;place-items:center;font-size:9px">Aa</div>
        <div class="sw" data-font="mono" style="background:#fff;font-family:ui-monospace,monospace;display:grid;place-items:center;font-size:9px">Aa</div>
      </div>
    </div>
  </div>`;
}

function ssInit(activeId){
  // Inject header + footer + tweaks
  const headerMount = document.getElementById('ss-header');
  const footerMount = document.getElementById('ss-footer');
  if(headerMount) headerMount.innerHTML = ssHeader(activeId);
  if(footerMount) footerMount.innerHTML = ssFooter() + `<div class="scroll-progress" id="scrollProgress"></div>` + ssTweaksPanel();

  // Topbar scroll state + progress
  const topbar = document.getElementById('topbar');
  const progress = document.getElementById('scrollProgress');
  const onScroll = () => {
    const s = window.scrollY;
    if(topbar) topbar.classList.toggle('scrolled', s > 12);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if(progress) progress.style.width = Math.min(100, (s/h)*100) + '%';
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Reveal
  const io = new IntersectionObserver((entries)=>{
    for(const e of entries){
      if(e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target); }
    }
  },{threshold:.12, rootMargin:"0px 0px -10% 0px"});
  document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));

  // Counters
  const countIO = new IntersectionObserver((entries)=>{
    for(const e of entries){
      if(e.isIntersecting){
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const decimals = (el.dataset.decimals|0);
        const dur = 1600; const start = performance.now();
        function step(t){
          const p = Math.min(1,(t-start)/dur);
          const eased = 1 - Math.pow(1-p,3);
          const v = target * eased;
          el.textContent = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString();
          if(p<1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        countIO.unobserve(el);
      }
    }
  },{threshold:.5});
  document.querySelectorAll('[data-count]').forEach(el=>countIO.observe(el));

  // Mobile nav
  const mobToggle = document.getElementById('mobileToggle');
  const mobNav = document.getElementById('mobileNav');
  if(mobToggle && mobNav){
    mobToggle.addEventListener('click', ()=>{
      mobToggle.classList.toggle('open');
      mobNav.classList.toggle('open');
    });
    mobNav.querySelectorAll('[data-toggle]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        btn.nextElementSibling.classList.toggle('open');
      });
    });
  }

  // Tweaks
  initTweaks();
}

function initTweaks(){
  const panel = document.getElementById('tweaksPanel');
  const root = document.documentElement;

  const DEFAULTS = window.TWEAK_DEFAULTS || { accentHue: 245, animations: true, displayFont: 'manrope' };
  const state = { ...DEFAULTS };

  function apply(){
    root.style.setProperty('--accent', `oklch(0.55 0.15 ${state.accentHue})`);
    root.style.setProperty('--accent-soft', `oklch(0.96 0.03 ${state.accentHue})`);
    document.body.classList.toggle('no-anim', !state.animations);
    if(state.displayFont === 'serif'){
      root.style.setProperty('--font-display', '"Cormorant Garamond","Times New Roman",serif');
    } else if(state.displayFont === 'mono'){
      root.style.setProperty('--font-display', 'ui-monospace,SFMono-Regular,Menlo,monospace');
    } else {
      root.style.setProperty('--font-display', '"Manrope","Pretendard Variable",Pretendard,sans-serif');
    }
    // Reflect active states
    document.querySelectorAll('#accentSwatches .sw').forEach(s=>s.classList.toggle('active', +s.dataset.accent===state.accentHue));
    document.querySelectorAll('#fontSwatches .sw').forEach(s=>s.classList.toggle('active', s.dataset.font===state.displayFont));
    const at = document.getElementById('animToggle');
    if(at) at.classList.toggle('on', state.animations);
  }
  apply();

  function persist(edits){
    try{ window.parent.postMessage({type:'__edit_mode_set_keys', edits}, '*'); }catch(e){}
  }

  const accentEl = document.getElementById('accentSwatches');
  if(accentEl) accentEl.addEventListener('click',(e)=>{
    const sw = e.target.closest('.sw'); if(!sw) return;
    state.accentHue = parseInt(sw.dataset.accent,10);
    apply(); persist({accentHue: state.accentHue});
  });

  const animToggle = document.getElementById('animToggle');
  if(animToggle) animToggle.addEventListener('click', ()=>{
    state.animations = !state.animations;
    apply(); persist({animations: state.animations});
  });

  const fontEl = document.getElementById('fontSwatches');
  if(fontEl) fontEl.addEventListener('click', (e)=>{
    const sw = e.target.closest('.sw'); if(!sw) return;
    state.displayFont = sw.dataset.font;
    apply(); persist({displayFont: state.displayFont});
  });

  window.addEventListener('message', (ev)=>{
    const d = ev.data || {};
    if(d.type === '__activate_edit_mode'){ panel && panel.classList.add('open'); }
    else if(d.type === '__deactivate_edit_mode'){ panel && panel.classList.remove('open'); }
  });
  try{ window.parent.postMessage({type:'__edit_mode_available'}, '*'); }catch(e){}
}
