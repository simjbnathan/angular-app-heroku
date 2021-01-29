import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Speech } from 'src/app/shared/models/speech';


export class SpeechData implements InMemoryDbService {

  createDb(): { speech: Speech[]} {
    const speech: Speech[] = [
      {
        id: 1,
        speechName: 'Leaf Rake',
        speechContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Euismod in pellentesque massa placerat duis ultricies lacus sed. Eget nunc lobortis mattis aliquam faucibus purus in. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Dictum non consectetur a erat nam at. Semper risus in hendrerit gravida rutrum quisque non. Netus et malesuada fames ac turpis. Enim ut tellus elementum sagittis vitae et leo duis. Consequat semper viverra nam libero justo. Facilisis sed odio morbi quis commodo odio aenean sed.',
        author: 'Jonathan Dazer',
        tags: ['family', 'friends', 'childhood', 'home'],
        speechDate: '2020-01-18',
      },
      {
        id: 2,
        speechName: 'Lorem Ipsum',
        speechContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Euismod in pellentesque massa placerat duis ultricies lacus sed. Eget nunc lobortis mattis aliquam faucibus purus in. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Dictum non consectetur a erat nam at. Semper risus in hendrerit gravida rutrum quisque non. Netus et malesuada fames ac turpis. Enim ut tellus elementum sagittis vitae et leo duis. Consequat semper viverra nam libero justo. Facilisis sed odio morbi quis commodo odio aenean sed.',
        author: 'Martin Luffy III',
        tags: ['family', 'friends', 'childhood', 'home'],
        speechDate: '2021-01-12',
      },
      {
        id: 5,
        speechName: 'Story of my life',
        speechContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Euismod in pellentesque massa placerat duis ultricies lacus sed. Eget nunc lobortis mattis aliquam faucibus purus in. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Dictum non consectetur a erat nam at. Semper risus in hendrerit gravida rutrum quisque non. Netus et malesuada fames ac turpis. Enim ut tellus elementum sagittis vitae et leo duis. Consequat semper viverra nam libero justo. Facilisis sed odio morbi quis commodo odio aenean sed.',
        author: 'Simon Cowell',
        tags: ['family', 'friends', 'childhood', 'home'],
        speechDate: '2008-10-18',
      },
      {
        id: 8,
        speechName: 'Graduation',
        speechContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Euismod in pellentesque massa placerat duis ultricies lacus sed. Eget nunc lobortis mattis aliquam faucibus purus in. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Dictum non consectetur a erat nam at. Semper risus in hendrerit gravida rutrum quisque non. Netus et malesuada fames ac turpis. Enim ut tellus elementum sagittis vitae et leo duis. Consequat semper viverra nam libero justo. Facilisis sed odio morbi quis commodo odio aenean sed.',
        author: 'Chad Smith',
        tags: ['family', 'friends', 'childhood', 'home'],
        speechDate: '2021-04-18',
      },
      {
        id: 10, 
        speechName: 'One Piece',
        speechContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Euismod in pellentesque massa placerat duis ultricies lacus sed. Eget nunc lobortis mattis aliquam faucibus purus in. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Dictum non consectetur a erat nam at. Semper risus in hendrerit gravida rutrum quisque non. Netus et malesuada fames ac turpis. Enim ut tellus elementum sagittis vitae et leo duis. Consequat semper viverra nam libero justo. Facilisis sed odio morbi quis commodo odio aenean sed.',
        author: 'Anthony Keides',
        tags: ['family', 'friends', 'childhood', 'home'],
        speechDate: '2021-01-18',
      }
    ];
    return { speech };
  }
}