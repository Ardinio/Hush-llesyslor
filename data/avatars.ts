import { Avatar } from '../entities/Avatar';

export const AllAvatars: Avatar[] = [
  {
    Id: 1,
    Path: require('../assets/avatars/fox.png'),
    Color: '#ffa71b'
  },
  {
    Id: 2,
    Path: require('../assets/avatars/chicken.png'),
    Color: '#ffff00'
  },
  {
    Id: 3,
    Path: require('../assets/avatars/dolphin.png'),
    Color: '#3100ff'
  },
  {
    Id: 4,
    Path: require('../assets/avatars/pig.png'),
    Color: '#ff99cc'
  },
  {
    Id: 5,
    Path: require('../assets/avatars/frog.png'),
    Color: '#c5f404'
  },
  {
    Id: 6,
    Path: require('../assets/avatars/octopus.png'),
    Color: '#876635'
  },
  {
    Id: 7,
    Path: require('../assets/avatars/owl.png'),
    Color: '#848484'
  },
  {
    Id: 8,
    Path: require('../assets/avatars/unicorn.png'),
    Color: '#aec9fe'
  }
];

export function singleAvatarPath(id: number): any {
  const find = AllAvatars.find((x) => x.Id === id);
  return find?.Path;
}

export function singleAvatarById(id: number): Avatar {
  return AllAvatars.find((x) => x.Id === id) ?? {Id: -1, Path: '', Color: '#ffffff'};
}
