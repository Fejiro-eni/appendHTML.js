# appendHTML
A hack to help append HTML constructed String to element in vanilla JS

Using 
  
  <pre><code>element.innerHTML += "&lt;p&gt;sample html string&lt;/p&gt;";</code></pre>

would reset your dom element, 
for example if you have a &lt;form&gt; element, the input would be reset,
also if your have added eventlisteners, they would be disabled, since it was just the dom element that was reset not the document itself.
  
to avoid this you might try using 
  
 <pre><code>element.append("&lt;p&gt;sample html string&lt;/p&gt;);</code></pre>

this would only append a string not a dom element.

So I decided to write a function to append strings as Html, hope you find this helpful...

to use 
clone and link appendHTML.js to your document

after that you can now do this...
<pre><code>element.appendHTML("&lt;p&gt;sample html string&lt;/p&gt;);</code></pre>
to add a dom element constructed from a string
