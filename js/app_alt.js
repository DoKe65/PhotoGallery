$('.search').keyup(function(event) {
  const searchVal = new RegExp($.map($(this).val().trim().split(' '), function(value) {
    return '(?=.*?' + value + ')';
  }).join(''), 'i');
  $('img').parent().parent().hide().removeAttr("data-fancybox").filter(function(){
    return searchVal.exec($(this).text());
  }).show().attr("data-fancybox", "images");
});

const $figcaption = $('figcaption');
const $title = $('img');
const $card = $('.card');
const $anchors = $('a');

const $allText = [];
const $allTitles = [];
const $allCaptions = [];
const $allCards = [];

$title.each(function(){
  const $title = $(this).attr('alt');
  $allTitles.push({title: $title});
});

$figcaption.each(function() {
  const $caption = $(this).text();
  $allCaptions.push({caption: $caption});
});
console.log($allTitles);

// for (let i = 0; i < 12; i++) {
//   $($anchors[i]).attr('title', $allTitles[i].title);
// }

for (let i = 0; i < 12; i++) {
  $($anchors[i]).attr('data-caption', $allCaptions[i].caption);
}


// function changeData(array) {
//   for (const i = 0; i < $card; i++) {
//     console.log($($card[i]).parent().attr('data-caption', array[i][1]));
//   }
// }
// changeData($allTitles);

// $card.each(function() {
//   const $card = $(this).parent();
//
// for (const i = 0; i < $card; i++) {
//   $($card[i]).parent().attr('data-caption', $allTitles[i][1]);
// }
// });





// $figcaption.each(function() {
//   const $caption = $(this);
//   $allText.push({caption: $caption});
// });
