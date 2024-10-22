import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = [
    { title: 'Music', artist: 'Golden', album: 'Abood' },
    { title: 'Music', artist: 'Golden', album: 'Abood' },
    { title: 'Music', artist: 'Golden', album: 'Abood' },
    { title: 'Music', artist: 'Golden', album: 'Abood' },
    { title: 'Music', artist: 'Golden', album: 'Abood' },
    { title: 'Music', artist: 'Golden', album: 'Abood' },
    { title: 'Music', artist: 'Golden', album: 'Abood' },
  ];

  create(song) {
    this.songs.push(song);
  }

  findAll() {
    return this.songs;
  }
}
