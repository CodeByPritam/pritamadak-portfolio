// Setup Resume Information
const _Resume = {
    app: {
        version: 'v1.0',
        system: {
            username: 'pritamadak',
            host: 'ubuntu',
            path: '~/portfolio',
            gitBranch: 'master'
        },
        creator: 'Pritam Adak',
    },
    about: {
        me: {
            prompt: 'show whoami --ascci',
            image: '../images/me.webp',
            do: 'Full-stack development.',
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
                _idx: 1,
                name: '@CodeByPritam/savefrom',
                desc: 'A lightweight and secure API, that delivers structured JSON responses from multiple video platforms without requiring user login.',
                githubLink: 'https://github.com/codebypritam/savefrom',
                duration: {
                    start: 'Feb, 2026',
                    end: 'Mar, 2026',
                },
                techStack: ['TypeScript', 'Hono + NodeJS'],
            },
            {
                _idx: 2,
                name: '@CodeByPritam/sportvibe',
                desc: 'A Reels platform dedicated for different sports.',
                githubLink: 'https://github.com/codebypritam/sportvibe',
                duration: {
                    start: 'April, 2026',
                    end: 'April, 2026',
                },
                techStack: ['NodeJS', 'ReactJS', 'ExpressJS', 'MongoDB', 'Cloudflare R2'],
            },
            {
                _idx: 3,
                name: '@imprintjs/imprintjs',
                desc: 'A strictly typed, JS based, open source browser fingerprint library. Featuring confidence scoring and built-in spoof detection, targeting 90%+ accuracy with weighted signals and fuzzy matching.',
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
            { _idx: 1, name: 'HTML', percentage: '80%', color: '#f0652a' },
            { _idx: 2, name: 'CSS', percentage: '80%', color: '#4db5e1' },
            { _idx: 3, name: 'JavaScript', percentage: '80%', color: '#f7df1e' },
            { _idx: 4, name: 'TypeScript', percentage: '60%', color: '#3178c6' },
            { _idx: 5, name: 'TailwindCSS', percentage: '40%', color: '#44a8b3' },
            { _idx: 6, name: 'NodeJS', percentage: '70%', color: '#539e43' },
            { _idx: 7, name: 'ReactJS', percentage: '60%', color: '#53c1de' },
            { _idx: 8, name: 'NextJS', percentage: '60%', color: '#ffffff' },
            { _idx: 9, name: 'PHP', percentage: '60%', color: '#8892bf' },
            { _idx: 10, name: 'Golang', percentage: '20%', color: '#00acd7' },
            { _idx: 11, name: 'Python', percentage: '80%', color: '#fdd435' },
            { _idx: 12, name: 'MySQL', percentage: '60%', color: '#00758f' },
            { _idx: 13, name: 'PostGreSQL', percentage: '60%', color: '#336791' },
            { _idx: 14, name: 'AWS', percentage: '80%', color: '#ff9900' },
            { _idx: 15, name: 'Docker', percentage: '50%', color: '#2396ed' },
            { _idx: 16, name: 'Cloudflare', percentage: '70%', color: '#f4811f' },
        ],
    },
}

// Export
export default Object.freeze(_Resume);