export class Heroform {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    // alterEgp是可选的,注意其?问号
    public alterEgo?: string
  ) { }


}
