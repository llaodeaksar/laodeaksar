import type { NextPage } from 'next'
import { Button,Grid } from 'design-system'
import Layout from '@theme/layout';

const Home: NextPage = () => {
  return (
    <Layout /*footer header headerProps={{ offsetHeight: 256 }}*/>
      <Grid columns="medium" gapX={4} gapY={12} all>
        <Button variant='primary'>Test</Button>
      </Grid>
    </Layout>
  )
}

export default Home
