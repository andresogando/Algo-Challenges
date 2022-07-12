<div class="-flex -padding-16 -space-v-16"><div class="-layout-h -space-h-16"><div class="-layout-h -space-h-4 -center-center"><div class="icon -size-16 -color-green"><div class="-layout-h -center"><svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-1.43-3c-1.642-.344-2.462-1.136-2.462-2.376V9.612c0-.688-.37-1.032-1.108-1.032V7.42c.739 0 1.108-.346 1.108-1.037V5.31c.013-.613.225-1.11.636-1.487.414-.378 1.023-.653 1.825-.823L7 3.9c-.574.163-.873.621-.896 1.374v1.109c0 .763-.421 1.301-1.265 1.615.844.313 1.265.853 1.265 1.62v1.103c.023.753.322 1.211.896 1.374L6.57 13zm2.86 0c1.642-.344 2.462-1.136 2.462-2.376V9.612c0-.688.37-1.032 1.108-1.032V7.42c-.739 0-1.108-.346-1.108-1.037V5.31c-.013-.613-.225-1.11-.636-1.487-.414-.378-1.023-.653-1.825-.823L9 3.9c.574.163.873.621.896 1.374v1.109c0 .763.421 1.301 1.265 1.615-.844.313-1.265.853-1.265 1.62v1.103c-.023.753-.322 1.211-.896 1.374l.43.905z"></path></svg></div></div><p class="-bold -font-size-14 -capitalize">codewriting</p></div></div><div class="markdown -arial"><p>You are given an array of non-negative integers <code>numbers</code>. You are allowed to choose any number from this array and swap any two digits in it. If after the swap operation the number contains leading zeros, they can be omitted and not considered (eg: <code>010</code> will be considered just <code>10</code>).</p>
<p>Your task is to check whether it is possible to apply the swap operation <strong>at most once</strong>, so that the elements of the resulting array are <em>strictly increasing</em>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>numbers = [1, 5, 10, 20]</code>, the output should be <code>solution(numbers) = true</code>.</p>
<p>The initial array is already <em>strictly increasing</em>, so no actions are required.</p>
</li>
<li>
<p>For <code>numbers = [1, 3, 900, 10]</code>, the output should be <code>solution(numbers) = true</code>.</p>
<p>By choosing <code>numbers[2] = 900</code> and swapping its first and third digits, the resulting number <code>009</code> is considered to be just <code>9</code>. So the updated array will look like <code>[1, 3, 9, 10]</code>, which is <em>strictly increasing</em>.</p>
</li>
<li>
<p>For <code>numbers = [13, 31, 30]</code>, the output should be <code>solution(numbers) = false</code>.</p>
<ul>
<li>The initial array elements are not increasing.</li>
<li>By swapping the digits of <code>numbers[0] = 13</code>, the array becomes <code>[31, 31, 30]</code> which is not <em>strictly increasing</em>;</li>
<li>By swapping the digits of <code>numbers[1] = 31</code>, the array becomes <code>[13, 13, 30]</code> which is not <em>strictly increasing</em>;</li>
<li>By swapping the digits of <code>numbers[2] = 30</code>, the array becomes <code>[13, 31, 3]</code> which is not <em>strictly increasing</em>;</li>
</ul>
<p>So, it's not possible to obtain a <em>strictly increasing</em> array, and the answer is <code>false</code>.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer numbers</strong></p>
<p>An array of non-negative integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ numbers.length ≤ 10<sup>3</sup></code>,<br>
<code>0 ≤ numbers[i] ≤ 10<sup>3</sup></code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p>Return <code>true</code> if it is possible to obtain a <em>strictly increasing</em> array by applying the digit-swap operation at most once, and <code>false</code> otherwise.</p>
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
