import { Avatar } from '../entities/Avatar';

export const AllAvatars: Avatar[] = [
  {
    Id: '0',
    Path: require('../assets/logo.png'),
    Color: 'white',
    Emoji: "Välj Din Avatar!"
  },
  {
    Id: '1',
    Path: require('../assets/avatars/fox.png'),
    Color: '#ffa71b',
    Emoji: "🦊",
  },
  {
    Id: '2',
    Path: require('../assets/avatars/chicken.png'),
    Color: '#ffff00',
    Emoji: "🐥",
  },
  {
    Id: '3',
    Path: require('../assets/avatars/dolphin.png'),
    Color: '#3100ff',
    Emoji: "🐬",
  },
  {
    Id: '4',
    Path: require('../assets/avatars/pig.png'),
    Color: '#ff99cc',
    Emoji: "🐷",
  },
  {
    Id: '5',
    Path: require('../assets/avatars/frog.png'),
    Color: '#c5f404',
    Emoji: "🐸",
  },
  {
    Id: '6',
    Path: require('../assets/avatars/octopus.png'),
    Color: '#876635',
    Emoji: "🐙",
  },
  {
    Id: '7',
    Path: require('../assets/avatars/owl.png'),
    Color: '#848484',
    Emoji: "🦉",
  },
  {
    Id: '8',
    Path: require('../assets/avatars/unicorn.png'),
    Color: '#aec9fe',
    Emoji: "🦄",
  }
];

export function singleAvatarPath(id: string): any {
  const find = AllAvatars.find((x) => x.Id === id);
  return find?.Path;
}

export function singleAvatarById(id: string): Avatar {
  return AllAvatars.find((x) => x.Id === id) ?? { Id: '', Path: '', Color: '#ffffff', Emoji: '' };
}
