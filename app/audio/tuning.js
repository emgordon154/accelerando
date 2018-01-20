// This file is pretty much unnecessary if using standard 12-tone equal temperament.
// I just thought it might be fun to play around with unusual tunings.

// fHR stands for fundamental harmonic ratio
// e.g. 2 for octaves as usual, 3 for tritaves in the Bohlen-Pierce scale, etc.

// 440Hz is A4, right? probably don't want to have to pass in frequencies in Hertz,
// so i should revise this function to accept note names
// although that wouldn't really make sense for unusual tuning systems anyway

export function chromaticETScale(root=440, steps, fHR) {
  return Array.from(
    {length: steps},
    (_, stepsUp) => root * fHR ** (stepsUp / steps)
  )
}