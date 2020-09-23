import * as React from 'react';
import { toSlug } from '@thefakeorg/utils';

export interface SlugProps {
  message: string;
}

export function Slug(props: SlugProps) {
  return <>{toSlug(props.message)}</>;
}
