export interface IErrendCard {
  _id: string;
  approved: boolean;
  assignedTo: string;
  description: string;
  background: string;
  files: File[] | undefined;
  email: string;
  part: string;
  solvesWhat: string;
  reproduce: string;
  status: string;
}
