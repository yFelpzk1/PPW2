

export class Discipline {
  DISCIPLINE_ID: number;
  NAME: string;
  DESCRIPTION: string;

  constructor(id: number, name: string, description: string) {
    this.DISCIPLINE_ID = id;
    this.NAME = name;
    this.DESCRIPTION = description;
  }
}