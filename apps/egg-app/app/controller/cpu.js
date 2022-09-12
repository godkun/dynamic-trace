'use strict';

const Controller = require('egg').Controller;

const fs = require('fs');

async function read() {
  const data = await fs.readFileSync(__dirname + '/home.js', 'utf-8');
  if (data) read();
}

class CpuController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'cpu will be 90%';
    read();
  }
}

module.exports = CpuController;
