import { APIGatewayProxyEventV2, APIGatewayProxyResult } from 'aws-lambda'; 
import { app } from './http/server'; // Fastify configurado
import type { HTTPMethods, InjectOptions } from 'fastify';

export const handler = async (
  event: any,
  context: any
): Promise<any> => {

  console.log(event)

  const result = await app.inject({
    method: event.method, // HTTP Method do evento
    url: event.url,                       // Caminho da URL da requisição
    query: event.query,       // Parâmetros de query
    payload: event.body,                      // Corpo da requisição
    headers: event.headers,        
    path: event.path           // Cabeçalhos
  });

  // Retorna no formato que a API Gateway espera
  return {
    statusCode: result.statusCode,
    headers: result.headers,
    body: result.body,
  };
};