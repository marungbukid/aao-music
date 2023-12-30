import { ScheduleSong } from './schedule-song';
import { SongLead } from './song-lead';

export type Schedule = {
  id: number;
  date: Date;
  scheduleSongs: ScheduleSong[];
  songLeadId: number;
  songLead: SongLead;
  locationId: number;
};
