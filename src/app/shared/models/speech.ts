/* Defines the speech entity */
export interface Speech {
    id: number;
    speechName: string;
    speechContent: string;
    author: string;
    tags?: string[];
    speechDate: string;
  }
  
  export interface SpeechResolved {
    speech: Speech;
    error?: any;
  }