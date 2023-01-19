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

const another =(mode)=> {
    return {
        mode: mode,
        pallete: {
            ...(mode === 'dark' ? {
                ...tokensDark,
                main: tokensDark.grey[0]
            }: {
                ...tokensDark,
                default: tokensDark.secondary[50]
            })
        } 
    }
}

/*
console.log(another('dark'));
{
  mode: 'dark',
  pallete: {
    grey: {
      '0': '#ffffff',
      '10': '#f6f6f6',
      '50': '#f0f0f0',
      '100': '#e0e0e0'
    },
    primary: { '100': '#d3d4de', '200': '#a6a9be', '300': '#7a7f9d' },
    secondary: { '50': '#f0f0f0', '100': '#fff6e0', '200': '#ffedc2' },
    main: '#ffffff'
  }
}
*/

/*
console.log(another('light'));
{
  mode: 'light',
  pallete: {
    grey: {
      '0': '#ffffff',
      '10': '#f6f6f6',
      '50': '#f0f0f0',
      '100': '#e0e0e0'
    },
    primary: { '100': '#d3d4de', '200': '#a6a9be', '300': '#7a7f9d' },
    secondary: { '50': '#f0f0f0', '100': '#fff6e0', '200': '#ffedc2' },
    default: '#f0f0f0'
  }
}
*/

// object can be found in another function if you destructure it 
const myFuncWithObj = () => {
    return {
        pallete: {
            ...tokensDark,
            main: tokensDark.grey[0],
            default: tokensDark.secondary[50]
        }
    }
}
/*
console.log(myFuncWithObj());
{
  pallete: {
    grey: {
      '0': '#ffffff',
      '10': '#f6f6f6',
      '50': '#f0f0f0',
      '100': '#e0e0e0'
    },
    primary: { '100': '#d3d4de', '200': '#a6a9be', '300': '#7a7f9d' },
    secondary: { '50': '#f0f0f0', '100': '#fff6e0', '200': '#ffedc2' },
    main: '#ffffff',
    default: '#f0f0f0'
  }
}
*/
