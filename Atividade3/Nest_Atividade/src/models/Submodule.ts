
export class Submodule {
  SUBMODULE_ID: number;
  MODULE_ID: number; 
  TITLE: string;
  EXPLANATION: string;

  constructor(id: number, moduleId: number, title: string, explanation: string) {
    this.SUBMODULE_ID = id;
    this.MODULE_ID = moduleId;
    this.TITLE = title;
    this.EXPLANATION = explanation;
  }
}