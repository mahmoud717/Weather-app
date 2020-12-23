import { handleError } from './handleAPIData';

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
