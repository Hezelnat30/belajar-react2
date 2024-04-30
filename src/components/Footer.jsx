export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto text-center text-white">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Resto Hezelnat. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Designed and developed by Justin Hezelnat
        </p>
      </div>
    </footer>
  );
}
