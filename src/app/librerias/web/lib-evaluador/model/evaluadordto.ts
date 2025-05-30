export type EvaluadorDTO = {
  idProblema: number;
  idEstudiante: number;
  problemName: string;
  outputs: string[][];
  inputs: string[][];
  timeLimit: number;
  content: string;
};
