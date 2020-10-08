//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => 
{
  let orbital
  const earthSeconds = 31557600
  switch (planet.toLowerCase()) 
  {
    case "mercury":
    orbital = 0.2408467
    break

    case "venus":
    orbital = 0.61519726
    break

    case "earth":
    orbital = 1.0
    break

    case "mars":
    orbital = "1.8808158"
    break

    case "jupiter":
      orbital = 11.862615
      break

    case "saturn":
      orbital = 29.447498
      break

    case "uranus":
      orbital = 84.016846
      break

    case "neptune":
      orbital = 164.79132
      break

    default:
      orbital = 1.0
  } 
//let earthYears = ( seconds<--planet second like jupital / earth seconds/orbital)
    let earthYears = (seconds/earthSeconds)/ orbital
    
    // (2) means second position , round to the nearest decimal place
    return parseFloat(earthYears.toFixed(2))  
}

// - Mercury: orbital period 0.2408467 Earth years
//- Venus: orbital period 0.61519726 Earth years
//- Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
//- Mars: orbital period 1.8808158 Earth years
//- Jupiter: orbital period 11.862615 Earth years
//- Saturn: orbital period 29.447498 Earth years
//- Uranus: orbital period 84.016846 Earth years
//- Neptune: orbital period 164.79132 Earth years
//round to the nearest decimal place