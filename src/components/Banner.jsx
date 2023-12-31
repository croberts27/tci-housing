import {
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

function Banner() {
  return (
    <div className="flex items-start justify-start gap-x-6 bg-hoops-background px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex gap-x-2 items-center">
        <ClockIcon className="h-6 w-4 text-md text-white" aria-hidden="true" />
        <p className="text-md leading-6 text-white">
          9:00 a.m. – 5:00 p.m. MST
        </p>
      </div>
      <div className="flex gap-x-4 items-center">
        <span className="text-md sr-only">Telephone</span>
        <PhoneIcon className="h-6 w-4 text-white" aria-hidden="true" />
        <a className="text-white" href="tel:+1 (801) 432-8050">
          +1 (801) 432-8050
        </a>
      </div>
      <div className="flex gap-x-4 items-center">
        <span className="sr-only">Email</span>
        <EnvelopeIcon
          className="h-6 w-4 text-md text-white"
          aria-hidden="true"
        />
        <a className="text-white" href="mailto:info@tcihousing.com">
          info@tcihousing.com
        </a>
      </div>
    </div>
  );
}

export default Banner;
