import { ScheduleSong } from './schedule-song';

export type Schedule = {
  id: number;
  date: Date;
  scheduleSongs: ScheduleSong[];
};
