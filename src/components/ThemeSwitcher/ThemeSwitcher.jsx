import React, {useState} from "react";
import "../ThemeSwitcher/ThemeSwitcher.css";

// Define the themes in an object using their CSS values
const themes = {
    dark: {
        /* Default Theme Colors */
        '--main-bg-color': 'hsl(222, 26%, 31%)',

        /* Display Colors */
        '--display-text-color': 'hsl(0, 0%, 100%)',
        '--display-bg-color': 'hsl(224, 36%, 15%)',
        '--display-border-color': 'hsl(224, 36%, 15%)',

        /* Calculator Colors*/
        '--calculator-body-color': 'hsl(223, 31%, 20%)',
        '--calculator-body-border-color': 'hsl(223, 31%, 20%)',

        /* Buttons Colors */
        '--button-number-bg-color': 'hsl(30, 25%, 89%)',
        '--button-number-text-color': 'hsl(221, 14%, 31%)',
        '--button-number-box-shadow': 'hsl(28, 16%, 65%)',
        '--button-number-hover-color': '#FFFFFF',

        /* Button Operation Colors */
        '--button-operation-bg-color': 'hsl(30, 25%, 89%)',
        '--button-operation-text-color': 'hsl(221, 14%, 31%)',
        '--button-operation-box-shadow': 'hsl(28, 16%, 65%)',
        '--button-operation-hover-color': '#FFFFFF',

        /* Button Delete Colors */
        '--button-delete-bg-color': '#647299',
        '--button-delete-text-color': '#FDFFFF',
        '--button-delete-box-shadow': 'hsl(224, 28%, 35%)',
        '--button-delete-hover-color': '#A1B3E1',

        /* Button Reset Colors */
        '--button-reset-bg-color': '#647299',
        '--button-reset-text-color': '#FDFFFF',
        '--button-reset-box-shadow': 'hsl(224, 28%, 35%)',
        '--button-reset-hover-color': '#A1B3E1',

        /* Button Equal Colors */
        '--button-equal-bg-color': 'hsl(6, 63%, 50%)',
        '--button-equal-text-color': '#FFFFF7',
        '--button-equal-box-shadow': 'hsla(6, 70%, 34%, 0.678)',
        '--button-equal-hover-color': '#F96C5B',

        /* ThemeSwitcher Colors */
        '--title-text-color': 'hsl(0, 0%, 100%)',
        '--themes-text-color': 'hsl(0, 0%, 100%)',
        '--switch-body-bg-color': '#252D45',
        '--switch-bg-color': '#D23F2B',
        '--switch-hover-color': '#F76C5D',
        '--theme-title-text-color': 'hsl(0, 0%, 100%)',
    },

    light: {
                /* Default Theme Colors */
                '--main-bg-color': 'hsl(0, 0%, 90%)',

                /* Display Colors */
                '--display-text-color': '#393833',
                '--display-bg-color': 'hsl(0, 0%, 93%)',
                '--display-border-color': 'hsl(0, 0%, 93%)',
        
                /* Calculator Colors*/
                '--calculator-body-color': '#D3CDCD',
                '--calculator-body-border-color': '#D3CDCD',
        
                /* Buttons Colors */
                '--button-number-bg-color': '#E5E4E0',
                '--button-number-text-color': '#34342D',
                '--button-number-box-shadow': '#A69C92',
                '--button-number-hover-color': '#FFFFFF',
        
                /* Button Operation Colors */
                '--button-operation-bg-color': '#E5E4E0',
                '--button-operation-text-color': '#34342D',
                '--button-operation-box-shadow': '#A69C92',
                '--button-operation-hover-color': '#FFFFFF',
        
                /* Button Delete Colors */
                '--button-delete-bg-color': '#398087',
                '--button-delete-text-color': '#FBFFFF',
                '--button-delete-box-shadow': '#1C5B64',
                '--button-delete-hover-color': '#61B5BC',
        
                /* Button Reset Colors */
                '--button-reset-bg-color': '#398087',
                '--button-reset-text-color': '#FBFFFF',
                '--button-reset-box-shadow': '#1C5B64',
                '--button-reset-hover-color': '#61B5BC',
        
                /* Button Equal Colors */
                '--button-equal-bg-color': '#C85401',
                '--button-equal-text-color': '#FFFBEF',
                '--button-equal-box-shadow': '#883A01',
                '--button-equal-hover-color': '#FF8B38',
        
                /* ThemeSwitcher Colors */
                '--title-text-color': '#2F2F2D',
                '--themes-text-color': '#2F2F2D',
                '--switch-body-bg-color': '#D3CDCD',
                '--switch-bg-color': '#CA5603',
                '--switch-hover-color': '#FE893D',
                '--theme-title-text-color': '#2F2F2D',
    },

    midnight: {
                /* Default Theme Colors */
                '--main-bg-color': '#17062A',

                /* Display Colors */
                '--display-text-color': 'hsl(52, 100%, 62%)',
                '--display-bg-color': '#1E0836',
                '--display-border-color': '#1A052D',
        
                /* Calculator Colors*/
                '--calculator-body-color': '#1E0836',
                '--calculator-body-border-color': '#1A052D',
        
                /* Buttons Colors */
                '--button-number-bg-color': '#331b4d',
                '--button-number-text-color': 'hsl(52, 100%, 62%)',
                '--button-number-box-shadow': '#851C9D',
                '--button-number-hover-color': '#6B34AC',
        
                /* Button Operation Colors */
                '--button-operation-bg-color': '#331b4d',
                '--button-operation-text-color': 'hsl(52, 100%, 62%)',
                '--button-operation-box-shadow': '#851C9D',
                '--button-operation-hover-color': '#6B34AC',
        
                /* Button Delete Colors */
                '--button-delete-bg-color': '#56077C',
                '--button-delete-text-color': 'hsl(0, 0%, 100%)',
                '--button-delete-box-shadow': '#BF15F4',
                '--button-delete-hover-color': '#8731AF',
        
                /* Button Reset Colors */
                '--button-reset-bg-color': '#56077C',
                '--button-reset-text-color': 'hsl(0, 0%, 100%)',
                '--button-reset-box-shadow': '#BF15F4',
                '--button-reset-hover-color': '#8731AF',
        
                /* Button Equal Colors */
                '--button-equal-bg-color': '#00DECF',
                '--button-equal-text-color': '#03282B',
                '--button-equal-box-shadow': '#6DF7EF',
                '--button-equal-hover-color': '#94FFF9',
        
                /* ThemeSwitcher Colors */
                '--title-text-color': 'hsl(52, 100%, 62%)',
                '--themes-text-color': 'hsl(52, 100%, 62%)',
                '--switch-body-bg-color': '#1E0837',
                '--switch-bg-color': '#08DBD4',
                '--switch-hover-color': '#94FFFF',
                '--theme-title-text-color': 'hsl(52, 100%, 62%)',
    }
}

