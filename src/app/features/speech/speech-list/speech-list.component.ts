import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeechService } from 'src/app/core/services/speech.service';
import { Speech } from 'src/app/shared/models/speech';

@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.css']
})
export class SpeechListComponent implements OnInit {

  pageTitle = 'View my speeches list';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredSpeech = this.listFilter ? this.performFilter(this.listFilter) : this.speech;
  }

  filteredSpeech: Speech[] = [];
  speech: Speech[] = [];

  constructor(private speechService: SpeechService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';
    this.speechService.getSpeeches().subscribe({
      next: speech => {
        this.speech = speech;
        this.filteredSpeech = this.performFilter(this.listFilter);
      },
      error: err => this.errorMessage = err
    });
  }

  performFilter(filterBy: string): Speech[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.speech.filter((speech: Speech) =>
      speech.speechName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
