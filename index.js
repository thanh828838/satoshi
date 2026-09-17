module.exports = {
  onLoad: () => {
    const style = document.createElement("style");
    style.id = "xanh-theme";
    style.innerHTML = `
      /* Đổi nền toàn bộ app sang xanh đậm */
      body, .theme-dark, .bg-base-primary, .bg-base-secondary, .chatContent-a9vAAp, .sidebar-1tnWFu, .container-1D34oG {
        background-color: #1A3A5C !important;
      }
      /* Đổi màu chữ sang xanh nhạt */
      .theme-dark .text-normal, .theme-dark span, .theme-dark div {
        color: #E0F0FF !important;
      }
      /* Đổi màu thanh nhập tin nhắn */
      .theme-dark .textArea-2CLwUE, .theme-dark .scrollableContainer-15eg7h {
        background-color: #2A4B7C !important;
      }
    `;
    document.head.appendChild(style);
  },
  onUnload: () => {
    const style = document.getElementById("xanh-theme");
    if (style) style.remove();
  }
};
