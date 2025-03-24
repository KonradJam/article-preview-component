const articlePreviewShareBtn = document.getElementById('article-preview__share');
const socials = document.getElementById('socials');
const isDesktop = () => window.innerWidth > 768;


isDesktop() ? socials.classList.add('socials--desktop') : socials.classList.remove('socials--desktop');

articlePreviewShareBtn.addEventListener('click', () => {
    isDesktop() ? socials.classList.toggle('socials--show-desktop') : socials.classList.toggle('socials--show-mobile');
});

window.addEventListener('resize', () => {
    isDesktop() ? socials.classList.add('socials--desktop') : socials.classList.remove('socials--desktop');
});