import fastify from "fastify";

import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";

import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod"
import { createEvent } from "./routes/create-event";
import { registerForEvent } from "./routes/register-for-event";
import { getEvent } from "./routes/get-event";
import { getAttendeeBadge } from "./routes/get-attendee-badge";
import { checkIn } from "./routes/check-in";
import { getEventAttendees } from "./routes/get-event-attendees";
import { erroHandler } from "./error-handler";




const app = fastify()

app.register(fastifyCors,{
    origin: '*',// http://meufrontend.com.br
})

app.register(fastifySwagger,{
    swagger: {
        consumes: ['application/json'],
        produces: ['application/json'],
        info: {
            title: "pass.in",
            description: "Especificações da API para o back-end da aplicação pass.in",
            version: "1.0.0"
        },
    },
    transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
    routePrefix: '/docs'
})

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getAttendeeBadge)
app.register(checkIn)
app.register(getEventAttendees)


app.setErrorHandler(erroHandler)


app.listen({port: 3333, host:'0.0.0.0' }).then(() => {
    console.log("HTTP Server running")
})