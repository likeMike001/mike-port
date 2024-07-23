
import React from 'react'

import Particles from 'react-tsparticles';
// import {loadSlim} from "tsparticles-slim"
import { loadSlim } from "tsparticles-slim";
import {useCallback} from "react"



const ParticlesI = ({backgroundColor}) => {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);
  
  const particlesLoaded = useCallback(async container => {
    await console.log(container);

  }, []);

//   const  = "#68d388"
  return (
    <div>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: backgroundColor,
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            // enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
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
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />

    </div>
  )
}

export default ParticlesI
