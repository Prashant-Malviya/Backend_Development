const name = 'Prashant'
// const name2 = 'Malviya'
// const name3 = 'Gopal'

export const name2 = 'Malviya'
export const name3 = 'Gopal'

export const generateId = ()=>{
    return `${~~(Math.random()*100)}%` // Math.floor() or ~~ work same
}


// module.exports = name;

export default name;
// export {name2, name3}; // if not want export like this then you can export like above as well