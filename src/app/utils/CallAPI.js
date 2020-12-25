import { handleError } from './handleAPIData';

// eslint-disable-next-line consistent-return
export default async (resource) => {
  const response = await fetch(resource, {
    mode: 'cors',
  });
  if (!response.ok) {
    handleError();
  } else {
    const data = await response.json();
    return data;
  }
};
