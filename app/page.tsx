import { Button, Badge, Divider } from "@ui";

export default function Home() {
  return (
    <>
      <Button variant="primary" size="small">
        Submit
      </Button>
      <Badge variant="new" label="New" />
      <Divider orientation="horizontal" />
    </>
  );
}
