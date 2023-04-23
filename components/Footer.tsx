const Footer = () => {
  return (
    <footer className="bg-blue-200 shadow p-4 absolute bottom-0 w-full">
      <div className="flex flex-col container mx-auto text-center">
        <span className="text-blue-800 uppercase font-bold">
          <a href="/contact">Contact</a>
        </span>
        <span className="text-blue-800 uppercase mt-2">
          <a
            href="https://deno.land/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Deno
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
