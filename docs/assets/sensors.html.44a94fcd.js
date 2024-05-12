import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.6aa2b576.js";const t={},o=e(`<h1 id="sensors" tabindex="-1"><a class="header-anchor" href="#sensors" aria-hidden="true">#</a> sensors</h1><blockquote><p>Stability: 2-Stable</p></blockquote><p>The sensors module provides support for obtaining the information of the sensors on the mobile phone. These sensors include distance sensors, light sensors, gravity sensors, and direction sensors. It should be pointed out that the script can only obtain sensor data, <strong>cannot simulate or forge sensor data and events</strong>, so functions such as simulating a shake cannot be realized.</p><p>When you want to monitor a sensor, you need to use <code>sensors<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code> to register the listener before you can start listening; when you don&#39;t need to listen, call <code>sensors<span class="token punctuation">.</span><span class="token function">unregister</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code> to unregister the listener. All listeners will be automatically logged out at the end of the script. At the same time, this kind of monitoring keeps the script running. If you don&#39;t log off the listener, the script will keep running.</p><p>For example, the code for monitoring the light sensor is:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//Light sensor monitor</span>
sensors<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;light&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> light</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;The current light intensity is&quot;</span><span class="token punctuation">,</span> light<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It should be noted that the data of each sensor is not the same, so the callback function parameters when calling <code><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code> to listen to the event are not the same. For example, the light sensor parameter is <code><span class="token punctuation">(</span>event<span class="token punctuation">,</span> light<span class="token punctuation">)</span></code>, the acceleration sensor parameter It is <code><span class="token punctuation">(</span>event<span class="token punctuation">,</span> ax<span class="token punctuation">,</span> ay<span class="token punctuation">,</span> az<span class="token punctuation">)</span></code>. Even the sensor parameters on some devices have increased. For example, the distance sensor of Huawei mobile phones has three parameters, and the general mobile phone has only one parameter.</p><p>The commonly used sensors and their event parameters are as follows:</p><ul><li><p><code><span class="token property">accelerometer</span></code> acceleration sensor, parameters <code><span class="token punctuation">(</span>event<span class="token punctuation">,</span> ax<span class="token punctuation">,</span> ay<span class="token punctuation">,</span> az<span class="token punctuation">)</span></code>:</p><ul><li><code><span class="token property">event</span></code> <a href="#sensors_sensorevent">SensorEvent</a> sensor event, used to get all the information when the sensor data changes</li><li><code><span class="token property">ax</span></code> {number} The acceleration on the x axis, in m/s^2</li><li><code><span class="token property">ay</span></code> {number} The acceleration on the y axis, in m/s^2</li><li><code><span class="token property">az</span></code> {number} The acceleration on the z axis, in m/s^2 The coordinate system of the x-axis, y-axis, and z-axis here are as follows (where the z-axis is perpendicular to the device screen surface):</li></ul><p>!<img src="#images/axis_device.png" alt="axis_device" loading="lazy"></p></li><li><p><code><span class="token property">orientation</span></code> direction sensor, parameter <code><span class="token punctuation">(</span>event<span class="token punctuation">,</span> azimuth<span class="token punctuation">,</span> pitch<span class="token punctuation">,</span> roll<span class="token punctuation">)</span></code>:</p><ul><li><code><span class="token property">event</span></code> <a href="#sensors_sensorevent">SensorEvent</a> sensor event, used to get all the information when the sensor data changes</li><li><code><span class="token property">azimuth</span></code> {number} Azimuth, the horizontal angle between clockwise direction and y-axis from the north direction line of geomagnetic field, unit angle, range 0~359</li><li><code><span class="token property">pitch</span></code> {number} The angle of rotation around the x axis, when the device is placed horizontally, the value is 0, when the top of the device is tilted, the value is positive, when the tail of the device is tilted, the value is negative, the unit is angle, Range -180~180</li><li><code><span class="token property">roll</span></code> {number} The angle of clockwise rotation around the y-axis, unit angle, range -90~90</li></ul></li><li><p><code><span class="token property">gyroscope</span></code> gyroscope sensor, parameters <code><span class="token punctuation">(</span>event<span class="token punctuation">,</span> wx<span class="token punctuation">,</span> wy<span class="token punctuation">,</span> wz<span class="token punctuation">)</span></code>:</p><ul><li><code><span class="token property">event</span></code> <a href="#sensors_sensorevent">SensorEvent</a> sensor event, used to get all the information when the sensor data changes</li><li><code><span class="token property">wx</span></code> {number} Angular velocity around the x-axis, in radians/s</li><li><code><span class="token property">wy</span></code> {number} Angular velocity around the y axis, in radians/s</li><li><code><span class="token property">wz</span></code> {number} Angular velocity around the z axis, in radians/s</li></ul></li><li><p><code><span class="token property">magnetic_field</span></code> magnetic field sensor, parameter <code><span class="token punctuation">(</span>event<span class="token punctuation">,</span> bx<span class="token punctuation">,</span> by<span class="token punctuation">,</span> bz<span class="token punctuation">)</span></code>:</p><ul><li><code><span class="token property">event</span></code> <a href="#sensors_sensorevent">SensorEvent</a> sensor event, used to get all the information when the sensor data changes</li><li><code><span class="token property">bx</span></code> {number} The magnetic field strength on the x-axis, in uT</li><li><code><span class="token property">by</span></code> {number} The magnetic field strength on the y-axis, in uT</li><li><code><span class="token property">bz</span></code> {number} The magnetic field strength on the z-axis, in uT</li></ul></li><li><p><code><span class="token property">gravity</span></code> gravity sensor, parameters<code><span class="token punctuation">(</span>event<span class="token punctuation">,</span> gx<span class="token punctuation">,</span> gy<span class="token punctuation">,</span> gz<span class="token punctuation">)</span></code>:</p><ul><li><code><span class="token property">event</span></code> <a href="#sensors_sensorevent">SensorEvent</a> sensor event, used to get all the information when the sensor data changes</li><li><code><span class="token property">gx</span></code> {number} The acceleration of gravity on the x-axis, in m/s^2</li><li><code><span class="token property">gy</span></code> {number} The acceleration of gravity on the y-axis, in m/s^2</li><li><code><span class="token property">gz</span></code> {number} The acceleration of gravity on the z axis, in m/s^2</li></ul></li><li><p><code><span class="token property">linear_acceleration</span></code> linear acceleration sensor, parameters <code><span class="token punctuation">(</span>event<span class="token punctuation">,</span> ax<span class="token punctuation">,</span> ay<span class="token punctuation">,</span> az<span class="token punctuation">)</span></code>:</p><ul><li><code><span class="token property">event</span></code> <a href="#sensors_sensorevent">SensorEvent</a> sensor event, used to get all the information when the sensor data changes</li><li><code><span class="token property">ax</span></code> {number} Linear acceleration on the x-axis, in m/s^2</li><li><code><span class="token property">ay</span></code> {number} Linear acceleration on the y axis, in m/s^2</li><li><code><span class="token property">az</span></code> {number} Linear acceleration on the z axis, in m/s^2</li></ul></li><li><p><code><span class="token property">ambient_temperature</span></code> ambient temperature sensor, most devices do not support, the parameter <code><span class="token punctuation">(</span>event<span class="token punctuation">,</span> t<span class="token punctuation">)</span></code>:</p><ul><li><code><span class="token property">event</span></code> <a href="#sensors_sensorevent">SensorEvent</a> sensor event, used to get all the information when the sensor data changes</li><li><code><span class="token property">t</span></code> {number} Ambient temperature in degrees Celsius.</li></ul></li><li><p><code><span class="token property">light</span></code> light sensor, parameter <code><span class="token punctuation">(</span>event<span class="token punctuation">,</span> light<span class="token punctuation">)</span></code>:</p><ul><li><code><span class="token property">event</span></code> <a href="#sensors_sensorevent">SensorEvent</a> sensor event, used to get all the information when the sensor data changes</li><li><code><span class="token property">light</span></code> {number} Ambient light intensity, unit lux</li></ul></li><li><p><code><span class="token property">pressure</span></code> pressure sensor, parameter <code><span class="token punctuation">(</span>event<span class="token punctuation">,</span> p<span class="token punctuation">)</span></code>:</p><ul><li><code><span class="token property">event</span></code> <a href="#sensors_sensorevent">SensorEvent</a> sensor event, used to get all the information when the sensor data changes</li><li><code><span class="token property">p</span></code> {number} Atmospheric pressure in hPa</li></ul></li><li><p><code><span class="token property">proximity</span></code> distance sensor, parameter <code><span class="token punctuation">(</span>event<span class="token punctuation">,</span> distance<span class="token punctuation">)</span></code>:</p><ul><li><code><span class="token property">event</span></code> <a href="#sensors_sensorevent">SensorEvent</a> sensor event, used to get all the information when the sensor data changes</li><li><code><span class="token property">distance</span></code> {number} generally refers to the distance from the distance sensor next to the front camera of the device to the obstacle in front, and there are only two cases for this value on many devices: when the obstacle is close, the value is 0, when the obstacle is relatively close, the value is 0. The value is 5 when there is no obstacle in the distance or within the range</li></ul></li><li><p><code><span class="token property">relative_humidity</span></code> humidity sensor, most devices do not support, the parameter <code><span class="token punctuation">(</span>event<span class="token punctuation">,</span> rh<span class="token punctuation">)</span></code>:</p><ul><li><code><span class="token property">event</span></code> <a href="#sensors_sensorevent">SensorEvent</a> sensor event, used to get all the information when the sensor data changes</li><li><code><span class="token property">rh</span></code> {number} relative humidity, the range is 0~100 (percentage)</li></ul></li></ul><h2 id="sensors-register-sensorname-delay" tabindex="-1"><a class="header-anchor" href="#sensors-register-sensorname-delay" aria-hidden="true">#</a> sensors.register(sensorName[, delay])</h2><ul><li><code><span class="token property">sensorName</span></code> {string} Sensor name, commonly used sensor names are as described above</li><li><code><span class="token property">delay</span></code> {number} Sensor data update frequency, optional, default is <code>sensors<span class="token punctuation">.</span>delay<span class="token punctuation">.</span>normal</code>. The available values \u200B\u200Bare as follows: <ul><li><code>sensors<span class="token punctuation">.</span>delay<span class="token punctuation">.</span>normal</code> normal frequency</li><li><code>sensors<span class="token punctuation">.</span>delay<span class="token punctuation">.</span>ui</code> is suitable for the update frequency of the user interface</li><li><code>sensors<span class="token punctuation">.</span>delay<span class="token punctuation">.</span>game</code> is suitable for the update frequency of the game</li><li><code>sensors<span class="token punctuation">.</span>delay<span class="token punctuation">.</span>fastest</code> fastest update frequency]</li></ul></li><li>Return <a href="#sensors_sensoreventemitter">SensorEventEmitter</a></li></ul><p>Register a sensor to monitor and return <a href="#sensors_sensoreventemitter">SensorEventEmitter</a>.</p><p>E.g:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//Register the sensor to listen</span>
<span class="token keyword">var</span> sensor <span class="token operator">=</span> sensors<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;gravity&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>sensor <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;Gravity sensor is not supported&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//Monitor data</span>
sensor<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">gx<span class="token punctuation">,</span> gy<span class="token punctuation">,</span> gz</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;gravitational acceleration: %d, %d, %d&quot;</span><span class="token punctuation">,</span> gx<span class="token punctuation">,</span> gy<span class="token punctuation">,</span> gz<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The update frequency of sensor data can be specified by the delay parameter, for example:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> sensor <span class="token operator">=</span> sensors<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;gravity&quot;</span><span class="token punctuation">,</span> sensors<span class="token punctuation">.</span>delay<span class="token punctuation">.</span>game<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In addition, if the sensor specified by <code><span class="token property">sensorName</span></code> is not supported, the function will return <code><span class="token keyword">null</span></code>; but if the value of <code>sensors<span class="token punctuation">.</span>ignoresUnsupportedSensor</code> is set to <code><span class="token boolean">true</span></code>, the function will return a sensor event that will not be distributed <a href="#sensors_sensoreventemitter">SensorEventEmitter</a>.</p><p>E.g:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>sensors<span class="token punctuation">.</span>ignoresUnsupportedSensor <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">//No need to judge by null</span>
sensors<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;gravity&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">gx<span class="token punctuation">,</span> gy<span class="token punctuation">,</span> gz</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;gravitational acceleration: %d, %d, %d&quot;</span><span class="token punctuation">,</span> gx<span class="token punctuation">,</span> gy<span class="token punctuation">,</span> gz<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For more information, see <a href="#sensors_sensoreventemitter">SensorEventEmitter</a> and <a href="#sensors_sensors_ignoresUnsupportedSensor">sensors.ignoresUnsupportedSensor</a>.</p><h2 id="sensors-unregister-emitter" tabindex="-1"><a class="header-anchor" href="#sensors-unregister-emitter" aria-hidden="true">#</a> sensors.unregister(emitter)</h2><ul><li><code><span class="token property">emitter</span></code> <a href="#sensors_sensoreventemitter">SensorEventEmitter</a></li></ul><p>Log out of the sensor listener. The logged-out listener will no longer be able to listen to sensor data.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//Register a sensor listener</span>
<span class="token keyword">var</span> sensor <span class="token operator">=</span> sensors<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;gravity&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>sensor <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//Log out the listener after 2 seconds</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    sensors<span class="token punctuation">.</span><span class="token function">unregister</span><span class="token punctuation">(</span>sensor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sensors-unregisterall" tabindex="-1"><a class="header-anchor" href="#sensors-unregisterall" aria-hidden="true">#</a> sensors.unregisterAll()</h2><p>Log out of all sensor listeners.</p><h2 id="sensors-ignoresunsupportedsensor" tabindex="-1"><a class="header-anchor" href="#sensors-ignoresunsupportedsensor" aria-hidden="true">#</a> sensors.ignoresUnsupportedSensor</h2><ul><li>{boolean}</li></ul><p>Indicates whether to ignore unsupported sensors. If the value is set to <code><span class="token boolean">true</span></code>, the function <code>sensors<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code> will return a virtual sensor monitor without any data even for unsupported sensors, that is, <code>sensors<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code> will not return<code><span class="token keyword">null</span></code> to avoid non-null judgment, and at this time, the &quot;unsupported_sensor&quot; event of <code><span class="token property">sensors</span></code> will be triggered.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//Ignore unsupported sensors</span>
sensors<span class="token punctuation">.</span>ignoresUnsupportedSensor <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">//Monitor events when there are unsupported sensors</span>
sensors<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;unsupported_sensor&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">sensorName</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token string">&quot;Unsupported sensor: &quot;</span><span class="token operator">+</span> sensorName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//Register a sensor that does not exist at will.</span>
<span class="token function">log</span><span class="token punctuation">(</span>sensors<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;aaabbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="event-unsupported-sensor" tabindex="-1"><a class="header-anchor" href="#event-unsupported-sensor" aria-hidden="true">#</a> Event:&#39;unsupported_sensor&#39;</h2><ul><li><code><span class="token property">sensorName</span></code> {string} Unsupported sensor name</li></ul><p>This event is triggered when <code>sensors<span class="token punctuation">.</span>ignoresUnsupportedSensor</code> is set to <code><span class="token boolean">true</span></code> and an unsupported sensor is registered. The sensor name of the event parameter.</p><h1 id="sensoreventemitter" tabindex="-1"><a class="header-anchor" href="#sensoreventemitter" aria-hidden="true">#</a> SensorEventEmitter</h1><p>The object returned by the registered sensor is itself an EventEmitter, which is used to monitor sensor events.</p><h2 id="event-change" tabindex="-1"><a class="header-anchor" href="#event-change" aria-hidden="true">#</a> Event:&#39;change&#39;</h2><ul><li><code><span class="token punctuation">.</span><span class="token punctuation">.</span>args</code> {Any} sensor parameters</li></ul><p>This event is triggered when the sensor data changes; the maximum frequency of this event is determined by the delay parameter specified by <code>sensors<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>.</p><p>The event parameters vary according to the sensor type. For details, see the list at the top of this chapter.</p><p>An example of monitoring the light sensor and acceleration sensor and acquiring data every 0.5 seconds and finally writing it to a csv table file is as follows:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//csv file path</span>
<span class="token keyword">const</span> csvPath <span class="token operator">=</span> <span class="token string">&quot;/sdcard/sensors_data.csv&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//Record the data of the light sensor</span>
<span class="token keyword">var</span> light <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">//Record the data of the accelerometer</span>
<span class="token keyword">var</span> ax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ay <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> az <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">//Monitor light sensor</span>
sensors<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span> sensors<span class="token punctuation">.</span>delay<span class="token punctuation">.</span>fastest<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span> <span class="token parameter">l</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        light <span class="token operator">=</span> l<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//Monitor accelerometer</span>
sensors<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;accelerometer&quot;</span><span class="token punctuation">,</span> sensors<span class="token punctuation">.</span>delay<span class="token punctuation">.</span>fastest<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">ax0<span class="token punctuation">,</span> ay0<span class="token punctuation">,</span> az0</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        ax <span class="token operator">=</span> ax0<span class="token punctuation">;</span>
        ay <span class="token operator">=</span> ay0<span class="token punctuation">;</span>
        az <span class="token operator">=</span> az0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> file <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span>csvPath<span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//Write the csv table header</span>
file<span class="token punctuation">.</span><span class="token function">writeline</span><span class="token punctuation">(</span><span class="token string">&quot;light,ax,ay,az&quot;</span><span class="token punctuation">)</span>
<span class="token comment">//Get data and write to file every 0.5 seconds</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    file<span class="token punctuation">.</span><span class="token function">writeline</span><span class="token punctuation">(</span>util<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d,%d,%d&quot;</span><span class="token punctuation">,</span> light<span class="token punctuation">,</span> ax<span class="token punctuation">,</span> ay<span class="token punctuation">,</span> az<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//Exit and open the file after 10 seconds</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    file<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sensors<span class="token punctuation">.</span><span class="token function">unregisterAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    app<span class="token punctuation">.</span><span class="token function">viewFile</span><span class="token punctuation">(</span>csvPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="event-accuracy-change" tabindex="-1"><a class="header-anchor" href="#event-accuracy-change" aria-hidden="true">#</a> Event:&#39;accuracy_change&#39;</h2><ul><li><code><span class="token property">accuracy</span></code> {number} indicates the accuracy of the sensor. Is one of the following values: <ul><li>-1 The sensor is not connected</li><li>0 The sensor is not readable</li><li>1 Low accuracy</li><li>2 Medium precision</li><li>3 High precision</li></ul></li></ul><p>An event that is triggered when the accuracy of the sensor changes. Less used.</p>`,44),p=[o];function c(i,l){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","sensors.html.vue"]]);export{d as default};
