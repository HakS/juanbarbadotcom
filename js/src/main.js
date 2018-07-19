function serialize(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

function sendForm() {
  const content = {
    name: $("input#name").val(),
    mail: $("input#mail").val(),
    message: $("textarea#message").val(),
  }
  const xFormParams = `${serialize(content)}&${$('form#contactForm').serialize()}`;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/mail/send.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = () => {
    if (xhr.status !== 200) {
      $('#contact-wrapper').show();
      $('#contact-success').hide();
      $('#contact-failure').show();
      return;
    }
    $('#contact-wrapper').hide();
    $('#contact-success').show();
    $('#contact-failure').hide();
    
  };
  xhr.send(encodeURI(xFormParams));

}

(function($) {
  $(window).ready(() => {

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });

    let opacity = 0;
    opacity = $(window).scrollTop() / $(window).height();
    $('#navbar').css('background', `rgba(83,208,252,${opacity})`);

    const radius = 200;
    const fields = $('.skills .skill'),
      container = $('.skills'),
      width = container.width(),
      height = container.height();
    const step = (2 * Math.PI) / fields.length;

    const calcSkillsPositions = () => {
      const container = $('.skills'),
        width = container.width(),
        height = container.height();
      let angle = 0;
      fields.each(function() {
        const x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        const y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
        $(this).css({
          left: x + 'px',
          top: y + 'px'
        });
        angle += step;
      });
    }

    calcSkillsPositions();

    $(window).scroll((a) => {
      opacity = $(window).scrollTop() / $(window).height();
      opacity = opacity > 1 ? 1 : opacity;
      $('#navbar').css('background', `rgba(83,208,252,${opacity})`);
    });

    $(window).resize((a) => {
      calcSkillsPositions();
    });


  });

})(jQuery);
