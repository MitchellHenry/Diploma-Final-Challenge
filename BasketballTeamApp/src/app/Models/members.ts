export class Members {
  id: number
    email: string;
    name:string;
    dob: Date;
    password: string;
    status: string;
    role: string
    constructor(ID: number,Email:string,Name:string,Dob:Date,Password:string,Status:string,Role:string){
      this.id = ID
      this.email = Email
      this.name = Name
      this.dob = Dob
      this.password = Password
      this.status = Status
      this.role = Role
    }
}
