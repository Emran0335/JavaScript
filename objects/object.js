const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#e0e0e0",
  },
  primary: {
    //blue
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
  },
  secondary: {
    //yellow:
    50: "#f0f0f0",
    100: "#fff6e0",
    200: "#ffedc2",
  },
};
/* Object.entries(token)
[
  [
    'grey',
    {
      '0': '#ffffff',
      '10': '#f6f6f6',
      '50': '#f0f0f0',
      '100': '#e0e0e0',
    }
  ],
  [
    'primary',
    {
      '100': '#d3d4de',
      '200': '#a6a9be',
      '300': '#7a7f9d',
    }
  ],
  [
    'secondary',
    {
      '50': '#f0f0f0',
      '100': '#fff6e0',
      '200': '#ffedc2',
    }
  ]
]
*/
function reverseTokens(token) {
    const reversedTokens = {};
    Object.entries(token).forEach(([key, val]) => {
      /*
        console.log("ForEachKey: ", key, "ForEachVal: ", val);
        ForEachKey:  grey ForEachVal:  {
        '0': '#ffffff',
        '10': '#f6f6f6',
        '50': '#f0f0f0',
        '100': '#e0e0e0',
        }
        ForEachKey:  primary ForEachVal:  {
        '100': '#d3d4de',
        '200': '#a6a9be',
        '300': '#7a7f9d',
        }
        ForEachKey:  secondary ForEachVal:  {
        '50': '#f0f0f0',
        '100': '#fff6e0',
        '200': '#ffedc2',
        }
        */
      /*
        const keys = Object.keys(val);
        console.log("all keys of ForEachVal: ", keys);
        all keys of ForEachVal [ '0', '10', '50', '100' ]
        all keys of ForEachVal [ '100', '200', '300' ]
        all keys of ForEachVal [ '50', '100', '200' ]
        */

      /*
       const values = Object.values(val);
        console.log("all values of ForEachVal", values);
        all values of ForEachVal [ '#ffffff', '#f6f6f6', '#f0f0f0', '#e0e0e0' ]
        all values of ForEachVal [ '#d3d4de', '#a6a9be', '#7a7f9d' ]
        all values of ForEachVal [ '#f0f0f0', '#fff6e0', '#ffedc2' ]
        */
      const keys = Object.keys(val);
      const values = Object.values(val);
      const length = keys.length;
      // console.log(length); firstOne length is = 4, secondOne = 3, thirdOne = 3
      const reversedObj = {};
      for (let i = 0; i < length; i++) {
        reversedObj[keys[i]] = values[length - i - 1];
      }
      reverseTokens[key] = reversedObj;
      /*
         grey: {
        '0': '#e0e0e0',
        '10': '#f0f0f0',
        '50': '#f6f6f6',
        '100': '#ffffff'
        },
        primary: { '100': '#7a7f9d', '200': '#a6a9be', '300': '#d3d4de' },
        secondary: { '50': '#ffedc2', '100': '#fff6e0', '200': '#f0f0f0' }
        }
        */
    });
    return reverseTokens;
}

const result = reverseTokens(tokensDark);
console.log(result);
