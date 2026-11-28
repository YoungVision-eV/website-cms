'use client';

import { useField } from '@payloadcms/ui';

export const SlugDescription = () => {
  const { value } = useField<string>();

  return (
    <span>
      {value
        ? `Eventseite erreichbar unter: https://youngvision.org/events/${value} Entferne den slug um keine Eventseite zu generieren.`
        : 'Es wird keine Eventseite erstellt, weil der slug leer ist.'}
    </span>
  );
};
