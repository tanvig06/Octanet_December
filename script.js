    gsap.to(".imgcontainer", {
        ease: Expo.easeInOut,
        width: "100%",
        duration:1.8,
        stagger:2,
    })

    gsap.to(".text h1",{
        ease: Expo.easeInOut,
        stagger:2,
        top: 0
    })

    gsap.to(".text h1",{
        ease: Expo.easeInOut,
        stagger:2,
        top: -110,
        delay : 2,
    })
