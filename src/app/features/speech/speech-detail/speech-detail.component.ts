import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeechService } from 'src/app/core/services/speech.service';
import { Speech, SpeechResolved } from 'src/app/shared/models/speech';
import { ProductResolver } from '../speech-resolver.service';

@Component({
  selector: 'app-speech-detail',
  templateUrl: './speech-detail.component.html',
  styleUrls: ['./speech-detail.component.css']
})
export class SpeechDetailComponent implements OnInit {

  pageTitle = 'Speech Detail';
  speech: Speech;
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData: SpeechResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onSpeechRetrieved(resolvedData.speech);
  }
  

  onSpeechRetrieved(speech: Speech): void {
    this.speech = speech;

    if (this.speech) {
      this.pageTitle = `Speech Detail: ${this.speech.speechName}`;
    } else {
      this.pageTitle = 'No speech found';
    }
  }

}
