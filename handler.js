"use strict";

import {DynamoDB} from 'aws-sdk'; 
const dynamoDB = new DinamoDB.DocumentClient();

module.exports.saveTodo = async (event) => {

  const requestBody = JSON.parse(event.body);
  const {todoTitle, todoDesc, dueDate} = requestBody;

  console.log(`${todoTitle}: ${todoDesc} ------> ${dueDate}`);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v2.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
