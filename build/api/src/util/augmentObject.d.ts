/**
 * Takes a decorated api section (e.g. api.tx) and augment it with the details. It does not override what is
 * already available, but rather just adds new missing ites into the result object.
 * @internal
 */
export default function augmentObject(prefix: string, src: Record<string, Record<string, any>>, dst: Record<string, Record<string, any>>, fromEmpty?: boolean): Record<string, Record<string, any>>;
