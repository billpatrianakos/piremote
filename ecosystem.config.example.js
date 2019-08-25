module.exports = {
  apps : [{
    name: 'PiRemote',
    script: 'server/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '256M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 8080
    }
  }],

  deploy : {
    production : {
      user : 'pi',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'export PATH=$PATH:/home/pi/.nvm/versions/node/v12.8.1/bin/ && npm install && pm2 reload ecosystem.config.js --env production && NODE_ENV=production knex migrate:latest'
    }
  }
};
