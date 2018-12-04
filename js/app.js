// Searchbar
// Search by
$('.search').keyup(function(event) {
  // creating a new Regular Expression instance, to match text with the search letters
  const searchVal = new RegExp($.map($(this).val().trim().split(' '), function(value) {
    return '(?=.*?' + value + ')';
  }).join(''), 'i');
  // remove the data-fancybox attribute from images
  // filter and return the text which matches with the search value
  $('img').parent().parent().hide().removeAttr("data-fancybox").filter(function(){
    return searchVal.exec($(this).text());
    // show only images which matches the search value and add the caption attribute
  }).show().attr("data-fancybox", "images");
});

const $figcaption = $('figcaption');
const $anchors = $('a');
const $allCaptions = [];

$figcaption.each(function() {
  const $caption = $(this).text();
  $allCaptions.push({caption: $caption});
});

for (let i = 0; i < 12; i++) {
  $($anchors[i]).attr('data-caption', $allCaptions[i].caption);
}
