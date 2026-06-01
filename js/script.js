//  TEMA 
const themeBtn  = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');
const html      = document.documentElement;

function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function updateThemeIcon(theme) {
  themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
}

themeBtn.addEventListener('click', () => {
  const current  = html.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

initTheme();

// versiones de lenguaje 
const translations = {
  es: {
    nav_inicio:'Inicio', nav_sobre:'Sobre mí', nav_exp:'Experiencia',
    nav_proy:'Proyectos', nav_cert:'Certificaciones', nav_hab:'Habilidades', nav_cont:'Contacto',

    hero_role:'Técnico ASIR · Sistemas · Cloud · Ciberseguridad',
    hero_sub:'Finalizando ASIR en julio 2026 · Disponible desde septiembre',
    hero_cta1:'Ver proyectos', hero_cta2:'Contacto',

    sobre_titulo:'Sobre mí',
    sobre_intro:'Técnico de sistemas con pasión por la ciberseguridad y el cloud. Me gusta entender cómo funcionan los sistemas para saber cómo protegerlos.',
    sobre_ubi_label:'Ubicación:', sobre_edad_label:'Edad:', sobre_edad_val:'21 años',
    sobre_enfoque_titulo:'Enfoque',
    sobre_enfoque_p1:'Me interesa la intersección entre sistemas, cloud y seguridad. Aprendo construyendo: cada proyecto en mi GitHub representa horas de troubleshooting real, documentación y decisiones técnicas.',
    sobre_enfoque_p2:'Actualmente profundizando en entornos híbridos Azure + AD, hardening de sistemas Linux y detección de amenazas con Suricata.',
    tag_ciber:'Ciberseguridad',

    exp_titulo:'Experiencia y Formación', exp_laboral:'Experiencia Laboral', edu_titulo:'Trayectoria Académica',

    exp1_cargo:'Técnico de Soporte Informático', exp1_fecha:'ene. 2026 - actualidad',
    exp1_li1:'Resolución de incidencias nivel 1/2 en entorno educativo',
    exp1_li2:'Configuración y mantenimiento de equipos Windows',
    exp1_li3:'Diagnóstico de red y soporte a docentes y alumnos',
    exp1_li4:'Mantenimiento preventivo de aulas informáticas',

    exp2_cargo:'Técnico de Mantenimiento Web', exp2_fecha:'may. 2024 - jun. 2024',
    exp2_li1:'Mantenimiento de sitios WordPress en remoto',
    exp2_li2:'Auditoría básica de plugins y optimización de rendimiento',

    exp3_cargo:'Técnico de Soporte Informático y Sistemas', exp3_fecha:'feb. 2023 - jul. 2023',
    exp3_li1:'Resolución de incidencias nivel 1/2 de hardware y software',
    exp3_li2:'Configuración de equipos y perfiles de usuario Windows',

    edu1_nombre:'CFGS Administración de Sistemas Informáticos en Red (ASIR)',
    edu2_nombre:'Certificado de Profesionalidad: Administración de Bases de Datos',
    edu3_nombre:'CFGM Sistemas Microinformáticos y Redes (SMR)',

    proy_titulo:'Proyectos',
    proy1_titulo:'Entorno Híbrido Azure + AD',
    proy1_desc:'Simulación de infraestructura empresarial con Active Directory on-premise sincronizado con Azure Entra ID. Incluye MFA, Conditional Access, RBAC y Azure Monitor.',
    proy2_titulo:'Homelab Linux',
    proy2_desc:'Ubuntu Server 24.04 en VirtualBox con Nginx, Pi-hole, Netdata, hardening SSH/UFW y automatización con scripts Bash.',
    proy3_desc:'HelpDesk Toolkit en PowerShell con 6 módulos para automatizar soporte nivel 1/2. Logging, auto-elevación y menús interactivos.',
    proy4_titulo:'Proyecto Intermodular ASIR',
    proy4_desc:'Despliegue grupal de 5 entornos: E-Commerce Docker/Kubernetes, Ansible, IDS/IPS con Suricata, Zabbix y Hyper-V. Nota: 7/10.',
    proy_ver:'Ver proyecto →', tag_auto:'Automatización',

    cert_titulo:'Certificaciones y Idiomas',
    cert_ciber_titulo:'Ciberseguridad & IA', cert_sis_titulo:'Sistemas',
    cert_redes_titulo:'Redes', cert_bd_titulo:'Lenguajes y Base de Datos',
    cert_prof_titulo:'Habilidades Profesionales', cert_idiomas_titulo:'Idiomas',
    cert_en_progreso:'En progreso',
    cert_linux_basica:'Administración básica de Linux',
    cert_ad:'Administración Avanzada en Windows Server Core 2022. Active Directory',
    cert_winserver:'Seguridad, Rendimiento y Recursos en Windows Server Core 2022',
    cert_ccna1:'Introducción a las Redes (CCNA ROUTING AND SWITCHING)',
    cert_ccna2:'Administración Avanzada de Redes (CCNA ROUTING AND SWITCHING)',
    cert_pfsense:'Introducción a los Firewalls de red con pfSense',
    cert_bd:'Administración de Bases de Datos',
    cert_html:'Introducción a HTML, CSS, XML y JSON',
    cert_python:'Programación básica en Python',
    idioma_es:'Español', idioma_ca:'Catalán', idioma_ar:'Árabe', idioma_en:'Inglés', idioma_nativo:'Nativo',

    hab_titulo:'Habilidades', hab_soft_titulo:'Habilidades Personales',
    soft1:'Resolución de problemas', soft2:'Comunicación Efectiva',
    soft3:'Aprendizaje rápido y autonomía', soft4:'Adaptabilidad',
    soft5:'Trabajo en equipo y Colaboración',

    cont_titulo:'Contacto', cont_sub:'Disponible desde septiembre 2026. No dudes en escribirme.',
    cont_cv:'Currículum', cont_cv_sub:'Ver mi CV',
    footer_txt:'Hecho con curiosidad y muchas horas de terminal',
  },

  ca: {
    nav_inicio:'Inici', nav_sobre:'Sobre mi', nav_exp:'Experiència',
    nav_proy:'Projectes', nav_cert:'Certificacions', nav_hab:'Habilitats', nav_cont:'Contacte',

    hero_role:'Tècnic ASIR · Sistemes · Cloud · Ciberseguretat',
    hero_sub:'Finalitzant ASIR el juliol 2026 · Disponible des del setembre',
    hero_cta1:'Veure projectes', hero_cta2:'Contacte',

    sobre_titulo:'Sobre mi',
    sobre_intro:"Tècnic de sistemes amb passió per la ciberseguretat i el cloud. M'agrada entendre com funcionen els sistemes per saber com protegir-los.",
    sobre_ubi_label:'Ubicació:', sobre_edad_label:'Edat:', sobre_edad_val:'21 anys',
    sobre_enfoque_titulo:'Enfocament',
    sobre_enfoque_p1:"M'interessa la intersecció entre sistemes, cloud i seguretat. Aprenc construint: cada projecte al meu GitHub representa hores de troubleshooting real, documentació i decisions tècniques.",
    sobre_enfoque_p2:"Actualment aprofundint en entorns híbrids Azure + AD, hardening de sistemes Linux i detecció d'amenaces amb Suricata.",
    tag_ciber:'Ciberseguretat',

    exp_titulo:'Experiència i Formació', exp_laboral:'Experiència Laboral', edu_titulo:'Trajectòria Acadèmica',

    exp1_cargo:'Tècnic de Suport Informàtic', exp1_fecha:'gen. 2026 - actualitat',
    exp1_li1:"Resolució d'incidències nivell 1/2 en entorn educatiu",
    exp1_li2:"Configuració i manteniment d'equips Windows",
    exp1_li3:'Diagnòstic de xarxa i suport a docents i alumnes',
    exp1_li4:"Manteniment preventiu d'aules informàtiques",

    exp2_cargo:'Tècnic de Manteniment Web', exp2_fecha:'maig 2024 - juny 2024',
    exp2_li1:'Manteniment de llocs WordPress en remot',
    exp2_li2:'Auditoria bàsica de plugins i optimització de rendiment',

    exp3_cargo:'Tècnic de Suport Informàtic i Sistemes', exp3_fecha:'febr. 2023 - jul. 2023',
    exp3_li1:"Resolució d'incidències nivell 1/2 de maquinari i programari",
    exp3_li2:"Configuració d'equips i perfils d'usuari Windows",

    edu1_nombre:'CFGS Administració de Sistemes Informàtics en Xarxa (ASIX)',
    edu2_nombre:'Certificat de Professionalitat: Administració de Bases de Dades',
    edu3_nombre:'CFGM Sistemes Microinformàtics i Xarxes (SMX)',

    proy_titulo:'Projectes',
    proy1_titulo:'Entorn Híbrid Azure + AD',
    proy1_desc:"Simulació d'infraestructura empresarial amb Active Directory on-premise sincronitzat amb Azure Entra ID. Inclou MFA, Conditional Access, RBAC i Azure Monitor.",
    proy2_titulo:'Homelab Linux',
    proy2_desc:'Ubuntu Server 24.04 a VirtualBox amb Nginx, Pi-hole, Netdata, hardening SSH/UFW i automatització amb scripts Bash.',
    proy3_desc:'HelpDesk Toolkit en PowerShell amb 6 mòduls per automatitzar suport nivell 1/2. Logging, auto-elevació i menús interactius.',
    proy4_titulo:'Projecte Intermodular ASIR',
    proy4_desc:'Desplegament grupal de 5 entorns: E-Commerce Docker/Kubernetes, Ansible, IDS/IPS amb Suricata, Zabbix i Hyper-V. Nota: 7/10.',
    proy_ver:'Veure projecte →', tag_auto:'Automatització',

    cert_titulo:'Certificacions i Idiomes',
    cert_ciber_titulo:'Ciberseguretat & IA', cert_sis_titulo:'Sistemes',
    cert_redes_titulo:'Xarxes', cert_bd_titulo:'Llenguatges i Base de Dades',
    cert_prof_titulo:'Habilitats Professionals', cert_idiomas_titulo:'Idiomes',
    cert_en_progreso:'En curs',
    cert_linux_basica:'Administració bàsica de Linux',
    cert_ad:'Administració Avançada a Windows Server Core 2022. Active Directory',
    cert_winserver:'Seguretat, Rendiment i Recursos a Windows Server Core 2022',
    cert_ccna1:'Introducció a les Xarxes (CCNA ROUTING AND SWITCHING)',
    cert_ccna2:'Administració Avançada de Xarxes (CCNA ROUTING AND SWITCHING)',
    cert_pfsense:'Introducció als Firewalls de xarxa amb pfSense',
    cert_bd:'Administració de Bases de Dades',
    cert_html:'Introducció a HTML, CSS, XML i JSON',
    cert_python:'Programació bàsica en Python',
    idioma_es:'Castellà', idioma_ca:'Català', idioma_ar:'Àrab', idioma_en:'Anglès', idioma_nativo:'Natiu',

    hab_titulo:'Habilitats', hab_soft_titulo:'Habilitats Personals',
    soft1:'Resolució de problemes', soft2:'Comunicació Efectiva',
    soft3:'Aprenentatge ràpid i autonomia', soft4:'Adaptabilitat',
    soft5:'Treball en equip i Col·laboració',

    cont_titulo:'Contacte', cont_sub:"Disponible des del setembre 2026. No dubtis a escriure'm.",
    cont_cv:'Currículum', cont_cv_sub:'Veure el meu CV',
    footer_txt:'Fet amb curiositat i moltes hores de terminal',
  },

  en: {
    nav_inicio:'Home', nav_sobre:'About me', nav_exp:'Experience',
    nav_proy:'Projects', nav_cert:'Certifications', nav_hab:'Skills', nav_cont:'Contact',

    hero_role:'ASIR Technician · Systems · Cloud · Cybersecurity',
    hero_sub:'Finishing ASIR in July 2026 · Available from September',
    hero_cta1:'View projects', hero_cta2:'Contact',

    sobre_titulo:'About me',
    sobre_intro:'Systems technician with a passion for cybersecurity and cloud. I like to understand how systems work in order to know how to protect them.',
    sobre_ubi_label:'Location:', sobre_edad_label:'Age:', sobre_edad_val:'21 years old',
    sobre_enfoque_titulo:'Focus',
    sobre_enfoque_p1:"I'm interested in the intersection of systems, cloud and security. I learn by building: each project on my GitHub represents hours of real troubleshooting, documentation and technical decisions.",
    sobre_enfoque_p2:'Currently deepening knowledge in hybrid Azure + AD environments, Linux system hardening and threat detection with Suricata.',
    tag_ciber:'Cybersecurity',

    exp_titulo:'Experience & Education', exp_laboral:'Work Experience', edu_titulo:'Academic Background',

    exp1_cargo:'IT Support Technician', exp1_fecha:'Jan. 2026 - present',
    exp1_li1:'Level 1/2 incident resolution in an educational environment',
    exp1_li2:'Configuration and maintenance of Windows workstations',
    exp1_li3:'Network diagnostics and support for teachers and students',
    exp1_li4:'Preventive maintenance of computer labs',

    exp2_cargo:'Web Maintenance Technician', exp2_fecha:'May 2024 - Jun. 2024',
    exp2_li1:'Remote maintenance of WordPress websites',
    exp2_li2:'Basic plugin auditing and performance optimisation',

    exp3_cargo:'IT Support & Systems Technician', exp3_fecha:'Feb. 2023 - Jul. 2023',
    exp3_li1:'Level 1/2 hardware and software incident resolution',
    exp3_li2:'Equipment configuration and Windows user profile management',

    edu1_nombre:'Higher Vocational Training in Network Systems Administration (ASIR)',
    edu2_nombre:'Professional Certificate: Database Administration',
    edu3_nombre:'Vocational Training in Microcomputer Systems and Networks (SMR)',

    proy_titulo:'Projects',
    proy1_titulo:'Azure + AD Hybrid Environment',
    proy1_desc:'Enterprise infrastructure simulation with on-premise Active Directory synced to Azure Entra ID. Includes MFA, Conditional Access, RBAC and Azure Monitor.',
    proy2_titulo:'Linux Homelab',
    proy2_desc:'Ubuntu Server 24.04 on VirtualBox with Nginx, Pi-hole, Netdata, SSH/UFW hardening and Bash script automation.',
    proy3_desc:'PowerShell HelpDesk Toolkit with 6 modules to automate level 1/2 support. Logging, auto-elevation and interactive menus.',
    proy4_titulo:'ASIR Intermodular Project',
    proy4_desc:'Group deployment of 5 environments: E-Commerce Docker/Kubernetes, Ansible, IDS/IPS with Suricata, Zabbix and Hyper-V. Grade: 7/10.',
    proy_ver:'View project →', tag_auto:'Automation',

    cert_titulo:'Certifications & Languages',
    cert_ciber_titulo:'Cybersecurity & AI', cert_sis_titulo:'Systems',
    cert_redes_titulo:'Networking', cert_bd_titulo:'Languages & Databases',
    cert_prof_titulo:'Professional Skills', cert_idiomas_titulo:'Languages',
    cert_en_progreso:'In progress',
    cert_linux_basica:'Basic Linux Administration',
    cert_ad:'Advanced Administration on Windows Server Core 2022. Active Directory',
    cert_winserver:'Security, Performance and Resources on Windows Server Core 2022',
    cert_ccna1:'Introduction to Networks (CCNA ROUTING AND SWITCHING)',
    cert_ccna2:'Advanced Network Administration (CCNA ROUTING AND SWITCHING)',
    cert_pfsense:'Introduction to Network Firewalls with pfSense',
    cert_bd:'Database Administration',
    cert_html:'Introduction to HTML, CSS, XML and JSON',
    cert_python:'Basic Python Programming',
    idioma_es:'Spanish', idioma_ca:'Catalan', idioma_ar:'Arabic', idioma_en:'English', idioma_nativo:'Native',

    hab_titulo:'Skills', hab_soft_titulo:'Soft Skills',
    soft1:'Problem solving', soft2:'Effective Communication',
    soft3:'Fast learning and autonomy', soft4:'Adaptability',
    soft5:'Teamwork and Collaboration',

    cont_titulo:'Contact', cont_sub:'Available from September 2026. Feel free to reach out.',
    cont_cv:'Resume', cont_cv_sub:'View my CV',
    footer_txt:'Made with curiosity and many hours in the terminal',
  }
};

function applyLanguage(lang) {
  const t = translations[lang] || translations['es'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.documentElement.lang = { es:'es', ca:'ca', en:'en' }[lang] || 'es';
}

//  IDIOMA 
const langBtn      = document.getElementById('lang-btn');
const langLabel    = document.getElementById('lang-label');
const langDropdown = document.getElementById('lang-dropdown');

langBtn.addEventListener('click', () => langDropdown.classList.toggle('hidden'));

langDropdown.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    localStorage.setItem('language', lang);
    langLabel.textContent = lang.toUpperCase();
    langDropdown.classList.add('hidden');
    applyLanguage(lang);
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-controls') && !langDropdown.classList.contains('hidden')) {
    langDropdown.classList.add('hidden');
  }
});

const savedLang = localStorage.getItem('language') || 'es';
langLabel.textContent = savedLang.toUpperCase();
applyLanguage(savedLang);

// Menú
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Año actual
document.getElementById('year').textContent = new Date().getFullYear();

// Carga
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        obs.unobserve(entry.target);
      }
    });
  });
  document.querySelectorAll('img[src]').forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease-in-out';
    observer.observe(img);
  });
}