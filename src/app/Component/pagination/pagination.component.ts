import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
    selector: 'pagination-controls',
    standalone: true,
    templateUrl: './pagination.component.html',
    imports: [CommonModule, LucideAngularModule],
    providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class NGXPagination {
    @Input() currentPage!: number;
    @Input() itemsPerPage: number = 3;
    @Input() total!: number;
    @Input() boundryLinks: boolean = false;
    @Input() darkLinks: boolean = false;
    @Input() previousLabel: string = 'false';
    @Input() nextLabel: string = 'false';
    @Output() pageChanged = new EventEmitter<number>();
    totalPages: number = 0;

    constructor() {
    }

    ngOnInit() {
        this.totalPages = Math.ceil(this.total / this.itemsPerPage);
    }

    get pages(): number[] {
        return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    }

    changePage(pageNumber: number): void {
        if (pageNumber >= 1 && pageNumber <= this.totalPages) {
            this.pageChanged.emit(pageNumber);
        }
    }

    isPrevDisabled(): boolean {
        return this.currentPage === 1;
    }

    isNextDisabled(): boolean {
        return this.currentPage === this.totalPages;
    }
}
