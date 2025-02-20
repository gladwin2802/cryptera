import chess from "../Components/Screens/assets/chess.jpg";
// import blindCode from "../Assets/event/blindCode.jpg"
import jumbledCode from "../Assets/event/jumbledCode.jpg";
import oxdebug from "../Assets/event/0xdebug.jpg";
import carrom from "../Assets/event/carrom.jpg";
import workshop1 from "../Assets/event/workshop1.jpg";
import prompt from "../Assets/event/prompteng.jpeg";
import { duration } from "@mui/material";

const form = "https://forms.gle/vLSyf3tomF4xVjKAA"

export default [
    ///////////////////////////////////////////////////////

    // Tecnical events
    // Cryptera Coding Contest
    {
        id: "9",
        name: "Cryptera_Coding_Contest",
        title: "Cryptera Coding Contest",
        status: 1,
        // venue: "L103, L210, L303, L308, L315",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "The team can consist of either 1 or 2 members only.",
            "The designated platform for conducting the contest is HackerRank.",
            "Participants must have a registered account on HackerRank. If not, it is mandatory to create one.",
            "The event will run for a duration of 2 hours.",
            "Computers will be provided for the contest. In the event of technical issues, participants may be allowed to use their laptops, subject to approval. Otherwise, personal laptops will not be permitted."
        ],
        pics: {
            primary:
                "https://media.licdn.com/dms/image/v2/D5612AQGGQByZuoyFgg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1728788803479?e=2147483647&v=beta&t=oXdZs38msHZsBQU_osQG6CNNkC5tAZLOu-CCdS-Hp84",
                // "https://static.vecteezy.com/system/resources/previews/022/966/113/non_2x/binary-code-digital-cryptocurrency-background-generative-ai-photo.jpg",
                // "https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz",
            secondary: [],
        },
        dateTime: "February 22,10:30 am",
        duration: "2 hrs",
        mode:"offline",
        prizes: {
            gold: "1500",
            silver: "1000",
        },
        contact: "9361673354",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Ready to put your coding skills to the test?",
        description: "Are you ready to showcase your programming talent? Are you ready to showcase your programming talent? Enter our competitive coding contest and display your skills. Solve challenging problems, push your abilities to new heights, and claim the prestigious coding crown!our competitive coding contest and display your skills. Solve challenging problems, push your abilities to new heights, and claim the prestigious coding crown👑!",
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
        tags: ["Problem Solving", "C", "C++", "Python","Java","JavaScript"],
    },

    // 0xedebug
    {
        id: "1",
        name: "0xdebug",
        title: "0xdebug",
        status: 1,
        // venue: "L103, L210, L303, L308, L315",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "The programming language given will be C ,C++, Python and Java.",
            "A total of 2 rounds will be conducted.",
            "Round 1 : Code snippets with multiple-choice questions and logical reasoning questions.Participants will be shortlisted based on the marks awarded.",
            "Round 2 : Code snippets to debug in the above languages.",
            "Marks for each questions will be provided based on the difficulty and there will not be any -ve markings ",
            "Any kind of plagiarism will lead to immediate disqualification.",
            "Internet and personal computer will be provided and be free to bring you own laptops to this event.",
            "Use of compilers and debugging tools is prohibited.",
            "The winner will be decided based on the marks awarded for correctly answered questions. In case of a tie, the winner will be decided by the time taken to answer.",
        ],
        pics: {
            primary: oxdebug,
            // "https://www.zdnet.com/a/img/resize/757fc75271d8f21e8d54e61b5d0dee0a3d522971/2021/06/30/0286f74b-453c-4472-b5c1-321b18475c78/technical-visual-studio-code-extension.jpg?auto=webp&fit=crop&height=1200&width=1200",
            secondary: [],
        },
        dateTime: "February 22,09:00 am",
        duration: "1.5 hrs",
        mode:"offline",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9361673354",
        color: "var(--fg-g)",
        carddescription:
            "Are you the next Sherlock? Unleash your coding prowess and solve the mystery",
        description: "Think you've got what it takes to be a debugging pro? Join our exciting code event and put your skills to the test! With bugs and glitches waiting to be fixed, it’s your chance to shine and claim the title of ultimate debugging champion! Don’t miss out—sign up now and let the debugging showdown begin!",
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
        status: 1,
        // venue: "IT442, IT443, L103",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "You will be given a simple design to recreate using HTML and CSS within the stipulated time.",
            "The number of rounds will depend on the number of participants, with eliminations based on speed of completion and accuracy of the recreated design.",
            "Personal computers will be provided, and also you may bring your own laptops to the event.",
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
        dateTime: "February 21,09:00 am",
        duration: "1.5 hrs",
        mode:"offline",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9361673354",
        color: "var(--fg-g)",
        carddescription:
            "Unleash your creativity and compete to be the CSS champion in a battle of styles!",
        description:
            "Ready to unleash your CSS skills? Join our epic CSS Battle Contest and dive into creative challenges that will push your design limits! Compete against fellow wizards for the ultimate title of CSS Champion! Don’t miss out—sign up now and let the battle begin!",
        form: form,
        type: "technical",
        faq: [
            {
                question: "What are the languages need to be used?",
                answer: " HTML and CSS",
            },
        ],
        tags: ["HTML","CSS"],
    },

    // Tech Feud
    {
        id: "3",
        name: "Tech_Feud",
        title: "Tech Feud",
        // venue: "IT442, IT443",
        status: 1,
        eligibility: "College Students",
        completed: false,
        results: null,
        rules: [
            "Each team must have exactly 2 members.",
            "The event consists of 2 rounds.",
            "Shortlisted teams from round 1 will be eligible for the final round.",
            "Round 1 : CODE SHARING - Two Coding Questions will be given(1 easy and 1 medium) for a total of 45 minutes. Initially, one member from each team is allowed to solve. After 15 minutes swapping option is available  and can be exercised if preferred.",
            "Round 2 : RAPID FIRE -  Buzzer Round:Quiz questions based on DSA, C Programming, OOPS Concepts, DBMS, Computer Networks, Operating System. The team that rings the buzzer first gets to answer.",
        ],
        pics: {
            primary:
                "https://www.billboard.com/wp-content/uploads/2022/07/salt-n-pepa-celebrity-family-feud-2022-billboard-1548.png",
            secondary: [],
        },
        dateTime: "February 22,02:00 pm",
        duration: "1.5 hrs",
        mode:"offline",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9361673354",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Ready to flex some of that team skills?",
        description: "Prepare for an epic tech showdown like never before! From algorithms to operating systems, test your knowledge. Teams of two will compete to claim the title of tech champions!!",
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
        tags: ["Problem Solving", "C", "C++", "Python","Java"],
    },


    // Code in chaos
    {
        id: "4",
        name: "Code_in_Chaos",
        title: "Code in Chaos",
        status: 1,
        // venue: "IT442, IT443, L103, L210, IOT",
        eligibility: "College Students",
        completed: false,
        results: null,
        rules: [
             "Each team must have exactly 2 members.",
             "At least one of the participants in the team must possess a Hackerrank account.",
             "Data Structures concepts and coding prowess will be tested.",
             "Round 1 is for shortlisting teams for Round 2.",
             "Round 1: Decode the Logic - Analyze a buggy code snippet and collaborate as a team to fix it. Only top teams advance.",
             "Round 2: Blind Code Relay - One codes blind, while the other continues without communication. Switch places and take turns to complete the solution.",
        ],
        pics: {
            primary:"https://img.freepik.com/premium-photo/composite-image-angry-hipster-businessman-holding-his-hairs_1134-35309.jpg?uid=R27846696&ga=GA1.1.388313583.1706188067&semt=ais_hybrid",
            secondary: [],
        },
        dateTime: "February 21,02:45 pm",
        duration: "2 hrs",
        mode:"offline",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9361673354",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Crack the chaos,claim the glory",
        description:"A high-stakes challenge where teamwork and adaptability shine. With unexpected twists, success depends on trust, communication, and quick thinking. Only the most coordinated teams will emerge victorious",
        form: form,
        type: "technical",
        faq: [
        ],
        tags: ["Problem Solving", "C", "C++", "Python","Java"],
    },

    // Jumbled Code
    {
        id: "5",
        name: "Jumbled_Code",
        title: "Jumbled Code",
        status: 1,
        // venue: "L103, L210, L303, L310, L315, IOT",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        // rounds: [
        //     "Round 1: Quiz Round Participants are required to have an account on Quixizz. This round consists of 25 questions, each presenting jumbled code. Participants must select the  option that contains the correct rearranged sequence within a minute. 30 participants will be shortlisted to advance to the second round.",
        //     "Round 2: Hackerrank Round Participants are required to have an account on Hackerrank. This round consists of three questions where participants are provided with code where the lines are jumbled. Participants must rearrange the lines and execute the code. The winner and runner-up will be selected from the top 30 participants."
        // ],
        rules: [
            "Round 1: Quiz - The code will be provided in a jumbled manner.",
            "You will be given four options. Choose the correct one to make the code execute properly.",
            "The quiz will consist of 20 questions, with 1 minute allocated for each question.",
            "Round 2: Coding - This round will involve solving 2 coding questions within 40 minutes.",
            "You can use any programming language of your choice to solve the problems.",
            "Ensure you have an account on the Test Portal (HackerRank). If you don't have one, create an account before the competition.",
            "Plagiarism and any kind of cheating are strictly prohibited.",
        ],
        pics: {
            primary: jumbledCode,
            secondary: [],
        },
        dateTime: "February 21,09:45 am",
        duration: "1.5 hrs",
        mode:"offline",
        prizes: {
            gold: "800",
            silver: "450",
        },
        contact: "9361673354",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Connect the dots,complete the logic",
        description:"Decode the mystery and unleash your inner genius! Navigate two intense rounds—crack timed questions and piece together scrambled logic. With no shortcuts or help, it’s a battle of wit and skill. Will you rise as the ultimate solver?",
        form: form,
        type: "technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
            {
                question: "What programming language the jumbled code will be?",
                answer: "It will be a pseudo code.",
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
        tags: [ "Pseudo code"],
    },

    // UI Design Contest
    {
        id: "6",
        name: "UI_Design_Contest",
        title: "UI Design Contest",
        status: 1,
        // venue: "IT442, IT443",
        eligibility: "Anyone can join",
        // completed: false,
        results: null,
        rules: [
            "Participation in this event is limited to solo contestants, and Figma is the sole platform allowed for use.",
            "The UI design has to be for a mobile device",
            "A minimum of 4 screens must be designed",
            "The UI must fit the provided brief",
            "Submission must include - User flow, UI screens, a brief description of each screen and justifications for design decisions made",
            "Participants can bring their own laptops.",
            "No prototyping is required.",
        ],
        pics: {
            primary:
                "https://s3images.coroflot.com/user_files/individual_files/large_1020744_aontiqjc9mm3_aggdhrcsmvnh.png",
            secondary: [],
        },
        dateTime: "February 21,02:00 pm",
        duration: "1.5 hrs",
        mode:"offline",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9361673354",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Good Design, when done well, should be invisible",
        description:"Design your way to victory in our thrilling UI/UX Design Contest! With creativity and innovation leading the charge, it’s your chance to showcase your skills and craft a user experience that truly stands out. Don’t miss out—join the competition and let your design brilliance shine!",
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
        status: 1,
        // venue: "L103, L210, L303, L308, L315",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Individual participation only is allowed in the event.",
             "Plagiarism and any form of cheating are strictly prohibited during the event.",
             "Participants can bring their own laptops to the event.",
             "The questions will cover programming languages C, C++, Python, and Java.",
            "The questions will vary in difficulty.",
             "The questions will be in the form of multiple-choice questions (MCQs).",
             "The event will be conducted on quizizz platform.",
             "Certificates will be provided to all participants after the event.",
             "The event will run for a duration of 1 hour.",
            
        ],
        pics: {
            primary:
                "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=690:388",
            secondary: [],
        },
        dateTime: "February 22,02:00 pm",
        duration: "1.5 hrs",
        mode:"offline",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9361673354",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Bridge the blanks connect the solution",
        description:"Step into the Missing Code challenge and push your programming skills to the edge! With crucial code snippets missing, it’s your time to shine and complete the puzzle. Test your knowledge, find the missing pieces, and become the ultimate code champion!",
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
                answer: "choose the correct missing code",
            },
            {
                question: "The questions are based on which programming languages?",
                answer: "Python,C,C++,Java",
            },
        ],
        tags: ["Problem Solving", "C", "C++", "Python", "Java"],
    },
    
    // Prompt Engineering
    {
        id: "10",
        name: "Prompt_Engineering",
        title: "Prompt Engineering",
        status: 1,
        // venue: "IT442, IT443",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        // rounds: [
        //     "Round 1 - Image Replication:",
        //     `Participants will be provided with a reference image.
        //     Using any one of the given image generation platform (Gemini/Copilot/Designer.microsoft/Artbreeder), participants must create an image that closely resembles the provided reference.
        //     Creativity is encouraged in terms of interpretation and execution, but the final image should closely match the reference in terms of content, composition, and style.
        //     Time limit and submission guidelines will be provided before the start of the round.`,
        //     "Round 1 Submission Link - https://forms.gle/Dtkpc6FN9ypxizGx5",
        //     "Round 2 - Imaginative Creation",
        //     `Participants will be given a theme or a scenario.
        //     Using the above said image generation platform, participants must create an original image inspired by the given theme.
        //     Creativity and imagination are key in this round. Participants are encouraged to explore new ideas, concepts, and visual styles.
        //     The final image should be visually appealing and demonstrate the participant's ability to think creatively and outside the box.
        //     Time limit and submission guidelines will be provided before the start of the round.`,
        //     "Round 2 Submission Link - https://forms.gle/zVjyAzTsZkjt8v8J9"
        // ],
        rules: [
            "Participants must adhere to the given time limits for each round.",
            "All submissions must be original works created by the participants themselves.",
            "Judges' decisions are final and binding.",
            "Any violation of the rules may result in disqualification.",
            "Have fun and unleash your creativity!",
            "Platforms that can be used:Gemini, Copilot, Designer.microsoft,  Artbreeder.",
        ],
        pics: {
            primary: prompt,
            secondary: [],
        },
        dateTime: "February 21,11:30 am",
        duration: "1.5 hrs",
        mode:"offline",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9361673354",
        speakers: null,
        color: "var(--fg-g)",
        carddescription:
            "Unleash your creativity with our AI image generation contest!",
        description:"Unleash your creativity in our Image Generation Contest! Dive into a world of imagination and craft stunning images based on our exciting themes. Join the competition and showcase your artistic flair—let’s see what you can create! Don’t miss out—sign up now and let your creativity shine!",
        form: form,
        type: "technical",
        faq: [
            {
                question: "What is prompt engineering?",
                answer:
                    "Prompt engineering involves selecting or creating the right prompts to guide a model towards producing accurate and relevant responses.",
            },
            // {
            //     question: "Which AI tools will be used during the event?",
            //     answer: `Tools to be used during the event:
            //             1. DALL-E: DALL-E is a deep learning models developed by OpenAI to generate digital images from natural language descriptions, called "prompts". DALL-E can generate imagery in multiple styles, including photorealistic imagery, paintings, and emoji. It can "manipulate and rearrange" objects in its images, and can correctly place design elements in novel compositions without explicit instruction.
            //             https://openai.com/dall-e-2/

            //             2. Midjourney: Midjourney is an artificial intelligence program under the same name that creates images from textual descriptions (similar to DALL-E).
            //             https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F

            //             3. ChatGPT: ChatGPT (Chat Generative Pre-trained Transformer[2]) is a chatbot developed by OpenAI that can write and debug computer programs, compose music, teleplays, fairy tales, and student essays; answer test questions (sometimes, depending on the test, at a level above the average human test-taker); write poetry and song lyrics. https://openai.com/blog/chatgpt/
            //         `,
            // },
        ],
        tags: [],
    },

    // Reverse Coding
    {
        id: "11",
        name: "Reverse_Coding",
        title: "Reverse Coding",
        status: 1,
        // venue: "L103, L210, L303, L308, L315",
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
                "https://pythonweb.org/wp-content/uploads/2021/04/Programming-HD-Wallpapers-Python-And-Other-Coding.jpg",
            secondary: [],
        },
        dateTime: "February 22,12:00 pm",
        duration: "1.5 hrs",
        mode:"offline",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "9361673354",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Figure and configure your magic on Code",
        description: "Think you have what it takes to crack the code? Step into our Reverse Coding Challenge and prove your mettle! Solve mind-bending puzzles, decode logic from outputs, and push your creativity to the limit. Unleash your coding prowess and claim the title of Reverse Coding Champion!",
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

    // Logic Unchained
    {
        id: "12",
        name: "Logic_Unchained",
        title: "Logic Unchained",
        status: 1,
        // venue: "L303, L308, IT443",
        eligibility: "College Students",
        completed: false,
        results: null,
        rules: [
            "Individual Participation Only.",
            "Any programming language of choice can be used (C, C++, Java, Python).",
            "An active Hackerrank account is required before the contest.",
            "A total of 2 rounds will be conducted.",
            "Round 1: Rapid Logic Challenge",
            "A rapid-fire round featuring logic-based questions to be solved within a set time limit.",
            "Round 2 : A Mystery coding challenge requiring structured solutions.",
        ],
        pics: {
            primary:
                "https://img.freepik.com/premium-photo/software-development-concept-coding-programmer-software-engineer-working-laptop-with-javascript-computer-code-virtual-screen-internet-things-iot-digital-technology-generative-ai-illustrator_993599-2487.jpg?w=1060",
            secondary: [
                "https://burst.shopifycdn.com/photos/developer-coding-in-php.jpg?width=1850&format=pjpg&exif=0&iptc=0",
                "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/work-731198_1280_1_1200x768.jpeg?size=690:388"
            ],
        },
        dateTime: "February 22,09:00 am",
        duration: "1.5 hrs",
        mode:"offline",
        prizes: {
            gold: "800",
            silver: "450",
        },
        contact: "9361673354",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Fast Minds, Quick Keys, Ignite Coding Excellence",
        description:"An exciting coding competition designed to challenge your problem-solving skills and precision. Compete with the best, showcase your talent, and rise to the top. Are you ready to take on the challenge?",
        form: form,
        type: "technical",
        faq: [
        ],
        tags: ["Problem Solving", "C", "C++", "Python", "Java"],
    },


    // Non Technical Events

    // MUSIC MANIA 
    {
        id: "13",
        name: "Music_Mania",
        title: "Music Mania",
        status: 1,
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        free: "yes",
        rules: [
           "Mode: Online",  
           "Perform solo with original content—no karaoke tracks, backing tracks, or pre-recorded vocals allowed",  
           "Video duration: Vocal (1–3 minutes), Instrumental (up to 4 minutes)",  
           "Clear audio quality is mandatory; avoid background noise",  
           "Specify the instrument in the registration form (for instrumental performances)",  
           "Any genre or language is allowed, but ensure content is free of offensive material",  
           "All performances must maintain originality, with no lip-syncing or additional sound effects",  
           "Video Submission: Upload your performance; faces can be blurred if shared on Cryptera's Instagram",  
           "Winner Selection: Winners will be chosen based on 40% likes and 60% panel judgment. Prizes include ₹300 for both vocal and instrumental winners, and E-certificates for all participants",  
           "Instagram Feature: All performances will be featured on Cryptera's Instagram page",  
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
        contact: "8438845719",
        carddescription:
            "Join our singing and music competition and showcase your talent to the world",
        dateTime: "February 20 - Last date for submission.",
        duration:null,
        mode:"Online",
        prizes: {
            gold: "300",
            gold1: "300"
        },
        type1: "Vocals",
        type2: "Instruments",
        color: "var(--fg-g)",
        description:
            "Calling all music enthusiasts! Participate in our Singing and Instrumental Contest to showcase your talent. Whether you’re a seasoned performer or just love music, this is your chance to shine. Who will be the star of the event?",
        form: "https://forms.gle/CfvDfSzUjYcSv46j8",
        type: "non_technical",
        faq: [
            {
                question: "Can we upload only audio files?",
                answer: "No,the video should be uploaded. If needed we can mask your faces while posting it into our Cryptera's instagram page.s",
            },
            {
                question: "Is there any cash price provided?",
                answer: "Yes, there are cash prices for winner and runner ups.E- certificates will also be provided for all the participants.",
            },
        ],
        speakers: [],
        tags: ["Fun Event"],
    },

    // Movie quiz 
    {
        id: "14",
        name: "Movie_quiz",
        title: "Movie quiz",
        status: 1,
        // venue: "MBCH",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Each team will consist of two members",
            "Use of mobile phones is strictly prohibited",
            "The quiz will have three rounds",
        ],
        duration:"1.5 hrs",
        mode:"offline",
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
        contact: "8438845719",
        dateTime: "February 22,01:30 pm",
        prizes: {
            gold: "500",
            silver:"250",
        },
        carddescription:
            "Test your knowledge of cinema Kollywood and compete with your fellow movie buffs",
        color: "var(--fg-g)",
        description:
            "Calling all movie lovers! Challenge yourself with our exciting Movie Quiz. From classic Tamil films to new releases, find out who knows the most about the world of movies!",
        form: form,
        type: "non_technical",
        faq: [],
        speakers: [],
        tags: ["Fun Event"],
    },

    // Poster Design 
    {
        id: "15",
        name: "Poster_Design",
        title: "Poster Design",
        status: 1,
        // venue: "IT442, L210",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        duration:"1 hr",
        mode:"offline",
        rules: [
            "Solo Participation",
            "All editing tools are allowed to use",
            "Participants should bring their own laptop with necessary tools installed",
            "Posters need to be designed on the venue",
            "Theme: Onspot"

        ],
        pics: {
            primary: "https://cdn.mos.cms.futurecdn.net/6bxva8DmZvNj8kaVrQZZMP.jpg",
            secondary: [
            ],
        },
        contact: "8438845719",
        dateTime: "February 21,10:45 am",
        prizes: {
            gold: "600",
            silver: "400",
        },
        color: "var(--fg-g)",
        carddescription:
            "Create, inspire, and win: the ultimate poster design challenge awaits !",
        description:
            "Unleash your inner artist! Let your imagination run wild. Create a stunning poster that captures the theme, and you could be crowned the top designer of the event!",
        form: form,
        // form1: "https://docs.google.com/forms/u/4/d/1pZQ5VNFsgXUN8WnvIr2dbs84OzN1Vndp9v547IXqel8/edit?usp=drivesdk&chromeless=1",
        type: "non_technical",
        faq: [],
        speakers: [],
        tags: ["Fun Event"],
    },

    // ARTISTIC AURAS 
    {
        id: "16",
        name: "Artistic_Auras",
        title: "Artistic Auras",
        status: 1,
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        free: "yes",
        duration:null,
        mode:"Online",
        rules: [
            "All kind of artistic styles are welcomed (Pencil sketch,water colour,doodle art,oil painting etc.)",
            "Your drawings will be posted on our Instagram page", 
            "Plagiarism is strictly prohibited" , 
            "Maximum number of entries per person is 3",
            "Winners and runners will be selected based the number of likes(40%) and jury decision(60%)", 
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
        contact: "8438845719",
        dateTime: "February 20 - Last date for submission.",
        prizes: {
            gold: "300",
            silver:"150",
        },
        color: "var(--fg-g)",
        carddescription:
            "Drawing is not what one sees, but what one can make others see",
        description:
            "Dive into a world of colours and emotions at our Art and Emotions event. Create artwork that captures the essence of your feelings. From vibrant hues to subtle shades, express your innermost emotions through your art.",
        form: "https://forms.gle/CfvDfSzUjYcSv46j8",
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
        tags: ["Fun Event","Arts"],
    },

    // Rhyme and Rhythm 
    {
        id: "17",
        name: "Rhyme_and_Rhythm",
        title: "Rhyme and Rhythm",
        status: 1,
        // venue: "MBCH",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        duration:null,
        mode:"Online",
        free:"yes",
        rules: [
            "MODE: Online ",
            "Solo participation only.",
        "Languages allowed: Tamil, English.",
        "Upload your file in JPG/JPEG format.",
        "Clearly attach your file in the shared Google form.",
        "Plagiarism is strictly prohibited.",
        "Participants must choose any one of the following prompts to write their poem:",
        "1) Lighthouse of Lost Souls",
        "2) The Clockmaker’s Laments",
        "3) Stardust on My Fingertips"
        ],
        pics: {
            primary:
                "https://www.independent.org/publications/tir/img/pen_closeup_mobile_1520x800.jpg",
                // "https://cdn.shopify.com/s/files/1/0600/3720/2069/collections/AP18280_TRUE_WRITER_CREATE_HERRINGBONE_FOUNTAIN_PEN_i2_cat.jpg?v=1659619448",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "8438845719",
        dateTime: "February 20 - Last date for submission.",
        prizes: {
            gold: "350",
            silver:"150",
        },
        carddescription: "Where Words Flow and Creativity Takes Shape",
        color: "var(--fg-g)",
        description:"Calling all poets! Participate in our Poetry Event and showcase your talent. Share your poems that touch on themes of love, loss, joy, and everything in between. Connect with others through the shared experience of poetry.",
        form: "https://forms.gle/CfvDfSzUjYcSv46j8",
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
        tags: ["Fun Event","Poetry"],
    },
    
    // Tresure hunt 
    {
        id: "18",
        name: "Treasure_Hunt",
        title: "Treasure Hunt",
        status: 1,
        // venue: "L102",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        duration:"5 hrs",
        mode:"offline",
        rules: [
            "Team Size: A team can contain 1 or 2 persons as its members (if there are more registrations, participants may be required to form each team with three members)",
            "Rounds: This event contains a total of 3 rounds",
            "No Splitting: Team members must stay together throughout the hunt, and communicating with other teams during the event is not permitted",
            "Punctuality: All team members must arrive at the event venue at least 15 minutes before the start time",
            "No Outside Help: Teams cannot use external assistance (e.g., phones, internet, or non-participants)",
            "Note: Only the team that successfully finds the treasure will be awarded the prize; we encourage all teams to give their best effort and enjoy the experience",        
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
        contact: "8438845719",
        dateTime: "February 21,10:00 am",
        prizes: {
            gold: "2000",
        },
        color: "var(--fg-g)",
        carddescription:
            "Solve the clues and follow the trail, find the treasure that will prevail.",
        description:
            "Ready for an adventure? Put your puzzle-solving skills to the test. Follow the clues, solve the puzzles, and find the hidden treasures. Who will be the ultimate treasure hunter?",
        form: form,
        type: "non_technical",
        faq: [],
        speakers: [],
        tags: ["Fun Event"],
    },

    // Marvel/DC_Quiz 
    {
        id: "19",
        name: "MarvelDC_Quiz",
        title: "Marvel/DC Quiz",
        status: 1,
        // venue: "MBCH",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        duration:"2 hrs",
        mode:"offline",
        rules: [
            "The questions will be based on the cinematic and comic of both MARVEL and DC Universes",
            "Marks for each question might vary based on the difficulty of the questions (Easy/Medium/Hard)",
            "Each wrong response or unnecessary press leads to negative markings",
            "Individual or a team of two members are allowed to attend this event",
            "Any kind of plagiarism or illegal methods leads to immediate disqualification",
            "Note: Mobile Phones are needed for buzzer  and Participants should bring their laptop."
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
        contact: "8438845719",
        dateTime: "February 21,03:30 pm",
        prizes: {
            gold: "300",
            silver:"150",
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
        tags: ["Fun Event","Marvel","DC"],
    },

    // Selling Showdown 
    {
        id: "20",
        name: "Selling_Showdown",
        title: "Selling Showdown",
        status: 1,
        // venue: "L102",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
           "Each participant will compete individually",
            "The event will consist of two rounds",
            "Participants can present their pitch in either Tamil or English",
            "Judging criteria include: 1) Fluency, 2) Creativity, 3) Clarity, 4) Pronunciation, 5) Body Language",
            "Time limits will be strictly enforced for all tasks",
            "Winners will be selected based on their cumulative performance in both rounds",
            "Judges’ decisions are final and binding",
            "Note: E-Certificate to be provided",

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
        contact: "8438845719",
        dateTime: "February 21,02:00 pm",
        duration:"1.5 hrs",
        mode:"offline",
        prizes: {
            gold: "400",
            silver: "200",
        },
        color: "var(--fg-g)",
        carddescription: "Showcase your pitching skills",
        description:
            "Ready to unleash your inner sales guru? You'll pitch products like a maestro and dazzle the audience with your creativity. Let’s wait who will take the spotlight as the ultimate sales champion?",
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
        tags: ["Fun Event"],
    },

    // Typing Thunder 
    {
        id: "21",
        name: "Typing_Thunder",
        title: "Typing Thunder",
        status: 1,
        // venue: "L210, L201(waiting room )",
        eligibility: "Anyone can join",
        completed: false,
        duration:"45 mins",
        mode:"offline",
        results: null,
        rules: [
            "Online participations not allowed",
            "Participants can use own laptop",
            "No second chance",
            "Two rounds will be conducted",

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
        contact: "8438845719",
        dateTime: "February 21,12:30 pm",
        prizes: {
            gold: "400",
            silver:"200",
        },
        color: "var(--fg-g)",
        carddescription:
            "Join us for an adrenaline-fueled competition that will have your fingers flying across the keyboard!",
        description:
            "Get ready to showcase your typing prowess! Join our Typewriting Challenge and see how you stack up against other typists. Type out passages quickly and accurately to win fantastic prizes. It's time to let those fingers fly!",
        form: form,
        // form1: "https://docs.google.com/forms/u/4/d/1pZQ5VNFsgXUN8WnvIr2dbs84OzN1Vndp9v547IXqel8/edit?usp=drivesdk&chromeless=1",
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
        tags: ["Fun Event"],
    },

    // Shutterbug Showcase 
    {
        id: "22",
        name: "Shutterbug_Showcase",
        title: "Shutterbug Showcase",
        status: 1,
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        free: "yes",
        rules: [
            "MODE: Online",
            "Theme 1: The Joyful Lens",
            "Description: Capture the essence of unfiltered joy, where laughter echoes and smiles are contagious. This theme invites photographers to showcase the moments that fill our hearts with warmth—be it the quiet joy of a child’s laughter, the exuberant celebration of a victory, or a serene sunset that reminds us of life’s simple pleasures",
            "Theme 2: Grit and Grind",
            "Description: Hard work is the silent hero of every success story. Through this theme, we challenge photographers to capture the raw energy, determination, and perseverance that fuel achievement. Whether it’s the sweat on a laborer’s brow or the focused gaze of an artist at work, show us the relentless drive behind every effort.",
            "Theme 3: Staring into Depths",
            "Description: Our eyes are the windows to our souls, and they hold stories of introspection, experiences, and the world we see. This theme invites photographers to dive into the depth of reflection, whether through a portrait, a glimmer of thought in someone’s gaze, or an abstract view that mirrors inner thoughts. Explore the power of seeing beyond the surface.",
            "A participant can choose only one theme from the above mentioned and send only one photo and in cases of multiple entries found, the participant will be eliminated from the challenge.",
            "No selfies/portraits allowed and if found, will subsequently result in disqualification.",
            "No editing is allowed.",
            "Photos taken must be authentic and if found that the photo has been taken from any of the online resources or has been AI-generated, it will lead to elimination.",
            "Photo format must be .jpg, .jpeg, .png and size must not exceed 25MB.",
            "Last date for submission of entry is on or before 19/02/2025, 11:59 pm.",
        ],
        entry: [],
        pics: {
            primary: "https://assets.entrepreneur.com/content/3x2/2000/20191009140007-GettyImages-1053962188.jpeg?crop=4:3",
            secondary: [],
        },
        dateTime: "February 20 - Last date for submission.",
        duration:null,
        mode: "Online",
        prizes: {
            gold: "250",
            silver:"150",
        },
        contact: "8438845719",
        color: "var(--fg-g)",
        carddescription: "Best photographs that capture the beauty and creativity.",
        description:
            "Get ready to freeze the moments! Participate in our Photography Event and share your unique perspective. From the smallest details to the grandest vistas, bring your best photos to life. Let your view of world will shown to others!",
        form: "https://forms.gle/CfvDfSzUjYcSv46j8",
        type: "non_technical",
        faq: [],
        tags: ["Fun Event"],
    },

    // Attack on anime 
    {
        id: "23",
        name: "Attack_on_Anime",
        title: "Attack on Anime",
        // venue: "LBCH",
        status: 1,
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "The quiz will feature questions from famous anime across various genres",
            "Participants can compete individually or as a team of two members",
            "Scoring will be based on the difficulty of the questions in each round, and there will not be any negative markings",
            "All participants should bring mobile phones with internet connectivity",
            "Any kind of cheating will lead to immediate disqualification",
        ],
        entry: [],
        pics: {
            primary: "https://as01.epimg.net/meristation_en/imagenes/2022/02/18/news/1645143158_918055_1645145092_noticia_normal.jpg",
            secondary: [],
        },
        dateTime: "February 21,11:30 am",
        duration: "1.5 hrs",
        mode:"offline",
        prizes: {
            gold: "400",
            silver:"200",
        },
        contact: "8438845719",
        color: "var(--fg-g)",
        duration:"1.5 hrs",
        carddescription:
            "From Chainsaw Man to Sailor Moon, who will come out on top as the ultimate anime trivia master?",
        description: "Are you a true anime fan? Put your otaku knowledge to the test and go head-to-head with other enthusiasts in our anime quiz. From Naruto to Sailor Moon, who will come out on top as the ultimate anime trivia master?",
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

    // Recall Rumble 
    {
        id: "40",
        name: "Recall_Rumble",
        title: "Recall Rumble",
        // venue: "LBCH",
        status: 1,
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Participants have to form a team of two members",
            "Negative markings for the wrong answers",
            "Total rounds: 3",
            "Participants will be shortlisted in each round based on their performances",
        ],
        entry: [],
        pics: {
            primary: "https://img.freepik.com/free-photo/gradient-technology-background_23-2151895872.jpg?t=st=1737654417~exp=1737658017~hmac=80848eaf744e83a2d9a4f9f6b7e17cb1e36d22ff6987c940795e72a1de1d5d48&w=360",
            secondary: [],
        },
        dateTime: "February 22,09:00 am",
        duration: "2 hrs",
        mode:"offline",
        prizes: {
            gold: "400",
        },
        contact: "8438845719",
        color: "var(--fg-g)",
        carddescription:
            "Test your memory, speed, and wit in this ultimate showdown of brains and buzzers!",
        description: "Get ready to test your memory in an epic showdown! The Memory Game, where you'll face challenges that will push your recall abilities to the limit. Who will rise above the rest to become the ultimate memory master? ",
        form: form,
        type: "non_technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Offline",
            },
        ],
        tags: ["Fun Event"],
    },

    // cinematic Snippets 
    {
        id: "41",
        name: "Cinematic_Snippets",
        title: "Cinematic Snippets",
        // venue: "LBCH" ,
        free: "yes",
        status: 1,
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        free:"yes",
        rules: [
           "Reels must be a maximum of 60 seconds", 
            "Submit reels by 19th February, 6 PM; late entries will not be accepted",
            "Content must not be offensive, abusive, or harmful", 
            "Reels must not harm or damage anyone’s reputation or personality", 
            "Reels can include stand-up comedy, recreations, or original creative ideas", 
            "Judges’ decisions are final",
            "All entries must be original and follow guidelines", 
            "Eligibility: Open to everyone",
        ],
        entry: [],
        pics: {
            primary:"https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2luZW1hfGVufDB8fDB8fHww",
            secondary: [],
        },
        dateTime: "February 20 - Last date for submission.",
        duration:null,
        mode: "Online",
        prizes: {
            gold: "500",
            sliver:"200",
        },
        contact: "8438845719",
        color: "var(--fg-g)",
        carddescription:
            "Unleash your creativity and let your story shine, one reel at a time!",
        description: "Step into the spotlight with Cinematic Snippet! Create a stand-out reel, whether it’s stand-up comedy, a recreation, or your own unique idea. Compete, impress, and win exciting prizes. Don’t miss your chance—join now and let your creativity shine!",
        form: "https://forms.gle/CfvDfSzUjYcSv46j8",
        type: "non_technical",
        faq: [
            {
                question: "Will it happen online or offline?",
                answer: "Online",
            },
        ],
        tags: ["Fun Event"],
    },
    

    
    // Flagship Events

    // Paper Presentation
    {
        id: "24",
        name: "Paper_Presentation",
        title: "Paper Presentation",
        status: 1,
        // venue: "IT214",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Participation can be individual or in teams of up to 4 members",
            "The abstract should be at most two pages and must be submitted after paying the 'Entry Fee' on or before February 18",
            "Participants will be shortlisted based on the innovative ideas submitted",
            "Shortlisted participants are required to complete their registration by paying the 'Registration Fee' based on their team size",
            "The oral presentation is allotted 10 minutes, followed by a 2-3 minute Q&A session; the time limit must not be exceeded",
            "Documents must use the 'Times New Roman' font",
            "The paper must follow the IEEE format",
            "Soft copies of the paper must be submitted in .doc or .pdf format",
            "Animations and videos should be avoided in the PowerPoint presentation",
            "You need to present your idea according to the allotted time slot and date",
        ],
        pics: {
            primary: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_505595136_20001333200092800_406810.jpg",
            secondary: [],
        },
        dateTime: "February 21 & 22",
        duration: null,
        mode:"offline",
        prizes: {
            gold: "2000",
            silver:"1000",
        },
        contact: "9865714310",
        speakers: null,
        color: "var(--fg-g)",
        carddescription: "Are you ready to showcase your ideas on the big stage?",
        description: "Showcase your research, ideas, and innovation in our Paper Presentation event.Impress the panel with your knowledge and communication skills while addressing key topics in your field!  ",
        form: " https://forms.gle/CBpgJ3iunVZQsDhP6",
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
        ],
        tags: ["presentation"],
    },

    // Freefire 1
    {
        id: "26",
        name: "Freefire",
        title: "Freefire",
        status: 1,
        mode:"online",
        duration:null,
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "A Clash Squad match will be held",
            "Teams that lose their match will be eliminated from the tournament",
            "The team that wins the final round will be declared the winner, while the losing team in the final round will be the runner-up",
            "Fixtures will be created based on the number of teams enrolled",
            "The use of grenades is strictly prohibited",
            "Unlimited ammo will be provided",
            "Emotes are not allowed during the match",
            "Moderators will spectate the matches, and any issues should be reported to them immediately",
            "The moderator will share the room ID and password for each match in the WhatsApp group created for the event",
            "A Free Fire room will be created, and its name and password will be shared shortly before the match begins",
            "Character skills are not allowed",
            "Emulators are not allowed",
            "Gun attributes are not allowed",
            "Loadout is disabled",
            "Roof climbing is allowed",
        ],
        pics: {
            primary:
                "https://i.pinimg.com/736x/cd/03/84/cd038431ecf9ccfa4c8d08c55248e83f.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        amt: "150",
        contact: "6374330882",
        dateTime: "February 21 & 22,06:00 pm",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        color: "var(--fg-g)",
        carddescription:
            "Get ready to battle it out and be the last one standing in the ultimate Free Fire showdown!",
        description:
            "Engage in the intense action of Clash Squad in Free Fire, where teamwork and tactics are the keys to victory. Battle it out in fast-paced 4v4 matches and prove your skills to dominate the battlefield!",
        form: "https://forms.gle/Wdqc8puK8LoVgaaS9",
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
        tags: ["Gaming"],
    },

    // Hackathon 1
    {
        id: "27",
        name: "Hackathon",
        title: "Hackathon",
        status: 1,
        // venue: "L102, L101(Waiting Room)",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        mode:"offline",
        duration:null,
        // mailto: "mailto:crypterahackathon@gmail.com?subject=Hackathon%20Submission&body=Dear%20Organizers,%0D%0A%0D%0AAttached%20are%20my%20PPT%20and%20other%20necessary%20files%20for%20the%20hackathon.%20Please%20let%20me%20know%20if%20there%20are%20any%20issues.%0D%0A%0D%0AKind%20regards,%0D%0A[Your%20Name]",
        // email: "crypterahackathon@gmail.com",
        rules: [
            "A team shall consist of 2-4 participants",
            "ENTRY FEE PER TEAM : Rs. 250",
            "Theme - Open Theme (AIML and IoT - Preferred)",
            "The teams should submit the topic by February 21",
            "The final solution must be demonstrated through presentation and implementation of the project",
            "Panel members decision is final",
            "Simulation can be done through any software",
            "PPT should contain theme, introduction, problem statement, objective, target users, proposed solution, sequence diagram, conclusion",
            "Students should upload their PPT and other necessary files before February 21, 11:59 pm."
        ],
        pics: {
            primary:
                "https://i.pinimg.com/736x/51/3b/05/513b05383c9e097835642a9bfbe50827.jpg",
            secondary: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        contact: "9025451507",
        dateTime: "February 22,01:00 pm",
        prizes: {
            gold: "2000",
            silver: "1000",
        },
        amt: "250",
        color: "var(--fg-g)",
        carddescription: "You must do the thing you think you cannot do",
        description:"Join the coding marathon in our Hackathon and unleash your programming skills.Collaborate, innovate, and build solutions to real-world challenges!",
        form: "https://forms.gle/8YPPSNJJvQz4iGL26",
        type: "flagship",
        faq: [{
            question: "Can we register on the spot for the hackathon ?",
            answer: "No, registrations close on February 21, and no registrations are permitted thereafter."
        },
        {
            question: "Is it mandatory to follow the preferred themes (AIML and IOT) ?",
            answer: "No, the theme is open. However, projects related to Artificial Intelligence and IOT are preferred."
        },
        {
            question: "In case of tied ratings, who wins ?",
            answer: "The team with the highest purse is declared the winner."
        },
        {
            question: "Can we change the project topic after submission ?",
            answer: "No."
        },
        {
            question: "What criteria will the panel use to judge the projects ?",
            answer: "The judging criteria include innovation, relevance to the theme, problem-solving approach, implementation, and presentation quality. The panel's decision is final."
        },
        {
            question: "How and when will the winners be announced ?",
            answer: "The winners will be announced on the day of the final presentation after the evaluation by the panel."
        }],
        speakers: [],
        tags: ["Hackathon"],
     },

    // Valorant 1
    // {
    //     id: "28",
    //     name: "Valorant",
    //     title: "Valorant",
    //     status: 1,
    //     eligibility: "Anyone can join",
    //     completed: false,
    //     results: null,
    //     mode:"online",
    //     duration:null,
    //     rules: [
    //         "Players are expected to use a single account for each player",  
    //         "Each team must consist of 5 players and 2 substitute players",  
    //         "Substitutes can be included only at the beginning of a new match; the moderator has to be informed about the substitutes included",  
    //         "Players must be available at least 15 minutes in the lobby before the match is scheduled to begin",  
    //         "Failure of the entire team to show up on time will lead to forfeiture of the match",  
    //         "The team captain needs to add all their members and the coordinator (whose details will be subsequently revealed) as their friends with their RIOT IDs",  
    //         "The captains will be responsible for adding their team players into the game lobby; add your teammates to your friend list well ahead of the match",  
    //         "Cheating in any form (including exploiting bugs) will not be tolerated and will lead to the disqualification of the entire team from the event",  
    //         "Team captains must send a screenshot of the final scorecard to the coordinator at the end of the match, for future reference",  
    //         "Only the base (vanilla) version of the game is to be used (i.e., no mods of any sort)",  
    //         "In case of any changes in the schedule of matches, team captains will be informed",  
    //         "The coordinator will let the team leader know regarding match fixtures, tournament schedules, and other updates regarding further stages of the tournament",  
    //         "If the team fails to show up, the opponents automatically get a walkover",
    //     ],
    //     pics: {
    //         primary:
    //             "https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg",
    //         secondary: [
    //             "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    //             "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    //             "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    //             "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    //         ],
    //     },
    //     amt: "300",
    //     contact: "7418039493",
    //     dateTime: "February 21 & 22,06:00 pm",
    //     prizes: {
    //         gold: "2000",
    //         silver: "1000",
    //     },
    //     color: "var(--fg-g)",
    //     carddescription:
    //         "Rise to the challenge and take on the competition in a high-stakes battle for supremacy",
    //     description:
    //         "Gear up for high-octane tactical gameplay in the Valorant tournament. Team up, strategize, and outplay your opponents in this thrilling esports competition!",
    //     form: "https://forms.gle/3hr71n9SiLoPc4B57",
    //     type: "flagship",
    //     faq: [],
    //     speakers: [],
    //     tags: ["Gaming"],
    // },

    // Chess 1
    {
        id: "29",
        name: "Chess",
        title: "Chess",
        status: 1,
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Matches are conducted in online mode",
            "Matches are conducted through the platform lichess.org; ensure that you have an account at the time of registration",
            "Timing for each match is 5 minutes (Blitz)",
            "Players should have a proper internet connection during the match",
            "Players are requested to join at least 15 minutes prior to the match timing",
            "Late entries are not allowed",
            "If a player doesn't make the first move of the game within 20 seconds, it leads to the opponent's victory",
            "Panel members' decision will be final in case of any disputes",
            "Cheating or malpractice will lead to immediate disqualification",
        ],
        entry: [],
        pics: {
            primary: chess,
            secondary: [],
        },
        dateTime: "February 21 & 22,06:00 pm",
        duration: null,
        mode:"online",
        prizes: {
            gold: "500",
            silver: "300",
        },
        contact: "8489888983",
        amt: "50",
        team: "no",
        color: "var(--fg-g)",
        carddescription:
            "Enter the world of strategy and intellect with our exciting chess tournament!",
        description:
            "Put your strategic thinking to the test in our Chess competition.Outsmart your opponents and prove yourself as a grandmaster in the making!  ",
        form: "https://forms.gle/CKe54pNGAE5ppf6A6",
        type: "flagship",
        faq: [],
        tags: ["Fun Event", "Chess"],
    },

    // BGMI 1
    {
        id: "30",
        name: "BGMI",
        title: "BGMI",
        status: 1,
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Each team must consist of 2-4 players with an optional 1 substitute player",
            "Substitutes can only be used once, at the beginning of a new match; the moderator has to be informed about the substitutes included",
            "Players must be available at least 10 minutes in the lobby before the match is scheduled to begin",
            "The captains will be responsible for adding their team players into the game lobby",
            "All players should download all the maps",
            "Cheating in any form (including exploiting bugs) will not be tolerated and will lead to the disqualification of the entire team from the event",
            "Team captains must send a screenshot of the final scorecard in the WhatsApp group, for future reference",
            "In case of any changes in the schedule of matches, team captains will be informed",
            "If the team fails to show up, the opponents automatically get a walkover",
        ],
        entry: [],
        pics: {
            primary: "https://i.pinimg.com/736x/aa/29/b0/aa29b0bcf2e5e1718fdaa0710de4f633.jpg",
            secondary: [],
        },
        dateTime: "February 21 & 22,06:00 pm",
        duration: null,
        mode:"online",
        prizes: {
            gold: "1000",
            silver: "500",
        },
        contact: "7305615307",
        amt: "150",
        color: "var(--fg-g)",
        carddescription:
            "Dive into the intense battlegrounds of BGMI, where strategy, survival, and skill converge.",
        description:
            "Get ready for an intense battle of skills, strategy, and survival in our BGMI tournament.Show off your gaming prowess and fight your way to the top in this action-packed flagship event!",
        form: "https://forms.gle/gb3L2EcEd9BvBXY58",
        type: "flagship",
        faq: [],
        tags: ["Gaming"],
    },

    // Carrom 1
    {
        id: "31",
        name: "Carrom",
        title: "Carrom",
        status: 1,
        // venue: "L201",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Each team consists of 2 players (doubles format); no substitutes are allowed once the tournament begins",
            "The tournament follows a knockout format with approximately 16 teams; teams are eliminated after losing a match",
            "Winners progress to the next round (Round of 16 → Quarterfinals → Semifinals → Final)",
            "Matches are played until a winner is decided, with no ties",
            "Each match lasts up to 30 minutes; the team that scores 30 points first or has the higher score at the end of 30 minutes wins",
            "In case of a tie, the match goes into a sudden death round",
            "A coin toss determines which team strikes first, and players alternate turns throughout the match",
            "Black Coin: 1 point (Team 1 will pocket black coins)",
            "White Coin: 1 point (Team 2 will pocket white coins)",
            "Red Coin (Queen): 3 points",
            "The Queen must be covered by pocketing either a black or white coin in the same turn; if not, it is returned to the center",
            "Pocketing the striker results in a 1-point penalty",
            "Failing to cover the Queen results in the Queen being returned to the center",
            "Touching or crossing the baseline results in a 1-point penalty",
            "Pocketing both a coin and the striker at the same time is considered a foul; in this case, 2 coins must be placed back on the board",
            "Pocketing the last coin before covering the Queen results in a 1-point penalty, and the Queen is returned to the center",
            "The match timer starts when the referee declares the game open",
            "The referee's decision on fouls and disputes is final and binding",
        ],
        entry: [],
        pics: {
            primary: carrom,
            secondary: [],
        },
        dateTime: "February 21 & 22,11:00 am",
        duration: null,
        mode:"offline",
        prizes: {
            gold: "600",
            silver: "300",
        },
        contact: "7075946973",
        amt: "50",
        color: "var(--fg-g)",
        carddescription:
            "Let the striker talk !",
        description:
            "Sharpen your aim and test your precision in the ultimate Carrom challenge.Compete with the best and showcase your mastery in this classic indoor game!",
        form: "https://forms.gle/C8YQR1RANAeEkyTy5",
        type: "flagship",
        faq: [
            {
                question: "Board size and type ?",
                answer: " Medium and wooden",
            },
            {
                question: "Can we use our own striker ?",
                answer: "Yes, you can use your own striker"
            }
        ],
        tags: ["Carrom"],
    },

    // IPL Auction 1
    {
        id: "32",
        name: "IPL_Auction",
        title: "IPL_Auction",
        status: 1,
        // venue: "LBCH",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Each team will receive a fixed amount of virtual cash for building their team along with the players' list",
            "Bidding starts with the base price; the first bid will be considered in case of a tie",
            "Each player will have a base price and a set number of points on a 10-point scale",
            "Bid increments will follow the guidelines set by the event coordinators",
            "The team with the highest points will be declared the winner",
        ],
        entry: [],
        pics: {
            primary: "https://thebridge.in/h-upload/2022/02/12/23253-ipl-2022.webp",
        },
        dateTime: "February 22,02:00 pm",
        duration: null,
        mode:"offline",
        prizes: {
            gold: "1000",
            silver:"500",
        },
        contact: "9962539073",
        amt: "175",
        color: "var(--fg-g)",
        determination: "The team with the highest total rating after player auction will be declared as the winner.",
        carddescription: "Immersive cricket experience  assemble, bid, and conquer! 🏏💰",
        description:"Step into the shoes of a team manager in our thrilling IPL Auction event. Strategize, bid, and create your dream cricket team to dominate the league!",
        form: "https://forms.gle/z3GTtLisR95fygZ46",
        type: "flagship",
        faq: [
            {
                question: "Are player ratings revealed during bidding ?",
                answer: "No"
            },
            {
                question: "Can unsold players be bought in the acceleration auction at the end ?",
                answer: "Yes"
            },
            {
                question: "In case of tied ratings, who wins ?",
                answer: "The team with the highest purse is declared the winner."
            },
            {
                question: "Is retention of players allowed ?",
                answer: "No."
            },
            {
                question: "How is the team name chosen ?",
                answer: "Team names are written on folded sheets, and the team leader randomly picks one sheet."
            },
            {
                question: "Does ODI and Test performance considered for ranking ?",
                answer: "No."
            }
        ],
        tags: ["Auction"],
    },

    // Escape Room 1
    {
        id: "33",
        name: "Escape_Room",
        title: "Escape Room",
        status: 1,
        // venue: "L109",
        eligibility: "Anyone can join",
        completed: false,
        results: null,
        rules: [
            "Participants must solve puzzles or find clues to progress",
            "Time limits must be strictly adhered to (15–20 minutes for Round 1 and 10–15 minutes for the final round)",
            "Clues and props should not be damaged or removed from the room",
            "The final decision of the organizer is binding and final",
        ],
        entry: [],
        pics: {
            primary:"https://images6.alphacoders.com/561/561826.jpg",
            secondary: [],
        },
        dateTime: "February 21 & 22,11:00 am",
        duration: null,
        mode:"offline",
        prizes:{
            gold:"750",
        },
        contact: "6379478948",
        // amt: "150",
        gift: "Detectives who crack the code will get commemorative hats for each player in the team.",
        color: "var(--fg-g)",
        carddescription:
            "The clock’s ticking, the city’s fate hangs in the balance. Can you beat the mastermind in time to stop the disaster?",
        description:
            "Challenge your mind and teamwork in this thrilling Escape Room experience. Solve puzzles, find clues, and race against time to secure your freedom! ",
        form: "https://forms.gle/twrgWfbPREbduY1N9",
        type: "flagship",
        faq: [
            {
                question: "Will the event be held online or offline ?",
                answer: "Offline"
            },
            {
                question: "How to register for this event ?",
                answer: "You can register on the spot at Cryptera. The location of the event will be confirmed soon."
            },
            {
                question: "What’s the objective of this event ?",
                answer: "The objective is to find clues, solve a mystery and overall, have fun."
            }
        ],
        tags: ["Fun Event"],
    },

    // PC Building 1
    {
            id: "8",
            name: "PC_Building",
            title: "PC Building",
            status: 1,
            // venue: "L109",
            eligibility: "College Students",
            completed: false,
            results: null,
            rules: [
                "Each team consists of 2 members",
                "A shelf with all the required PC parts will be provided",
                "Participants must select the appropriate parts from the shelf",
                "Teams must assemble and boot a fully functional PC within a time limit of 15 minutes",
                "The team that assembles and boots a working PC in the shortest time will win the event",
                "Participants must demonstrate that their PC is functional by booting it up",
                "All components, including the cabinet, must be properly fitted; even if the PC boots successfully, teams will not qualify if any part is improperly installed or left unfitted",
            ],
            pics: {
                primary:
                    "https://www.cnet.com/a/img/resize/bcbacc4ad119e6f901ff4b7865f1b164f317be5b/hub/2019/11/23/4e21a4ae-cab6-4ea5-ace9-c3d8603ff017/all-parts.jpg?auto=webp&width=1200",
                secondary: [],
            },
            dateTime: "February 21,02:00 pm",
            duration: null,
            mode:"offline",
            prizes: {
                gold: "1500",
                silver: "750",
            },
            contact: "8825526817",
            speakers: null,
            color: "var(--fg-g)",
            carddescription: "Are you the ultimate PC enthusiast?",
            description:"Combine creativity and technical expertise in the PC Building challenge.Assemble and design the ultimate system to showcase your hardware knowledge and skills!",
            form: "https://forms.gle/MuqBhBdMaG5QLLtS6",
            type: "flagship",
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


    // Workshops
    //workshop1
    {
        id: "34",
        key: 1,
        status: 1,
        rules: [
        "Certificate will be given for the registered candidates who attend the workshop",
        "Participants are advised to bring their Laptops for the Hands-on Session (Mandatory for MERN Stack and AIML Workshops)",
        "For further details call : 7092469189"
    ],
        faq: [
        {
                question: "Will it happen online or offline?",
                answer: "Offline",
        },
        {
                question: "Will it be a one day workshop or two days?",
                answer: "One day, Time is mentioned above",
        },
        {
                question: "Can I get certificate?",
                answer: "Yes, Certificate will be provided in offline",
        },
    ],
        name: "Workshop1",
        title: "Explore MERN Stack: The Ultimate Hands-On Workshop",
        // venue: " IT213 or Auditorium",
        dateTime: " February 21, 10 am to 12 pm",
        carddescription: "WORKSHOP",
        description: "Step into the world of Full-Stack Development by exploring MongoDB, Express.js, React and Node.js with our hands-on MERN Stack Workshop! Whether you're just starting out or looking to sharpen your skills, join us for a fun, practical session that will take your Web Development game to the next level!",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary: "https://itechnasik.com/wp-content/uploads/2023/11/Mern-Stack-Developer.png",
    },
        contact: "7092469189",
        tags: ["Workshop"],
        entry: [
        "Single Workshop – Rs. 150/-",
        "Combo A – Two Workshops – Rs. 250/-",
        "Combo B – Three Workshops – Rs. 350/-",
        "Combo C – Four Workshops – Rs. 450/-"
    ],
        
        form: "https://forms.gle/eo9VSfU8uQQbRwac7",
        speakerinfo: "Guru Prasath is a Technical Trainer at Yellowmatics.ai, specializing in Java Full Stack and MERN Stack technologies, with over Five years of Industry experience.",
        speakers: [
        {
                name: "Guru Prasath D R",
                bio: "Guru Prasath holds a Bachelor's degree in Engineering from Vellore Institute of Technology (VIT). As an experienced Skill Development Engineer, he has been actively mentoring students and contributing to the Global Student Alumni Network and preparing candidates for roles in Product Development Companies.He has conducted technical training at Tech Molders for pre-final and final-year students and at Kanavu Labs for Corporate Professionals.",
        },
    ],
        color: "red",
    },

