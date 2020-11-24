$(function(){
    var current = location.pathname;
    $('#nav li a').each(function(){
        var $this = $(this);
        if (current === '/' && !$this.hasClass('sidebar-home')) {
            return;
        }
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.parent().attr('id', 'active');
        }
    })
})
