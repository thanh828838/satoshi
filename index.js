module.exports = {
  onLoad: () => {
    // Nhúng font Satoshi
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.cdnfonts.com/css/satoshi";
    fontLink.rel = "stylesheet";
    fontLink.id = "satoshi-font";
    document.head.appendChild(fontLink);

    // Ghi đè màu + ảnh nền
    const style = document.createElement("style");
    style.id = "sky-blue-theme";
    style.innerHTML = `
      /* Đổi font toàn bộ app */
      * {
        font-family: 'Satoshi', sans-serif !important;
      }

      /* Bảng màu xanh da trời */
      :root {
        --brand-experiment: #4A90D9 !important;
        --brand-experiment-560: #3A7BC8 !important;
        --background-primary: #0D1B2A !important;
        --background-secondary: #1B2A3B !important;
        --background-tertiary: #2A3F55 !important;
        --text-normal: #D6E8FF !important;
        --header-primary: #A8D0FF !important;
        --interactive-normal: #7EB8E8 !important;
      }

      /* Ảnh nền toàn app */
      .theme-dark {
        background-image: url('https://i.ibb.co/YFhVBpvj/IMG20260121174656.jpg') !important;
        background-size: cover !important;
        background-position: center !important;
        background-attachment: fixed !important;
      }

      /* Làm mờ khung để thấy nền */
      .theme-dark .container-1D34oG,
      .theme-dark .chatContent-a9vAAp,
      .theme-dark .sidebar-1tnWFu {
        background-color: rgba(13, 27, 42, 0.75) !important;
        backdrop-filter: blur(8px) !important;
      }
    `;
    document.head.appendChild(style);
  },
  onUnload: () => {
    const style = document.getElementById("sky-blue-theme");
    const font = document.getElementById("satoshi-font");
    if (style) style.remove();
    if (font) font.remove();
  }
};