//workshop2 
 {
    id: "35",
    key: 1,
    status: 1,
    s: 1,
    rules: [
        "Certificate will be given for the registered candidates who attend the workshop",
        "For further details call : 7092469189"
    ],
    faq: [
        {
                question: "Will it happen online or offline?",
                answer: "Offline",
        },
        {
                question: "Will it be a one day workshop or two days?",
                answer: "One day, Time is mentioned above",
        },
        {
                question: "Can I get certificate?",
                answer: "Yes, Certificate will be provided in offline",
        },
    ],
    name: "Workshop2",
    title: "Azure and AWS Unveiled: An Exploration of Cloud Services and Capabilities",
    dateTime: "February 21, 2 pm to 4 pm",
    carddescription: "WORKSHOP",
    description:"Unlock the power of Azure and AWS and discover how they drive real-world innovation! This session breaks down core Cloud Services, from Computing and Storage to AI and Security, showcasing their impact across industries. Join us to explore how these platforms are shaping the future of Cloud Technology!",
    type: "flagship",
    eligibility: "Anyone can join",
    pics: {
        primary:"https://imgs.search.brave.com/kaWmyb8Kjfd3840BThBeYlEkJioMjriL4gZ4s7aIpMc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/OTUzNTEyMC9waG90/by9kYXRhLWNsb3Vk/LXNlcnZlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9am4x/SGJPaFZTOEhrSGtl/VGRlSnNxUXc1NkJW/ckNSQkluWWhrV0tm/T0puND0",
    },
    contact: "7092469189",        
    tags: [],
    entry: [
        "Single Workshop – Rs. 150/-",
        "Combo A – Two Workshops – Rs. 250/-",
        "Combo B – Three Workshops – Rs. 350/-",
        "Combo C – Four Workshops – Rs. 450/-"
    ],
    form: "https://forms.gle/eo9VSfU8uQQbRwac7",
    speakerinfo:
        "Jerald Felix is an IT Analyst at Bosch Global Software Technologies, with expertise in Cloud and AI. He is a Microsoft Certified Trainer with a deep understanding of Azure cloud services and Infrastructure projects. With over Ten years of experience, he has been delivering and supporting IT solutions.",
    speakers: [
        {
            name: "Jerald Felix",
            bio: "",
        },
    ],
    color: "red",
},

    //workshop3
    {
        id: "36",
        key: 1,
        status: 1,
        rules: [
        "Certificate will be given for the registered candidates who attend the workshop",
        "Participants are advised to bring their Laptops for the Hands-on Session (Mandatory for MERN Stack and AIML Workshops)",
        "For further details call : 7092469189"
    ],
        faq: [
        {
                question: "Will it happen online or offline?",
                answer: "Offline",
        },
        {
                question: "Will it be a one day workshop or two days?",
                answer: "One day, Time is mentioned above",
        },
        {
                question: "Can I get certificate?",
                answer: "Yes, Certificate will be provided in offline",
        },
    ],
        name: "Workshop3",
        title: "Exploring Data Engineering in the Real World",
        //venue: " IT213 or Auditorium",
        dateTime: " February 22, 10 am to 12 pm",
        carddescription: "WORKSHOP",
        description: "Step into the World of Data Engineering and see how it transforms Game Development. From optimizing Gameplay to creating immersive experiences, discover how data is the driving force behind next-level gaming innovation. Ready to unlock the potential? Let’s dive in!",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary: "https://www.valuemomentum.com/wp-content/uploads/2024/12/shutterstock_1551647945-1536x864.jpg",
    },
        contact: "7092469189",
        tags: ["Workshop"],
        entry: [
        "Single Workshop – Rs. 150/-",
        "Combo A – Two Workshops – Rs. 250/-",
        "Combo B – Three Workshops – Rs. 350/-",
        "Combo C – Four Workshops – Rs. 450/-"
    ],
        form: "https://forms.gle/eo9VSfU8uQQbRwac7",
        speakerinfo: "Prabhu Varadharajan is the Lead Data Engineer/Architect at Electronic Arts Inc. (EA) in Toronto, Canada, with around 10 years of industry experience specializing in Data Engineering",
        speakers: [
        {
                name: "Prabhu Varadharajan",
                bio: "Prabhu Varadharajan holds a Bachelor of Engineering (B.E.) in Computer Science from KIT - Kalaignar Karunanidhi Institute of Technology. Throughout his career, he has worked at Deloitte as a Senior Consultant, as a Data Engineer at Verizon, as a Business Intelligence Analyst at Altimetrik and as a Programmer Analyst at Computer Sciences Corporation (CSC).",
        },
    ],
        color: "red",
    },
    
    
    //workshop4
    {
        id: "37",
        key: 1,
        status: 1,
        rules: [
        "Certificate will be given for the registered candidates who attend the workshop",
        "Participants are advised to bring their Laptops for the Hands-on Session (Mandatory for MERN Stack and AIML Workshops)",
        "For further details call : 7092469189"
    ],
        faq: [
        {
                question: "Will it happen online or offline?",
                answer: "Offline",
        },
        {
                question: "Will it be a one day workshop or two days?",
                answer: "One day, Time is mentioned above",
        },
        {
                question: "Can I get certificate?",
                answer: "Yes, Certificate will be provided in offline",
        },
    ],
        name: "Workshop4",
        title: "Artificial Intelligence and Machine Learning : Explore, Learn, and Build with Hands-On Experience",
       // venue: " IT213 or Auditorium",
        dateTime: " February 22, 2 pm to 4 pm",
        carddescription: "WORKSHOP",
        description: "Dive deep into the practical applications of Artificial Intelligence and Machine Learning in this interactive session. From building models to solving Real-World problems, explore the tools and techniques driving innovation. Whether you're just starting or looking to sharpen your skills, this journey will equip you with the knowledge and experience to succeed in the AI-driven future!",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary: workshop1,
    },
        contact: "7092469189",
        tags: ["Workshop"],
        entry: [
        "Single Workshop – Rs. 150/-",
        "Combo A – Two Workshops – Rs. 250/-",
        "Combo B – Three Workshops – Rs. 350/-",
        "Combo C – Four Workshops – Rs. 450/-"
    ],
        form: "https://forms.gle/eo9VSfU8uQQbRwac7",
        speakerinfo: "Dr. S. Kannimuthu is a Professor in the Department of Computer Science and Engineering at Karpagam College of Engineering and in-charge of the Center of Excellence in Algorithms and an IEEE Senior Member with over 17 years of Teaching and Industrial experience.",
        speakers: [
        {
                name: "Dr. S. Kannimuthu",
                bio: "Dr. S. Kannimuthu holds a PhD in Computer Science and Engineering, as well as an M.E. (CSE) and B.Tech (IT) from Anna University, Chennai. He has published 2 Books and 3 Book Chapters. Throughout his Career, he has delivered over 190 Guest Lectures. He also serves as a Mentor/Consultant for DeepLearning.AI, MaxByte Technologies, Dhanvi Info Tech and Hubino. He is an expert member of the AICTE Student Learning Assessment Project (ASLAP)",
        },
    ],
        color: "red",
    },
    



    // {
    //     id: "37",
    //     key: 1,
    //     status: 1,
    //     rules: [
    //         "Certificate will be given for the registered candidates",
    //         "Disocunts will be given for referrals",
    //         "For further details call : 9750935611",
    //     ],
    //     faq: [
    //         {
    //             question: "Will it happen online or offline?",
    //             answer: "Offline",
    //         },
    //         {
    //             question: "Will it be a one day workshop or two days?",
    //             answer: "One day, time is mentioned above",
    //         },
    //         {
    //             question: "Can I get any discount?",
    //             answer: "Yeah sure, contact us for further details",
    //         },
    //         {
    //             question: "Can I get certificate?",
    //             answer: "Yes, Certificate will be provided in offline",
    //         },
    //     ],
    //     name: "Workshop4",
    //     title: "Workshop on Machine learning and it's real time applications",
    //     venue: "IT211 or MBCH or LBCH",
    //     dateTime: "March 2, 10 am to 12 pm",
    //     carddescription: "Unlock Data's Potential: Discover Machine Learning Applications!",
    //     description:
    //         "Unlock the magic of real-time machine learning, transforming data into actionable insights. Predict trends, optimize operations, and unleash your data's full potential. Reserve your spot now for a transformative journey towards success!",
    //     type: "flagship",
    //     eligibility: "Anyone can join",
    //     pics: {
    //         primary:
    //             "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg",
    //     },
    //     contact: "9750935611",
    //     tags: [],
    //     entry: [
    //         "Single Workshop - Rs. 150/-",
    //         "Combo A - Two Workshops - Rs. 250/-",
    //         "Combo B - Three Workshops - Rs. 350/-",
    //         "Combo C - Four Workshops - Rs. 450/-"
    //     ],
    //     form: "https://docs.google.com/forms/u/4/d/1FyBdGuDfijIrVOUHxSZtsoDaR_hd7utw-lg3_-iSfHg/edit?usp=drivesdk&chromeless=1",
    //     speakerinfo:
    //         "Kiruthika embarked on her journey after completing her M.E. in Computer Science from Anna University. Passionate about pedagogy, she's now an Assistant Professor at KPR Institute of Engineering and Technology, with 6 years of experience and a focus on continuous growth. Kiruthika also serves as a Board member for Agenesinfo Omics Private Limited, Hyderabad.",
    //     speakers: [
    //         {
    //             name: "Kiruthika J K",
    //             bio: "Kiruthika J K is a dedicated educator with a passion for nurturing young minds. She holds key roles as InCharge of the Music Club, Student Event Coordinator, and Timetable Coordinator, showcasing her commitment to both academic and extracurricular excellence. Additionally, her expertise extends to spearheading the Machine Learning Special Lab, reflecting her keen interest and proficiency in Artificial Intelligence and Machine Learning.Ms. Kiruthika's work has been published in reputable journals and conference proceedings, including the IOP Conference Series and the Annals of the Romanian Society for Cell Biology.",
    //         },
    //     ],
    //     color: "red",
    // },



    // Webinar
    //Webinar 1
    {
        id: "38",
        key: 1,
        status: 1,
        s: 1,
        rules: [
                "E-certificate will be given for the registered candidates those who attend the webinar",
                "For further details call :7092469189",
        ],
        faq: [
                {
                question: "Will it happen online or offline?",
                answer: "Online",
                },
                {
                question: "Will it be a one day webinar or two days?",
                answer: "One day, time is mentioned above",
                },
                {
                question: "Can I get certificate?",
                answer: "Yes, e-certificate will be provided",
                },
        ],
        name: "Webinar1",
        title: "Generative AI: Create Beyond Imagination",
        dateTime: "February 21, 12 pm to 2 pm",
        carddescription: "WEBINAR",
        description: "Step into the World of Generative AI and discover how it’s reshaping creativity. Uncover the Tools, Techniques, and Strategies that are driving this revolutionary field. Whether you're an AI Enthusiast or looking to expand your knowledge, this session will show you how Generative AI is breaking boundaries and unlocking endless possibilities!",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary: "https://wisr.ai/wp-content/uploads/2023/02/cybersecurity-and-ai-work-together-1024x683.jpg",
        },
        contact: "7092469189",
        tags: ["Webinar"],
        entry: [
                "Single Webinar - Rs.100/-",
                "Combo A - Two Webinars - Rs.150/-",
        ],
        form: "https://forms.gle/4JWQNh2uDKvVVFpLA",
        speakerinfo: "Paramasivam Venkataramasamy is the Co-Founder & CTO of Trivecta Digital Solutions, with over 35 years of Industry experience. He has extensive hands-on experience in Multiple Technologies, Software Development Processes and tools.",
        speakers: [
                {
                name: "Paramasivam Venkataramasamy",
                bio: "Paramasivam Venkataramasamy holds a Master of Engineering (M.Eng.) in Computer Science from the National Institute of Technology (NIT), Tiruchirappalli and a Bachelor of Engineering (B.E.) from Bangalore University. Throughout his career, he has Co-Founded and led several Technology-driven companies, including Synaptris Inc. (CTO & Vice President), e-Brahma Technologies Pvt. Ltd. (Director & Co-Founder) and Kovai TDI Software Pvt. Ltd. (Managing Director & Co-Founder). He also served as an Associate Consultant at Tata Consultancy Services (TCS).",
                },
        ],
        color: "blue",
    },
    // Webinar 2
    {
        id: "39",
        key: 1,
        status: 1,
        s: 1,
        rules: [
                "E-certificate will be given for the registered candidates those who attend the webinar",
                "For further details call :7092469189",
        ],
        faq: [
                {
                question: "Will it happen online or offline?",
                answer: "Online",
                },
                {
                question: "Will it be a one day webinar or two days?",
                answer: "One day, time is mentioned above",
                },
                {
                question: "Can I get certificate?",
                answer: "Yes, e-certificate will be provided",
                },
        ],
        name: "Webinar2",
        title: "Demystifying Computer Vision and Digital Image Processing",
        dateTime: "February 21, 6 pm to 8 pm",
        carddescription: "WEBINAR",
        description: "Explore the world of Computer Vision and Image Processing in our exciting Webinar. Dive into techniques like Image Analysis, Feature Extraction and AI-powered Vision Systems. Learn how Technology helps machines understand visual data, opening doors to endless possibilities in the field!",
        type: "flagship",
        eligibility: "Anyone can join",
        pics: {
            primary: "https://dac.digital/wp-content/uploads/2023/03/what_are_the_practical_applications_of_modern_computer_vision_technology-optimized.jpg",
        },
        contact: "7092469189",
        tags: ["Webinar"],
        entry: [
                "Single Webinar - Rs.100/-",
                "Combo A - Two Webinars - Rs.150/-",
        ],
        form: "https://forms.gle/4JWQNh2uDKvVVFpLA",
        speakerinfo: "Dr. Anupama Namburu is an Associate Professor at the School of Engineering, Jawaharlal Nehru University, New Delhi, specializing in Digital Image Processing. She has delivered over 35 Lectures, authored 8 Textbooks and published around 30 International Journal papers.",
        speakers: [
                {
                name: "Dr. Anupama Namburu",
                bio: "Dr. Anupama Namburu holds a PhD in Digital Image Processing from Jawaharlal Nehru Technological University, Kakinada. With a strong academic background, she has served as an Associate Professor at Vellore Institute of Technology, an Assistant Professor at Acharya Nagarjuna University and as the Deputy Director of Student Welfare at VIT-AP University. She also has Industry experience as a Senior Software Engineer at Wipro Technologies.",
                },
        ],
        color: "blue",
    },
    // {
    //     id: "39",
    //     key: 1,
    //     status: 1,
    //     s: 1,
    //     rules: [
    //         "E-certificate will be given for the registered candidates",
    //         "Discounts will be given for referrals",
    //         "For further details call : 9750935611",
    //     ],
    //     faq: [
    //         {
    //             question: "Will it happen online or offline?",
    //             answer: "Online",
    //         },
    //         {
    //             question: "Will it be a one day webinar or two days?",
    //             answer: "One day, time is mentioned above",
    //         },
    //         {
    //             question: "Can I get any discount?",
    //             answer: "Yeah sure, contact us for further details",
    //         },
    //         {
    //             question: "Can I get certificate?",
    //             answer: "Yes, e-certificate will be provided",
    //         },
    //     ],
    //     name: "Webinar3",
    //     title: "Webinar on Master the art of GENAI : Build, Create and Innovate",
    //     dateTime: "March 2, 10 am to 12 pm",
    //     carddescription: "Explore, Create with GENAI",
    //     description:
    //         "Explore the realm of Generative AI with our interactive webinar! Unleash your imagination and build creative AI models with Hugging Face and OpenAI. Check out the form for further details.",
    //     type: "flagship",
    //     eligibility: "Anyone can join",
    //     pics: {
    //         primary:
    //             "https://kotaielectronics.com/wp-content/uploads/2024/01/on-device-generative-ai-with-sub-10-billion-parameter-models-1024x654.jpg",
    //     },
    //     contact: "9750935611",
    //     tags: [],
    //     entry: [
    //         "Single Webinar - Rs.100/-",
    //         "Combo A - Two Webinars - Rs.150/-",
    //         "Combo B - Three Webinars - Rs.250/-",
    //     ],
    //     form: "https://docs.google.com/forms/d/1CE2njtrsNWY4KX7vJWTH54-0x4OzV4QofIWp_gOnstI/edit?chromeless=1",
    //     speakerinfo:
    //         "Mohammad Sameer is a AWS Gen AI Developer by skills at Tata Consultancy services Ltd ( Acted as Vice Chair for IEEE Student chapter at JNTUGV CEV ,MIEEE,MIEEECS,MIEEEYP,MIEEEWIE).He is very passionate to make people learn about leading technologies like AI/ML/GEN AI/Ethical Hacking etc.Had done many workshop/webinars.",
    //     speakers: [
    //         {
    //             name: "Mohammad Sameer",
    //             bio: "Aravind has also filed for 10 patents with 6 grants and has over 10 publications in International conferences and journals.  He completed his PhD from the University of Kansas in 2007 and graduated from Coimbatore Institute of Technology in 2002 with a Bachelors in Computer Science.",
    //         },
    //     ],
    //     color: "red",
    // },

    ///////////////////////////////////////////////////////
    

];