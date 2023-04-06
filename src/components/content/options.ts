

export const options = {
    background: {
        color: {
            value: '#f6f6f6'
        }
    },
    fpsLimit:120,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: 'push'
            },
            onHover: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: '#32de72'
        },
        links: {
            color: '#32de72',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 6,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 1500
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: 'circle'
        },
        size: {
            random: false,
            value: 5
        }
    },
    detectRetina: true
}