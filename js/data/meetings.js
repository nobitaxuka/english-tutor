const meetingsModule = {
    moduleId: "meetings",
    moduleTitle: "Module 1: English for Meetings",
    sections: [
        {
            week: 1,
            title: "Foundation & Planning",
            days: [
                {
                    day: 1,
                    title: "Starting a Meeting",
                    isAvailable: true,
                    structures: [
                        "Thanks everyone for joining, today's goal is to go over our current progress.",
                        "I appreciate you all being here; the main purpose of this gathering is to evaluate our recent work.",
                        "Let's get started. We're here today to review our milestones and plan the next steps."
                    ],
                    vocabulary: [
                        { en: "Meeting", type: "n", ipa: "/ˈmiː.tɪŋ/", vi: "Cuộc họp", ex: "The <strong>meeting</strong> is important." },
                        { en: "Agenda", type: "n", ipa: "/əˈdʒen.də/", vi: "Lịch trình", ex: "The <strong>meeting</strong> has an <strong>agenda</strong>." },
                        { en: "Point", type: "n", ipa: "/pɔɪnt/", vi: "Điểm/vấn đề", ex: "The <strong>meeting</strong> has an <strong>agenda</strong> with a key <strong>point</strong>." },
                        { en: "Discuss", type: "v", ipa: "/dɪˈskʌs/", vi: "Thảo luận", ex: "In the <strong>meeting</strong>, we <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong>." },
                        { en: "Objective", type: "n", ipa: "/əbˈdʒek.tɪv/", vi: "Mục tiêu", ex: "In the <strong>meeting</strong>, we <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to reach our <strong>objective</strong>." },
                        { en: "Focus", type: "n/v", ipa: "/ˈfoʊ.kəs/", vi: "Tập trung", ex: "In the <strong>meeting</strong>, we <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to reach our <strong>objective</strong> with full <strong>focus</strong>." },
                        { en: "Issue", type: "n", ipa: "/ˈɪʃ.uː/", vi: "Vấn đề", ex: "In the <strong>meeting</strong>, we <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to address an <strong>issue</strong> and reach our <strong>objective</strong> with full <strong>focus</strong>." },
                        { en: "Solve", type: "v", ipa: "/sɑːlv/", vi: "Giải quyết", ex: "In the <strong>meeting</strong>, we <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to <strong>solve</strong> an <strong>issue</strong> and reach our <strong>objective</strong> with full <strong>focus</strong>." },
                        { en: "Update", type: "n/v", ipa: "/ʌpˈdeɪt/", vi: "Cập nhật", ex: "In the <strong>meeting</strong>, we <strong>update</strong> everyone and <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to <strong>solve</strong> an <strong>issue</strong> and reach our <strong>objective</strong> with full <strong>focus</strong>." },
                        { en: "Share", type: "v", ipa: "/ʃer/", vi: "Chia sẻ", ex: "In the <strong>meeting</strong>, we <strong>share</strong> an <strong>update</strong> and <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to <strong>solve</strong> an <strong>issue</strong> and reach our <strong>objective</strong> with full <strong>focus</strong>." },
                        { en: "Idea", type: "n", ipa: "/aɪˈdiː.ə/", vi: "Ý tưởng", ex: "In the <strong>meeting</strong>, we <strong>share</strong> an <strong>idea</strong> as an <strong>update</strong> and <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to <strong>solve</strong> an <strong>issue</strong> and reach our <strong>objective</strong> with full <strong>focus</strong>." },
                        { en: "Plan", type: "n/v", ipa: "/plæn/", vi: "Kế hoạch", ex: "In the <strong>meeting</strong>, we <strong>share</strong> a <strong>plan</strong> and an <strong>idea</strong> as an <strong>update</strong>, and <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to <strong>solve</strong> an <strong>issue</strong> and reach our <strong>objective</strong> with full <strong>focus</strong>." },
                        { en: "Strategy", type: "n", ipa: "/ˈstræt̬.ə.dʒi/", vi: "Chiến lược", ex: "In the <strong>meeting</strong>, we <strong>share</strong> a <strong>strategy</strong>, a <strong>plan</strong>, and an <strong>idea</strong> as an <strong>update</strong>, and <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to <strong>solve</strong> an <strong>issue</strong> and reach our <strong>objective</strong> with full <strong>focus</strong>." },
                        { en: "Align", type: "v", ipa: "/əˈlaɪn/", vi: "Đồng bộ", ex: "In the <strong>meeting</strong>, we <strong>align</strong> to <strong>share</strong> a <strong>strategy</strong>, a <strong>plan</strong>, and an <strong>idea</strong> as an <strong>update</strong>, and <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to <strong>solve</strong> an <strong>issue</strong> and reach our <strong>objective</strong> with full <strong>focus</strong>." },
                        { en: "Team", type: "n", ipa: "/tiːm/", vi: "Đội/nhóm", ex: "In the <strong>meeting</strong>, our <strong>team</strong> will <strong>align</strong> to <strong>share</strong> a <strong>strategy</strong>, a <strong>plan</strong>, and an <strong>idea</strong> as an <strong>update</strong>, and <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to <strong>solve</strong> an <strong>issue</strong> and reach our <strong>objective</strong> with full <strong>focus</strong>." },
                        { en: "Clarify", type: "v", ipa: "/ˈklær.ə.faɪ/", vi: "Làm rõ", ex: "In the <strong>meeting</strong>, our <strong>team</strong> will <strong>clarify</strong> and <strong>align</strong> to <strong>share</strong> a <strong>strategy</strong>, a <strong>plan</strong>, and an <strong>idea</strong> as an <strong>update</strong>, and <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to <strong>solve</strong> an <strong>issue</strong> and reach our <strong>objective</strong> with full <strong>focus</strong>." },
                        { en: "Detail", type: "n", ipa: "/ˈdiː.teɪl/", vi: "Chi tiết", ex: "In the <strong>meeting</strong>, our <strong>team</strong> will <strong>clarify</strong> every <strong>detail</strong> and <strong>align</strong> to <strong>share</strong> a <strong>strategy</strong>, a <strong>plan</strong>, and an <strong>idea</strong> as an <strong>update</strong>, and <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to <strong>solve</strong> an <strong>issue</strong> and reach our <strong>objective</strong> with full <strong>focus</strong>." },
                        { en: "Action", type: "n", ipa: "/ˈæk.ʃən/", vi: "Hành động", ex: "In the <strong>meeting</strong>, our <strong>team</strong> will <strong>clarify</strong> every <strong>detail</strong> and <strong>align</strong> an <strong>action</strong> to <strong>share</strong> a <strong>strategy</strong>, a <strong>plan</strong>, and an <strong>idea</strong> as an <strong>update</strong>, and <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to <strong>solve</strong> an <strong>issue</strong> and reach our <strong>objective</strong> with full <strong>focus</strong>." },
                        { en: "Review", type: "v", ipa: "/rɪˈvjuː/", vi: "Đánh giá lại", ex: "In the <strong>meeting</strong>, our <strong>team</strong> will <strong>review</strong> and <strong>clarify</strong> every <strong>detail</strong> and <strong>align</strong> an <strong>action</strong> to <strong>share</strong> a <strong>strategy</strong>, a <strong>plan</strong>, and an <strong>idea</strong> as an <strong>update</strong>, and <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to <strong>solve</strong> an <strong>issue</strong> and reach our <strong>objective</strong> with full <strong>focus</strong>." },
                        { en: "Confirm", type: "v", ipa: "/kənˈfɝːm/", vi: "Xác nhận", ex: "In the <strong>meeting</strong>, our <strong>team</strong> will <strong>confirm</strong>, <strong>review</strong>, and <strong>clarify</strong> every <strong>detail</strong> and <strong>align</strong> an <strong>action</strong> to <strong>share</strong> a <strong>strategy</strong>, a <strong>plan</strong>, and an <strong>idea</strong> as an <strong>update</strong>, and then <strong>discuss</strong> the <strong>agenda</strong> and its key <strong>point</strong> to <strong>solve</strong> an <strong>issue</strong> and reach our <strong>objective</strong> with full <strong>focus</strong>." }
                    ],
                    conversations: [
                        [
                            { speaker: "A", text: "Thanks everyone for joining, today's goal is to go over our current progress. This <strong>meeting</strong> is crucial because we need to <strong>confirm</strong> our <strong>strategy</strong>." },
                            { speaker: "B", text: "Yes, I have the <strong>agenda</strong> here. The first <strong>point</strong> is to <strong>review</strong> our <strong>plan</strong>." },
                            { speaker: "C", text: "I'd like to <strong>share</strong> an <strong>update</strong>. We must <strong>discuss</strong> an <strong>issue</strong> with the <strong>team</strong>." },
                            { speaker: "A", text: "We need to <strong>solve</strong> that. What is your <strong>idea</strong>, and how does it <strong>align</strong> with our main <strong>objective</strong>?" },
                            { speaker: "B", text: "The <strong>idea</strong> is an <strong>action</strong> to <strong>clarify</strong> every <strong>detail</strong> and keep our <strong>focus</strong> strong." }
                        ],
                        [
                            { speaker: "A", text: "I appreciate you all being here; the main purpose of this gathering is to evaluate our recent work. In this <strong>meeting</strong>, we must <strong>focus</strong> on our core <strong>objective</strong>." },
                            { speaker: "B", text: "Right. The <strong>agenda</strong> has a specific <strong>point</strong> to <strong>discuss</strong>. We need to <strong>solve</strong> the current <strong>issue</strong>." },
                            { speaker: "A", text: "Let's <strong>review</strong> the <strong>plan</strong> and <strong>detail</strong> the next <strong>action</strong> for the <strong>team</strong>." },
                            { speaker: "C", text: "I can <strong>share</strong> an <strong>update</strong> and an <strong>idea</strong> to <strong>clarify</strong> our <strong>strategy</strong>." },
                            { speaker: "A", text: "Good, let's <strong>align</strong> on that and <strong>confirm</strong> everyone is ready." }
                        ],
                        [
                            { speaker: "A", text: "Let's get started. We're here today to review our milestones and plan the next steps. To <strong>confirm</strong>, our <strong>objective</strong> for this <strong>meeting</strong> is to <strong>solve</strong> our recent <strong>issue</strong>." },
                            { speaker: "B", text: "Yes, the <strong>agenda</strong> lists that as the main <strong>point</strong>. We should <strong>discuss</strong> a new <strong>idea</strong>." },
                            { speaker: "C", text: "As an <strong>update</strong>, the <strong>team</strong> needs to <strong>align</strong> on the <strong>plan</strong> and <strong>strategy</strong>." },
                            { speaker: "A", text: "Exactly. We will <strong>share</strong> the <strong>action</strong> plan and <strong>clarify</strong> each <strong>detail</strong> to keep everyone's <strong>focus</strong>." },
                            { speaker: "B", text: "Let's <strong>review</strong> everything carefully." }
                        ]
                    ]
                },
                {
                    day: 2,
                    title: "Presenting Progress Updates",
                    isAvailable: true,
                    structures: [
                        "Let me give you a quick update on where we stand with the project.",
                        "Here is the current status of the tasks assigned to my team.",
                        "To start, I'll walk you through our recent progress and upcoming milestones."
                    ],
                    vocabulary: [
                        { en: "Project", type: "n", ipa: "/ˈprɑː.dʒekt/", vi: "Dự án", ex: "My <strong>project</strong> is big." },
                        { en: "Complete", type: "v", ipa: "/kəmˈpliːt/", vi: "Hoàn thành", ex: "My <strong>project</strong> is <strong>complete</strong>." },
                        { en: "Phase", type: "n", ipa: "/feɪz/", vi: "Giai đoạn", ex: "My <strong>project</strong> is <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Report", type: "n", ipa: "/rɪˈpɔːrt/", vi: "Báo cáo", ex: "The <strong>report</strong> says my <strong>project</strong> is <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Current", type: "adj", ipa: "/ˈkɝː.ənt/", vi: "Hiện tại", ex: "The <strong>current</strong> <strong>report</strong> says my <strong>project</strong> is <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Status", type: "n", ipa: "/ˈsteɪ.t̬əs/", vi: "Trạng thái", ex: "The <strong>current</strong> <strong>report</strong> says the <strong>status</strong> of my <strong>project</strong> is <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Ahead", type: "adj", ipa: "/əˈhed/", vi: "Vượt trước", ex: "The <strong>current</strong> <strong>report</strong> says the <strong>status</strong> of my <strong>project</strong> is <strong>ahead</strong> and <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Schedule", type: "n", ipa: "/ˈskedʒ.uːl/", vi: "Lịch trình", ex: "The <strong>current</strong> <strong>report</strong> says the <strong>status</strong> of my <strong>project</strong> is <strong>ahead</strong> of <strong>schedule</strong> and <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Behind", type: "adj", ipa: "/bɪˈhaɪnd/", vi: "Chậm trễ", ex: "The <strong>current</strong> <strong>report</strong> says the <strong>status</strong> of my <strong>project</strong> is not <strong>behind</strong>, but <strong>ahead</strong> of <strong>schedule</strong> and <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Deadline", type: "n", ipa: "/ˈded.laɪn/", vi: "Hạn chót", ex: "The <strong>current</strong> <strong>report</strong> says the <strong>status</strong> of my <strong>project</strong> is not <strong>behind</strong> the <strong>deadline</strong>, but <strong>ahead</strong> of <strong>schedule</strong> and <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Track", type: "n", ipa: "/træk/", vi: "Tiến độ (on track)", ex: "The <strong>current</strong> <strong>report</strong> says the <strong>status</strong> of my <strong>project</strong> is on <strong>track</strong>, not <strong>behind</strong> the <strong>deadline</strong>, but <strong>ahead</strong> of <strong>schedule</strong> and <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Goal", type: "n", ipa: "/ɡoʊl/", vi: "Mục tiêu", ex: "The <strong>current</strong> <strong>report</strong> says the <strong>status</strong> of my <strong>project</strong> is on <strong>track</strong> to hit the <strong>goal</strong>, not <strong>behind</strong> the <strong>deadline</strong>, but <strong>ahead</strong> of <strong>schedule</strong> and <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Result", type: "n", ipa: "/rɪˈzʌlt/", vi: "Kết quả", ex: "The <strong>result</strong> in the <strong>current</strong> <strong>report</strong> says the <strong>status</strong> of my <strong>project</strong> is on <strong>track</strong> to hit the <strong>goal</strong>, not <strong>behind</strong> the <strong>deadline</strong>, but <strong>ahead</strong> of <strong>schedule</strong> and <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Deliverable", type: "n", ipa: "/dɪˈlɪv.ɚ.ə.bəl/", vi: "Sản phẩm bàn giao", ex: "The <strong>result</strong> of the <strong>deliverable</strong> in the <strong>current</strong> <strong>report</strong> says the <strong>status</strong> of my <strong>project</strong> is on <strong>track</strong> to hit the <strong>goal</strong>, not <strong>behind</strong> the <strong>deadline</strong>, but <strong>ahead</strong> of <strong>schedule</strong> and <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Milestone", type: "n", ipa: "/ˈmaɪl.stoʊn/", vi: "Cột mốc", ex: "The <strong>result</strong> of the <strong>deliverable</strong> and <strong>milestone</strong> in the <strong>current</strong> <strong>report</strong> says the <strong>status</strong> of my <strong>project</strong> is on <strong>track</strong> to hit the <strong>goal</strong>, not <strong>behind</strong> the <strong>deadline</strong>, but <strong>ahead</strong> of <strong>schedule</strong> and <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Estimate", type: "n", ipa: "/ˈes.tə.mət/", vi: "Ước tính", ex: "The <strong>estimate</strong> and <strong>result</strong> of the <strong>deliverable</strong> and <strong>milestone</strong> in the <strong>current</strong> <strong>report</strong> says the <strong>status</strong> of my <strong>project</strong> is on <strong>track</strong> to hit the <strong>goal</strong>, not <strong>behind</strong> the <strong>deadline</strong>, but <strong>ahead</strong> of <strong>schedule</strong> and <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Budget", type: "n", ipa: "/ˈbʌdʒ.ɪt/", vi: "Ngân sách", ex: "The <strong>budget</strong>, <strong>estimate</strong>, and <strong>result</strong> of the <strong>deliverable</strong> and <strong>milestone</strong> in the <strong>current</strong> <strong>report</strong> says the <strong>status</strong> of my <strong>project</strong> is on <strong>track</strong> to hit the <strong>goal</strong>, not <strong>behind</strong> the <strong>deadline</strong>, but <strong>ahead</strong> of <strong>schedule</strong> and <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Process", type: "n", ipa: "/ˈprɑː.ses/", vi: "Quy trình", ex: "The <strong>process</strong>, <strong>budget</strong>, <strong>estimate</strong>, and <strong>result</strong> of the <strong>deliverable</strong> and <strong>milestone</strong> in the <strong>current</strong> <strong>report</strong> says the <strong>status</strong> of my <strong>project</strong> is on <strong>track</strong> to hit the <strong>goal</strong>, not <strong>behind</strong> the <strong>deadline</strong>, but <strong>ahead</strong> of <strong>schedule</strong> and <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Task", type: "n", ipa: "/tæsk/", vi: "Nhiệm vụ", ex: "The <strong>task</strong>, <strong>process</strong>, <strong>budget</strong>, <strong>estimate</strong>, and <strong>result</strong> of the <strong>deliverable</strong> and <strong>milestone</strong> in the <strong>current</strong> <strong>report</strong> says the <strong>status</strong> of my <strong>project</strong> is on <strong>track</strong> to hit the <strong>goal</strong>, not <strong>behind</strong> the <strong>deadline</strong>, but <strong>ahead</strong> of <strong>schedule</strong> and <strong>complete</strong> in this <strong>phase</strong>." },
                        { en: "Progress", type: "n", ipa: "/ˈprɑː.ɡres/", vi: "Tiến độ", ex: "Regarding the <strong>progress</strong> of every <strong>task</strong>, the <strong>process</strong>, <strong>budget</strong>, and <strong>estimate</strong> leading to the <strong>result</strong> of each <strong>deliverable</strong> and <strong>milestone</strong> in the <strong>current</strong> <strong>report</strong> confirms the <strong>status</strong> of my <strong>project</strong> is on <strong>track</strong> to hit the <strong>goal</strong>, not <strong>behind</strong> the <strong>deadline</strong>, but <strong>ahead</strong> of <strong>schedule</strong> and <strong>complete</strong> in this <strong>phase</strong>." }
                    ],
                    conversations: [
                        [
                            { speaker: "A", text: "Let me give you a quick update on where we stand with the project. What is the <strong>status</strong> of the <strong>current</strong> <strong>phase</strong>?" },
                            { speaker: "B", text: "The <strong>progress</strong> on our <strong>milestone</strong> is good. We are <strong>ahead</strong> of <strong>schedule</strong> and not <strong>behind</strong> the <strong>deadline</strong>." },
                            { speaker: "C", text: "What about the <strong>budget</strong> and <strong>estimate</strong> for this <strong>task</strong>? Is it on <strong>track</strong> to hit the <strong>goal</strong>?" },
                            { speaker: "A", text: "Yes, the <strong>result</strong> of the <strong>deliverable</strong> in the <strong>report</strong> shows the <strong>process</strong> is <strong>complete</strong> for the <strong>project</strong>." }
                        ],
                        [
                            { speaker: "A", text: "Here is the current status of the tasks assigned to my team. The <strong>report</strong> says this <strong>phase</strong> of the <strong>project</strong> is <strong>complete</strong>." },
                            { speaker: "B", text: "With that <strong>progress</strong>, we hit the <strong>milestone</strong> and <strong>goal</strong> well <strong>ahead</strong> of <strong>schedule</strong>. We are not <strong>behind</strong> the <strong>deadline</strong>." },
                            { speaker: "C", text: "That's a great <strong>result</strong>. Did the <strong>budget</strong> and <strong>estimate</strong> align with the <strong>process</strong> for each <strong>deliverable</strong>?" },
                            { speaker: "A", text: "Yes, every <strong>task</strong> is on <strong>track</strong> and the <strong>status</strong> is excellent regarding the <strong>current</strong> plan." }
                        ],
                        [
                            { speaker: "A", text: "To start, I'll walk you through our recent progress and upcoming milestones. For this <strong>phase</strong>, the <strong>project</strong> <strong>status</strong> is fantastic." },
                            { speaker: "B", text: "Are we <strong>ahead</strong> of <strong>schedule</strong>? Have we met the <strong>current</strong> <strong>goal</strong> without falling <strong>behind</strong> the <strong>deadline</strong>?" },
                            { speaker: "C", text: "According to the <strong>report</strong>, the <strong>result</strong> of every <strong>task</strong> and <strong>deliverable</strong> is <strong>complete</strong> and on <strong>track</strong>." },
                            { speaker: "A", text: "Also, the <strong>process</strong> matched our <strong>budget</strong> and <strong>estimate</strong>. The <strong>progress</strong> speaks for itself regarding the latest <strong>milestone</strong>." }
                        ]
                    ]
                },
                { day: 3, isAvailable: false },
                { day: 4, isAvailable: false },
                { day: 5, isAvailable: false },
                { day: 6, isAvailable: false },
                { day: 7, isAvailable: false }
            ]
        },
        {
            week: 2,
            title: "Progress & Metrics",
            days: [
                { day: 1, isAvailable: false }, { day: 2, isAvailable: false }, { day: 3, isAvailable: false }, { day: 4, isAvailable: false }, { day: 5, isAvailable: false }, { day: 6, isAvailable: false }, { day: 7, isAvailable: false }
            ]
        },
        {
            week: 3,
            title: "Negotiation & Decision",
            days: [
                { day: 1, isAvailable: false }, { day: 2, isAvailable: false }, { day: 3, isAvailable: false }, { day: 4, isAvailable: false }, { day: 5, isAvailable: false }, { day: 6, isAvailable: false }, { day: 7, isAvailable: false }
            ]
        },
        {
            week: 4,
            title: "Wrapping Up",
            days: [
                { day: 1, isAvailable: false }, { day: 2, isAvailable: false }, { day: 3, isAvailable: false }, { day: 4, isAvailable: false }, { day: 5, isAvailable: false }, { day: 6, isAvailable: false }, { day: 7, isAvailable: false }
            ]
        }
    ]
};
