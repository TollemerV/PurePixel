export class TextualContent {
  public content: string;
  public key: string;

  public constructor(key: string, content: string) {
    this.key = key;
    this.content = content;
  }
}
