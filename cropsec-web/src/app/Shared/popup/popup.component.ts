import {
  Component,
  Type,
  AfterViewInit,
  OnDestroy,
  ComponentRef,
  ViewChild,
  ComponentFactoryResolver,
  ChangeDetectorRef
} from "@angular/core";
import { PopupDirective } from "./popup.directive";
import { Subject } from "rxjs";
import { PopupRef } from "./popup-ref";
import { PopupConfig } from "./popup-config";

declare var $: any;

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.css"]
})
export class PopupComponent implements AfterViewInit {
  componentRef: ComponentRef<any>;
  childComponentType: Type<any>;

  @ViewChild(PopupDirective, { static: false }) PopupPoint: PopupDirective;

  private readonly _onClose = new Subject<any>();
  public onClose = this._onClose.asObservable();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    private popupRef: PopupRef,
    public config: PopupConfig
  ) {}

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
    var angularthis = this;
    $("#" + this.config.Id).on("hidden.bs.modal", function(e) {
      debugger
      if($("#" + angularthis.config.Id).length != 0)
      {
        angularthis.close();
      }
    });
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    this.popupRef.close();
  }

  onPopupClicked(evt: MouseEvent) {
   // this.popupRef.close();
   $("#" + this.config.Id).modal("hide");
  }

  loadChildComponent(componentType: Type<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentType
    );
    let viewContainerRef = this.PopupPoint.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  close() {
    this._onClose.next();
  }
}
