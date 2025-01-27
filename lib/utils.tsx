export const selectRandomIDs = (objectIDs: number[], selection: number) => {
    const total = objectIDs.length
  
    let IDs = []
  
    while (IDs.length < 10) {
      let randomID = Math.floor(Math.random() * total)
      IDs.push(objectIDs[randomID])
    }
  
    return IDs
  }
  