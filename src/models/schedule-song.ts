import { Song } from './song';

export type ScheduleSong = {
  id: number;
  songId: number;
  scheduleId: number;
  song: Song;
  order: number;
}