import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./pager.component";
export class DataTableFooterComponent {
    constructor() {
        this.selectedCount = 0;
        this.page = new EventEmitter();
    }
    get isVisible() {
        return this.rowCount / this.pageSize > 1;
    }
    get curPage() {
        return this.offset + 1;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DataTableFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.6", type: DataTableFooterComponent, selector: "datatable-footer", inputs: { footerHeight: "footerHeight", rowCount: "rowCount", pageSize: "pageSize", offset: "offset", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon", totalMessage: "totalMessage", footerTemplate: "footerTemplate", selectedCount: "selectedCount", selectedMessage: "selectedMessage" }, outputs: { page: "page" }, host: { classAttribute: "datatable-footer" }, ngImport: i0, template: `
    <div
      class="datatable-footer-inner"
      [ngClass]="{ 'selected-count': selectedMessage }"
      [style.height.px]="footerHeight"
    >
      <ng-template
        *ngIf="footerTemplate"
        [ngTemplateOutlet]="footerTemplate.template"
        [ngTemplateOutletContext]="{
          rowCount: rowCount,
          pageSize: pageSize,
          selectedCount: selectedCount,
          curPage: curPage,
          offset: offset
        }"
      >
      </ng-template>
      <div class="page-count" *ngIf="!footerTemplate">
        <span *ngIf="selectedMessage"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>
        {{ rowCount?.toLocaleString() }} {{ totalMessage }}
      </div>
      <datatable-pager
        *ngIf="!footerTemplate"
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)"
      >
      </datatable-pager>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.DataTablePagerComponent, selector: "datatable-pager", inputs: ["pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "size", "count", "page"], outputs: ["change"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DataTableFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'datatable-footer',
                    template: `
    <div
      class="datatable-footer-inner"
      [ngClass]="{ 'selected-count': selectedMessage }"
      [style.height.px]="footerHeight"
    >
      <ng-template
        *ngIf="footerTemplate"
        [ngTemplateOutlet]="footerTemplate.template"
        [ngTemplateOutletContext]="{
          rowCount: rowCount,
          pageSize: pageSize,
          selectedCount: selectedCount,
          curPage: curPage,
          offset: offset
        }"
      >
      </ng-template>
      <div class="page-count" *ngIf="!footerTemplate">
        <span *ngIf="selectedMessage"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>
        {{ rowCount?.toLocaleString() }} {{ totalMessage }}
      </div>
      <datatable-pager
        *ngIf="!footerTemplate"
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)"
      >
      </datatable-pager>
    </div>
  `,
                    host: {
                        class: 'datatable-footer'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], propDecorators: { footerHeight: [{
                type: Input
            }], rowCount: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], offset: [{
                type: Input
            }], pagerLeftArrowIcon: [{
                type: Input
            }], pagerRightArrowIcon: [{
                type: Input
            }], pagerPreviousIcon: [{
                type: Input
            }], pagerNextIcon: [{
                type: Input
            }], totalMessage: [{
                type: Input
            }], footerTemplate: [{
                type: Input
            }], selectedCount: [{
                type: Input
            }], selectedMessage: [{
                type: Input
            }], page: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUE4Q2hHLE1BQU0sT0FBTyx3QkFBd0I7SUE1Q3JDO1FBd0RXLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBR2pCLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQVN4RDtJQVBDLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzhHQXZCVSx3QkFBd0I7a0dBQXhCLHdCQUF3QiwyZ0JBMUN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0NUOzsyRkFNVSx3QkFBd0I7a0JBNUNwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0NUO29CQUNELElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsa0JBQWtCO3FCQUMxQjtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OEJBRVUsWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFDRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUVHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFFSSxJQUFJO3NCQUFiLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGF0YWJsZUZvb3RlckRpcmVjdGl2ZSB9IGZyb20gJy4vZm9vdGVyLmRpcmVjdGl2ZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhdGFibGUtZm9vdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImRhdGF0YWJsZS1mb290ZXItaW5uZXJcIlxuICAgICAgW25nQ2xhc3NdPVwieyAnc2VsZWN0ZWQtY291bnQnOiBzZWxlY3RlZE1lc3NhZ2UgfVwiXG4gICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cImZvb3RlckhlaWdodFwiXG4gICAgPlxuICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgICpuZ0lmPVwiZm9vdGVyVGVtcGxhdGVcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJmb290ZXJUZW1wbGF0ZS50ZW1wbGF0ZVwiXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgICAgcm93Q291bnQ6IHJvd0NvdW50LFxuICAgICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcbiAgICAgICAgICBzZWxlY3RlZENvdW50OiBzZWxlY3RlZENvdW50LFxuICAgICAgICAgIGN1clBhZ2U6IGN1clBhZ2UsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXRcbiAgICAgICAgfVwiXG4gICAgICA+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtY291bnRcIiAqbmdJZj1cIiFmb290ZXJUZW1wbGF0ZVwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInNlbGVjdGVkTWVzc2FnZVwiPiB7eyBzZWxlY3RlZENvdW50Py50b0xvY2FsZVN0cmluZygpIH19IHt7IHNlbGVjdGVkTWVzc2FnZSB9fSAvIDwvc3Bhbj5cbiAgICAgICAge3sgcm93Q291bnQ/LnRvTG9jYWxlU3RyaW5nKCkgfX0ge3sgdG90YWxNZXNzYWdlIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkYXRhdGFibGUtcGFnZXJcbiAgICAgICAgKm5nSWY9XCIhZm9vdGVyVGVtcGxhdGVcIlxuICAgICAgICBbcGFnZXJMZWZ0QXJyb3dJY29uXT1cInBhZ2VyTGVmdEFycm93SWNvblwiXG4gICAgICAgIFtwYWdlclJpZ2h0QXJyb3dJY29uXT1cInBhZ2VyUmlnaHRBcnJvd0ljb25cIlxuICAgICAgICBbcGFnZXJQcmV2aW91c0ljb25dPVwicGFnZXJQcmV2aW91c0ljb25cIlxuICAgICAgICBbcGFnZXJOZXh0SWNvbl09XCJwYWdlck5leHRJY29uXCJcbiAgICAgICAgW3BhZ2VdPVwiY3VyUGFnZVwiXG4gICAgICAgIFtzaXplXT1cInBhZ2VTaXplXCJcbiAgICAgICAgW2NvdW50XT1cInJvd0NvdW50XCJcbiAgICAgICAgW2hpZGRlbl09XCIhaXNWaXNpYmxlXCJcbiAgICAgICAgKGNoYW5nZSk9XCJwYWdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8L2RhdGF0YWJsZS1wYWdlcj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZGF0YXRhYmxlLWZvb3RlcidcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlRm9vdGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZm9vdGVySGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIHJvd0NvdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBhZ2VTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIG9mZnNldDogbnVtYmVyO1xuICBASW5wdXQoKSBwYWdlckxlZnRBcnJvd0ljb246IHN0cmluZztcbiAgQElucHV0KCkgcGFnZXJSaWdodEFycm93SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBwYWdlclByZXZpb3VzSWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBwYWdlck5leHRJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvdGFsTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBmb290ZXJUZW1wbGF0ZTogRGF0YXRhYmxlRm9vdGVyRGlyZWN0aXZlO1xuXG4gIEBJbnB1dCgpIHNlbGVjdGVkQ291bnQgPSAwO1xuICBASW5wdXQoKSBzZWxlY3RlZE1lc3NhZ2U6IHN0cmluZyB8IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHBhZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm93Q291bnQgLyB0aGlzLnBhZ2VTaXplID4gMTtcbiAgfVxuXG4gIGdldCBjdXJQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0ICsgMTtcbiAgfVxufVxuIl19