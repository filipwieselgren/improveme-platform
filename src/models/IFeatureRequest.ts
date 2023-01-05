interface IFeatureRequest {
  _id: string;
  description: string;
  solvesWhat: string;
  part: string;
  email: string;
  approved: boolean;
  status: string;
  assignedTo: string;
}

export default IFeatureRequest;
