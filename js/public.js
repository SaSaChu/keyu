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
        // $('#search-title').on('click', function (event) {
        //     event.preventDefault();
        //     $(this).toggleClass('active');
        //     $(this).find('i').toggleClass('down');
        //     $(this).parent().find('#search-content').slideToggle();
            
        // });

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

    function initContentStyle() {
        $('.content-style').toggle();
        $('.title-style').eq(0).click();
    }

    function initGetFileName() {
        $('input[type="file"]').on('change', function(event) {
            // event.preventDefault();
            let fullPath = $(this).val();
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
                
                $(this).parent().find('.file-name').text(filename);
            }
        })
    }

    function initTable() {
        // $("#page-results").hide(); 
        $(".btn-search").on('click', function(event) {
            // event.preventDefault();
            // $(".title-style").eq(0).click();
            // $("#page-results").show();
        })
    }

    function initAccordionAddBtn() {
        $('#btn-add').on('click', function(event){
            let html = `<div class="row">
            <div class="col-md-3">
                <div class="mb-3">
                    <label class="form-label w-100 text-start">廠牌</label>
                    <div class="d-flex">
                        <div class="col-md-12">
                            <input class="form-control" type="text" value="請輸入">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="mb-3">
                    <label class="form-label w-100 text-start">型號</label>
                    <div class="d-flex">
                        <div class="col-md-12">
                            <input class="form-control" type="text" value="請輸入" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="mb-3">
                    <label class="form-label w-100 text-start">尺寸</label>
                    <div class="d-flex">
                        <div class="col-md-12">
                            <input class="form-control" type="text" value="請輸入" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="mb-3">
                    <label class="form-label w-100 text-start">色彩</label>
                    <div class="d-flex">
                        <div class="col-md-12">
                            <input class="form-control" type="text" value="請輸入" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="mb-3">
                    <label class="form-label w-100 text-start">類型</label>
                    <div class="d-flex">
                        <div class="col-md-12">
                            <input class="form-control" type="text" value="請輸入" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="mb-3">
                    <label class="form-label w-100 text-start">租賃/購買</label>
                    <div class="d-flex">
                        <div class="col-md-12">
                            <input class="form-control" type="text" value="請輸入" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="mb-3">
                    <label class="form-label w-100 text-start">使用年限</label>
                    <div class="d-flex">
                        <div class="col-md-12">
                            <input class="form-control" type="text" value="請輸入">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="mb-3">
                    <label class="form-label w-100 text-start">服務廠商</label>
                    <div class="d-flex">
                        <div class="col-md-12">
                            <input class="form-control" type="text" value="請輸入">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3 text-start">
                    <label class="form-label text-start w-100">他牌機上碳粉餘量</label>
                    <div class="col-md-12 d-flex justify-content-between">
                        <div class="col-md-3">
                            <div class="suffix-box d-flex align-items-center" data-suffix="%">
                                <label class="form-label text-start mb-0 me-1">K:</label>
                                <input class="form-control " type="text" value="">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="suffix-box d-flex align-items-center" data-suffix="%">
                                <label class="form-label text-start mb-0 me-1">M:</label>
                                <input class="form-control " type="text" value="">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="suffix-box d-flex align-items-center" data-suffix="%">
                                <label class="form-label text-start mb-0 me-1">C:</label>
                                <input class="form-control " type="text" value="">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="suffix-box d-flex align-items-center" data-suffix="%">
                                <label class="form-label text-start mb-0 me-1">Y:</label>
                                <input class="form-control " type="text" value="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3 text-start">
                    <label class="form-label text-start w-100">他牌備用碳粉庫存</label>
                    <div class="col-md-12 d-flex justify-content-between">
                        <div class="col-md-3">
                            <div class="suffix-box d-flex align-items-center" data-suffix="支">
                                <label class="form-label text-start mb-0 me-1">K:</label>
                                <input class="form-control " type="text" value="">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="suffix-box d-flex align-items-center" data-suffix="支">
                                <label class="form-label text-start mb-0 me-1">M:</label>
                                <input class="form-control " type="text" value="">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="suffix-box d-flex align-items-center" data-suffix="支">
                                <label class="form-label text-start mb-0 me-1">C:</label>
                                <input class="form-control " type="text" value="">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="suffix-box d-flex align-items-center" data-suffix="支">
                                <label class="form-label text-start mb-0 me-1">Y:</label>
                                <input class="form-control " type="text" value="">
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
                        </div>`
            $('.accordion-body').append(html);
        })
    }

    function initRedispatchBtn() {
        $('#btn-dispatch').on('click', function(event) {
            // event.preventDefault();

            $('#dispatch-box').toggle();
        })
        
    }

    function initExportSelectMenu() {
        $('.buttons-table-menu.dropdown-menu').on('click', function(event) {
            event.stopPropagation();
        });

        $('.buttons-table-menu-btn').on('click', function(event) {
            $('.buttons-table.dropdown-toggle.dropdown-toggle-split').dropdown('hide');
        })

        $('input.select-all').on('click', function(event){
            let type = $(this).attr('data-type');
            $('.dropdown-items[data-type='+type+']').find('input').click();
        })
    }

    // 匯出按鈕
    function initExportBtn() {
        $('.export-btn').on('click', function(event) {
            let value = [];
            $('.export-columns:checked').each(function(i) {
                value[i] = $(this).val();
            });
            console.log(value);
        }) 
    }

    // 派工按鈕
    function initAssignSubmitBtn() {
        
        $('.buttons-assign').on('click', function(event) {
            
            event.preventDefault();
            event.stopPropagation()

            var selected = $('#datatable-buttons').find('tr.selected').length 
            
            if(!selected) {
                Swal.fire({
                    title: "請先選擇",
                    icon: "warning",
                    confirmButtonColor: "#34c38f",
                    confirmButtonText: "確定"
                });
                
            } else {
                $('#assignModal').modal('show') ;
            }
        })

        $('#assign-submit-btn').on('click', function(event){
            
            Swal.fire(
                {
                    title: '派工完成！',
                    icon: 'success',
                    confirmButtonColor: '#7a6fbe',
                    confirmButtonText: "確定"
                }
            ).then(function (result) {
                $('#assignModal').modal('hide') ;
            });
        })
    }

    function initQusetionMark() {
        let count = 0;
        $('#q-mark').on('click', function(event) {
            $('.q-tip').toggle();
        });

        $('.q-tip-box').find('input').on('click', function(event) {
            
            if( !count ) {
                $('.q-tip').toggle();
                count++;
            } else {
                $('.q-tip').hide();
            }
            
            

        })
    }
    

    function init() {
        initSearchBar(); 
        initNavbarDropdown();
        initBtnSearch();
        initContentStyle();
        initGetFileName();
        initTable();
        initAccordionAddBtn(); 
        initRedispatchBtn();
        initExportSelectMenu();
        initExportBtn()
        initAssignSubmitBtn();
        initQusetionMark();
        // initButtonsTable();
    };

    init();

    // $('.select2-test').select2({
    //     placeholder: 'Select an option'
    // });
});

// })(jQuery)
