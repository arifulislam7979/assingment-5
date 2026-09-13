import image from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8 text-[#64748B]">
      <div className="container mx-auto px-4">
        <div className="flex md:hidden flex-col items-center text-center space-y-4 pb-8">
          <img src={image} alt="DevStack Logo" className="h-8" />

          <p className="text-xs max-w-xs leading-relaxed text-[#64748B]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="flex items-center gap-3 text-xs font-medium text-[#475569] pt-1">
            <a href="#" className="hover:text-[#0F172A] transition"> GitHub</a>

            <span>•</span> <a href="#" className="hover:text-[#0F172A] transition"> Twitter </a>
            
            <span>•</span> <a href="#" className="hover:text-[#0F172A] transition"> LinkedIn </a>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-5 gap-8 pb-12">
          <div className="col-span-2 space-y-4">
            <img src={image} alt="DevStack Logo" className="h-8" />
            <p className="text-sm max-w-sm leading-relaxed text-[#64748B]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-xs font-semibold text-[#0F172A] hover:text-[#D91B7E] transition"> GitHub </a>

              <a href="#" className="text-xs font-semibold text-[#0F172A] hover:text-[#D91B7E] transition" > Twitter</a>

              <a href="#" className="text-xs font-semibold text-[#0F172A] hover:text-[#D91B7E] transition"> LinkedIn</a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold text-[#0F172A] mb-4">PRODUCT</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-[#0F172A] transition"> Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0F172A] transition"> Technologies</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0F172A] transition"> Projects</a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold text-[#0F172A] mb-4">COMPANY</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-[#0F172A] transition"> About </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0F172A] transition"> Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0F172A] transition"> Careers</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-bold text-[#0F172A] mb-4">LEGAL</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-[#0F172A] transition">  Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0F172A] transition"> Terms of Service </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-6 flex flex-row justify-between items-center text-[11px] sm:text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-gray-600 transition">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
