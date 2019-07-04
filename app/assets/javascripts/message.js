$(function(){
  var buildHTML = function(message) {
    image = ( message.image ) ? `<asset_path src=${message.image} >` : "";
      //data-idが反映されるようにしている
      var html = '<div class="message" data-message-id=' + message.id + '>' +
        '<div class="upper-message">' +
          '<div class="upper-message__user-name">' +
            message.user_name +
          '</div>' +
          '<div class="upper-message__date">' +
            message.date +
          '</div>' +
        '</div>' +
        '<div class="lower-message">' +
          '<p class="lower-message__content">' +
            message.content +
          '</p>' +
          '<img src="' + message.image.url + '" class="lower-message__image" >' +
        '</div>' +
      '</div>'
    } else if (message.content) {
      //同様に、data-idが反映されるようにしている
      var html = '<div class="message" data-message-id=' + message.id + '>' +
        '<div class="upper-message">' +
          '<div class="upper-message__user-name">' +
            message.user_name +
          '</div>' +
          '<div class="upper-message__date">' +
            message.date+
          '</div>' +
        '</div>' +
        '<div class="lower-message">' +
          '<p class="lower-message__content">' +
            message.content +
          '</p>' +
        '</div>' +
      '</div>'
    } else if (message.image.url) {
      //同様に、data-idが反映されるようにしている
      var html = '<div class="message" data-message-id=' + message.id + '>' +
        '<div class="upper-message">' +
          '<div class="upper-message__user-name">' +
            message.user_name +
          '</div>' +
          '<div class="upper-message__date">' +
            message.date +
          '</div>' +
        '</div>' +
        '<div class="lower-message">' +
          '<img src="' + message.image.url + '" class="lower-message__image" >' +
        '</div>' +
      '</div>'
    };
    return html;
  };
        
        
    $('#new_message').on('submit',function(e) {
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action');
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){

          var html = buildHTML(data);
            $('.messages').append(html);
            $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
            $('#new_message')[0].reset();
            $(".form__submit").prop('disabled', false);   
        });
      });

        var reloadMessages = function() {
          //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
          var last_message_id = $('.message:last').data('message-id');
          
          var groupId= $('.current-group').data('group_id')
          $.ajax({
          
            url: `/groups/${groupId}/api/messages`,
          
            type: 'GET',
            dataType: 'json',
            
            data: {id: last_message_id}
          
          })
          .done(function(messages) {
            
          var html = '';
      
        messages.forEach(function(message){
           html += buildHTML(message)
        });

        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        
      
            })
            .fail(function(){
              alert('error');
            });
          }
          
          setInterval(reloadMessages, 5000);
});