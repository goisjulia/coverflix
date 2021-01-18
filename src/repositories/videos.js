import config from '../config';

const URL_VIDEOS = `${config.URL_BASE}/videos`;

function create(video) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        const retorno = await response.json();
        return retorno;
      }
      throw new Error(await response.status);
    });
}

function getAll() {
  return fetch(`${URL_VIDEOS}`)
    .then(async (response) => {
      if (response.ok) {
        const retorno = await response.json();
        return retorno;
      }
      throw new Error(await response.status);
    });
}

export default {
  create,
  getAll,
};
