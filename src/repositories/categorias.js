import config from '../config';

const URL_CATEGORIES = `${config.URL_BASE}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const retorno = await response.json();
        return retorno;
      }
      throw new Error(await response.status);
    });
}

function getWithVideos(categoriaId) {
  return fetch(`${URL_CATEGORIES}?id=${categoriaId}&_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const retorno = await response.json();
        return retorno;
      }
      throw new Error(await response.status);
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const retorno = await response.json();
        return retorno;
      }
      throw new Error(await response.status);
    });
}

function create(categoria) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(categoria),
  }).then(async (response) => {
    if (response.ok) {
      const retorno = await response.json();
      return retorno;
    }
    throw new Error(await response.status);
  });
}

function deleteOne(categoriaId) {
  return fetch(`${URL_CATEGORIES}/${categoriaId}`, {
    method: 'DELETE',
  }).then(async (response) => {
    if (response.ok) {
      const retorno = await response.json();
      return retorno;
    }
    throw new Error(await response.status);
  });
}

export default {
  getAllWithVideos,
  getWithVideos,
  getAll,
  create,
  deleteOne,
};
