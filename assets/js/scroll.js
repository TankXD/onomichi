jQuery(".js-drawer a[href^='#']").on("click", function (e) {
  jQuery(".js-drawer").removeClass("is-open-drawer");
  jQuery(".js-drawer-btn").removeClass("is-open-drawer");
});

jQuery("a[href^='#'").on("click", function (e) {
  const id = jQuery(this).attr("href");
  const target = jQuery(id === "#" ? "html" : id);
  const position = target.offset().top;

  jQuery("html,body").animate(
    {
      scrollTop: position - 120,
    },
    300,
    "swing"
  );
});

jQuery(window).on("scroll", function () {
  if (100 < jQuery(this).scrollTop()) {
    jQuery(".js-top-btn").fadeIn();
  } else {
    jQuery(".js-top-btn").fadeOut();
  }
});
