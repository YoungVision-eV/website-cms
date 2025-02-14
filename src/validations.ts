export function require_if_slug(value: string, options) {
  if (options.data.slug && !value) {
    return 'Dieses Feld ist erfordelich für die Eventseite.';
  } else {
    return true;
  }
}
