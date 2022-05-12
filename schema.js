var { buildSchema } = require('graphql');
 const schema = buildSchema(`
 type Course{
     id:ID
     courseName:String
     category: String
     price:Int
     language: String
     email: String
     stack:Stack
     teachingAssists:[TeachingAssist]!
 }
   type TeachingAssist{
       firstName:String
       lastName:String
       exprience:Int
   }
   enum Stack{
       WEB
       MOBILE
       OTHER
   }
   type Query{
       getCourse(id:ID):Course

   }

   input CourseInput{
    id:ID
    courseName:String!
    category: String
    price:Int!
    language: String
    email: String
    stack:Stack 
    teachingAssists:[TeachingAssistInput]!
}
   
 input TeachingAssistInput{
    firstName:String
    lastName:String
    exprience:Int
}


  type Mutation{
      createCourse(input:CourseInput):Course

  }
 `)

 module.exports = schema
