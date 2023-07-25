import Chance from "chance";

const chance = Chance()

export  const fakeUserData=()=>{
    // console.log(chance.name({middle:true}))
    const newUserData = {
        name:chance.name({middle:true}),
        age:chance.age({type: 'child'}),
        birth:chance.birthday({string: true, american: false}),
        gender:  chance.gender(),
        address:chance.address(),
        pic:chance.avatar({protocol: 'https',fileExtension: 'jpg'}),
        country:chance.country({ full: true }),
        phone:chance.phone({ country: "fr" })

    }
    return newUserData
}