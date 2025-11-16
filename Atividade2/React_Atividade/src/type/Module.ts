
export class Module {
  MODULE_ID: number;
  DISCIPLINE_ID: number; 
  TITLE: string;
  DESCRIPTION: string;

  constructor(id: number, disciplineId: number, title: string, description: string) {
    this.MODULE_ID = id;
    this.DISCIPLINE_ID = disciplineId;
    this.TITLE = title;
    this.DESCRIPTION = description;
  }
}