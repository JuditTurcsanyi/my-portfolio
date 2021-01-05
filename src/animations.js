export const pageAnimation = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {duration:0.75},
    },
    exit: {
        opacity: 0.75,
        transition: {duration:0.75},
    }
}

export const imgAnimation = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    }
}

export const componentsAnimation = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 1,
        },
    },
    exit: {
        opacity: 0.75,
        transition: {duration:0.75},
    }
}

export const component = {
    hidden: {
        opacity: 0,
        x: 1000,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration:1,
        }
    }
  }

  export const projectAnimation = {
    hidden: {
        y: 1000,
    },
    show: {
        y: 0,
        transition: {
            duration:1,
        },
    },
    exit: {
        opacity: 0.75,
        transition: {duration:0.75},
    }
}

export const introAnimation = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
    exit: {
        opacity: 0.75,
        transition: {duration:0.75},
    }
}

export const item = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration:1,
        }
    }
  }  