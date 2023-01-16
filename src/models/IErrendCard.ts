export interface IErrendCard {
  _id: string;
  approved: boolean;
  assignedTo: string;
  description: string;
  background: string;
  files: IFile[];
  email: string;
  part: string;
  solvesWhat: string;
  reproduce: string;
  status: string;
}

export interface IFile {
  file: string;
}
