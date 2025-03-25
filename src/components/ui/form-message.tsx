export type Message = { success: string } | { error: string };

export function FormMessage({ message }: { message: Message }) {
  if ("success" in message) {
    return (
      <div className="text-foreground bg-foreground/10 rounded-sm px-4 py-3 text-center">
        {message.success}
      </div>
    );
  }

  if ("error" in message) {
    return (
      <div className="text-destructive bg-destructive/10 rounded-sm px-4 py-3 text-center">
        {message.error}
      </div>
    );
  }

  return null;
}
