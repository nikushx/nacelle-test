import React, { Fragment } from 'react';

import $nacelle from 'services/nacelle';
import ContentSections from 'components/ContentSections';
import ProductGallery from 'components/ProductGallery';

export default function CustomPageExample({ page }) {
  console.log(page);
  return (
    <Fragment>
      {page && <ContentSections sections={page.sections} />}
    </Fragment>
  );
}

export async function getStaticProps() {
  try {
    const page = await $nacelle.data.page({ handle: 'custom-page-example' });
    return {
      props: { page }
    };
  } catch (err) {
    console.error(`Error fetching products on homepage:\n${err}`);
  }
}
