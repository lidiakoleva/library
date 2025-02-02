import BookInfo from "@/app/components/book/info";

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const bookId = (await params).id;

  return <BookInfo bookId={bookId} />;
}
