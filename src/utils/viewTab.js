export function viewTab(baseUrl, userData, jwtToken) {

  // Uncomment below line on server side
  // const domain = import.meta.env.VITE_FRONTEND_BASE_URL;
  // document.cookie = `jwtToken=${jwtToken}; path=/; domain=${domain}`;
  document.cookie = `jwtToken=${jwtToken}; path=/`;

  const url = `${baseUrl}/public/projects/users/${userData}/index.html`;

  window.open(
    url,
    "Preview",
    "location=no,toolbar=no,menubar=no,scrollbars=no,fullscreen=yes"
  );
}
