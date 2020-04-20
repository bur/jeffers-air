/**
 * This script is taken from:
 * https://www.netlifycms.org/docs/add-to-your-site/#add-the-netlify-identity-widget
 */

  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
