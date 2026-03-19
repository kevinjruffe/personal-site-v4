type Props = {
  tags: string[];
};

export default function TagsList({ tags }: Props) {
  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag}>
          <a href={`/tags/${tag}/`}>{tag}</a>
        </li>
      ))}
    </ul>
  );
}
