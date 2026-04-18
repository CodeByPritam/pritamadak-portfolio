// Export
export default {
    app: {
        version: 'v1.0',
        system: {
            username: 'pritamadak',
            host: 'arch',
            path: '~/portfolio',
            gitBranch: 'master'
        },
        creator: 'Pritam Adak',
    },
    about: {
        me: {
            prompt: 'show whoami --ascci',
            image: '../images/me.webp',
            do: 'Full-stack development',
            experience: '2 Years',
            openforwork: true,
            location: 'Kolkata, India',
        },
        desc: {
            prompt: 'cat desc.txt',
            text: 'Building things that live on the internet. I care deeply about clean architecture and making systems behave exactly as intended. Passionate about open-source, problem-solving, and constantly learning by building.',
        },
    },
    projects: {
        prompt: 'git log --all-projects',
        comment: '// 3f9c12 (HEAD → master, origin/master) feat: display all projects',
        items: [
            {
                _id: 1,
                name: '@CodeByPritam/savefrom',
                desc: 'A lightweight and secure API, that delivers structured JSON responses from multiple video platforms without requiring user login.',
                liveLink: '',
                githubLink: 'https://github.com/codebypritam/savefrom',
                duration: {
                    start: 'Feb, 2026',
                    end: 'Mar, 2026',
                },
                techStack: ['TypeScript', 'Hono + NodeJS'],
            },
            {
                _id: 2,
                name: '@CodeByPritam/sportvibe',
                desc: 'A Reels platform dedicated for different sports.',
                liveLink: '',
                githubLink: 'https://github.com/codebypritam/sportvibe',
                duration: {
                    start: 'April, 2026',
                    end: 'April, 2026',
                },
                techStack: ['NodeJS', 'ReactJS', 'ExpressJS', 'MongoDB', 'Cloudflare R2'],
            },
            {
                _id: 3,
                name: '@imprintjs/imprintjs',
                desc: 'A strictly typed, JS based, open source browser fingerprint library. Featuring confidence scoring and built-in spoof detection, targeting 90%+ accuracy with weighted signals and fuzzy matching.',
                liveLink: 'https://imprintjs.com',
                githubLink: 'https://github.com/imprintjs',
                duration: {
                    start: 'April, 2026',
                    end: 'Ongoing',
                },
                techStack: ['TypeScript'],
            },
        ],
    },
    skills: {
        prompt: 'ls --skills=proficiency',
        comment: '// drwxr-xr-x dev staff',
        items: [
            {
                name: 'HTML', 
                icon: '/icons/html.svg', 
                iconwidth: '16px', 
                percentage: '80%', 
                color: '#f0652a'
            },
            {
                name: 'CSS', 
                icon: '/icons/css.svg', 
                iconwidth: '16px',
                percentage: '75%', 
                color: '#4db5e1'
            },
            {
                name: 'JavaScript', 
                icon: '/icons/javascript.svg',
                iconwidth: '16px',
                percentage: '80%', 
                color: '#f7df1e'
            },
        ],
    },
}