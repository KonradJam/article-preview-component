const articlePreviewShareBtn = document.getElementById('article-preview__share');
const socials = document.getElementById('socials');
const isDesktop = () => window.innerWidth > 768;


const updateSocialsClass = () => {
    socials.classList.remove('socials--desktop', 'socials--mobile');
    isDesktop() ? socials.classList.add('socials--desktop') : socials.classList.add('socials--mobile'); 
}
updateSocialsClass();

articlePreviewShareBtn.addEventListener('click', () => {
    isDesktop() ? socials.classList.toggle('socials--show-desktop') : socials.classList.toggle('socials--show-mobile');
});


let resizeTimer;
window.addEventListener('resize', () => {
    const isCurrentVisable = socials.classList.contains('socials--show-desktop') || socials.classList.contains('socials--show-mobile');

    if (!isCurrentVisable) {
        socials.style.transition = "none";
    }

    clearTimeout(resizeTimer);
    setTimeout(() => {
        socials.style.transition = '';
    }, 100);

    updateSocialsClass();

    if (isCurrentVisable) {
        if (isDesktop()) {
            socials.classList.remove('socials--show-mobile');
            socials.classList.add('socials--show-desktop') 
        } else {
            socials.classList.remove('socials--show-desktop');
            socials.classList.add('socials--show-mobile');
        }
    }
});
