import $ from "jquery";

export const truncatedTitle = {
  inserted: el => {
    const INPUT = 'INPUT';
    const $el = $(el);
    $el.mouseenter(() => {
      if ($el.get(0).offsetWidth < $el.get(0).scrollWidth && !$el.attr('title')) {
        const text = $el.prop('tagName') === INPUT ? $el.val() : $el.text();
        $el.attr('title', text);
      }
    });
  }
};
