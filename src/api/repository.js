import Api from './index'

export const getRepository = async (urlEnding) => {
  const resp = await Api.get(`/repos/${urlEnding}`)
  console.log(resp);
};

// "https://api.github.com/repos/{owner}/{repo}"