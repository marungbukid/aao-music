import { Song } from './song';

export type ScheduleSong = {
  id: number;
  songId: number;
  scheduleId: number;
  preferredKey?: string;
  song: Song;
  order: number;
}