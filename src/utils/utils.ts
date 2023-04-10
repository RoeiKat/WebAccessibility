export const writeToLocalStorage = function (state: any) {
  localStorage.setItem(
    "accessibility",
    JSON.stringify({
      state,
    })
  );
};

export const highlightAllLinks = function (state: boolean) {
  const elements = document.getElementsByTagName("a");
  if (state) {
    for (let i = 0; i <= elements.length - 1; i++) {
      elements[i].classList.add("highlighted-link");
    }
  } else {
    for (let i = 0; i <= elements.length - 1; i++) {
      elements[i].classList.remove("highlighted-link");
    }
  }
};

export const highlightAllHeaders = function (state: boolean) {
  for (let i = 1; i <= 6; i++) {
    const elements = document.getElementsByTagName(`h${i}`);
    for (let i = 0; i <= elements.length - 1; i++) {
      if (state) {
        elements[i].classList.add("highlighted-heading");
      } else {
        elements[i].classList.remove("highlighted-heading");
      }
    }
  }
};
