const URL = "https://api.github.com/orgs/Adalab/repos";

const fetchRepos = () => {
  return fetch(URL).then(res => res.json());
};

export default fetchRepos;