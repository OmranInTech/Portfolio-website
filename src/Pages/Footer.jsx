const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <center>
        <hr className="border-gray-400 opacity-15 mx-auto my-0" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © {currentYear} Omran Ahmadzai | All Rights Reserved
        </span>
      </center>
    </footer>
  );
};

export default Footer;