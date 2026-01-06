export async function redirectSystemPath({
  path,
  initial,
}: {
  path: string;
  initial: boolean;
}) {
  console.log("redirectSystemPath", path);

  if (!initial) {
    alert("Oh you finally come back?");
  }

  return path;
}
