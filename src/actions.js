export { ADDFEATURE, REMOVEFEATURE, UPDATETOTAL  }  //Import these to the reducer


const ADDFEATURE = 'ADDFEATURE' = feature => {return {type : ADDFEATURE, payload: feature}; }
const REMOVEFEATURE = 'REMOVEFEATURE' = feature => {return {type : REMOVEFEATURE, payload: feature}; }
const UPDATETOTAL = 'UPDATETOTAL' = feature => {return {type : UPDATETOTAL, payload: feature}; }

