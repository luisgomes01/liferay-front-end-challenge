import api from './index'

export const getRepository = async (urlEnding) => {
  const resp = await api.get(`/repos/${urlEnding}`)
  return resp.data;
};

// "https://api.github.com/repos/{owner}/{repo}"