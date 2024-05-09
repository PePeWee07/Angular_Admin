import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-XG6O2LRS.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Input,
  InputFlags,
  KeyValueDiffers,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-JMTS7RQO.js";
import "./chunk-YRN7ZVOS.js";
import {
  fromEvent
} from "./chunk-LJ4UR6LK.js";
import {
  BehaviorSubject,
  Subject,
  takeUntil
} from "./chunk-JJYN5SQZ.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-6DXHB35K.js";

// node_modules/@siemens/ngx-datatable/fesm2022/siemens-ngx-datatable.mjs
var _c0 = ["*"];
function DataTableGhostLoaderComponent_div_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 7);
  }
  if (rf & 2) {
    const col_r3 = ɵɵnextContext().$implicit;
    ɵɵstyleProp("width", (col_r3 == null ? null : col_r3.width) + "px");
  }
}
function DataTableGhostLoaderComponent_div_1_ng_container_1_ng_template_2_Template(rf, ctx) {
}
function DataTableGhostLoaderComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DataTableGhostLoaderComponent_div_1_ng_container_1_div_1_Template, 1, 2, "div", 4)(2, DataTableGhostLoaderComponent_div_1_ng_container_1_ng_template_2_Template, 0, 0, "ng-template", 5, 6, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    const _r6 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !col_r3.ghostCellTemplate)("ngIfElse", _r6);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", col_r3.ghostCellTemplate);
  }
}
function DataTableGhostLoaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, DataTableGhostLoaderComponent_div_1_ng_container_1_Template, 4, 3, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("height", ctx_r0.rowHeight + "px");
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.columns);
  }
}
var _c1 = () => [];
var _c2 = ["cellTemplate"];
var _c3 = ["ghostLoaderTemplate"];
function DataTableBodyCellComponent_ng_container_0_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 6)(1, "input", 7);
    ɵɵlistener("click", function DataTableBodyCellComponent_ng_container_0_label_2_Template_input_click_1_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r7.onCheckboxChange($event));
    });
    ɵɵpipe(2, "async");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("disabled", ɵɵpipeBind1(2, 2, ctx_r3.disable$))("checked", ctx_r3.isSelected);
  }
}
function DataTableBodyCellComponent_ng_container_0_ng_container_3_button_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 13);
  }
}
function DataTableBodyCellComponent_ng_container_0_ng_container_3_button_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 14);
  }
}
function DataTableBodyCellComponent_ng_container_0_ng_container_3_button_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 15);
  }
}
function DataTableBodyCellComponent_ng_container_0_ng_container_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function DataTableBodyCellComponent_ng_container_0_ng_container_3_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r15);
      const ctx_r14 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r14.onTreeAction());
    });
    ɵɵelementStart(1, "span");
    ɵɵtemplate(2, DataTableBodyCellComponent_ng_container_0_ng_container_3_button_1_i_2_Template, 1, 0, "i", 10)(3, DataTableBodyCellComponent_ng_container_0_ng_container_3_button_1_i_3_Template, 1, 0, "i", 11)(4, DataTableBodyCellComponent_ng_container_0_ng_container_3_button_1_i_4_Template, 1, 0, "i", 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r9.treeStatus === "disabled");
    ɵɵattribute("aria-label", ctx_r9.treeStatus);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r9.treeStatus === "loading");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r9.treeStatus === "collapsed");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r9.treeStatus === "expanded" || ctx_r9.treeStatus === "disabled");
  }
}
function DataTableBodyCellComponent_ng_container_0_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
var _c4 = (a0) => ({
  cellContext: a0
});
function DataTableBodyCellComponent_ng_container_0_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DataTableBodyCellComponent_ng_container_0_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r10.column.treeToggleTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c4, ctx_r10.cellContext));
  }
}
function DataTableBodyCellComponent_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DataTableBodyCellComponent_ng_container_0_ng_container_3_button_1_Template, 5, 5, "button", 8)(2, DataTableBodyCellComponent_ng_container_0_ng_container_3_2_Template, 1, 4, null, 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.column.treeToggleTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.column.treeToggleTemplate);
  }
}
function DataTableBodyCellComponent_ng_container_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 17);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("title", ctx_r5.sanitizedValue)("innerHTML", ctx_r5.value, ɵɵsanitizeHtml);
  }
}
function DataTableBodyCellComponent_ng_container_0_5_ng_template_0_Template(rf, ctx) {
}
function DataTableBodyCellComponent_ng_container_0_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DataTableBodyCellComponent_ng_container_0_5_ng_template_0_Template, 0, 0, "ng-template", 16, 18, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r6.column.cellTemplate)("ngTemplateOutletContext", ctx_r6.cellContext);
  }
}
function DataTableBodyCellComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵtemplate(2, DataTableBodyCellComponent_ng_container_0_label_2_Template, 3, 4, "label", 3)(3, DataTableBodyCellComponent_ng_container_0_ng_container_3_Template, 3, 2, "ng-container", 4)(4, DataTableBodyCellComponent_ng_container_0_span_4_Template, 1, 2, "span", 5)(5, DataTableBodyCellComponent_ng_container_0_5_Template, 2, 2, null, 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("margin-left", ctx_r0.calcLeftMargin(ctx_r0.column, ctx_r0.row), "px");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.column.checkboxable && (!ctx_r0.displayCheck || ctx_r0.displayCheck(ctx_r0.row, ctx_r0.column, ctx_r0.value)));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.column.isTreeColumn);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.column.cellTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.column.cellTemplate);
  }
}
var _c5 = (a0) => [a0];
function DataTableBodyCellComponent_ng_template_1_ghost_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ghost-loader", 20);
  }
  if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵproperty("columns", ɵɵpureFunction1(2, _c5, ctx_r19.column))("pageSize", 1);
  }
}
function DataTableBodyCellComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DataTableBodyCellComponent_ng_template_1_ghost_loader_0_Template, 1, 4, "ghost-loader", 19);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.ghostLoadingIndicator);
  }
}
function DataTableBodyRowComponent_div_0_datatable_body_cell_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "datatable-body-cell", 3);
    ɵɵlistener("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_2_Template_datatable_body_cell_activate_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r7);
      const ii_r5 = restoredCtx.index;
      const ctx_r6 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r6.onActivate($event, ii_r5));
    })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_2_Template_datatable_body_cell_treeAction_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r8 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r8.onTreeAction());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("disable$", ctx_r3.disable$)("treeStatus", ctx_r3.treeStatus)("ghostLoadingIndicator", ctx_r3.ghostLoadingIndicator);
  }
}
function DataTableBodyRowComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵpipe(1, "async");
    ɵɵtemplate(2, DataTableBodyRowComponent_div_0_datatable_body_cell_2_Template, 1, 11, "datatable-body-cell", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("datatable-row-", colGroup_r1.type, " datatable-row-group");
    ɵɵclassProp("row-disabled", ctx_r0.disable$ ? ɵɵpipeBind1(1, 8, ctx_r0.disable$) : false);
    ɵɵproperty("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
  }
}
function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) {
}
function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
  }
}
function DataTableRowWrapperComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, null, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r0.getGroupHeaderStyle());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.groupHeader && ctx_r0.groupHeader.template);
  }
}
function DataTableRowWrapperComponent_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"]);
  }
}
function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) {
}
function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
  }
}
function DataTableRowWrapperComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, null, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("height", ctx_r2.detailRowHeight, "px");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
  }
}
function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "datatable-body-row", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", -1);
  }
}
function DataTableBodyComponent_ng_container_0_datatable_progress_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "datatable-progress");
  }
}
function DataTableBodyComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5)(2, "div", 6, 7);
    ɵɵprojection(4);
    ɵɵelementEnd()();
    ɵɵtemplate(5, DataTableBodyComponent_ng_container_0_datatable_progress_5_Template, 1, 0, "datatable-progress", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const _r5 = ɵɵreference(3);
    ɵɵadvance(5);
    ɵɵproperty("ngIf", !(_r5 == null ? null : _r5.hasChildNodes()));
  }
}
function DataTableBodyComponent_ghost_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ghost-loader", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("columns", ctx_r1.columns)("pageSize", ctx_r1.pageSize)("rowHeight", ctx_r1.rowHeight)("ghostBodyHeight", ctx_r1.bodyHeight);
  }
}
function DataTableBodyComponent_datatable_scroller_4_datatable_summary_row_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "datatable-summary-row", 13);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("rowHeight", ctx_r7.summaryHeight)("offsetX", ctx_r7.offsetX)("innerWidth", ctx_r7.innerWidth)("rows", ctx_r7.rows)("columns", ctx_r7.columns);
  }
}
function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_datatable_body_row_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "datatable-body-row", 18, 19);
    ɵɵlistener("treeAction", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_datatable_body_row_2_Template_datatable_body_row_treeAction_0_listener() {
      ɵɵrestoreView(_r19);
      const group_r10 = ɵɵnextContext().$implicit;
      const ctx_r17 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r17.onTreeAction(group_r10));
    })("activate", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_datatable_body_row_2_Template_datatable_body_row_activate_0_listener($event) {
      ɵɵrestoreView(_r19);
      const i_r11 = ɵɵnextContext().index;
      const ctx_r20 = ɵɵnextContext(2);
      const _r2 = ɵɵreference(3);
      return ɵɵresetView(_r2.onActivate($event, ctx_r20.indexes.first + i_r11));
    })("drop", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_datatable_body_row_2_Template_datatable_body_row_drop_0_listener($event) {
      ɵɵrestoreView(_r19);
      const _r16 = ɵɵreference(1);
      const group_r10 = ɵɵnextContext().$implicit;
      const ctx_r22 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r22.drop($event, group_r10, _r16));
    })("dragover", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_datatable_body_row_2_Template_datatable_body_row_dragover_0_listener($event) {
      ɵɵrestoreView(_r19);
      const group_r10 = ɵɵnextContext().$implicit;
      const ctx_r24 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r24.dragOver($event, group_r10));
    })("dragenter", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_datatable_body_row_2_Template_datatable_body_row_dragenter_0_listener($event) {
      ɵɵrestoreView(_r19);
      const _r16 = ɵɵreference(1);
      const group_r10 = ɵɵnextContext().$implicit;
      const ctx_r26 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r26.dragEnter($event, group_r10, _r16));
    })("dragleave", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_datatable_body_row_2_Template_datatable_body_row_dragleave_0_listener($event) {
      ɵɵrestoreView(_r19);
      const _r16 = ɵɵreference(1);
      const group_r10 = ɵɵnextContext().$implicit;
      const ctx_r28 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r28.dragLeave($event, group_r10, _r16));
    })("dragstart", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_datatable_body_row_2_Template_datatable_body_row_dragstart_0_listener($event) {
      ɵɵrestoreView(_r19);
      const _r16 = ɵɵreference(1);
      const group_r10 = ɵɵnextContext().$implicit;
      const ctx_r30 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r30.drag($event, group_r10, _r16));
    })("dragend", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_datatable_body_row_2_Template_datatable_body_row_dragend_0_listener($event) {
      ɵɵrestoreView(_r19);
      const group_r10 = ɵɵnextContext().$implicit;
      const ctx_r32 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r32.dragEnd($event, group_r10));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r10 = ɵɵnextContext().$implicit;
    const _r12 = ɵɵreference(1);
    const ctx_r13 = ɵɵnextContext(2);
    const _r2 = ɵɵreference(3);
    ɵɵproperty("disable$", _r12.disable$)("isSelected", _r2.getRowSelected(group_r10))("innerWidth", ctx_r13.innerWidth)("offsetX", ctx_r13.offsetX)("columns", ctx_r13.columns)("rowHeight", ctx_r13.getRowHeight(group_r10))("row", group_r10)("rowIndex", ctx_r13.getRowIndex(group_r10))("expanded", ctx_r13.getRowExpanded(group_r10))("rowClass", ctx_r13.rowClass)("displayCheck", ctx_r13.displayCheck)("treeStatus", group_r10 && group_r10.treeStatus)("ghostLoadingIndicator", ctx_r13.ghostLoadingIndicator)("draggable", ctx_r13.rowDraggable);
  }
}
function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_ng_template_3_datatable_body_row_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "datatable-body-row", 21, 19);
    ɵɵlistener("activate", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_ng_template_3_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r40);
      const i_r37 = restoredCtx.index;
      ɵɵnextContext(4);
      const _r2 = ɵɵreference(3);
      return ɵɵresetView(_r2.onActivate($event, i_r37));
    })("drop", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_ng_template_3_datatable_body_row_0_Template_datatable_body_row_drop_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r40);
      const row_r36 = restoredCtx.$implicit;
      const _r38 = ɵɵreference(1);
      const ctx_r41 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r41.drop($event, row_r36, _r38));
    })("dragover", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_ng_template_3_datatable_body_row_0_Template_datatable_body_row_dragover_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r40);
      const row_r36 = restoredCtx.$implicit;
      const ctx_r42 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r42.dragOver($event, row_r36));
    })("dragenter", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_ng_template_3_datatable_body_row_0_Template_datatable_body_row_dragenter_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r40);
      const row_r36 = restoredCtx.$implicit;
      const _r38 = ɵɵreference(1);
      const ctx_r43 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r43.dragEnter($event, row_r36, _r38));
    })("dragleave", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_ng_template_3_datatable_body_row_0_Template_datatable_body_row_dragleave_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r40);
      const row_r36 = restoredCtx.$implicit;
      const _r38 = ɵɵreference(1);
      const ctx_r44 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r44.dragLeave($event, row_r36, _r38));
    })("dragstart", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_ng_template_3_datatable_body_row_0_Template_datatable_body_row_dragstart_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r40);
      const row_r36 = restoredCtx.$implicit;
      const _r38 = ɵɵreference(1);
      const ctx_r45 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r45.drag($event, row_r36, _r38));
    })("dragend", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_ng_template_3_datatable_body_row_0_Template_datatable_body_row_dragend_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r40);
      const row_r36 = restoredCtx.$implicit;
      const ctx_r46 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r46.dragEnd($event, row_r36));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r36 = ctx.$implicit;
    const group_r10 = ɵɵnextContext(2).$implicit;
    const _r12 = ɵɵreference(1);
    const ctx_r35 = ɵɵnextContext(2);
    const _r2 = ɵɵreference(3);
    ɵɵproperty("disable$", _r12.disable$)("isSelected", _r2.getRowSelected(row_r36))("innerWidth", ctx_r35.innerWidth)("offsetX", ctx_r35.offsetX)("columns", ctx_r35.columns)("rowHeight", ctx_r35.getRowHeight(row_r36))("row", row_r36)("group", group_r10.value)("rowIndex", ctx_r35.getRowIndex(row_r36))("expanded", ctx_r35.getRowExpanded(row_r36))("rowClass", ctx_r35.rowClass)("ghostLoadingIndicator", ctx_r35.ghostLoadingIndicator)("draggable", ctx_r35.rowDraggable);
  }
}
function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_ng_template_3_datatable_body_row_0_Template, 2, 13, "datatable-body-row", 20);
  }
  if (rf & 2) {
    const group_r10 = ɵɵnextContext().$implicit;
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵproperty("ngForOf", group_r10.value)("ngForTrackBy", ctx_r14.rowTrackingFn);
  }
}
function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "datatable-row-wrapper", 14, 15);
    ɵɵlistener("rowContextmenu", function DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) {
      ɵɵrestoreView(_r50);
      const ctx_r49 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r49.rowContextmenu.emit($event));
    });
    ɵɵtemplate(2, DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_datatable_body_row_2_Template, 2, 14, "datatable-body-row", 16)(3, DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_ng_template_3_Template, 1, 2, "ng-template", null, 17, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const _r15 = ɵɵreference(4);
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("groupedRows", ctx_r8.groupedRows)("innerWidth", ctx_r8.innerWidth)("ngStyle", ctx_r8.getRowsStyles(group_r10, ctx_r8.indexes.first + i_r11))("rowDetail", ctx_r8.rowDetail)("groupHeader", ctx_r8.groupHeader)("offsetX", ctx_r8.offsetX)("detailRowHeight", ctx_r8.getDetailRowHeight(group_r10 && group_r10[i_r11], i_r11))("row", group_r10)("disableCheck", ctx_r8.disableRowCheck)("expanded", ctx_r8.getRowExpanded(group_r10))("rowIndex", ctx_r8.getRowIndex(group_r10 && group_r10[i_r11]));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r8.groupedRows)("ngIfElse", _r15);
  }
}
function DataTableBodyComponent_datatable_scroller_4_datatable_summary_row_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "datatable-summary-row", 22);
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r9.getBottomSummaryRowStyles())("rowHeight", ctx_r9.summaryHeight)("offsetX", ctx_r9.offsetX)("innerWidth", ctx_r9.innerWidth)("rows", ctx_r9.rows)("columns", ctx_r9.columns);
  }
}
function DataTableBodyComponent_datatable_scroller_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "datatable-scroller", 9);
    ɵɵlistener("scroll", function DataTableBodyComponent_datatable_scroller_4_Template_datatable_scroller_scroll_0_listener($event) {
      ɵɵrestoreView(_r52);
      const ctx_r51 = ɵɵnextContext();
      return ɵɵresetView(ctx_r51.onBodyScroll($event));
    });
    ɵɵtemplate(1, DataTableBodyComponent_datatable_scroller_4_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 10)(2, DataTableBodyComponent_datatable_scroller_4_datatable_row_wrapper_2_Template, 5, 13, "datatable-row-wrapper", 11)(3, DataTableBodyComponent_datatable_scroller_4_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("scrollbarV", ctx_r3.scrollbarV)("scrollbarH", ctx_r3.scrollbarH)("scrollHeight", ctx_r3.scrollHeight)("scrollWidth", ctx_r3.columnGroupWidths == null ? null : ctx_r3.columnGroupWidths.total);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.summaryRow && ctx_r3.summaryPosition === "top");
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r3.temp)("ngForTrackBy", ctx_r3.rowTrackingFn);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.summaryRow && ctx_r3.summaryPosition === "bottom");
  }
}
function DataTableBodyComponent_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 25);
  }
  if (rf & 2) {
    const ctx_r53 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r53.emptyMessage, ɵɵsanitizeHtml);
  }
}
function DataTableBodyComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DataTableBodyComponent_ng_container_5_div_1_Template, 1, 1, "div", 23);
    ɵɵelementStart(2, "div", null, 24);
    ɵɵprojection(4, 1);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const _r54 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(_r54 == null ? null : _r54.children.length));
  }
}
var _c6 = [[["", "loading-indicator", ""]], [["", "empty-content", ""]]];
var _c7 = ["[loading-indicator]", "[empty-content]"];
function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) {
}
function DataTableHeaderCellComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r0.targetMarkerContext);
  }
}
function DataTableHeaderCellComponent_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 6)(1, "input", 7);
    ɵɵlistener("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.select.emit(!ctx_r5.allRowsSelected));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("checked", ctx_r1.allRowsSelected);
  }
}
function DataTableHeaderCellComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 8)(1, "span", 9);
    ɵɵlistener("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onSort());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("innerHTML", ctx_r2.name, ɵɵsanitizeHtml);
  }
}
function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) {
}
function DataTableHeaderCellComponent_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.column.headerTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
  }
}
function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "datatable-header-cell", 4);
    ɵɵlistener("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r5);
      const column_r3 = restoredCtx.$implicit;
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.onColumnResized($event, column_r3));
    })("resizing", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resizing_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r5);
      const column_r3 = restoredCtx.$implicit;
      const ctx_r6 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r6.onColumnResizing($event, column_r3));
    })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r7 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r7.onLongPressStart($event));
    })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r8 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r8.onLongPressEnd($event));
    })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r9 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r9.onSort($event));
    })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r10 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r10.select.emit($event));
    })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r11 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r11.columnContextmenu.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("sortUnsetIcon", ctx_r2.sortUnsetIcon)("allRowsSelected", ctx_r2.allRowsSelected);
  }
}
function DataTableHeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 19, "datatable-header-cell", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap("datatable-row-" + colGroup_r1.type);
    ɵɵproperty("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);
    ɵɵadvance();
    ɵɵproperty("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
  }
}
function DataTablePagerComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 6)(1, "a", 7);
    ɵɵlistener("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() {
      const restoredCtx = ɵɵrestoreView(_r3);
      const pg_r1 = restoredCtx.$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.selectPage(pg_r1.number));
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const pg_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("active", pg_r1.number === ctx_r0.page);
    ɵɵattribute("aria-label", "page " + pg_r1.number);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", pg_r1.text, " ");
  }
}
function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) {
}
var _c8 = (a0, a1, a2, a3, a4) => ({
  rowCount: a0,
  pageSize: a1,
  selectedCount: a2,
  curPage: a3,
  offset: a4
});
function DataTableFooterComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", ɵɵpureFunction5(2, _c8, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
  }
}
function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
  }
}
function DataTableFooterComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.selectedMessage);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
  }
}
function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "datatable-pager", 6);
    ɵɵlistener("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.page.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
  }
}
var _c9 = (a0) => ({
  "selected-count": a0
});
function DatatableComponent_datatable_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "datatable-header", 4);
    ɵɵlistener("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onColumnSort($event));
    })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onColumnResize($event));
    })("resizing", function DatatableComponent_datatable_header_1_Template_datatable_header_resizing_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.onColumnResizing($event));
    })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onColumnReorder($event));
    })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onHeaderSelect($event));
    })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.onColumnContextmenu($event));
    });
    ɵɵpipe(1, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("sorts", ctx_r0.sorts)("sortType", ctx_r0.sortType)("scrollbarH", ctx_r0.scrollbarH)("innerWidth", ctx_r0._innerWidth)("offsetX", ɵɵpipeBind1(1, 15, ctx_r0._offsetX))("dealsWithGroup", ctx_r0.groupedRows !== void 0)("columns", ctx_r0._internalColumns)("headerHeight", ctx_r0.headerHeight)("reorderable", ctx_r0.reorderable)("targetMarkerTemplate", ctx_r0.targetMarkerTemplate)("sortAscendingIcon", ctx_r0.cssClasses.sortAscending)("sortDescendingIcon", ctx_r0.cssClasses.sortDescending)("sortUnsetIcon", ctx_r0.cssClasses.sortUnset)("allRowsSelected", ctx_r0.allRowsSelected)("selectionType", ctx_r0.selectionType);
  }
}
function DatatableComponent_datatable_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "datatable-footer", 5);
    ɵɵlistener("page", function DatatableComponent_datatable_footer_6_Template_datatable_footer_page_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.onFooterPage($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("rowCount", ctx_r1.rowCount)("pageSize", ctx_r1.pageSize)("offset", ctx_r1.offset)("footerHeight", ctx_r1.footerHeight)("footerTemplate", ctx_r1.footer)("totalMessage", ctx_r1.messages.totalMessage)("pagerLeftArrowIcon", ctx_r1.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r1.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r1.cssClasses.pagerPrevious)("selectedCount", ctx_r1.selected.length)("selectedMessage", !!ctx_r1.selectionType && ctx_r1.messages.selectedMessage)("pagerNextIcon", ctx_r1.cssClasses.pagerNext);
  }
}
var _ScrollbarHelper = class _ScrollbarHelper {
  constructor(document2) {
    this.document = document2;
    this.width = this.getWidth();
  }
  getWidth() {
    const outer = this.document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar";
    this.document.body.appendChild(outer);
    const widthNoScroll = outer.offsetWidth;
    outer.style.overflow = "scroll";
    const inner = this.document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);
    const widthWithScroll = inner.offsetWidth;
    outer.parentNode.removeChild(outer);
    return widthNoScroll - widthWithScroll;
  }
};
_ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) {
  return new (t || _ScrollbarHelper)(ɵɵinject(DOCUMENT));
};
_ScrollbarHelper.ɵprov = ɵɵdefineInjectable({
  token: _ScrollbarHelper,
  factory: _ScrollbarHelper.ɵfac
});
var ScrollbarHelper = _ScrollbarHelper;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarHelper, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _DimensionsHelper = class _DimensionsHelper {
  getDimensions(element) {
    return element.getBoundingClientRect();
  }
};
_DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) {
  return new (t || _DimensionsHelper)();
};
_DimensionsHelper.ɵprov = ɵɵdefineInjectable({
  token: _DimensionsHelper,
  factory: _DimensionsHelper.ɵfac
});
var DimensionsHelper = _DimensionsHelper;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DimensionsHelper, [{
    type: Injectable
  }], null, null);
})();
var _ColumnChangesService = class _ColumnChangesService {
  constructor() {
    this.columnInputChanges = new Subject();
  }
  get columnInputChanges$() {
    return this.columnInputChanges.asObservable();
  }
  onInputChange() {
    this.columnInputChanges.next(void 0);
  }
};
_ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) {
  return new (t || _ColumnChangesService)();
};
_ColumnChangesService.ɵprov = ɵɵdefineInjectable({
  token: _ColumnChangesService,
  factory: _ColumnChangesService.ɵfac
});
var ColumnChangesService = _ColumnChangesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnChangesService, [{
    type: Injectable
  }], null, null);
})();
var _DataTableFooterTemplateDirective = class _DataTableFooterTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_DataTableFooterTemplateDirective.ɵfac = function DataTableFooterTemplateDirective_Factory(t) {
  return new (t || _DataTableFooterTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
_DataTableFooterTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: _DataTableFooterTemplateDirective,
  selectors: [["", "ngx-datatable-footer-template", ""]]
});
var DataTableFooterTemplateDirective = _DataTableFooterTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableFooterTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[ngx-datatable-footer-template]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _VisibilityDirective = class _VisibilityDirective {
  constructor(element, zone) {
    this.element = element;
    this.zone = zone;
    this.isVisible = false;
    this.visible = new EventEmitter();
  }
  ngOnInit() {
    this.runCheck();
  }
  ngOnDestroy() {
    clearTimeout(this.timeout);
  }
  onVisibilityChange() {
    this.zone.run(() => {
      this.isVisible = true;
      this.visible.emit(true);
    });
  }
  runCheck() {
    const check = () => {
      const {
        offsetHeight,
        offsetWidth
      } = this.element.nativeElement;
      if (offsetHeight && offsetWidth) {
        clearTimeout(this.timeout);
        this.onVisibilityChange();
      } else {
        clearTimeout(this.timeout);
        this.zone.runOutsideAngular(() => {
          this.timeout = setTimeout(() => check(), 50);
        });
      }
    };
    this.timeout = setTimeout(() => check());
  }
};
_VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) {
  return new (t || _VisibilityDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
_VisibilityDirective.ɵdir = ɵɵdefineDirective({
  type: _VisibilityDirective,
  selectors: [["", "visibilityObserver", ""]],
  hostVars: 2,
  hostBindings: function VisibilityDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("visible", ctx.isVisible);
    }
  },
  outputs: {
    visible: "visible"
  }
});
var VisibilityDirective = _VisibilityDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisibilityDirective, [{
    type: Directive,
    args: [{
      selector: "[visibilityObserver]"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    isVisible: [{
      type: HostBinding,
      args: ["class.visible"]
    }],
    visible: [{
      type: Output
    }]
  });
})();
var _DraggableDirective = class _DraggableDirective {
  constructor(element) {
    this.dragX = true;
    this.dragY = true;
    this.dragStart = new EventEmitter();
    this.dragging = new EventEmitter();
    this.dragEnd = new EventEmitter();
    this.isDragging = false;
    this.element = element.nativeElement;
  }
  ngOnChanges(changes) {
    if (changes.dragEventTarget && changes.dragEventTarget.currentValue && this.dragModel.dragging) {
      this.onMousedown(changes.dragEventTarget.currentValue);
    }
  }
  ngOnDestroy() {
    this._destroySubscription();
  }
  onMouseup(event) {
    if (!this.isDragging) {
      return;
    }
    this.isDragging = false;
    this.element.classList.remove("dragging");
    if (this.subscription) {
      this._destroySubscription();
      this.dragEnd.emit({
        event,
        element: this.element,
        model: this.dragModel
      });
    }
  }
  onMousedown(event) {
    const isDragElm = event.target.classList.contains("draggable");
    if (isDragElm && (this.dragX || this.dragY)) {
      event.preventDefault();
      this.isDragging = true;
      const mouseDownPos = {
        x: event.clientX,
        y: event.clientY
      };
      const mouseup = fromEvent(document, "mouseup");
      this.subscription = mouseup.subscribe((ev) => this.onMouseup(ev));
      const mouseMoveSub = fromEvent(document, "mousemove").pipe(takeUntil(mouseup)).subscribe((ev) => this.move(ev, mouseDownPos));
      this.subscription.add(mouseMoveSub);
      this.dragStart.emit({
        event,
        element: this.element,
        model: this.dragModel
      });
    }
  }
  move(event, mouseDownPos) {
    if (!this.isDragging) {
      return;
    }
    const x = event.clientX - mouseDownPos.x;
    const y = event.clientY - mouseDownPos.y;
    if (this.dragX) {
      this.element.style.left = `${x}px`;
    }
    if (this.dragY) {
      this.element.style.top = `${y}px`;
    }
    this.element.classList.add("dragging");
    this.dragging.emit({
      event,
      element: this.element,
      model: this.dragModel
    });
  }
  _destroySubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = void 0;
    }
  }
};
_DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
  return new (t || _DraggableDirective)(ɵɵdirectiveInject(ElementRef));
};
_DraggableDirective.ɵdir = ɵɵdefineDirective({
  type: _DraggableDirective,
  selectors: [["", "draggable", ""]],
  inputs: {
    dragEventTarget: "dragEventTarget",
    dragModel: "dragModel",
    dragX: "dragX",
    dragY: "dragY"
  },
  outputs: {
    dragStart: "dragStart",
    dragging: "dragging",
    dragEnd: "dragEnd"
  },
  features: [ɵɵNgOnChangesFeature]
});
var DraggableDirective = _DraggableDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableDirective, [{
    type: Directive,
    args: [{
      selector: "[draggable]"
    }]
  }], () => [{
    type: ElementRef
  }], {
    dragEventTarget: [{
      type: Input
    }],
    dragModel: [{
      type: Input
    }],
    dragX: [{
      type: Input
    }],
    dragY: [{
      type: Input
    }],
    dragStart: [{
      type: Output
    }],
    dragging: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }]
  });
})();
var _ResizeableDirective = class _ResizeableDirective {
  constructor(element, renderer) {
    this.renderer = renderer;
    this.resizeEnabled = true;
    this.resize = new EventEmitter();
    this.resizing = new EventEmitter();
    this.element = element.nativeElement;
  }
  ngAfterViewInit() {
    const renderer2 = this.renderer;
    this.resizeHandle = renderer2.createElement("span");
    if (this.resizeEnabled) {
      renderer2.addClass(this.resizeHandle, "resize-handle");
    } else {
      renderer2.addClass(this.resizeHandle, "resize-handle--not-resizable");
    }
    renderer2.appendChild(this.element, this.resizeHandle);
  }
  ngOnDestroy() {
    this._destroySubscription();
    if (this.renderer.destroyNode) {
      this.renderer.destroyNode(this.resizeHandle);
    } else if (this.resizeHandle) {
      this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
    }
  }
  onMouseup() {
    if (this.subscription && !this.subscription.closed) {
      this._destroySubscription();
      this.resize.emit(this.element.clientWidth);
    }
  }
  onMousedown(event) {
    const isHandle = event.target.classList.contains("resize-handle");
    const initialWidth = this.element.clientWidth;
    const mouseDownScreenX = event.screenX;
    if (isHandle) {
      event.stopPropagation();
      const mouseup = fromEvent(document, "mouseup");
      this.subscription = mouseup.subscribe((ev) => this.onMouseup());
      const mouseMoveSub = fromEvent(document, "mousemove").pipe(takeUntil(mouseup)).subscribe((e) => this.move(e, initialWidth, mouseDownScreenX));
      this.subscription.add(mouseMoveSub);
    }
  }
  move(event, initialWidth, mouseDownScreenX) {
    const movementX = event.screenX - mouseDownScreenX;
    const newWidth = initialWidth + movementX;
    this.resizing.emit(newWidth);
  }
  _destroySubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = void 0;
    }
  }
};
_ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) {
  return new (t || _ResizeableDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_ResizeableDirective.ɵdir = ɵɵdefineDirective({
  type: _ResizeableDirective,
  selectors: [["", "resizeable", ""]],
  hostVars: 2,
  hostBindings: function ResizeableDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) {
        return ctx.onMousedown($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("resizeable", ctx.resizeEnabled);
    }
  },
  inputs: {
    resizeEnabled: "resizeEnabled",
    minWidth: "minWidth",
    maxWidth: "maxWidth"
  },
  outputs: {
    resize: "resize",
    resizing: "resizing"
  }
});
var ResizeableDirective = _ResizeableDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeableDirective, [{
    type: Directive,
    args: [{
      selector: "[resizeable]"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    resizeEnabled: [{
      type: HostBinding,
      args: ["class.resizeable"]
    }, {
      type: Input
    }],
    minWidth: [{
      type: Input
    }],
    maxWidth: [{
      type: Input
    }],
    resize: [{
      type: Output
    }],
    resizing: [{
      type: Output
    }],
    onMousedown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }]
  });
})();
var _OrderableDirective = class _OrderableDirective {
  constructor(differs, document2) {
    this.document = document2;
    this.reorder = new EventEmitter();
    this.targetChanged = new EventEmitter();
    this.differ = differs.find({}).create();
  }
  ngAfterContentInit() {
    this.updateSubscriptions();
    this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
  }
  ngOnDestroy() {
    this.draggables.forEach((d) => {
      d.dragStart.unsubscribe();
      d.dragging.unsubscribe();
      d.dragEnd.unsubscribe();
    });
  }
  updateSubscriptions() {
    const diffs = this.differ.diff(this.createMapDiffs());
    if (diffs) {
      const subscribe = ({
        currentValue,
        previousValue
      }) => {
        unsubscribe({
          previousValue
        });
        if (currentValue) {
          currentValue.dragStart.subscribe(this.onDragStart.bind(this));
          currentValue.dragging.subscribe(this.onDragging.bind(this));
          currentValue.dragEnd.subscribe(this.onDragEnd.bind(this));
        }
      };
      const unsubscribe = ({
        previousValue
      }) => {
        if (previousValue) {
          previousValue.dragStart.unsubscribe();
          previousValue.dragging.unsubscribe();
          previousValue.dragEnd.unsubscribe();
        }
      };
      diffs.forEachAddedItem(subscribe);
      diffs.forEachRemovedItem(unsubscribe);
    }
  }
  onDragStart() {
    this.positions = {};
    let i = 0;
    for (const dragger of this.draggables.toArray()) {
      const elm = dragger.element;
      const left = parseInt(elm.offsetLeft.toString(), 10);
      this.positions[dragger.dragModel.$$id] = {
        left,
        right: left + parseInt(elm.offsetWidth.toString(), 10),
        index: i++,
        element: elm
      };
    }
  }
  onDragging({
    element,
    model,
    event
  }) {
    const prevPos = this.positions[model.$$id];
    const target = this.isTarget(model, event);
    if (target) {
      if (this.lastDraggingIndex !== target.i) {
        this.targetChanged.emit({
          prevIndex: this.lastDraggingIndex,
          newIndex: target.i,
          initialIndex: prevPos.index
        });
        this.lastDraggingIndex = target.i;
      }
    } else if (this.lastDraggingIndex !== prevPos.index) {
      this.targetChanged.emit({
        prevIndex: this.lastDraggingIndex,
        initialIndex: prevPos.index
      });
      this.lastDraggingIndex = prevPos.index;
    }
  }
  onDragEnd({
    element,
    model,
    event
  }) {
    const prevPos = this.positions[model.$$id];
    const target = this.isTarget(model, event);
    if (target) {
      this.reorder.emit({
        prevIndex: prevPos.index,
        newIndex: target.i,
        model
      });
    }
    this.lastDraggingIndex = void 0;
    element.style.left = "auto";
  }
  isTarget(model, event) {
    let i = 0;
    const x = event.x || event.clientX;
    const y = event.y || event.clientY;
    const targets = this.document.elementsFromPoint(x, y);
    for (const id2 in this.positions) {
      const pos = this.positions[id2];
      if (model.$$id !== id2 && targets.find((el) => el === pos.element)) {
        return {
          pos,
          i
        };
      }
      i++;
    }
  }
  createMapDiffs() {
    return this.draggables.toArray().reduce((acc, curr) => {
      acc[curr.dragModel.$$id] = curr;
      return acc;
    }, {});
  }
};
_OrderableDirective.ɵfac = function OrderableDirective_Factory(t) {
  return new (t || _OrderableDirective)(ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(DOCUMENT));
};
_OrderableDirective.ɵdir = ɵɵdefineDirective({
  type: _OrderableDirective,
  selectors: [["", "orderable", ""]],
  contentQueries: function OrderableDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DraggableDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.draggables = _t);
    }
  },
  outputs: {
    reorder: "reorder",
    targetChanged: "targetChanged"
  }
});
var OrderableDirective = _OrderableDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderableDirective, [{
    type: Directive,
    args: [{
      selector: "[orderable]"
    }]
  }], () => [{
    type: KeyValueDiffers
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    reorder: [{
      type: Output
    }],
    targetChanged: [{
      type: Output
    }],
    draggables: [{
      type: ContentChildren,
      args: [DraggableDirective, {
        descendants: true
      }]
    }]
  });
})();
var _LongPressDirective = class _LongPressDirective {
  constructor() {
    this.pressEnabled = true;
    this.duration = 500;
    this.longPressStart = new EventEmitter();
    this.longPressing = new EventEmitter();
    this.longPressEnd = new EventEmitter();
    this.mouseX = 0;
    this.mouseY = 0;
  }
  get press() {
    return this.pressing;
  }
  get isLongPress() {
    return this.isLongPressing;
  }
  onMouseDown(event) {
    if (event.which !== 1 || !this.pressEnabled) {
      return;
    }
    const target = event.target;
    if (target.classList.contains("resize-handle")) {
      return;
    }
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    this.pressing = true;
    this.isLongPressing = false;
    const mouseup = fromEvent(document, "mouseup");
    this.subscription = mouseup.subscribe((ev) => this.onMouseup());
    this.timeout = setTimeout(() => {
      this.isLongPressing = true;
      this.longPressStart.emit({
        event,
        model: this.pressModel
      });
      this.subscription.add(fromEvent(document, "mousemove").pipe(takeUntil(mouseup)).subscribe((mouseEvent) => this.onMouseMove(mouseEvent)));
      this.loop(event);
    }, this.duration);
    this.loop(event);
  }
  onMouseMove(event) {
    if (this.pressing && !this.isLongPressing) {
      const xThres = Math.abs(event.clientX - this.mouseX) > 10;
      const yThres = Math.abs(event.clientY - this.mouseY) > 10;
      if (xThres || yThres) {
        this.endPress();
      }
    }
  }
  loop(event) {
    if (this.isLongPressing) {
      this.timeout = setTimeout(() => {
        this.longPressing.emit({
          event,
          model: this.pressModel
        });
        this.loop(event);
      }, 50);
    }
  }
  endPress() {
    clearTimeout(this.timeout);
    this.isLongPressing = false;
    this.pressing = false;
    this._destroySubscription();
    this.longPressEnd.emit({
      model: this.pressModel
    });
  }
  onMouseup() {
    this.endPress();
  }
  ngOnDestroy() {
    clearTimeout(this.timeout);
    this._destroySubscription();
  }
  _destroySubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = void 0;
    }
  }
};
_LongPressDirective.ɵfac = function LongPressDirective_Factory(t) {
  return new (t || _LongPressDirective)();
};
_LongPressDirective.ɵdir = ɵɵdefineDirective({
  type: _LongPressDirective,
  selectors: [["", "long-press", ""]],
  hostVars: 4,
  hostBindings: function LongPressDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) {
        return ctx.onMouseDown($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("press", ctx.press)("longpress", ctx.isLongPress);
    }
  },
  inputs: {
    pressEnabled: "pressEnabled",
    pressModel: "pressModel",
    duration: "duration"
  },
  outputs: {
    longPressStart: "longPressStart",
    longPressing: "longPressing",
    longPressEnd: "longPressEnd"
  }
});
var LongPressDirective = _LongPressDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LongPressDirective, [{
    type: Directive,
    args: [{
      selector: "[long-press]"
    }]
  }], null, {
    pressEnabled: [{
      type: Input
    }],
    pressModel: [{
      type: Input
    }],
    duration: [{
      type: Input
    }],
    longPressStart: [{
      type: Output
    }],
    longPressing: [{
      type: Output
    }],
    longPressEnd: [{
      type: Output
    }],
    press: [{
      type: HostBinding,
      args: ["class.press"]
    }],
    isLongPress: [{
      type: HostBinding,
      args: ["class.longpress"]
    }],
    onMouseDown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }]
  });
})();
var _ScrollerComponent = class _ScrollerComponent {
  constructor(ngZone, element, renderer) {
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.scrollbarV = false;
    this.scrollbarH = false;
    this.scroll = new EventEmitter();
    this.scrollYPos = 0;
    this.scrollXPos = 0;
    this.prevScrollYPos = 0;
    this.prevScrollXPos = 0;
    this._scrollEventListener = null;
    this.element = element.nativeElement;
  }
  ngOnInit() {
    if (this.scrollbarV || this.scrollbarH) {
      const renderer = this.renderer;
      this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
      this._scrollEventListener = this.onScrolled.bind(this);
      this.parentElement.addEventListener("scroll", this._scrollEventListener);
    }
  }
  ngOnDestroy() {
    if (this._scrollEventListener) {
      this.parentElement.removeEventListener("scroll", this._scrollEventListener);
      this._scrollEventListener = null;
    }
  }
  setOffset(offsetY) {
    if (this.parentElement) {
      this.parentElement.scrollTop = offsetY;
    }
  }
  onScrolled(event) {
    const dom = event.currentTarget;
    requestAnimationFrame(() => {
      this.scrollYPos = dom.scrollTop;
      this.scrollXPos = dom.scrollLeft;
      this.updateOffset();
    });
  }
  updateOffset() {
    let direction;
    if (this.scrollYPos < this.prevScrollYPos) {
      direction = "down";
    } else if (this.scrollYPos > this.prevScrollYPos) {
      direction = "up";
    }
    this.scroll.emit({
      direction,
      scrollYPos: this.scrollYPos,
      scrollXPos: this.scrollXPos
    });
    this.prevScrollYPos = this.scrollYPos;
    this.prevScrollXPos = this.scrollXPos;
  }
};
_ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) {
  return new (t || _ScrollerComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_ScrollerComponent.ɵcmp = ɵɵdefineComponent({
  type: _ScrollerComponent,
  selectors: [["datatable-scroller"]],
  hostAttrs: [1, "datatable-scroll"],
  hostVars: 4,
  hostBindings: function ScrollerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
    }
  },
  inputs: {
    scrollbarV: "scrollbarV",
    scrollbarH: "scrollbarH",
    scrollHeight: "scrollHeight",
    scrollWidth: "scrollWidth"
  },
  outputs: {
    scroll: "scroll"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ScrollerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var ScrollerComponent = _ScrollerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollerComponent, [{
    type: Component,
    args: [{
      selector: "datatable-scroller",
      template: ` <ng-content></ng-content> `,
      host: {
        class: "datatable-scroll"
      },
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    scrollbarV: [{
      type: Input
    }],
    scrollbarH: [{
      type: Input
    }],
    scrollHeight: [{
      type: HostBinding,
      args: ["style.height.px"]
    }, {
      type: Input
    }],
    scrollWidth: [{
      type: HostBinding,
      args: ["style.width.px"]
    }, {
      type: Input
    }],
    scroll: [{
      type: Output
    }]
  });
})();
var _DatatableGroupHeaderTemplateDirective = class _DatatableGroupHeaderTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_DatatableGroupHeaderTemplateDirective.ɵfac = function DatatableGroupHeaderTemplateDirective_Factory(t) {
  return new (t || _DatatableGroupHeaderTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
_DatatableGroupHeaderTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: _DatatableGroupHeaderTemplateDirective,
  selectors: [["", "ngx-datatable-group-header-template", ""]]
});
var DatatableGroupHeaderTemplateDirective = _DatatableGroupHeaderTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatatableGroupHeaderTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[ngx-datatable-group-header-template]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _DatatableGroupHeaderDirective = class _DatatableGroupHeaderDirective {
  constructor() {
    this.rowHeight = 0;
    this.toggle = new EventEmitter();
  }
  get template() {
    return this._templateInput || this._templateQuery;
  }
  /**
   * Toggle the expansion of a group
   */
  toggleExpandGroup(group) {
    this.toggle.emit({
      type: "group",
      value: group
    });
  }
  /**
   * Expand all groups
   */
  expandAllGroups() {
    this.toggle.emit({
      type: "all",
      value: true
    });
  }
  /**
   * Collapse all groups
   */
  collapseAllGroups() {
    this.toggle.emit({
      type: "all",
      value: false
    });
  }
};
_DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) {
  return new (t || _DatatableGroupHeaderDirective)();
};
_DatatableGroupHeaderDirective.ɵdir = ɵɵdefineDirective({
  type: _DatatableGroupHeaderDirective,
  selectors: [["ngx-datatable-group-header"]],
  contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DatatableGroupHeaderTemplateDirective, 7, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._templateQuery = _t.first);
    }
  },
  inputs: {
    rowHeight: "rowHeight",
    _templateInput: [InputFlags.None, "template", "_templateInput"]
  },
  outputs: {
    toggle: "toggle"
  }
});
var DatatableGroupHeaderDirective = _DatatableGroupHeaderDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatatableGroupHeaderDirective, [{
    type: Directive,
    args: [{
      selector: "ngx-datatable-group-header"
    }]
  }], null, {
    rowHeight: [{
      type: Input
    }],
    _templateInput: [{
      type: Input,
      args: ["template"]
    }],
    _templateQuery: [{
      type: ContentChild,
      args: [DatatableGroupHeaderTemplateDirective, {
        read: TemplateRef,
        static: true
      }]
    }],
    toggle: [{
      type: Output
    }]
  });
})();
function emptyStringGetter() {
  return "";
}
function getterForProp(prop) {
  if (prop == null) {
    return emptyStringGetter;
  }
  if (typeof prop === "number") {
    return numericIndexGetter;
  } else {
    if (prop.indexOf(".") !== -1) {
      return deepValueGetter;
    } else {
      return shallowValueGetter;
    }
  }
}
function numericIndexGetter(row, index) {
  if (row == null) {
    return "";
  }
  if (!row || index == null) {
    return row;
  }
  const value = row[index];
  if (value == null) {
    return "";
  }
  return value;
}
function shallowValueGetter(obj, fieldName) {
  if (obj == null) {
    return "";
  }
  if (!obj || !fieldName) {
    return obj;
  }
  const value = obj[fieldName];
  if (value == null) {
    return "";
  }
  return value;
}
function deepValueGetter(obj, path) {
  if (obj == null) {
    return "";
  }
  if (!obj || !path) {
    return obj;
  }
  let current = obj[path];
  if (current !== void 0) {
    return current;
  }
  current = obj;
  const splits = path.split(".");
  if (splits.length) {
    for (const split of splits) {
      current = current[split];
      if (current === void 0 || current === null) {
        return "";
      }
    }
  }
  return current;
}
function optionalGetterForProp(prop) {
  return prop && ((row) => getterForProp(prop)(row, prop));
}
function groupRowsByParents(rows, from, to) {
  if (from && to) {
    const nodeById = {};
    const l = rows.length;
    let node = null;
    nodeById[0] = new TreeNode();
    const uniqIDs = rows.reduce((arr, item) => {
      const toValue = to(item);
      if (arr.indexOf(toValue) === -1) {
        arr.push(toValue);
      }
      return arr;
    }, []);
    for (let i = 0; i < l; i++) {
      nodeById[to(rows[i])] = new TreeNode(rows[i]);
    }
    for (let i = 0; i < l; i++) {
      node = nodeById[to(rows[i])];
      let parent = 0;
      const fromValue = from(node.row);
      if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
        parent = fromValue;
      }
      node.parent = nodeById[parent];
      node.row.level = node.parent.row.level + 1;
      node.parent.children.push(node);
    }
    let resolvedRows = [];
    nodeById[0].flatten(function() {
      resolvedRows = [...resolvedRows, this.row];
    }, true);
    return resolvedRows;
  } else {
    return rows;
  }
}
var TreeNode = class {
  constructor(row = null) {
    if (!row) {
      row = {
        level: -1,
        treeStatus: "expanded"
      };
    }
    this.row = row;
    this.parent = null;
    this.children = [];
  }
  flatten(f, recursive) {
    if (this.row.treeStatus === "expanded") {
      for (let i = 0, l = this.children.length; i < l; i++) {
        const child = this.children[i];
        f.apply(child, Array.prototype.slice.call(arguments, 2));
        if (recursive) {
          child.flatten.apply(child, arguments);
        }
      }
    }
  }
};
function camelCase(str) {
  str = str.replace(/[^a-zA-Z0-9 ]/g, " ");
  str = str.replace(/([a-z](?=[A-Z]))/g, "$1 ");
  str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, "").trim().toLowerCase();
  str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function(a, b, c) {
    return b.trim() + c.toUpperCase();
  });
  return str;
}
function deCamelCase(str) {
  return str.replace(/([A-Z])/g, (match) => ` ${match}`).replace(/^./, (match) => match.toUpperCase());
}
function id() {
  return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
}
function setColumnDefaults(columns) {
  if (!columns) {
    return;
  }
  let treeColumnFound = false;
  for (const column of columns) {
    if (!column.$$id) {
      column.$$id = id();
    }
    if (isNullOrUndefined(column.prop) && column.name) {
      column.prop = camelCase(column.name);
    }
    if (!column.$$valueGetter) {
      column.$$valueGetter = getterForProp(column.prop);
    }
    if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
      column.name = deCamelCase(String(column.prop));
    }
    if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
      column.name = "";
    }
    if (!column.hasOwnProperty("resizeable")) {
      column.resizeable = true;
    }
    if (!column.hasOwnProperty("sortable")) {
      column.sortable = true;
    }
    if (!column.hasOwnProperty("draggable")) {
      column.draggable = true;
    }
    if (!column.hasOwnProperty("canAutoResize")) {
      column.canAutoResize = true;
    }
    if (!column.hasOwnProperty("width")) {
      column.width = 150;
    }
    if (!column.hasOwnProperty("isTreeColumn")) {
      column.isTreeColumn = false;
    } else {
      if (column.isTreeColumn && !treeColumnFound) {
        treeColumnFound = true;
      } else {
        column.isTreeColumn = false;
      }
    }
  }
}
function isNullOrUndefined(value) {
  return value === null || value === void 0;
}
function translateTemplates(templates) {
  const result = [];
  for (const temp of templates) {
    const col = {};
    const props = Object.getOwnPropertyNames(temp);
    for (const prop of props) {
      col[prop] = temp[prop];
    }
    if (temp.headerTemplate) {
      col.headerTemplate = temp.headerTemplate;
    }
    if (temp.cellTemplate) {
      col.cellTemplate = temp.cellTemplate;
    }
    if (temp.ghostCellTemplate) {
      col.ghostCellTemplate = temp.ghostCellTemplate;
    }
    if (temp.summaryFunc) {
      col.summaryFunc = temp.summaryFunc;
    }
    if (temp.summaryTemplate) {
      col.summaryTemplate = temp.summaryTemplate;
    }
    result.push(col);
  }
  return result;
}
var ColumnMode;
(function(ColumnMode2) {
  ColumnMode2["standard"] = "standard";
  ColumnMode2["flex"] = "flex";
  ColumnMode2["force"] = "force";
})(ColumnMode || (ColumnMode = {}));
var SelectionType;
(function(SelectionType2) {
  SelectionType2["single"] = "single";
  SelectionType2["multi"] = "multi";
  SelectionType2["multiClick"] = "multiClick";
  SelectionType2["cell"] = "cell";
  SelectionType2["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
var SortType;
(function(SortType2) {
  SortType2["single"] = "single";
  SortType2["multi"] = "multi";
})(SortType || (SortType = {}));
var ContextmenuType;
(function(ContextmenuType2) {
  ContextmenuType2["header"] = "header";
  ContextmenuType2["body"] = "body";
})(ContextmenuType || (ContextmenuType = {}));
var _DataTableColumnHeaderDirective = class _DataTableColumnHeaderDirective {
  constructor(template) {
    this.template = template;
  }
};
_DataTableColumnHeaderDirective.ɵfac = function DataTableColumnHeaderDirective_Factory(t) {
  return new (t || _DataTableColumnHeaderDirective)(ɵɵdirectiveInject(TemplateRef));
};
_DataTableColumnHeaderDirective.ɵdir = ɵɵdefineDirective({
  type: _DataTableColumnHeaderDirective,
  selectors: [["", "ngx-datatable-header-template", ""]]
});
var DataTableColumnHeaderDirective = _DataTableColumnHeaderDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableColumnHeaderDirective, [{
    type: Directive,
    args: [{
      selector: "[ngx-datatable-header-template]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _DataTableColumnCellDirective = class _DataTableColumnCellDirective {
  constructor(template) {
    this.template = template;
  }
};
_DataTableColumnCellDirective.ɵfac = function DataTableColumnCellDirective_Factory(t) {
  return new (t || _DataTableColumnCellDirective)(ɵɵdirectiveInject(TemplateRef));
};
_DataTableColumnCellDirective.ɵdir = ɵɵdefineDirective({
  type: _DataTableColumnCellDirective,
  selectors: [["", "ngx-datatable-cell-template", ""]]
});
var DataTableColumnCellDirective = _DataTableColumnCellDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableColumnCellDirective, [{
    type: Directive,
    args: [{
      selector: "[ngx-datatable-cell-template]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _DataTableColumnCellTreeToggle = class _DataTableColumnCellTreeToggle {
  constructor(template) {
    this.template = template;
  }
};
_DataTableColumnCellTreeToggle.ɵfac = function DataTableColumnCellTreeToggle_Factory(t) {
  return new (t || _DataTableColumnCellTreeToggle)(ɵɵdirectiveInject(TemplateRef));
};
_DataTableColumnCellTreeToggle.ɵdir = ɵɵdefineDirective({
  type: _DataTableColumnCellTreeToggle,
  selectors: [["", "ngx-datatable-tree-toggle", ""]]
});
var DataTableColumnCellTreeToggle = _DataTableColumnCellTreeToggle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableColumnCellTreeToggle, [{
    type: Directive,
    args: [{
      selector: "[ngx-datatable-tree-toggle]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _DataTableColumnGhostCellDirective = class _DataTableColumnGhostCellDirective {
  constructor(template) {
    this.template = template;
  }
};
_DataTableColumnGhostCellDirective.ɵfac = function DataTableColumnGhostCellDirective_Factory(t) {
  return new (t || _DataTableColumnGhostCellDirective)(ɵɵdirectiveInject(TemplateRef));
};
_DataTableColumnGhostCellDirective.ɵdir = ɵɵdefineDirective({
  type: _DataTableColumnGhostCellDirective,
  selectors: [["", "ngx-datatable-ghost-cell-template", ""]]
});
var DataTableColumnGhostCellDirective = _DataTableColumnGhostCellDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableColumnGhostCellDirective, [{
    type: Directive,
    args: [{
      selector: "[ngx-datatable-ghost-cell-template]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _DataTableColumnDirective = class _DataTableColumnDirective {
  get cellTemplate() {
    return this._cellTemplateInput || this._cellTemplateQuery;
  }
  get headerTemplate() {
    return this._headerTemplateInput || this._headerTemplateQuery;
  }
  get treeToggleTemplate() {
    return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
  }
  get ghostCellTemplate() {
    return this._ghostCellTemplateInput || this._ghostCellTemplateQuery;
  }
  constructor(columnChangesService) {
    this.columnChangesService = columnChangesService;
    this.isFirstChange = true;
  }
  ngOnChanges() {
    if (this.isFirstChange) {
      this.isFirstChange = false;
    } else {
      this.columnChangesService.onInputChange();
    }
  }
};
_DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) {
  return new (t || _DataTableColumnDirective)(ɵɵdirectiveInject(ColumnChangesService));
};
_DataTableColumnDirective.ɵdir = ɵɵdefineDirective({
  type: _DataTableColumnDirective,
  selectors: [["ngx-datatable-column"]],
  contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DataTableColumnCellDirective, 7, TemplateRef);
      ɵɵcontentQuery(dirIndex, DataTableColumnHeaderDirective, 7, TemplateRef);
      ɵɵcontentQuery(dirIndex, DataTableColumnCellTreeToggle, 7, TemplateRef);
      ɵɵcontentQuery(dirIndex, DataTableColumnGhostCellDirective, 7, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._cellTemplateQuery = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._headerTemplateQuery = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._treeToggleTemplateQuery = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._ghostCellTemplateQuery = _t.first);
    }
  },
  inputs: {
    name: "name",
    prop: "prop",
    frozenLeft: "frozenLeft",
    frozenRight: "frozenRight",
    flexGrow: "flexGrow",
    resizeable: "resizeable",
    comparator: "comparator",
    pipe: "pipe",
    sortable: "sortable",
    draggable: "draggable",
    canAutoResize: "canAutoResize",
    minWidth: "minWidth",
    width: "width",
    maxWidth: "maxWidth",
    checkboxable: "checkboxable",
    headerCheckboxable: "headerCheckboxable",
    headerClass: "headerClass",
    cellClass: "cellClass",
    isTreeColumn: "isTreeColumn",
    treeLevelIndent: "treeLevelIndent",
    summaryFunc: "summaryFunc",
    summaryTemplate: "summaryTemplate",
    _cellTemplateInput: [InputFlags.None, "cellTemplate", "_cellTemplateInput"],
    _headerTemplateInput: [InputFlags.None, "headerTemplate", "_headerTemplateInput"],
    _treeToggleTemplateInput: [InputFlags.None, "treeToggleTemplate", "_treeToggleTemplateInput"],
    _ghostCellTemplateInput: [InputFlags.None, "ghostCellTemplate", "_ghostCellTemplateInput"]
  },
  features: [ɵɵNgOnChangesFeature]
});
var DataTableColumnDirective = _DataTableColumnDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableColumnDirective, [{
    type: Directive,
    args: [{
      selector: "ngx-datatable-column"
    }]
  }], () => [{
    type: ColumnChangesService
  }], {
    name: [{
      type: Input
    }],
    prop: [{
      type: Input
    }],
    frozenLeft: [{
      type: Input
    }],
    frozenRight: [{
      type: Input
    }],
    flexGrow: [{
      type: Input
    }],
    resizeable: [{
      type: Input
    }],
    comparator: [{
      type: Input
    }],
    pipe: [{
      type: Input
    }],
    sortable: [{
      type: Input
    }],
    draggable: [{
      type: Input
    }],
    canAutoResize: [{
      type: Input
    }],
    minWidth: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    maxWidth: [{
      type: Input
    }],
    checkboxable: [{
      type: Input
    }],
    headerCheckboxable: [{
      type: Input
    }],
    headerClass: [{
      type: Input
    }],
    cellClass: [{
      type: Input
    }],
    isTreeColumn: [{
      type: Input
    }],
    treeLevelIndent: [{
      type: Input
    }],
    summaryFunc: [{
      type: Input
    }],
    summaryTemplate: [{
      type: Input
    }],
    _cellTemplateInput: [{
      type: Input,
      args: ["cellTemplate"]
    }],
    _cellTemplateQuery: [{
      type: ContentChild,
      args: [DataTableColumnCellDirective, {
        read: TemplateRef,
        static: true
      }]
    }],
    _headerTemplateInput: [{
      type: Input,
      args: ["headerTemplate"]
    }],
    _headerTemplateQuery: [{
      type: ContentChild,
      args: [DataTableColumnHeaderDirective, {
        read: TemplateRef,
        static: true
      }]
    }],
    _treeToggleTemplateInput: [{
      type: Input,
      args: ["treeToggleTemplate"]
    }],
    _treeToggleTemplateQuery: [{
      type: ContentChild,
      args: [DataTableColumnCellTreeToggle, {
        read: TemplateRef,
        static: true
      }]
    }],
    _ghostCellTemplateInput: [{
      type: Input,
      args: ["ghostCellTemplate"]
    }],
    _ghostCellTemplateQuery: [{
      type: ContentChild,
      args: [DataTableColumnGhostCellDirective, {
        read: TemplateRef,
        static: true
      }]
    }]
  });
})();
var _DatatableRowDetailTemplateDirective = class _DatatableRowDetailTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_DatatableRowDetailTemplateDirective.ɵfac = function DatatableRowDetailTemplateDirective_Factory(t) {
  return new (t || _DatatableRowDetailTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
_DatatableRowDetailTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: _DatatableRowDetailTemplateDirective,
  selectors: [["", "ngx-datatable-row-detail-template", ""]]
});
var DatatableRowDetailTemplateDirective = _DatatableRowDetailTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatatableRowDetailTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[ngx-datatable-row-detail-template]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _DatatableRowDetailDirective = class _DatatableRowDetailDirective {
  constructor() {
    this.rowHeight = 0;
    this.toggle = new EventEmitter();
  }
  get template() {
    return this._templateInput || this._templateQuery;
  }
  /**
   * Toggle the expansion of the row
   */
  toggleExpandRow(row) {
    this.toggle.emit({
      type: "row",
      value: row
    });
  }
  /**
   * API method to expand all the rows.
   */
  expandAllRows() {
    this.toggle.emit({
      type: "all",
      value: true
    });
  }
  /**
   * API method to collapse all the rows.
   */
  collapseAllRows() {
    this.toggle.emit({
      type: "all",
      value: false
    });
  }
};
_DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) {
  return new (t || _DatatableRowDetailDirective)();
};
_DatatableRowDetailDirective.ɵdir = ɵɵdefineDirective({
  type: _DatatableRowDetailDirective,
  selectors: [["ngx-datatable-row-detail"]],
  contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DatatableRowDetailTemplateDirective, 7, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._templateQuery = _t.first);
    }
  },
  inputs: {
    rowHeight: "rowHeight",
    _templateInput: [InputFlags.None, "template", "_templateInput"]
  },
  outputs: {
    toggle: "toggle"
  }
});
var DatatableRowDetailDirective = _DatatableRowDetailDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatatableRowDetailDirective, [{
    type: Directive,
    args: [{
      selector: "ngx-datatable-row-detail"
    }]
  }], null, {
    rowHeight: [{
      type: Input
    }],
    _templateInput: [{
      type: Input,
      args: ["template"]
    }],
    _templateQuery: [{
      type: ContentChild,
      args: [DatatableRowDetailTemplateDirective, {
        read: TemplateRef,
        static: true
      }]
    }],
    toggle: [{
      type: Output
    }]
  });
})();
var _DatatableFooterDirective = class _DatatableFooterDirective {
  get template() {
    return this._templateInput || this._templateQuery;
  }
};
_DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) {
  return new (t || _DatatableFooterDirective)();
};
_DatatableFooterDirective.ɵdir = ɵɵdefineDirective({
  type: _DatatableFooterDirective,
  selectors: [["ngx-datatable-footer"]],
  contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DataTableFooterTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._templateQuery = _t.first);
    }
  },
  inputs: {
    footerHeight: "footerHeight",
    totalMessage: "totalMessage",
    selectedMessage: "selectedMessage",
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    _templateInput: [InputFlags.None, "template", "_templateInput"]
  }
});
var DatatableFooterDirective = _DatatableFooterDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatatableFooterDirective, [{
    type: Directive,
    args: [{
      selector: "ngx-datatable-footer"
    }]
  }], null, {
    footerHeight: [{
      type: Input
    }],
    totalMessage: [{
      type: Input
    }],
    selectedMessage: [{
      type: Input
    }],
    pagerLeftArrowIcon: [{
      type: Input
    }],
    pagerRightArrowIcon: [{
      type: Input
    }],
    pagerPreviousIcon: [{
      type: Input
    }],
    pagerNextIcon: [{
      type: Input
    }],
    _templateInput: [{
      type: Input,
      args: ["template"]
    }],
    _templateQuery: [{
      type: ContentChild,
      args: [DataTableFooterTemplateDirective, {
        read: TemplateRef
      }]
    }]
  });
})();
function columnsByPin(cols) {
  const ret = {
    left: [],
    center: [],
    right: []
  };
  if (cols) {
    for (const col of cols) {
      if (col.frozenLeft) {
        ret.left.push(col);
      } else if (col.frozenRight) {
        ret.right.push(col);
      } else {
        ret.center.push(col);
      }
    }
  }
  return ret;
}
function columnGroupWidths(groups, all) {
  return {
    left: columnTotalWidth(groups.left),
    center: columnTotalWidth(groups.center),
    right: columnTotalWidth(groups.right),
    total: Math.floor(columnTotalWidth(all))
  };
}
function columnTotalWidth(columns, prop) {
  let totalWidth = 0;
  if (columns) {
    for (const c of columns) {
      const has = prop && c[prop];
      const width = has ? c[prop] : c.width;
      totalWidth = totalWidth + parseFloat(width);
    }
  }
  return totalWidth;
}
function columnsTotalWidth(columns, prop) {
  let totalWidth = 0;
  for (const column of columns) {
    const has = prop && column[prop];
    totalWidth = totalWidth + (has ? column[prop] : column.width);
  }
  return totalWidth;
}
function columnsByPinArr(val) {
  const colsByPinArr = [];
  const colsByPin = columnsByPin(val);
  colsByPinArr.push({
    type: "left",
    columns: colsByPin.left
  });
  colsByPinArr.push({
    type: "center",
    columns: colsByPin.center
  });
  colsByPinArr.push({
    type: "right",
    columns: colsByPin.right
  });
  return colsByPinArr;
}
var RowHeightCache = class {
  constructor() {
    this.treeArray = [];
  }
  /**
   * Clear the Tree array.
   */
  clearCache() {
    this.treeArray = [];
  }
  /**
   * Initialize the Fenwick tree with row Heights.
   *
   * @param rows The array of rows which contain the expanded status.
   * @param rowHeight The row height.
   * @param detailRowHeight The detail row height.
   */
  initCache(details) {
    const {
      rows,
      rowHeight,
      detailRowHeight,
      externalVirtual,
      rowCount,
      rowIndexes,
      rowExpansions
    } = details;
    const isFn = typeof rowHeight === "function";
    const isDetailFn = typeof detailRowHeight === "function";
    if (!isFn && isNaN(rowHeight)) {
      throw new Error(`Row Height cache initialization failed. Please ensure that 'rowHeight' is a
        valid number or function value: (${rowHeight}) when 'scrollbarV' is enabled.`);
    }
    if (!isDetailFn && isNaN(detailRowHeight)) {
      throw new Error(`Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a
        valid number or function value: (${detailRowHeight}) when 'scrollbarV' is enabled.`);
    }
    const n = externalVirtual ? rowCount : rows.length;
    this.treeArray = new Array(n);
    for (let i = 0; i < n; ++i) {
      this.treeArray[i] = 0;
    }
    for (let i = 0; i < n; ++i) {
      const row = rows[i];
      let currentRowHeight = rowHeight;
      if (isFn) {
        currentRowHeight = rowHeight(row);
      }
      const expanded = rowExpansions.has(row);
      if (row && expanded) {
        if (isDetailFn) {
          const index = rowIndexes.get(row);
          currentRowHeight += detailRowHeight(row, index);
        } else {
          currentRowHeight += detailRowHeight;
        }
      }
      this.update(i, currentRowHeight);
    }
  }
  /**
   * Given the ScrollY position i.e. sum, provide the rowIndex
   * that is present in the current view port.  Below handles edge cases.
   */
  getRowIndex(scrollY) {
    if (scrollY === 0) {
      return 0;
    }
    return this.calcRowIndex(scrollY);
  }
  /**
   * When a row is expanded or rowHeight is changed, update the height.  This can
   * be utilized in future when Angular Data table supports dynamic row heights.
   */
  update(atRowIndex, byRowHeight) {
    if (!this.treeArray.length) {
      throw new Error(`Update at index ${atRowIndex} with value ${byRowHeight} failed:
        Row Height cache not initialized.`);
    }
    const n = this.treeArray.length;
    atRowIndex |= 0;
    while (atRowIndex < n) {
      this.treeArray[atRowIndex] += byRowHeight;
      atRowIndex |= atRowIndex + 1;
    }
  }
  /**
   * Range Sum query from 1 to the rowIndex
   */
  query(atIndex) {
    if (!this.treeArray.length) {
      throw new Error(`query at index ${atIndex} failed: Fenwick tree array not initialized.`);
    }
    let sum = 0;
    atIndex |= 0;
    while (atIndex >= 0) {
      sum += this.treeArray[atIndex];
      atIndex = (atIndex & atIndex + 1) - 1;
    }
    return sum;
  }
  /**
   * Find the total height between 2 row indexes
   */
  queryBetween(atIndexA, atIndexB) {
    return this.query(atIndexB) - this.query(atIndexA - 1);
  }
  /**
   * Given the ScrollY position i.e. sum, provide the rowIndex
   * that is present in the current view port.
   */
  calcRowIndex(sum) {
    if (!this.treeArray.length) {
      return 0;
    }
    let pos = -1;
    const dataLength = this.treeArray.length;
    const highestBit = Math.pow(2, dataLength.toString(2).length - 1);
    for (let blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
      const nextPos = pos + blockSize;
      if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
        sum -= this.treeArray[nextPos];
        pos = nextPos;
      }
    }
    return pos + 1;
  }
};
var cache = {};
var testStyle = typeof document !== "undefined" ? document.createElement("div").style : void 0;
var prefix = function() {
  const styles = typeof window !== "undefined" ? window.getComputedStyle(document.documentElement, "") : void 0;
  const match = typeof styles !== "undefined" ? Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/) : null;
  const pre = match !== null ? match[1] : void 0;
  const dom = typeof pre !== "undefined" ? "WebKit|Moz|MS|O".match(new RegExp("(" + pre + ")", "i"))[1] : void 0;
  return dom ? {
    dom,
    lowercase: pre,
    css: `-${pre}-`,
    js: pre[0].toUpperCase() + pre.substr(1)
  } : void 0;
}();
function getVendorPrefixedName(property) {
  const name = camelCase(property);
  if (!cache[name]) {
    if (prefix !== void 0 && testStyle[prefix.css + property] !== void 0) {
      cache[name] = prefix.css + property;
    } else if (testStyle[property] !== void 0) {
      cache[name] = property;
    }
  }
  return cache[name];
}
var transform = typeof window !== "undefined" ? getVendorPrefixedName("transform") : void 0;
var backfaceVisibility = typeof window !== "undefined" ? getVendorPrefixedName("backfaceVisibility") : void 0;
var hasCSSTransforms = typeof window !== "undefined" ? !!getVendorPrefixedName("transform") : void 0;
var hasCSS3DTransforms = typeof window !== "undefined" ? !!getVendorPrefixedName("perspective") : void 0;
var ua = typeof window !== "undefined" ? window.navigator.userAgent : "Chrome";
var isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
function translateXY(styles, x, y) {
  if (typeof transform !== "undefined" && hasCSSTransforms) {
    if (!isSafari && hasCSS3DTransforms) {
      styles[transform] = `translate3d(${x}px, ${y}px, 0)`;
      styles[backfaceVisibility] = "hidden";
    } else {
      styles[camelCase(transform)] = `translate(${x}px, ${y}px)`;
    }
  } else {
    styles.top = `${y}px`;
    styles.left = `${x}px`;
  }
}
var _ProgressBarComponent = class _ProgressBarComponent {
};
_ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
  return new (t || _ProgressBarComponent)();
};
_ProgressBarComponent.ɵcmp = ɵɵdefineComponent({
  type: _ProgressBarComponent,
  selectors: [["datatable-progress"]],
  decls: 3,
  vars: 0,
  consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]],
  template: function ProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵelement(2, "div", 2);
      ɵɵelementEnd()();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var ProgressBarComponent = _ProgressBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarComponent, [{
    type: Component,
    args: [{
      selector: "datatable-progress",
      template: `
    <div class="progress-linear" role="progressbar">
      <div class="container">
        <div class="bar"></div>
      </div>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var Keys;
(function(Keys2) {
  Keys2[Keys2["up"] = 38] = "up";
  Keys2[Keys2["down"] = 40] = "down";
  Keys2[Keys2["return"] = 13] = "return";
  Keys2[Keys2["escape"] = 27] = "escape";
  Keys2[Keys2["left"] = 37] = "left";
  Keys2[Keys2["right"] = 39] = "right";
})(Keys || (Keys = {}));
var SortDirection;
(function(SortDirection2) {
  SortDirection2["asc"] = "asc";
  SortDirection2["desc"] = "desc";
})(SortDirection || (SortDirection = {}));
var _DataTableGhostLoaderComponent = class _DataTableGhostLoaderComponent {
};
_DataTableGhostLoaderComponent.ɵfac = function DataTableGhostLoaderComponent_Factory(t) {
  return new (t || _DataTableGhostLoaderComponent)();
};
_DataTableGhostLoaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _DataTableGhostLoaderComponent,
  selectors: [["ghost-loader"]],
  inputs: {
    columns: "columns",
    pageSize: "pageSize",
    rowHeight: "rowHeight",
    ghostBodyHeight: "ghostBodyHeight"
  },
  decls: 2,
  vars: 4,
  consts: [[1, "ghost-loader", "ghost-cell-container"], ["class", "ghost-element", 3, "height", 4, "ngFor", "ngForOf"], [1, "ghost-element"], [4, "ngFor", "ngForOf"], ["class", "line ghost-cell-strip", 3, "width", 4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], ["ghostCellTemplate", ""], [1, "line", "ghost-cell-strip"]],
  template: function DataTableGhostLoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, DataTableGhostLoaderComponent_div_1_Template, 2, 3, "div", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵstyleProp("height", ctx.ghostBodyHeight + "px");
      ɵɵadvance();
      ɵɵproperty("ngForOf", ɵɵpureFunction0(3, _c1).constructor(ctx.pageSize));
    }
  },
  dependencies: [NgForOf, NgIf, NgTemplateOutlet],
  styles: ["@keyframes _ngcontent-%COMP%_ghost{0%{background-position:0vw 0}to{background-position:100vw 0}}.ghost-loader[_ngcontent-%COMP%]{overflow:hidden}.ghost-loader[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:100%;height:12px;animation-name:_ngcontent-%COMP%_ghost;animation-iteration-count:infinite;animation-timing-function:linear}.ghost-loader[_ngcontent-%COMP%]   .ghost-element[_ngcontent-%COMP%]{display:flex}.ghost-overlay[_nghost-%COMP%]{position:sticky;top:20px}.ghost-overlay[_nghost-%COMP%]   .ghost-loader[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{margin:.9rem 1.2rem}"],
  changeDetection: 0
});
var DataTableGhostLoaderComponent = _DataTableGhostLoaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableGhostLoaderComponent, [{
    type: Component,
    args: [{
      selector: `ghost-loader`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div [style.height]="ghostBodyHeight + 'px'" class="ghost-loader ghost-cell-container">
  <div [style.height]="rowHeight + 'px'" class="ghost-element" *ngFor="let item of [].constructor(pageSize)">
    <ng-container *ngFor="let col of columns">
      <div class="line ghost-cell-strip" *ngIf="!col.ghostCellTemplate else ghostCellTemplate;" [style.width]="col?.width + 'px'" >
      </div>
      <ng-template
        #ghostCellTemplate
        [ngTemplateOutlet]="col.ghostCellTemplate"
      >
      </ng-template>
    </ng-container>
  </div>
</div>
`,
      styles: ["@keyframes ghost{0%{background-position:0vw 0}to{background-position:100vw 0}}.ghost-loader{overflow:hidden}.ghost-loader .line{width:100%;height:12px;animation-name:ghost;animation-iteration-count:infinite;animation-timing-function:linear}.ghost-loader .ghost-element{display:flex}:host.ghost-overlay{position:sticky;top:20px}:host.ghost-overlay .ghost-loader .line{margin:.9rem 1.2rem}\n"]
    }]
  }], null, {
    columns: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    rowHeight: [{
      type: Input
    }],
    ghostBodyHeight: [{
      type: Input
    }]
  });
})();
var _DataTableBodyCellComponent = class _DataTableBodyCellComponent {
  set disable$(val) {
    this._disable$ = val;
    this.cellContext.disable$ = val;
  }
  get disable$() {
    return this._disable$;
  }
  set group(group) {
    this._group = group;
    this.cellContext.group = group;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get group() {
    return this._group;
  }
  set rowHeight(val) {
    this._rowHeight = val;
    this.cellContext.rowHeight = val;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get rowHeight() {
    return this._rowHeight;
  }
  set isSelected(val) {
    this._isSelected = val;
    this.cellContext.isSelected = val;
    this.cd.markForCheck();
  }
  get isSelected() {
    return this._isSelected;
  }
  set expanded(val) {
    this._expanded = val;
    this.cellContext.expanded = val;
    this.cd.markForCheck();
  }
  get expanded() {
    return this._expanded;
  }
  set rowIndex(val) {
    this._rowIndex = val;
    this.cellContext.rowIndex = val;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get rowIndex() {
    return this._rowIndex;
  }
  set column(column) {
    this._column = column;
    this.cellContext.column = column;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get column() {
    return this._column;
  }
  set row(row) {
    this._row = row;
    this.cellContext.row = row;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get row() {
    return this._row;
  }
  set sorts(val) {
    this._sorts = val;
    this.calcSortDir = this.calcSortDir(val);
  }
  get sorts() {
    return this._sorts;
  }
  set treeStatus(status) {
    if (status !== "collapsed" && status !== "expanded" && status !== "loading" && status !== "disabled") {
      this._treeStatus = "collapsed";
    } else {
      this._treeStatus = status;
    }
    this.cellContext.treeStatus = this._treeStatus;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get treeStatus() {
    return this._treeStatus;
  }
  get columnCssClasses() {
    let cls = "datatable-body-cell";
    if (this.column.cellClass) {
      if (typeof this.column.cellClass === "string") {
        cls += " " + this.column.cellClass;
      } else if (typeof this.column.cellClass === "function") {
        const res = this.column.cellClass({
          row: this.row,
          group: this.group,
          column: this.column,
          value: this.value,
          rowHeight: this.rowHeight
        });
        if (typeof res === "string") {
          cls += " " + res;
        } else if (typeof res === "object") {
          const keys = Object.keys(res);
          for (const k of keys) {
            if (res[k] === true) {
              cls += ` ${k}`;
            }
          }
        }
      }
    }
    if (!this.sortDir) {
      cls += " sort-active";
    }
    if (this.isFocused && !this.disable$?.value) {
      cls += " active";
    }
    if (this.sortDir === SortDirection.asc) {
      cls += " sort-asc";
    }
    if (this.sortDir === SortDirection.desc) {
      cls += " sort-desc";
    }
    if (this.disable$?.value) {
      cls += " row-disabled";
    }
    return cls;
  }
  get width() {
    return this.column.width;
  }
  get minWidth() {
    return this.column.minWidth;
  }
  get maxWidth() {
    return this.column.maxWidth;
  }
  get height() {
    const height = this.rowHeight;
    if (isNaN(height)) {
      return height;
    }
    return height + "px";
  }
  constructor(element, cd) {
    this.cd = cd;
    this.ghostLoadingIndicator = false;
    this.activate = new EventEmitter();
    this.treeAction = new EventEmitter();
    this.isFocused = false;
    this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
    this.activateFn = this.activate.emit.bind(this.activate);
    this.cellContext = {
      onCheckboxChangeFn: this.onCheckboxChangeFn,
      activateFn: this.activateFn,
      row: this.row,
      group: this.group,
      value: this.value,
      column: this.column,
      rowHeight: this.rowHeight,
      isSelected: this.isSelected,
      rowIndex: this.rowIndex,
      treeStatus: this.treeStatus,
      disable$: this.disable$,
      onTreeAction: this.onTreeAction.bind(this)
    };
    this._element = element.nativeElement;
  }
  ngDoCheck() {
    this.checkValueUpdates();
  }
  ngOnDestroy() {
    if (this.cellTemplate) {
      this.cellTemplate.clear();
    }
    if (this.ghostLoaderTemplate) {
      this.ghostLoaderTemplate.clear();
    }
  }
  checkValueUpdates() {
    let value = "";
    if (!this.row || !this.column) {
      value = "";
    } else {
      const val = this.column.$$valueGetter(this.row, this.column.prop);
      const userPipe = this.column.pipe;
      if (userPipe) {
        value = userPipe.transform(val);
      } else if (value !== void 0) {
        value = val;
      }
    }
    if (this.value !== value) {
      this.value = value;
      this.cellContext.value = value;
      this.cellContext.disable$ = this.disable$;
      this.sanitizedValue = value !== null && value !== void 0 ? this.stripHtml(value) : value;
      this.cd.markForCheck();
    }
  }
  onFocus() {
    this.isFocused = true;
  }
  onBlur() {
    this.isFocused = false;
  }
  onClick(event) {
    this.activate.emit({
      type: "click",
      event,
      row: this.row,
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element
    });
  }
  onDblClick(event) {
    this.activate.emit({
      type: "dblclick",
      event,
      row: this.row,
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element
    });
  }
  onKeyDown(event) {
    const keyCode = event.keyCode;
    const isTargetCell = event.target === this._element;
    const isAction = keyCode === Keys.return || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;
    if (isAction && isTargetCell) {
      event.preventDefault();
      event.stopPropagation();
      this.activate.emit({
        type: "keydown",
        event,
        row: this.row,
        group: this.group,
        rowHeight: this.rowHeight,
        column: this.column,
        value: this.value,
        cellElement: this._element
      });
    }
  }
  onCheckboxChange(event) {
    this.activate.emit({
      type: "checkbox",
      event,
      row: this.row,
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element,
      treeStatus: "collapsed"
    });
  }
  calcSortDir(sorts) {
    if (!sorts) {
      return;
    }
    const sort = sorts.find((s) => s.prop === this.column.prop);
    if (sort) {
      return sort.dir;
    }
  }
  stripHtml(html) {
    if (!html.replace) {
      return html;
    }
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  }
  onTreeAction() {
    this.treeAction.emit(this.row);
  }
  calcLeftMargin(column, row) {
    const levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
    return column.isTreeColumn ? row.level * levelIndent : 0;
  }
};
_DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) {
  return new (t || _DataTableBodyCellComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
_DataTableBodyCellComponent.ɵcmp = ɵɵdefineComponent({
  type: _DataTableBodyCellComponent,
  selectors: [["datatable-body-cell"]],
  viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 7, ViewContainerRef);
      ɵɵviewQuery(_c3, 7, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cellTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ghostLoaderTemplate = _t.first);
    }
  },
  hostVars: 10,
  hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) {
        return ctx.onDblClick($event);
      })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.columnCssClasses);
      ɵɵstyleProp("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
    }
  },
  inputs: {
    displayCheck: "displayCheck",
    disable$: "disable$",
    group: "group",
    rowHeight: "rowHeight",
    isSelected: "isSelected",
    expanded: "expanded",
    rowIndex: "rowIndex",
    column: "column",
    row: "row",
    sorts: "sorts",
    treeStatus: "treeStatus",
    ghostLoadingIndicator: "ghostLoadingIndicator"
  },
  outputs: {
    activate: "activate",
    treeAction: "treeAction"
  },
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["ghostLoaderTemplate", ""], [1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "disabled", "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""], [3, "columns", "pageSize", 4, "ngIf"], [3, "columns", "pageSize"]],
  template: function DataTableBodyCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DataTableBodyCellComponent_ng_container_0_Template, 6, 6, "ng-container", 0)(1, DataTableBodyCellComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.row)("ngIfElse", _r2);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, DataTableGhostLoaderComponent, AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
var DataTableBodyCellComponent = _DataTableBodyCellComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableBodyCellComponent, [{
    type: Component,
    args: [{
      selector: "datatable-body-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
  <ng-container *ngIf="row else ghostLoaderTemplate;">
    <div class="datatable-body-cell-label" [style.margin-left.px]="calcLeftMargin(column, row)">
      <label
        *ngIf="column.checkboxable && (!displayCheck || displayCheck(row, column, value))"
        class="datatable-checkbox"
      >
        <input type="checkbox" [disabled]="disable$ | async" [checked]="isSelected" (click)="onCheckboxChange($event)" />
      </label>
      <ng-container *ngIf="column.isTreeColumn">
        <button
          *ngIf="!column.treeToggleTemplate"
          class="datatable-tree-button"
          [disabled]="treeStatus === 'disabled'"
          (click)="onTreeAction()"
          [attr.aria-label]="treeStatus"
        >
          <span>
            <i *ngIf="treeStatus === 'loading'" class="icon datatable-icon-collapse"></i>
            <i *ngIf="treeStatus === 'collapsed'" class="icon datatable-icon-up"></i>
            <i *ngIf="treeStatus === 'expanded' || treeStatus === 'disabled'" class="icon datatable-icon-down"></i>
          </span>
        </button>
        <ng-template
          *ngIf="column.treeToggleTemplate"
          [ngTemplateOutlet]="column.treeToggleTemplate"
          [ngTemplateOutletContext]="{ cellContext: cellContext }"
        >
        </ng-template>
      </ng-container>

      <span *ngIf="!column.cellTemplate" [title]="sanitizedValue" [innerHTML]="value"> </span>
      <ng-template
        #cellTemplate
        *ngIf="column.cellTemplate"
        [ngTemplateOutlet]="column.cellTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
    </div>
  </ng-container>
  <ng-template #ghostLoaderTemplate>
    <ghost-loader *ngIf="ghostLoadingIndicator" [columns]="[column]" [pageSize]="1"></ghost-loader>
  </ng-template>
  `
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    displayCheck: [{
      type: Input
    }],
    disable$: [{
      type: Input
    }],
    group: [{
      type: Input
    }],
    rowHeight: [{
      type: Input
    }],
    isSelected: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    rowIndex: [{
      type: Input
    }],
    column: [{
      type: Input
    }],
    row: [{
      type: Input
    }],
    sorts: [{
      type: Input
    }],
    treeStatus: [{
      type: Input
    }],
    ghostLoadingIndicator: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    treeAction: [{
      type: Output
    }],
    cellTemplate: [{
      type: ViewChild,
      args: ["cellTemplate", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    ghostLoaderTemplate: [{
      type: ViewChild,
      args: ["ghostLoaderTemplate", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    columnCssClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    width: [{
      type: HostBinding,
      args: ["style.width.px"]
    }],
    minWidth: [{
      type: HostBinding,
      args: ["style.minWidth.px"]
    }],
    maxWidth: [{
      type: HostBinding,
      args: ["style.maxWidth.px"]
    }],
    height: [{
      type: HostBinding,
      args: ["style.height"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onDblClick: [{
      type: HostListener,
      args: ["dblclick", ["$event"]]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var _DataTableBodyRowComponent = class _DataTableBodyRowComponent {
  set columns(val) {
    this._columns = val;
    this.recalculateColumns(val);
    this.buildStylesByGroup();
  }
  get columns() {
    return this._columns;
  }
  set innerWidth(val) {
    if (this._columns) {
      const colByPin = columnsByPin(this._columns);
      this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
    }
    this._innerWidth = val;
    this.recalculateColumns();
    this.buildStylesByGroup();
  }
  get innerWidth() {
    return this._innerWidth;
  }
  set offsetX(val) {
    this._offsetX = val;
    this.buildStylesByGroup();
  }
  get offsetX() {
    return this._offsetX;
  }
  get cssClass() {
    let cls = "datatable-body-row";
    if (this.isSelected) {
      cls += " active";
    }
    if (this.rowIndex % 2 !== 0) {
      cls += " datatable-row-odd";
    }
    if (this.rowIndex % 2 === 0) {
      cls += " datatable-row-even";
    }
    if (this.disable$ && this.disable$.value) {
      cls += " row-disabled";
    }
    if (this.rowClass) {
      const res = this.rowClass(this.row);
      if (typeof res === "string") {
        cls += ` ${res}`;
      } else if (typeof res === "object") {
        const keys = Object.keys(res);
        for (const k of keys) {
          if (res[k] === true) {
            cls += ` ${k}`;
          }
        }
      }
    }
    return cls;
  }
  get columnsTotalWidths() {
    return this._columnGroupWidths.total;
  }
  constructor(differs, scrollbarHelper, cd, element) {
    this.differs = differs;
    this.scrollbarHelper = scrollbarHelper;
    this.cd = cd;
    this.treeStatus = "collapsed";
    this.ghostLoadingIndicator = false;
    this.activate = new EventEmitter();
    this.treeAction = new EventEmitter();
    this._groupStyles = {
      left: {},
      center: {},
      right: {}
    };
    this._element = element.nativeElement;
    this._rowDiffer = differs.find({}).create();
  }
  ngDoCheck() {
    if (this._rowDiffer.diff(this.row)) {
      this.cd.markForCheck();
    }
  }
  trackByGroups(index, colGroup) {
    return colGroup.type;
  }
  columnTrackingFn(index, column) {
    return column.$$id;
  }
  buildStylesByGroup() {
    this._groupStyles.left = this.calcStylesByGroup("left");
    this._groupStyles.center = this.calcStylesByGroup("center");
    this._groupStyles.right = this.calcStylesByGroup("right");
    this.cd.markForCheck();
  }
  calcStylesByGroup(group) {
    const widths = this._columnGroupWidths;
    const offsetX = this.offsetX;
    const styles = {
      width: `${widths[group]}px`
    };
    if (group === "left") {
      translateXY(styles, offsetX, 0);
    } else if (group === "right") {
      const bodyWidth = this.innerWidth;
      const totalDiff = widths.total - bodyWidth;
      const offsetDiff = totalDiff - offsetX;
      const offset = (offsetDiff + this.scrollbarHelper.width) * -1;
      translateXY(styles, offset, 0);
    }
    return styles;
  }
  onActivate(event, index) {
    event.cellIndex = index;
    event.rowElement = this._element;
    this.activate.emit(event);
  }
  onKeyDown(event) {
    const keyCode = event.keyCode;
    const isTargetRow = event.target === this._element;
    const isAction = keyCode === Keys.return || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;
    if (isAction && isTargetRow) {
      event.preventDefault();
      event.stopPropagation();
      this.activate.emit({
        type: "keydown",
        event,
        row: this.row,
        rowElement: this._element
      });
    }
  }
  onMouseenter(event) {
    this.activate.emit({
      type: "mouseenter",
      event,
      row: this.row,
      rowElement: this._element
    });
  }
  recalculateColumns(val = this.columns) {
    this._columns = val;
    const colsByPin = columnsByPin(this._columns);
    this._columnsByPin = columnsByPinArr(this._columns);
    this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
  }
  onTreeAction() {
    this.treeAction.emit();
  }
};
_DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) {
  return new (t || _DataTableBodyRowComponent)(ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(ScrollbarHelper, 4), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
};
_DataTableBodyRowComponent.ɵcmp = ɵɵdefineComponent({
  type: _DataTableBodyRowComponent,
  selectors: [["datatable-body-row"]],
  hostVars: 6,
  hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) {
        return ctx.onMouseenter($event);
      });
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.cssClass);
      ɵɵstyleProp("height", ctx.rowHeight, "px")("width", ctx.columnsTotalWidths, "px");
    }
  },
  inputs: {
    columns: "columns",
    innerWidth: "innerWidth",
    expanded: "expanded",
    rowClass: "rowClass",
    row: "row",
    group: "group",
    isSelected: "isSelected",
    rowIndex: "rowIndex",
    displayCheck: "displayCheck",
    treeStatus: "treeStatus",
    ghostLoadingIndicator: "ghostLoadingIndicator",
    disable$: "disable$",
    offsetX: "offsetX",
    rowHeight: "rowHeight"
  },
  outputs: {
    activate: "activate",
    treeAction: "treeAction"
  },
  decls: 1,
  vars: 2,
  consts: [[3, "class", "ngStyle", "row-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["role", "cell", "tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "disable$", "treeStatus", "ghostLoadingIndicator", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "cell", "tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "disable$", "treeStatus", "ghostLoadingIndicator", "activate", "treeAction"]],
  template: function DataTableBodyRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DataTableBodyRowComponent_div_0_Template, 3, 10, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    }
  },
  dependencies: [NgForOf, NgStyle, DataTableBodyCellComponent, AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
var DataTableBodyRowComponent = _DataTableBodyRowComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableBodyRowComponent, [{
    type: Component,
    args: [{
      selector: "datatable-body-row",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div
      *ngFor="let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups"
      class="datatable-row-{{ colGroup.type }} datatable-row-group"
      [ngStyle]="_groupStyles[colGroup.type]"
      [class.row-disabled]="disable$ ? (disable$ | async) : false"
    >
      <datatable-body-cell
        role="cell"
        *ngFor="let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn"
        tabindex="-1"
        [row]="row"
        [group]="group"
        [expanded]="expanded"
        [isSelected]="isSelected"
        [rowIndex]="rowIndex"
        [column]="column"
        [rowHeight]="rowHeight"
        [displayCheck]="displayCheck"
        [disable$]="disable$"
        [treeStatus]="treeStatus"
        [ghostLoadingIndicator]="ghostLoadingIndicator"
        (activate)="onActivate($event, ii)"
        (treeAction)="onTreeAction()"
      >
      </datatable-body-cell>
    </div>
  `
    }]
  }], () => [{
    type: KeyValueDiffers
  }, {
    type: ScrollbarHelper,
    decorators: [{
      type: SkipSelf
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
    columns: [{
      type: Input
    }],
    innerWidth: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    rowClass: [{
      type: Input
    }],
    row: [{
      type: Input
    }],
    group: [{
      type: Input
    }],
    isSelected: [{
      type: Input
    }],
    rowIndex: [{
      type: Input
    }],
    displayCheck: [{
      type: Input
    }],
    treeStatus: [{
      type: Input
    }],
    ghostLoadingIndicator: [{
      type: Input
    }],
    disable$: [{
      type: Input
    }],
    offsetX: [{
      type: Input
    }],
    cssClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    rowHeight: [{
      type: HostBinding,
      args: ["style.height.px"]
    }, {
      type: Input
    }],
    columnsTotalWidths: [{
      type: HostBinding,
      args: ["style.width.px"]
    }],
    activate: [{
      type: Output
    }],
    treeAction: [{
      type: Output
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    onMouseenter: [{
      type: HostListener,
      args: ["mouseenter", ["$event"]]
    }]
  });
})();
var _DataTableRowWrapperComponent = class _DataTableRowWrapperComponent {
  set rowIndex(val) {
    this._rowIndex = val;
    this.rowContext.rowIndex = val;
    this.groupContext.rowIndex = val;
    this.cd.markForCheck();
  }
  get rowIndex() {
    return this._rowIndex;
  }
  set expanded(val) {
    this._expanded = val;
    this.groupContext.expanded = val;
    this.rowContext.expanded = val;
    this.cd.markForCheck();
  }
  get expanded() {
    return this._expanded;
  }
  constructor(cd, differs) {
    this.cd = cd;
    this.differs = differs;
    this.rowContextmenu = new EventEmitter(false);
    this._expanded = false;
    this.groupContext = {
      group: this.row,
      expanded: this.expanded,
      rowIndex: this.rowIndex
    };
    this.rowContext = {
      row: this.row,
      expanded: this.expanded,
      rowIndex: this.rowIndex
    };
    this.rowDiffer = differs.find({}).create();
  }
  ngOnInit() {
    if (this.disableCheck) {
      const isRowDisabled = this.disableCheck(this.row);
      this.disable$ = new BehaviorSubject(isRowDisabled);
    }
    this.rowContext.disableRow$ = this.disable$;
  }
  ngDoCheck() {
    if (this.rowDiffer.diff(this.row)) {
      this.rowContext.row = this.row;
      this.groupContext.group = this.row;
      if (this.disableCheck) {
        const isRowDisabled = this.disableCheck(this.row);
        this.disable$.next(isRowDisabled);
      }
      this.cd.markForCheck();
    }
  }
  onContextmenu($event) {
    this.rowContextmenu.emit({
      event: $event,
      row: this.row
    });
  }
  getGroupHeaderStyle() {
    const styles = {};
    styles.transform = "translate3d(" + this.offsetX + "px, 0px, 0px)";
    styles["backface-visibility"] = "hidden";
    styles.width = this.innerWidth;
    return styles;
  }
};
_DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) {
  return new (t || _DataTableRowWrapperComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(KeyValueDiffers));
};
_DataTableRowWrapperComponent.ɵcmp = ɵɵdefineComponent({
  type: _DataTableRowWrapperComponent,
  selectors: [["datatable-row-wrapper"]],
  hostAttrs: [1, "datatable-row-wrapper"],
  hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) {
        return ctx.onContextmenu($event);
      });
    }
  },
  inputs: {
    innerWidth: "innerWidth",
    rowDetail: "rowDetail",
    groupHeader: "groupHeader",
    offsetX: "offsetX",
    detailRowHeight: "detailRowHeight",
    row: "row",
    groupedRows: "groupedRows",
    disableCheck: "disableCheck",
    rowIndex: "rowIndex",
    expanded: "expanded"
  },
  outputs: {
    rowContextmenu: "rowContextmenu"
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 3,
  consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]],
  template: function DataTableRowWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0)(1, DataTableRowWrapperComponent_ng_content_1_Template, 1, 0, "ng-content", 1)(2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.groupHeader && ctx.groupHeader.template);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
