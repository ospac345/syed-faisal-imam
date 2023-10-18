'use client'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from '@mui/material/styles';

const AnimatedBackground = () => {

    const theme = useTheme();

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        //console.log(container);
    }, []);

    return (
        <>
            <Particles
                className="animated-background"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    name: "Images",
                    fpsLimit: 60,
                    particles: {
                        color: {
                            value: theme.palette.particles.main,
                        },
                        move: {
                            enable: true,
                            speed: 1,
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            limit: 0,
                            value: 50,
                        },
                        opacity: {
                            value: 0.3,
                        },
                        rotate: {
                            animation: {
                                enable: true,
                                speed: 5,
                                sync: false,
                            },
                            direction: "random",
                            value: {
                                min: 0,
                                max: 360,
                            },
                        },
                        shape: {
                            character: [
                                {
                                    fill: true,
                                    font: "menlo",
                                    value: ['{}',
                                        '[]',
                                        '()',
                                        ';',
                                        'let',
                                        'const',
                                        'var',
                                        'function',
                                        '=>',
                                        'if',
                                        'else',
                                        'for',
                                        'while',
                                        'do-while',
                                        'switch',
                                        'case',
                                        'break',
                                        'return',
                                        'class',
                                        'import',
                                        'export',
                                        'module.exports',
                                        'require',
                                        'async',
                                        'await',
                                        'try',
                                        'catch',
                                        'throw',
                                        'true',
                                        'false',
                                        'null',
                                        'undefined',
                                        'NaN',
                                        'typeof',
                                        'instanceof',
                                        'new',
                                        'this',
                                        'super',
                                        '...rest',
                                        '...spread',
                                        '=>',
                                        '===',
                                        '!==',
                                        '==',
                                        '!=',
                                        '<',
                                        '>',
                                        '<=',
                                        '>=',
                                        '+',
                                        '-',
                                        '*',
                                        '/',
                                        '%',
                                        '&&',
                                        '||',
                                        '!',
                                        '&',
                                        '|',
                                        '^',
                                        '~',
                                        '<<',
                                        '>>',
                                        '>>>',
                                        '+=',
                                        '-=',
                                        '*=',
                                        '/=',
                                        '%=',
                                        '<<=',
                                        '>>=',
                                        '>>>=',
                                        '&=',
                                        '|=',
                                        '^=',
                                        '?',
                                        ':',
                                        '::',
                                        '...args',
                                        'async () => {}',
                                        '() => {}',
                                        '(arg1, arg2) => {}',
                                        ,],
                                    style: "",
                                    weight: 700,
                                }
                            ],
                            polygon: { nb_sides: 5 },
                            stroke: { color: "random", width: 1 },
                            type: "char"
                        },
                        size: {
                            value: 19,
                        },
                    },
                    background: {
                        color: theme.palette.background.default,
                    },
                }}
            />
        </>
    );
};

export default AnimatedBackground;


