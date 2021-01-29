import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/core/services/message.service';
import { SpeechService } from 'src/app/core/services/speech.service';
import { Speech, SpeechResolved } from 'src/app/shared/models/speech';

@Component({
  selector: 'app-speech-edit',
  templateUrl: './speech-edit.component.html',
  styleUrls: ['./speech-edit.component.css']
})
export class SpeechEditComponent implements OnInit {

  pageTitle = 'Speech Edit';
  errorMessage: string;
  newTags = '';

  speech: Speech;

  constructor(private speechService: SpeechService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      const resolvedData: SpeechResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.onSpeechRetrieved(resolvedData.speech);
    })
  }

  getSpeech(id: number): void {
    this.speechService.getSpeech(id).subscribe({
      next: speech => this.onSpeechRetrieved(speech),
      error: err => this.errorMessage = err
    });
  }

  onSpeechRetrieved(speech: Speech): void {
    this.speech = speech;

    if (!this.speech) {
      this.pageTitle = 'No speech found';
    } else {
      if (this.speech.id === 0) {
        this.pageTitle = 'Add Speech';
      } else {
        this.pageTitle = `Edit Speech: ${this.speech.speechName}`;
      }
    }
  }

  deleteSpeech(): void {
    if (this.speech.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.speech.speechName} was deleted`);
    } else {
      if (confirm(`Really delete the speech: ${this.speech.speechName}?`)) {
        this.speechService.deleteSpeech(this.speech.id).subscribe({
          next: () => this.onSaveComplete(`${this.speech.speechName} was deleted`),
          error: err => this.errorMessage = err
        });
      }
    }
  }

  saveSpeech(): void {
    if (true === true) {
      if (this.speech.id === 0) {
        this.speechService.createSpeech(this.speech).subscribe({
          next: () => this.onSaveComplete(`The new ${this.speech.speechName} was saved`),
          error: err => this.errorMessage = err
        });
      } else {
        this.speechService.updateSpeech(this.speech).subscribe({
          next: () => this.onSaveComplete(`The updated ${this.speech.speechName} was saved`),
          error: err => this.errorMessage = err
        });
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(message?: string): void {
    if (message) {
      this.messageService.addMessage(message);
    }

    // Navigate back to the speech list
    this.router.navigate(['/speeches'])
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
  
  // Add the defined tags
  addTags(): void {
    if (!this.newTags) {
      this.errorMessage = 'Enter the search keywords separated by commas and then press Add';
    } else {
      const tagArray = this.newTags.split(',');
      this.speech.tags = this.speech.tags ? this.speech.tags.concat(tagArray) : tagArray;
      this.newTags = '';
      this.errorMessage = '';
    }
  }

  // Remove the tag from the array of tags.
  removeTag(idx: number): void {
    this.speech.tags.splice(idx, 1);
  }
}
