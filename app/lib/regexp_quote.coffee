RegExp.quote = (str,opts='')->
  str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
