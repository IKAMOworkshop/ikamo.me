import { portableTextToHtml } from 'astro-sanity';
import { urlForImage } from './urlForImage';

const customComponents = {
  /* your custom components here */
    types: {
    image: ({value}) => `<img src="${urlForImage(value).url()}" class="image content-hidden"/>`,
    },
};

export function sanityPortableText(portabletext) {
    return portableTextToHtml(portabletext, customComponents);
}