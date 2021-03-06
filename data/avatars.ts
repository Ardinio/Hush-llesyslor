import { Avatar } from '../entities/Avatar';

export const AllAvatars: Avatar[] = [
  {
    Id: '0',
    Path: require('../assets/logo.png'),
    Color: 'white',
    Emoji: "Vรคlj Din Avatar!"
  },
  {
    Id: '1',
    Path: require('../assets/avatars/fox.png'),
    Color: '#ffa71b',
    Emoji: "๐ฆ",
  },
  {
    Id: '2',
    Path: require('../assets/avatars/chicken.png'),
    Color: '#ffff00',
    Emoji: "๐ฅ",
  },
  {
    Id: '3',
    Path: require('../assets/avatars/dolphin.png'),
    Color: '#3100ff',
    Emoji: "๐ฌ",
  },
  {
    Id: '4',
    Path: require('../assets/avatars/pig.png'),
    Color: '#ff99cc',
    Emoji: "๐ท",
  },
  {
    Id: '5',
    Path: require('../assets/avatars/frog.png'),
    Color: '#c5f404',
    Emoji: "๐ธ",
  },
  {
    Id: '6',
    Path: require('../assets/avatars/octopus.png'),
    Color: '#876635',
    Emoji: "๐",
  },
  {
    Id: '7',
    Path: require('../assets/avatars/owl.png'),
    Color: '#848484',
    Emoji: "๐ฆ",
  },
  {
    Id: '8',
    Path: require('../assets/avatars/unicorn.png'),
    Color: '#aec9fe',
    Emoji: "๐ฆ",
  }
];

export function singleAvatarPath(id: string): any {
  const find = AllAvatars.find((x) => x.Id === id);
  return find?.Path;
}

export function singleAvatarById(id: string): Avatar {
  return AllAvatars.find((x) => x.Id === id) ?? { Id: '', Path: '', Color: '#ffffff', Emoji: '' };
}
