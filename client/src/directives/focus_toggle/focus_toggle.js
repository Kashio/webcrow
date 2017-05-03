export const focusToggle = {
  update: (el, binding) => {
    if (binding.value) {
      el.focus();
    }
  }
};
