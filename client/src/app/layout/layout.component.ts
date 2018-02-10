import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {

      // Toggle Sidebar
      $('[data-toggle="sidebar"]').click(() => {
        event.preventDefault();
        $('.app').toggleClass('sidenav-toggled');
      });

      // Activate sidebar treeview toggle
      $('[data-toggle="treeview"]').click(() => {
        event.preventDefault();
        if (!$(this).parent().hasClass('is-expanded')) {
          $('.app-menu').find('[data-toggle="treeview"]').parent().removeClass('is-expanded');
        }
        $(this).parent().toggleClass('is-expanded');
      });

      // Set initial active toggle
      $('[data-toggle="treeview."].is-expanded').parent().toggleClass('is-expanded');
    }
}
