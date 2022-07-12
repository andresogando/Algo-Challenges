<div class="-flex -padding-16 -space-v-16"><div class="-layout-h -space-h-16"><div class="-layout-h -space-h-4 -center-center"><div class="icon -size-16 -color-green"><div class="-layout-h -center"><svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-1.43-3c-1.642-.344-2.462-1.136-2.462-2.376V9.612c0-.688-.37-1.032-1.108-1.032V7.42c.739 0 1.108-.346 1.108-1.037V5.31c.013-.613.225-1.11.636-1.487.414-.378 1.023-.653 1.825-.823L7 3.9c-.574.163-.873.621-.896 1.374v1.109c0 .763-.421 1.301-1.265 1.615.844.313 1.265.853 1.265 1.62v1.103c.023.753.322 1.211.896 1.374L6.57 13zm2.86 0c1.642-.344 2.462-1.136 2.462-2.376V9.612c0-.688.37-1.032 1.108-1.032V7.42c-.739 0-1.108-.346-1.108-1.037V5.31c-.013-.613-.225-1.11-.636-1.487-.414-.378-1.023-.653-1.825-.823L9 3.9c.574.163.873.621.896 1.374v1.109c0 .763.421 1.301 1.265 1.615-.844.313-1.265.853-1.265 1.62v1.103c-.023.753-.322 1.211-.896 1.374l.43.905z"></path></svg></div></div><p class="-bold -font-size-14 -capitalize">codewriting</p></div></div><div class="markdown -arial"><p>Let's say a triple <code>(a, b, c)</code> is a <em>zigzag</em> if either <code>a &lt; b &gt; c</code> or <code>a &gt; b &lt; c</code>.</p>
<p>Given an array of integers <code>numbers</code>, your task is to check all the triples of its consecutive elements for being a <em>zigzag</em>. More formally, your task is to construct an array of length <code>numbers.length - 2</code>, where the <code>i<sup>th</sup></code> element of the output array equals <code>1</code> if the triple <code>(numbers[i], numbers[i + 1], numbers[i + 2])</code> is a <em>zigzag</em>, and <code>0</code> otherwise.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>numbers = [1, 2, 1, 3, 4]</code>, the output should be <code>solution(numbers) = [1, 1, 0]</code>.</p>
<ul>
<li><code>(numbers[0], numbers[1], numbers[2]) = (1, 2, 1)</code> <strong>is</strong> a <em>zigzag</em>, because <code>1 &lt; 2 &gt; 1</code>;</li>
<li><code>(numbers[1], numbers[2] , numbers[3]) = (2, 1, 3)</code> <strong>is</strong> a <em>zigzag</em>, because <code>2 &gt; 1 &lt; 3</code>;</li>
<li><code>(numbers[2], numbers[3] , numbers[4]) = (1, 3, 4)</code> <strong>is not</strong> a <em>zigzag</em>, because <code>1 &lt; 3 &lt; 4</code>;</li>
</ul>
</li>
<li>
<p>For <code>numbers = [1, 2, 3, 4]</code>, the output should be <code>solution(numbers) = [0, 0]</code>;</p>
<p>Since all the elements of <code>numbers</code> are increasing, there are no <em>zigzags</em>.</p>
</li>
<li>
<p>For <code>numbers = [1000000000, 1000000000, 1000000000]</code>, the output should be <code>solution(numbers) = [0]</code>.</p>
<p>Since all the elements of <code>numbers</code> are the same, there are no <em>zigzags</em>.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer numbers</strong></p>
<p>An array of integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>3 ≤ numbers.length ≤ 100</code>,<br>
<code>1 ≤ numbers[i] ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] array.integer</strong></p>
<p>Return an array, where the <code>i<sup>th</sup></code> element equals <code>1</code> if the triple <code>(numbers[i], numbers[i + 1], numbers[i + 2])</code> is a <em>zigzag</em>, and <code>0</code> otherwise.</p>
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
