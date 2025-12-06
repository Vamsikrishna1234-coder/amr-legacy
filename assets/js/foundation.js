// FOUNDATION DATA
// FOUNDATION DATA (PNG ICON VERSION)
const foundations = [
    {
        title: "VISION",
        icon: `<img src="assets/images/Vision Icon.png" class="foundation-icon" alt="vision">`,
        desc: "Our vision guides every decision we make. We see beyond the present moment to understand the broader landscape of possibilities. By anticipating future trends, we position ourselves for long-term success..."
    },
    {
        title: "PLANNING",
        icon: `<img src="assets/images/Planning Icon.png" class="foundation-icon" alt="planning">`,
        desc: "Strategic planning is the backbone of execution. We craft detailed roadmaps through thorough research and risk assessment. Our meticulous preparation ensures ambitious goals become achievable realities.."
    },
    { 
        title: "EXECUTION", 
        icon: `<img src="assets/images/Execution Icon.png" class="foundation-icon" alt="execution">`,
        desc: "Where vision meets action, execution transforms ideas into results. Our team implements strategies with precision and unwavering commitment. We deliver excellence in every action we take..."
    },
    { 
        title: "SUPPORT", 
        icon: `<img src="assets/images/Support Icon.png" class="foundation-icon" alt="support">`,
        desc: "True partnership means standing by your side throughout the journey. Our support extends beyond project completion with ongoing assistance and guidance. Your success is our success...."
    },
    { 
        title: "TRUST", 
        icon: `<img src="assets/images/Trust Icon.png" class="foundation-icon" alt="trust">`,
        desc: "Trust is earned through consistent action and transparency. We prioritize open communication and ethical practices in everything we do. We protect your interests with complete confidentiality...."
    },
    { 
        title: "VALUE", 
        icon: `<img src="assets/images/Value Icon.png" class="foundation-icon" alt="value">`,
        desc: "Delivering value means exceeding expectations and creating meaningful impact. Every solution maximizes return on investment while minimizing waste. Quality is our promise of excellence...."
    }
];


        const list = document.getElementById("foundation-list");

        /* CREATE ITEMS */
        foundations.forEach((item, i) => {
            const foundationItem = document.createElement("div");
            foundationItem.classList.add("foundation-item");
            foundationItem.innerHTML = `
                <div class="foundation-icon-circle">${item.icon}</div>
                <div class="foundation-content">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            `;
            list.appendChild(foundationItem);
        });
