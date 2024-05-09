import {
  CdkStepper,
  CdkStepperModule,
  STEPPER_GLOBAL_OPTIONS
} from "./chunk-Y7UQFEP2.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-UJIIHPJX.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgTemplateOutlet
} from "./chunk-XG6O2LRS.js";
import {
  Component,
  NgModule,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-JMTS7RQO.js";
import "./chunk-YRN7ZVOS.js";
import "./chunk-LJ4UR6LK.js";
import "./chunk-JJYN5SQZ.js";
import "./chunk-ECDNAN6X.js";
import "./chunk-6DXHB35K.js";

// node_modules/angular-ng-stepper/fesm2020/angular-ng-stepper.mjs
var _c0 = (a0, a1, a2) => ({
  active: a0,
  completed: a1,
  done: a2
});
function NgStepperComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 6);
    ɵɵlistener("click", function NgStepperComponent_ng_container_3_Template_li_click_1_listener() {
      const restoredCtx = ɵɵrestoreView(_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.selectedIndex = i_r3);
    });
    ɵɵelementContainerStart(2, 7);
    ɵɵprojection(3);
    ɵɵprojection(4, 1);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction3(2, _c0, ctx_r0.selectedIndex === i_r3, step_r2.completed && i_r3 < ctx_r0.selectedIndex, step_r2.state === "done" && i_r3 === ctx_r0.selectedIndex));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", step_r2.stepLabel.template);
  }
}
function NgStepperComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelementContainer(1, 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("active", ctx_r1.selectedIndex === i_r7);
    ɵɵproperty("@stepTransition", ctx_r1._getAnimationDirection(i_r7));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", step_r6.content);
  }
}
var _c1 = [[["", 8, "step-bullet"]], [["", 8, "step-title"]]];
var _c2 = [".step-bullet", ".step-title"];
var NgStepperComponent = class extends CdkStepper {
  ngOnInit() {
  }
};
NgStepperComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵNgStepperComponent_BaseFactory;
  return function NgStepperComponent_Factory(t) {
    return (ɵNgStepperComponent_BaseFactory || (ɵNgStepperComponent_BaseFactory = ɵɵgetInheritedFactory(NgStepperComponent)))(t || NgStepperComponent);
  };
})();
NgStepperComponent.ɵcmp = ɵɵdefineComponent({
  type: NgStepperComponent,
  selectors: [["ng-stepper"]],
  features: [ɵɵProvidersFeature([{
    provide: CdkStepper,
    useExisting: NgStepperComponent
  }, {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: {
      displayDefaultIndicatorType: false
    }
  }]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c2,
  decls: 6,
  vars: 2,
  consts: [[1, "stepper"], [1, "stepper-header"], [1, "steps"], [4, "ngFor", "ngForOf"], [1, "stepper-body"], ["class", "content", 3, "active", 4, "ngFor", "ngForOf"], [1, "step", 3, "ngClass", "click"], [3, "ngTemplateOutlet"], [1, "content"]],
  template: function NgStepperComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "ol", 2);
      ɵɵtemplate(3, NgStepperComponent_ng_container_3_Template, 5, 6, "ng-container", 3);
      ɵɵelementEnd()();
      ɵɵelementStart(4, "div", 4);
      ɵɵtemplate(5, NgStepperComponent_div_5_Template, 2, 4, "div", 5);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(3);
      ɵɵproperty("ngForOf", ctx.steps);
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx._steps);
    }
  },
  dependencies: [NgClass, NgForOf, NgTemplateOutlet],
  styles: ['[_nghost-%COMP%]{display:block;overflow:hidden}.stepper-header[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]{width:100%;list-style:none;display:inline-flex;align-items:center;margin:0 auto}.stepper-header[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{text-align:center;font-size:1em}.stepper-header[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]     .step .step-bullet{position:relative;display:inline-flex;justify-content:center;align-items:center;height:40px;width:40px;background-color:#b3babe;border-radius:50%;color:#fff;font-size:1.3rem;text-align:center;text-decoration:none;cursor:pointer}.stepper-header[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]     .step .step-title{position:absolute;right:0;bottom:-5px;left:0;margin:auto 0;height:0}.stepper-header[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]     .step.active .step-bullet{background-color:#306bff}.stepper-header[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]     .step.completed .step-bullet{background-color:#32e67f}.stepper-header[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]     .step.done .step-bullet{background-color:#32e67f}.stepper-body[_ngcontent-%COMP%]{margin:25px auto;padding:1rem}.stepper-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:not(.active){height:0;overflow:hidden}.step[_ngcontent-%COMP%]{position:relative;width:33.33%}.step[_ngcontent-%COMP%]:after{content:"";position:absolute;width:100%;height:3px;background-color:#b3babe;top:50%;left:-50%;z-index:-1}.step[_ngcontent-%COMP%]:first-child:after{content:none}.step.completed[_ngcontent-%COMP%] + .step[_ngcontent-%COMP%]:after{background-color:#32e67f}'],
  data: {
    animation: [trigger("stepTransition", [state("previous", style({
      transform: "translateX(-100%)",
      opacity: 0
    })), state("current", style({
      transform: "translateX(0)",
      opacity: 1
    })), state("next", style({
      transform: "translateX(100%)",
      opacity: 0
    })), transition(":enter", animate(0)), transition("previous => current", animate("500ms cubic-bezier(0.35, 0, 0.25, 1)")), transition("next => current", animate("500ms cubic-bezier(0.35, 0, 0.25, 1)"))])]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgStepperComponent, [{
    type: Component,
    args: [{
      selector: "ng-stepper",
      providers: [{
        provide: CdkStepper,
        useExisting: NgStepperComponent
      }, {
        provide: STEPPER_GLOBAL_OPTIONS,
        useValue: {
          displayDefaultIndicatorType: false
        }
      }],
      animations: [trigger("stepTransition", [state("previous", style({
        transform: "translateX(-100%)",
        opacity: 0
      })), state("current", style({
        transform: "translateX(0)",
        opacity: 1
      })), state("next", style({
        transform: "translateX(100%)",
        opacity: 0
      })), transition(":enter", animate(0)), transition("previous => current", animate("500ms cubic-bezier(0.35, 0, 0.25, 1)")), transition("next => current", animate("500ms cubic-bezier(0.35, 0, 0.25, 1)"))])],
      template: `<div class="stepper">
  <div class="stepper-header">
    <ol class="steps">
      <ng-container *ngFor="let step of steps; let i = index;">
        <li class="step" (click)="selectedIndex = i"
            [ngClass]="{
                active: selectedIndex === i,
                completed: step.completed && i < selectedIndex,
                done: step.state === 'done' && i === selectedIndex
                }">
          <ng-container [ngTemplateOutlet]="step.stepLabel.template">
            <ng-content select=".step-bullet"></ng-content>
            <ng-content select=".step-title"></ng-content>
          </ng-container>
        </li>
      </ng-container>
    </ol>
  </div>
  <div class="stepper-body">
    <div class="content"
         *ngFor="let step of _steps; let i = index"
         [class.active]="selectedIndex === i"
         [@stepTransition]="_getAnimationDirection(i)">
      <ng-container [ngTemplateOutlet]="step.content"></ng-container>
    </div>
  </div>
</div>

`,
      styles: [':host{display:block;overflow:hidden}.stepper-header .steps{width:100%;list-style:none;display:inline-flex;align-items:center;margin:0 auto}.stepper-header .steps .step{text-align:center;font-size:1em}.stepper-header .steps ::ng-deep .step .step-bullet{position:relative;display:inline-flex;justify-content:center;align-items:center;height:40px;width:40px;background-color:#b3babe;border-radius:50%;color:#fff;font-size:1.3rem;text-align:center;text-decoration:none;cursor:pointer}.stepper-header .steps ::ng-deep .step .step-title{position:absolute;right:0;bottom:-5px;left:0;margin:auto 0;height:0}.stepper-header .steps ::ng-deep .step.active .step-bullet{background-color:#306bff}.stepper-header .steps ::ng-deep .step.completed .step-bullet{background-color:#32e67f}.stepper-header .steps ::ng-deep .step.done .step-bullet{background-color:#32e67f}.stepper-body{margin:25px auto;padding:1rem}.stepper-body .content:not(.active){height:0;overflow:hidden}.step{position:relative;width:33.33%}.step:after{content:"";position:absolute;width:100%;height:3px;background-color:#b3babe;top:50%;left:-50%;z-index:-1}.step:first-child:after{content:none}.step.completed+.step:after{background-color:#32e67f}\n']
    }]
  }], null, null);
})();
var NgStepperModule = class {
};
NgStepperModule.ɵfac = function NgStepperModule_Factory(t) {
  return new (t || NgStepperModule)();
};
NgStepperModule.ɵmod = ɵɵdefineNgModule({
  type: NgStepperModule,
  declarations: [NgStepperComponent],
  imports: [CommonModule, CdkStepperModule],
  exports: [NgStepperComponent]
});
NgStepperModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, CdkStepperModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgStepperModule, [{
    type: NgModule,
    args: [{
      declarations: [NgStepperComponent],
      imports: [CommonModule, CdkStepperModule],
      exports: [NgStepperComponent]
    }]
  }], null, null);
})();
export {
  NgStepperComponent,
  NgStepperModule
};
//# sourceMappingURL=angular-ng-stepper.js.map
