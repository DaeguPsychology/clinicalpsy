/* =========================================================
   임상심리연구소 — 공통 레이아웃 (상단 메뉴 · 하단 푸터)
   ---------------------------------------------------------
   상단 메뉴나 주소·연락처를 바꾸려면 이 파일만 수정하면
   모든 페이지에 한 번에 반영됩니다.
   각 페이지에는 <div id="site-header"></div> 와
   <div id="site-footer"></div> 자리표시자만 있으면 됩니다.
   ========================================================= */
(function(){
  // 현재 페이지 파일명 (예: members.html)
  var page = (location.pathname.split('/').pop() || 'index.html');
  if(page === '') page = 'index.html';

  // 상단 메뉴 항목 (여기서 메뉴를 추가·수정하세요)
  var NAV = [
    { href: 'index.html',      label: '연구소 소개' },
    { href: 'members.html',    label: '구성원' },
    { href: 'activities.html', label: '연구소 활동', match: ['activities.html', 'notice.html'] },
    { href: 'location.html',   label: '오시는 길' },
  ];

  var gnb = NAV.map(function(item){
    var pages = item.match || [item.href];
    var active = pages.indexOf(page) !== -1 ? ' class="active"' : '';
    return '<a href="' + item.href + '"' + active + '>' + item.label + '</a>';
  }).join('\n      ');

  var header =
'<div class="utility">' +
'  <div class="wrap">' +
'    <div class="u-left">' +
'      <a href="https://www.daegu.ac.kr" target="_blank">대구대학교</a>' +
'      <a href="https://psychology.daegu.ac.kr" target="_blank">심리학과</a>' +
'    </div>' +
'    <div class="u-right"></div>' +
'  </div>' +
'</div>' +
'<header>' +
'  <div class="wrap header-inner">' +
'    <a href="index.html" class="brand">' +
'      <img class="emblem-img" src="symbol_6.jpg" alt="대구대학교 임상심리연구소 로고"' +
'           onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
'      <span class="emblem" style="display:none">DU</span>' +
'      <span class="b-text"><strong>임상심리연구소</strong></span>' +
'    </a>' +
'    <nav class="gnb">\n      ' + gnb + '\n    </nav>' +
'    <button class="burger" onclick="document.querySelector(\'.gnb\').style.display=\'flex\';this.style.display=\'none\'">&#9776;</button>' +
'  </div>' +
'</header>';

  var footer =
'<footer>' +
'  <div class="wrap">' +
'    <div class="foot-top">' +
'      <div class="foot-info">' +
'        <div class="foot-logo">대구대학교 임상심리연구소</div>' +
'        <p>경상북도 경산시 대구대로 201 대구대학교 교수연구동 1105호 임상심리연구소<br>' +
'           TEL 053-850-6365 · kh.kim@daegu.ac.kr</p>' +
'      </div>' +
'      <div class="foot-links">' +
'        <a href="index.html">연구소 소개</a>' +
'        <a href="members.html">구성원</a>' +
'        <a href="activities.html">연구소 활동</a>' +
'        <a href="location.html">오시는 길</a>' +
'      </div>' +
'    </div>' +
'    <p class="copy">COPYRIGHT &copy; 2026 DAEGU UNIVERSITY CENTER FOR CLINICAL PSYCHOLOGY. ALL RIGHTS RESERVED.</p>' +
'  </div>' +
'</footer>';

  var h = document.getElementById('site-header');
  if(h) h.innerHTML = header;
  var f = document.getElementById('site-footer');
  if(f) f.innerHTML = footer;
})();
