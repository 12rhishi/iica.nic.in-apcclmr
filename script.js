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

/* ======================================================
   PREMIUM WEBSITE ANIMATIONS
====================================================== */

document.addEventListener("DOMContentLoaded",()=>{

    /* Scroll Reveal */

    const reveals=document.querySelectorAll("section,article,.bg-white,.rounded-2xl");

    reveals.forEach(el=>{

        el.classList.add("reveal");

    });

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },{

        threshold:.15

    });

    reveals.forEach(el=>observer.observe(el));



    /* Floating Hero Card */

    const hero=document.querySelector("#home .lg\\:col-span-4");

    if(hero){

        hero.classList.add("float");

    }



    /* Hover Cards */

    document.querySelectorAll("article").forEach(card=>{

        card.classList.add("card-3d");

        card.classList.add("shine");

    });



    /* Pulse Icons */

    document.querySelectorAll("i").forEach(icon=>{

        icon.classList.add("icon-pulse");

    });



    /* Glow Buttons */

    document.querySelectorAll("a,button").forEach(btn=>{

        btn.classList.add("glow-btn");

    });



    /* Smooth Counter Animation */

    const counters=document.querySelectorAll("[data-counter]");



    counters.forEach(counter=>{

        const target=Number(counter.dataset.counter);

        let current=0;

        const increment=target/240;



        function update(){

            current+=increment;

            if(current<target){

                counter.innerText=Math.floor(current);

                requestAnimationFrame(update);

            }

            else{

                counter.innerText=target;

            }

        }



        update();

    });



    /* Mouse Tilt Effect */

    document.querySelectorAll(".card-3d").forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateY=(x-rect.width/2)/50;

            const rotateX=-(y-rect.height/2)/50;

    // Limit rotation to ±4°
    rotateY = Math.max(-4, Math.min(4, rotateY));
    rotateX = Math.max(-4, Math.min(4, rotateX));


            card.style.transform=

            `perspective(900px)

            rotateX(${rotateX}deg)

            rotateY(${rotateY}deg)

            translateY(-8px)`;

        });



        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

});

