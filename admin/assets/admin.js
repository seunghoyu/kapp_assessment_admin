function mockSubmit(message) {
  window.alert(message || "테스트 환경에서 저장되었습니다.");
}

function confirmDelete(message) {
  if (window.confirm(message || "삭제하시겠습니까?")) {
    window.alert("테스트 환경에서 삭제되었습니다.");
  }
}

function loginAdmin(event) {
  event.preventDefault();
  const id = document.querySelector("#admin-id").value;
  const pw = document.querySelector("#admin-pw").value;
  if (id === "admin" && pw === "admin1234") {
    window.location.href = "./content-create.html";
    return;
  }
  window.alert("임시 계정은 admin / admin1234 입니다.");
}
