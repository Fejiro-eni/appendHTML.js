# appendHTML
A hack to help append HTML constructed String to element in vanilla JS

Using 
  
  element.innerHTML += "<p>sample html str</p>";

would reset your dom element, 
for example if you have a <form> element, the input would be reset,
also if your have added eventlisteners, they would be disabled, since it was just the dom element that was reset not the document itself.
  
to avoid this you might try using 
  
  element.append("<p>sample html str</p>);

this would only append a string not a dom element.

So I decided to write a function to append strings as Html, hope you find this helpful...
