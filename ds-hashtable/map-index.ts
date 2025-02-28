export type Document = {
  title: string;
  content: string;
};

export type DocumentIndex = Map<string, Set<Document>>;

/**
 * Builds a DocumentIndex from a list of Documents.
 * The index's keys are the words in all the documents,
 * and the values are the documents the word appears in.
 */
export function buildIndex(docs: Document[]): DocumentIndex {
  const index: DocumentIndex = new Map();

  docs.forEach((doc) => {
    const words = doc.content.toLocaleLowerCase().match(/\b(\w+)\b/g);

    words?.forEach((word) => {
      const wordSet = index.get(word);

      if (wordSet) wordSet.add(doc);
      else index.set(word, new Set<Document>([doc]));
    });
  });
  return index;
}
