/*
Template Name: Lexa - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Datatables
*/



$(document).ready(function() {
    // $('#datatable').DataTable();

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        dom: "Bfrtip",
        
        buttons: [
            { extend: 'colvisRestore', className: 'buttons-table'},
            { extend: 'colvis', className: 'buttons-table', align: 'button-right'},
            
        ],
        language: {
            buttons: {
                colvisRestore: "全部顯示",
                colvis: "選取顯示",
            }
        },
        columnDefs: [ {
            orderable: false,
            className: 'select-checkbox',
            targets: 0,
            
        } ],
        select: {
            style: 'multi',
            selector: 'td:first-child',
        },

        order: [[ 1, 'asc' ]],
        searching: false,
        scrollX: true,
        paging:   false,
        ordering: false,
        info:     false
    });

    $(document).on("click", "th.select-checkbox", function() {
        if ($("th.select-checkbox").hasClass("selected")) {
            table.rows().deselect();
            $("th.select-checkbox").removeClass("selected");
        } else {
            table.rows().select();
            $("th.select-checkbox").addClass("selected");
        }
    }).on("select deselect", function() {
        ("Some selection or deselection going on")
        if (table.rows({
                selected: true
            }).count() !== table.rows().count()) {
            $("th.select-checkbox").removeClass("selected");
        } else {
            $("th.select-checkbox").addClass("selected");
        }
    });

    table.buttons().container()
        .appendTo('.card-box .col-md-2:eq(0)');
    
    

    // $(".dataTables_length select").addClass('form-select form-select-sm');


} );