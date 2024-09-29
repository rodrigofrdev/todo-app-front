export function showToast(toastInstance, severity, summary, detail) {
  toastInstance.add({
    severity,
    summary,
    detail,
    life: 3000,
  });
}
