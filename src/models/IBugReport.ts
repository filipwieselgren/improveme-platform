export interface IBugReport {
  _id: string;
  description: string;
  background: string;
  part: string;
  reproduce: string;
  files: File[] | undefined;
  email: string;
  approved: Boolean;
  status: string;
  assignedTo: string;
}

// export interface IFiles {
//   lastModified: number;
//   lastModifiedDate: string;
//   name: string;
//   size: number;
//   type: string;
//   webkitRelativePath: string;
// }

export class Files {
  file: FileList | null;
  constructor(file: FileList | null) {
    this.file = file;
  }
}
