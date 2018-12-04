// Searchbar

$('.search').keyup(function(event) {
  const searchVal = new RegExp($.map($(this).val().trim().split(' '), function(value) {
    return '(?=.*?' + value + ')';
  }).join(''), 'i');
  $('img').parent().parent().hide().removeAttr("data-fancybox").filter(function(){
    return searchVal.exec($(this).text());
  }).show().attr("data-fancybox", "images");
});

const $figcaption = $('figcaption');
const $anchors = $('a');
const $allCaptions = [];

$title.each(function(){
  const $title = $(this).attr('alt');
  $allTitles.push({title: $title});
});

$figcaption.each(function() {
  const $caption = $(this).text();
  $allCaptions.push({caption: $caption});
});

for (let i = 0; i < 12; i++) {
  $($anchors[i]).attr('data-caption', $allCaptions[i].caption);
}
