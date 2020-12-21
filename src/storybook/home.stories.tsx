import { Story, Meta } from '@storybook/react/types-6-0';

import Home from '../pages/index';
import { IUser } from '../pages/api/interfaces';

export default {
  title: 'Home',
  component: Home,
  argTypes: {
    titlePage: {
      name: 'Título da página',
      type: 'string',
      description: 'Título da página',
    },
    githubInfos: {
      name: 'Github',
      type: 'object',
    },
    prismicInfos: {
      name: 'Prismic',
      type: 'object',
    },
  },
  args: {
    titlePage: 'Gerenciador de Links',
    githubInfos: {
      avatar_url:
        'https://www.flaticon.com/svg/static/icons/svg/3003/3003035.svg',
      name: 'Carlos Eduardo',
      bio: 'Desenvolvedor Web',
    },
    prismicInfos: [
      {
        primary: {
          name: 'Rede Sociais',
          link: {
            url: 'string',
          },
        },
        slice_type: 'secao1',
      },
      {
        primary: {
          name: 'Facebook',
          link: {
            url: 'https://pt-br.facebook.com/',
          },
        },
        slice_type: 'secao',
      },
      {
        primary: {
          name: 'Instagram',
          link: {
            url: 'https://www.instagram.com/',
          },
        },
        slice_type: 'secao',
      },
      {
        primary: {
          name: 'Twitter',
          link: {
            url: 'https://twitter.com/',
          },
        },
        slice_type: 'secao',
      },
      {
        primary: {
          name: 'YouTube',
          link: {
            url: 'https://www.youtube.com/',
          },
        },
        slice_type: 'secao',
      },
    ],
  },
} as Meta;

export const Default: Story<IUser> = args => <Home {...args} />;
