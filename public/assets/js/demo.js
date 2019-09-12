$(".Home-Header").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#Home").offset().top
    },
    1000
  );
});

$(".Feature-Header").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#Features").offset().top
    },
    1000
  );
});

$(".About-Header").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#About").offset().top
    },
    1000
  );
});
