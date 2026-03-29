document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Sidebar for Nested Modules Data
    const sidebarNav = document.getElementById('sidebar-nav');
    
    courseData.forEach((moduleData, mIndex) => {
        // Create Module Header
        const moduleHeader = document.createElement('div');
        moduleHeader.className = 'module-header';
        moduleHeader.textContent = moduleData.moduleTitle;
        sidebarNav.appendChild(moduleHeader);

        // Iterate through sections (Weeks/Topics)
        moduleData.sections.forEach((sectionData, sIndex) => {
            const weekGroup = document.createElement('div');
            weekGroup.className = 'week-group';
            
            const isFirstOfFirstModule = (mIndex === 0 && sIndex === 0);
            
            const weekBtn = document.createElement('button');
            weekBtn.className = 'week-btn' + (isFirstOfFirstModule ? ' active' : '');
            
            // Adjust title based on module
            const prefix = moduleData.moduleId === "meetings" ? `Week ${sectionData.week}` : `Topic`;
            weekBtn.innerHTML = `${prefix}: ${sectionData.title} <i class="fas fa-chevron-down"></i>`;
            
            const daysList = document.createElement('div');
            daysList.className = 'days-list';
            if (isFirstOfFirstModule) daysList.style.maxHeight = '500px';

            weekBtn.addEventListener('click', () => {
                weekBtn.classList.toggle('active');
                if (weekBtn.classList.contains('active')) {
                    daysList.style.maxHeight = daysList.scrollHeight + 'px';
                } else {
                    daysList.style.maxHeight = '0px';
                }
            });

            sectionData.days.forEach(day => {
                const dayBtn = document.createElement('button');
                dayBtn.className = `day-btn ${day.isAvailable ? '' : 'disabled'}`;
                if (isFirstOfFirstModule && day.day === 1 && day.isAvailable) dayBtn.classList.add('active');
                
                let label = moduleData.moduleId === "meetings" ? `Day ${day.day}` : `Lesson ${day.day}`;
                if (day.title) label += ` - ${day.title}`;
                if (!day.isAvailable) label += ` <span class="badge">Soon</span>`;
                
                dayBtn.innerHTML = label;
                
                if (day.isAvailable) {
                    dayBtn.addEventListener('click', () => {
                        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
                        dayBtn.classList.add('active');
                        renderLesson(moduleData, sectionData, day);
                        if(window.innerWidth <= 768) closeSidebar();
                    });
                }
                
                daysList.appendChild(dayBtn);
            });

            weekGroup.appendChild(weekBtn);
            weekGroup.appendChild(daysList);
            sidebarNav.appendChild(weekGroup);
        });
    });

    // Mobile Sidebar Logic
    const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
        overlay.classList.add('show');
    });

    overlay.addEventListener('click', closeSidebar);
    
    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    }

    // TTS Setup Using Web Speech API
    let voices = [];
    let englishVoice = null;
    
    function initVoices() {
        voices = window.speechSynthesis.getVoices();
        englishVoice = voices.find(v => v.lang === 'en-US' && v.name.includes('Google')) ||
                      voices.find(v => v.lang.startsWith('en-US')) ||
                      voices.find(v => v.lang.startsWith('en'));
    }
    
    window.speechSynthesis.onvoiceschanged = initVoices;
    initVoices();

    function speakText(text, buttonElement = null) {
        if (!text) return;
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        if (englishVoice) utterance.voice = englishVoice;
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        
        if (buttonElement) {
            utterance.onstart = () => buttonElement.classList.add('playing');
            utterance.onend = () => buttonElement.classList.remove('playing');
            utterance.onerror = () => buttonElement.classList.remove('playing');
        }
        
        window.speechSynthesis.speak(utterance);
    }
    
    window.speakWord = function(text, btn) {
        speakText(text, btn);
    }
    
    // Render initial lesson
    if (courseData[0].sections[0].days[0].isAvailable) {
        renderLesson(courseData[0], courseData[0].sections[0], courseData[0].sections[0].days[0]);
    }
});

function renderLesson(moduleData, sectionData, dayData) {
    const titleEl = document.getElementById('lesson-title');
    const subtitleEl = document.getElementById('lesson-subtitle');
    const contentBox = document.getElementById('lesson-content');
    
    contentBox.classList.remove('lesson-content');
    void contentBox.offsetWidth; // trigger reflow
    contentBox.classList.add('lesson-content');

    const prefix = moduleData.moduleId === "meetings" ? `Week ${sectionData.week}, Day ${dayData.day}` : `Topic: ${sectionData.title}`;
    titleEl.textContent = `${prefix}: ${dayData.title}`;
    subtitleEl.textContent = `Module: ${moduleData.moduleTitle.replace(/^Module \d+: /, '')}`;
    
    let html = `
        <div class="glass-card">
            <h2 class="section-title"><i class="fas fa-layer-group"></i> Key Structures</h2>
            <p class="structure-desc">Focus on mastering this concept. Practice using these alternative expressions to sound more natural:</p>
            <ul class="structure-list">
                ${dayData.structures.map(st => `
                    <li>
                        ${st}
                        <button class="tts-btn" style="float:right; width: 26px; height: 26px;" onclick="speakWord('${st.replace(/'/g, "\\'")}', this)" title="Listen">
                            <i class="fas fa-volume-up" style="font-size:12px;"></i>
                        </button>
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div class="glass-card">
            <h2 class="section-title"><i class="fas fa-spell-check"></i> Vocabulary (${dayData.vocabulary.length} words)</h2>
            <div class="vocab-grid">
                ${dayData.vocabulary.map(v => `
                    <div class="vocab-card">
                        <div class="vocab-header">
                            <div class="vocab-word-group">
                                <span class="english">${v.en}</span>
                                <span class="type">(${v.type})</span>
                                <span class="ipa">${v.ipa}</span>
                            </div>
                            <button class="tts-btn" onclick="speakWord('${v.en.replace(/'/g, "\\'")}', this)" title="Listen">
                                <i class="fas fa-volume-up"></i>
                            </button>
                        </div>
                        <span class="vocab-def">${v.vi}</span>
                        <div class="vocab-example">
                            ${v.ex}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="glass-card">
            <h2 class="section-title"><i class="fas fa-comments"></i> Shadowing Conversations</h2>
            <p class="structure-desc">These role-plays utilize all the vocabulary words you've just learned. Shadow them and practice loudly.</p>
            ${dayData.conversations.map((conv, idx) => `
                <div class="conversation-box">
                    <h4><i class="fas fa-comment-dots" style="color: #60a5fa; margin-right: 8px;"></i> Conversation ${idx + 1}</h4>
                    ${conv.map(c => `
                        <div class="chat-bubble speaker-${c.speaker}">
                            <span class="speaker-name">${c.speaker}:</span>
                            ${c.text}
                        </div>
                    `).join('')}
                </div>
            `).join('')}
        </div>
        
        <div class="end-note">
            🚀 Great job! Whenever you are ready, type "Review cuối ngày" in the chat for your practical role-play test!
        </div>
    `;
    
    contentBox.innerHTML = html;
}
