import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonHelper } from 'src/Helper/CommonHelper';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Module: ModuleModel[];
  Menu: Array<MenuModel>;
  constructor(private router: Router, public helper: CommonHelper) { }

  ngOnInit() {
    $(function () {
      var sidebarNav = $(".sidebar-nav");
      if (sidebarNav.length > 0) {
        $('#sidebarNav').metisMenu();
      }
      $('.mobile-toggle').on('click', function () {
        $('.light-sidebar').toggleClass('sidebar-toggled');
      });

      $('.sidebar-toggle').on('click', function () {
        $('.light-sidebar').toggleClass('sidebar-mini');
        $('.app-navbar').toggleClass('expand');
      });
    });
    this.LeftMenu();
  }

  LeftMenu()
  {
    this.Module = new Array<ModuleModel>();
    this.Module = [
      { Label: "Admin", Icon: "fa fa-briefcase fa-2x", RouterLink: "Admin/Dashboard", Visiable: true },
    ]
    this.Menu = new Array<MenuModel>();
    this.Menu = [
      { Module: "Admin", Label: "Dashboard", RouterLink: "Admin/Dashboard", Icon: "fas fa-tachometer-alt", Visiable: true },
      { Module: "Admin", Label: "User", RouterLink: "Admin/UserList", Icon: "fas fa-tachometer-alt", Visiable: true },
    ];
    this.Menu = this.Menu.filter(e => e.Module == this.helper.CurrentModule);
  }

  SelectModule(Module: ModuleModel) {
    this.router.navigate([Module.RouterLink]);
  }

  insertSpaces(string) {
    string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
    string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    return string;
  }

}


export class ModuleModel {
  Label: string;
  RouterLink: string;
  Icon: string;
  Visiable: boolean;
}

export class MenuModel {
  Label: string;
  RouterLink: string;
  Icon: string;
  Visiable: boolean;
  ChildId?: string;
  ChildMenu?: Array<MenuModel>;
  Module: string;
}
