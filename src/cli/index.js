const cli = async (proc = process) => {
 let oProc
 
 try {
   oProc = await proc

   await console.log(oProc)

   return oProc	
 }
 catch(err) {
   throw err
 }
}


export {
  cli
}
