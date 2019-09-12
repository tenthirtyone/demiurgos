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

$(".btn-sign-up").click(function() {
  var email = $(".email").val();

  if (validateEmail(email)) {
    $.ajax({
      type: "POST",
      url: "/signup",
      data: { email },
      success: res => {
        console.log(res);
        $(".form-signup").hide();
        $(".btn-sign-up").hide();
        $(".thank-you").show();
      },
      error: err => {
        console.log(err);
        $(".form-signup").hide();
        $(".btn-sign-up").hide();
        $(".thank-you").show();
      },
      dataType: "json"
    });
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
