import tweetme from '../../assets/projects_images/tweetme.PNG'
import TODO from '../../assets/projects_images/todo-app.png'
import LINUX from '../../assets/projects_images/linux-driver-fix.png'
import CHATAPP from '../../assets/projects_images/chat-app.png'


const data_projects = [
    {
        name: 'Chat room app',
        image: CHATAPP,
        deployed_url: 'https://chat-proj-403f3.web.app',
        github_url: 'https://github.com/elasaadGrillMsater/chat-app',
        category: ['react.js']
    },

    {
        name: 'Todo app ',
        image: TODO,
        deployed_url: 'https://my-todo-app-6c747.web.app/',
        github_url: 'https://github.com/elasaadGrillMsater/my-todo-app',
        category: ['react.js']
    },

    {
        name: 'linux driver fix',
        image: LINUX,
        deployed_url: 'https://youtu.be/tHBK4ix8BCg',
        github_url: 'https://github.com/elasaadGrillMsater/linux-sound-driver-fix',
        category: ['linux']
    },

    {
        name: 'crude app',
        image: tweetme,
        deployed_url: 'deployed link',
        github_url: 'github link',
        category: ['node.js', 'react','mongoDB']
    },

]

export default data_projects;