<div class="-flex -padding-16 -space-v-16">
  <div class="-layout-h -space-h-16">
    <div class="-layout-h -space-h-4 -center-center">
      <div class="icon -size-16 -color-green">
        <div class="-layout-h -center">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-1.43-3c-1.642-.344-2.462-1.136-2.462-2.376V9.612c0-.688-.37-1.032-1.108-1.032V7.42c.739 0 1.108-.346 1.108-1.037V5.31c.013-.613.225-1.11.636-1.487.414-.378 1.023-.653 1.825-.823L7 3.9c-.574.163-.873.621-.896 1.374v1.109c0 .763-.421 1.301-1.265 1.615.844.313 1.265.853 1.265 1.62v1.103c.023.753.322 1.211.896 1.374L6.57 13zm2.86 0c1.642-.344 2.462-1.136 2.462-2.376V9.612c0-.688.37-1.032 1.108-1.032V7.42c-.739 0-1.108-.346-1.108-1.037V5.31c-.013-.613-.225-1.11-.636-1.487-.414-.378-1.023-.653-1.825-.823L9 3.9c.574.163.873.621.896 1.374v1.109c0 .763.421 1.301 1.265 1.615-.844.313-1.265.853-1.265 1.62v1.103c-.023.753-.322 1.211-.896 1.374l.43.905z"
            ></path>
          </svg>
        </div>
      </div>
      <p class="-bold -font-size-14 -capitalize">codewriting</p>
    </div>
  </div>
  <div class="markdown -arial">
    <p>
      You are given an array of integers <code>numbers</code> and two integers
      <code>left</code> and <code>right</code>. You task is to calculate a
      boolean array <code>result</code>, where <code>result[i] = true</code> if
      there exists an integer <code>x</code>, such that
      <code>numbers[i] = (i + 1) * x</code> and <code>left ≤ x ≤ right</code>.
      Otherwise, <code>result[i]</code> should be set to <code>false</code>.
    </p>
    <p>
      <span class="markdown--header" style="color: #2b3b52; font-size: 1.4em"
        >Example</span
      >
    </p>
    <p>
      For <code>numbers = [8, 5, 6, 16, 5]</code>, <code>left = 1</code>, and
      <code>right = 3</code>, the output should be
      <code
        >solution(numbers, left, right) = [false, false, true, false,
        true]</code
      >.
    </p>
    <ul>
      <li>
        For <code>numbers[0] = 8</code>, we need to find a value of
        <code>x</code> such that <code>1 * x = 8</code>, but the only value that
        would work is <code>x = 8</code> which doesn't satisfy the boundaries
        <code>1 ≤ x ≤ 3</code>, so <code>result[0] = false</code>.
      </li>
      <li>
        For <code>numbers[1] = 5</code>, we need to find a value of
        <code>x</code> such that <code>2 * x = 5</code>, but there is no integer
        value that would satisfy this equation, so
        <code>result[1] = false</code>.
      </li>
      <li>
        For <code>numbers[2] = 6</code>, we can choose
        <code>x = 2</code> because <code>3 * 2 = 6</code> and
        <code>1 ≤ 2 ≤ 3</code>, so <code>result[2] = true</code>.
      </li>
      <li>
        For <code>numbers[3] = 16</code>, there is no an integer
        <code>1 ≤ x ≤ 3</code>, such that <code>4 * x = 16</code>, so
        <code>result[3] = false</code>.
      </li>
      <li>
        For <code>numbers[4] = 5</code>, we can choose
        <code>x = 1</code> because <code>5 * 1 = 5</code> and
        <code>1 ≤ 1 ≤ 3</code>, so <code>result[4] = true</code>.
      </li>
    </ul>
    <p>
      <span class="markdown--header" style="color: #2b3b52; font-size: 1.4em"
        >Input/Output</span
      >
    </p>
    <ul>
      <li>
        <p><strong>[execution time limit] 4 seconds (js)</strong></p>
      </li>
      <li>
        <p><strong>[input] array.integer numbers</strong></p>
        <p>An array of integers.</p>
        <p>
          <em>Guaranteed constraints:</em><br />
          <code>1 ≤ numbers.length ≤ 100</code>,<br />
          <code>1 ≤ numbers[i] ≤ 10<sup>6</sup></code
          >.
        </p>
      </li>
      <li>
        <p><strong>[input] integer left</strong></p>
        <p>An integer representing the lower bound for <code>x</code>.</p>
        <p>
          <em>Guaranteed constraints:</em><br />
          <code>1 ≤ left ≤ 10<sup>4</sup></code
          >.
        </p>
      </li>
      <li>
        <p><strong>[input] integer right</strong></p>
        <p>An integer representing the upper bound for <code>x</code>.</p>
        <p>
          <em>Guaranteed constraints:</em><br />
          <code>1 ≤ left ≤ right ≤ 10<sup>4</sup></code
          >.
        </p>
      </li>
      <li>
        <p><strong>[output] array.boolean</strong></p>
        <p>A boolean array <code>result</code> described above.</p>
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
  </div>
</div>
