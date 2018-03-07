/**
 * Listing 1-73. Properties and methods
 */

class Song {
  constructor(private artist: string, private title: string) {}
}

class PlayList {
  private songs: Song[] = [];
  public static readonly maxCount: number = 3;

  constructor(public name: string) {}

  add(song: Song): Song {
    if (this.songs.length >= PlayList.maxCount) {
      throw new Error("Playlist is full.");
    }

    this.songs.push(song);
    return song;
  }

  static from() {
    console.log(this.maxCount); // tslint:disable-line

    /* 静态方法里面只能访问静态属性 */
    /*
        /!* TS2339: Property 'name' does not exist on type 'typeof PlayList'. *!/
        console.log(this.name); // tslint:disable-line
    */
  }
}

const playList = new PlayList("my playlist 01");

playList.add(new Song("周杰伦", "等你下课"));
playList.add(new Song("林俊杰", "江南"));
playList.add(new Song("潘玮柏", "我的麦克风"));

console.log("playList.name:", playList.name); // tslint:disable-line
console.log("PlayList.maxCount:", PlayList.maxCount); // tslint:disable-line

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
