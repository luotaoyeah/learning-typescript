/**
 * Listing 1-73. Properties and methods
 */

class Song {
  constructor(private artist: string, private title: string) {}
}

// tslint:disable-next-line:max-classes-per-file
class PlayList {
  public static readonly maxCount: number = 3;

  public static from() {
    console.log(this.maxCount);

    /* 静态方法里面只能访问静态属性 */
    /*
        /!* TS2339: Property 'name' does not exist on type 'typeof PlayList'. *!/
        console.log(this.name);
    */
  }

  private songs: Array<Song> = [];

  constructor(public name: string) {}

  public add(song: Song): Song {
    if (this.songs.length >= PlayList.maxCount) {
      throw new Error("Playlist is full.");
    }

    this.songs.push(song);
    return song;
  }
}

const playList = new PlayList("my playlist 01");

playList.add(new Song("周杰伦", "等你下课"));
playList.add(new Song("林俊杰", "江南"));
playList.add(new Song("潘玮柏", "我的麦克风"));

console.log("playList.name:", playList.name);
console.log("PlayList.maxCount:", PlayList.maxCount);

/*
/!* TS2540: Cannot assign to 'maxCount' because it is a constant or a read-only property. *!/
PlayList.maxCount = 4;
*/

/*
/!* Uncaught Error: Playlist is full. *!/
playList.add(new Song('AA', 'BB'));
*/

PlayList.from();

export {};
