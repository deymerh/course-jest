export const getDada = (api)=>{
  return fetch(api)
            .then(res => res.json())
            .then(res => res)
            .catch(er => er)
}