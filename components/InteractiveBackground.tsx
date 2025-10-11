import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import type { IParticlesProps } from 'react-tsparticles';

const InteractiveBackground: React.FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const options: IParticlesProps['options'] = {
        background: {
            color: {
                value: '#0a0f18',
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: '#0891b2', // tailwind cyan-600
            },
            links: {
                color: '#0891b2',
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'out',
                },
                random: true,
                speed: 0.5,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.2,
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: { min: 1, max: 2 },
            },
        },
        detectRetina: true,
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={options}
            />
        </div>
    );
};

export default InteractiveBackground;