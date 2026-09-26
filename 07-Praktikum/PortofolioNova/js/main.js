document.addEventListener("DOMContentLoaded", function() {

    // 1. TYPING EFFECT
    const typingText = document.getElementById('typing-text');
    if (typingText) {
        const names = ['UI/UX Designer (semoga)', 'Mahasiswa SI', 'Content Creator'];
        let nameIndex = 0, charIndex = 0, isDeleting = false;

        function typeEffect() {
            const currentName = names[nameIndex];
            
            if (isDeleting) {
                typingText.textContent = currentName.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentName.substring(0, charIndex + 1);
                charIndex++;
            }

            let delay = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentName.length) {
                delay = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                nameIndex = (nameIndex + 1) % names.length;
                delay = 500;
            }
            setTimeout(typeEffect, delay);
        }
        typeEffect();
    }

    // 2. GENERATE PROJECT CARDS (Bentuk Sticky Notes)
    const projectGrid = document.getElementById('project-grid');
    if (projectGrid) {
        const projects = [
            {
                title: 'UI/UX Design', 
                desc: 'Mendesain platform Skyboost menggunakan figma🎀', 
                image: 'images/uiux2.webp'
            },
            {
                title: 'Volunteer', 
                desc: 'Volunteer di Panti Asuhan✨', 
                image: 'images/volun.webp'
            },
            {
                title: 'Fotografi', 
                desc: 'Mengambil foto untuk menjadi konten di sosial media 📸', 
                image: 'images/potogdg.webp'
            },
            {
                title: 'Desain Grafis', 
                desc: 'Membuat desain grafis untuk program AFL 🎨', 
                image: 'images/dsgf.webp'
            },
            {
                title: 'Hobi sampingan', 
                desc: 'Baking 🌸', 
                image: 'images/kukis.webp'
            },
        ];

        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            card.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
            `;

            card.addEventListener('click', () => {
                alert(`Anda memilih proyek: ${project.title}`);
            });

            projectGrid.appendChild(card);
        });
    }

    // 3. KIRIM EMAIL BENERAN (Via FormSubmit API)
    const form = document.getElementById("cute-contact-form");
    const successMessage = document.getElementById("success-message");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Biar halaman nggak ke-refresh

            const btn = form.querySelector('.btn-cute');
            btn.innerText = "Mengirim... 🕊️";

            const formData = new FormData(form);

            // Kirim data beneran ke email kamu
            fetch("https://formsubmit.co/ajax/novaamelia2970@gmail.com", {
                method: "POST",
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    form.style.display = "none";
                    successMessage.classList.remove("hidden");
                })
                .catch(error => {
                    alert("Gagal mengirim pesan. Coba periksa koneksi internetmu ya!");
                    btn.innerText = "Kirim Pesan 🕊️";
                });
        });
    }
});