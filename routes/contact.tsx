import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mail.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconBrandXing from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-xing.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-linkedin.tsx";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:cbdefontenay@gmail.com";
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-blue-800 flex flex-col items-center">
        <h1 className="uppercase font-bold text-2xl mt-10">
          Contact informations:
        </h1>

        <div className="mt-10 flex flex-row">
          <IconMail className="w-6 h-6" />
          <a
            className="ml-2"
            href="mailto:cbdefontenay@gmail.com"
            onClick={handleEmailClick}
          >
            cbdefontenay@gmail.com
          </a>
        </div>

        <div className="text-blue-800 flex flex-col items-center mt-12">
          <h1 className="uppercase font-bold text-2xl">
            Social medias:
          </h1>

          <div className="mt-10 flex flex-row">
            <div className="flex flex-col items-center">
              <span className="">GitHub:</span>
              <a
                href="https://github.com/cbdefontenay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub className="w-10 h-10 mt-3" />
              </a>
            </div>

            <div className="flex flex-col items-center ml-6">
              <span>LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/cyprien-bourdeau-de-fontenay-28a867220/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin className="w-10 h-10 mt-3" />
              </a>
            </div>

            <div className="flex flex-col items-center ml-6">
              <span>Xing:</span>
              <a
                href="https://www.xing.com/profile/Cyprien_BourdeaudeFontenay/cv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandXing class="mt-3 w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
