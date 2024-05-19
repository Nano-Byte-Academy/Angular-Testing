import { Injectable } from '@angular/core';

export interface Author {
  id: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  isBookValid: boolean = true;
  author!: Author;

  constructor() { }
}
