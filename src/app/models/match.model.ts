export interface Match {
  id: string;
  competitionId?: string;
  date: string;
  competitorA: string;
  competitorB: string;
  scoreA: number;
  scoreB: number;
  warnings?: any[];
  penalties?: any[];
}
