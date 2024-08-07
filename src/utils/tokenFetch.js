export function getTokenFromPopup(
  url,
  name = "tokenPopup",
  width = 600,
  height = 600
) {
  return new Promise((resolve, reject) => {
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const popup = window.open(
      url,
      name,
      `width=${width},height=${height},top=${top},left=${left}`
    );

    if (!popup) {
      return reject(new Error("Failed to open popup window"));
    }

    const interval = setInterval(() => {
      if (popup.closed) {
        clearInterval(interval);
        return reject(new Error("Popup closed by user"));
      }
      try {
        const popupUrl = new URL(popup.location.href);
        const token = popupUrl.searchParams.get("token");
        if (token) {
          clearInterval(interval);
          popup.close();
          resolve(token);
        }
      } catch (error) {
        console.log(error);
      }
    }, 1500);
  });
}
