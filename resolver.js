var { nanoid } = require("nanoid");
class Course{
    constructor(id,{
        couseName,category,price,language,email,stack,teachingAssists
    }){
        this.id=id
        this.couseName=couseName
        this.category=category
        this.price=price
        this.language=language
        this.email=email
        this.stack=stack
        this.teachingAssists=teachingAssists
    }
}

const couseholder={


}

const resolvers={
    getCourse:({id})=>{
        return new Course(id,couseholder[id])
    },
    createCourse:({input})=>{
        let id =nanoid()
        couseholder[id]=input
        return new Course(id,input)
    }
}
module.exports =resolvers;