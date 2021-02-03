#!/usr/bin/env node

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data) {
  //console.log('converting AWS json to environment credentials ');
  const credentials = JSON.parse(data).Credentials;

  //console.log(`AWS_ACCESS_KEY_ID="${credentials.AccessKeyId}" && `)

  
  if (credentials) {
      //console.log("\nCopy these in command line:")
      console.log(`export AWS_ACCESS_KEY_ID="${credentials.AccessKeyId}"`)
      console.log(`export AWS_SECRET_ACCESS_KEY="${credentials.SecretAccessKey}"`)
      console.log(`export AWS_SESSION_TOKEN="${credentials.SessionToken}"`)
      console.log(`export AWS_CREDENTIAL_EXPIRATION="${credentials.Expiration}"`)
      /*console.log("\nCopy these to ~/.aws/credentials")
      console.log(`aws_access_key_id     = ${credentials.AccessKeyId}`)
      console.log(`aws_secret_access_key =  ${credentials.SecretAccessKey}`)
      console.log(`aws_session_token     = ${credentials.SessionToken}`)
      console.log(`aws_credential_expiration = ${credentials.Expiration}`)
      console.log("\nTERRAFORM")
      console.log(`access_key     = "${credentials.AccessKeyId}"`)
      console.log(`secret_key =  "${credentials.SecretAccessKey}"`)
      console.log(`session_token     = "${credentials.SessionToken}"`)*/

  }
  else console.log(`No credentials returns ${data}`);
 

})
