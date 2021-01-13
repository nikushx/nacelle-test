import React, { Fragment } from 'react';

import $nacelle from 'services/nacelle';
import ContentSections from 'components/ContentSections';

export default function Home({ page }) {
  return (
    <Fragment>
      <ContentSections sections={page.sections} />
    </Fragment>
  );
}

export async function getStaticProps() {
  try {
	// needs homepage made on Contentful to import to Nacelle
    const page = await $nacelle.data.page({ handle: 'homepage' });

    return {
      props: { page }
    };
  } catch (err) {
    console.error(`Error fetching data on page::homepage:\n${err}`);
  }
}
