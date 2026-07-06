import StyleDictionary from 'style-dictionary';
import { register, expandTypesMap } from '@tokens-studio/sd-transforms';

register(StyleDictionary, {
  platform: 'css',
});

export default {
  usesDtcg: true,

  source: [
    'tokens/Colour/Primitive/Mode 1.json',
    'tokens/Colour/Semantic/Light.json',
  ],

  preprocessors: ['tokens-studio'],

  expand: {
    typesMap: expandTypesMap,
  },

  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
  },
};