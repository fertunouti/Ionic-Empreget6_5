
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss'],
})


export class PaginacaoComponent implements OnInit {
  @Input() currentPage!: number;
  @Input() totalPages!: number;

  @Output() pageChange = new EventEmitter<number>();
  pages: number[] = [];
  selectedPage!: number;

  constructor() {

    this.generatePages();
  }

  ngOnInit(): void {
  
  }

  generatePages() {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }
  goToFirstPage() {
    this.pageChange.emit(0);
  }

  goToLastPage() {
    this.pageChange.emit(this.totalPages - 1);
  }
  goToPage(page: number) {
    this.pageChange.emit(page);
  }
  goToSelectedPage() {
    this.pageChange.emit(this.selectedPage);
  }
}

