import { Button, Badge, Divider, Text, InlineTip } from "@ui";

export default function Home() {
  return (
    <>
      <Button variant="primary" size="small">
        Submit
      </Button>
      <Badge variant="new" label="New" />
      <Divider orientation="horizontal" />
      <Text>Test Text</Text>
      <InlineTip>Inline tip</InlineTip>
    </>
  );
}
