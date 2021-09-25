import { FastifyRequest, FastifyReply } from 'fastify'
import { promises } from 'fs'
import { resolve } from 'path'

const { readFile } = promises

export default class MainController {

  static async get(_request: FastifyRequest, reply: FastifyReply) {
    return reply.send({ data: { test: 'test' } })
  }
}
