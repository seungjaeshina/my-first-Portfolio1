

// 페이지가 로드될 때 로딩 화면을 숨김
window.addEventListener('load', function() {
    var loadingScreen = document.querySelector('.loading-screen');
    var content = document.querySelector('.content');

    // 로딩 화면 표시
    loadingScreen.style.display = 'flex';

    // 일정 시간이 지난 후에 숨김
    setTimeout(function() {
        loadingScreen.style.display = 'none';
        content.style.display = 'block'; // 실제 내용 표시
    }, 500); // 로딩 화면을 보여줄 시간(단위: 밀리초)
});