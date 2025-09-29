export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-400">
      <abbr title="Copyright">©</abbr>{" "}
      <time dateTime={year.toString()}>{year}</time> Keesey Comics. All rights
      reserved.
    </footer>
  )
}
