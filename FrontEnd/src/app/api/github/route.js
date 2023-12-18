/* const getData = async () => {
  return await fetch(
    `https://api.github.com/repos/Jandres373/${selectedProject}/commits`,
    {
      owner: "jandres373",
      repo: selectedProject,
      method: "GET",
      headers: {
        Authorization: `berer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  ).catch((error) => {
    console.error("Error en la solicitud:", error);
  });
};

if (selectedProject) {
  getData().then((resp) => console.log(resp));
}
 */