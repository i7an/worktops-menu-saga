const colours = {
  ['Luxury Laminate']: ['Colour 11', 'Colour 12'],
  Timber: ['Colour 21', 'Colour 22', 'Colour 23']
}

const edgeColours = {
  ['Luxury Laminate']: {
    ['Colour 11']: ['Edge Colour 1'],
    ['Colour 12']: ['Edge Colour 2']
  },
  Timber: {
    ['Colour 21']: ['Edge Colour 3'],
    ['Colour 22']: ['Edge Colour 4'],
    ['Colour 23']: ['Edge Colour 5']
  }
}

export function getSurfaceColours(material) {
  return new Promise(resolve => {
    setTimeout(()=> resolve(colours[material] || []), 1000)
  })
}

export function getEdgeColours(material, surfaceColour) {
  return new Promise((resolve, reject) => {
    if (material && surfaceColour) {
      console.log(material, surfaceColour)
      setTimeout(() => {
        resolve(edgeColours[material][surfaceColour] || [])
      }, 1000)
    } else {
      reject()
    }
  })
}
