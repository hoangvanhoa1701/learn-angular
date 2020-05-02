export class Todo {
  // // c1
  // id: number; //timestamp
  // content: string;
  // isCompleted: boolean;

  // constructor(id: number, content: string){
  //   this.id = id;
  //   this.content = content;
  //   this.isCompleted = false;
  // }


  // // c2
  constructor(
    public id: number,
    public content: string,
    public isCompleted: boolean = false
  ){}
}
