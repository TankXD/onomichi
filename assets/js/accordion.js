const qnaToggleBtn = jQuery(".js-qna-q");

qnaToggleBtn.on("click", function (e) {
  e.preventDefault();
  const target = jQuery(this);
  const targetParent = target.parent();
  const targetContent = target.next();

  if (targetParent.hasClass("is-open-qna")) {
    targetContent.slideUp(300);
    targetParent.removeClass("is-open-qna");
  } else {
    targetParent.addClass("is-open-qna");
    targetContent.slideDown(300);
  }
});
