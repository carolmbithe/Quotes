export class Quote {
  public showAuthor: boolean;

    constructor(public id:number,public quote:string,public author:string,public person:string){
      this.showAuthor=true
    }
  }
  
  // ,public createdTime:Date
  
//   ,public votes:number