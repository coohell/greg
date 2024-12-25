// 상호작용 이미지 가져오기
const gregP = document.getElementById('gregP');

// 움직임 애니메이션 상태 관리
let isAnimating = false;

// 클릭 이벤트 핸들러
gregP.addEventListener('click', () => {
  if (isAnimating) {
    gregP.style.animation = 'none'; // 애니메이션 정지
  } else {
    gregP.style.animation = 'spin 2s infinite linear'; // 애니메이션 시작
  }
  isAnimating = !isAnimating; // 상태 반전
});

// 회전 애니메이션 정의
document.styleSheets[0].insertRule(`
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`, 0);
