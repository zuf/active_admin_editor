//= require wysihtml5
//= require active_admin/editor/config
//= require active_admin/editor/editor

;(function(window, $) {  
  wysihtml5.commands.customClassBlock = {
  exec: function(composer, command, className) {
    return wysihtml5.commands.formatBlock.exec(composer, command, "div", className, new RegExp(className, "g"));
  },
  state: function(composer, command, className) {
    return wysihtml5.commands.formatBlock.state(composer, command, "div", className, new RegExp(className, "g"));
  }
};
wysihtml5.commands.customClassInline = {
  exec: function(composer, command, className) {
    return wysihtml5.commands.formatInline.exec(composer, command, "span", className, new RegExp(className, "g"));
  },
  state: function(composer, command, className) {
    return wysihtml5.commands.formatInline.state(composer, command, "span", className, new RegExp(className, "g"));
  }
};


  $(function() { $('.html_editor').editor(window.AA.editor_config) })
})(window, jQuery)
