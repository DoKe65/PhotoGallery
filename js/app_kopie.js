// Searchbar

$('.search').keyup(function(event) {
  const searchVal = new RegExp($.map($(this).val().trim().split(' '), function(value) {
    return '(?=.*?' + value + ')';
  }).join(''), 'i');
  $('img').parent().parent().hide().removeAttr("data-fancybox").filter(function(){
    return searchVal.exec($(this).text());
  }).show().attr("data-fancybox", "images");
});

// Caption-Transfer
const $figcaption = $('figcaption');
const $anchors = $('a');
const $allCaptions = [];

$figcaption.each(function() {
  const $caption = $(this).text();
  $allCaptions.push({caption: $caption});
});

for (let i = 0; i < $allCptions.length; i++) {
  $($anchors[i]).attr('data-caption', $allCaptions[i].caption);
}
