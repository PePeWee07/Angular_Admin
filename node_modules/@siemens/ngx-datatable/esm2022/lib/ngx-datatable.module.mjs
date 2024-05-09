import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollbarHelper } from './services/scrollbar-helper.service';
import { DimensionsHelper } from './services/dimensions-helper.service';
import { ColumnChangesService } from './services/column-changes.service';
import { DataTableFooterTemplateDirective } from './components/footer/footer-template.directive';
import { VisibilityDirective } from './directives/visibility.directive';
import { DraggableDirective } from './directives/draggable.directive';
import { ResizeableDirective } from './directives/resizeable.directive';
import { OrderableDirective } from './directives/orderable.directive';
import { LongPressDirective } from './directives/long-press.directive';
import { ScrollerComponent } from './components/body/scroller.component';
import { DatatableComponent } from './components/datatable.component';
import { DataTableColumnDirective } from './components/columns/column.directive';
import { DataTableHeaderComponent } from './components/header/header.component';
import { DataTableHeaderCellComponent } from './components/header/header-cell.component';
import { DataTableBodyComponent } from './components/body/body.component';
import { DataTableFooterComponent } from './components/footer/footer.component';
import { DataTablePagerComponent } from './components/footer/pager.component';
import { ProgressBarComponent } from './components/body/progress-bar.component';
import { DataTableBodyRowComponent } from './components/body/body-row.component';
import { DataTableRowWrapperComponent } from './components/body/body-row-wrapper.component';
import { DatatableRowDetailDirective } from './components/row-detail/row-detail.directive';
import { DatatableGroupHeaderDirective } from './components/body/body-group-header.directive';
import { DatatableRowDetailTemplateDirective } from './components/row-detail/row-detail-template.directive';
import { DataTableBodyCellComponent } from './components/body/body-cell.component';
import { DataTableSelectionComponent } from './components/body/selection.component';
import { DataTableColumnHeaderDirective } from './components/columns/column-header.directive';
import { DataTableColumnCellDirective } from './components/columns/column-cell.directive';
import { DataTableColumnGhostCellDirective } from './components/columns/column-ghost-cell.directive';
import { DataTableColumnCellTreeToggle } from './components/columns/tree.directive';
import { DatatableFooterDirective } from './components/footer/footer.directive';
import { DatatableGroupHeaderTemplateDirective } from './components/body/body-group-header-template.directive';
import { DataTableSummaryRowComponent } from './components/body/summary/summary-row.component';
import { DataTableGhostLoaderComponent } from './components/body/ghost-loader/ghost-loader.component';
import { DisableRowDirective } from './directives/disable-row.directive';
import * as i0 from "@angular/core";
export class NgxDatatableModule {
    /**
     * Configure global configuration via INgxDatatableConfig
     * @param configuration
     */
    static forRoot(configuration) {
        return {
            ngModule: NgxDatatableModule,
            providers: [{ provide: 'configuration', useValue: configuration }]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: NgxDatatableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.6", ngImport: i0, type: NgxDatatableModule, declarations: [DataTableFooterTemplateDirective,
            VisibilityDirective,
            DraggableDirective,
            ResizeableDirective,
            OrderableDirective,
            LongPressDirective,
            ScrollerComponent,
            DatatableComponent,
            DataTableColumnDirective,
            DataTableHeaderComponent,
            DataTableHeaderCellComponent,
            DataTableBodyComponent,
            DataTableFooterComponent,
            DataTablePagerComponent,
            ProgressBarComponent,
            DataTableBodyRowComponent,
            DataTableRowWrapperComponent,
            DatatableRowDetailDirective,
            DatatableGroupHeaderDirective,
            DatatableRowDetailTemplateDirective,
            DataTableBodyCellComponent,
            DataTableSelectionComponent,
            DataTableColumnHeaderDirective,
            DataTableColumnCellDirective,
            DataTableColumnGhostCellDirective,
            DataTableColumnCellTreeToggle,
            DatatableFooterDirective,
            DatatableGroupHeaderTemplateDirective,
            DataTableSummaryRowComponent,
            DataTableGhostLoaderComponent,
            DisableRowDirective], imports: [CommonModule], exports: [DatatableComponent,
            DatatableRowDetailDirective,
            DatatableGroupHeaderDirective,
            DatatableRowDetailTemplateDirective,
            DataTableColumnDirective,
            DataTableColumnHeaderDirective,
            DataTableColumnCellDirective,
            DataTableColumnGhostCellDirective,
            DataTableColumnCellTreeToggle,
            DataTableFooterTemplateDirective,
            DatatableFooterDirective,
            DataTablePagerComponent,
            DatatableGroupHeaderTemplateDirective,
            DisableRowDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: NgxDatatableModule, providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService], imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: NgxDatatableModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
                    declarations: [
                        DataTableFooterTemplateDirective,
                        VisibilityDirective,
                        DraggableDirective,
                        ResizeableDirective,
                        OrderableDirective,
                        LongPressDirective,
                        ScrollerComponent,
                        DatatableComponent,
                        DataTableColumnDirective,
                        DataTableHeaderComponent,
                        DataTableHeaderCellComponent,
                        DataTableBodyComponent,
                        DataTableFooterComponent,
                        DataTablePagerComponent,
                        ProgressBarComponent,
                        DataTableBodyRowComponent,
                        DataTableRowWrapperComponent,
                        DatatableRowDetailDirective,
                        DatatableGroupHeaderDirective,
                        DatatableRowDetailTemplateDirective,
                        DataTableBodyCellComponent,
                        DataTableSelectionComponent,
                        DataTableColumnHeaderDirective,
                        DataTableColumnCellDirective,
                        DataTableColumnGhostCellDirective,
                        DataTableColumnCellTreeToggle,
                        DatatableFooterDirective,
                        DatatableGroupHeaderTemplateDirective,
                        DataTableSummaryRowComponent,
                        DataTableGhostLoaderComponent,
                        DisableRowDirective
                    ],
                    exports: [
                        DatatableComponent,
                        DatatableRowDetailDirective,
                        DatatableGroupHeaderDirective,
                        DatatableRowDetailTemplateDirective,
                        DataTableColumnDirective,
                        DataTableColumnHeaderDirective,
                        DataTableColumnCellDirective,
                        DataTableColumnGhostCellDirective,
                        DataTableColumnCellTreeToggle,
                        DataTableFooterTemplateDirective,
                        DatatableFooterDirective,
                        DataTablePagerComponent,
                        DatatableGroupHeaderTemplateDirective,
                        DisableRowDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0YXRhYmxlL3NyYy9saWIvbmd4LWRhdGF0YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNC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QztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQztvQkFDcEUsWUFBWSxFQUFFO3dCQUNaLGdDQUFnQzt3QkFDaEMsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIsNEJBQTRCO3dCQUM1QixzQkFBc0I7d0JBQ3RCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2QixvQkFBb0I7d0JBQ3BCLHlCQUF5Qjt3QkFDekIsNEJBQTRCO3dCQUM1QiwyQkFBMkI7d0JBQzNCLDZCQUE2Qjt3QkFDN0IsbUNBQW1DO3dCQUNuQywwQkFBMEI7d0JBQzFCLDJCQUEyQjt3QkFDM0IsOEJBQThCO3dCQUM5Qiw0QkFBNEI7d0JBQzVCLGlDQUFpQzt3QkFDakMsNkJBQTZCO3dCQUM3Qix3QkFBd0I7d0JBQ3hCLHFDQUFxQzt3QkFDckMsNEJBQTRCO3dCQUM1Qiw2QkFBNkI7d0JBQzdCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsMkJBQTJCO3dCQUMzQiw2QkFBNkI7d0JBQzdCLG1DQUFtQzt3QkFDbkMsd0JBQXdCO3dCQUN4Qiw4QkFBOEI7d0JBQzlCLDRCQUE0Qjt3QkFDNUIsaUNBQWlDO3dCQUNqQyw2QkFBNkI7d0JBQzdCLGdDQUFnQzt3QkFDaEMsd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLHFDQUFxQzt3QkFDckMsbUJBQW1CO3FCQUNwQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2Nyb2xsYmFySGVscGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9zY3JvbGxiYXItaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGltZW5zaW9uc0hlbHBlciB9IGZyb20gJy4vc2VydmljZXMvZGltZW5zaW9ucy1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb2x1bW5DaGFuZ2VzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29sdW1uLWNoYW5nZXMuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBWaXNpYmlsaXR5RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Zpc2liaWxpdHkuZGlyZWN0aXZlJztcbmltcG9ydCB7IERyYWdnYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kcmFnZ2FibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJlc2l6ZWFibGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVzaXplYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgT3JkZXJhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL29yZGVyYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTG9uZ1ByZXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2xvbmctcHJlc3MuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNjcm9sbGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JvZHkvc2Nyb2xsZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy9jb2x1bW5zL2NvbHVtbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZUhlYWRlckNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JvZHkvYm9keS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZVBhZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlci9wYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYm9keS9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZUJvZHlSb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYm9keS9ib2R5LXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUm93V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ib2R5L2JvZHktcm93LXdyYXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGF0YWJsZVJvd0RldGFpbERpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy9yb3ctZGV0YWlsL3Jvdy1kZXRhaWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGF0YWJsZUdyb3VwSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL2JvZHkvYm9keS1ncm91cC1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGF0YWJsZVJvd0RldGFpbFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL3Jvdy1kZXRhaWwvcm93LWRldGFpbC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQm9keUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYm9keS9ib2R5LWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZVNlbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ib2R5L3NlbGVjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbHVtbnMvY29sdW1uLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uQ2VsbERpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy9jb2x1bW5zL2NvbHVtbi1jZWxsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5HaG9zdENlbGxEaXJlY3RpdmUgfSBmcm9tICcuL2NvbXBvbmVudHMvY29sdW1ucy9jb2x1bW4tZ2hvc3QtY2VsbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uQ2VsbFRyZWVUb2dnbGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY29sdW1ucy90cmVlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhdGFibGVGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YXRhYmxlR3JvdXBIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy9ib2R5L2JvZHktZ3JvdXAtaGVhZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVTdW1tYXJ5Um93Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JvZHkvc3VtbWFyeS9zdW1tYXJ5LXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlR2hvc3RMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYm9keS9naG9zdC1sb2FkZXIvZ2hvc3QtbG9hZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXNhYmxlUm93RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Rpc2FibGUtcm93LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtTY3JvbGxiYXJIZWxwZXIsIERpbWVuc2lvbnNIZWxwZXIsIENvbHVtbkNoYW5nZXNTZXJ2aWNlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRGF0YVRhYmxlRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgVmlzaWJpbGl0eURpcmVjdGl2ZSxcbiAgICBEcmFnZ2FibGVEaXJlY3RpdmUsXG4gICAgUmVzaXplYWJsZURpcmVjdGl2ZSxcbiAgICBPcmRlcmFibGVEaXJlY3RpdmUsXG4gICAgTG9uZ1ByZXNzRGlyZWN0aXZlLFxuICAgIFNjcm9sbGVyQ29tcG9uZW50LFxuICAgIERhdGF0YWJsZUNvbXBvbmVudCxcbiAgICBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50LFxuICAgIERhdGFUYWJsZUhlYWRlckNlbGxDb21wb25lbnQsXG4gICAgRGF0YVRhYmxlQm9keUNvbXBvbmVudCxcbiAgICBEYXRhVGFibGVGb290ZXJDb21wb25lbnQsXG4gICAgRGF0YVRhYmxlUGFnZXJDb21wb25lbnQsXG4gICAgUHJvZ3Jlc3NCYXJDb21wb25lbnQsXG4gICAgRGF0YVRhYmxlQm9keVJvd0NvbXBvbmVudCxcbiAgICBEYXRhVGFibGVSb3dXcmFwcGVyQ29tcG9uZW50LFxuICAgIERhdGF0YWJsZVJvd0RldGFpbERpcmVjdGl2ZSxcbiAgICBEYXRhdGFibGVHcm91cEhlYWRlckRpcmVjdGl2ZSxcbiAgICBEYXRhdGFibGVSb3dEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBEYXRhVGFibGVCb2R5Q2VsbENvbXBvbmVudCxcbiAgICBEYXRhVGFibGVTZWxlY3Rpb25Db21wb25lbnQsXG4gICAgRGF0YVRhYmxlQ29sdW1uSGVhZGVyRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZUNvbHVtbkNlbGxEaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlQ29sdW1uR2hvc3RDZWxsRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZUNvbHVtbkNlbGxUcmVlVG9nZ2xlLFxuICAgIERhdGF0YWJsZUZvb3RlckRpcmVjdGl2ZSxcbiAgICBEYXRhdGFibGVHcm91cEhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZVN1bW1hcnlSb3dDb21wb25lbnQsXG4gICAgRGF0YVRhYmxlR2hvc3RMb2FkZXJDb21wb25lbnQsXG4gICAgRGlzYWJsZVJvd0RpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRGF0YXRhYmxlQ29tcG9uZW50LFxuICAgIERhdGF0YWJsZVJvd0RldGFpbERpcmVjdGl2ZSxcbiAgICBEYXRhdGFibGVHcm91cEhlYWRlckRpcmVjdGl2ZSxcbiAgICBEYXRhdGFibGVSb3dEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlQ29sdW1uSGVhZGVyRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZUNvbHVtbkNlbGxEaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlQ29sdW1uR2hvc3RDZWxsRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZUNvbHVtbkNlbGxUcmVlVG9nZ2xlLFxuICAgIERhdGFUYWJsZUZvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIERhdGF0YWJsZUZvb3RlckRpcmVjdGl2ZSxcbiAgICBEYXRhVGFibGVQYWdlckNvbXBvbmVudCxcbiAgICBEYXRhdGFibGVHcm91cEhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIERpc2FibGVSb3dEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEYXRhdGFibGVNb2R1bGUge1xuICAvKipcbiAgICogQ29uZmlndXJlIGdsb2JhbCBjb25maWd1cmF0aW9uIHZpYSBJTmd4RGF0YXRhYmxlQ29uZmlnXG4gICAqIEBwYXJhbSBjb25maWd1cmF0aW9uXG4gICAqL1xuICBzdGF0aWMgZm9yUm9vdChjb25maWd1cmF0aW9uOiBJTmd4RGF0YXRhYmxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hEYXRhdGFibGVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neERhdGF0YWJsZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogJ2NvbmZpZ3VyYXRpb24nLCB1c2VWYWx1ZTogY29uZmlndXJhdGlvbiB9XVxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZGVmaW5pdGlvbiBmb3IgSU5neERhdGF0YWJsZUNvbmZpZyBnbG9iYWwgY29uZmlndXJhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIElOZ3hEYXRhdGFibGVDb25maWcge1xuICBtZXNzYWdlcz86IHtcbiAgICBlbXB0eU1lc3NhZ2U6IHN0cmluZzsgLy8gTWVzc2FnZSB0byBzaG93IHdoZW4gYXJyYXkgaXMgcHJlc2VudGVkLCBidXQgY29udGFpbnMgbm8gdmFsdWVzXG4gICAgdG90YWxNZXNzYWdlOiBzdHJpbmc7IC8vIEZvb3RlciB0b3RhbCBtZXNzYWdlXG4gICAgc2VsZWN0ZWRNZXNzYWdlOiBzdHJpbmc7IC8vIEZvb3RlciBzZWxlY3RlZCBtZXNzYWdlXG4gIH07XG4gIGNzc0NsYXNzZXM/OiB7XG4gICAgc29ydEFzY2VuZGluZzogc3RyaW5nO1xuICAgIHNvcnREZXNjZW5kaW5nOiBzdHJpbmc7XG4gICAgc29ydFVuc2V0OiBzdHJpbmc7XG4gICAgcGFnZXJMZWZ0QXJyb3c6IHN0cmluZztcbiAgICBwYWdlclJpZ2h0QXJyb3c6IHN0cmluZztcbiAgICBwYWdlclByZXZpb3VzOiBzdHJpbmc7XG4gICAgcGFnZXJOZXh0OiBzdHJpbmc7XG4gIH07XG4gIGhlYWRlckhlaWdodD86IG51bWJlcjtcbiAgZm9vdGVySGVpZ2h0PzogbnVtYmVyO1xuICByb3dIZWlnaHQ/OiBudW1iZXI7XG59XG4iXX0=