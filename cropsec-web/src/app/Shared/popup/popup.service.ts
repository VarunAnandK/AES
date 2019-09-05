import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
  Type,
  ChangeDetectorRef
} from "@angular/core";
import { PopupModule } from "./popup.module";
import { PopupComponent } from "./popup.component";
import { PopupConfig } from "./popup-config";
import { PopupInjector } from './popup-injector';
import { PopupRef } from './popup-ref';
declare var $: any;
@Injectable({
  providedIn: PopupModule
})
export class PopupService {
  popupComponentRef: ComponentRef<PopupComponent>;
  ModalId : string;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  appendDialogComponentToBody(config: PopupConfig) {
    const map = new WeakMap();
    map.set(PopupConfig, config);

    const popupRef = new PopupRef();
    map.set(PopupRef, popupRef);


    const sub = popupRef.afterClosed.subscribe(() => {
      debugger
      // close the dialog
      this.removeDialogComponentFromBody();
      sub.unsubscribe();
    });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    const componentRef = componentFactory.create(new PopupInjector(this.injector, map));
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.popupComponentRef = componentRef;

    this.popupComponentRef.instance.onClose.subscribe(() => {
      this.removeDialogComponentFromBody();
    });
    this.ModalId = config.Id;
    return popupRef;
  }
  private removeDialogComponentFromBody() {
    debugger
    $("#" + this.ModalId).modal("hide");
    this.appRef.detachView(this.popupComponentRef.hostView);
    this.popupComponentRef.changeDetectorRef.detectChanges();
    this.popupComponentRef.destroy();

  }
  public open(componentType: Type<any>, config: PopupConfig) {
    let element = this.appendDialogComponentToBody(config);
    this.popupComponentRef.instance.childComponentType = componentType;
    this.popupComponentRef.changeDetectorRef.detectChanges();
    $("#" + this.ModalId).modal("show");
    return element;
  }
}
