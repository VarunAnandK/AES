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
      { Label: "CRM", Icon: "fa fa-briefcase fa-2x", RouterLink: "CRM/Dashboard", Visiable: true },
      { Label: "Inventory", Icon: "fa fa-briefcase fa-2x", RouterLink: "Inventory/Dashboard", Visiable: true },
      { Label: "Sales", Icon: "fa fa-briefcase fa-2x", RouterLink: "Sales/Dashboard", Visiable: true }
    ]
    this.Menu = new Array<MenuModel>();
    this.Menu = [
      { Module: "Admin", Label: "Dashboard", RouterLink: "Admin/Dashboard", Icon: "fas fa-tachometer-alt", Visiable: true },
      { Module: "Admin", Label: "Company", RouterLink: "Admin/Company/1", Icon: "fa fa-building", Visiable: true },
      {
        Module: "Admin", Label: "Setup", RouterLink: "", Icon: "fa fa-cogs", Visiable: true, ChildId: "CRMSetup", ChildMenu:
          [
            { Module: "Admin", Label: "Currency", RouterLink: "Admin/CurrencyList", Icon: "fas fa-tachometer-alt", Visiable: true },
            { Module: "Admin", Label: "Country", RouterLink: "Admin/CountryList", Icon: "fas fa-tachometer-alt", Visiable: true },
            { Module: "Admin", Label: "State", RouterLink: "Admin/StateList", Icon: "fas fa-tachometer-alt", Visiable: true },
            { Module: "Admin", Label: "City", RouterLink: "Admin/CityList", Icon: "fas fa-tachometer-alt", Visiable: true },
            { Module: "Admin", Label: "User", RouterLink: "Admin/UserList", Icon: "fa fa-user-o", Visiable: true },
            { Module: "Admin", Label: "Menu", RouterLink: "Admin/MenuList", Icon: "fas fa-tachometer-alt", Visiable: true },
            { Module: "Admin", Label: "Tax", RouterLink: "Admin/TaxList", Icon: "fas fa-tachometer-alt", Visiable: true },
            { Module: "Admin", Label: "Terms And Conditions", RouterLink: "Admin/TermsAndConditionList", Icon: "fas fa-tachometer-alt", Visiable: true }
          ]
      },
      { Module: "CRM", Label: "Dashboard", RouterLink: "CRM/Dashboard", Icon: "fas fa-tachometer-alt", Visiable: true },
      { Module: "CRM", Label: "Calandar", RouterLink: "CRM/Calandar", Icon: "fa fa-calendar-plus-o", Visiable: true },
      { Module: "CRM", Label: "Lead", RouterLink: "CRM/LeadList", Icon: "fa fa-trophy", Visiable: true },
      { Module: "CRM", Label: "Opportunity", RouterLink: "CRM/OpportunityList", Icon: "fas fa-tachometer-alt", Visiable: true },
      { Module: "CRM", Label: "Customer", RouterLink: "CRM/CustomerList", Icon: "fa fa-user", Visiable: true },
      {
        Module: "CRM", Label: "Setup", RouterLink: "", Icon: "fa fa-cogs", Visiable: true, ChildId: "CRMSetup", ChildMenu:
          [
            { Module: "CRM", Label: "Activity Type", RouterLink: "CRM/ActivityTypeList", Icon: "fas fa-tachometer-alt", Visiable: true },
            { Module: "CRM", Label: "Stage", RouterLink: "CRM/StageList", Icon: "fas fa-tachometer-alt", Visiable: true },
            { Module: "CRM", Label: "Lost Reason", RouterLink: "CRM/LostReasonList", Icon: "fas fa-tachometer-alt", Visiable: true },
            { Module: "CRM", Label: "Tag", RouterLink: "CRM/TagList", Icon: "fas fa-tachometer-alt", Visiable: true },
            { Module: "CRM", Label: "Team", RouterLink: "CRM/TeamList", Icon: "fas fa-tachometer-alt", Visiable: true },
            { Module: "CRM", Label: "Payment Term", RouterLink: "CRM/PaymentTermList", Icon: "fas fa-tachometer-alt", Visiable: true },
          ]
      },
      { Module: "Inventory", Label: "Dashboard", RouterLink: "Inventory/Dashboard", Icon: "fas fa-tachometer-alt", Visiable: true },
      { Module: "Inventory", Label: "Product", RouterLink: "Inventory/ProductList", Icon: "fa fa-shopping-cart", Visiable: true },
      {
        Module: "Inventory", Label: "Setup", RouterLink: "", Icon: "fa fa-cogs", Visiable: true, ChildId: "InventorySetup", ChildMenu:
          [
            { Module: "Inventory", Label: "Unit of Measurment", RouterLink: "Inventory/UnitofmeasurmentList", Icon: "fas fa-tachometer-alt", Visiable: true },
            { Module: "Inventory", Label: "Product Category", RouterLink: "Inventory/ProductCategoryList", Icon: "fas fa-tachometer-alt", Visiable: true },
            { Module: "Inventory", Label: "Payment Mode", RouterLink: "Inventory/PaymentModeList", Icon: "fas fa-tachometer-alt", Visiable: true },
            { Module: "Inventory", Label: "Delivery Mode", RouterLink: "Inventory/DeliveryModeList", Icon: "fas fa-tachometer-alt", Visiable: true },
            // { Module: "Inventory", Label: "Terms And Conditions", RouterLink: "Inventory/TermsAndConditionList", Icon: "fas fa-tachometer-alt", Visiable: true }
          ]
      },
      { Module: "Sales", Label: "Dashboard", RouterLink: "Sales/Dashboard", Icon: "fas fa-tachometer-alt", Visiable: true },
      { Module: "Sales", Label: "Quotation", RouterLink: "Sales/QuotationList", Icon: "fa fa-file", Visiable: true },
      { Module: "Sales", Label: "Proforma Invoice", RouterLink: "Sales/ProformaInvoiceList", Icon: "fa fa-file", Visiable: true },
      { Module: "Sales", Label: "Invoice", RouterLink: "Sales/InvoiceList", Icon: "fa fa-file", Visiable: true },
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
