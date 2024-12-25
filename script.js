<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px Courier; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px Courier; -webkit-text-stroke: #000000; min-height: 16.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">// 상호작용 이미지 가져오기</span></p>
<p class="p1"><span class="s1">const gregP = document.getElementById('gregP');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// 움직임 애니메이션 상태 관리</span></p>
<p class="p1"><span class="s1">let isAnimating = false;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// 클릭 이벤트 핸들러</span></p>
<p class="p1"><span class="s1">gregP.addEventListener('click', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>if (isAnimating) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gregP.style.animation = 'none'; // 애니메이션 정지</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>gregP.style.animation = 'spin 2s infinite linear'; // 애니메이션 시작</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>isAnimating = !isAnimating; // 상태 반전</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// 회전 애니메이션 정의</span></p>
<p class="p1"><span class="s1">document.styleSheets[0].insertRule(`</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>@keyframes spin {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>from { transform: rotate(0deg); }</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>to { transform: rotate(360deg); }</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1">`, 0);</span></p>
</body>
</html>
