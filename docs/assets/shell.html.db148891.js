import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as o,a,b as e,d as l,e as n,r}from"./app.6aa2b576.js";const p={},c=n(`<h1 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> shell</h1><p>The shell is the Unix Shell, which provides a series of commands for interacting with the operating system in Unix-like systems.</p><p>Many programs can be used to execute shell commands, such as terminal emulators.</p><p>In Auto.js it is roughly equivalent to executing the command &quot;adb shell&quot; with adb. Its realization includes two ways:</p><ul><li>Executed by <code>java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Runtime<span class="token punctuation">.</span>exec</code> (shell, Tap, Home and other functions)</li><li>Executed through the embedded terminal emulator (RootAutomator, Shell, etc.)</li></ul><blockquote><p>Stability: 2 - Stable</p></blockquote><h2 id="shell-cmd-root" tabindex="-1"><a class="header-anchor" href="#shell-cmd-root" aria-hidden="true">#</a> shell(cmd[, root])</h2><ul><li><code><span class="token property">cmd</span></code> {string} The command to execute</li><li><code><span class="token property">root</span></code> {Boolean} Whether to run with root privileges, the default is false.</li></ul><p>Execute the command cmd once, and return the execution result of the command. The properties of the returned object are as follows:</p><ul><li><code><span class="token property">code</span></code> {number} Return code. It is 0 when the execution is successful, and a non-zero number when it fails.</li><li><code><span class="token property">result</span></code> {string} Running result (stdout output result)</li><li><code><span class="token property">error</span></code> {string} The error message of the operation (stderr output result). For example, executing a command that requires root privileges but does not grant root privileges will return the error message &quot;Permission denied&quot;.</li></ul><p>Example (forcibly stop WeChat):</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">shell</span><span class="token punctuation">(</span><span class="token string">&quot;am force-stop com.tencent.mm&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span> code <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;executed successfully&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
   <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;Execution failed! Please go to the console to view the error message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="shell-1" tabindex="-1"><a class="header-anchor" href="#shell-1" aria-hidden="true">#</a> Shell</h1><blockquote><p>Stability: 2 - Stable</p></blockquote><p>Shell functions are used to execute a single command at one time and get the result. If multiple commands need to be executed, it is more efficient to use the Shell object. This is because, each time a shell function is run, a separate shell process will be opened and closed after the operation is over. This process takes a certain amount of time; and the Shell object uses the same shell process from beginning to end.</p><h2 id="new-shell-root" tabindex="-1"><a class="header-anchor" href="#new-shell-root" aria-hidden="true">#</a> new Shell(root)</h2><ul><li><code><span class="token property">root</span></code> {Boolean} Whether to run a shell process with root privileges, the default is false. This will affect the permissions of subsequent commands executed using the Shell object</li></ul><p>The &quot;constructor&quot; of the Shell object.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> sh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shell</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//Forcibly stop WeChat</span>
sh<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&quot;am force-stop com.tencent.mm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sh<span class="token punctuation">.</span> <span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell-exec-cmd" tabindex="-1"><a class="header-anchor" href="#shell-exec-cmd" aria-hidden="true">#</a> Shell.exec(cmd)</h2><ul><li><code><span class="token property">cmd</span></code> {string} The command to execute</li></ul><p>Execute the command cmd. This function does not return any value.</p><p>Note that command execution is &quot;asynchronous&quot;, non-blocking. That is, it will not wait for the command to complete before continuing to execute downwards.</p><p>Although such a design is inconvenient to use, it is limited by the terminal emulator and there is no solution for the time being; if a solution can be found later, the <code>Shell<span class="token punctuation">.</span>execAndWaitFor</code> function will be provided.</p><h2 id="shell-exit" tabindex="-1"><a class="header-anchor" href="#shell-exit" aria-hidden="true">#</a> Shell. exit()</h2><p>Exit the shell directly. The command being executed will be forced to quit.</p><h2 id="shell-exitandwaitfor" tabindex="-1"><a class="header-anchor" href="#shell-exitandwaitfor" aria-hidden="true">#</a> Shell. exitAndWaitFor()</h2><p>Execute the &quot;exit&quot; command and wait for the execution of the command to complete and exit the shell.</p><p>This function executes the exit command to exit the shell normally.</p><h2 id="shell-setcallback-callback" tabindex="-1"><a class="header-anchor" href="#shell-setcallback-callback" aria-hidden="true">#</a> Shell.setCallback(callback)</h2><ul><li><code><span class="token property">callback</span></code> {Object} callback function</li></ul><p>Set the callback function of the shell to monitor the output of the shell. Can include the following attributes:</p><ul><li>onOutput {Function} This function will be called whenever the shell has new output. Its argument is a string.</li><li>onNewLine {Function} This function will be called whenever the shell has a new line of output. Its argument is a string (not including the final newline).</li></ul><p>E.g:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> sh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shell</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sh<span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token function-variable function">onNewLine</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">line</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//Print to the console when there is a new line of output</span>
<span class="token function">log</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//Loop through commands</span>
<span class="token keyword">var</span> cmd <span class="token operator">=</span> dialogs<span class="token punctuation">.</span><span class="token function">rawInput</span><span class="token punctuation">(</span><span class="token string">&quot;Please enter the command to be executed, enter exit to exit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>cmd <span class="token operator">==</span> <span class="token string">&quot;exit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
	<span class="token comment">//Excuting an order</span>
sh<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>cmd<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
sh<span class="token punctuation">.</span> <span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="appendix-introduction-to-shell-commands" tabindex="-1"><a class="header-anchor" href="#appendix-introduction-to-shell-commands" aria-hidden="true">#</a> Appendix: Introduction to shell commands</h1>`,36),u={href:"https://developer.android.com/studio/command-line/adb.html#shellcommands",target:"_blank",rel:"noopener noreferrer"},d=n(`<h2 id="am-command" tabindex="-1"><a class="header-anchor" href="#am-command" aria-hidden="true">#</a> am command</h2><p>The am command is the Activity Manager command, which is used to manage application activities, services, etc.</p><p><strong>The following commands start with &quot;am&quot;, for example <code><span class="token function">shell</span><span class="token punctuation">(</span><span class="token string">&#39;am start -p com.tencent.mm&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>(start WeChat)</strong></p><h3 id="start-options-intent" tabindex="-1"><a class="header-anchor" href="#start-options-intent" aria-hidden="true">#</a> start [options] intent</h3><p>Start the Activity (application activity) specified by the intent. See <a href="#shell_intent">Specifications for intent parameters</a>.</p><p>Options include:</p><ul><li>-D: Enable debugging.</li><li>-W: Wait for boot to complete.</li><li>--start-profiler file: Start profiler and send results to file.</li><li>-P file: Like --start-profiler, but profiling stops when the app goes idle.</li><li>-R count: Repeat Activity start count times. Before each repetition, the top Activity will complete.</li><li>-S: Forcibly stop the target application before starting the Activity.</li><li>--opengl-trace: Enable tracing of OpenGL functions.</li><li>--user user_id | current: Specifies which user to run as; if not specified, runs as the current user.</li></ul><h3 id="startservice-options-intent" tabindex="-1"><a class="header-anchor" href="#startservice-options-intent" aria-hidden="true">#</a> startservice [options] intent</h3><p>Start the Service specified by the intent. See <a href="#shell_intent">Specifications for intent parameters</a>. Options include:</p><ul><li>--user user_id | current: Specifies which user to run as; if not specified, runs as the current user.</li></ul><h3 id="force-stop-package" tabindex="-1"><a class="header-anchor" href="#force-stop-package" aria-hidden="true">#</a> force-stop package</h3><p>Force stop all applications associated with package ([app package name](#app package name)).</p><h3 id="kill-options-package" tabindex="-1"><a class="header-anchor" href="#kill-options-package" aria-hidden="true">#</a> kill [options] package</h3><p>Terminate all processes associated with package ([application package name](#application package name)). This command only terminates processes that are safe to terminate without affecting the user experience. Options include:</p><ul><li>--user user_id | all | current: Specifies the user whose processes will be terminated; if not specified, all users&#39; processes will be terminated.</li></ul><h3 id="kill-all" tabindex="-1"><a class="header-anchor" href="#kill-all" aria-hidden="true">#</a> kill-all</h3><p>Kill all background processes.</p><h3 id="broadcast-options-intent" tabindex="-1"><a class="header-anchor" href="#broadcast-options-intent" aria-hidden="true">#</a> broadcast [options] intent</h3><p>Issue a broadcast intent. See <a href="#shell_intent">Specifications for intent parameters</a>.</p><p>Options include:</p><ul><li>[--user user_id | all | current]: Specify the user to send to; if not specified, send to all users.</li></ul><h3 id="instrument-options-component" tabindex="-1"><a class="header-anchor" href="#instrument-options-component" aria-hidden="true">#</a> instrument [options] component</h3><p>Start monitoring with an Instrumentation instance. Typically, the target component is of the form test_package/runner_class. Options include:</p><ul><li>-r: output raw result (otherwise decode report_key_streamresult). Use with [-e perf true] to generate raw output of performance measurements.</li><li>-e name value: set the parameter name to value. For test runners, the general form is -e testrunner_flag value[,value...].</li><li>-p file: write profiling data to file.</li><li>-w: Wait for instrumentation to complete before returning. Test runners are required to use this option.</li><li>--no-window-animation: Turn off window animation at runtime.</li><li>--user user_id | current: Specifies which user the instrument runs in; if not specified, it runs in the current user.</li><li>profile start process file Start the profiler of process, write the result to file.</li><li>profile stop process Stops the profiler for a process.</li></ul><h3 id="dumpheap-options-process-file" tabindex="-1"><a class="header-anchor" href="#dumpheap-options-process-file" aria-hidden="true">#</a> dumpheap [options] process file</h3><p>Dump the heap of the process, writing to file.</p><p>Options include:</p><ul><li>--user [user_id|current]: When providing a process name, specify the process user to dump; if not specified, use the current user.</li><li>-n: Dump native heap instead of managed heap.</li><li>set-debug-app [options] package Set application package to debug.</li></ul><p>Options include:</p><ul><li>-w: Wait for the debugger when the application starts.</li><li>--persistent: Persist this value.</li><li>clear-debug-app Use set-debug-app to clear packages previously set for debugging purposes.</li></ul><h3 id="monitor-options-enable-monitoring-for-crashes-or-anrs" tabindex="-1"><a class="header-anchor" href="#monitor-options-enable-monitoring-for-crashes-or-anrs" aria-hidden="true">#</a> monitor [options] Enable monitoring for crashes or ANRs.</h3><p>Options include:</p><ul><li>--gdb: start gdbserv on the given port on crash/ANR.</li></ul><h3 id="screen-compat-on-off-package" tabindex="-1"><a class="header-anchor" href="#screen-compat-on-off-package" aria-hidden="true">#</a> screen-compat {on|off} package</h3><p>Controls the screen compatibility mode of the package.</p><h3 id="display-size-reset-widthxheight" tabindex="-1"><a class="header-anchor" href="#display-size-reset-widthxheight" aria-hidden="true">#</a> display-size [reset|widthxheight]</h3><p>Replace emulator/device display size. This command is useful for testing your app on screens of different sizes, allowing a device with a large screen to emulate a small screen resolution (and vice versa). Example:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">shell</span><span class="token punctuation">(</span><span class="token string">&quot;am display-size 1280x800&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="display-density-dpi" tabindex="-1"><a class="header-anchor" href="#display-density-dpi" aria-hidden="true">#</a> display-density dpi</h3><p>Replace emulator/device display density. This command is useful for testing your app on screens of different densities, enabling testing on high-density ambient environments with low-density screens (and vice versa). Example:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">shell</span><span class="token punctuation">(</span><span class="token string">&quot;am display-density 480&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="to-uri-intent" tabindex="-1"><a class="header-anchor" href="#to-uri-intent" aria-hidden="true">#</a> to-uri intent</h3><p>Output the given intent specification as a URI. See <a href="#shell_intent">Specifications for intent parameters</a>.</p><h3 id="to-intent-uri-intent" tabindex="-1"><a class="header-anchor" href="#to-intent-uri-intent" aria-hidden="true">#</a> to-intent-uri intent</h3><p>Output the given intent specification as intent:URI. See the specification for the intent parameter.</p><h3 id="specification-of-intent-parameters" tabindex="-1"><a class="header-anchor" href="#specification-of-intent-parameters" aria-hidden="true">#</a> specification of intent parameters</h3><p>For am commands that take an intent parameter, you can specify the intent with the following options:</p><ul><li>-a action Specifies the intent action, such as &quot;android.intent.action.VIEW&quot;. This designation can only be declared once.</li><li>-d data_uri Specify an intent data URI, such as &quot;content://contacts/people/1&quot;. This designation can only be declared once.</li><li>-t mime_type Specify the intent MIME type, such as &quot;image/png&quot;. This designation can only be declared once.</li><li>-c category Specify an intent category, such as &quot;android.intent.category.APP_CONTACTS&quot;.</li><li>-n component Specify the component name prefixed with the package name to create an explicit intent, such as &quot;com.example.app/.ExampleActivity&quot;.</li><li>-f flags Add flags to intents supported by setFlags().</li><li>--esn extra_key Add a null extra. URI intent does not support this option.</li><li>-e|--es extra_key extra_string_value Add string data as key-value pairs.</li><li>--ez extra_key extra_boolean_value Add boolean data as key-value pairs.</li><li>--ei extra_key extra_int_value Add integer data as key-value pairs.</li><li>--el extra_key extra_long_value Add long integer data as key-value pairs.</li><li>--ef extra_key extra_float_value Add float data as key-value pairs.</li><li>--eu extra_key extra_uri_value Add URI data as key-value pairs.</li><li>--ecn extra_key extra_component_name_value Add the component name, convert and pass it as a ComponentName object.</li><li>--eia extra_key extra_int_value[,extra_int_value...] Add an array of integers.</li><li>--ela extra_key extra_long_value[,extra_long_value...] Add an array of long integers.</li><li>--efa extra_key extra_float_value[,extra_float_value...] Add an array of floats.</li><li>--grant-read-uri-permission Contains the flag FLAG_GRANT_READ_URI_PERMISSION.</li><li>--grant-write-uri-permission Contains the flag FLAG_GRANT_WRITE_URI_PERMISSION.</li><li>--debug-log-resolution Contains the flag FLAG_DEBUG_LOG_RESOLUTION.</li><li>--exclude-stopped-packages Include the flag FLAG_EXCLUDE_STOPPED_PACKAGES.</li><li>--include-stopped-packages Include flag FLAG_INCLUDE_STOPPED_PACKAGES.</li><li>--activity-brought-to-front Contains the flag FLAG_ACTIVITY_BROUGHT_TO_FRONT.</li><li>--activity-clear-top Contains the flag FLAG_ACTIVITY_CLEAR_TOP.</li><li>--activity-clear-when-task-reset Contains the flag FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET.</li><li>--activity-exclude-from-recents Include the flag FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS.</li><li>--activity-launched-from-history Contains the flag FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY.</li><li>--activity-multiple-task Contains the flag FLAG_ACTIVITY_MULTIPLE_TASK.</li><li>--activity-no-animation Contains the flag FLAG_ACTIVITY_NO_ANIMATION.</li><li>--activity-no-history Contains the flag FLAG_ACTIVITY_NO_HISTORY.</li><li>--activity-no-user-action Contains the flag FLAG_ACTIVITY_NO_USER_ACTION.</li><li>--activity-previous-is-top Contains the flag FLAG_ACTIVITY_PREVIOUS_IS_TOP.</li><li>--activity-reorder-to-front Contains the flag FLAG_ACTIVITY_REORDER_TO_FRONT.</li><li>--activity-reset-task-if-needed Contains the flag FLAG_ACTIVITY_RESET_TASK_IF_NEEDED.</li><li>--activity-single-top Contains the flag FLAG_ACTIVITY_SINGLE_TOP.</li><li>--activity-clear-task Contains the flag FLAG_ACTIVITY_CLEAR_TASK.</li><li>--activity-task-on-home Contains the flag FLAG_ACTIVITY_TASK_ON_HOME.</li><li>--receiver-registered-only Contains the flag FLAG_RECEIVER_REGISTERED_ONLY.</li><li>--receiver-replace-pending Contains the flag FLAG_RECEIVER_REPLACE_PENDING.</li><li>--selector The -d and -t options are required to set the intent data and type.</li></ul><h4 id="uri-component-package" tabindex="-1"><a class="header-anchor" href="#uri-component-package" aria-hidden="true">#</a> URI component package</h4><p>If you are not restricted by one of the options above, you can specify the URI, package name, and component name directly. When the parameter is unrestricted, if the parameter contains a &quot;:&quot; (colon), the tool assumes that the parameter is a URI; if the parameter contains a &quot;/&quot; (forward slash), the tool assumes that the parameter is a component name; Otherwise, the tool assumes the argument is a package name.</p><h2 id="application-package-name" tabindex="-1"><a class="header-anchor" href="#application-package-name" aria-hidden="true">#</a> Application package name</h2><p>The so-called application package name is an identifier that uniquely determines the application. For example, the package name of WeChat is &quot;com.tencent.mm&quot;, and the package name of QQ is &quot;com.tencent.mobileqq&quot;. To get the package name of an application, it can be obtained through the function <code><span class="token function">getPackageName</span><span class="token punctuation">(</span>appName<span class="token punctuation">)</span></code>. See Help -&gt; Other general functions.</p><h2 id="pm-command" tabindex="-1"><a class="header-anchor" href="#pm-command" aria-hidden="true">#</a> pm command</h2><p>The pm command is used to manage applications, such as uninstalling applications, freezing applications, etc. <strong>The following commands all start with &quot;pm&quot;, such as &quot;shell(&quot;pm disable com.tencent.mm&quot;);&quot; (freeze WeChat)</strong></p><h3 id="list-packages-options-filter" tabindex="-1"><a class="header-anchor" href="#list-packages-options-filter" aria-hidden="true">#</a> list packages [options] filter</h3><p>Print all packages, or, alternatively, only packages whose package names contain the text in filter. options:</p><ul><li>-f: View their associated files.</li><li>-d: Filter to show only deprecated packages.</li><li>-e: Filter to show only enabled packages.</li><li>-s: Filter to show only system packages.</li><li>-3: Filter to show only third-party packages.</li><li>-i: View the installer of the package.</li><li>-u: Also include uninstalled packages.</li><li>--user user_id: The user space to query.</li></ul><h3 id="list-permission-groups" tabindex="-1"><a class="header-anchor" href="#list-permission-groups" aria-hidden="true">#</a> list permission-groups</h3><p>Print all known permission groups.</p><h3 id="list-permissions-options-group" tabindex="-1"><a class="header-anchor" href="#list-permissions-options-group" aria-hidden="true">#</a> list permissions [options] group</h3><p>Print all known permissions, or, only those in group. options:</p><ul><li>-g: Organize by groups.</li><li>-f: output all information.</li><li>-s: short summary.</li><li>-d: list only dangerous permissions.</li><li>-u: List only the permissions the user will see.</li></ul><h3 id="list-instrumentation-options" tabindex="-1"><a class="header-anchor" href="#list-instrumentation-options" aria-hidden="true">#</a> list instrumentation [options]</h3><p>List all test packages. options:</p><ul><li>-f: List APK files for testing packages.</li><li>target_package: List the test packages only for this app.</li></ul><h3 id="list-features" tabindex="-1"><a class="header-anchor" href="#list-features" aria-hidden="true">#</a> list features</h3><p>All functions of the output system.</p><h3 id="list-libraries" tabindex="-1"><a class="header-anchor" href="#list-libraries" aria-hidden="true">#</a> list libraries</h3><p>Output all libraries supported by the current device.</p><h3 id="list-users" tabindex="-1"><a class="header-anchor" href="#list-users" aria-hidden="true">#</a> list users</h3><p>Print all users on the system.</p><h3 id="path-package" tabindex="-1"><a class="header-anchor" href="#path-package" aria-hidden="true">#</a> path package</h3><p>Outputs the path to the APK for the given package.</p><h3 id="install-options-path" tabindex="-1"><a class="header-anchor" href="#install-options-path" aria-hidden="true">#</a> install [options] path</h3><p>Install the package (specified by path) to the system. options:</p><ul><li>-l: Install packages with forward locking.</li><li>-r: Reinstall an existing application, preserving its data.</li><li>-t: Allow installation of test APKs.</li><li>-i installer_package_name: Specifies the installer package name.</li><li>-s: Install packages on shared mass storage (like sdcard).</li><li>-f: Install packages on internal system memory.</li><li>-d: allow version code downgrade.</li><li>-g: Grant all permissions listed in the application manifest file.</li></ul><h3 id="uninstall-options-package" tabindex="-1"><a class="header-anchor" href="#uninstall-options-package" aria-hidden="true">#</a> uninstall [options] package</h3><p>Uninstalls a package from the system. options:</p><ul><li>-k: Keep data and cache directories after removing packages.</li></ul><h3 id="clear-package" tabindex="-1"><a class="header-anchor" href="#clear-package" aria-hidden="true">#</a> clear package</h3><p>Deletes all data associated with the package.</p><h3 id="enable-package-or-component" tabindex="-1"><a class="header-anchor" href="#enable-package-or-component" aria-hidden="true">#</a> enable package_or_component</h3><p>Enable the given package or component (written as &quot;package/class&quot;).</p><h3 id="disable-package-or-component" tabindex="-1"><a class="header-anchor" href="#disable-package-or-component" aria-hidden="true">#</a> disable package_or_component</h3><p>Deactivate a given package or component (written as &quot;package/class&quot;).</p><h3 id="disable-user-options-package-or-component" tabindex="-1"><a class="header-anchor" href="#disable-user-options-package-or-component" aria-hidden="true">#</a> disable-user [options] package_or_component</h3><p>options:</p><ul><li>--user user_id: The user to deactivate.</li></ul><h3 id="grant-package-name-permission" tabindex="-1"><a class="header-anchor" href="#grant-package-name-permission" aria-hidden="true">#</a> grant package_name permission</h3><p>Grant permissions to the app. On devices running Android 6.0 (API level 23) and higher, this can be any permission declared in the app&#39;s manifest. Required to be an optional app-defined permission on devices running Android 5.1 (API level 22) and lower.</p><h3 id="revoke-package-name-permission" tabindex="-1"><a class="header-anchor" href="#revoke-package-name-permission" aria-hidden="true">#</a> revoke package_name permission</h3><p>Revoke permissions from the app. On devices running Android 6.0 (API level 23) and higher, this can be any permission declared in the app&#39;s manifest. Required to be an optional app-defined permission on devices running Android 5.1 (API level 22) and lower.</p><h3 id="set-install-location-location" tabindex="-1"><a class="header-anchor" href="#set-install-location-location" aria-hidden="true">#</a> set-install-location location</h3><p>Change the default install location. Position value:</p><ul><li>0: Auto - Let the system decide the best position. *1: Internal\u2014Installed on internal device storage. *2: External\u2014installed on external media.</li></ul><blockquote><p>NOTE: This command is for debugging purposes only; using this command can cause application breaks and other unexpected behavior.</p></blockquote><h3 id="get-install-location" tabindex="-1"><a class="header-anchor" href="#get-install-location" aria-hidden="true">#</a> get-install-location</h3><p>Returns the current install location. return value:</p><ul><li>0 [auto]: Let the system decide the best position.</li><li>1 [internal]: Install on internal device storage</li><li>2 [external]: Install on external media</li></ul><h3 id="set-permission-enforced-permission-true-false" tabindex="-1"><a class="header-anchor" href="#set-permission-enforced-permission-true-false" aria-hidden="true">#</a> set-permission-enforced permission [true|false]</h3><p>Specifies whether the given permission should be enforced.</p><h3 id="trim-caches-desired-free-space" tabindex="-1"><a class="header-anchor" href="#trim-caches-desired-free-space" aria-hidden="true">#</a> trim-caches desired_free_space</h3><p>Reduce cache files to reach the given free space.</p><h3 id="create-user-user-name" tabindex="-1"><a class="header-anchor" href="#create-user-user-name" aria-hidden="true">#</a> create-user user_name</h3><p>Create a new user with the given user_name, outputting the new user&#39;s identifier.</p><h3 id="remove-user-user-id" tabindex="-1"><a class="header-anchor" href="#remove-user-user-id" aria-hidden="true">#</a> remove-user user_id</h3><p>Remove the user with the given user_id, deleting all data associated with that user.</p><h3 id="get-max-users" tabindex="-1"><a class="header-anchor" href="#get-max-users" aria-hidden="true">#</a> get-max-users</h3><p>The maximum number of users supported by the output device.</p><h2 id="other-commands" tabindex="-1"><a class="header-anchor" href="#other-commands" aria-hidden="true">#</a> Other commands</h2><h3 id="take-a-screenshot" tabindex="-1"><a class="header-anchor" href="#take-a-screenshot" aria-hidden="true">#</a> Take a screenshot</h3><p>The screencap command is a shell utility for taking screenshots of a device&#39;s display. In the shell, this syntax is:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>screencap filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>E.g:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$ <span class="token function">shell</span><span class="token punctuation">(</span><span class="token string">&quot;screencap /sdcard/screen.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="list-file" tabindex="-1"><a class="header-anchor" href="#list-file" aria-hidden="true">#</a> list file</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ls filepath
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>E.g:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">shell</span><span class="token punctuation">(</span><span class="token string">&quot;ls /system/bin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,119);function h(m,f){const t=r("ExternalLinkIcon");return i(),o("div",null,[c,a("p",null,[e("The following information about shell commands comes from "),a("a",u,[e("AndroidStudio User Guide: Shell Commands"),l(t)]),e(".")]),d])}const v=s(p,[["render",h],["__file","shell.html.vue"]]);export{v as default};