function ThemeSwitcher() {
    // Initialize the default theme to "dark" and theme number to 1
    const [theme, setTheme] = useState('dark');
    // Set initial theme number to 1
    const [themeNumber, setThemeNumber] = useState(1);

    // Define a function named "handleThemeChange" which changes the current theme
    const handleThemeChange = () => {
        // If theme is dark switch to light and change the number
        switch (theme) {
            case 'dark':
                setTheme('light');
                setThemeNumber(2);
                break;

        // If theme is light switch to midnight and change the number
            case 'light':
                setTheme('midnight');
                setThemeNumber(3);
                break;

        // If theme is midnight switch to dark and change the number
            case 'midnight':
            default:
                setTheme('dark');
                setThemeNumber(1);
        }
    }
    
    // Update the CSS variables when the theme changes
    React.useEffect(() => {
        // For all CSS variable in the current theme, set the CSS variable of the root HTML element to the value in the theme.
        for (let cssVariable in themes[theme]) {
            document.documentElement.style.setProperty(cssVariable, themes[theme][cssVariable]);
        }
    }, [theme]);

    return (
        <div className="switch-container">
            <h1 className="title">calc</h1>
            <div className="themes">
                <div className="dark">1</div>
                <div className="light">2</div>
                <div className="midnight">3</div>
            </div>

            <div onClick={handleThemeChange} className="switch-body">
                <div className={`switch ${theme}`}></div>
                <h2 className="theme-title">THEME {themeNumber}</h2>
            </div>
        </div>
    );
}

export default ThemeSwitcher;