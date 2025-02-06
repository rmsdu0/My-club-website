console.log("Discover. Culture. Innovate.");

// 게시글 작성 및 표시 기능
document.getElementById("post-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("student-name").value;
    const title = document.getElementById("experiment-title").value;
    const description = document.getElementById("experiment-description").value;

    // 게시글 생성
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `
        <h3>${title}</h3>
        <p><strong>By:</strong> ${name}</p>
        <p>${description}</p>
    `;

    // 게시글 목록에 추가
    document.getElementById("post-list").prepend(post);

    // 입력 폼 초기화
    document.getElementById("student-name").value = "";
    document.getElementById("experiment-title").value = "";
    document.getElementById("experiment-description").value = "";
});