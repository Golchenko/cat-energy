    $(function(){
      $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.7});
      $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.3, orientation: 'vertical'});
    });
    
$(function() {
  $(".curtain").twentytwenty({
    default_offset_pct: 0.5, // Начальное положение шторки
    orientation: 'horizontal', // Движение шторки ("horizontal" или "vertical")
    before_label: 'БЫЛО', // Подпись "до"
    after_label: 'СТАЛО', // Подпись "после"
    no_overlay: false, // Не отображать оверлей для подписей "до" и "после"
    move_slider_on_hover: false, // Если true, то при наведении на блок сразу же активируется перетаскивание шторки
       move_with_handle_only: true, // Перемещать шторку движением пальца
    click_to_move: true // Если true, то при нажатии на область с изображениями, шторка переместиться на место клика
  });
});
