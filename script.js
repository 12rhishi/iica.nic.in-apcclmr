    let currentFacultyPage = 1;
    const totalPages = 4;

    function showFacultyPage(page) {
        // Update the indicator label
        document.getElementById('faculty-page-indicator').innerText = "Page " + page + " of " + totalPages;
        
        // Hide all pages
        document.querySelectorAll('.faculty-page').forEach(p => p.classList.add('hidden'));
        
        // Show only the selected page
        document.getElementById('page-' + page).classList.remove('hidden');
        
        currentFacultyPage = page;
    }

    function prevFacultyPage() {
        showFacultyPage(currentFacultyPage === 1 ? totalPages : currentFacultyPage - 1);
    }

    function nextFacultyPage() {
        showFacultyPage(currentFacultyPage === totalPages ? 1 : currentFacultyPage + 1);
    }

        // FAQ interactive scripts logic initialization 
        document.querySelectorAll(".faq-tab").forEach(tab=>{
            tab.addEventListener("click",()=>{
                document.querySelectorAll(".faq-tab").forEach(t=>t.classList.remove("active"));
                document.querySelectorAll(".faq-content").forEach(c=>c.classList.remove("active"));
                tab.classList.add("active");
                document.getElementById(tab.dataset.tab).classList.add("active");
            });
        });

        document.querySelectorAll(".faq-content").forEach(group=>{
            group.querySelectorAll(".faq-question").forEach(question=>{
                question.addEventListener("click",()=>{
                    group.querySelectorAll(".faq-item").forEach(item=>{
                        if(item!==question.parentElement){
                            item.classList.remove("open");
                            item.querySelector(".faq-question").classList.remove("active");
                        }
                    });
                    question.parentElement.classList.toggle("open");
                    question.classList.toggle("active");
                });
            });
        });

function toggleModuleMobile(moduleNumber) {
    const content = document.getElementById(`mod-content-${moduleNumber}`);
    const icon = document.getElementById(`mod-icon-${moduleNumber}`);

    if (!content || !icon) return;

    const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

    if (isOpen) {
        content.style.maxHeight = "0";
        icon.classList.remove("rotate-180");
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add("rotate-180");
    }
}

// Scroll-to-Top and FAQ Accessibility Logic
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
            scrollToTopBtn.classList.add('opacity-100', 'translate-y-0');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            scrollToTopBtn.classList.remove('opacity-100', 'translate-y-0');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Aria handling for FAQ added via script if standard implementation missing
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(q => {
        q.addEventListener("click", function() {
            const isExpanded = this.getAttribute("aria-expanded") === "true";
            this.setAttribute("aria-expanded", !isExpanded);
        });
    });
});