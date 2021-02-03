#!/usr/bin/env node

// Format 

/*
{
    "Credentials": {
        "AccessKeyId": "ASIAZIB3V4IZWJ3DSTNE",
        "SecretAccessKey": "LJcSvZ6p8yYgcmIjx4zAN6X2vixuUntLKU1pIql8",
        "SessionToken": "IQoJb3JpZ2luX2VjEIn//////////wEaCXVzLWVhc3QtMSJIMEYCIQCYBzF+tlNpY+aYMYR44hbRRYZNcwfs5YHVhMZumbqa3wIhAN1Wbs2gvD0H7NU0Ry2suz/YEUkDuHFPOZbU93LenXrPKqwCCKH//////////wEQARoMNjM1NzgwMzI1OTM5Igx8j+tXN6HepltPYlsqgAIEx8Ubp/6k7yr79bkMai4/W0ypOLkpts8vN0E355T5pjmqUFbz6rPDj/JLGBFgnZCGDCH1niLYTgdDLwiGmrcWQQxkeDYU+igAFvdrSxZA7sH1ADIPgM9+6D8kOC07FSR00mNACxFMoDPgjHCegzz6KvS3ShKpKWl24Q8UqbTjwM57WVNoeWqO/FDUIliv6EnaTIt1y/tadLM19nGbmEaNs9I0IhcNp7rXbYda8kocQTTJtQjurEYGyzZKrP147ic+BguqaqT56PueeEBD4hEbXfm85Qle8iORE4WgxyfBtimCep6TdB3X/fWtzpzpX5bs4jto3Z3YZYZCep54n3sZMN6HrPsFOpwBy9qCEcd6nD8UVkteBga3i2QDnQBjOAtWer5g76nl+3zwn4UhwVBjChB9KPVLoL1dB7NWrPljHKGvKe6RCVKeBCZFuxx4Ahz7EmK01K6AAy1muWxCKx23syJEudIt8DTRSmzvZ/n6YeEannBL+5qIP1Tf+Uvj/cE9EsD3mJD8tQhTO6OHo3o0L685PG3qsYabdyjLgo8AQmOSPQiZ",
        "Expiration": "2020-09-23T09:14:22Z"
    },
    "AssumedRoleUser": {
        "AssumedRoleId": "AROAZIB3V4IZQOJXLT7QE:orchestrataion-session",
        "Arn": "arn:aws:sts::635780325939:assumed-role/JenkinsTerraformOrchestrationRole/orchestrataion-session"
    }
}

aws_access_key_id        = ASIAZIB3V4IZXDWTJGIF
aws_secret_access_key    = KnKKt2cH0c9cCuUoqf+E4nVLXLYpiNE7YMJZghjo
aws_session_token        = IQoJb3JpZ2luX2VjEHEaCXVzLWVhc3QtMSJHMEUCICKkVprlDYLYNL6EKwPiBqRo99LlZttK3oNlVpk8Wtk9AiEAp9vJTCHB6fS7np/QuiKSCOIihnQ1MgaK73weRYxD8JgqlgMIiv//////////ARABGgw2MzU3ODAzMjU5MzkiDOTTkVy5jIwey9HuqCrqAkB2oinbawC3xnIExRY6EIhMCD+5tl+DksFzH6Kte62D/gLnE+31iNN/NnK6Y5ITDnjAEeUewMBQCBRT+rV8S4J+31EIApq+gPsu3fm3h6OhSS7tMhxW6AyeeS94+HrprGqRvY7v7cwHttwf/GSBQ++ILJ6a/YRlqgGFEfL4I8SzS7LVGid65m+Ry8/LUTGTf9va2D8nUJa6gKAvUGq3uW+OY7If2BZvtt/nINuA5RW4Nzid1ZEWFlkVCpRlUuS3ZfhPdYZF55cNWKjXYvP1t8MJbOTTPFiZeV9Gk9DUS9fIj7IsOaF/YpOU4PvPaP4IgqeQ5e7jnzsdOGTa/fybN0We5cYG/U65Z7hhW05Smn6rngp39NoqexLqQfQQ1zaP+JXs+hCssZPl6YpC6UWjhuTzR5FU2GJBnBdFFyn3AKK7i95IpTiP1J5xiOeU5rDGSXpKLGqm+3gITBuUMle/GuBxg1GOsgZw248NMPLvpvsFOpoB9WU6kd5o2pdzvt1n2iu59fmOpV9QGzFU049S4SLGvnaz02JLIAQQtqy4ub5IxrxGa3y3WKo7gNTGzhrIvX+US0QXdKDWFlCI9+PmKuPDQY4ZlUGGgOiIa0xZCC/nqeP0sb+jro8Lw1SgmotCaxWXn5q7Mq38yra0YYVMQw5Xh8e9+3coAeI3ecJl8rMrR5Mr1G1btGhb6L/DZQ==
aws_security_token       = IQoJb3JpZ2luX2VjEHEaCXVzLWVhc3QtMSJHMEUCICKkVprlDYLYNL6EKwPiBqRo99LlZttK3oNlVpk8Wtk9AiEAp9vJTCHB6fS7np/QuiKSCOIihnQ1MgaK73weRYxD8JgqlgMIiv//////////ARABGgw2MzU3ODAzMjU5MzkiDOTTkVy5jIwey9HuqCrqAkB2oinbawC3xnIExRY6EIhMCD+5tl+DksFzH6Kte62D/gLnE+31iNN/NnK6Y5ITDnjAEeUewMBQCBRT+rV8S4J+31EIApq+gPsu3fm3h6OhSS7tMhxW6AyeeS94+HrprGqRvY7v7cwHttwf/GSBQ++ILJ6a/YRlqgGFEfL4I8SzS7LVGid65m+Ry8/LUTGTf9va2D8nUJa6gKAvUGq3uW+OY7If2BZvtt/nINuA5RW4Nzid1ZEWFlkVCpRlUuS3ZfhPdYZF55cNWKjXYvP1t8MJbOTTPFiZeV9Gk9DUS9fIj7IsOaF/YpOU4PvPaP4IgqeQ5e7jnzsdOGTa/fybN0We5cYG/U65Z7hhW05Smn6rngp39NoqexLqQfQQ1zaP+JXs+hCssZPl6YpC6UWjhuTzR5FU2GJBnBdFFyn3AKK7i95IpTiP1J5xiOeU5rDGSXpKLGqm+3gITBuUMle/GuBxg1GOsgZw248NMPLvpvsFOpoB9WU6kd5o2pdzvt1n2iu59fmOpV9QGzFU049S4SLGvnaz02JLIAQQtqy4ub5IxrxGa3y3WKo7gNTGzhrIvX+US0QXdKDWFlCI9+PmKuPDQY4ZlUGGgOiIa0xZCC/nqeP0sb+jro8Lw1SgmotCaxWXn5q7Mq38yra0YYVMQw5Xh8e9+3coAeI3ecJl8rMrR5Mr1G1btGhb6L/DZQ==
x_principal_arn          = arn:aws:sts::635780325939:assumed-role/engineering/jordan.rancie@tractable.ai
x_security_token_expires = 2020-09-22T17:24:50+01:00
region                   =
*/

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
