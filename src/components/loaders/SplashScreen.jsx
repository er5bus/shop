import React from 'react'


const SplashScreen = () => {

  React.useEffect(() => {
    const splashScreen = document.getElementById("splash-screen")

    // Show SplashScreen
    splashScreen.classList.remove("hidden")

    return () => {
      splashScreen.classList.add("hidden")
    }
  })
  
  return null
}


export default SplashScreen
