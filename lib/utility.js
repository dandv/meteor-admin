elementValueById = function(id) {
  var element = document.getElementById(id);
  if (!element)
    return null;
  else
    return element.value;
};

trimmedElementValueById = function(id) {
  var element = document.getElementById(id);
  if (!element)
    return null;
  else
    return element.value.replace(/^\s*|\s*$/g, ""); // trim() doesn't work on IE8;
};