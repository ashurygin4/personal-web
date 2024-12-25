import { v4 as uuidv4 } from 'uuid'

export const data = {
  header: {
    logo: 'Personal',
    navigation: [
      {
        id: uuidv4(),
        text: 'About Me',
        link: '#',
      },
      {
        id: uuidv4(),
        text: 'Skills',
        link: '#',
      },
      {
        id: uuidv4(),
        text: 'Project',
        link: '#',
      },
      {
        id: uuidv4(),
        text: 'Contact Me',
        link: '#',
      },
    ],
    button: {
      text: 'Resume',
      link: '#',
    },
  },
}
