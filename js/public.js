/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
// $(function() {
// });
// (function ($) {
$(document).ready(function(){
    function initSearchBar() {
        $('#search-title').on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('active');
            $(this).find('i').toggleClass('down');
            $(this).parent().find('#search-content').slideToggle();
            
        });

        $('.title-style').on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('active');
            $(this).find('i').toggleClass('down');
            $(this).parent().find('.content-style').slideToggle();
            
        });
    }

    function initBtnSearch() {
        $('.btn-search').on('click', function(event) {
            event.preventDefault();
            $('#search-title').trigger('click');
            
        })
    }

    function initNavbarDropdown() {
        $('.navbar-item').on('mouseenter', function(event) {
            event.preventDefault();
            $(this).find('.dropdown-menu').slideToggle(100);
        });
        $('.navbar-item').on('mouseleave', function(event) {
            event.preventDefault();
            $(this).find('.dropdown-menu').slideToggle(100);
        });
    }

    function initButtonsTable() {
        $('.buttons-table').on('click', function(event) {
            event.preventDefault();
            if($(this).hasClass('buttons-colvis')) {
                $(this).toggleClass('active');
            }
        })
    }

    function init() {
        initSearchBar(); 
        initNavbarDropdown();
        initBtnSearch();
        // initButtonsTable();
    };

    init();

    // $('.select2-test').select2({
    //     placeholder: 'Select an option'
    // });
});

// })(jQuery)
