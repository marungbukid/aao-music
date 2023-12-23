import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import ChordSheetJS from 'chordsheetjs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const possibleNotes = [
  'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'
];

export function determineMusicKey(chordSheet: string) {

  const scales = [{
    name: 'maj',
    int: [2, 4, 5, 7, 9, 11]
  }, {
    name: 'min',
    int: [2, 3, 5, 7, 8, 11]
  }];

  const pattern = '\\b[CDEFGAB](b|bb|#)?(m|maj7|maj|min7|min|sus|add)?(1|2|3|4|5|6|7|8|9)?\\b(#)?';
  const regex = new RegExp(pattern, 'g')
  const notes = chordSheet.match(regex);

  if (!notes) return null;

  let bestGuess: {
    score: number,
    key?: string,
    type?: string
  }[] = [{
    score: 0
  }];

  const noteIndex = (index: number) => index < possibleNotes.length ? index : index - possibleNotes.length;

  console.log(notes)
  notes.forEach((note, index) => {
    scales.forEach(scale => {
      let score = 0;

      score += possibleNotes.indexOf(note) != -1 ? 1 : 0;
      scale.int.forEach(noteInt => {
        score += possibleNotes.indexOf(notes[noteIndex(noteInt + index)]) != -1 ? 1 : 0;
      })

      if (bestGuess[0].score < score) {
        bestGuess = [{
          score: score,
          key: note,
          type: scale.name
        }]
      } else if (bestGuess[0].score === score) {
        bestGuess.push({
          score: score,
          key: note,
          type: scale.name
        })
      }
    })
  })

  return bestGuess;
}

export function chordSheetParserFactory(chordSheetType: string) {
  switch (chordSheetType) {
    case 'chordsOverWords': return new ChordSheetJS.ChordsOverWordsParser()
    case 'chordPro': return new ChordSheetJS.ChordProParser()
    case 'ultimateGuitar': return new ChordSheetJS.UltimateGuitarParser();
    default: return new ChordSheetJS.ChordProParser()
  }
}