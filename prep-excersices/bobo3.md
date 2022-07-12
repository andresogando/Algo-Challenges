<div class="-flex -padding-16 -space-v-16"><div class="-layout-h -space-h-16"><div class="-layout-h -space-h-4 -center-center"><div class="icon -size-16 -color-green"><div class="-layout-h -center"><svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-1.43-3c-1.642-.344-2.462-1.136-2.462-2.376V9.612c0-.688-.37-1.032-1.108-1.032V7.42c.739 0 1.108-.346 1.108-1.037V5.31c.013-.613.225-1.11.636-1.487.414-.378 1.023-.653 1.825-.823L7 3.9c-.574.163-.873.621-.896 1.374v1.109c0 .763-.421 1.301-1.265 1.615.844.313 1.265.853 1.265 1.62v1.103c.023.753.322 1.211.896 1.374L6.57 13zm2.86 0c1.642-.344 2.462-1.136 2.462-2.376V9.612c0-.688.37-1.032 1.108-1.032V7.42c-.739 0-1.108-.346-1.108-1.037V5.31c-.013-.613-.225-1.11-.636-1.487-.414-.378-1.023-.653-1.825-.823L9 3.9c.574.163.873.621.896 1.374v1.109c0 .763.421 1.301 1.265 1.615-.844.313-1.265.853-1.265 1.62v1.103c-.023.753-.322 1.211-.896 1.374l.43.905z"></path></svg></div></div><p class="-bold -font-size-14 -capitalize">codewriting</p></div></div><div class="markdown -arial"><p>You are given two arrays of integers <code>a</code> and <code>b</code>, and two integers <code>lower</code> and <code>upper</code>. Your task is to find the number of pairs <code>(i, j)</code> such that <code>lower ≤ a[i] * a[i] + b[j] * b[j] ≤ upper</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>a = [3, -1, 9]</code>, <code>b = [100, 5, -2]</code>, <code>lower = 7</code>, and <code>upper = 99</code>, the output should be <code>solution(a, b, lower, upper) = 4</code>.</p>
<p>There are only four pairs that satisfy the requirement:</p>
<ul>
<li>If <code>i = 0</code> and <code>j = 1</code>, then <code>a[0] = 3</code>, <code>b[1] = 5</code>, and <code>7 ≤ 3 * 3 + 5 * 5 = 9 + 25 = 36 ≤ 99</code>.</li>
<li>If <code>i = 0</code> and <code>j = 2</code>, then <code>a[0] = 3</code>, <code>b[2] = -2</code>, and <code>7 ≤ 3 * 3 + (-2) * (-2) = 9 + 4 = 13 ≤ 99</code>.</li>
<li>If <code>i = 1</code> and <code>j = 1</code>, then <code>a[1] = -1</code>, <code>b[1] = 5</code>, and <code>7 ≤ (-1) * (-1) + 5 * 5 = 1 + 25 = 26 ≤ 99</code>.</li>
<li>If <code>i = 2</code> and <code>j = 2</code>, then <code>a[2] = 9</code>, <code>b[2] = -2</code>, and <code>7 ≤ 9 * 9 + (-2) * (-2) = 81 + 4 = 85 ≤ 99</code>.</li>
</ul>
</li>
<li>
<p>For <code>a = [1, 2, 3, -1, -2, -3]</code>, <code>b = [10]</code>, <code>lower = 0</code>, and <code>upper = 100</code>, the output should be <code>solution(a, b, lower, upper) = 0</code>.</p>
<p>Since the array <code>b</code> contains only one element <code>10</code> and the array <code>a</code> does not contain <code>0</code>, it is not possible to satisfy <code>0 ≤ a[i] * a[i] + 10 * 10 ≤ 100</code>.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer a</strong></p>
<p>A first array of integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ a.length ≤ 10<sup>5</sup></code>,<br>
<code>-10<sup>4</sup> ≤ a[i] ≤ 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[input] array.integer b</strong></p>
<p>A second array of integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ b.length ≤ 10<sup>5</sup></code>,<br>
<code>-10<sup>4</sup> ≤ b[i] ≤ 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer lower</strong></p>
<p>An integer representing a lower bound of a satisfiable square sum.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ lower ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer upper</strong></p>
<p>An integer representing an upper bound of a satisfiable square sum.</p>
<p><em>Guaranteed constraints:</em><br>
<code>lower ≤ upper</code>,<br>
<code>0 ≤ upper ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The number of pairs <code>(i, j)</code> such, that <code>lower ≤ a[i] * a[i] + b[j] * b[j] ≤ upper</code>. It is guaranteed that the answer fits in 32-bit value type.</p>
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