var DataTableRowWrapperComponent = _DataTableRowWrapperComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableRowWrapperComponent, [{
    type: Component,
    args: [{
      selector: "datatable-row-wrapper",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div *ngIf="groupHeader && groupHeader.template" class="datatable-group-header" [ngStyle]="getGroupHeaderStyle()">
      <ng-template
        *ngIf="groupHeader && groupHeader.template"
        [ngTemplateOutlet]="groupHeader.template"
        [ngTemplateOutletContext]="groupContext"
      >
      </ng-template>
    </div>
    <ng-content *ngIf="(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template">
    </ng-content>
    <div
      *ngIf="rowDetail && rowDetail.template && expanded"
      [style.height.px]="detailRowHeight"
      class="datatable-row-detail"
    >
      <ng-template
        *ngIf="rowDetail && rowDetail.template"
        [ngTemplateOutlet]="rowDetail.template"
        [ngTemplateOutletContext]="rowContext"
      >
      </ng-template>
    </div>
  `,
      host: {
        class: "datatable-row-wrapper"
      }
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: KeyValueDiffers
  }], {
    innerWidth: [{
      type: Input
    }],
    rowDetail: [{
      type: Input
    }],
    groupHeader: [{
      type: Input
    }],
    offsetX: [{
      type: Input
    }],
    detailRowHeight: [{
      type: Input
    }],
    row: [{
      type: Input
    }],
    groupedRows: [{
      type: Input
    }],
    disableCheck: [{
      type: Input
    }],
    rowContextmenu: [{
      type: Output
    }],
    rowIndex: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    onContextmenu: [{
      type: HostListener,
      args: ["contextmenu", ["$event"]]
    }]
  });
})();
function selectRows(selected, row, comparefn) {
  const selectedIndex = comparefn(row, selected);
  if (selectedIndex > -1) {
    selected.splice(selectedIndex, 1);
  } else {
    selected.push(row);
  }
  return selected;
}
function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
  const reverse = index < prevIndex;
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const greater = i >= prevIndex && i <= index;
    const lesser = i <= prevIndex && i >= index;
    let range = {
      start: 0,
      end: 0
    };
    if (reverse) {
      range = {
        start: index,
        end: prevIndex
      };
    } else {
      range = {
        start: prevIndex,
        end: index + 1
      };
    }
    if (reverse && lesser || !reverse && greater) {
      if (i >= range.start && i <= range.end) {
        selected.push(row);
      }
    }
  }
  return selected;
}
var _DataTableSelectionComponent = class _DataTableSelectionComponent {
  constructor() {
    this.activate = new EventEmitter();
    this.select = new EventEmitter();
  }
  selectRow(event, index, row) {
    if (!this.selectEnabled) {
      return;
    }
    const chkbox = this.selectionType === SelectionType.checkbox;
    const multi = this.selectionType === SelectionType.multi;
    const multiClick = this.selectionType === SelectionType.multiClick;
    let selected = [];
    if (multi || chkbox || multiClick) {
      if (event.shiftKey) {
        selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
      } else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
        selected = selectRows([...this.selected], row, this.getRowSelectedIdx.bind(this));
      } else {
        selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
      }
    } else {
      selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
    }
    if (typeof this.selectCheck === "function") {
      selected = selected.filter(this.selectCheck.bind(this));
    }
    if (typeof this.disableCheck === "function") {
      selected = selected.filter((rowData) => !this.disableCheck(rowData));
    }
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.prevIndex = index;
    this.select.emit({
      selected
    });
  }
  onActivate(model, index) {
    const {
      type,
      event,
      row
    } = model;
    const chkbox = this.selectionType === SelectionType.checkbox;
    const select = !chkbox && (type === "click" || type === "dblclick") || chkbox && type === "checkbox";
    if (select) {
      this.selectRow(event, index, row);
    } else if (type === "keydown") {
      if (event.keyCode === Keys.return) {
        this.selectRow(event, index, row);
      } else {
        this.onKeyboardFocus(model);
      }
    }
    this.activate.emit(model);
  }
  onKeyboardFocus(model) {
    const {
      keyCode
    } = model.event;
    const shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;
    if (shouldFocus) {
      const isCellSelection = this.selectionType === SelectionType.cell;
      if (typeof this.disableCheck === "function") {
        const isRowDisabled = this.disableCheck(model.row);
        if (isRowDisabled) {
          return;
        }
      }
      if (!model.cellElement || !isCellSelection) {
        this.focusRow(model.rowElement, keyCode);
      } else if (isCellSelection) {
        this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
      }
    }
  }
  focusRow(rowElement, keyCode) {
    const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
    if (nextRowElement) {
      nextRowElement.focus();
    }
  }
  getPrevNextRow(rowElement, keyCode) {
    const parentElement = rowElement.parentElement;
    if (parentElement) {
      let focusElement;
      if (keyCode === Keys.up) {
        focusElement = parentElement.previousElementSibling;
      } else if (keyCode === Keys.down) {
        focusElement = parentElement.nextElementSibling;
      }
      if (focusElement && focusElement.children.length) {
        return focusElement.children[0];
      }
    }
  }
  focusCell(cellElement, rowElement, keyCode, cellIndex) {
    let nextCellElement;
    if (keyCode === Keys.left) {
      nextCellElement = cellElement.previousElementSibling;
    } else if (keyCode === Keys.right) {
      nextCellElement = cellElement.nextElementSibling;
    } else if (keyCode === Keys.up || keyCode === Keys.down) {
      const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
      if (nextRowElement) {
        const children = nextRowElement.getElementsByClassName("datatable-body-cell");
        if (children.length) {
          nextCellElement = children[cellIndex];
        }
      }
    }
    if (nextCellElement) {
      nextCellElement.focus();
    }
  }
  getRowSelected(row) {
    return this.getRowSelectedIdx(row, this.selected) > -1;
  }
  getRowSelectedIdx(row, selected) {
    if (!selected || !selected.length) {
      return -1;
    }
    const rowId = this.rowIdentity(row);
    return selected.findIndex((r) => {
      const id2 = this.rowIdentity(r);
      return id2 === rowId;
    });
  }
};
_DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) {
  return new (t || _DataTableSelectionComponent)();
};
_DataTableSelectionComponent.ɵcmp = ɵɵdefineComponent({
  type: _DataTableSelectionComponent,
  selectors: [["datatable-selection"]],
  inputs: {
    rows: "rows",
    selected: "selected",
    selectEnabled: "selectEnabled",
    selectionType: "selectionType",
    rowIdentity: "rowIdentity",
    selectCheck: "selectCheck",
    disableCheck: "disableCheck"
  },
  outputs: {
    activate: "activate",
    select: "select"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function DataTableSelectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var DataTableSelectionComponent = _DataTableSelectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableSelectionComponent, [{
    type: Component,
    args: [{
      selector: "datatable-selection",
      template: ` <ng-content></ng-content> `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    rows: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    selectEnabled: [{
      type: Input
    }],
    selectionType: [{
      type: Input
    }],
    rowIdentity: [{
      type: Input
    }],
    selectCheck: [{
      type: Input
    }],
    disableCheck: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    select: [{
      type: Output
    }]
  });
})();
function defaultSumFunc(cells) {
  const cellsWithValues = cells.filter((cell) => !!cell);
  if (!cellsWithValues.length) {
    return null;
  }
  if (cellsWithValues.some((cell) => typeof cell !== "number")) {
    return null;
  }
  return cellsWithValues.reduce((res, cell) => res + cell);
}
function noopSumFunc(cells) {
  return null;
}
var _DataTableSummaryRowComponent = class _DataTableSummaryRowComponent {
  constructor() {
    this.summaryRow = {};
  }
  ngOnChanges() {
    if (!this.columns || !this.rows) {
      return;
    }
    this.updateInternalColumns();
    this.updateValues();
  }
  updateInternalColumns() {
    this._internalColumns = this.columns.map((col) => __spreadProps(__spreadValues({}, col), {
      cellTemplate: col.summaryTemplate
    }));
  }
  updateValues() {
    this.summaryRow = {};
    this.columns.filter((col) => !col.summaryTemplate).forEach((col) => {
      const cellsFromSingleColumn = this.rows.map((row) => row[col.prop]);
      const sumFunc = this.getSummaryFunction(col);
      this.summaryRow[col.prop] = col.pipe ? col.pipe.transform(sumFunc(cellsFromSingleColumn)) : sumFunc(cellsFromSingleColumn);
    });
  }
  getSummaryFunction(column) {
    if (column.summaryFunc === void 0) {
      return defaultSumFunc;
    } else if (column.summaryFunc === null) {
      return noopSumFunc;
    } else {
      return column.summaryFunc;
    }
  }
};
_DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) {
  return new (t || _DataTableSummaryRowComponent)();
};
_DataTableSummaryRowComponent.ɵcmp = ɵɵdefineComponent({
  type: _DataTableSummaryRowComponent,
  selectors: [["datatable-summary-row"]],
  hostAttrs: [1, "datatable-summary-row"],
  inputs: {
    rows: "rows",
    columns: "columns",
    rowHeight: "rowHeight",
    offsetX: "offsetX",
    innerWidth: "innerWidth"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]],
  template: function DataTableSummaryRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.summaryRow && ctx._internalColumns);
    }
  },
  dependencies: [NgIf, DataTableBodyRowComponent],
  encapsulation: 2
});
var DataTableSummaryRowComponent = _DataTableSummaryRowComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableSummaryRowComponent, [{
    type: Component,
    args: [{
      selector: "datatable-summary-row",
      template: `
    <datatable-body-row
      *ngIf="summaryRow && _internalColumns"
      tabindex="-1"
      [innerWidth]="innerWidth"
      [offsetX]="offsetX"
      [columns]="_internalColumns"
      [rowHeight]="rowHeight"
      [row]="summaryRow"
      [rowIndex]="-1"
    >
    </datatable-body-row>
  `,
      host: {
        class: "datatable-summary-row"
      }
    }]
  }], null, {
    rows: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    rowHeight: [{
      type: Input
    }],
    offsetX: [{
      type: Input
    }],
    innerWidth: [{
      type: Input
    }]
  });
})();
var _DataTableBodyComponent = class _DataTableBodyComponent {
  set ghostLoadingIndicator(val) {
    this._ghostLoadingIndicator = val;
    if (!val) {
      this.temp = this.temp.filter((item) => !!item);
    }
  }
  get ghostLoadingIndicator() {
    return this._ghostLoadingIndicator;
  }
  set pageSize(val) {
    if (val !== this._pageSize) {
      this._pageSize = val;
      this.recalcLayout();
      this._offsetEvent = -1;
      this.updatePage("up");
      this.updatePage("down");
    }
  }
  get pageSize() {
    return this._pageSize;
  }
  set rows(val) {
    if (val !== this._rows) {
      this._rows = val;
      this.recalcLayout();
    }
  }
  get rows() {
    return this._rows;
  }
  set columns(val) {
    if (val !== this._columns) {
      this._columns = val;
      const colsByPin = columnsByPin(val);
      this.columnGroupWidths = columnGroupWidths(colsByPin, val);
    }
  }
  get columns() {
    return this._columns;
  }
  set offset(val) {
    if (val !== this._offset) {
      this._offset = val;
      if (!this.scrollbarV || this.scrollbarV && !this.virtualization) {
        if (!isNaN(this._offset) && this.ghostLoadingIndicator) {
          this.rows = [];
        }
        this.recalcLayout();
      }
    }
  }
  get offset() {
    return this._offset;
  }
  set rowCount(val) {
    if (val !== this._rowCount) {
      this._rowCount = val;
      this.recalcLayout();
    }
  }
  get rowCount() {
    return this._rowCount;
  }
  get bodyWidth() {
    if (this.scrollbarH) {
      return this.innerWidth + "px";
    } else {
      return "100%";
    }
  }
  set bodyHeight(val) {
    if (this.scrollbarV) {
      this._bodyHeight = val + "px";
    } else {
      this._bodyHeight = "auto";
    }
    this.recalcLayout();
  }
  get bodyHeight() {
    return this._bodyHeight;
  }
  /**
   * Returns if selection is enabled.
   */
  get selectEnabled() {
    return !!this.selectionType;
  }
  /**
   * Property that would calculate the height of scroll bar
   * based on the row heights cache for virtual scroll and virtualization. Other scenarios
   * calculate scroll height automatically (as height will be undefined).
   */
  get scrollHeight() {
    if (this.scrollbarV && this.virtualization && this.rowCount) {
      return this.rowHeightsCache.query(this.rowCount - 1);
    }
    return void 0;
  }
  /**
   * Creates an instance of DataTableBodyComponent.
   */
  constructor(cd) {
    this.cd = cd;
    this.selected = [];
    this.scroll = new EventEmitter();
    this.page = new EventEmitter();
    this.activate = new EventEmitter();
    this.select = new EventEmitter();
    this.detailToggle = new EventEmitter();
    this.rowContextmenu = new EventEmitter(false);
    this.treeAction = new EventEmitter();
    this.rowHeightsCache = new RowHeightCache();
    this.temp = [];
    this.offsetY = 0;
    this.indexes = {};
    this.rowIndexes = /* @__PURE__ */ new WeakMap();
    this.rowExpansions = [];
    this._offsetEvent = -1;
    this.getDetailRowHeight = (row, index) => {
      if (!this.rowDetail) {
        return 0;
      }
      const rowHeight = this.rowDetail.rowHeight;
      return typeof rowHeight === "function" ? rowHeight(row, index) : rowHeight;
    };
    this.rowTrackingFn = (index, row) => {
      const idx = this.getRowIndex(row);
      if (this.trackByProp) {
        return row[this.trackByProp];
      } else {
        return idx;
      }
    };
  }
  /**
   * Called after the constructor, initializing input properties
   */
  ngOnInit() {
    if (this.rowDetail) {
      this.listener = this.rowDetail.toggle.subscribe(({
        type,
        value
      }) => {
        if (type === "row") {
          this.toggleRowExpansion(value);
        }
        if (type === "all") {
          this.toggleAllRows(value);
        }
        this.updateIndexes();
        this.updateRows();
        this.cd.markForCheck();
      });
    }
    if (this.groupHeader) {
      this.listener = this.groupHeader.toggle.subscribe(({
        type,
        value
      }) => {
        if (type === "group") {
          this.toggleRowExpansion(value);
        }
        if (type === "all") {
          this.toggleAllRows(value);
        }
        this.updateIndexes();
        this.updateRows();
        this.cd.markForCheck();
      });
    }
  }
  /**
   * Called once, before the instance is destroyed.
   */
  ngOnDestroy() {
    if (this.rowDetail || this.groupHeader) {
      this.listener.unsubscribe();
    }
  }
  /**
   * Updates the Y offset given a new offset.
   */
  updateOffsetY(offset) {
    if (!this.scroller) {
      return;
    }
    if (this.scrollbarV && this.virtualization && offset) {
      const rowIndex = this.pageSize * offset;
      offset = this.rowHeightsCache.query(rowIndex - 1);
    } else if (this.scrollbarV && !this.virtualization) {
      offset = 0;
    }
    this.scroller.setOffset(offset || 0);
  }
  /**
   * Body was scrolled, this is mainly useful for
   * when a user is server-side pagination via virtual scroll.
   */
  onBodyScroll(event) {
    const scrollYPos = event.scrollYPos;
    const scrollXPos = event.scrollXPos;
    if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
      this.scroll.emit({
        offsetY: scrollYPos,
        offsetX: scrollXPos
      });
    }
    this.offsetY = scrollYPos;
    this.offsetX = scrollXPos;
    this.updateIndexes();
    this.updatePage(event.direction);
    this.updateRows();
    this.cd.detectChanges();
  }
  /**
   * Updates the page given a direction.
   */
  updatePage(direction) {
    let offset = this.indexes.first / this.pageSize;
    const scrollInBetween = !Number.isInteger(offset);
    if (direction === "up") {
      offset = Math.ceil(offset);
    } else if (direction === "down") {
      offset = Math.floor(offset);
    }
    if (direction !== void 0 && !isNaN(offset) && offset !== this._offsetEvent) {
      this._offsetEvent = offset;
      if (scrollInBetween && this.scrollbarV && this.virtualization && this.externalPaging) {
        const upRow = this.rows[this.indexes.first - 1];
        if (!upRow && direction === "up") {
          this.page.emit({
            offset: offset - 1
          });
        }
        const downRow = this.rows[this.indexes.first + this.pageSize];
        if (!downRow && direction === "down") {
          this.page.emit({
            offset: offset + 1
          });
        }
      }
      this.page.emit({
        offset
      });
    }
  }
  /**
   * Updates the rows in the view port
   */
  updateRows() {
    const {
      first,
      last
    } = this.indexes;
    let rowIndex = first;
    let idx = 0;
    const temp = [];
    if (this.groupedRows) {
      let maxRowsPerGroup = 3;
      if (this.groupedRows.length === 1) {
        maxRowsPerGroup = this.groupedRows[0].value.length;
      }
      while (rowIndex < last && rowIndex < this.groupedRows.length) {
        const group = this.groupedRows[rowIndex];
        this.rowIndexes.set(group, rowIndex);
        if (group.value) {
          group.value.forEach((g, i) => {
            const _idx = `${rowIndex}-${i}`;
            this.rowIndexes.set(g, _idx);
          });
        }
        temp[idx] = group;
        idx++;
        rowIndex++;
      }
    } else {
      while (rowIndex < last && rowIndex < this.rowCount) {
        const row = this.rows[rowIndex];
        if (row) {
          this.rowIndexes.set(row, rowIndex);
          temp[idx] = row;
        } else if (this.ghostLoadingIndicator && this.virtualization) {
          temp[idx] = void 0;
        }
        idx++;
        rowIndex++;
      }
    }
    this.temp = temp;
  }
  /**
   * Get the row height
   */
  getRowHeight(row) {
    if (typeof this.rowHeight === "function") {
      return this.rowHeight(row);
    }
    return this.rowHeight;
  }
  /**
   * @param group the group with all rows
   */
  getGroupHeight(group) {
    let rowHeight = 0;
    if (group.value) {
      for (let index = 0; index < group.value.length; index++) {
        rowHeight += this.getRowAndDetailHeight(group.value[index]);
      }
    }
    return rowHeight;
  }
  /**
   * Calculate row height based on the expanded state of the row.
   */
  getRowAndDetailHeight(row) {
    let rowHeight = this.getRowHeight(row);
    const expanded = this.getRowExpanded(row);
    if (expanded) {
      rowHeight += this.getDetailRowHeight(row);
    }
    return rowHeight;
  }
  /**
   * Calculates the styles for the row so that the rows can be moved in 2D space
   * during virtual scroll inside the DOM.   In the below case the Y position is
   * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
   * 100 px then following styles are generated:
   *
   * transform: translate3d(0px, 0px, 0px);    ->  row0
   * transform: translate3d(0px, 30px, 0px);   ->  row1
   * transform: translate3d(0px, 130px, 0px);  ->  row2
   *
   * Row heights have to be calculated based on the row heights cache as we wont
   * be able to determine which row is of what height before hand.  In the above
   * case the positionY of the translate3d for row2 would be the sum of all the
   * heights of the rows before it (i.e. row0 and row1).
   *
   * @param rows the row that needs to be placed in the 2D space.
   * @param index for ghost cells in order to get correct position of ghost row
   * @returns the CSS3 style to be applied
   *
   * @memberOf DataTableBodyComponent
   */
  getRowsStyles(rows, index = 0) {
    const styles = {};
    if (this.groupedRows) {
      styles.width = this.columnGroupWidths.total;
    }
    if (this.scrollbarV && this.virtualization) {
      let idx = 0;
      if (this.groupedRows) {
        const row = rows[rows.length - 1];
        idx = row ? this.getRowIndex(row) : 0;
      } else {
        if (rows) {
          idx = this.getRowIndex(rows);
        } else {
          idx = index;
        }
      }
      const pos = this.rowHeightsCache.query(idx - 1);
      translateXY(styles, 0, pos);
    }
    return styles;
  }
  /**
   * Calculate bottom summary row offset for scrollbar mode.
   * For more information about cache and offset calculation
   * see description for `getRowsStyles` method
   *
   * @returns the CSS3 style to be applied
   *
   * @memberOf DataTableBodyComponent
   */
  getBottomSummaryRowStyles() {
    if (!this.scrollbarV || !this.rows || !this.rows.length) {
      return null;
    }
    const styles = {
      position: "absolute"
    };
    const pos = this.rowHeightsCache.query(this.rows.length - 1);
    translateXY(styles, 0, pos);
    return styles;
  }
  /**
   * Hides the loading indicator
   */
  hideIndicator() {
    setTimeout(() => this.loadingIndicator = false, 500);
  }
  /**
   * Updates the index of the rows in the viewport
   */
  updateIndexes() {
    let first = 0;
    let last = 0;
    if (this.scrollbarV) {
      if (this.virtualization) {
        const height = parseInt(this.bodyHeight, 10);
        first = this.rowHeightsCache.getRowIndex(this.offsetY);
        last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
      } else {
        first = 0;
        last = this.rowCount;
      }
    } else {
      if (!this.externalPaging) {
        first = Math.max(this.offset * this.pageSize, 0);
      }
      last = Math.min(first + this.pageSize, this.rowCount);
    }
    this.indexes = {
      first,
      last
    };
  }
  /**
   * Refreshes the full Row Height cache.  Should be used
   * when the entire row array state has changed.
   */
  refreshRowHeightCache() {
    if (!this.scrollbarV || this.scrollbarV && !this.virtualization) {
      return;
    }
    this.rowHeightsCache.clearCache();
    if (this.rows && this.rows.length) {
      const rowExpansions = /* @__PURE__ */ new Set();
      for (const row of this.rows) {
        if (this.getRowExpanded(row)) {
          rowExpansions.add(row);
        }
      }
      this.rowHeightsCache.initCache({
        rows: this.rows,
        rowHeight: this.rowHeight,
        detailRowHeight: this.getDetailRowHeight,
        externalVirtual: this.scrollbarV && this.externalPaging,
        rowCount: this.rowCount,
        rowIndexes: this.rowIndexes,
        rowExpansions
      });
    }
  }
  /**
   * Gets the index for the view port
   */
  getAdjustedViewPortIndex() {
    const viewPortFirstRowIndex = this.indexes.first;
    if (this.scrollbarV && this.virtualization) {
      const offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
      return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
    }
    return viewPortFirstRowIndex;
  }
  /**
   * Toggle the Expansion of the row i.e. if the row is expanded then it will
   * collapse and vice versa.   Note that the expanded status is stored as
   * a part of the row object itself as we have to preserve the expanded row
   * status in case of sorting and filtering of the row set.
   */
  toggleRowExpansion(row) {
    const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
    const rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
    const expanded = rowExpandedIdx > -1;
    if (this.scrollbarV && this.virtualization) {
      const detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1);
      const idx = this.getRowIndex(row);
      this.rowHeightsCache.update(idx, detailRowHeight);
    }
    if (expanded) {
      this.rowExpansions.splice(rowExpandedIdx, 1);
    } else {
      this.rowExpansions.push(row);
    }
    this.detailToggle.emit({
      rows: [row],
      currentIndex: viewPortFirstRowIndex
    });
  }
  /**
   * Expand/Collapse all the rows no matter what their state is.
   */
  toggleAllRows(expanded) {
    this.rowExpansions = [];
    const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
    if (expanded) {
      for (const row of this.rows) {
        this.rowExpansions.push(row);
      }
    }
    if (this.scrollbarV) {
      this.recalcLayout();
    }
    this.detailToggle.emit({
      rows: this.rows,
      currentIndex: viewPortFirstRowIndex
    });
  }
  /**
   * Recalculates the table
   */
  recalcLayout() {
    this.refreshRowHeightCache();
    this.updateIndexes();
    this.updateRows();
  }
  /**
   * Tracks the column
   */
  columnTrackingFn(index, column) {
    return column.$$id;
  }
  /**
   * Gets the row pinning group styles
   */
  stylesByGroup(group) {
    const widths = this.columnGroupWidths;
    const offsetX = this.offsetX;
    const styles = {
      width: `${widths[group]}px`
    };
    if (group === "left") {
      translateXY(styles, offsetX, 0);
    } else if (group === "right") {
      const bodyWidth = this.innerWidth;
      const totalDiff = widths.total - bodyWidth;
      const offsetDiff = totalDiff - offsetX;
      const offset = offsetDiff * -1;
      translateXY(styles, offset, 0);
    }
    return styles;
  }
  /**
   * Returns if the row was expanded and set default row expansion when row expansion is empty
   */
  getRowExpanded(row) {
    if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
      for (const group of this.groupedRows) {
        this.rowExpansions.push(group);
      }
    }
    return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
  }
  getRowExpandedIdx(row, expanded) {
    if (!expanded || !expanded.length) {
      return -1;
    }
    const rowId = this.rowIdentity(row);
    return expanded.findIndex((r) => {
      const id2 = this.rowIdentity(r);
      return id2 === rowId;
    });
  }
  /**
   * Gets the row index given a row
   */
  getRowIndex(row) {
    return this.rowIndexes.get(row) || 0;
  }
  onTreeAction(row) {
    this.treeAction.emit({
      row
    });
  }
  dragOver(event, dropRow) {
    event.preventDefault();
    this.rowDragEvents.emit({
      event,
      srcElement: this._draggedRowElement,
      eventType: "dragover",
      dragRow: this._draggedRow,
      dropRow
    });
  }
  drag(event, dragRow, rowComponent) {
    this._draggedRow = dragRow;
    this._draggedRowElement = rowComponent._element;
    this.rowDragEvents.emit({
      event,
      srcElement: this._draggedRowElement,
      eventType: "dragstart",
      dragRow
    });
  }
  drop(event, dropRow, rowComponent) {
    event.preventDefault();
    this.rowDragEvents.emit({
      event,
      srcElement: this._draggedRowElement,
      targetElement: rowComponent._element,
      eventType: "drop",
      dragRow: this._draggedRow,
      dropRow
    });
  }
  dragEnter(event, dropRow, rowComponent) {
    event.preventDefault();
    this.rowDragEvents.emit({
      event,
      srcElement: this._draggedRowElement,
      targetElement: rowComponent._element,
      eventType: "dragenter",
      dragRow: this._draggedRow,
      dropRow
    });
  }
  dragLeave(event, dropRow, rowComponent) {
    event.preventDefault();
    this.rowDragEvents.emit({
      event,
      srcElement: this._draggedRowElement,
      targetElement: rowComponent._element,
      eventType: "dragleave",
      dragRow: this._draggedRow,
      dropRow
    });
  }
  dragEnd(event, dragRow) {
    event.preventDefault();
    this.rowDragEvents.emit({
      event,
      srcElement: this._draggedRowElement,
      eventType: "dragend",
      dragRow
    });
    this._draggedRow = void 0;
    this._draggedRowElement = void 0;
  }
};
_DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) {
  return new (t || _DataTableBodyComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_DataTableBodyComponent.ɵcmp = ɵɵdefineComponent({
  type: _DataTableBodyComponent,
  selectors: [["datatable-body"]],
  viewQuery: function DataTableBodyComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ScrollerComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scroller = _t.first);
    }
  },
  hostAttrs: [1, "datatable-body"],
  hostVars: 4,
  hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.bodyWidth)("height", ctx.bodyHeight);
    }
  },
  inputs: {
    scrollbarV: "scrollbarV",
    scrollbarH: "scrollbarH",
    loadingIndicator: "loadingIndicator",
    ghostLoadingIndicator: "ghostLoadingIndicator",
    externalPaging: "externalPaging",
    rowHeight: "rowHeight",
    offsetX: "offsetX",
    emptyMessage: "emptyMessage",
    selectionType: "selectionType",
    selected: "selected",
    rowIdentity: "rowIdentity",
    rowDetail: "rowDetail",
    groupHeader: "groupHeader",
    selectCheck: "selectCheck",
    displayCheck: "displayCheck",
    trackByProp: "trackByProp",
    rowClass: "rowClass",
    groupedRows: "groupedRows",
    groupExpansionDefault: "groupExpansionDefault",
    innerWidth: "innerWidth",
    groupRowsBy: "groupRowsBy",
    virtualization: "virtualization",
    summaryRow: "summaryRow",
    summaryPosition: "summaryPosition",
    summaryHeight: "summaryHeight",
    rowDraggable: "rowDraggable",
    rowDragEvents: "rowDragEvents",
    disableRowCheck: "disableRowCheck",
    pageSize: "pageSize",
    rows: "rows",
    columns: "columns",
    offset: "offset",
    rowCount: "rowCount",
    bodyHeight: "bodyHeight"
  },
  outputs: {
    scroll: "scroll",
    page: "page",
    activate: "activate",
    select: "select",
    detailToggle: "detailToggle",
    rowContextmenu: "rowContextmenu",
    treeAction: "treeAction"
  },
  ngContentSelectors: _c7,
  decls: 6,
  vars: 11,
  consts: [[4, "ngIf"], ["class", "ghost-overlay", 3, "columns", "pageSize", "rowHeight", "ghostBodyHeight", 4, "ngIf"], [3, "selected", "rows", "selectCheck", "disableCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], [1, "custom-loading-indicator-wrapper"], [1, "custom-loading-content"], ["customIndicator", ""], [1, "ghost-overlay", 3, "columns", "pageSize", "rowHeight", "ghostBodyHeight"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "disableCheck", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", 3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "disableCheck", "expanded", "rowIndex", "rowContextmenu"], ["rowWrapper", ""], ["role", "row", "tabindex", "-1", 3, "disable$", "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "ghostLoadingIndicator", "draggable", "treeAction", "activate", "drop", "dragover", "dragenter", "dragleave", "dragstart", "dragend", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["role", "row", "tabindex", "-1", 3, "disable$", "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "ghostLoadingIndicator", "draggable", "treeAction", "activate", "drop", "dragover", "dragenter", "dragleave", "dragstart", "dragend"], ["rowElement", ""], ["role", "row", "tabindex", "-1", 3, "disable$", "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "ghostLoadingIndicator", "draggable", "activate", "drop", "dragover", "dragenter", "dragleave", "dragstart", "dragend", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", "tabindex", "-1", 3, "disable$", "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "ghostLoadingIndicator", "draggable", "activate", "drop", "dragover", "dragenter", "dragleave", "dragstart", "dragend"], ["role", "row", 3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], ["customEmptyContent", ""], [1, "empty-row", 3, "innerHTML"]],
  template: function DataTableBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c6);
      ɵɵtemplate(0, DataTableBodyComponent_ng_container_0_Template, 6, 1, "ng-container", 0)(1, DataTableBodyComponent_ghost_loader_1_Template, 1, 4, "ghost-loader", 1);
      ɵɵelementStart(2, "datatable-selection", 2, 3);
      ɵɵlistener("select", function DataTableBodyComponent_Template_datatable_selection_select_2_listener($event) {
        return ctx.select.emit($event);
      })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_2_listener($event) {
        return ctx.activate.emit($event);
      });
      ɵɵtemplate(4, DataTableBodyComponent_datatable_scroller_4_Template, 4, 8, "datatable-scroller", 4)(5, DataTableBodyComponent_ng_container_5_Template, 5, 1, "ng-container", 0);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.loadingIndicator);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.ghostLoadingIndicator && (!ctx.rowCount || !ctx.virtualization || !ctx.scrollbarV));
      ɵɵadvance();
      ɵɵproperty("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("disableCheck", ctx.disableRowCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.rows == null ? null : ctx.rows.length);
      ɵɵadvance();
      ɵɵproperty("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator && !ctx.ghostLoadingIndicator);
    }
  },
  dependencies: [NgForOf, NgIf, NgStyle, DraggableDirective, ScrollerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DataTableSelectionComponent, DataTableSummaryRowComponent, DataTableGhostLoaderComponent],
  encapsulation: 2,
  changeDetection: 0
});
var DataTableBodyComponent = _DataTableBodyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableBodyComponent, [{
    type: Component,
    args: [{
      selector: "datatable-body",
      template: `
    <ng-container *ngIf="loadingIndicator">
      <div class="custom-loading-indicator-wrapper">
        <div class="custom-loading-content" #customIndicator>
          <ng-content select="[loading-indicator]"></ng-content>
        </div>
      </div>
      <datatable-progress *ngIf="!customIndicator?.hasChildNodes()"></datatable-progress>
    </ng-container>
    <ghost-loader
      *ngIf="ghostLoadingIndicator && (!rowCount || !virtualization || !scrollbarV)"
      class="ghost-overlay"
      [columns]="columns"
      [pageSize]="pageSize"
      [rowHeight]="rowHeight"
      [ghostBodyHeight]="bodyHeight"
    >
    </ghost-loader>
    <datatable-selection
      #selector
      [selected]="selected"
      [rows]="rows"
      [selectCheck]="selectCheck"
      [disableCheck]="disableRowCheck"
      [selectEnabled]="selectEnabled"
      [selectionType]="selectionType"
      [rowIdentity]="rowIdentity"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
    >
      <datatable-scroller
        *ngIf="rows?.length"
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [scrollHeight]="scrollHeight"
        [scrollWidth]="columnGroupWidths?.total"
        (scroll)="onBodyScroll($event)"
      >
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'top'"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
        <datatable-row-wrapper
          #rowWrapper
          [groupedRows]="groupedRows"
          *ngFor="let group of temp; let i = index; trackBy: rowTrackingFn"
          [innerWidth]="innerWidth"
          [ngStyle]="getRowsStyles(group, indexes.first + i )"
          [rowDetail]="rowDetail"
          [groupHeader]="groupHeader"
          [offsetX]="offsetX"
          [detailRowHeight]="getDetailRowHeight(group && group[i], i)"
          [row]="group"
          [disableCheck]="disableRowCheck"
          [expanded]="getRowExpanded(group)"
          [rowIndex]="getRowIndex(group && group[i])"
          (rowContextmenu)="rowContextmenu.emit($event)"
        >
          <datatable-body-row
            role="row"
            *ngIf="!groupedRows; else groupedRowsTemplate"
            tabindex="-1"
            #rowElement
            [disable$]="rowWrapper.disable$"
            [isSelected]="selector.getRowSelected(group)"
            [innerWidth]="innerWidth"
            [offsetX]="offsetX"
            [columns]="columns"
            [rowHeight]="getRowHeight(group)"
            [row]="group"
            [rowIndex]="getRowIndex(group)"
            [expanded]="getRowExpanded(group)"
            [rowClass]="rowClass"
            [displayCheck]="displayCheck"
            [treeStatus]="group && group.treeStatus"
            [ghostLoadingIndicator]="ghostLoadingIndicator"
            [draggable]="rowDraggable"
            (treeAction)="onTreeAction(group)"
            (activate)="selector.onActivate($event, indexes.first + i)"
            (drop)="drop($event, group, rowElement)"
            (dragover)="dragOver($event, group)"
            (dragenter)="dragEnter($event, group, rowElement)"
            (dragleave)="dragLeave($event, group, rowElement)"
            (dragstart)="drag($event, group, rowElement)"
            (dragend)="dragEnd($event, group)"
          >
          </datatable-body-row>
          <ng-template #groupedRowsTemplate>
            <datatable-body-row
              role="row"
              [disable$]="rowWrapper.disable$"
              *ngFor="let row of group.value; let i = index; trackBy: rowTrackingFn"
              tabindex="-1"
              #rowElement
              [isSelected]="selector.getRowSelected(row)"
              [innerWidth]="innerWidth"
              [offsetX]="offsetX"
              [columns]="columns"
              [rowHeight]="getRowHeight(row)"
              [row]="row"
              [group]="group.value"
              [rowIndex]="getRowIndex(row)"
              [expanded]="getRowExpanded(row)"
              [rowClass]="rowClass"
              [ghostLoadingIndicator]="ghostLoadingIndicator"
              [draggable]="rowDraggable"
              (activate)="selector.onActivate($event, i)"
              (drop)="drop($event, row, rowElement)"
              (dragover)="dragOver($event, row)"
              (dragenter)="dragEnter($event, row, rowElement)"
              (dragleave)="dragLeave($event, row, rowElement)"
              (dragstart)="drag($event, row, rowElement)"
              (dragend)="dragEnd($event, row)"
            >
            </datatable-body-row>
          </ng-template>
        </datatable-row-wrapper>
        <datatable-summary-row
          role="row"
          *ngIf="summaryRow && summaryPosition === 'bottom'"
          [ngStyle]="getBottomSummaryRowStyles()"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
      </datatable-scroller>
      <ng-container *ngIf="!rows?.length && !loadingIndicator && !ghostLoadingIndicator">
      <div
        class="empty-row"
        *ngIf="!customEmptyContent?.children.length"
        [innerHTML]="emptyMessage"
      ></div>
      <div #customEmptyContent>
        <ng-content select="[empty-content]"></ng-content>
      </div>
      </ng-container>
    </datatable-selection>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "datatable-body"
      }
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    scrollbarV: [{
      type: Input
    }],
    scrollbarH: [{
      type: Input
    }],
    loadingIndicator: [{
      type: Input
    }],
    ghostLoadingIndicator: [{
      type: Input
    }],
    externalPaging: [{
      type: Input
    }],
    rowHeight: [{
      type: Input
    }],
    offsetX: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    selectionType: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    rowIdentity: [{
      type: Input
    }],
    rowDetail: [{
      type: Input
    }],
    groupHeader: [{
      type: Input
    }],
    selectCheck: [{
      type: Input
    }],
    displayCheck: [{
      type: Input
    }],
    trackByProp: [{
      type: Input
    }],
    rowClass: [{
      type: Input
    }],
    groupedRows: [{
      type: Input
    }],
    groupExpansionDefault: [{
      type: Input
    }],
    innerWidth: [{
      type: Input
    }],
    groupRowsBy: [{
      type: Input
    }],
    virtualization: [{
      type: Input
    }],
    summaryRow: [{
      type: Input
    }],
    summaryPosition: [{
      type: Input
    }],
    summaryHeight: [{
      type: Input
    }],
    rowDraggable: [{
      type: Input
    }],
    rowDragEvents: [{
      type: Input
    }],
    disableRowCheck: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    rowCount: [{
      type: Input
    }],
    bodyWidth: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    bodyHeight: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["style.height"]
    }],
    scroll: [{
      type: Output
    }],
    page: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    select: [{
      type: Output
    }],
    detailToggle: [{
      type: Output
    }],
    rowContextmenu: [{
      type: Output
    }],
    treeAction: [{
      type: Output
    }],
    scroller: [{
      type: ViewChild,
      args: [ScrollerComponent]
    }]
  });
})();
function nextSortDir(sortType, current) {
  if (sortType === SortType.single) {
    if (current === SortDirection.asc) {
      return SortDirection.desc;
    } else {
      return SortDirection.asc;
    }
  } else {
    if (!current) {
      return SortDirection.asc;
    } else if (current === SortDirection.asc) {
      return SortDirection.desc;
    } else if (current === SortDirection.desc) {
      return void 0;
    }
    return void 0;
  }
}
function orderByComparator(a, b) {
  if (a === null || typeof a === "undefined") {
    a = 0;
  }
  if (b === null || typeof b === "undefined") {
    b = 0;
  }
  if (a instanceof Date && b instanceof Date) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
  } else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
    a = String(a);
    b = String(b);
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
  } else {
    if (parseFloat(a) < parseFloat(b)) {
      return -1;
    }
    if (parseFloat(a) > parseFloat(b)) {
      return 1;
    }
  }
  return 0;
}
function sortRows(rows, columns, dirs) {
  if (!rows) {
    return [];
  }
  if (!dirs || !dirs.length || !columns) {
    return [...rows];
  }
  const rowToIndexMap = /* @__PURE__ */ new Map();
  rows.forEach((row, index) => rowToIndexMap.set(row, index));
  const temp = [...rows];
  const cols = columns.reduce((obj, col) => {
    if (col.comparator && typeof col.comparator === "function") {
      obj[col.prop] = col.comparator;
    }
    return obj;
  }, {});
  const cachedDirs = dirs.map((dir) => {
    const prop = dir.prop;
    return {
      prop,
      dir: dir.dir,
      valueGetter: getterForProp(prop),
      compareFn: cols[prop] || orderByComparator
    };
  });
  return temp.sort(function(rowA, rowB) {
    for (const cachedDir of cachedDirs) {
      const {
        prop,
        valueGetter
      } = cachedDir;
      const propA = valueGetter(rowA, prop);
      const propB = valueGetter(rowB, prop);
      const comparison = cachedDir.dir !== SortDirection.desc ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir) : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
      if (comparison !== 0) {
        return comparison;
      }
    }
    if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB))) {
      return 0;
    }
    return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
  });
}
var _DataTableHeaderCellComponent = class _DataTableHeaderCellComponent {
  set allRowsSelected(value) {
    this._allRowsSelected = value;
    this.cellContext.allRowsSelected = value;
  }
  get allRowsSelected() {
    return this._allRowsSelected;
  }
  set column(column) {
    this._column = column;
    this.cellContext.column = column;
    this.cd.markForCheck();
  }
  get column() {
    return this._column;
  }
  set sorts(val) {
    this._sorts = val;
    this.sortDir = this.calcSortDir(val);
    this.cellContext.sortDir = this.sortDir;
    this.sortClass = this.calcSortClass(this.sortDir);
    this.cd.markForCheck();
  }
  get sorts() {
    return this._sorts;
  }
  get columnCssClasses() {
    let cls = "datatable-header-cell";
    if (this.column.sortable) {
      cls += " sortable";
    }
    if (this.column.resizeable) {
      cls += " resizeable";
    }
    if (this.column.headerClass) {
      if (typeof this.column.headerClass === "string") {
        cls += " " + this.column.headerClass;
      } else if (typeof this.column.headerClass === "function") {
        const res = this.column.headerClass({
          column: this.column
        });
        if (typeof res === "string") {
          cls += res;
        } else if (typeof res === "object") {
          const keys = Object.keys(res);
          for (const k of keys) {
            if (res[k] === true) {
              cls += ` ${k}`;
            }
          }
        }
      }
    }
    const sortDir = this.sortDir;
    if (sortDir) {
      cls += ` sort-active sort-${sortDir}`;
    }
    return cls;
  }
  get name() {
    return this.column.headerTemplate === void 0 ? this.column.name : void 0;
  }
  get minWidth() {
    return this.column.minWidth;
  }
  get maxWidth() {
    return this.column.maxWidth;
  }
  get width() {
    return this.column.width;
  }
  get isCheckboxable() {
    return this.column.headerCheckboxable;
  }
  constructor(cd) {
    this.cd = cd;
    this.sort = new EventEmitter();
    this.select = new EventEmitter();
    this.columnContextmenu = new EventEmitter(false);
    this.sortFn = this.onSort.bind(this);
    this.selectFn = this.select.emit.bind(this.select);
    this.cellContext = {
      column: this.column,
      sortDir: this.sortDir,
      sortFn: this.sortFn,
      allRowsSelected: this.allRowsSelected,
      selectFn: this.selectFn
    };
  }
  onContextmenu($event) {
    this.columnContextmenu.emit({
      event: $event,
      column: this.column
    });
  }
  ngOnInit() {
    this.sortClass = this.calcSortClass(this.sortDir);
  }
  calcSortDir(sorts) {
    if (sorts && this.column) {
      const sort = sorts.find((s) => s.prop === this.column.prop);
      if (sort) {
        return sort.dir;
      }
    }
  }
  onSort() {
    if (!this.column.sortable) {
      return;
    }
    const newValue = nextSortDir(this.sortType, this.sortDir);
    this.sort.emit({
      column: this.column,
      prevValue: this.sortDir,
      newValue
    });
  }
  calcSortClass(sortDir) {
    if (!this.cellContext.column.sortable) {
      return;
    }
    if (sortDir === SortDirection.asc) {
      return `sort-btn sort-asc ${this.sortAscendingIcon}`;
    } else if (sortDir === SortDirection.desc) {
      return `sort-btn sort-desc ${this.sortDescendingIcon}`;
    } else {
      return `sort-btn ${this.sortUnsetIcon}`;
    }
  }
};
_DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) {
  return new (t || _DataTableHeaderCellComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_DataTableHeaderCellComponent.ɵcmp = ɵɵdefineComponent({
  type: _DataTableHeaderCellComponent,
  selectors: [["datatable-header-cell"]],
  hostAttrs: [1, "datatable-header-cell"],
  hostVars: 11,
  hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) {
        return ctx.onContextmenu($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("title", ctx.name);
      ɵɵclassMap(ctx.columnCssClasses);
      ɵɵstyleProp("height", ctx.headerHeight, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px");
    }
  },
  inputs: {
    sortType: "sortType",
    sortAscendingIcon: "sortAscendingIcon",
    sortDescendingIcon: "sortDescendingIcon",
    sortUnsetIcon: "sortUnsetIcon",
    isTarget: "isTarget",
    targetMarkerTemplate: "targetMarkerTemplate",
    targetMarkerContext: "targetMarkerContext",
    allRowsSelected: "allRowsSelected",
    selectionType: "selectionType",
    column: "column",
    headerHeight: "headerHeight",
    sorts: "sorts"
  },
  outputs: {
    sort: "sort",
    select: "select",
    columnContextmenu: "columnContextmenu"
  },
  decls: 6,
  vars: 6,
  consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]],
  template: function DataTableHeaderCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, DataTableHeaderCellComponent_1_Template, 1, 2, null, 1)(2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2)(3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3)(4, DataTableHeaderCellComponent_4_Template, 1, 2, null, 1);
      ɵɵelementStart(5, "span", 4);
      ɵɵlistener("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() {
        return ctx.onSort();
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isTarget);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isCheckboxable);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.column.headerTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.column.headerTemplate);
      ɵɵadvance();
      ɵɵclassMap(ctx.sortClass);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var DataTableHeaderCellComponent = _DataTableHeaderCellComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableHeaderCellComponent, [{
    type: Component,
    args: [{
      selector: "datatable-header-cell",
      template: `
    <div class="datatable-header-cell-template-wrap">
      <ng-template
        *ngIf="isTarget"
        [ngTemplateOutlet]="targetMarkerTemplate"
        [ngTemplateOutletContext]="targetMarkerContext"
      >
      </ng-template>
      <label *ngIf="isCheckboxable" class="datatable-checkbox">
        <input type="checkbox" [checked]="allRowsSelected" (change)="select.emit(!allRowsSelected)" />
      </label>
      <span *ngIf="!column.headerTemplate" class="datatable-header-cell-wrapper">
        <span class="datatable-header-cell-label draggable" (click)="onSort()" [innerHTML]="name"> </span>
      </span>
      <ng-template
        *ngIf="column.headerTemplate"
        [ngTemplateOutlet]="column.headerTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
      <span (click)="onSort()" [class]="sortClass"> </span>
    </div>
  `,
      host: {
        class: "datatable-header-cell"
      },
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    sortType: [{
      type: Input
    }],
    sortAscendingIcon: [{
      type: Input
    }],
    sortDescendingIcon: [{
      type: Input
    }],
    sortUnsetIcon: [{
      type: Input
    }],
    isTarget: [{
      type: Input
    }],
    targetMarkerTemplate: [{
      type: Input
    }],
    targetMarkerContext: [{
      type: Input
    }],
    allRowsSelected: [{
      type: Input
    }],
    selectionType: [{
      type: Input
    }],
    column: [{
      type: Input
    }],
    headerHeight: [{
      type: HostBinding,
      args: ["style.height.px"]
    }, {
      type: Input
    }],
    sorts: [{
      type: Input
    }],
    sort: [{
      type: Output
    }],
    select: [{
      type: Output
    }],
    columnContextmenu: [{
      type: Output
    }],
    columnCssClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    name: [{
      type: HostBinding,
      args: ["attr.title"]
    }],
    minWidth: [{
      type: HostBinding,
      args: ["style.minWidth.px"]
    }],
    maxWidth: [{
      type: HostBinding,
      args: ["style.maxWidth.px"]
    }],
    width: [{
      type: HostBinding,
      args: ["style.width.px"]
    }],
    onContextmenu: [{
      type: HostListener,
      args: ["contextmenu", ["$event"]]
    }]
  });
})();
var _DataTableHeaderComponent = class _DataTableHeaderComponent {
  set innerWidth(val) {
    this._innerWidth = val;
    setTimeout(() => {
      if (this._columns) {
        const colByPin = columnsByPin(this._columns);
        this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
        this.setStylesByGroup();
      }
    });
  }
  get innerWidth() {
    return this._innerWidth;
  }
  set headerHeight(val) {
    if (val !== "auto") {
      this._headerHeight = `${val}px`;
    } else {
      this._headerHeight = val;
    }
  }
  get headerHeight() {
    return this._headerHeight;
  }
  set columns(val) {
    this._columns = val;
    const colsByPin = columnsByPin(val);
    this._columnsByPin = columnsByPinArr(val);
    setTimeout(() => {
      this._columnGroupWidths = columnGroupWidths(colsByPin, val);
      this.setStylesByGroup();
    });
  }
  get columns() {
    return this._columns;
  }
  set offsetX(val) {
    this._offsetX = val;
    this.setStylesByGroup();
  }
  get offsetX() {
    return this._offsetX;
  }
  constructor(cd) {
    this.cd = cd;
    this.sort = new EventEmitter();
    this.reorder = new EventEmitter();
    this.resize = new EventEmitter();
    this.resizing = new EventEmitter();
    this.select = new EventEmitter();
    this.columnContextmenu = new EventEmitter(false);
    this._columnGroupWidths = {
      total: 100
    };
    this._styleByGroup = {
      left: {},
      center: {},
      right: {}
    };
    this.destroyed = false;
  }
  ngOnDestroy() {
    this.destroyed = true;
  }
  onLongPressStart({
    event,
    model
  }) {
    model.dragging = true;
    this.dragEventTarget = event;
  }
  onLongPressEnd({
    event,
    model
  }) {
    this.dragEventTarget = event;
    setTimeout(() => {
      const column = this._columns.find((c) => c.$$id === model.$$id);
      if (column) {
        column.dragging = false;
      }
    }, 5);
  }
  get headerWidth() {
    if (this.scrollbarH) {
      return this.innerWidth + "px";
    }
    return "100%";
  }
  trackByGroups(index, colGroup) {
    return colGroup.type;
  }
  columnTrackingFn(index, column) {
    return column.$$id;
  }
  onColumnResized(width, column) {
    this.resize.emit(this.makeResizeEvent(width, column));
  }
  onColumnResizing(width, column) {
    this.resizing.emit(this.makeResizeEvent(width, column));
  }
  makeResizeEvent(width, column) {
    if (width <= column.minWidth) {
      width = column.minWidth;
    } else if (width >= column.maxWidth) {
      width = column.maxWidth;
    }
    return {
      column,
      prevValue: column.width,
      newValue: width
    };
  }
  onColumnReordered({
    prevIndex,
    newIndex,
    model
  }) {
    const column = this.getColumn(newIndex);
    column.isTarget = false;
    column.targetMarkerContext = void 0;
    this.reorder.emit({
      column: model,
      prevValue: prevIndex,
      newValue: newIndex
    });
  }
  onTargetChanged({
    prevIndex,
    newIndex,
    initialIndex
  }) {
    if (prevIndex || prevIndex === 0) {
      const oldColumn = this.getColumn(prevIndex);
      oldColumn.isTarget = false;
      oldColumn.targetMarkerContext = void 0;
    }
    if (newIndex || newIndex === 0) {
      const newColumn = this.getColumn(newIndex);
      newColumn.isTarget = true;
      if (initialIndex !== newIndex) {
        newColumn.targetMarkerContext = {
          class: "targetMarker ".concat(initialIndex > newIndex ? "dragFromRight" : "dragFromLeft")
        };
      }
    }
  }
  getColumn(index) {
    const leftColumnCount = this._columnsByPin[0].columns.length;
    if (index < leftColumnCount) {
      return this._columnsByPin[0].columns[index];
    }
    const centerColumnCount = this._columnsByPin[1].columns.length;
    if (index < leftColumnCount + centerColumnCount) {
      return this._columnsByPin[1].columns[index - leftColumnCount];
    }
    return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
  }
  onSort({
    column,
    prevValue,
    newValue
  }) {
    if (column.dragging) {
      return;
    }
    const sorts = this.calcNewSorts(column, prevValue, newValue);
    this.sort.emit({
      sorts,
      column,
      prevValue,
      newValue
    });
  }
  calcNewSorts(column, prevValue, newValue) {
    let idx = 0;
    if (!this.sorts) {
      this.sorts = [];
    }
    const sorts = this.sorts.map((s, i) => {
      s = __spreadValues({}, s);
      if (s.prop === column.prop) {
        idx = i;
      }
      return s;
    });
    if (newValue === void 0) {
      sorts.splice(idx, 1);
    } else if (prevValue) {
      sorts[idx].dir = newValue;
    } else {
      if (this.sortType === SortType.single) {
        sorts.splice(0, this.sorts.length);
      }
      sorts.push({
        dir: newValue,
        prop: column.prop
      });
    }
    return sorts;
  }
  setStylesByGroup() {
    this._styleByGroup.left = this.calcStylesByGroup("left");
    this._styleByGroup.center = this.calcStylesByGroup("center");
    this._styleByGroup.right = this.calcStylesByGroup("right");
    if (!this.destroyed) {
      this.cd.detectChanges();
    }
  }
  calcStylesByGroup(group) {
    const widths = this._columnGroupWidths;
    const offsetX = this.offsetX;
    const styles = {
      width: `${widths[group]}px`
    };
    if (group === "center") {
      translateXY(styles, offsetX * -1, 0);
    } else if (group === "right") {
      const totalDiff = widths.total - this.innerWidth;
      const offset = totalDiff * -1;
      translateXY(styles, offset, 0);
    }
    return styles;
  }
};
_DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) {
  return new (t || _DataTableHeaderComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_DataTableHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _DataTableHeaderComponent,
  selectors: [["datatable-header"]],
  hostAttrs: [1, "datatable-header"],
  hostVars: 4,
  hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("height", ctx.headerHeight)("width", ctx.headerWidth);
    }
  },
  inputs: {
    sortAscendingIcon: "sortAscendingIcon",
    sortDescendingIcon: "sortDescendingIcon",
    sortUnsetIcon: "sortUnsetIcon",
    scrollbarH: "scrollbarH",
    dealsWithGroup: "dealsWithGroup",
    targetMarkerTemplate: "targetMarkerTemplate",
    innerWidth: "innerWidth",
    sorts: "sorts",
    sortType: "sortType",
    allRowsSelected: "allRowsSelected",
    selectionType: "selectionType",
    reorderable: "reorderable",
    headerHeight: "headerHeight",
    columns: "columns",
    offsetX: "offsetX"
  },
  outputs: {
    sort: "sort",
    reorder: "reorder",
    resize: "resize",
    resizing: "resizing",
    select: "select",
    columnContextmenu: "columnContextmenu"
  },
  decls: 2,
  vars: 4,
  consts: [["role", "row", "orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["role", "columnheader", "resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "resizing", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "columnheader", "resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "resizing", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]],
  template: function DataTableHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) {
        return ctx.onColumnReordered($event);
      })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) {
        return ctx.onTargetChanged($event);
      });
      ɵɵtemplate(1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵstyleProp("width", ctx._columnGroupWidths.total, "px");
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    }
  },
  dependencies: [NgForOf, NgStyle, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, DataTableHeaderCellComponent],
  encapsulation: 2,
  changeDetection: 0
});
var DataTableHeaderComponent = _DataTableHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableHeaderComponent, [{
    type: Component,
    args: [{
      selector: "datatable-header",
      template: `
    <div
      role="row"
      orderable
      (reorder)="onColumnReordered($event)"
      (targetChanged)="onTargetChanged($event)"
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-header-inner"
    >
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]"
      >
        <datatable-header-cell
          role="columnheader"
          *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          (resizing)="onColumnResizing($event, column)"
          long-press
          [pressModel]="column"
          [pressEnabled]="reorderable && column.draggable"
          (longPressStart)="onLongPressStart($event)"
          (longPressEnd)="onLongPressEnd($event)"
          draggable
          [dragX]="reorderable && column.draggable && column.dragging"
          [dragY]="false"
          [dragModel]="column"
          [dragEventTarget]="dragEventTarget"
          [headerHeight]="headerHeight"
          [isTarget]="column.isTarget"
          [targetMarkerTemplate]="targetMarkerTemplate"
          [targetMarkerContext]="column.targetMarkerContext"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [selectionType]="selectionType"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          [sortUnsetIcon]="sortUnsetIcon"
          [allRowsSelected]="allRowsSelected"
          (sort)="onSort($event)"
          (select)="select.emit($event)"
          (columnContextmenu)="columnContextmenu.emit($event)"
        >
        </datatable-header-cell>
      </div>
    </div>
  `,
      host: {
        class: "datatable-header"
      },
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    sortAscendingIcon: [{
      type: Input
    }],
    sortDescendingIcon: [{
      type: Input
    }],
    sortUnsetIcon: [{
      type: Input
    }],
    scrollbarH: [{
      type: Input
    }],
    dealsWithGroup: [{
      type: Input
    }],
    targetMarkerTemplate: [{
      type: Input
    }],
    innerWidth: [{
      type: Input
    }],
    sorts: [{
      type: Input
    }],
    sortType: [{
      type: Input
    }],
    allRowsSelected: [{
      type: Input
    }],
    selectionType: [{
      type: Input
    }],
    reorderable: [{
      type: Input
    }],
    headerHeight: [{
      type: HostBinding,
      args: ["style.height"]
    }, {
      type: Input
    }],
    columns: [{
      type: Input
    }],
    offsetX: [{
      type: Input
    }],
    sort: [{
      type: Output
    }],
    reorder: [{
      type: Output
    }],
    resize: [{
      type: Output
    }],
    resizing: [{
      type: Output
    }],
    select: [{
      type: Output
    }],
    columnContextmenu: [{
      type: Output
    }],
    headerWidth: [{
      type: HostBinding,
      args: ["style.width"]
    }]
  });
})();
function throttle(func, wait, options) {
  options = options || {};
  let context;
  let args;
  let result;
  let timeout = null;
  let previous = 0;
  function later() {
    previous = options.leading === false ? 0 : +/* @__PURE__ */ new Date();
    timeout = null;
    result = func.apply(context, args);
  }
  return function() {
    const now = +/* @__PURE__ */ new Date();
    if (!previous && options.leading === false) {
      previous = now;
    }
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}
function throttleable(duration, options) {
  return function innerDecorator(target, key, descriptor) {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: function getter() {
        Object.defineProperty(this, key, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: throttle(descriptor.value, duration, options)
        });
        return this[key];
      }
    };
  };
}
function getTotalFlexGrow(columns) {
  let totalFlexGrow = 0;
  for (const c of columns) {
    totalFlexGrow += c.flexGrow || 0;
  }
  return totalFlexGrow;
}
function adjustColumnWidths(allColumns, expectedWidth) {
  const columnsWidth = columnsTotalWidth(allColumns);
  const totalFlexGrow = getTotalFlexGrow(allColumns);
  const colsByGroup = columnsByPin(allColumns);
  if (columnsWidth !== expectedWidth) {
    scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
  }
}
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
  for (const attr in colsByGroup) {
    if (colsByGroup.hasOwnProperty(attr)) {
      for (const column of colsByGroup[attr]) {
        if (column.$$oldWidth) {
          column.canAutoResize = false;
        }
        if (!column.canAutoResize) {
          maxWidth -= column.width;
          totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
        } else {
          column.width = 0;
        }
      }
    }
  }
  const hasMinWidth = {};
  let remainingWidth = maxWidth;
  do {
    const widthPerFlexPoint = remainingWidth / totalFlexGrow;
    remainingWidth = 0;
    for (const attr in colsByGroup) {
      if (colsByGroup.hasOwnProperty(attr)) {
        for (const column of colsByGroup[attr]) {
          if (column.canAutoResize && !hasMinWidth[column.prop]) {
            const newWidth = column.width + column.flexGrow * widthPerFlexPoint;
            if (column.minWidth !== void 0 && newWidth < column.minWidth) {
              remainingWidth += newWidth - column.minWidth;
              column.width = column.minWidth;
              hasMinWidth[column.prop] = true;
            } else {
              column.width = newWidth;
            }
          }
        }
      }
    }
  } while (remainingWidth !== 0);
}
function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth = 300) {
  const columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter((c) => c.canAutoResize !== false);
  for (const column of columnsToResize) {
    if (!column.$$oldWidth) {
      column.$$oldWidth = column.width;
    }
  }
  let additionWidthPerColumn = 0;
  let exceedsWindow = false;
  let contentWidth = getContentWidth(allColumns, defaultColWidth);
  let remainingWidth = expectedWidth - contentWidth;
  const columnsProcessed = [];
  const remainingWidthLimit = 1;
  do {
    additionWidthPerColumn = remainingWidth / columnsToResize.length;
    exceedsWindow = contentWidth >= expectedWidth;
    for (const column of columnsToResize) {
      if (exceedsWindow && allowBleed) {
        column.width = column.$$oldWidth || column.width || defaultColWidth;
      } else {
        const newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
        if (column.minWidth && newSize < column.minWidth) {
          column.width = column.minWidth;
          columnsProcessed.push(column);
        } else if (column.maxWidth && newSize > column.maxWidth) {
          column.width = column.maxWidth;
          columnsProcessed.push(column);
        } else {
          column.width = newSize;
        }
      }
      column.width = Math.max(0, column.width);
    }
    contentWidth = getContentWidth(allColumns);
    remainingWidth = expectedWidth - contentWidth;
    removeProcessedColumns(columnsToResize, columnsProcessed);
  } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
  for (const column of columnsToResize) {
    column.$$oldWidth = 0;
  }
}
function removeProcessedColumns(columnsToResize, columnsProcessed) {
  for (const column of columnsProcessed) {
    const index = columnsToResize.indexOf(column);
    columnsToResize.splice(index, 1);
  }
}
function getContentWidth(allColumns, defaultColWidth = 300) {
  let contentWidth = 0;
  for (const column of allColumns) {
    contentWidth += column.width || defaultColWidth;
  }
  return contentWidth;
}
var _DataTablePagerComponent = class _DataTablePagerComponent {
  constructor() {
    this.change = new EventEmitter();
    this._count = 0;
    this._page = 1;
    this._size = 0;
  }
  set size(val) {
    this._size = val;
    this.pages = this.calcPages();
  }
  get size() {
    return this._size;
  }
  set count(val) {
    this._count = val;
    this.pages = this.calcPages();
  }
  get count() {
    return this._count;
  }
  set page(val) {
    this._page = val;
    this.pages = this.calcPages();
  }
  get page() {
    return this._page;
  }
  get totalPages() {
    const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
    return Math.max(count || 0, 1);
  }
  canPrevious() {
    return this.page > 1;
  }
  canNext() {
    return this.page < this.totalPages;
  }
  prevPage() {
    this.selectPage(this.page - 1);
  }
  nextPage() {
    this.selectPage(this.page + 1);
  }
  selectPage(page) {
    if (page > 0 && page <= this.totalPages && page !== this.page) {
      this.page = page;
      this.change.emit({
        page
      });
    }
  }
  calcPages(page) {
    const pages = [];
    let startPage = 1;
    let endPage = this.totalPages;
    const maxSize = 5;
    const isMaxSized = maxSize < this.totalPages;
    page = page || this.page;
    if (isMaxSized) {
      startPage = page - Math.floor(maxSize / 2);
      endPage = page + Math.floor(maxSize / 2);
      if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(startPage + maxSize - 1, this.totalPages);
      } else if (endPage > this.totalPages) {
        startPage = Math.max(this.totalPages - maxSize + 1, 1);
        endPage = this.totalPages;
      }
    }
    for (let num = startPage; num <= endPage; num++) {
      pages.push({
        // eslint-disable-next-line id-blacklist
        number: num,
        text: num.toString()
      });
    }
    return pages;
  }
};
_DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) {
  return new (t || _DataTablePagerComponent)();
};
_DataTablePagerComponent.ɵcmp = ɵɵdefineComponent({
  type: _DataTablePagerComponent,
  selectors: [["datatable-pager"]],
  hostAttrs: [1, "datatable-pager"],
  inputs: {
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    size: "size",
    count: "count",
    page: "page"
  },
  outputs: {
    change: "change"
  },
  decls: 14,
  vars: 21,
  consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", 3, "click"], ["role", "button", "aria-label", "go to previous page", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", 3, "click"], ["role", "button", "aria-label", "go to last page", 3, "click"], ["role", "button", 1, "pages"], [3, "click"]],
  template: function DataTablePagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ul", 0)(1, "li")(2, "a", 1);
      ɵɵlistener("click", function DataTablePagerComponent_Template_a_click_2_listener() {
        return ctx.selectPage(1);
      });
      ɵɵelement(3, "i");
      ɵɵelementEnd()();
      ɵɵelementStart(4, "li")(5, "a", 2);
      ɵɵlistener("click", function DataTablePagerComponent_Template_a_click_5_listener() {
        return ctx.prevPage();
      });
      ɵɵelement(6, "i");
      ɵɵelementEnd()();
      ɵɵtemplate(7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);
      ɵɵelementStart(8, "li")(9, "a", 4);
      ɵɵlistener("click", function DataTablePagerComponent_Template_a_click_9_listener() {
        return ctx.nextPage();
      });
      ɵɵelement(10, "i");
      ɵɵelementEnd()();
      ɵɵelementStart(11, "li")(12, "a", 5);
      ɵɵlistener("click", function DataTablePagerComponent_Template_a_click_12_listener() {
        return ctx.selectPage(ctx.totalPages);
      });
      ɵɵelement(13, "i");
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵclassProp("disabled", !ctx.canPrevious());
      ɵɵadvance(2);
      ɵɵclassMap(ctx.pagerPreviousIcon);
      ɵɵadvance();
      ɵɵclassProp("disabled", !ctx.canPrevious());
      ɵɵadvance(2);
      ɵɵclassMap(ctx.pagerLeftArrowIcon);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.pages);
      ɵɵadvance();
      ɵɵclassProp("disabled", !ctx.canNext());
      ɵɵadvance(2);
      ɵɵclassMap(ctx.pagerRightArrowIcon);
      ɵɵadvance();
      ɵɵclassProp("disabled", !ctx.canNext());
      ɵɵadvance(2);
      ɵɵclassMap(ctx.pagerNextIcon);
    }
  },
  dependencies: [NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
var DataTablePagerComponent = _DataTablePagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTablePagerComponent, [{
    type: Component,
    args: [{
      selector: "datatable-pager",
      template: `
    <ul class="pager">
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to first page" (click)="selectPage(1)">
          <i class="{{ pagerPreviousIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to previous page" (click)="prevPage()">
          <i class="{{ pagerLeftArrowIcon }}"></i>
        </a>
      </li>
      <li
        role="button"
        [attr.aria-label]="'page ' + pg.number"
        class="pages"
        *ngFor="let pg of pages"
        [class.active]="pg.number === page"
      >
        <a (click)="selectPage(pg.number)">
          {{ pg.text }}
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to next page" (click)="nextPage()">
          <i class="{{ pagerRightArrowIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to last page" (click)="selectPage(totalPages)">
          <i class="{{ pagerNextIcon }}"></i>
        </a>
      </li>
    </ul>
  `,
      host: {
        class: "datatable-pager"
      },
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    pagerLeftArrowIcon: [{
      type: Input
    }],
    pagerRightArrowIcon: [{
      type: Input
    }],
    pagerPreviousIcon: [{
      type: Input
    }],
    pagerNextIcon: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    count: [{
      type: Input
    }],
    page: [{
      type: Input
    }],
    change: [{
      type: Output
    }]
  });
})();
var _DataTableFooterComponent = class _DataTableFooterComponent {
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
};
_DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) {
  return new (t || _DataTableFooterComponent)();
};
_DataTableFooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _DataTableFooterComponent,
  selectors: [["datatable-footer"]],
  hostAttrs: [1, "datatable-footer"],
  inputs: {
    footerHeight: "footerHeight",
    rowCount: "rowCount",
    pageSize: "pageSize",
    offset: "offset",
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    totalMessage: "totalMessage",
    footerTemplate: "footerTemplate",
    selectedCount: "selectedCount",
    selectedMessage: "selectedMessage"
  },
  outputs: {
    page: "page"
  },
  decls: 4,
  vars: 8,
  consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]],
  template: function DataTableFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, DataTableFooterComponent_1_Template, 1, 8, null, 1)(2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2)(3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵstyleProp("height", ctx.footerHeight, "px");
      ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c9, ctx.selectedMessage));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.footerTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.footerTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.footerTemplate);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, DataTablePagerComponent],
  encapsulation: 2,
  changeDetection: 0
});
var DataTableFooterComponent = _DataTableFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableFooterComponent, [{
    type: Component,
    args: [{
      selector: "datatable-footer",
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
        class: "datatable-footer"
      },
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    footerHeight: [{
      type: Input
    }],
    rowCount: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    pagerLeftArrowIcon: [{
      type: Input
    }],
    pagerRightArrowIcon: [{
      type: Input
    }],
    pagerPreviousIcon: [{
      type: Input
    }],
    pagerNextIcon: [{
      type: Input
    }],
    totalMessage: [{
      type: Input
    }],
    footerTemplate: [{
      type: Input
    }],
    selectedCount: [{
      type: Input
    }],
    selectedMessage: [{
      type: Input
    }],
    page: [{
      type: Output
    }]
  });
})();
var _DatatableComponent = class _DatatableComponent {
  /**
   * Rows that are displayed in the table.
   */
  set rows(val) {
    this._rows = val;
    if (val) {
      this._internalRows = [...val];
    }
    if (!this.externalSorting) {
      this.sortInternalRows();
    }
    this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
    this.recalculate();
    if (this._rows && this._groupRowsBy) {
      this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
    }
    this.cd.markForCheck();
  }
  /**
   * Gets the rows.
   */
  get rows() {
    return this._rows;
  }
  /**
   * This attribute allows the user to set the name of the column to group the data with
   */
  set groupRowsBy(val) {
    if (val) {
      this._groupRowsBy = val;
      if (this._rows && this._groupRowsBy) {
        this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
      }
    }
  }
  get groupRowsBy() {
    return this._groupRowsBy;
  }
  /**
   * Columns to be displayed.
   */
  set columns(val) {
    if (val) {
      this._internalColumns = [...val];
      setColumnDefaults(this._internalColumns);
      this.recalculateColumns();
    }
    this._columns = val;
  }
  /**
   * Get the columns.
   */
  get columns() {
    return this._columns;
  }
  /**
   * The page size to be shown.
   * Default value: `undefined`
   */
  set limit(val) {
    this._limit = val;
    this.recalculate();
  }
  /**
   * Gets the limit.
   */
  get limit() {
    return this._limit;
  }
  /**
   * The total count of all rows.
   * Default value: `0`
   */
  set count(val) {
    this._count = val;
    this.recalculate();
  }
  /**
   * Gets the count.
   */
  get count() {
    return this._count;
  }
  /**
   * The current offset ( page - 1 ) shown.
   * Default value: `0`
   */
  set offset(val) {
    this._offset = val;
  }
  get offset() {
    return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
  }
  /**
   * Show ghost loaders on each cell.
   * Default value: `false`
   */
  set ghostLoadingIndicator(val) {
    this._ghostLoadingIndicator = val;
    if (val && this.scrollbarV && !this.externalPaging) {
      this.rows = [...this.rows ?? [], void 0];
    }
  }
  get ghostLoadingIndicator() {
    return this._ghostLoadingIndicator;
  }
  /**
   * CSS class applied if the header height if fixed height.
   */
  get isFixedHeader() {
    const headerHeight = this.headerHeight;
    return typeof headerHeight === "string" ? headerHeight !== "auto" : true;
  }
  /**
   * CSS class applied to the root element if
   * the row heights are fixed heights.
   */
  get isFixedRow() {
    return this.rowHeight !== "auto";
  }
  /**
   * CSS class applied to root element if
   * vertical scrolling is enabled.
   */
  get isVertScroll() {
    return this.scrollbarV;
  }
  /**
   * CSS class applied to root element if
   * virtualization is enabled.
   */
  get isVirtualized() {
    return this.virtualization;
  }
  /**
   * CSS class applied to the root element
   * if the horziontal scrolling is enabled.
   */
  get isHorScroll() {
    return this.scrollbarH;
  }
  /**
   * CSS class applied to root element is selectable.
   */
  get isSelectable() {
    return this.selectionType !== void 0;
  }
  /**
   * CSS class applied to root is checkbox selection.
   */
  get isCheckboxSelection() {
    return this.selectionType === SelectionType.checkbox;
  }
  /**
   * CSS class applied to root if cell selection.
   */
  get isCellSelection() {
    return this.selectionType === SelectionType.cell;
  }
  /**
   * CSS class applied to root if single select.
   */
  get isSingleSelection() {
    return this.selectionType === SelectionType.single;
  }
  /**
   * CSS class added to root element if mulit select
   */
  get isMultiSelection() {
    return this.selectionType === SelectionType.multi;
  }
  /**
   * CSS class added to root element if mulit click select
   */
  get isMultiClickSelection() {
    return this.selectionType === SelectionType.multiClick;
  }
  /**
   * Column templates gathered from `ContentChildren`
   * if described in your markup.
   */
  set columnTemplates(val) {
    this._columnTemplates = val;
    this.translateColumns(val);
  }
  /**
   * Returns the column templates.
   */
  get columnTemplates() {
    return this._columnTemplates;
  }
  /**
   * Returns if all rows are selected.
   */
  get allRowsSelected() {
    let allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;
    if (this.bodyComponent && this.selectAllRowsOnPage) {
      const indexes = this.bodyComponent.indexes;
      const rowsOnPage = indexes.last - indexes.first;
      allRowsSelected = this.selected.length === rowsOnPage;
    }
    return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
  }
  constructor(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
    this.scrollbarHelper = scrollbarHelper;
    this.dimensionsHelper = dimensionsHelper;
    this.cd = cd;
    this.columnChangesService = columnChangesService;
    this.configuration = configuration;
    this.selected = [];
    this.scrollbarV = false;
    this.scrollbarVDynamic = false;
    this.scrollbarH = false;
    this.rowHeight = 30;
    this.columnMode = ColumnMode.standard;
    this.headerHeight = 30;
    this.footerHeight = 0;
    this.externalPaging = false;
    this.externalSorting = false;
    this.loadingIndicator = false;
    this.reorderable = true;
    this.swapColumns = true;
    this.sortType = SortType.single;
    this.sorts = [];
    this.cssClasses = {
      sortAscending: "datatable-icon-up",
      sortDescending: "datatable-icon-down",
      sortUnset: "datatable-icon-sort-unset",
      pagerLeftArrow: "datatable-icon-left",
      pagerRightArrow: "datatable-icon-right",
      pagerPrevious: "datatable-icon-prev",
      pagerNext: "datatable-icon-skip"
    };
    this.messages = {
      // Message to show when array is presented
      // but contains no values
      emptyMessage: "No data to display",
      // Footer total message
      totalMessage: "total",
      // Footer selected message
      selectedMessage: "selected"
    };
    this.groupExpansionDefault = false;
    this.selectAllRowsOnPage = false;
    this.virtualization = true;
    this.summaryRow = false;
    this.summaryHeight = 30;
    this.summaryPosition = "top";
    this.rowDraggable = false;
    this.scroll = new EventEmitter();
    this.activate = new EventEmitter();
    this.select = new EventEmitter();
    this.sort = new EventEmitter();
    this.page = new EventEmitter();
    this.reorder = new EventEmitter();
    this.resize = new EventEmitter();
    this.tableContextmenu = new EventEmitter(false);
    this.treeAction = new EventEmitter();
    this.rowDragEvents = new EventEmitter();
    this.rowCount = 0;
    this._offsetX = new BehaviorSubject(0);
    this._count = 0;
    this._offset = 0;
    this._subscriptions = [];
    this._ghostLoadingIndicator = false;
    this.rowIdentity = (x) => {
      if (this._groupRowsBy) {
        return x.key;
      } else {
        return x;
      }
    };
    this.element = element.nativeElement;
    this.rowDiffer = differs.find({}).create();
    if (this.configuration) {
      if (this.configuration.messages) {
        this.messages = __spreadValues({}, this.configuration.messages);
      }
      if (this.configuration.cssClasses) {
        this.cssClasses = __spreadValues({}, this.configuration.cssClasses);
      }
      this.headerHeight = this.configuration.headerHeight ?? this.headerHeight;
      this.footerHeight = this.configuration.footerHeight ?? this.footerHeight;
      this.rowHeight = this.configuration.rowHeight ?? this.rowHeight;
    }
  }
  /**
   * Lifecycle hook that is called after data-bound
   * properties of a directive are initialized.
   */
  ngOnInit() {
    this.recalculate();
  }
  /**
   * Lifecycle hook that is called after a component's
   * view has been fully initialized.
   */
  ngAfterViewInit() {
    if (!this.externalSorting) {
      this.sortInternalRows();
    }
    if (typeof requestAnimationFrame === "undefined") {
      return;
    }
    requestAnimationFrame(() => {
      this.recalculate();
      if (this.externalPaging && this.scrollbarV) {
        this.page.emit({
          count: this.count,
          pageSize: this.pageSize,
          limit: this.limit,
          offset: 0
        });
      }
    });
  }
  /**
   * Lifecycle hook that is called after a component's
   * content has been fully initialized.
   */
  ngAfterContentInit() {
    this.columnTemplates.changes.subscribe((v) => this.translateColumns(v));
    this.listenForColumnInputChanges();
  }
  /**
   * Translates the templates to the column objects
   */
  translateColumns(val) {
    if (val) {
      const arr = val.toArray();
      if (arr.length) {
        this._internalColumns = translateTemplates(arr);
        setColumnDefaults(this._internalColumns);
        this.recalculateColumns();
        if (!this.externalSorting) {
          this.sortInternalRows();
        }
        this.cd.markForCheck();
      }
    }
  }
  /**
   * Creates a map with the data grouped by the user choice of grouping index
   *
   * @param originalArray the original array passed via parameter
   * @param groupByIndex  the index of the column to group the data by
   */
  groupArrayBy(originalArray, groupBy) {
    const map = /* @__PURE__ */ new Map();
    let i = 0;
    originalArray.forEach((item) => {
      const key = item[groupBy];
      if (!map.has(key)) {
        map.set(key, [item]);
      } else {
        map.get(key).push(item);
      }
      i++;
    });
    const addGroup = (key, value) => ({
      key,
      value
    });
    return Array.from(map, (x) => addGroup(x[0], x[1]));
  }
  /*
   * Lifecycle hook that is called when Angular dirty checks a directive.
   */
  ngDoCheck() {
    if (this.rowDiffer.diff(this.rows)) {
      if (!this.externalSorting) {
        this.sortInternalRows();
      } else {
        this._internalRows = [...this.rows];
      }
      this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
      this.recalculatePages();
      this.cd.markForCheck();
    }
  }
  /**
   * Recalc's the sizes of the grid.
   *
   * Updated automatically on changes to:
   *
   *  - Columns
   *  - Rows
   *  - Paging related
   *
   * Also can be manually invoked or upon window resize.
   */
  recalculate() {
    this.recalculateDims();
    this.recalculateColumns();
    this.cd.markForCheck();
  }
  /**
   * Window resize handler to update sizes.
   */
  onWindowResize() {
    this.recalculate();
  }
  /**
   * Recalulcates the column widths based on column width
   * distribution mode and scrollbar offsets.
   */
  recalculateColumns(columns = this._internalColumns, forceIdx = -1, allowBleed = this.scrollbarH) {
    if (!columns) {
      return void 0;
    }
    let width = this._innerWidth;
    if (this.scrollbarV && !this.scrollbarVDynamic) {
      width = width - this.scrollbarHelper.width;
    } else if (this.scrollbarVDynamic) {
      const scrollerHeight = this.bodyComponent?.scroller?.element.offsetHeight;
      if (scrollerHeight && this.bodyHeight < scrollerHeight) {
        width = width - this.scrollbarHelper.width;
      }
      if (this.headerComponent && this.headerComponent.innerWidth !== width) {
        this.headerComponent.innerWidth = width;
      }
      if (this.bodyComponent && this.bodyComponent.innerWidth !== width) {
        this.bodyComponent.innerWidth = width;
        this.bodyComponent.cd.markForCheck();
      }
    }
    if (this.columnMode === ColumnMode.force) {
      forceFillColumnWidths(columns, width, forceIdx, allowBleed);
    } else if (this.columnMode === ColumnMode.flex) {
      adjustColumnWidths(columns, width);
    }
    return columns;
  }
  /**
   * Recalculates the dimensions of the table size.
   * Internally calls the page size and row count calcs too.
   *
   */
  recalculateDims() {
    const dims = this.dimensionsHelper.getDimensions(this.element);
    this._innerWidth = Math.floor(dims.width);
    if (this.scrollbarV) {
      let height = dims.height;
      if (this.headerHeight) {
        height = height - this.headerHeight;
      }
      if (this.footerHeight) {
        height = height - this.footerHeight;
      }
      this.bodyHeight = height;
    }
    this.recalculatePages();
  }
  /**
   * Recalculates the pages after a update.
   */
  recalculatePages() {
    this.pageSize = this.calcPageSize();
    this.rowCount = this.calcRowCount();
  }
  /**
   * Body triggered a page event.
   */
  onBodyPage({
    offset
  }) {
    if (this.externalPaging && !this.virtualization) {
      return;
    }
    this.offset = offset;
    if (!isNaN(this.offset)) {
      this.page.emit({
        count: this.count,
        pageSize: this.pageSize,
        limit: this.limit,
        offset: this.offset
      });
    }
  }
  /**
   * The body triggered a scroll event.
   */
  onBodyScroll(event) {
    this._offsetX.next(event.offsetX);
    this.scroll.emit(event);
    this.cd.detectChanges();
  }
  /**
   * The footer triggered a page event.
   */
  onFooterPage(event) {
    this.offset = event.page - 1;
    this.bodyComponent.updateOffsetY(this.offset);
    this.page.emit({
      count: this.count,
      pageSize: this.pageSize,
      limit: this.limit,
      offset: this.offset
    });
    if (this.selectAllRowsOnPage) {
      this.selected = [];
      this.select.emit({
        selected: this.selected
      });
    }
  }
  /**
   * Recalculates the sizes of the page
   */
  calcPageSize(val = this.rows) {
    if (this.scrollbarV && this.virtualization) {
      const size = Math.ceil(this.bodyHeight / this.rowHeight);
      return Math.max(size, 0);
    }
    if (this.limit !== void 0) {
      return this.limit;
    }
    if (val) {
      return val.length;
    }
    return 0;
  }
  /**
   * Calculates the row count.
   */
  calcRowCount(val = this.rows) {
    if (!this.externalPaging) {
      if (!val) {
        return 0;
      }
      if (this.groupedRows) {
        return this.groupedRows.length;
      } else if (this.treeFromRelation != null && this.treeToRelation != null) {
        return this._internalRows.length;
      } else {
        return val.length;
      }
    }
    return this.count;
  }
  /**
   * The header triggered a contextmenu event.
   */
  onColumnContextmenu({
    event,
    column
  }) {
    this.tableContextmenu.emit({
      event,
      type: ContextmenuType.header,
      content: column
    });
  }
  /**
   * The body triggered a contextmenu event.
   */
  onRowContextmenu({
    event,
    row
  }) {
    this.tableContextmenu.emit({
      event,
      type: ContextmenuType.body,
      content: row
    });
  }
  /**
   * The header triggered a column resize event.
   */
  onColumnResize({
    column,
    newValue
  }) {
    if (column === void 0) {
      return;
    }
    let idx;
    const cols = this._internalColumns.map((c, i) => {
      c = __spreadValues({}, c);
      if (c.$$id === column.$$id) {
        idx = i;
        c.width = newValue;
        c.$$oldWidth = newValue;
      }
      return c;
    });
    this.recalculateColumns(cols, idx);
    this._internalColumns = cols;
    this.resize.emit({
      column,
      newValue
    });
  }
  onColumnResizing({
    column,
    newValue
  }) {
    if (column === void 0) {
      return;
    }
    column.width = newValue;
    column.$$oldWidth = newValue;
    const idx = this._internalColumns.indexOf(column);
    this.recalculateColumns(this._internalColumns, idx);
  }
  /**
   * The header triggered a column re-order event.
   */
  onColumnReorder({
    column,
    newValue,
    prevValue
  }) {
    const cols = this._internalColumns.map((c) => __spreadValues({}, c));
    if (this.swapColumns) {
      const prevCol = cols[newValue];
      cols[newValue] = column;
      cols[prevValue] = prevCol;
    } else {
      if (newValue > prevValue) {
        const movedCol = cols[prevValue];
        for (let i = prevValue; i < newValue; i++) {
          cols[i] = cols[i + 1];
        }
        cols[newValue] = movedCol;
      } else {
        const movedCol = cols[prevValue];
        for (let i = prevValue; i > newValue; i--) {
          cols[i] = cols[i - 1];
        }
        cols[newValue] = movedCol;
      }
    }
    this._internalColumns = cols;
    this.reorder.emit({
      column,
      newValue,
      prevValue
    });
  }
  /**
   * The header triggered a column sort event.
   */
  onColumnSort(event) {
    if (this.selectAllRowsOnPage) {
      this.selected = [];
      this.select.emit({
        selected: this.selected
      });
    }
    this.sorts = event.sorts;
    if (this.externalSorting === false) {
      this.sortInternalRows();
    }
    this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
    this.offset = 0;
    this.bodyComponent.updateOffsetY(this.offset);
    this.sort.emit(event);
  }
  /**
   * Toggle all row selection
   */
  onHeaderSelect(event) {
    if (this.bodyComponent && this.selectAllRowsOnPage) {
      const first = this.bodyComponent.indexes.first;
      const last = this.bodyComponent.indexes.last;
      const allSelected = this.selected.length === last - first;
      this.selected = [];
      if (!allSelected) {
        this.selected.push(...this._internalRows.slice(first, last));
      }
    } else {
      let relevantRows;
      if (this.disableRowCheck) {
        relevantRows = this.rows.filter((row) => !this.disableRowCheck(row));
      } else {
        relevantRows = this.rows;
      }
      const allSelected = this.selected.length === relevantRows.length;
      this.selected = [];
      if (!allSelected) {
        this.selected.push(...relevantRows);
      }
    }
    this.select.emit({
      selected: this.selected
    });
  }
  /**
   * A row was selected from body
   */
  onBodySelect(event) {
    this.select.emit(event);
  }
  /**
   * A row was expanded or collapsed for tree
   */
  onTreeAction(event) {
    const row = event.row;
    const rowIndex = this._rows.findIndex((r) => r[this.treeToRelation] === event.row[this.treeToRelation]);
    this.treeAction.emit({
      row,
      rowIndex
    });
  }
  ngOnDestroy() {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
  /**
   * listen for changes to input bindings of all DataTableColumnDirective and
   * trigger the columnTemplates.changes observable to emit
   */
  listenForColumnInputChanges() {
    this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(() => {
      if (this.columnTemplates) {
        this.columnTemplates.notifyOnChanges();
      }
    }));
  }
  sortInternalRows() {
    this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
  }
};
_DatatableComponent.ɵfac = function DatatableComponent_Factory(t) {
  return new (t || _DatatableComponent)(ɵɵdirectiveInject(ScrollbarHelper, 4), ɵɵdirectiveInject(DimensionsHelper, 4), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(ColumnChangesService), ɵɵdirectiveInject("configuration", 8));
};
_DatatableComponent.ɵcmp = ɵɵdefineComponent({
  type: _DatatableComponent,
  selectors: [["ngx-datatable"]],
  contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DatatableRowDetailDirective, 5);
      ɵɵcontentQuery(dirIndex, DatatableGroupHeaderDirective, 5);
      ɵɵcontentQuery(dirIndex, DatatableFooterDirective, 5);
      ɵɵcontentQuery(dirIndex, DataTableColumnDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rowDetail = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.groupHeader = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.columnTemplates = _t);
    }
  },
  viewQuery: function DatatableComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(DataTableBodyComponent, 5);
      ɵɵviewQuery(DataTableHeaderComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.bodyComponent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerComponent = _t.first);
    }
  },
  hostAttrs: [1, "ngx-datatable"],
  hostVars: 22,
  hostBindings: function DatatableComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("resize", function DatatableComponent_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, false, ɵɵresolveWindow);
    }
    if (rf & 2) {
      ɵɵclassProp("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
    }
  },
  inputs: {
    targetMarkerTemplate: "targetMarkerTemplate",
    rows: "rows",
    groupRowsBy: "groupRowsBy",
    groupedRows: "groupedRows",
    columns: "columns",
    selected: "selected",
    scrollbarV: "scrollbarV",
    scrollbarVDynamic: "scrollbarVDynamic",
    scrollbarH: "scrollbarH",
    rowHeight: "rowHeight",
    columnMode: "columnMode",
    headerHeight: "headerHeight",
    footerHeight: "footerHeight",
    externalPaging: "externalPaging",
    externalSorting: "externalSorting",
    limit: "limit",
    count: "count",
    offset: "offset",
    loadingIndicator: "loadingIndicator",
    ghostLoadingIndicator: "ghostLoadingIndicator",
    selectionType: "selectionType",
    reorderable: "reorderable",
    swapColumns: "swapColumns",
    sortType: "sortType",
    sorts: "sorts",
    cssClasses: "cssClasses",
    messages: "messages",
    rowClass: "rowClass",
    selectCheck: "selectCheck",
    displayCheck: "displayCheck",
    groupExpansionDefault: "groupExpansionDefault",
    trackByProp: "trackByProp",
    selectAllRowsOnPage: "selectAllRowsOnPage",
    virtualization: "virtualization",
    treeFromRelation: "treeFromRelation",
    treeToRelation: "treeToRelation",
    summaryRow: "summaryRow",
    summaryHeight: "summaryHeight",
    summaryPosition: "summaryPosition",
    disableRowCheck: "disableRowCheck",
    rowDraggable: "rowDraggable",
    rowIdentity: "rowIdentity"
  },
  outputs: {
    scroll: "scroll",
    activate: "activate",
    select: "select",
    sort: "sort",
    page: "page",
    reorder: "reorder",
    resize: "resize",
    tableContextmenu: "tableContextmenu",
    treeAction: "treeAction",
    rowDragEvents: "rowDragEvents"
  },
  ngContentSelectors: _c7,
  decls: 7,
  vars: 38,
  consts: [["role", "table", "visibilityObserver", "", 3, "visible"], ["role", "rowgroup", 3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "resizing", "reorder", "select", "columnContextmenu", 4, "ngIf"], ["tabindex", "0", "role", "rowgroup", 3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "ghostLoadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "disableRowCheck", "rowDraggable", "rowDragEvents", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], ["role", "rowgroup", 3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "resizing", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]],
  template: function DatatableComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c6);
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("visible", function DatatableComponent_Template_div_visible_0_listener() {
        return ctx.recalculate();
      });
      ɵɵtemplate(1, DatatableComponent_datatable_header_1_Template, 2, 17, "datatable-header", 1);
      ɵɵelementStart(2, "datatable-body", 2);
      ɵɵlistener("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) {
        return ctx.onBodyPage($event);
      })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) {
        return ctx.activate.emit($event);
      })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) {
        return ctx.onRowContextmenu($event);
      })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) {
        return ctx.onBodySelect($event);
      })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) {
        return ctx.onBodyScroll($event);
      })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) {
        return ctx.onTreeAction($event);
      });
      ɵɵpipe(3, "async");
      ɵɵprojection(4, 0, ["ngProjectAs", "[loading-indicator]", 5, ["", "loading-indicator", ""]]);
      ɵɵprojection(5, 1, ["ngProjectAs", "[empty-content]", 5, ["", "empty-content", ""]]);
      ɵɵelementEnd();
      ɵɵtemplate(6, DatatableComponent_datatable_footer_6_Template, 1, 12, "datatable-footer", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.headerHeight);
      ɵɵadvance();
      ɵɵproperty("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("ghostLoadingIndicator", ctx.ghostLoadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", ɵɵpipeBind1(3, 36, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition)("disableRowCheck", ctx.disableRowCheck)("rowDraggable", ctx.rowDraggable)("rowDragEvents", ctx.rowDragEvents);
      ɵɵadvance(4);
      ɵɵproperty("ngIf", ctx.footerHeight);
    }
  },
  dependencies: [NgIf, VisibilityDirective, DataTableHeaderComponent, DataTableBodyComponent, DataTableFooterComponent, AsyncPipe],
  styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translateZ(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable *:before,.ngx-datatable *:after{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-header-inner{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block;overflow:hidden}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var DatatableComponent = _DatatableComponent;
__decorate([throttleable(5)], DatatableComponent.prototype, "onWindowResize", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatatableComponent, [{
    type: Component,
    args: [{
      selector: "ngx-datatable",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ngx-datatable"
      },
      template: '<div role="table" visibilityObserver (visible)="recalculate()">\n  <datatable-header\n    role="rowgroup"\n    *ngIf="headerHeight"\n    [sorts]="sorts"\n    [sortType]="sortType"\n    [scrollbarH]="scrollbarH"\n    [innerWidth]="_innerWidth"\n    [offsetX]="_offsetX | async"\n    [dealsWithGroup]="groupedRows !== undefined"\n    [columns]="_internalColumns"\n    [headerHeight]="headerHeight"\n    [reorderable]="reorderable"\n    [targetMarkerTemplate]="targetMarkerTemplate"\n    [sortAscendingIcon]="cssClasses.sortAscending"\n    [sortDescendingIcon]="cssClasses.sortDescending"\n    [sortUnsetIcon]="cssClasses.sortUnset"\n    [allRowsSelected]="allRowsSelected"\n    [selectionType]="selectionType"\n    (sort)="onColumnSort($event)"\n    (resize)="onColumnResize($event)"\n    (resizing)="onColumnResizing($event)"\n    (reorder)="onColumnReorder($event)"\n    (select)="onHeaderSelect($event)"\n    (columnContextmenu)="onColumnContextmenu($event)"\n  >\n  </datatable-header>\n  <datatable-body\n    tabindex="0"\n    role="rowgroup"\n    [groupRowsBy]="groupRowsBy"\n    [groupedRows]="groupedRows"\n    [rows]="_internalRows"\n    [groupExpansionDefault]="groupExpansionDefault"\n    [scrollbarV]="scrollbarV"\n    [scrollbarH]="scrollbarH"\n    [virtualization]="virtualization"\n    [loadingIndicator]="loadingIndicator"\n    [ghostLoadingIndicator]="ghostLoadingIndicator"\n    [externalPaging]="externalPaging"\n    [rowHeight]="rowHeight"\n    [rowCount]="rowCount"\n    [offset]="offset"\n    [trackByProp]="trackByProp"\n    [columns]="_internalColumns"\n    [pageSize]="pageSize"\n    [offsetX]="_offsetX | async"\n    [rowDetail]="rowDetail"\n    [groupHeader]="groupHeader"\n    [selected]="selected"\n    [innerWidth]="_innerWidth"\n    [bodyHeight]="bodyHeight"\n    [selectionType]="selectionType"\n    [emptyMessage]="messages.emptyMessage"\n    [rowIdentity]="rowIdentity"\n    [rowClass]="rowClass"\n    [selectCheck]="selectCheck"\n    [displayCheck]="displayCheck"\n    [summaryRow]="summaryRow"\n    [summaryHeight]="summaryHeight"\n    [summaryPosition]="summaryPosition"\n    (page)="onBodyPage($event)"\n    (activate)="activate.emit($event)"\n    (rowContextmenu)="onRowContextmenu($event)"\n    (select)="onBodySelect($event)"\n    (scroll)="onBodyScroll($event)"\n    (treeAction)="onTreeAction($event)"\n    [disableRowCheck]="disableRowCheck"\n    [rowDraggable]="rowDraggable"\n    [rowDragEvents]="rowDragEvents"\n  >\n    <ng-content select="[loading-indicator]" ngProjectAs="[loading-indicator]"></ng-content>\n    <ng-content select="[empty-content]" ngProjectAs="[empty-content]"></ng-content>\n  </datatable-body>\n  <datatable-footer\n    *ngIf="footerHeight"\n    [rowCount]="rowCount"\n    [pageSize]="pageSize"\n    [offset]="offset"\n    [footerHeight]="footerHeight"\n    [footerTemplate]="footer"\n    [totalMessage]="messages.totalMessage"\n    [pagerLeftArrowIcon]="cssClasses.pagerLeftArrow"\n    [pagerRightArrowIcon]="cssClasses.pagerRightArrow"\n    [pagerPreviousIcon]="cssClasses.pagerPrevious"\n    [selectedCount]="selected.length"\n    [selectedMessage]="!!selectionType && messages.selectedMessage"\n    [pagerNextIcon]="cssClasses.pagerNext"\n    (page)="onFooterPage($event)"\n  >\n  </datatable-footer>\n</div>\n',
      styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translateZ(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable *:before,.ngx-datatable *:after{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-header-inner{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block;overflow:hidden}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}\n"]
    }]
  }], () => [{
    type: ScrollbarHelper,
    decorators: [{
      type: SkipSelf
    }]
  }, {
    type: DimensionsHelper,
    decorators: [{
      type: SkipSelf
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: KeyValueDiffers
  }, {
    type: ColumnChangesService
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: ["configuration"]
    }]
  }], {
    targetMarkerTemplate: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    groupRowsBy: [{
      type: Input
    }],
    groupedRows: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    scrollbarV: [{
      type: Input
    }],
    scrollbarVDynamic: [{
      type: Input
    }],
    scrollbarH: [{
      type: Input
    }],
    rowHeight: [{
      type: Input
    }],
    columnMode: [{
      type: Input
    }],
    headerHeight: [{
      type: Input
    }],
    footerHeight: [{
      type: Input
    }],
    externalPaging: [{
      type: Input
    }],
    externalSorting: [{
      type: Input
    }],
    limit: [{
      type: Input
    }],
    count: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    loadingIndicator: [{
      type: Input
    }],
    ghostLoadingIndicator: [{
      type: Input
    }],
    selectionType: [{
      type: Input
    }],
    reorderable: [{
      type: Input
    }],
    swapColumns: [{
      type: Input
    }],
    sortType: [{
      type: Input
    }],
    sorts: [{
      type: Input
    }],
    cssClasses: [{
      type: Input
    }],
    messages: [{
      type: Input
    }],
    rowClass: [{
      type: Input
    }],
    selectCheck: [{
      type: Input
    }],
    displayCheck: [{
      type: Input
    }],
    groupExpansionDefault: [{
      type: Input
    }],
    trackByProp: [{
      type: Input
    }],
    selectAllRowsOnPage: [{
      type: Input
    }],
    virtualization: [{
      type: Input
    }],
    treeFromRelation: [{
      type: Input
    }],
    treeToRelation: [{
      type: Input
    }],
    summaryRow: [{
      type: Input
    }],
    summaryHeight: [{
      type: Input
    }],
    summaryPosition: [{
      type: Input
    }],
    disableRowCheck: [{
      type: Input
    }],
    rowDraggable: [{
      type: Input
    }],
    scroll: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    select: [{
      type: Output
    }],
    sort: [{
      type: Output
    }],
    page: [{
      type: Output
    }],
    reorder: [{
      type: Output
    }],
    resize: [{
      type: Output
    }],
    tableContextmenu: [{
      type: Output
    }],
    treeAction: [{
      type: Output
    }],
    rowDragEvents: [{
      type: Output
    }],
    isFixedHeader: [{
      type: HostBinding,
      args: ["class.fixed-header"]
    }],
    isFixedRow: [{
      type: HostBinding,
      args: ["class.fixed-row"]
    }],
    isVertScroll: [{
      type: HostBinding,
      args: ["class.scroll-vertical"]
    }],
    isVirtualized: [{
      type: HostBinding,
      args: ["class.virtualized"]
    }],
    isHorScroll: [{
      type: HostBinding,
      args: ["class.scroll-horz"]
    }],
    isSelectable: [{
      type: HostBinding,
      args: ["class.selectable"]
    }],
    isCheckboxSelection: [{
      type: HostBinding,
      args: ["class.checkbox-selection"]
    }],
    isCellSelection: [{
      type: HostBinding,
      args: ["class.cell-selection"]
    }],
    isSingleSelection: [{
      type: HostBinding,
      args: ["class.single-selection"]
    }],
    isMultiSelection: [{
      type: HostBinding,
      args: ["class.multi-selection"]
    }],
    isMultiClickSelection: [{
      type: HostBinding,
      args: ["class.multi-click-selection"]
    }],
    columnTemplates: [{
      type: ContentChildren,
      args: [DataTableColumnDirective]
    }],
    rowDetail: [{
      type: ContentChild,
      args: [DatatableRowDetailDirective]
    }],
    groupHeader: [{
      type: ContentChild,
      args: [DatatableGroupHeaderDirective]
    }],
    footer: [{
      type: ContentChild,
      args: [DatatableFooterDirective]
    }],
    bodyComponent: [{
      type: ViewChild,
      args: [DataTableBodyComponent]
    }],
    headerComponent: [{
      type: ViewChild,
      args: [DataTableHeaderComponent]
    }],
    rowIdentity: [{
      type: Input
    }],
    onWindowResize: [{
      type: HostListener,
      args: ["window:resize"]
    }]
  });
})();
var _DisableRowDirective = class _DisableRowDirective {
  set disabled(val) {
    this._disabled = val;
    if (val) {
      this.disableAllElements();
    }
  }
  get disabled() {
    return this._disabled;
  }
  constructor(element) {
    this.element = element;
    this._disabled = false;
  }
  disableAllElements() {
    const el = this.element?.nativeElement;
    if (!el) {
      return;
    }
    Array.from(el.querySelectorAll("*")).forEach((child) => {
      child?.setAttribute("disabled", "");
    });
  }
};
_DisableRowDirective.ɵfac = function DisableRowDirective_Factory(t) {
  return new (t || _DisableRowDirective)(ɵɵdirectiveInject(ElementRef));
};
_DisableRowDirective.ɵdir = ɵɵdefineDirective({
  type: _DisableRowDirective,
  selectors: [["", "disable-row", ""]],
  inputs: {
    disabled: "disabled"
  }
});
var DisableRowDirective = _DisableRowDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisableRowDirective, [{
    type: Directive,
    args: [{
      selector: "[disable-row]"
    }]
  }], () => [{
    type: ElementRef
  }], {
    disabled: [{
      type: Input
    }]
  });
})();
var _NgxDatatableModule = class _NgxDatatableModule {
  /**
   * Configure global configuration via INgxDatatableConfig
   * @param configuration
   */
  static forRoot(configuration) {
    return {
      ngModule: _NgxDatatableModule,
      providers: [{
        provide: "configuration",
        useValue: configuration
      }]
    };
  }
};
_NgxDatatableModule.ɵfac = function NgxDatatableModule_Factory(t) {
  return new (t || _NgxDatatableModule)();
};
_NgxDatatableModule.ɵmod = ɵɵdefineNgModule({
  type: _NgxDatatableModule,
  declarations: [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnGhostCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent, DataTableGhostLoaderComponent, DisableRowDirective],
  imports: [CommonModule],
  exports: [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnGhostCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective, DisableRowDirective]
});
_NgxDatatableModule.ɵinj = ɵɵdefineInjector({
  providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
  imports: [CommonModule]
});
var NgxDatatableModule = _NgxDatatableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDatatableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
      declarations: [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnGhostCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent, DataTableGhostLoaderComponent, DisableRowDirective],
      exports: [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnGhostCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective, DisableRowDirective]
    }]
  }], null, null);
})();
var ClickType;
(function(ClickType2) {
  ClickType2["single"] = "single";
  ClickType2["double"] = "double";
})(ClickType || (ClickType = {}));
if (typeof document !== "undefined" && !document.elementsFromPoint) {
  document.elementsFromPoint = elementsFromPoint;
}
function elementsFromPoint(x, y) {
  const elements = [];
  const previousPointerEvents = [];
  let current;
  let i;
  let d;
  while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
    elements.push(current);
    previousPointerEvents.push({
      value: current.style.getPropertyValue("pointer-events"),
      priority: current.style.getPropertyPriority("pointer-events")
    });
    current.style.setProperty("pointer-events", "none", "important");
  }
  for (i = previousPointerEvents.length; d = previousPointerEvents[--i]; ) {
    elements[i].style.setProperty("pointer-events", d.value ? d.value : "", d.priority);
  }
  return elements;
}
export {
  ClickType,
  ColumnChangesService,
  ColumnMode,
  ContextmenuType,
  DataTableBodyCellComponent,
  DataTableBodyComponent,
  DataTableBodyRowComponent,
  DataTableColumnCellDirective,
  DataTableColumnCellTreeToggle,
  DataTableColumnDirective,
  DataTableColumnGhostCellDirective,
  DataTableColumnHeaderDirective,
  DataTableFooterComponent,
  DataTableFooterTemplateDirective,
  DataTableHeaderCellComponent,
  DataTableHeaderComponent,
  DataTablePagerComponent,
  DataTableRowWrapperComponent,
  DataTableSelectionComponent,
  DataTableSummaryRowComponent,
  DatatableComponent,
  DatatableFooterDirective,
  DatatableGroupHeaderDirective,
  DatatableGroupHeaderTemplateDirective,
  DatatableRowDetailDirective,
  DatatableRowDetailTemplateDirective,
  DimensionsHelper,
  DisableRowDirective,
  DraggableDirective,
  Keys,
  LongPressDirective,
  NgxDatatableModule,
  OrderableDirective,
  ProgressBarComponent,
  ResizeableDirective,
  RowHeightCache,
  ScrollbarHelper,
  ScrollerComponent,
  SelectionType,
  SortDirection,
  SortType,
  VisibilityDirective,
  adjustColumnWidths,
  camelCase,
  columnGroupWidths,
  columnTotalWidth,
  columnsByPin,
  columnsByPinArr,
  columnsTotalWidth,
  deCamelCase,
  deepValueGetter,
  elementsFromPoint,
  emptyStringGetter,
  forceFillColumnWidths,
  getTotalFlexGrow,
  getVendorPrefixedName,
  getterForProp,
  groupRowsByParents,
  id,
  isNullOrUndefined,
  nextSortDir,
  numericIndexGetter,
  optionalGetterForProp,
  orderByComparator,
  selectRows,
  selectRowsBetween,
  setColumnDefaults,
  shallowValueGetter,
  sortRows,
  throttle,
  throttleable,
  translateTemplates,
  translateXY
};
//# sourceMappingURL=@siemens_ngx-datatable.js.map
