export default function Footer() {
  return (
    <footer className="bg-black text-gray-off-white w-full py-12">
      <div className="container mx-auto flex flex-col px-6">
        {/* Top links */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="flex flex-wrap gap-x-24 gap-y-12 font-blender text-xl uppercase lg:text-sm">
            <a
              href="/contact"
              className="hover:text-gray-tradfi-silver relative text-white"
            >
              <span className="sr-only">Contact</span>Contact
            </a>
            <a
              href="/company/careers"
              className="hover:text-gray-tradfi-silver relative text-white"
            >
              <span className="sr-only">Careers</span>Careers
            </a>
            <a
              href="/events"
              className="hover:text-gray-tradfi-silver relative text-white"
            >
              <span className="sr-only">Events</span>Events
            </a>
          </div>

          <div className="hidden lg:flex gap-12">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@W_cryptoevents"
              className="hover:text-gray-tradfi-silver relative text-white"
            >
              <span className="sr-only">YouTube</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 41 40"
                className="w-6 h-6 fill-current"
              >
                <path d="M40.568 12s-.39-2.758-1.593-3.969c-1.524-1.593-3.227-1.601-4.008-1.695-5.594-.406-13.992-.406-13.992-.406h-.016s-8.399 0-13.992.406c-.782.094-2.485.102-4.008 1.695-1.203 1.211-1.586 3.97-1.586 3.97s-.406 3.241-.406 6.476v3.03c0 3.235.398 6.477.398 6.477s.39 2.758 1.586 3.97c1.523 1.593 3.524 1.538 4.414 1.71 3.203.305 13.602.399 13.602.399s8.406-.016 14-.414c.78-.094 2.484-.102 4.008-1.696 1.203-1.21 1.593-3.968 1.593-3.968s.399-3.235.399-6.477v-3.031c0-3.235-.399-6.477-.399-6.477M16.834 25.188V13.945l10.805 5.641z" />
              </svg>
            </a>
            {/* X */}
            <a
              href="https://x.com/wintermute_t"
              className="hover:text-gray-tradfi-silver relative text-white"
            >
              <span className="sr-only">X</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 41 40"
                className="w-6 h-6 fill-current"
              >
                <path d="M31.51 3.173h5.623l-12.284 14.04L39.3 36.315H27.985L19.123 24.73 8.983 36.316H3.357L16.496 21.3 2.633 3.173h11.602l8.01 10.59zm-1.973 29.778h3.116l-20.11-26.59H9.198z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/wintermute-trading"
              className="hover:text-gray-tradfi-silver relative text-white"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 41 40"
                className="w-6 h-6 fill-current"
              >
                <path d="M35.133 3.333H6.8a2.5 2.5 0 0 0-2.5 2.5v28.334a2.5 2.5 0 0 0 2.5 2.5h28.333a2.5 2.5 0 0 0 2.5-2.5V5.833a2.5 2.5 0 0 0-2.5-2.5M14.3 31.667h-5v-15h5zM11.8 13.75a2.916 2.916 0 1 1 3-2.917 2.967 2.967 0 0 1-3 2.917m20.833 17.917h-5v-7.9c0-2.367-1-3.217-2.3-3.217a2.9 2.9 0 0 0-2.7 3.1 1 1 0 0 0 0 .233v7.784h-5v-15h4.834v2.166a5.18 5.18 0 0 1 4.5-2.333c2.583 0 5.6 1.433 5.6 6.1z" />
              </svg>
            </a>
          </div>
        </div>

        <hr className="border-white my-6" />

        {/* Legal info */}
        <div className="flex flex-col gap-4 text-xs text-gray-400">
          <p>
            Wintermute Trading Ltd., a company registered in England & Wales
            (Company No. 10882520), is registered with the UK Financial Conduct
            Authority for its cryptoasset activities under the Money Laundering,
            Terrorist Financing and Transfer for Funds (Information on the
            Payer) Regulations 2017 as amended (FRN:928764). Wintermute Asia
            Pte. Ltd. is incorporated in Singapore (Company No. 202108542H), and
            primarily trades certain derivatives referencing cryptoassets.
          </p>
          <p>
            Each Wintermute Entity trades for its own account and with assets
            (including digital assets) that belong to it. Neither Wintermute
            Entity engages in the management, custody or holding of any assets,
            including cryptoassets or fiat currency, on behalf of investors or
            customers.
          </p>
          <p>
            No communication, whether verbal or written, by either of Wintermute
            Entities or by any persons on behalf of Wintermute Entities is
            intended to establish a customer relationship with or a provision of
            services by either Wintermute Entity.
          </p>
          <p>
            Neither Wintermute Entity provides any warranty, whether express or
            implied, as to any results, including, but not limited to, in
            relation to prices and the timing, speed or likelihood of any
            transactions with Wintermute.
          </p>
          <p>
            The material provided on this website is for information purposes
            only and does not constitute an offer or solicitation for the
            purchase of any cryptoassets or financial instruments referencing
            cryptoassets.
          </p>
        </div>

        {/* Bottom links */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-400 justify-center lg:justify-end mt-6">
          <a
            href="/privacy-policy"
            className="hover:text-gray-tradfi-silver relative"
          >
            Privacy Policy
          </a>
          <a
            href="/cookies-policy"
            className="hover:text-gray-tradfi-silver relative"
          >
            Cookies Policy
          </a>
          <a
            href="/modern-slavery-statement"
            className="hover:text-gray-tradfi-silver relative"
          >
            Modern Slavery Statement
          </a>
        </div>
      </div>
    </footer>
  );
}
