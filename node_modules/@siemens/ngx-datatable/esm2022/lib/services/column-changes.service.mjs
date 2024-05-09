import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */
export class ColumnChangesService {
    constructor() {
        this.columnInputChanges = new Subject();
    }
    get columnInputChanges$() {
        return this.columnInputChanges.asObservable();
    }
    onInputChange() {
        this.columnInputChanges.next(undefined);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ColumnChangesService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ColumnChangesService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ColumnChangesService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWNoYW5nZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2xpYi9zZXJ2aWNlcy9jb2x1bW4tY2hhbmdlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFM0M7OztHQUdHO0FBRUgsTUFBTSxPQUFPLG9CQUFvQjtJQURqQztRQUVVLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFhLENBQUM7S0FTdkQ7SUFQQyxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs4R0FUVSxvQkFBb0I7a0hBQXBCLG9CQUFvQjs7MkZBQXBCLG9CQUFvQjtrQkFEaEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIHNlcnZpY2UgdG8gbWFrZSBEYXRhdGFibGVDb21wb25lbnQgYXdhcmUgb2YgY2hhbmdlcyB0b1xuICogaW5wdXQgYmluZGluZ3Mgb2YgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2x1bW5DaGFuZ2VzU2VydmljZSB7XG4gIHByaXZhdGUgY29sdW1uSW5wdXRDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dW5kZWZpbmVkPigpO1xuXG4gIGdldCBjb2x1bW5JbnB1dENoYW5nZXMkKCk6IE9ic2VydmFibGU8dW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uSW5wdXRDaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgb25JbnB1dENoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtbklucHV0Q2hhbmdlcy5uZXh0KHVuZGVmaW5lZCk7XG4gIH1cbn1cbiJdfQ==