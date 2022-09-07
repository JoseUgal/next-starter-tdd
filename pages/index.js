// Next Utils
import Head from 'next/head'

// Translations
import { useI18N } from '@/contexts/i18n'

export default function Home () {
  const { t } = useI18N()

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        {t('WELCOME_TO', 'NextJS + TailwindCSS (TDD)')}
      </h1>
    </div>
  )
}
