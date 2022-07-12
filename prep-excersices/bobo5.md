<div class="-flex -padding-16 -space-v-16"><div class="-layout-h -space-h-16"><div class="-layout-h -space-h-4 -center-center"><div class="icon -size-16 -color-green"><div class="-layout-h -center"><svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-1.43-3c-1.642-.344-2.462-1.136-2.462-2.376V9.612c0-.688-.37-1.032-1.108-1.032V7.42c.739 0 1.108-.346 1.108-1.037V5.31c.013-.613.225-1.11.636-1.487.414-.378 1.023-.653 1.825-.823L7 3.9c-.574.163-.873.621-.896 1.374v1.109c0 .763-.421 1.301-1.265 1.615.844.313 1.265.853 1.265 1.62v1.103c.023.753.322 1.211.896 1.374L6.57 13zm2.86 0c1.642-.344 2.462-1.136 2.462-2.376V9.612c0-.688.37-1.032 1.108-1.032V7.42c-.739 0-1.108-.346-1.108-1.037V5.31c-.013-.613-.225-1.11-.636-1.487-.414-.378-1.023-.653-1.825-.823L9 3.9c.574.163.873.621.896 1.374v1.109c0 .763.421 1.301 1.265 1.615-.844.313-1.265.853-1.265 1.62v1.103c-.023.753-.322 1.211-.896 1.374l.43.905z"></path></svg></div></div><p class="-bold -font-size-14 -capitalize">codewriting</p></div></div><div class="markdown -arial"><p>You are given a string <code>s</code>. Consider the following algorithm applied to this string:</p>
<ol>
<li>Take all the <a href="keyword://string-prefix" target="_blank">prefixes</a> of the string, and choose the longest <a href="keyword://palindrome" target="_blank">palindrome</a> between them.</li>
<li>If this chosen prefix contains at least two characters, cut this prefix from <code>s</code> and go back to the first step with the updated string. Otherwise, end the algorithm with the current string <code>s</code> as a result.</li>
</ol>
<p>Your task is to implement the above algorithm and return its result when applied to string <code>s</code>.</p>
<p><strong>Note</strong>: you can click on the <strong>prefixes</strong> and <strong>palindrome</strong> words to see the definition of the terms if you're not familiar with them.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>s = "aaacodedoc"</code>, the output should be <code>solution(s) = ""</code>.</p>
<ul>
<li>The initial string <code>s = "aaacodedoc"</code> contains only three prefixes which are also palindromes - <code>"a"</code>, <code>"aa"</code>, <code>"aaa"</code>. The longest one between them is <code>"aaa"</code>, so we cut if from <code>s</code>.</li>
<li>Now we have string <code>"codedoc"</code>. It contains two prefixes which are also palindromes - <code>"c"</code> and <code>"codedoc"</code>. The longest one between them is <code>"codedoc"</code>, so we cut if from the current string and obtain the empty string.</li>
<li>Finally the algorithm ends on the empty string, so the answer is <code>""</code>.</li>
</ul>
</li>
<li>
<p>For <code>s = "codesignal"</code>, the output should be <code>solution(s) = "codesignal"</code>.<br>
The initial string <code>s = "codesignal"</code> contains the only prefix, which is also palindrome - <code>"c"</code>. This prefix is the longest, but doesn't contain two characters, so the algorithm ends with string <code>"codesignal"</code> as a result.</p>
</li>
<li>
<p>For <code>s = ""</code>, the output should be <code>solution(s) = ""</code>.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string s</strong></p>
<p>A string consisting of English lowercase letters.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ s.length ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<p>The result of the described algorithm.</p>
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