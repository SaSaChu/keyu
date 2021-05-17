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
        scrollCollapse: true,
        paging:   false,
        ordering: false,
        info:     false
    });

    table.buttons().container()
        .appendTo('.card-box .col-md-2:eq(0)');

    $(document).on('click', ".buttons-delete", function() {
        var rows = table.rows('.selected');
        rows.remove().draw();
    });

    $(document).on("click", "#datatable-buttons th.select-checkbox", function() {
        if ($("#datatable-buttons th.select-checkbox").hasClass("selected")) {
            table.rows().deselect();
            $("#datatable-buttons th.select-checkbox").removeClass("selected");
        } else {
            table.rows().select();
            $("#datatable-buttons th.select-checkbox").addClass("selected");
        }
    }).on("select deselect", function() {
        ("Some selection or deselection going on")
        if (table.rows({
                selected: true
            }).count() !== table.rows().count()) {
            $("#datatable-buttons th.select-checkbox").removeClass("selected");
        } else {
            $("#datatable-buttons th.select-checkbox").addClass("selected");
        }
    }); 

    // table 2
    
    var table2 = $('#datatable-buttons2').DataTable({
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
        scrollCollapse: true,
        paging:   false,
        ordering: false,
        info:     false
    });

    table2.buttons().container()
        .appendTo('.card-box .col-md-2:eq(0)');

    $(document).on('click', ".buttons-delete", function() {
        var rows = table2.rows('.selected');
        rows.remove().draw();
    });

    $(document).on("click", "#datatable-buttons2 th.select-checkbox", function() {
        if ($("#datatable-buttons2 th.select-checkbox").hasClass("selected")) {
            table2.rows().deselect();
            $("#datatable-buttons2 th.select-checkbox").removeClass("selected");
        } else {
            table2.rows().select();
            $("#datatable-buttons2 th.select-checkbox").addClass("selected");
        }
    }).on("select deselect", function() {
        ("Some selection or deselection going on")
        if (table2.rows({
                selected: true
            }).count() !== table2.rows().count()) {
            $("#datatable-buttons2 th.select-checkbox").removeClass("selected");
        } else {
            $("#datatable-buttons2 th.select-checkbox").addClass("selected");
        }
    });

    // table 3
    var table3 = $('#datatable-buttons3').DataTable({
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
        scrollCollapse: true,
        paging:   false,
        ordering: false,
        info:     false
    });

    table3.buttons().container()
        .appendTo('.card-box .col-md-2:eq(0)');

    $(document).on('click', ".buttons-delete", function() {
        var rows = table3.rows('.selected');
        rows.remove().draw();
    });

    $(document).on("click", "#datatable-buttons3 th.select-checkbox", function() {
        if ($("#datatable-buttons3 th.select-checkbox").hasClass("selected")) {
            table3.rows().deselect();
            $("#datatable-buttons3 th.select-checkbox").removeClass("selected");
        } else {
            table3.rows().select();
            $("#datatable-buttons3 th.select-checkbox").addClass("selected");
        }
    }).on("select deselect", function() {
        ("Some selection or deselection going on")
        if (table3.rows({
                selected: true
            }).count() !== table3.rows().count()) {
            $("#datatable-buttons3 th.select-checkbox").removeClass("selected");
        } else {
            $("#datatable-buttons3 th.select-checkbox").addClass("selected");
        }
    });

    // table 4
    var table4 = $('#datatable-buttons4').DataTable({
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
        scrollCollapse: true,
        paging:   false,
        ordering: false,
        info:     false
    });

    table4.buttons().container()
        .appendTo('.card-box .col-md-2:eq(0)');

    $(document).on('click', ".buttons-delete", function() {
        var rows = table4.rows('.selected');
        rows.remove().draw();
    });

    $(document).on("click", "#datatable-buttons4 th.select-checkbox", function() {
        if ($("#datatable-buttons4 th.select-checkbox").hasClass("selected")) {
            table4.rows().deselect();
            $("#datatable-buttons4 th.select-checkbox").removeClass("selected");
        } else {
            table4.rows().select();
            $("#datatable-buttons4 th.select-checkbox").addClass("selected");
        }
    }).on("select deselect", function() {
        ("Some selection or deselection going on")
        if (table4.rows({
                selected: true
            }).count() !== table4.rows().count()) {
            $("#datatable-buttons4 th.select-checkbox").removeClass("selected");
        } else {
            $("#datatable-buttons4 th.select-checkbox").addClass("selected");
        }
    });
} );