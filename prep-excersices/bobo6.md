<div class="-flex -padding-16 -space-v-16"><div class="-layout-h -space-h-16"><div class="-layout-h -space-h-4 -center-center"><div class="icon -size-16 -color-green"><div class="-layout-h -center"><svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-1.43-3c-1.642-.344-2.462-1.136-2.462-2.376V9.612c0-.688-.37-1.032-1.108-1.032V7.42c.739 0 1.108-.346 1.108-1.037V5.31c.013-.613.225-1.11.636-1.487.414-.378 1.023-.653 1.825-.823L7 3.9c-.574.163-.873.621-.896 1.374v1.109c0 .763-.421 1.301-1.265 1.615.844.313 1.265.853 1.265 1.62v1.103c.023.753.322 1.211.896 1.374L6.57 13zm2.86 0c1.642-.344 2.462-1.136 2.462-2.376V9.612c0-.688.37-1.032 1.108-1.032V7.42c-.739 0-1.108-.346-1.108-1.037V5.31c-.013-.613-.225-1.11-.636-1.487-.414-.378-1.023-.653-1.825-.823L9 3.9c.574.163.873.621.896 1.374v1.109c0 .763.421 1.301 1.265 1.615-.844.313-1.265.853-1.265 1.62v1.103c-.023.753-.322 1.211-.896 1.374l.43.905z"></path></svg></div></div><p class="-bold -font-size-14 -capitalize">codewriting</p></div></div><div class="markdown -arial"><p>You are implementing your own programming language and you've decided to add support for merging strings. A typical <code>merge</code> function would take two strings <code>s1</code> and <code>s2</code>, and return the <a href="keyword://lexicographical-order-for-strings" target="_blank">lexicographically smallest</a> result that can be obtained by placing the symbols of <code>s2</code> between the symbols of <code>s1</code> in such a way that maintains the relative order of the characters in each string.</p>
<p>For example, if <code>s1 = "super"</code> and <code>s2 = "tower"</code>, the result should be <code>merge(s1, s2) = "stouperwer"</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/tasks/mergeStrings/img/example2.png?_tm=1624856870417" alt=""></p>
<p>You'd like to make your language more unique, so for your <code>merge</code> function, instead of comparing the characters in the usual lexicographical order, you'll compare them based on how many times they occur in their respective initial strings (fewer occurrences means the character is considered smaller). If the number of occurrences are equal, then the characters should be compared in the usual lexicographical way. If both number of occurences and characters are equal, you should take the characters from the first string to the result. Note that occurrences in the initial strings are compared - they do not change over the merge process.</p>
<p>Given two strings <code>s1</code> and <code>s2</code>, return the result of the special <code>merge</code> function you are implementing.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>For <code>s1 = "dce"</code> and <code>s2 = "cccbd"</code>, the output should be<br>
<code>solution(s1, s2) = "dcecccbd"</code>.</li>
</ul>
<p>All symbols from <code>s1</code> goes first, because all of them have only <code>1</code> occurrence in <code>s1</code> and <code>c</code> has <code>3</code> occurrences in <code>s2</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/tasks/mergeStrings/img/example1.jpg?_tm=1624856870637" alt=""></p>
<ul>
<li>For <code>s1 = "super"</code> and <code>s2 = "tower"</code>, the output should be<br>
<code>solution(s1, s2) = "stouperwer"</code>.</li>
</ul>
<p>Because in both strings all symbols occur only 1 time, strings are merged as usual. You can find explanation for this example on the image in the description.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string s1</strong></p>
<p>A string consisting only of lowercase English letters.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ s1.length ≤ 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[input] string s2</strong></p>
<p>A string consisting only of lowercase English letters.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ s2.length ≤ 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<p>The string that results by merging <code>s1</code> and <code>s2</code> using your special merge function.</p>
</li>
</ul>
<p><strong>[JavaScript] Syntax Tips</strong></p>
<pre><code class="language-javascript"><span class="hljs-comment">// Prints help message to the console</span>
<span class="hljs-comment">// Returns a string</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">helloWorld</span>(<span class="hljs-params">name</span>) {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"This prints to the console when you Run Tests"</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello, "</span> + name;
}

</code></pre>

</div></div>
