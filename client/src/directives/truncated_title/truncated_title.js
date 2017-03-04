import $ from "jquery";

export const truncatedTitle = {
  inserted: el => {
    const $el = $(el);
    $el.mouseenter(() => {
      if ($el.get(0).offsetWidth < $el.get(0).scrollWidth && !$el.attr('title')) {
        $el.attr('title', $el.text());
      }
    });
  }
};
