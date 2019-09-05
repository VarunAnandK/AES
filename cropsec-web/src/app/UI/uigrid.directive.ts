import {
  Directive,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef
} from "@angular/core";
import { CommonHelper } from "src/Helper/CommonHelper";
declare var $: any;

@Directive({
  selector: "[appUigrid]"
})
export class UigridDirective {
  @Output() UIClick: EventEmitter<any> = new EventEmitter();
  @Input() UIURL: string = "";
  @Input() UIPageSize: number = 10;
  @Input() UIColumns: any;
  EmitData: any;

  constructor(
    private el: ElementRef,
    private helper: CommonHelper,
    private cd: ChangeDetectorRef
  ) {
    var angularthis = this;
    $(document).ready(function() {
      $("#" + angularthis.el.nativeElement.id).kendoGrid({
        dataSource: {
          type: "json",
          transport: {
            read: {
              url: angularthis.helper.ApiURL + "/" + angularthis.UIURL,
              beforeSend: function(req) {
                req.setRequestHeader(
                  "Authorization",
                  angularthis.helper.GetCurentUser().api_token
                );
              }
            }
          },
          pageSize: angularthis.UIPageSize
        },
        sortable: true,
        pageable: {
          refresh: true,
          pageSizes: true,
          buttonCount: 5
        },
        columns: angularthis.UIColumns
      });
      $("#" + angularthis.el.nativeElement.id).on("click", ".clickable", e => {
        debugger;
        var grid = $("#" + angularthis.el.nativeElement.id).data("kendoGrid");
        var dataItem = grid.dataItem(e.currentTarget.closest("tr"));
        angularthis.Emit({
          data: JSON.parse(JSON.stringify(dataItem)),
          EventName: e.currentTarget.className.split("~")[0]
        });
      });
    });
  }

  Emit(data) {
    this.UIClick.emit(data);
  }
}
