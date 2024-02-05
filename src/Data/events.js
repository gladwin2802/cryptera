import chess from "../Components/Screens/assets/chess.jpg";
import blindCode from "../Assets/event/blindCode.jpg";
import jumbledCode from "../Assets/event/jumbledCode.jpg";
import oxdebug from "../Assets/event/0xdebug.jpg";

const form = "https://docs.google.com/forms/d/e/1FAIpQLSdVn_M4OESw7BRTY5QJF8FREnONDoWUfAreehNLWgyF81HhHw/viewform"

export default [

    ///////////////////////////////////////////////////////

    // Tecnical events

    // 0xedebug
    {
        id: "1",
        name: "0xdebug",
        title: "0xdebug",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "The programming language given will be C ,C++, Python and Java.",
            "A total of 2 rounds will be conducted.",
            "Round 1 : Code snippets with multiple choice questions.",
            "Round 2 : Code snippets to debug in the above languages.",
            "Marks for each questions will be provided based on the difficulty and there will not be any -ve markings ",
            "Any kind of plagiarism will lead to immediate disqualification.",
            "Internet and personal computer will be provided and be free to bring you own laptops to this event.",
            "Use of compilers and debugging tools is prohibited.",
            "Winner will be decided based on the number of questions answered and time of submission.",
        ],
        pics: {
            primary: oxdebug,
                // "https://www.zdnet.com/a/img/resize/757fc75271d8f21e8d54e61b5d0dee0a3d522971/2021/06/30/0286f74b-453c-4472-b5c1-321b18475c78/technical-visual-studio-code-extension.jpg?auto=webp&fit=crop&height=1200&width=1200",
            secondary: [],
        },
        dateTime: "March 2, 3.00 pm",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9342222369",
        color: "var(--fg-g)",
        carddescription:
            "Are you the next Sherlock? Unleash your coding prowess and solve the mystery",
        description: `Think you have what it takes to be a debugging pro? Join our code event and put your skills to the test. With bugs and glitches to fix, it's time to show off your skills and emerge as the ultimate debugging champion!`,
        form: form,
        type: "technical",
        faq: [],
        tags: ["Python", "Java", "C++", "C", "Coding"],
    },

    // CSS Battle
    {
        id: "2",
        name: "CSS_Battle",
        title: "CSS Battle",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "You will be given a simple picture and you just need to recreate the image using HTML and CSS within stipulated time.",
            "Number of rounds will be based on the number of participants.",
            "Personal computer will be provided and be free to bring your own laptops to this event.",
        ],
        pics: {
            primary:
                "https://marquesfernandes.com/wp-content/uploads/2020/04/pankaj-patel-6JVlSdgMacE-unsplash.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        dateTime: "March 1, 9.00am",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9585596220",
        color: "var(--fg-g)",
        carddescription:
            "Unleash your creativity and compete to be the CSS champion in a battle of styles!",
        description:
            "Compete to create the most visually stunning CSS design in a head-to-head coding battle!",
        form: form,
        type: "technical",
        faq: [
            {
                question: "What are the languages need to be used?",
                answer: " HTML and CSS",
            },
        ],
        tags: [],
    },

    // Tech Feud
    {
        id: "3",
        name: "Tech_Feud",
        title: "Tech Feud",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Team should have exactly 2 members",
            "Shortlisted teams from each round will be eligible for next round.",
            `Round 1 : TECH QUIZ
            Questions are based on Data Structures and Algorithm , C Programming , SQL , Computer Networks , Operating System`,
            `Round 2 : CODE SHARING
            Each member of a team will be given one of the two question and both should solve simultaneously.
            After 15 minutes, 
                    If one of the teammate have completed his problem. Then he will be given two 
                    options,(1) Either replace his teammate to solve the teammate's question or (2) Wait for his teammate to complete
                    If none of them have completed, swapping is not possible.
            Discussion among team members is not permitted.`,
            `Round 3 :	RAPID FIRE
            For each battle,
                1.One from each team will represent the team for each question.
                2.After completion of each question the swapping of team members will happen.
                3.The questions will be displayed simultaneously for both teams.
                4.The one who rings the buzzer first gets to answer.
            Each battle is knockout stage."`,
        ],
        pics: {
            primary:
                "https://www.billboard.com/wp-content/uploads/2022/07/salt-n-pepa-celebrity-family-feud-2022-billboard-1548.png",
            secondary: [],
        },
        dateTime: "March 2, 2.30 pm",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9080951925",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Ready to flex some of that team skills?",
        description: `Tech Feud is an excellent oppurtunity to showcase your skills and compete with the techies around you.
        So gather your tech-savvy friends, form a team, and get ready to battle it out for tech dominance.
        With thrilling challenges and exciting prizes, Tech Feud promises to be a day you won't forget. 
        Get ready to flex your tech muscles at Tech Feud.`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will it be a one member or two member?",
                answer: "Two member",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
        ],
        tags: ["Problem Solving", "C", "C++", "Python"],
    },

    // Blind Code
    {
        id: "4",
        name: "Blind_Code",
        title: "Blind Code",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Solo Participation",
            "You can use any programming language of given choice (C, C++, Java, Python)",
            "Round 1 - code in blind screen",
            "Round 2 - code in blind screen",
            "Round 3 - code in blind screen"
        ],
        pics: {
            primary: blindCode,
            secondary: [],
        },
        dateTime: "March 1, 3.00 pm",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "8248548663",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Typing without sight, coding with insight.",
        description: `Typing without sight, coding with insight. Code the problem WITHOUT LOOKING AT THE EDITOR. Not so easy now is it? Even better…. There is a time limit. If all these won’t stop you. We admit it…. you deserve this cash award… Good Luck.`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will it be a one member or two member?",
                answer: "one member",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
            {
                question: "What is the event ?",
                answer:
                    "You will be provided with the editor where you can't see what you type. Copy and paste options disabled.",
            },
            {
                question: "How is the winner declared?",
                answer:
                    "The most optimized code of all will be selected as the winner.",
            },
        ],
        tags: ["Problem Solving", "C", "C++", "Python"],
    },

    // Jumbled Code
    {
        id: "5",
        name: "Jumbled_Code",
        title: "Jumbled Code",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Team should consist of 2 members",
            "The code will be in a jumbled manner and the corresponding output will be provided to the participants.",
            "You will be provided with 4 choices and choose the correct sequence so that it will execute correctly.",
            "There will be totally 25 questions and the time for each question is 45 seconds.",
            "Make sure you have an account in quizizz. If not create one",
            "Plagiarism and any kind of cheating is strictly prohibited.",
        ],
        pics: {
            primary: jumbledCode,
            secondary: [],
        },
        dateTime: "March 1, 10.00 am",
        duration: "",
        prizes: {
            gold: "650",
            silver: "300",
        },
        contact: "7598096466",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Not just any code… a jumbled one",
        description: `Participants will be given a code…. Not just any code… a jumbled one.
Jumble the code and obtain the final code which executes perfectly.
Jumble the code and triumphal your day.`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "What programming language the jumbled code will be?",
                answer: "It will be in python.",
            },
            {
                question: "Can individuals allowed to participate ?",
                answer: "Yes.",
            },
            {
                question: "How does the evaluation be done ?",
                answer:
                    "It's based on time and the number of questions you answer correctly.",
            },
        ],
        tags: ["Problem Solving", "Python"],
    },

    // UI Design Contest
    {
        id: "6",
        name: "UI_Design_Contest",
        title: "UI Design Contest",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "The UI design has to be for a mobile device",
            "A minimum of 4 screens must be designed",
            "The UI must fit the provided brief",
            "Submission must include - User flow, UI screens, a brief description of each screen and justifications for design decisions made",
        ],
        pics: {
            primary:
                "https://s3images.coroflot.com/user_files/individual_files/large_1020744_aontiqjc9mm3_aggdhrcsmvnh.png",
            secondary: [],
        },
        dateTime: "March 1, 11.00 am",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9677762808",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Good Design, when done well, should be invisible",
        description: `Good Design, when done well, should be invisible - Jared Spool In today's age of screens and keyboards, we spend more time staring at screens than anything else. A well designed UI has become a basic requirement to attract users and generate interaction. This is an opportunity to showcase your UI design skills by designing a UI for a specific problem statement.`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
            {
                question: "What is the event?",
                answer:
                    "It's a UI design event. You will be given a brief and asked to design a UI.",
            },
            {
                question: "How will the work be graded?",
                answer:
                    "The work will be graded based on multiple factors such as visual appearance, ease-of-use, design decisions and its validity",
            },
        ],
        tags: ["UI/UX", "Design", "Figma"],
    },

    // Missing Code
    {
        id: "7",
        name: "Missing_Code",
        title: "Missing Code",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Participants can bring their own laptops.",
            "Plagiarism and any kind of cheating is strictly prohibited.",
        ],
        pics: {
            primary:
                "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=690:388",
            secondary: [],
        },
        dateTime: "March 2, 2.00 pm",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9150067211",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Not just any code… a missed one",
        description: `Join our missing code 
        contest and test your 
        programming skills to the 
        limit. With code snippets 
        missing, it's time to put 
        your knowledge to the 
        test and find the missing 
        pieces to emerge as the 
        ultimate missing code 
        champion!`,
        form: "https://forms.gle/L8BMvNwQSR1TpNTL7",
        type: "technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
            {
                question: "What is the event?",
                answer: "choose the correct missing code",
            },
            {
                question: "The questions are based on which programming languages?",
                answer: "Python,C,C++,Java",
            },
        ],
        tags: ["Problem Solving", "C", "C++", "Python", "Java"],
    },

    // PC Building
    {
        id: "8",
        name: "PC_Building",
        title: "PC Building",
        eligibility: "College Students",
        completed: false,
        results: null,
        rules: [
            "Team should consist of 2 members",
            "A shelf with all the required PC parts will be provided, and participants should choose the parts from the shelf.",
            "To encourage participants to choose the correct parts, points will be awarded for accuracy.",
            "Points will be awarded based on how fast participants can build their PC.",
            "Participants will be required to boot up their PC to demonstrate that it is working correctly. Points should be awarded for successful booting.",
            "Points should be awarded for accurate fitting of the parts. For example, a RAM stick that is not inserted properly could result in a penalty.",
        ],
        pics: {
            primary:
                "https://staticg.sportskeeda.com/editor/2022/01/5f21e-16433417948778-1920.jpg",
            secondary: [],
        },
        dateTime: "March 1, 2.00 pm",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "8838903439",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Are you the ultimate PC enthusiast?",
        description: `Are you the ultimate PC enthusiast? Join our PC building competition and showcase your skills ! With challenges to push your limits, it's time to build the ultimate machine and claim the PC building throne!`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen in online or offline?",
                answer: "Offline",
            },
            {
                question: "Is it a team event?",
                answer: " Yes it is a team event",
            },
            {
                question: "What is the limit on team size? ",
                answer: " Maximum team size is 2",
            },
        ],
        tags: ["PC Building"],
    },

    // Cryptera Coding Contest
    {
        id: "9",
        name: "Cryptera_Coding_Contest",
        title: "Cryptera Coding Contest",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: ["Each team should consist of 2 members"],
        pics: {
            primary:
                "https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz",
            secondary: [],
        },
        dateTime: "March 2, 10.30 am",
        duration: "",
        prizes: {
            gold: "1250",
            silver: "750",
        },
        contact: "6282357680",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Ready to put your coding skills to the test?",
        description: `Ready to put your coding 
    skills to the test? Join our 
    competitive coding 
    contest and showcase 
    your programming 
    prowess. With challenges 
    designed to push you to 
    the limit, it's time to show 
    off your skills and claim 
    the ultimate coding 
    crown 👑!`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
            {
                question: "Is it a team event?",
                answer: " Yes it is a team event",
            },
            {
                question: "What is the limit on team size? ",
                answer: " Maximum team size is 2",
            },
            {
                question: "Is there a penalty for wrong submission? ",
                answer: "Yes.",
            },
            {
                question: "Is it language specific?",
                answer: "No",
            },
        ],
        tags: ["Problem Solving", "C", "C++", "Python"],
    },

    // Prompt Engineering
    {
        id: "10",
        name: "Prompt_Engineering",
        title: "Prompt Engineering",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "All participants should bring their personal laptops with internet connectivity (Mobile Hotspot).",
            "Scoring will be based originality of the prompt and uniqueness of the image generated",
            "Any AI tools can be used",
        ],
        pics: {
            primary:
                "https://www.secondnature.com.au/wp-content/uploads/2019/12/shutterstock_1361250578__1_-1024x576.jpg",
            secondary: [],
        },
        dateTime: "March 2, 9.30 am",
        duration: "45 mins",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9345857774",
        speakers: null,
        color: "var(--fg-g)",
        carddescription:
            "Unleash your creativity with our AI image generation contest!",
        description: `Unleash your creativity with our AI image generation contest! Create stunning and images based on our themes. Join the competition and show us your creative skills.`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "What is prompt engineering?",
                answer:
                    "Prompt engineering involves selecting or creating the right prompts to guide a model towards producing accurate and relevant responses.",
            },
            {
                question: "Which AI tools will be used during the event?",
                answer: `Tools to be used during the event:
                        1. DALL-E: DALL-E is a deep learning models developed by OpenAI to generate digital images from natural language descriptions, called "prompts". DALL-E can generate imagery in multiple styles, including photorealistic imagery, paintings, and emoji. It can "manipulate and rearrange" objects in its images, and can correctly place design elements in novel compositions without explicit instruction.
                        https://openai.com/dall-e-2/
                        
                        2. Midjourney: Midjourney is an artificial intelligence program under the same name that creates images from textual descriptions (similar to DALL-E).
                        https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F
                        
                        3. ChatGPT: ChatGPT (Chat Generative Pre-trained Transformer[2]) is a chatbot developed by OpenAI that can write and debug computer programs, compose music, teleplays, fairy tales, and student essays; answer test questions (sometimes, depending on the test, at a level above the average human test-taker); write poetry and song lyrics. https://openai.com/blog/chatgpt/
                    `,
            },
        ],
        tags: [],
    },

    // Reverse Coding
    {
        id: "11",
        name: "Reverse_Coding",
        title: "Reverse Coding",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Solo Participation",
            "Given the input and output, the logic should be figured out.",
            "The logic can be implemented can in any languages.",
            "Make sure you have a Hackerrank account. If not create one before the contest.",
            "Participants can bring their own laptops.",
            "Plagiarism and any kind of cheating is strictly prohibited.",
        ],
        pics: {
            primary:
                "https://cms-assets.themuse.com/media/lead/01212022-1047259374-coding-classes_scanrail.jpg",
            secondary: [],
        },
        dateTime: "March 1, 12.15 pm",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9629198546",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Figure and configure your magic on Code",
        description: `The input and the corresponding output will be provided to the participants.You need to figure out the logic and code it.
        Figure and configure your magic.`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will I get a certificate?",
                answer: "Yes, E-certificate will be provided",
            },
            {
                question: "What programming languages can be used?",
                answer: "C, C++, Java and Python is preferred.",
            },
            {
                question: "On which platform event will be hosted?",
                answer: "This event will be hosted in hackerrank.",
            },
            {
                question: "Can we participate in team?",
                answer: "Only individual participation is allowed.",
            },
        ],
        tags: ["Problem Solving", "C", "C++", "Python", "Java"],
    },

    // Clash of Code
    {
        id: "12",
        name: "Clash_Of_Code",
        title: "Clash Of Code",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            'Individual Participation Only.',
            'You can use any programming language of given choice (C, C++, Java, Python)',
            'Make sure you have a Hackerrank account. If not create one before the contest',
            'A total of two rounds will be conducted.',
            'Internet and personal computer will be provided and be free to bring your own laptops to this event.'
        ],
        pics: {
            primary:
                "https://img.freepik.com/premium-photo/software-development-concept-coding-programmer-software-engineer-working-laptop-with-javascript-computer-code-virtual-screen-internet-things-iot-digital-technology-generative-ai-illustrator_993599-2487.jpg?w=1060",
            secondary: [
                "https://burst.shopifycdn.com/photos/developer-coding-in-php.jpg?width=1850&format=pjpg&exif=0&iptc=0",
                "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/work-731198_1280_1_1200x768.jpeg?size=690:388"
            ],
        },
        dateTime: "March 2",
        duration: "",
        prizes: {
            gold: "700",
            silver: "300",
        },
        contact: "9944998238",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Fast Minds, Quick Keys, Ignite Coding Excellence",
        description: `Join the contest where speed is key! 
        Compete against others to solve coding challenges rapidly, 
        whether it's unjumbling code, cracking reverse puzzles, 
        or mastering competitive programming. 
        Ready to prove your quick coding skills? Join now and give it your best shot!`,
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will the event be held in an offline or online manner?",
                answer: "Offline",
            },
            {
                question: "Is Clash Of Code like regular reverse coding and competitive programming?",
                answer: "No, the questions provided are simpler and focuses mainly on quick solving.",
            },
            {
                question: "How is the leaderboard determined?",
                answer: "The leaderboard rankings are based on submission times and the number of passed test cases.",
            },
        ],
        tags: ["C", "C++", "Java", "Python"],
    },

    // Non Technical Events

    // Tune up
    {
        id: "13",
        name: "Tune_up",
        title: "Tune up",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Participants are requested to record video with duration of 1-3 minutes.",
            "Both solo and team performance are accepted",
            "Maximum team size is 2",
            "The Music/singing video should be uploaded in the link provided.",
            "Those videos are posted in Cryptera instagram page.",
            "Latest video should be uploaded.",
            "Any kind of plagiarism is strictly prohibited",
            "Winners and runners are decided based on 40%  likes and remaining 60% through panel member decision.",
        ],
        pics: {
            primary:
                "https://img.jakpost.net/c/2020/02/05/2020_02_05_86055_1580904384._large.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "9042776367",
        carddescription:
            "Join our singing and music competition and showcase your talent to the world",
        dateTime: "March 1",
        prizes: {
            gold: "250",
        },
        color: "var(--fg-g)",
        description:
            "Get ready to hit all the right notes and make some sweet music! Join our singing and music competition and showcase your talent to the world. Whether you're a seasoned pro or a fresh face on the scene, this is your chance to shine and take center stage. So tune up your instruments, warm up your vocals, and let's make some unforgettable melodies together!",
        form: "https://docs.google.com/forms/d/e/1FAIpQLScZ3OP1rKPbmSF_6s-Ro--7TnzV4QhN2TIaA9oNiBC0Dvh2bw/viewform",
        type: "non_technical",
        faq: [
            {
                question: "Can we upload only audio files?",
                answer:
                    "No,the video should be uploaded. If needed we can mask your faces while posting it into our Cryptera's instagram page.s",
            },
            {
                question: "Is there any cash price provided?",
                answer:
                    "Yes, there are cash prices for winner and runner ups.E- certificates will also be provided for all the participants.",
            },
        ],
        speakers: [],
        tags: [],
    },

    // Movie quiz
    {
        id: "14",
        name: "Movie_quiz",
        title: "Movie quiz",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "A team can have maximum of three members.",
            "Make sure you have a kahoot account. If not create one",
            "The second round is the final round conducted through images and audio.",
        ],
        pics: {
            primary:
                "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/12/31/Great-Tamil-Movies-Of-The-Decade-Editors-Choice-scaled.jpg?quality=80&zoom=1&ssl=1",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "9944002367",
        dateTime: "March 2, 4.00 pm",
        prizes: {
            gold: "250",
        },
        carddescription:
            "Test your knowledge of cinema Kollywood and compete with your fellow movie buffs",
        color: "var(--fg-g)",
        description:
            "Welcome to the Movie Quiz! This event is a fun-filled opportunity to test your knowledge of cinema Kollywood and compete with your fellow movie buffs.",
        form: form,
        type: "non_technical",
        faq: [],
        speakers: [],
        tags: [],
    },

    // Poster Design
    {
        id: "15",
        name: "Poster_Design",
        title: "Poster Design",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Solo Participation",
            "Theme : Open theme",
            "Timings : 1hr",
            "Any Photo Editing tools can be used.",
            "Participants should bring their laptops with the necessary software installed.",
            "Posters need to be designed on the venue.",
        ],
        pics: {
            primary: "https://cdn.mos.cms.futurecdn.net/6bxva8DmZvNj8kaVrQZZMP.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "7708775625",
        dateTime: "March 2, 11.00 am",
        prizes: {
            gold: "500",
            silver: "250",
        },
        color: "var(--fg-g)",
        carddescription:
            "Create, inspire, and win: the ultimate poster design challenge awaits!",
        description:
            "Calling all designers: showcase your talent and creativity for a chance to win big in our poster design contest!",
        form: form,
        type: "non_technical",
        faq: [],
        speakers: [],
        tags: [],
    },

    // Arts N Emotion
    {
        id: "16",
        name: "Arts_N_Emotion",
        title: "Arts N Emotion",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Theme : Open theme",
            "All kind of artistic styles are welcomed (eg: Pencil sketch, water colour, doodle art, oil painting, etc).",
            "Plagiarism is strictly prohibited.",
            "Maximum number of enteries per person is 3.",
            "Winners and runners will be selected based the number of likes(40%) and jury decision(60%).",
        ],
        pics: {
            primary:
                "https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "9342823006",
        dateTime: "March 1",
        prizes: {
            gold: "300",
        },
        color: "var(--fg-g)",
        carddescription:
            "Drawing is not what one sees, but what one can make others see",
        description:
            "Drawing is not what one sees, but what one can make others see ―  Edgar Degas. The participants are asked to take a clear picture of their drawing/painting and upload them in the respective circulated gform in jpg format.Any misbehaviour or copyright infringement will not be considered.",
        form: "https://docs.google.com/forms/d/e/1FAIpQLScElFOCsEJBTGN8a1FQ_lWjpe-kHz-U8QJuNOaOGBXrhywYSw/viewform",
        type: "non_technical",
        faq: [
            {
                question: "what are the supported formats?",
                answer:
                    "Only jpg format is allowed, png or any other will not be accepted.",
            },
            {
                question: "is there any restriction in the type of drawing?",
                answer: "All types of drawing/painting will be accepted.",
            },
        ],
        speakers: [],
        tags: [],
    },

    // Spill Some Ink
    {
        id: "17",
        name: "Spill_Some_Ink",
        title: "Spill Some Ink",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Solo Participation",
            "Languages allowed : Tamil, English",
            "Upload your file in jpg/jpeg format",
            "Clearly attach your  in the shared Google form",
            "Plagiarism is strictly prohibited",
        ],
        pics: {
            primary:
                "https://cdn.shopify.com/s/files/1/0600/3720/2069/collections/AP18280_TRUE_WRITER_CREATE_HERRINGBONE_FOUNTAIN_PEN_i2_cat.jpg?v=1659619448",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "8668165651",
        dateTime: "March 1",
        prizes: {
            gold: "300",
        },
        color: "var(--fg-g)",
        carddescription: "Where Words Flow and Creativity Takes Shape",
        description:
            "Where Words Flow and Creativity Takes Shape! Unleash your inner wordsmith at Spill Some Ink! Join us for a night of writing, inspiration, and community as we come together to share our stories and explore the power of the written word.",
        form: "https://forms.gle/XARxtZro6VQarX8T8",
        type: "non_technical",
        faq: [
            {
                question: "Can I submit more than one poem/short stories?",
                answer: " Yes, you can submit maximum two poems",
            },
            {
                question: "Is this event only for poem writing?",
                answer: " No, you can write poem or short stories",
            },
            {
                question: "In what form the photos should be uploaded?",
                answer: "jpg",
            },
        ],
        speakers: [],
        tags: [],
    },

    // Tresure hunt
    {
        id: "18",
        name: "Treasure_Hunt",
        title: "Treasure Hunt",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "This event requires teams to have two members each.",
            "Accessing the internet during the event is not allowed, and teams caught doing so will be disqualified.",
            "Interacting or communicating with other teams during the event is not permitted.",
            "Both team members must arrive at the event venue at least 15 minutes before the start time.",
            "The event comprises three rounds: the first round involves locating the map of Ponce de León, the second round requires reaching the youth fountain, and the third round involves finding the Aqua de Vida.",
        ],
        pics: {
            primary:
                "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/07/goonies-treasure-map.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "7806846758",
        dateTime: "March 1",
        prizes: {
            gold: "1500",
        },
        color: "var(--fg-g)",
        carddescription:
            "Solve the clues and follow the trail, find the treasure that will prevail.",
        description:
            "An adventure, a game of the mind, a quest for treasure, that you'll surely find. Follow clues and solve puzzles, step by step, to uncover the prize, that will make you rare.",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSeTlzTsWcmaK89WOtjPhWXLgkFjBo3GFaMccVIM8CAWY7SCiQ/viewform",
        type: "non_technical",
        faq: [],
        speakers: [],
        tags: [],
    },

    // Marvel/DC_Quiz
    {
        id: "19",
        name: "MarvelDC_Quiz",
        title: "Marvel/DC Quiz",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "The questions will be based on the cinematic and comic of both MARVEL and DC Universes.",
            "Marks for each questions might vary based on the difficulty of the questions (Easy/Medium/Hard).",
            "Each wrong response or unecessary press leads to -ve markings",
            "Individual or a team of two members are allowed to attend this event.",
            "Any kind of plagiarism or illegal methods leads to immediate disqualification.",
        ],
        pics: {
            primary:
                "https://images.thedirect.com/media/article_full/dcmarvel_WBAhVL3.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "6282357680",
        dateTime: "March 2, 11.00 am",
        prizes: {
            gold: "250",
        },
        color: "var(--fg-g)",
        carddescription:
            "Test your knowledge and go head-to-head with other fans in our Marvel/DC",
        description:
            "Are you a true superhero fanatic? Test your knowledge and go head-to-head with other fans in our Marvel/DC quiz competition. Get ready for a fun-filled battle of wits and show off your inner superhero!",
        form: form,
        type: "non_technical",
        faq: [
            {
                question: "How is the event conducted ?",
                answer: "Offline mode using projector",
            },
            {
                question: "Any pre-requisites ?",
                answer: "Mobile Phones",
            },
        ],
        speakers: [],
        tags: [],
    },

    // Sales Talk
    {
        id: "20",
        name: "Sales_Talk",
        title: "Sales Talk",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Solo Participation",
            "Only english should be used",
            "Each contestant will have exactly 1 minute to perpare for the pitch.",
        ],
        pics: {
            primary:
                "https://blog-assets.freshworks.com/freshsales-crm/wp-content/uploads/2020/08/31174258/9753_Blog_Banner_Option_02-3.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "9629889319",
        dateTime: "March 1, 11",
        prizes: {
            gold: "300",
            silver: "200",
        },
        color: "var(--fg-g)",
        carddescription: "Showcase your pitching skills",
        description:
            "Sales talk is an execellent opportunity to showcase your pitching skills.",
        form: form,
        type: "non_technical",

        faq: [
            {
                question: "what will be the products given?",
                answer:
                    "The bowl may contain product names like Phone, pencil and Tire and also some bizarre product names  for the second round, Participants should attempt to persuade the judges to buy the products.",
            },
        ],
        speakers: [],
        tags: [],
    },

    // Type Racer
    {
        id: "21",
        name: "Type_Racer",
        title: "Type Racer",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Round 1 : Top contestants who have best WPM in average over 5 racing rounds will be qualified for round 2.",
            "Round 2 : To determine the winner , the personal highest WPM achieved by each contestant accross 2 racing rounds will be compared and the contestant with the highest WPM will be declared as winner.",
        ],
        pics: {
            primary:
                "https://www.cnet.com/a/img/resize/b2ffcfd31dd630e249ee3b06b89124cd47ae67d4/hub/2019/08/20/db2c8f57-f31e-4995-99e3-50f2c7ce49e3/gaming-keyboards-200-01.jpg?auto=webp&fit=crop&height=675&width=1200",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "7812885264",
        dateTime: "March 2, 9.00 am",
        prizes: {
            gold: "300",
        },
        color: "var(--fg-g)",
        carddescription:
            "Join us for an adrenaline-fueled competition that will have your fingers flying across the keyboard!",
        description:
            "Put your typing skills to the test and take on the ultimate type racer challenge.",
        form: form,
        type: "non_technical",
        faq: [
            {
                question: "Which platform we will be tested on ?",
                answer: "Type Racer",
            },
            {
                question: "Is there any cash prize?",
                answer: "Yes",
            },
        ],
        speakers: [],
        tags: [],
    },

    // Snap Quest
    {
        id: "22",
        name: "Snap_Quest",
        title: "SnapQuest",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Selfies and portraits are not allowed.",
            "Photo uploading formats(.jpg or .png)",
        ],
        entry: [],
        pics: {
            primary: "https://assets.entrepreneur.com/content/3x2/2000/20191009140007-GettyImages-1053962188.jpeg?crop=4:3",
            secondary: [],
        },
        dateTime: "March 1",
        duration: "",
        prizes: {
            gold: "250",
        },
        contact: "9488337757",
        color: "var(--fg-g)",
        carddescription: "Best photographs that capture the beauty and creativity.",
        description:
            "We are looking for the best photographs that capture the beauty and creativity of the world around us.Stop the moment from slipping away.",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSd2JYaCJW4kgijFE5W69625vbxRzEdMffcds-v-jCMTA3drHQ/viewform",
        type: "non_technical",
        faq: [],
        tags: ["Fun Event"],
    },

    // Attack on anime
    {
        id: "23",
        name: "Attack_on_Anime",
        title: "Attack on Anime",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Scoring will be based on difficulty of the question in each round and there will not be any -ve markings",
            "All participants should bring Mobile phones with internet connectivity.",
            "Any kind of cheating will lead to immediate disqualification.",
        ],
        entry: [],
        pics: {
            primary: "https://as01.epimg.net/meristation_en/imagenes/2022/02/18/news/1645143158_918055_1645145092_noticia_normal.jpg",
            secondary: [],
        },
        dateTime: "March 1, 12.15 pm",
        duration: "",
        prizes: {
            gold: "250",
        },
        contact: "9363195676",
        color: "var(--fg-g)",
        carddescription:
            "From Chainsaw Man to Sailor Moon, who will come out on top as the ultimate anime trivia master?",
        description: `Are you a true anime fan? Put your otaku knowledge to the test and go head-to-head with other enthusiasts in our anime quiz. From Chainsaw Man to Sailor Moon, who will come out on top as the ultimate anime trivia master?
    The quiz consists of 3 rounds:
    1. Guess the anime name (English or Romanji) from the played OPs and EDs
    2. Arrange the images based on the progression of the episodes
    3. General anime Trivia (Knowledge and facts)`,
        form: form,
        type: "non_technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
        ],
        tags: ["Fun Event", "Anime", "Quiz"],
    },

    // Flagship Events

    // Paper Presentation
    {
        id: "24",
        name: "Paper_Presentation",
        title: "Paper Presentation",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Participation can either be an individual participant or as a team of maximum 4.",
            "Oral presentation for the conference has been allocated 10 minutes of effective presentation time and 2-3 minutes given to Q/A session. Time  limit must not be exceeded.",
            "Abstract should not exceed more than 300 words. Paper should not exceed more than 20 pages.",
            `Paper should be in IEEE format. Avoid using animations and videos in the ppt.`,
            `All the documents must use Times New Roman format.`,
            `Soft copies of the paper must be submitted in the .doc/.pdf format.`,
            "The submitted papers will be screened and selected candidates will be asked to complete their registration by paying the event fee",
        ],
        pics: {
            primary: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_505595136_20001333200092800_406810.jpg",
            secondary: [],
        },
        dateTime: "March 1st and 2nd",
        duration: "",
        prizes: {
            gold: "2500",
        },
        contact: "6369602656",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Are you ready to showcase your ideas on the big stage?",
        description: `Are you ready to showcase your ideas on the big stage? Join us to get an exclusive platform to bring out your unique ideas and insights into cutting edge topics in the field of tech. Oh wait, these ideas should be original by the way !`,
        form: "https://docs.google.com/forms/d/e/1FAIpQLScN_V0-20BQgpvXtz2NvS1siVmJ_lxtPmEA3nCGXDjJnyjRHA/viewform",
        type: "flagship",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes, certificate will be provided",
            },
            {
                question: "Should I bring my own laptop?",
                answer:
                    "No, it isn't necessary since we will provide all necessary devices. ",
            },
            {
                question: "What is the maximum team size?",
                answer: "The maximum team size is 4.",
            },
            {
                question: "What are the topics I can present on ?",
                answer:
                    "Participants can choose any topic of your choice related to the fields we've mentioned. Check out the registration form for the list of fields. ",
            },
        ],
        tags: ["presentation"],
    },

    // Capture The Flag
    // {
    //     id: "25",
    //     name: "CTF",
    //     title: "Capture The Flag",
    //     eligibility: "Anyone can join",
    //     completed: false,
    //     results: null,
    //     rules: [
    //         "The competition runs from ... IST — ... IST ( 6 hours)",
    //         "In order to claim prizes, problem writeups are required.",
    //         "Time will act as a tie-breaker between teams with the same number of points.",
    //         "Flags format is CRYPCTF{flag+here}, unless otherwise specified.",
    //         "You can't play on two teams at once. Team size limit is 5 per team.",
    //         "Being caught cheating during a game is grounds for an instant disqualification.",
    //         "Organizers reserve rights to make decisions which are final.",
    //         "Let's all have fun and play together!",
    //     ],
    //     pics: {
    //         primary: "https://www.simplilearn.com/ice9/free_resources_article_thumb/top_5_valuable_ethical_hacking_tools.jpg",
    //         secondary: [],
    //     },
    //     dateTime: "March 1, 6.00 pm",
    //     duration: "",
    //     prizes: {
    //         gold: "3000",
    //         silver: "2000",
    //     },
    //     contact: "9442523172",
    //     speakers: null,
    //     color: "var(--fg-g)",
    //     carddescription: "A Jeopardy style CTF",
    //     description: `A Jeopardy style CTF`,
    //     form: "",
    //     type: "flagship",
    //     faq: [
    //         {
    //             question: "Will it happen online or offline?",
    //             answer: "Online",
    //         },
    //         {
    //             question: "Is there is a team size limit",
    //             answer: "Yes. Maximum team size is 5.",
    //         },
    //     ],
    //     tags: ["Problem Solving", "C", "C++", "Python"],
    // },

    // Freefire
    {
        id: "26",
        name: "Freefire",
        title: "Freefire",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Game Mode : Clash Squad",
            "Moderators will be spectating the match, and any inconvenience should be brought to the Moderators.",
            "The moderator will share the room id and password for every match in the whatsapp group.",
            "Freefire room will be created and the room's name and password will be shared before the match start.",
        ],
        pics: {
            primary:
                "https://akm-img-a-in.tosshub.com/aajtak/images/story/202202/how_to_download_free_fire-sixteen_nine.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        amt: "150",
        contact: "9344860242",
        dateTime: "March 1, 7.00 pm",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        color: "var(--fg-g)",
        carddescription:
            "Get ready to battle it out and be the last one standing in the ultimate Free Fire showdown!",
        description:
            "Join the hottest battleground with Free Fire! Experience heart-pumping action and be the last one standing.",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSdh89b7jTQENvRUYblX9sP2tV4LJ-f1tl1B_pI0yNPmkutqVA/viewform",
        type: "flagship",
        faq: [
            {
                question: "Is character skill allowed?",
                answer: "NO",
            },
            {
                question: " Do we have limited ammo?",
                answer: "NO",
            },
            {
                question: " Is Revive allowed? ",
                answer: "YES",
            },
            {
                question: "Can we climb on roof top? ",
                answer: "YES",
            },
            {
                question: " Can we use Grenade?",
                answer: "NO",
            },
        ],
        speakers: [],
        tags: [],
    },

    // Hackathon
    {
        id: "27",
        name: "Hackathon1",
        title: "Hackathon",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "A team should consist of 4 members",
            "the teams should submit the topic on 7th March",
            "THEME:Sustainable Development",
            "ENTRY FEE PER TEAM:250",
            "The final solution must be demonstrated through presentation and implementation of the project",
            "Panel members decision is final",
            "Simulation can be done through any software",
            "Students should upload their PPT and other necessary files on 1st March 12pm",
        ],
        pics: {
            primary:
                "https://images.squarespace-cdn.com/content/v1/5e6542d2ae16460bb741a9eb/1603318636443-A846ACUKNYUBA0RPLJ94/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "9952792500",
        dateTime: "March 2, 2.00 pm",
        prizes: {
            gold: "2000",
            silver: "1000",
        },
        color: "var(--fg-g)",
        carddescription: "You must do the thing you think you cannot do",
        description:
            "Hackathon is a national-level 48-hour long intensive, brainstorming event that encourages young talents to generate solutions to real-world problems. Participants can work in teams of 4 members and use innovative ideation practices to brainstorm and work with specialized tools and come up with the most suitable and feasible one. The event aims to encourage students to find a solution and provide a kickstart to implement them in the future.",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSeSqEDX5Lyp7maO52THyN9UYYbZl4ARDAV0wdGwYkvYHs842A/viewform",
        type: "flagship",
        faq: [],
        speakers: [],
        tags: [],
        status: 1
    },

    // Valorant
    {
        id: "28",
        name: "Valorant",
        title: "Valorant",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Team size: 5+2 ( 5 Main players, 2 Substitutes )",
            "If the team fails to show up, the opponents automatically get a walk over",
        ],
        pics: {
            primary:
                "https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        amt: "300",
        contact: "9677666944",
        dateTime: "March 1, 11, 8.00 pm",
        prizes: {
            gold: "2000",
            silver: "1000",
        },
        color: "var(--fg-g)",
        carddescription:
            "Rise to the challenge and take on the competition in a high-stakes battle for supremacy",
        description:
            "Rise to the challenge and take on the competition in a high-stakes battle for supremacy. The ultimate test of skill and strategy awaits in the epic Valorant tournament.",
        form: "https://docs.google.com/forms/d/e/1FAIpQLScFDqxw1lkE99beZkDLID8AB4LSk5GPSD4st3revyHCl6nZ3A/viewform",
        type: "flagship",
        faq: [],
        speakers: [],
        tags: [],
    },

    // Chess
    {
        id: "29",
        name: "Chess",
        title: "Chess",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Matches are conducted in online mode.",
            `Matches are conducted through the platform “lichess.org”.`,
            "Timing for each match is 5 minutes.",
            "Players should have proper internet connection during the match.",
            "Players are requested to join half an hour prior to the match timing.",
            "Late entries are not allowed.",
            "Panel members decision will be final in case of any disputes.",
            "Cheating or malpractice will lead to immediate disqualification.",
            "Cash prize will be awarded for the winner and runner.",
        ],
        entry: [],
        pics: {
            primary: chess,
            secondary: [],
        },
        dateTime: "March 1, 6.00 pm",
        duration: "",
        prizes: {
            gold: "500",
            silver: "250",
        },
        contact: "9043148825",
        amt: "50",
        team: "no",
        color: "var(--fg-g)",
        carddescription:
            "Enter the world of strategy and intellect with our exciting chess tournament!",
        description:
            "Enter the world of strategy and intellect with our exciting chess tournament!",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSd_XqKFigNtReNdvVejryuzeIYhhnuc2A44sITUhoFRK1gevQ/viewform",
        type: "flagship",
        faq: [],
        tags: ["Fun Event", "Chess"],
    },

    // BGMI
    {
        id: "30",
        name: "BGMI",
        title: "BGMI",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Emulators not allowed",
            "3 maps will be played",
            "Based on points winners runners will be decided",
            "New player will not allowed.",
            "Team should present before 10 min match start",
            "Moderators will be spectating the match, and any inconvenience should be brought to the Moderators",
            "The moderator will share the room id and password for every match in the whatsapp group"
        ],
        entry: [],
        pics: {
            primary: "https://wallpapercave.com/wp/wp9273900.jpg",
            secondary: [],
        },
        dateTime: "March 1, 6.00 pm",
        duration: "",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9043148825",
        amt: "150",
        color: "var(--fg-g)",
        carddescription:
            "Dive into the intense battlegrounds of BGMI, where strategy, survival, and skill converge.",
        description:
            "Dive into the intense battlegrounds of BGMI, where strategy, survival, and skill converge. Join the adrenaline-pumping action and showcase your gaming prowess in this thrilling battle royale experience!",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSeGyD1TTLJWJKi-YSEWeibkgB2d97A8qaDqybz3Ey8wG-86Ow/viewform",
        type: "flagship",
        faq: [],
        tags: [],
    },

    // Workshops and Webinars

    {
        id: "31",
        status: 1,
        rules: [
            "E-certificate will be given",
            "Certificate will be given for the registered candidates",
            "Disocunts will be given for referrals",
            "For further details call :9962623236",
        ],
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will it be a one day workshop or two days?",
                answer: "One day,Time is mentioned above",
            },
            {
                question: "Can I get any discount?",
                answer: "Yeah sure,contact us for further details",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
        ],
        name: "Workshop1",
        title: "Workshop on Blockchain",
        dateTime: "Mar 11th, 1.00 pm to 4.00 pm",
        carddescription: "Unlock the Power of Web 3",
        description:
            "Unlock the Power of Web 3.0: Explore the world of blockchain technology and its impact on our digital lives. Learn about the fundamentals of blockchain and its various use cases in transforming industries today.Check out the form for more details on registration fees.",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary:
                "https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/bitcoin-cryptocurrency-vault-safelock_SOIN20003_905168316_is_1560x880.jpg",
        },
        contact: "6382978347",
        tags: [],
        entry: [
            {
                type: "Single Workshop- Rs.150/- ",
                amt: "",
            },
            {
                type:
                    "Combo A - Two Workshop- Rs.250/-",
                amt: "",
            },
            {
                type: "Combo B - Three Workshop- Rs.350/-",
                amt: "",
            },
        ],
        form: "https://forms.gle/5GWSLDupUemUbShs5",
        speakerinfo:
            "Pyashu Satapathy is a Developer and Designer by skills ( Won at world's largest Ethereum Hackathon - ETHIndia'22 ) and loves to engage with technical communities out of passion, and have scaled developer communities in India and Globally.",
        key: 1,
        speakers: [
            {
                name: "Prayashu Satapathy",
                bio: "Have brought revolution in working of Technical Clubs in my college with CodeChef SRM RMP Club , build the Hackathon and Hustle culture among the students to helping them with their career journey",
            },
        ],
        color: "red",
    },

    {
        id: "32",
        status: 1,
        rules: [
            "E-certificate will be given",
            "Certificate will be given for the registered candidates",
            "Disocunts will be given for referrals",
            "For further details call :9962623236",
        ],
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will it be a one day workshop or two days?",
                answer: "One day,Time is mentioned above",
            },
            {
                question: "Can I get any discount?",
                answer: "Yeah sure,contact us for further details",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
        ],
        name: "Workshop2",
        title: "Workshop on Startup Journey and Product Development",
        dateTime: "Mar 11th, 10.00 am to 12.00 pm",
        carddescription: "Gain valuable insights into market research",
        description:
            "Learn about the key steps involved in taking your idea from conception to launch. Gain valuable insights into market research, product design, and go-to-market strategies.Check out the form for more details on registration fees.",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary:
                "https://m.economictimes.com/thumb/msid-93829401,width-1200,height-900,resizemode-4,imgsize-624482/learn-with-etmarkets-beginners-guide-to-fo-trading.jpg",
        },
        contact: "6382978347",
        tags: [],
        entry: [
            {
                type: "Single Workshop- Rs.150/- ",
                amt: "",
            },
            {
                type:
                    "Combo A - Two Workshop- Rs.250/-",
                amt: "",
            },
            {
                type: "Combo B - Three Workshop- Rs.350/-",
                amt: "",
            },
        ],
        form: "https://forms.gle/5GWSLDupUemUbShs5",
        speakerinfo:
            "Ramanathan Alagappan Passionate Full stack developer and skilled in MERN/MEAN Stack developement. Experienced in web development, all layers, from database to services to user interfaces.",
        key: 1,
        speakers: [
            {
                name: "Ramanathan Alagappan",
                bio: "Close to 9 years of experience as a Full stack developer in Software Industry and 2 years of experience as a Freelance developer and has good knowledge in Test Driven Development.",
            },
        ],
        color: "red",
    },

    {
        id: "33",
        status: 1,
        rules: [
            "E-certificate will be given",
            "Certificate will be given for the registered candidates",
            "Disocunts will be given for referrals",
            "For further details call :9962623236",
        ],
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will it be a one day workshop or two days?",
                answer: "One day,Time is mentioned above",
            },
            {
                question: "Can I get any discount?",
                answer: "Yeah sure,contact us for further details",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
        ],
        name: "Workshop3",
        title: "Workshop on Startup Journey and Product Development",
        dateTime: "Mar 10th, 2.00 pm to 4.00 pm",
        carddescription: "Gain valuable insights on Startups of Today",
        description:
            "Join our workshop on Startups of Today: Developing a Viable Product and gain insights on creating successful products that meet market needs. Our experienced speakersand interactive sessions will equip you with the knowledgeand tools needed to turn your startup idea into a reality. Check out the form for more details on registration fees.",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary:
                "https://sergiocaredda.eu/wp-content/uploads/2020/01/workshop-facilitation.jpg",
        },
        contact: "6382978347",
        tags: [],
        entry: [
            {
                type: "Single Workshop- Rs.150/- ",
                amt: "",
            },
            {
                type:
                    "Combo A - Two Workshop- Rs.250/-",
                amt: "",
            },
            {
                type: "Combo B - Three Workshop- Rs.350/-",
                amt: "",
            },
        ],
        form: "https://forms.gle/5GWSLDupUemUbShs5",
        speakerinfo:
            "Mohanraj Siddhuraj is an experienced Software Test Engineer with a demonstrated history of working in the information technology and services industry.",
        key: 1,
        speakers: [
            {
                name: "Mohanraj Siddhuraj",
                bio: "Skilled in Agile Methodologies, Linux, Test Management, Automation and Manual Testing and a strong quality assurance professional.",
            },
        ],
        color: "red",
    },

    {
        id: "34",
        status: 1,
        rules: [
            "E-certificate will be given",
            "Certificate will be given for the registered candidates",
            "Disocunts will be given for referrals",
            "For further details call :9962623236",
        ],
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will it be a one day workshop or two days?",
                answer: "One day,Time is mentioned above",
            },
            {
                question: "Can I get any discount?",
                answer: "Yeah sure,contact us for further details",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
        ],
        name: "Webinar1",
        title: "Webinar on Data Analytics",
        dateTime: "Mar 11th, 10.00 am to 12.00 pm",
        carddescription: "Unlock the power of data",
        description:
            "Unlock the power of data with our upcoming workshop! Join us to learn how to make informed decisions and gain valuable insights from raw data. Don't miss out on this opportunity to enhance your analytical skills. Register now! Check out the form for more details on registration fees.",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary:
                "https://bernardmarr.com/wp-content/uploads/2022/11/The-Top-5-Data-Science-And-Analytics-Trends-In-2023.jpg",
        },
        contact: "6382978347",
        tags: [],
        entry: [
            {
                type: "Single webinar- Rs.200/- ",
                amt: "",
            },
            {
                type:
                    "Combo A - Two Webinars - Rs.300/-",
                amt: "",
            },
            {
                type: "Combo B - Three Webinars - Rs.400/-",
                amt: "",
            },
        ],
        form: "https://forms.gle/MRdusV5a6QX5QRvu5",
        speakerinfo:
            "Yasmin Basheer Ahmed is a highly experienced data analyst who's been in the field for more than 5 years.",
        key: 1,
        speakers: [
            {
                name: "Yasmin Basheer Ahmed",
                bio: "Skilled in using Google Analytics and Database Management Systems.",
            },
        ],
        color: "red",
    },

    {
        id: "35",
        status: 1,
        rules: [
            "E-certificate will be given",
            "Certificate will be given for the registered candidates",
            "Disocunts will be given for referrals",
            "For further details call :9962623236",
        ],
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will it be a one day workshop or two days?",
                answer: "One day,Time is mentioned above",
            },
            {
                question: "Can I get any discount?",
                answer: "Yeah sure,contact us for further details",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
        ],
        name: "Webinar2",
        title: "Webinar on DevOps and GitHub Actions",
        dateTime: "Mar 12th, 2.00 pm to 4.00 pm",
        carddescription:
            "An immersive experience that will empower your team's software development transactions",
        description:
            "An immersive experience that will empower your team's software development transactions.With a focus on automation and optimization, we'll guide you through the best practices. To ensure your workflows are efficient and your code is bug-free and errorless. Check out the form for more details on registration fees.",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary:
                "https://miro.medium.com/max/1400/1*JLYlSLSK8-AZo8gt9UdYqA.jpeg",
        },
        contact: "6382978347",
        tags: [],
        entry: [
            {
                type: "Single webinar- Rs.200/- ",
                amt: "",
            },
            {
                type:
                    "Combo A - Two Webinars - Rs.300/-",
                amt: "",
            },
            {
                type: "Combo B - Three Webinars - Rs.400/-",
                amt: "",
            },
        ],
        form: "https://forms.gle/MRdusV5a6QX5QRvu5",
        speakerinfo:
            "Harshvardhan is the lead of Student Innovation Network (SIN) & Dhando india and Maheshwaran is a devops enthusiast / Web Developer who spends time building useful products, a designer, front-end web developer and Community contributor.",
        key: 1,
        speakers: [
            {
                name: "Harshvardhan",
                bio: "Microsoft certified Microsoft Azure AI ML expert.",

                name: "Maheshwaran",
                bio: "Proficient in DevOps and Web Development.",
            },
        ],
        color: "red",
    },

    {
        id: "36",
        status: 1,
        rules: [
            "E-certificate will be given",
            "Certificate will be given for the registered candidates",
            "Disocunts will be given for referrals",
            "For further details call :9962623236",
        ],
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "Will it be a one day workshop or two days?",
                answer: "One day,Time is mentioned above",
            },
            {
                question: "Can I get any discount?",
                answer: "Yeah sure,contact us for further details",
            },
            {
                question: "Can I get certificate?",
                answer: "Yes,certificate will be provided",
            },
        ],
        name: "Webinar3",
        title: "Webinar on Techniques of Share Trading and Investing",
        dateTime: "Mar 12th, 11.00 am to 12.45 pm",
        carddescription: "Unlock the power of data with our upcoming workshop",
        description:
            "Unlock the power of data with our upcoming workshop! Join us to learn how to make informed decisions and gain valuable insights from raw data. Don't miss out on this opportunity to enhance your analytical skills. Register now! Check out the form for more details on registration fees.",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary:
                "https://iq-study.com/wp-content/uploads/2021/01/blog_price_pattern.jpg",
        },
        contact: "6382978347",
        tags: [],
        entry: [
            {
                type: "Single webinar- Rs.200/- ",
                amt: "",
            },
            {
                type:
                    "Combo A - Two Webinars - Rs.300/-",
                amt: "",
            },
            {
                type: "Combo B - Three Webinars - Rs.400/-",
                amt: "",
            },
        ],
        form: "https://forms.gle/MRdusV5a6QX5QRvu5",
        speakerinfo:
            "K.C.A. Naraayan, Founder & Qualified Personal Finance Professional of WealthSpikes.",
        key: 1,
        speakers: [
            {
                name: "K.C.A. Naraayan",
                bio: "Seasoned Share trader and investor in Stock Market.",
            },
        ],
        color: "red",
    },

    ///////////////////////////////////////////////////////
];
