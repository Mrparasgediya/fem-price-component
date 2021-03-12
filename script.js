(function () {
  const billingSwitch = document.querySelector(".toggle-switch");
  const currentProgress = document.querySelector(
    ".progress-bar-line__progress"
  );
  const progressThumb = document.querySelector(".progress-bar__thumb");

  const maxProgressWidth = Math.ceil(
    Number(
      window
        .getComputedStyle(document.querySelector(".progress-bar"))
        .width.split("px")[0]
    )
  );

  initializeApp();

  billingSwitch.addEventListener("click", () => {
    billingSwitch.classList.toggle("toggle-switch--active");
  });

  document.addEventListener("keydown", (e) => {
    if (e.keyCode !== 37 && e.keyCode !== 39) return;

    if (e.keyCode === 37) {
      decreaseProgress(2);
    }
    if (e.keyCode === 39) {
      incrementProgress(2);
    }
  });

  function initializeApp() {
    progressThumb.style.left = 0;
    currentProgress.style.width = 0;
  }

  function incrementProgress(increaseCount) {
    const progressThumbNewPosition =
      Number(progressThumb.style.left.split("px")[0]) + increaseCount;
    const currentProgressNewWidth =
      Number(currentProgress.style.width.split("px")[0]) + increaseCount;

    if (
      progressThumbNewPosition < maxProgressWidth &&
      currentProgressNewWidth < maxProgressWidth
    ) {
      progressThumb.style.left = `${progressThumbNewPosition}px`;
      currentProgress.style.width = `${currentProgressNewWidth}px`;
    }
  }

  function decreaseProgress(decreaseCount) {
    const progressThumbNewPosition =
      Number(progressThumb.style.left.split("px")[0]) - decreaseCount;
    const currentProgressNewWidth =
      Number(currentProgress.style.width.split("px")[0]) - decreaseCount;

    if (progressThumbNewPosition >= 0 && currentProgressNewWidth >= 0) {
      progressThumb.style.left = `${progressThumbNewPosition}px`;
      currentProgress.style.width = `${currentProgressNewWidth}px`;
    }
  }
})();
