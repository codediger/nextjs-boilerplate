import React from 'react'
import Head from 'next/head'

import style from '../styles/index.scss'

export default () =>
  <div>
    <Head>
      <title>Next.js Boilerplate</title>
      <meta http-equiv="X-UA-Compatible" content="IE=7" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </Head>
    <body>
      <p>Next.js Boilerplate</p>
    </body>
  </div>
