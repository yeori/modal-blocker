function deleteModal(cnt: number) {
  const currentBlockers = document.querySelectorAll(".blocker.current");
  console.log("# of blocks", currentBlockers.length);
  currentBlockers.forEach((element) => element.remove());
  const behindBlockers = document.querySelectorAll(".blocker.behind");
  console.log("# of blocks", behindBlockers.length);
  behindBlockers.forEach((element) => element.remove());
  if (cnt > 0) {
    setTimeout(deleteModal, 500, cnt - 1);
  } else {
    document.body.style.overflow = "unset";
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => deleteModal(1));
} else {
  deleteModal(1);
}
