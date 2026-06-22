/**
 * Renders a JSON-LD <script> tag. Plain JSON.stringify — no Node APIs,
 * Edge Runtime safe.
 */
export default function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
