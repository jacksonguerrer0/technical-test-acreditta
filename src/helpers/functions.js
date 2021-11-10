// Al ser tan pocos datos vale la pena hacerlo de manera manual

// El objetivo de está funcion es ordenar las keys de los objetos y luego renderizarlo tal cual como está en el objeto
export const habilitiesOrder = (habilities, typeOrder) => {
  let order = getOrder(habilities)
  if(typeOrder){
    return (
      order.map((ele, i) => {
        return ( 
          <div key={i}>
          <p>{ele}: {habilities[ele]}.</p>
          </div>
        )
      })
    )
  }else{
    let reverseOrder = order.reverse()
    return (
      reverseOrder.map((ele, i) => {
        return (
          <div key={i}>
          <p>{ele}: {habilities[ele]}.</p>
          </div>
        )
      })
    )
  }
}

const getOrder = (data) => {
  const keys = Object.keys(data)
  return keys.sort()
}


// Formato de height y width establecido

export const getFormaterHero = (listHeroData) => {
  let listHero = []
  listHeroData.forEach(ele => {
    listHero.push({...ele, 
      appearance: {
        ...ele.appearance,
        height: ele.appearance.height[1],
        weight: ele.appearance.weight[1]

      },
    })
  })
  return listHero
}