<div class="-flex -padding-16 -space-v-16"><div class="-layout-h -space-h-16"><div class="-layout-h -space-h-4 -center-center"><div class="icon -size-16 -color-green"><div class="-layout-h -center"><svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-1.43-3c-1.642-.344-2.462-1.136-2.462-2.376V9.612c0-.688-.37-1.032-1.108-1.032V7.42c.739 0 1.108-.346 1.108-1.037V5.31c.013-.613.225-1.11.636-1.487.414-.378 1.023-.653 1.825-.823L7 3.9c-.574.163-.873.621-.896 1.374v1.109c0 .763-.421 1.301-1.265 1.615.844.313 1.265.853 1.265 1.62v1.103c.023.753.322 1.211.896 1.374L6.57 13zm2.86 0c1.642-.344 2.462-1.136 2.462-2.376V9.612c0-.688.37-1.032 1.108-1.032V7.42c-.739 0-1.108-.346-1.108-1.037V5.31c-.013-.613-.225-1.11-.636-1.487-.414-.378-1.023-.653-1.825-.823L9 3.9c.574.163.873.621.896 1.374v1.109c0 .763.421 1.301 1.265 1.615-.844.313-1.265.853-1.265 1.62v1.103c-.023.753-.322 1.211-.896 1.374l.43.905z"></path></svg></div></div><p class="-bold -font-size-14 -capitalize">codewriting</p></div></div><div class="markdown -arial"><p>Given a matrix of integers, we'd like to consider the sum of the elements within the area of a 45° rotated rectangle. More formally, the area is bounded by two diagonals parallel to the <a href="keyword://matrix-main-diagonal" target="_blank">main diagonal</a> and two diagonals parallel to the <a href="keyword://matrix-secondary-diagonal" target="_blank">secondary diagonal</a>. The dimensions of the rotated rectangle are defined by the number of elements along the borders of the rectangle.</p>
<p><img src="https://codesignal.s3.amazonaws.com/tasks/rotatedRectSum/img/dimensions.gif?_tm=1636921002683" alt="dimensions"></p>
<p>Given integers <code>a</code> and <code>b</code> representing the dimensions of the rotated rectangle, and <code>matrix</code> (a matrix of integers), your task is to find the greatest sum of integers contained within an <code>a x b</code> rotated rectangle.</p>
<p><strong>Note:</strong> The order of the dimensions is not important - consider all <code>a x b</code> and <code>b x a</code> rectangles.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For</p>
<pre><code>matrix = [[1, 2, 3, 4, 0],
          [5, 6, 7, 8, 1],
          [3, 2, 4, 1, 4],
          [4, 3, 5, 1, 6]]
</code></pre>
<p><code>a = 2</code>, and <code>b = 3</code>, the output should be <code>solution(matrix, a, b) = 36</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/tasks/rotatedRectSum/img/example.gif?_tm=1636921003174" alt="example 1"></p>
</li>
<li>
<p>For</p>
<pre><code>matrix = [[-2, 3, 5, -1],
          [4, 3, -10, 10]]
</code></pre>
<p><code>a = 1</code>, and <code>b = 1</code>, the output should be  <code>solution(matrix, a, b) = 10</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/tasks/rotatedRectSum/img/example2.gif?_tm=1636921003591" alt="example 2"></p>
<p>The rotated rectangle with dimensions <code>1x1</code> is just one element, so the answer is the maximal element in <code>matrix</code>.</p>
</li>
<li>
<p>For</p>
<pre><code>matrix = [[-2, 3],
          [4, 3]]
</code></pre>
<p><code>a = 1</code>, and <code>b = 2</code>, the output should be  <code>solution(matrix, a, b) = 7</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/tasks/rotatedRectSum/img/example3.gif?_tm=1636921003853" alt="example 3"></p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.array.integer matrix</strong></p>
<p>A matrix of integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ matrix.length, matrix[i].length ≤ 50</code>,<br>
<code>-10<sup>3</sup> ≤ matrix[i][j] ≤ 10<sup>3</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer a</strong></p>
<p>The first rotated rectangle dimension.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ a ≤ 25</code>.</p>
</li>
<li>
<p><strong>[input] integer b</strong></p>
<p>The second rotated rectangle dimension.<br>
It's guaranteed that at least one rotated rectangle will fit in the given matrix.</p>
<p><em>Guaranteed constraints:</em><br>
<code>a ≤ b ≤ 25</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The maximal sum of elements of a rotated rectangle with dimensions <code>a</code> and <code>b</code>.</p>
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
