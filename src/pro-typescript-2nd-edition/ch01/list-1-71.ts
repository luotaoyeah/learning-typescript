/**
 * Listing 1-71. Constructors
 */

class Song {
  private artist: string;
  private title: string;

  constructor(artist: string, title: string) {
    this.artist = artist;
    this.title = title;
  }

  play() {
    console.log(`歌曲：《${this.title}》，演唱：${this.artist}`);
  }
}

class Jukebox {
  constructor(private songs: Song[]) {}

  play() {
    const song = this.getRandomSong();
    song.play();
  }

  getRandomSong(): Song {
    return this.songs[Math.floor(Math.random() * this.songs.length)];
  }
}

const songs: Song[] = [
  new Song("周杰伦", "等你下课"),
  new Song("林俊杰", "江南"),
  new Song("潘玮柏", "我的麦克风")
];

const jukebox = new Jukebox(songs);
jukebox.play();

export {};
