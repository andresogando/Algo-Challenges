<div class="-flex -padding-16 -space-v-16"><div class="-layout-h -space-h-16"><div class="-layout-h -space-h-4 -center-center"><div class="icon -size-16 -color-green"><div class="-layout-h -center"><svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-1.43-3c-1.642-.344-2.462-1.136-2.462-2.376V9.612c0-.688-.37-1.032-1.108-1.032V7.42c.739 0 1.108-.346 1.108-1.037V5.31c.013-.613.225-1.11.636-1.487.414-.378 1.023-.653 1.825-.823L7 3.9c-.574.163-.873.621-.896 1.374v1.109c0 .763-.421 1.301-1.265 1.615.844.313 1.265.853 1.265 1.62v1.103c.023.753.322 1.211.896 1.374L6.57 13zm2.86 0c1.642-.344 2.462-1.136 2.462-2.376V9.612c0-.688.37-1.032 1.108-1.032V7.42c-.739 0-1.108-.346-1.108-1.037V5.31c-.013-.613-.225-1.11-.636-1.487-.414-.378-1.023-.653-1.825-.823L9 3.9c.574.163.873.621.896 1.374v1.109c0 .763.421 1.301 1.265 1.615-.844.313-1.265.853-1.265 1.62v1.103c-.023.753-.322 1.211-.896 1.374l.43.905z"></path></svg></div></div><p class="-bold -font-size-14 -capitalize">codewriting</p></div></div><div class="markdown -arial"><p>It's lunch time, and three friends are planning to go to a restaurant together. There are <code>n</code> restaurants available, so to make it easier to choose, they number the restaurants from <code>1</code> to <code>n</code> and each friend puts the restaurants in order from most preferable to least preferable.</p>
<p>You are given a two-dimensional array of integers <code>preferences</code>, where <code>preferences[0]</code> represents the preferences of the first friend, <code>preferences[1]</code> - of the second one and <code>preferences[2]</code> - of the third one. For example, if <code>preferences[i] = [3, 1, 2]</code>, this means that the <code>i<sup>th</sup></code> friend likes restaurant <code>3</code> the most, followed by restaurant <code>1</code>, and they like restaurant <code>2</code> the least.</p>
<p>Your task is to help the friends to choose a restaurant, according to the following criteria: They'll agree on restaurant <code>i</code> if there are no other restaurants that two or more of the friends would prefer more than <code>i</code>.</p>
<p>If the friends can't agree on a restaurant, return <code>-1</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For</p>
<pre><code>preferences = [[1, 2, 3, 4],
               [3, 1, 4, 2],
               [4, 2, 1, 3]]
</code></pre>
<p>the output should be <code>solution(preferences) = 1</code>.</p>
<ul>
<li>Restaurant <code>1</code> is friend <code>1</code>'s first choice; they wouldn't prefer any other restaurant.</li>
<li>Friend <code>2</code> would only prefer restaurant <code>3</code> over restaurant <code>1</code>.</li>
<li>Friend <code>3</code> would prefer either restaurant <code>4</code> or <code>2</code> over restaurant <code>1</code>.</li>
</ul>
<p>Even though friends <code>2</code> and <code>3</code> have other preferences, there's no <strong>one</strong> other restaurant that they'd both prefer to go to. So the friends will choose restaurant <code>1</code>.</p>
</li>
<li>
<p>For</p>
<pre><code>preferences = [[1, 2, 3],
               [2, 3, 1],
               [3, 1, 2]]
</code></pre>
<p>the output should be <code>solution(preferences) = -1</code>.</p>
<ul>
<li>Restaurant <code>1</code> is more preferable by the first and the third friends than the restaurant <code>2</code>.</li>
<li>Restaurant <code>2</code> is more preferable by the first and the second friends than the restaurant <code>3</code>.</li>
<li>Restaurant <code>3</code> is more preferable by the second and the third friends than the restaurant <code>1</code>.</li>
</ul>
<p>None of the restaurants meet their criteria, so the friends can't agree on a restaurant.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.array.integer preferences</strong></p>
<p>An array of 3 arrays of integers, representing the restaurant preferences of three friends. It is guaranteed that the preferences array for each friend is correct, i.e. it contains a permutation of numbers from <code>1</code> to <code>n</code>.</p>
<p><em>Guaranteed constraints:</em><br>
<code>preferences.length = 3</code>,<br>
<code>1 ≤ preferences[0].length ≤ 10<sup>5</sup></code>,<br>
<code>preferences[i].length = preferences[0].length</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>An integer representing the number of the chosen restaurant, or <code>-1</code> otherwise.</p>
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
